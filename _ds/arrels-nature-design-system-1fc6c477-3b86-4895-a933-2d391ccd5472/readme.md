# UrbisAvis 3C — Design System

A design system for **UrbisAvis 3C**, an open citizen-science project in **La Guixa · Sentfores (Vic)** that monitors nocturnal raptors and neighbourhood birds with three night-vision cameras, an interpretive walking trail, and a programme run with the local school, civic centre and residents' association.

> **Internal codename / namespace:** the compiled runtime namespace is `ArrelsNatureDesignSystem_1fc6c4` (an early working name). The *brand* is UrbisAvis 3C — use that name in all copy and artifacts. When mounting components in card/kit HTML, read them via `window.ArrelsNatureDesignSystem_1fc6c4`.

## Product context

The project (see the source brief `research/urbisavis-text.txt`, extracted from `uploads/UrbisAvis_3C.docx`) has three intertwined goals:

- **Scientific** — three HD IR cameras track the breeding and hunting of *mussol comú, xot, gamarús* and *òliba*, feeding data into the regional RAPNOCAT programme of the Grup de Naturalistes d'Osona (GNO-ICHN) and its Reserva de Rapinyaires Nocturns de la Plana de Vic.
- **Educational** — the Escola Sentfores adopts nest boxes and records observations (Ocells dels Jardins / eBird / Ornitho.cat).
- **Community** — the CCVIC La Guixa hosts a lobby live-stream and nest-box workshops; the residents' association designs and maintains a 6-panel interpretive trail.

The tone throughout is warm, local, ethical (a strict no-intervention protocol) and hopeful — nature brought close to a village.

### Sources
- **Project brief:** `uploads/UrbisAvis_3C.docx` → plain text at `research/urbisavis-text.txt`.
- **Organisational reference (structure only, not brand):** the [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md) collection of brand DESIGN.md files was consulted for how to structure a design system. Explore it for further inspiration on documenting brands.
- **No logo was provided.** The wordmark is set in type (Bricolage Grotesque) with an owl glyph from the icon set — see Iconography. Replace with a real mark when available.

---

## Content fundamentals

- **Language:** Catalan (primary). Copy is written for a village audience — neighbours, families, schoolchildren — never corporate.
- **Voice:** warm, plain-spoken, and quietly poetic about nature. Short declarative headlines ("La nit dels rapinyaires en directe."), concrete nouns over abstractions.
- **Person:** collective *nosaltres* and inclusive *tothom / el veïnat*; addresses the reader as a potential participant ("Com participar-hi", "Fes-hi un cop de mà"), not a customer.
- **Casing:** sentence case for headings and body. Mono eyebrows and stat captions are UPPERCASE with wide tracking. Species scientific names in *italics*.
- **Numbers matter:** the project is quantified (3 càmeres, 6 plafons, 4 rapinyaires, 5.038 €). Use real figures from the brief; never invent stats.
- **Ethics up front:** the no-intervention protocol and "dades sense ús comercial" are part of the brand promise — surface them.
- **Emoji:** the source brief uses a few section emoji (🦉 🏫 🌳). In UI, prefer the icon set over emoji; reserve 🦉 only where a light editorial touch fits. Not a core device.

Example lines (from the brief): *"recollir dades biològiques sense interferència humana"*, *"caçadors silenciosos de la nit"*, *"una infraestructura física i permanent de divulgació, no només digital"*.

---

## Visual foundations

