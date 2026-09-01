# Varixy Poradenstvo

Prenosný statický web pre `https://varixyporadenstvo.com`, vytvorený v Astro + React + Tailwind CSS. Projekt nevyžaduje Ploy, Hostinger Builder, serverový Astro runtime ani databázu.

## Požiadavky

- Node.js **22.12 alebo novší**
- npm **9.6.5 alebo novší**
- Python 3 (iba pre lokálny auditovací skript)

## Lokálne spustenie

```bash
npm install
npm run dev
```

Web bude dostupný na `http://localhost:3000`.

## Produkčný build

```bash
npm run build
```

Výstup sa vytvorí v adresári `dist/`. Projekt používa čistý statický Astro export a neobsahuje Pages Functions ani serverový adapter.

Po builde možno spustiť úplnú kontrolu:

```bash
python3 scripts/audit-static-build.py
```

Audit kontroluje 73 URL, title, meta description, canonical, Open Graph, H1, alt atribúty, interné odkazy, fragmenty a lokálne súbory. Zároveň obnoví `MIGRATION-MANIFEST.md`.

## Kontaktný formulár

Formulár používa verejnú build-time premennú:

```env
VITE_CONTACT_ENDPOINT=https://example-worker.example.workers.dev/api/contact
```

Táto hodnota **nie je tajný kľúč**; ide o verejnú URL endpointu. Tajomstvá, e-mailové API kľúče, databázové údaje a ochrana proti spamu musia zostať iba vo Worker prostredí.

Ak `VITE_CONTACT_ENDPOINT` nie je nastavený, formulár nič neodosiela a zobrazí jasnú chybu. Nepredstiera úspech.

Endpoint musí prijímať `POST` s `Content-Type: application/json` a payloadom:

```json
{
  "formName": "Kontaktný formulár",
  "pageUrl": "https://varixyporadenstvo.com/",
  "data": {
    "meno": "Meno používateľa",
    "email": "email@example.com",
    "sprava": "Text správy"
  }
}
```

Úspech musí vrátiť HTTP 2xx. Chyba musí vrátiť HTTP 4xx alebo 5xx. Pri samostatnej Worker doméne treba nastaviť CORS iba pre povolené originy.

## Nasadenie cez Cloudflare Pages

1. Nahrajte projekt do vlastného GitHub repozitára.
2. V Cloudflare otvorte **Workers & Pages → Create → Pages → Connect to Git**.
3. Vyberte repozitár a vetvu `main`.
4. Nastavte:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Node version: `22.12.0` alebo novšia
5. Ak je Worker formulára pripravený, pridajte build premennú `VITE_CONTACT_ENDPOINT`.
6. Najprv nasadzujte iba na `*.pages.dev` a vykonajte kontroly z `DEPLOY-CHECKLIST.md`.
7. Produkčnú doménu pripájajte až po úspešnom preview QA.

Cloudflare Pages automaticky obsluhuje vytvorené súbory `route.html` na extensionless URL `/route`, čím zostávajú zachované pôvodné adresy bez koncovej lomky.

Oficiálne návody:

- Astro na Cloudflare Pages: https://docs.astro.build/en/guides/deploy/cloudflare/
- Cloudflare Pages Git integrácia: https://developers.cloudflare.com/pages/get-started/git-integration/
- Custom domains: https://developers.cloudflare.com/pages/configuration/custom-domains/
- Redirect `www` na hlavnú doménu: https://developers.cloudflare.com/pages/how-to/www-redirect/

## Vlastná doména

Hlavná doména musí zostať:

```text
https://varixyporadenstvo.com
```

`www.varixyporadenstvo.com` nastavte cez Cloudflare Bulk Redirects ako permanentné presmerovanie na `https://varixyporadenstvo.com`, so zachovaním cesty a query stringu. DNS ani custom domain nemeňte pred úspešným preview auditom.

## GitHub — prvý push

Cieľový repozitár:

```text
https://github.com/byagg/varixyporadenstvo.git
```

V lokálnom adresári projektu skontrolujte, že necommitujete `.env` ani `dist/`, a potom nastavte vlastný remote:

```bash
git init
git add .
git commit -m "Prepare independent static Cloudflare Pages site"
git branch -M main
git remote remove origin 2>/dev/null || true
git remote add origin https://github.com/byagg/varixyporadenstvo.git
git push -u origin main
```

Pri HTTPS pushi použite prihlásenie cez GitHub CLI alebo Git Credential Manager. Nevkladajte osobný token do zdrojových súborov, `.env` ani histórie shellu.

## SEO a routy

- Produkčný origin je pevne nastavený na `https://varixyporadenstvo.com`.
- Sitemap: `/sitemap.xml`.
- Robots: `/robots.txt`.
- Canonical a Open Graph URL nepoužívajú `.html`, `pages.dev`, Ploy ani Hostinger.
- Zoznam všetkých indexovateľných URL a ich metadát je v `MIGRATION-MANIFEST.md`.

## Lokálne assets

Prenesené obrázky sú uložené v:

- `public/migrated-assets/`
- `public/external-assets/`

Google Maps zostávajú externými iframe embedmi, pretože nejde o obrazové súbory. Ostatné obrazové `src` referencie sú lokálne.

## Dôležité

- Tento repozitár nepripája ani nemení DNS.
- Build nič nepublikuje.
- `dist/` je generovaný výstup a necommitujte ho, ak Cloudflare buildí z GitHubu.
- Pred cutoverom aj po ňom postupujte podľa `DEPLOY-CHECKLIST.md`.
