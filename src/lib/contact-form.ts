export interface ContactFormData {
  meno: string;
  email: string;
  sprava: string;
}

export async function submitContactForm(data: ContactFormData): Promise<void> {
  const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT?.trim();

  if (!endpoint) {
    throw new Error(
      "Kontaktný formulár zatiaľ nie je pripojený k odosielacej službe.",
    );
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      formName: "Kontaktný formulár",
      pageUrl: window.location.href,
      data,
    }),
  });

  if (!response.ok) {
    throw new Error(
      `Správu sa nepodarilo odoslať (HTTP ${response.status}). Skúste to, prosím, znova.`,
    );
  }
}
