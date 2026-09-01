import { EmailMessage } from "cloudflare:email";

const MAX_BODY_BYTES = 20_000;
const MAX_NAME_LENGTH = 120;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 5_000;

function jsonResponse(body, status, origin) {
  const headers = new Headers({
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
    "X-Content-Type-Options": "nosniff",
  });

  if (origin) {
    headers.set("Access-Control-Allow-Origin", origin);
    headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
    headers.set("Access-Control-Allow-Headers", "Content-Type");
    headers.set("Access-Control-Max-Age", "86400");
    headers.set("Vary", "Origin");
  }

  return new Response(status === 204 ? null : JSON.stringify(body), {
    status,
    headers,
  });
}

function normalizeOrigins(value) {
  return new Set(
    String(value || "")
      .split(",")
      .map((origin) => origin.trim())
      .filter(Boolean),
  );
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function sanitizeHeader(value) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

function buildMessage({ sender, recipient, name, email, message, pageUrl }) {
  const safeName = sanitizeHeader(name);
  const safeEmail = sanitizeHeader(email);
  const subject = "Nova sprava z Varixy Poradenstvo";
  const body = [
    "Nová správa z kontaktného formulára",
    "",
    `Meno: ${safeName}`,
    `E-mail: ${safeEmail}`,
    `Stránka: ${pageUrl}`,
    "",
    "Správa:",
    message,
  ].join("\r\n");

  const raw = [
    `From: Varixy Poradenstvo <${sender}>`,
    `To: ${recipient}`,
    `Reply-To: ${safeEmail}`,
    `Subject: ${subject}`,
    "MIME-Version: 1.0",
    'Content-Type: text/plain; charset="UTF-8"',
    "Content-Transfer-Encoding: 8bit",
    "",
    body,
  ].join("\r\n");

  return new EmailMessage(sender, recipient, raw);
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const origin = request.headers.get("Origin") || "";
    const allowedOrigins = normalizeOrigins(env.ALLOWED_ORIGINS);
    const allowedOrigin = allowedOrigins.has(origin) ? origin : "";

    if (url.pathname !== "/api/contact") {
      return jsonResponse({ error: "Not found" }, 404, allowedOrigin);
    }

    if (!allowedOrigin) {
      return jsonResponse({ error: "Origin not allowed" }, 403, "");
    }

    if (request.method === "OPTIONS") {
      return jsonResponse({}, 204, allowedOrigin);
    }

    if (request.method !== "POST") {
      return jsonResponse({ error: "Method not allowed" }, 405, allowedOrigin);
    }

    const contentType = request.headers.get("Content-Type") || "";
    if (!contentType.toLowerCase().startsWith("application/json")) {
      return jsonResponse({ error: "Content-Type must be application/json" }, 415, allowedOrigin);
    }

    const contentLength = Number(request.headers.get("Content-Length") || 0);
    if (contentLength > MAX_BODY_BYTES) {
      return jsonResponse({ error: "Request is too large" }, 413, allowedOrigin);
    }

    const ip = request.headers.get("CF-Connecting-IP") || "unknown";
    const rateLimit = await env.CONTACT_RATE_LIMITER.limit({ key: ip });
    if (!rateLimit.success) {
      return jsonResponse(
        { error: "Príliš veľa pokusov. Skúste to znova o chvíľu." },
        429,
        allowedOrigin,
      );
    }

    let payload;
    try {
      const rawBody = await request.text();
      if (new TextEncoder().encode(rawBody).byteLength > MAX_BODY_BYTES) {
        return jsonResponse({ error: "Request is too large" }, 413, allowedOrigin);
      }
      payload = JSON.parse(rawBody);
    } catch {
      return jsonResponse({ error: "Invalid JSON" }, 400, allowedOrigin);
    }

    const data = payload?.data || {};
    const name = String(data.meno || "").trim();
    const email = String(data.email || "").trim();
    const message = String(data.sprava || "").trim();
    const honeypot = String(data.website || "").trim();
    const pageUrl = String(payload?.pageUrl || "").trim();

    if (honeypot) {
      return jsonResponse({ ok: true }, 200, allowedOrigin);
    }

    if (!name || name.length > MAX_NAME_LENGTH) {
      return jsonResponse({ error: "Skontrolujte meno." }, 400, allowedOrigin);
    }

    if (!email || email.length > MAX_EMAIL_LENGTH || !isValidEmail(email)) {
      return jsonResponse({ error: "Skontrolujte e-mailovú adresu." }, 400, allowedOrigin);
    }

    if (!message || message.length > MAX_MESSAGE_LENGTH) {
      return jsonResponse({ error: "Správa je prázdna alebo príliš dlhá." }, 400, allowedOrigin);
    }

    let parsedPageUrl;
    try {
      parsedPageUrl = new URL(pageUrl);
    } catch {
      return jsonResponse({ error: "Invalid page URL" }, 400, allowedOrigin);
    }

    if (!allowedOrigins.has(parsedPageUrl.origin)) {
      return jsonResponse({ error: "Invalid page origin" }, 400, allowedOrigin);
    }

    try {
      const emailMessage = buildMessage({
        sender: env.SENDER_EMAIL,
        recipient: env.RECIPIENT_EMAIL,
        name,
        email,
        message,
        pageUrl: parsedPageUrl.toString(),
      });
      await env.EMAIL.send(emailMessage);
    } catch (error) {
      console.error("Contact email delivery failed", error);
      return jsonResponse(
        { error: "Správu sa nepodarilo odoslať. Skúste to znova neskôr." },
        502,
        allowedOrigin,
      );
    }

    return jsonResponse({ ok: true }, 200, allowedOrigin);
  },
};
