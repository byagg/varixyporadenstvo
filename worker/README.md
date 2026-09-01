# Kontaktný Cloudflare Worker

Worker prijíma iba `POST /api/contact`, validuje formulár, limituje požiadavky podľa IP a po úspešnom odoslaní e-mailu vracia HTTP 200.

## Pred nasadením

1. V Cloudflare zapnite Email Routing pre `varixyporadenstvo.com`.
2. Overte cieľovú adresu `varixyporadenstvo@gmail.com`.
3. Overte, že `kontakt@varixyporadenstvo.com` môže byť použitá ako odosielateľ.

## Kontrola a nasadenie

V adresári `worker/`:

```bash
bun install --frozen-lockfile
bun run check
bun run deploy
```

Po deployi si Cloudflare vytvorí URL podobnú:

```text
https://varixyporadenstvo-contact.<subdomain>.workers.dev/api/contact
```

Túto celú URL nastavte v Cloudflare Pages ako build premennú `VITE_CONTACT_ENDPOINT` a spustite nový Pages deploy.

## Povolené originy

- `https://varixyporadenstvo.com`
- `https://varixyporadenstvo.pages.dev`
- aktuálny kontrolovaný deployment `https://9f886e99.varixyporadenstvo.pages.dev`

Pri novom hashovanom preview deployi pridajte jeho origin do `ALLOWED_ORIGINS` alebo testujte cez stabilnú adresu `https://varixyporadenstvo.pages.dev`.

## Bezpečnostné pravidlá

- maximálne 5 požiadaviek za 60 sekúnd na IP a Cloudflare lokalitu,
- maximálny request 20 kB,
- správa maximálne 5 000 znakov,
- CORS iba pre povolené originy,
- kontrola `Content-Type`, metódy a zdrojovej stránky,
- honeypot pole `data.website`, ak ho formulár neskôr začne posielať,
- odpoveď HTTP 200 až po úspešnom doručení e-mailu.
