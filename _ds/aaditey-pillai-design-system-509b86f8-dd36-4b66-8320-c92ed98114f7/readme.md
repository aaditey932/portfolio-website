# Aaditey Pillai — Design System

A dark, technical, dev-forward design system for **Aaditey Pillai's** personal
portfolio — an Applied AI / ML engineer (MEng @ Duke) building production LLM
systems: multi-agent pipelines, RAG, entity extraction, risk scoring. The
system is tuned to read as *"I ship reliable systems"* to recruiters and
hiring managers at AI/ML companies — credible and engineered, not agency-glossy.

> **Direction chosen:** Dark / technical — near-black base, a single cyan
> signature accent, monospace as the technical voice, terminal/IDE energy.
> (Two alternates were offered — minimal/clean and editorial/structured — and
> this one was picked as closest to the existing site and most dev-forward.)

---

## Sources

This system was reverse-engineered from the owner's existing portfolio codebase
and formalised into reusable tokens, components, and a full UI-kit recreation.

- **Codebase:** `portfolio-website/` (Next.js 14 App Router + Tailwind, deployed
  on Vercel). Key files read: `src/app/components/{HeroSection,Navbar,AboutSection,ProjectsSection,ProjectCard,ExperienceCard}.jsx`,
  `src/app/globals.css`, `tailwind.config.js`, `src/app/layout.js`, and the
  consolidated copy reference `CONTENT.md`.
