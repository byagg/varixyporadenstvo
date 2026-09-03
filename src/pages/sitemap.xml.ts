import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { TOPICS } from "../components/pages/odborne-zdroje/topics";

export const prerender = true;

const SITE_ORIGIN = "https://varixyporadenstvo.com";
const staticRouteModules = import.meta.glob("./*.astro", { eager: true });

function staticPaths(): string[] {
  return Object.keys(staticRouteModules)
    .map((file) => file.replace(/^\.\//, "").replace(/\.astro$/, ""))
    .filter((name) => !["404", "[...slug]"].includes(name))
    .map((name) => (name === "index" ? "/" : `/${name}`));
}

export const GET: APIRoute = async () => {
  const contentPaths = (await getCollection("pages"))
    .filter((entry) => !entry.data.draft)
    .map((entry) => `/${entry.id.replace(/\/index$/, "")}`);
  // Nested dynamic routes aren't covered by the top-level glob above, so the
  // odborne-zdroje topic pages are enumerated from their own source of truth.
  const topicPaths = TOPICS.map((topic) => `/odborne-zdroje/${topic.slug}`);
  const paths = [
    ...new Set([...staticPaths(), ...contentPaths, ...topicPaths]),
  ].sort();
  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...paths.map(
      (path) => `  <url><loc>${new URL(path, SITE_ORIGIN).href}</loc></url>`,
    ),
    "</urlset>",
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
