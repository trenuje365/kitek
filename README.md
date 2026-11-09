# Чужденецът снима

Business-card website for **Чужденецът снима** (The Foreigner Films), wedding videography by Marcin Kitowski in Bulgaria. Bulgarian and English on one page.

Live: https://chuzhdenetsatsnima.com/

## Structure

```text
index.html      page markup (BG and EN side by side, toggled by the CC switch)
css/style.css   styles and self-hosted @font-face rules
js/main.js      language switch (remembers the choice, also ?lang=en)
img/            photos (WebP)
fonts/          Prata and Golos Text, Cyrillic + Latin subsets
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

Prata and Golos Text are licensed under the SIL Open Font License 1.1 and are self-hosted, so visitors' browsers do not contact Google.