- **Palette — vivid, living nature.** Leaf **green** (`--green-500 #1FA85C`) is the pulse. A nocturnal **forest** dark (`--forest-900 #10231A`) grounds hero/owl sections (the birds are nocturnal). Four life accents bring energy: **sky** blue, **sun** amber, **clay** terracotta, **bloom** berry, plus an olive **moss**. Warm **cream** canvas (`--cream-50 #FBFAF3`), stone-grey neutrals, forest **ink** text.
- **Typography.** Display = **Bricolage Grotesque** (700/800, tracking −0.03em) — expressive, organic-modern headlines. Body = **Hanken Grotesk** (400/500, leading 1.7) — warm humanist sans. Mono = **IBM Plex Mono** for eyebrows, stat captions, tags and data (UPPERCASE, tracking 0.14em). *(All three are Google Fonts loaded in `tokens/typography.css` — substitutions, see Caveats.)*
- **Backgrounds.** Cream canvas by default; a soft green tint (`--surface-tint`) for alternating sections; dramatic forest-gradient + faint starfield for nocturnal/owl sections. No busy patterns. Camera feeds are dark green→black gradients with an IR-green glow.
- **Corners.** Pebble-soft everywhere: cards `--radius-lg` (18px), buttons/inputs `--radius-md` (12px), pills/badges/tags full-round. Never sharp.
- **Shadows.** Warm green-tinted, soft and diffuse (`--shadow-xs…xl`, tinted `rgba(16,35,26,…)`), never harsh black. Primary CTAs carry a coloured `--glow-green`. Inputs use a subtle inner shadow (sunken well).
- **Motion.** Gentle. Buttons press down with a spring (`--ease-spring`, scale 0.96), hover brightens ~6%. Cards lift 3px on hover with a deepened shadow. Progress/switch transitions ease-out over 240–420ms. The only loop is a slow "LIVE" dot pulse. Respect reduced-motion.
- **Borders.** 1px `--border` (stone-200) on cards; inputs get `--border-strong`, brightening to green on focus with a 3px translucent focus ring.
- **Layout.** 1200px max content width, 32px gutters, generous 96px section rhythm. 8px spacing base with a 4px half-step. Grid + gap for all groupings.
- **Imagery vibe.** Warm and close to nature; owl/night imagery is cool and dark with green IR glow. **No photos were provided** — kit uses dark gradient placeholders with owl glyphs where camera feeds / species photos belong. Drop real photos in.

---

## Iconography

- **Set:** a small, hand-picked **Lucide-style line icon** set (2px stroke, round caps/joins) defined inline in `ui_kits/website/SectionsA.jsx` as `Ico` (owl, camera, leaf, route, school, house, users, arrow, pin, play, live). These are original line glyphs in the Lucide visual idiom — **substituting for a project icon set, which the brief does not define.** For production, adopt [Lucide](https://lucide.dev) from CDN (same stroke idiom) or commission a custom set.
- **Owl glyph** doubles as the provisional brand mark until a real logo exists.
- **Emoji:** used sparingly in the source brief for section markers; avoid in UI in favour of the icon set.
- **QR codes** are part of the physical trail (linking to xeno-canto.org bird calls) — represent as a labelled placeholder, not a generated code, in mockups.

---

## Index / manifest

**Root**
- `styles.css` — global entry point (import lines only). Consumers link this.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `effects.css` (160 tokens).
- `readme.md` — this file. `SKILL.md` — Agent-Skill wrapper.
- `research/urbisavis-text.txt` — extracted source brief.

**Components** (`components/`) — 11 React primitives, namespace `window.ArrelsNatureDesignSystem_1fc6c4`:
- `core/` — **Button**, **IconButton**
- `forms/` — **Input**, **Select**, **Checkbox**, **Switch**
- `display/` — **Card**, **Badge**, **Tag**, **Stat**, **ProgressBar**

Each has `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md`; each group has a `@dsCard` HTML specimen.

**UI kit** (`ui_kits/website/`) — the UrbisAvis 3C marketing website: `index.html` composes `SectionsA/B/C.jsx` (Nav, Hero, Cameras, Participate, Trail, Species, Support, Footer), built entirely from the design-system primitives.

**Foundation cards** (`guidelines/cards/`) — specimen HTML for the Design System tab: colours (green scale, accents, neutrals, status), type (display, body, mono, scale), spacing (scale, radii, elevation).

---

## Caveats & how to make it perfect

- **Fonts are Google-Fonts substitutes**, chosen to fit the "vivid, living, close-to-nature" brief — not a client-specified typeface. Swap if you have brand fonts.
- **No logo, no photos, no defined icon set** were provided. The wordmark, camera-feed placeholders and Lucide-style icons are stand-ins. Provide real assets to finalise.
- **Namespace vs brand name** differ (`Arrels…` codename vs UrbisAvis 3C brand) — cosmetic only; can be regenerated if the project is recreated under the final name.
