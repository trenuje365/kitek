# Чужденецът снима

Business-card website for **Чужденецът снима** (The Foreigner Films), wedding videography by Marcin Kitowski in Bulgaria. Bulgarian and English on one page.

Live: https://chuzhdenetsatsnima.com/

## Structure

```text
index.html      page markup (BG and EN side by side, toggled by the flag buttons)
css/style.css   styles (warm light palette, arch-shaped photos)
css/fonts.css   self-hosted @font-face rules
js/main.js      language switch (remembers the choice, also ?lang=en) and mobile menu
img/            photos (WebP)
fonts/          Great Vibes, Alegreya, Alegreya Sans (Cyrillic + Latin)
vercel.json     security headers and caching for Vercel
```

Plain static site: no build step, no dependencies, no cookies, no third-party requests.

## Run locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Deploy

Import the repository in Vercel (Framework preset: **Other**, no build command, output directory: root). Every push to `main` redeploys.

## Fonts

Great Vibes, Alegreya and Alegreya Sans are licensed under the SIL Open Font License 1.1 and are self-hosted, so visitors' browsers do not contact Google.
