# Andrii L. — Flutter Developer Portfolio

Single-page portfolio site. Vite + React 19 + TypeScript, no UI framework — all styling is
hand-written CSS driven by custom properties.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production bundle into dist/
npm run preview  # serve the built bundle
npm run lint     # oxlint
```

## Structure

```
src/
├── data/profile.ts     ← ALL site content lives here
├── components/         ← one component per section
├── hooks/useReveal.ts  ← IntersectionObserver scroll animations
├── index.css           ← design tokens + base styles
└── App.css             ← all component styles
```

**To change any text on the site, edit [`src/data/profile.ts`](src/data/profile.ts).**
Components read from it; nothing is hard-coded in the markup except section headings.

## Sections

`Hero → About → Skills → Selected work → Background → Contact`

Content is taken from the CV. The four projects (Yollly, MakeMebirthday, Gamble Count,
Reforge) each render role, summary, build highlights, outcome, stack chips and store badges.

## Outstanding TODOs

These are marked with `TODO` comments in `src/data/profile.ts`:

1. **Store links** — every `appStore` / `googlePlay` field is currently `"#"`. The real URLs
   are hyperlinked in the CV PDF but weren't recoverable from its text. Replace them, or the
   badges will link nowhere.
2. **CV download** — the hero's "Download CV" button points at
   `/Andrii-L-Flutter-Developer.pdf`. Copy the CV into `public/` under exactly that name,
   or change `profile.cvUrl`. **Right now this link 404s.** Note that adding it publishes the
   PDF at a public URL — confirm that's wanted before deploying.
3. **LinkedIn** — `profile.linkedin` is empty and unused. Add the URL and wire it into
   `Contact.tsx` / `Footer.tsx` if wanted.
4. **Screenshots** — real store screenshots inside the phone frame would land much harder than
   the placeholder UI. See `src/components/PhoneMock.tsx`.

## The hero photo

`src/assets/andrii.jpg` was extracted from the CV PDF (the source image was a 1086×1448
Flate-compressed RGB stream), then resized to 760px wide and re-encoded as JPEG — 57 KB.
If a better original exists, drop it in at the same path; the hero crops with
`object-position: 50% 22%` so a head-and-shoulders frame works best.

## Theme

Colours follow the CV: dark navy ground, lime-green accent. Every value is a custom property
at the top of `src/index.css` — change `--accent` and the whole site follows.

## Deploy (Vercel)

Framework preset **Vite**, build `npm run build`, output `dist`. No environment variables.
