# Deploy Checklist — Cloudflare Pages

## 1. Pred prvým GitHub pushom

- [ ] `npm install` prebehne bez chyby.
- [ ] `npm run build` prebehne bez chyby.
- [ ] `python3 scripts/audit-static-build.py` skončí s `FAILURES=0`.
- [ ] `MIGRATION-MANIFEST.md` obsahuje 73 indexovateľných URL.
- [ ] `git status` neobsahuje `.env`, `dist/`, `node_modules/` ani tajné údaje.
- [ ] Všetky obrázky v `public/migrated-assets/` a `public/external-assets/` sú commitnuté.
- [ ] Cieľový GitHub repozitár je `byagg/varixyporadenstvo` a vetva `main`.

## 2. Cloudflare Pages preview

Nastavenia projektu:

- [ ] Framework: Astro.
- [ ] Build command: `npm run build`.
- [ ] Output directory: `dist`.
- [ ] Node.js: 22.12.0 alebo novší.
- [ ] Zatiaľ nepripájať produkčnú doménu.
- [ ] `VITE_CONTACT_ENDPOINT` ponechať prázdny, kým neexistuje otestovaný Worker endpoint.

Kontrola na `*.pages.dev`:

- [ ] Homepage a všetkých 73 URL sa načíta bez 404/5xx.
- [ ] Extensionless URL, napr. `/kontakt`, sa načíta bez pridania `.html`.
- [ ] Všetky interné odkazy a fragmenty fungujú.
- [ ] Lokálne obrázky a fonty odpovedajú 200.
- [ ] Google Maps sa vizuálne vykreslia.
- [ ] Kalkulačky a navigácia fungujú po kliknutí.
- [ ] Formulár bez endpointu zobrazí chybu a neukáže úspech.
- [ ] `robots.txt` a `sitemap.xml` odpovedajú 200.
- [ ] Sitemap obsahuje 73 URL pod `https://varixyporadenstvo.com`.
- [ ] Canonical, `og:url` a JSON-LD používajú `https://varixyporadenstvo.com`, nie `pages.dev`.
- [ ] Desktopový a mobilný screenshot sa zhodujú s aktuálnym webom.

Poznámka: preview má zámerne produkčné canonical URL. Do Google Search Console ho neposielajte.

## 3. Kontaktný Worker

- [ ] Endpoint beží cez HTTPS.
- [ ] Neobsahuje tajné kľúče v klientskom JavaScripte.
- [ ] Validuje meno, e-mail, správu a maximálnu veľkosť payloadu.
- [ ] Má rate limit a/alebo Cloudflare Turnstile.
- [ ] CORS povoľuje iba `https://varixyporadenstvo.com` a potrebný preview origin.
- [ ] Chyby vracajú HTTP 4xx/5xx; úspech vracia HTTP 2xx až po reálnom uložení/odoslaní.
- [ ] Testovacia správa je potvrdená v cieľovej databáze alebo e-maili.
- [ ] `VITE_CONTACT_ENDPOINT` je nastavený v Cloudflare Pages build variables.
- [ ] Po zmene premennej prebehol nový Pages deploy.

## 4. Bezprostredne pred DNS prepnutím

- [ ] Posledný commit na `main` má úspešný Cloudflare build.
- [ ] Preview QA prešlo na rovnakom commite.
- [ ] Zaznamenaná je aktuálna Hostinger DNS konfigurácia pre rollback.
- [ ] Hostinger web sa nemaže ani nevypína.
- [ ] Ploy web sa nemaže ani nevypína.
- [ ] Cloudflare Pages custom domain je pripravená pre `varixyporadenstvo.com`.
- [ ] Je pripravený permanentný Bulk Redirect z `www.varixyporadenstvo.com` na hlavnú doménu so zachovaním cesty a query stringu.
- [ ] Je dohodnuté krátke monitorovacie okno po prepnutí.

## 5. Ihneď po DNS/custom-domain prepnutí

- [ ] `https://varixyporadenstvo.com` má platné TLS a odpovedá 200.
- [ ] HTTP presmeruje na HTTPS.
- [ ] `https://www.varixyporadenstvo.com/cesta?x=1` permanentne presmeruje na `https://varixyporadenstvo.com/cesta?x=1`.
- [ ] Homepage, `/kontakt` a top 10 GSC URL odpovedajú 200.
- [ ] Všetkých 73 sitemap URL odpovedá 200.
- [ ] Canonical a `og:url` zodpovedajú finálnej URL bez `.html` a bez koncovej lomky.
- [ ] `https://varixyporadenstvo.com/robots.txt` odkazuje na `/sitemap.xml`.
- [ ] `https://varixyporadenstvo.com/sitemap.xml` obsahuje 73 produkčných URL.
- [ ] Aspoň jeden CSS/JS asset a reprezentatívne obrázky odpovedajú 200.
- [ ] Kontaktný formulár odošle reálnu testovaciu správu a používateľ vidí správny stav.
- [ ] Google Maps a kalkulačky fungujú.
- [ ] Nie sú prítomné 404/5xx ani zmiešaný HTTP obsah.

## 6. Google Search Console

Až po úspešnom live audite:

- [ ] Odoslať `https://varixyporadenstvo.com/sitemap.xml`.
- [ ] Skontrolovať indexáciu top 10 stránok podľa impresií.
- [ ] Monitorovať 404, canonical mismatch a sitemap upozornenia.
- [ ] Nemať súčasne indexovateľné duplikáty na `pages.dev`, Ploy alebo `www`.

## 7. Rollback a stabilizácia

Pri kritickej chybe:

- [ ] Vrátiť predchádzajúcu DNS/Hostinger konfiguráciu alebo predchádzajúci Cloudflare Pages deployment.
- [ ] Overiť návrat homepage a top GSC URL.
- [ ] Nevykonávať ďalšie SEO alebo obsahové zmeny počas incidentu.

Po úspechu:

- [ ] Monitorovať aspoň 7 dní.
- [ ] Hostinger a Ploy odstrániť až po stabilizácii a potvrdení formulára, sitemap a GSC.