- **GitHub:** [`aaditey932/portfolio-website`](https://github.com/aaditey932/portfolio-website)
  — explore further to build higher-fidelity designs against the real product.
- Project repos referenced in content: [`aaditey932`](https://github.com/aaditey932)
  (MedGraph Scheduler, TubeGist AI, Duke Student Advisor, DeepSeek-Uncensored,
  Frame-Finder, Transformer-from-scratch, and more).

The source site was **mid-transition**: hero + navbar already used the
black/cyan-300 direction, while project/experience cards still carried leftover
green styling. This system resolves that into one coherent dark/cyan language.

### ⚠ Font substitutions (please confirm / supply files)
The repo *declares* proprietary faces (Gotham Bold, Futura No. 2 Std, Satoshi,
Equitan Sans) but ships **no font binaries** — every face already falls back to
a Google font in `layout.js`. This system standardises on those real fallbacks
and adds a monospace for the technical voice:

| Role | This system uses | Original intent |
|---|---|---|
| Display / headline | **Poppins** 600/700 | Gotham Bold |
| Geometric accent (greeting) | **Nunito** 600 | Futura No. 2 Std |
| UI / body | **Inter** 400–600 | Inter (unchanged) |
| Mono (signature) | **JetBrains Mono** | *new — no mono existed* |

If you own the real licences, drop `.woff2` files in `assets/fonts/` and point
`tokens/fonts.css` at them.

---

## Content Fundamentals

How the brand writes. Pulled from `CONTENT.md`, hero copy, and project blurbs.

- **Voice — first person, understated, evidence-led.** "I'm most motivated by
  turning messy, real-world data into reliable ML systems." No hype, no
  superlatives. Confidence comes from *numbers*, not adjectives.
- **Metrics are the rhetoric.** Achievements always carry a figure: "0.90 F1
  over 242 contracts", "0.82 weighted Spearman", "0.96 AUC", "95% uptime",
  "50+ incidents at 4-hour average resolution". Lead bullets with the result.
- **Stack-forward.** Tooling is named explicitly and proudly — LangGraph,
  FastAPI, vLLM, Mistral 7B, Kafka, Pinecone, LoRA. These read as monospace
  pills, not prose.
- **Tone:** dependable over flashy. The hero literally says AI that's "useful,
  scalable, and quietly dependable." Mirror that — calm, precise, senior.
- **Casing:** Sentence case for body and headings; `UPPERCASE` (mono, tracked
  +0.14em) reserved for eyebrows, labels, and status. Section titles are short
  declaratives with a period: "Selected work." / "Where I've shipped."
- **Person:** "I" / "my" throughout. Addresses the reader implicitly (a
  recruiter) — CTA is direct: "Hire Me", "View Resume".
- **No emoji.** Anywhere. The closest thing to an icon in prose is a `›` tick or
  a `//` mono comment marker.
- **Numbers & dates:** ranges as "Aug 2024 — May 2026" (en dash, spaced);
  GPAs as "4.00 / 4.00". Keep figures exact — they're the credibility.

Example eyebrow + title pattern:
```
01 ──  EXPERIENCE
Where I've shipped.
```

---

## Visual Foundations

- **Base.** Near-black with a faint cool (blue) tint — `--ink-950 #050608` for
  the page, stepping up through `--ink-900/850/800/700` for cards and raised
  surfaces. Never flat pure-black except for sunken wells. No white surfaces.
- **Accent.** A single signature **cyan** (`--cyan-300 #67E8F9`, straight from
  the source `cyan-300`). Used sparingly: the primary CTA fill, links, eyebrows,
  active states, focus, the rotating hero word, status dots. One accent only —
  the discipline is the brand. Deeper cyans (`400/500`) for solid fills; a 10%
  `--accent-tint` wash + `--line-accent` border for chips.
- **Text.** White headings (`--text-strong`), near-white body
  (`--text-body #E6EAF1`), muted secondary (`#9BA3B0`), faint meta (`#626B79`).
  Strong hierarchy by lightness, not size alone.
- **Type.** Poppins display (tracking −0.03em, line-height 0.9 for the hero),
  Inter body (1.55–1.7 leading), Nunito for the geometric greeting, JetBrains
  Mono for every label/tag/metric/code detail. The hero headline uses a
  **vertical white→gray clip gradient** (`#fff → #6B7280`) — a signature move
  carried from the source.
- **Backgrounds.** No photographic hero. Instead a **faint dotted/line grid**
  (`64px`, white at 7% alpha) radially masked so it fades out — terminal-graph
  texture, never loud. The contact block reuses a masked grid. No gradients
  beyond the headline clip and one subtle card wash. **Avoid** bluish-purple
  startup gradients and glassmorphism entirely.
- **Cards.** `--surface-card` fill, `1px` hairline border (`--border-subtle`,
  white 7%), `--radius-lg` (12px), `--shadow-card` (soft dark drop + faint inner
  top highlight). **Hover:** border brightens to `--line-accent` (cyan 32%),
  lifts `translateY(-4px)`, shadow deepens to `--shadow-lg`. Calm, ~250ms.
- **Borders.** Hairlines do the structural work — translucent white at 7% / 13%,
  or cyan 32% for accented edges. Solid `--ink-600` only when a hard edge is
  needed.
- **Radii.** 12px on cards (`lg`), 8px on inner surfaces (`md`), full **pills**
  for CTAs and all tags/chips, 16–24px on large feature blocks (contact).
- **Shadows / elevation.** Tuned for dark: contrast + a **cyan focus glow**
  (`--glow-accent`, `--ring-focus`) rather than soft grey shadows that vanish on
  black. Focus ring = 2px cyan offset on the page color.
- **Motion.** Entrance ease `cubic-bezier(0.22,1,0.36,1)` (the source hero
  curve), ~0.6s blur/slide-in on load, ~0.25s on hover/state. The hero word
  cross-fades + rises every 2s. Reduced-motion respected. No bounce, no
  infinite decorative loops.
- **Hover / press.** Hover = brighten (text → white, border → cyan, fill →
  lighter cyan) and/or a 4px lift. Press = `translateY(1px)` on buttons. Quiet
  and physical, never colour-flips to a new hue.
- **Imagery.** Portrait is lightly desaturated (`grayscale(0.35)`) with a
  bottom-up scrim and a mono location caption — cool, restrained, editorial.
  Project thumbnails sit behind a slight dark scrim that lightens on hover.
- **Layout.** `1280px` container, generous `128px` section rhythm, fixed
  blur nav (`5.5rem`) that gains a hairline + scrim once scrolled. Numbered
  sections (01–04) with mono eyebrows. Mobile-first: nav text links collapse,
  grids reflow to one column — recruiters click through on phones.

---

## Index — what's in here

**Foundations (root + `tokens/`)**
- `styles.css` — the entry point consumers link. `@import`s only.
- `tokens/colors.css` — ink scale, cyan accent, text, semantic, aliases.
- `tokens/typography.css` — families, weights, scale, tracking.
- `tokens/spacing.css` — spacing, radii, shadows, motion, layout.
- `tokens/fonts.css` — Google-font `@import` (see substitution note above).

**Specimen cards (`guidelines/`)** — render in the Design System tab:
Colors (ink, accent, text, status), Type (display, body, mono, scale),
Spacing (scale, radii, elevation).

**Components (`components/`)** — `window.AaditeyPillaiDesignSystem_509b86`:
- `core/` — `Button`, `Tag`, `Badge`, `SectionHeading`, `Card`, `TabButton`, `IconLink`
- `cards/` — `ProjectCard`, `ExperienceCard`

**UI kit (`ui_kits/portfolio/`)** — the full single-page portfolio recreation:
Nav · Hero · About (Skills/Education tabs) · Experience (expandable) · Projects
(filterable) · Contact. Self-contained (`index.html` + `data.js` + `icons.jsx`
+ `shell.jsx` + `sections.jsx`).

**Assets (`assets/`)** — `portrait.jpg`, `github-icon.svg`, `linkedin-icon.svg`,
`projects/*` thumbnails.

---

## Iconography

- **System:** the source used **Heroicons** (`@heroicons/react`, outline +
  solid) plus a couple of hand-coded brand glyphs. This system continues that:
  thin **2px-stroke line icons** (Heroicons / Lucide family) for UI affordances
  — `code` (`</>`), `arrow`, `mail`, chevrons — and **solid** brand marks for
  GitHub / LinkedIn.
- **Where they live:** `ui_kits/portfolio/icons.jsx` ships inline React SVG
  glyphs (Github, LinkedIn, Mail, Code, ArrowUpRight, ArrowRight). Brand SVGs
  also copied to `assets/github-icon.svg`, `assets/linkedin-icon.svg`.
- **Recommendation for new work:** pull line icons from **Lucide**
  (`https://unpkg.com/lucide-static`) or **Heroicons** — both match the 2px
  stroke, round caps/joins. Keep icons at `currentColor` so they inherit the
  muted→cyan hover transition (see `IconLink`).
- **Color:** icons are `--text-secondary`/`--text-faint` at rest, brightening to
  `--accent` (cyan) on hover. Brand marks stay monochrome — never multicolor.
- **Sizing:** 16–20px inline, 18px in cards, ~18px inside the 40px `IconLink`
  chip. The mono `</>` and `›` characters double as lightweight glyphs.
- **No emoji, ever.** Unicode is used only as typographic marks: `›` (bullet
  tick), `▾` (disclosure), `//` (mono comment eyebrow), `—`/`·` (separators).

> ⚠ Substitution note: Heroicons/Lucide are linked/inlined rather than vendored
> from the repo (the original imported them from npm). Swap to the owner's exact
> set if a stricter match is needed.
