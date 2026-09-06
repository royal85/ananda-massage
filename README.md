# Ananda Massage

Website voor Ananda Massage (Marjan Bijl) in Lelystad. Astro + Tailwind CSS,
opgezet in dezelfde stijl als het [astra](../astra) (Tai Chi Gwen) project,
maar zonder CMS en zonder contactformulier — dit is een kleine site van 2
pagina's met de inhoud van de bestaande anandamassage.nl.

## Structuur

- `content/` — paginateksten in Markdown (frontmatter), uitgelezen met
  `gray-matter` — zelfde patroon als bij astra, maar zonder TinaCMS erbovenop.
- `src/pages/` — `index.astro` (home) en `over-de-praktijk.astro`.
- `src/components/` — `Header.astro`, `Footer.astro`.
- `src/layouts/Layout.astro` — SEO/meta + basislayout.

## Commands

| Command           | Actie                                          |
| :----------------- | :---------------------------------------------- |
| `npm install`       | Installeert dependencies                        |
| `npm run dev`        | Start lokale dev-server op `localhost:4322`     |
| `npm run build`      | Bouwt de site naar `./dist/`                    |
| `npm run preview`    | Preview van de build, lokaal                    |

Of gebruik het terminal-alias `ananda-start` (zie `~/.zshrc`) om de dev-server
los van deze sessie te starten — zelfde manier als `astra-start`.
