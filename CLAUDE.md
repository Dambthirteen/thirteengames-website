# Thirteen Games Website — Projektübersicht

## Stack
- **Framework:** Astro 5 (Static Site, kein SSR)
- **Styling:** Tailwind CSS v4 (via `@tailwindcss/vite`)
- **Sprache:** TypeScript
- **Package Manager:** pnpm
- **Deploy-URL:** https://www.thirteengames.de

## Befehle
```bash
pnpm dev        # Dev-Server starten
pnpm build      # astro check + build
pnpm preview    # Build lokal vorschauen
```

## Projektstruktur
```
src/
  components/   # Hero, Header, Footer, Projects, About, Experience, Section
  config/       # index.ts — ALLE Inhalte (Projekte, Nav, Social, Hero-Text)
  types/        # index.ts — TypeScript-Interfaces
  layouts/      # Layout.astro — globale Shell (Loading, Particles, Cursor)
  pages/        # index.astro, me.astro, projects/[slug].astro, projects/gamejams.astro
  styles/       # global.css — Tailwind @theme-Variablen + btn-primary, btn-outline
  icons/        # Menu.astro
public/         # Bilder, Logo, Banner
```

## Inhalt ändern
**Alles in einer Datei:** `src/config/index.ts`
- `SITE_CONFIG` → Titel, Nav-Links, Social-Links
- `SITE_CONTENT` → Hero, Experience, Projects-Array, About-Text

**Neues Projekt hinzufügen:** Objekt in `SITE_CONTENT.projects` eintragen + Bild nach `/public/` + Panel in `index.astro` einfügen + neue Seite optional via `[slug].astro`.

## Design-System (global.css)
- `--color-primary: #951810` (Dunkelrot)
- `--color-neutral: #FDF5DB` (Cream/Elfenbein)
- `--color-black: #0E0D0C` (Fast Schwarz)
- Font Serif: Fraunces | Font Sans: Be Vietnam Pro
- Buttons: `.btn-primary` (rot, rund) und `.btn-outline` (transparent border)

## Homepage-Layout (index.astro) — Full-Screen Cinematic Design
Inspiration: aggrocrab.com Stil — jede Section = 100vh, Bild füllt den ganzen Bildschirm.

- `<Layout fullscreen>` — kein `pt-20`, kein max-width auf `<main>`
- **Hero** (`h-screen`): Parallax-Banner, Logo zentriert, Typewriter-Effekt, Scroll-Indicator unten
- **3 Game-Panels** (je `100vh`): Struktur pro Panel:
  ```
  <section class="game-panel">
    <img class="panel-bg">          ← Vollbild-Hintergrundbild
    <div class="panel-gradient">    ← Dark gradient unten → oben
    <div class="panel-content">     ← Inhalt bottom-left
      <div class="panel-inner">     ← eyebrow / title / tagline / buttons
  ```
- Panel-Reihenfolge: You Should Choose (01) → Simple Light Flicker (02) → Staged (03)
- IntersectionObserver: `.panel-inner` wird mit `is-visible` slide-up eingeblendet
- Hover auf Panel: `panel-bg` skaliert leicht (scale 1.04)

**Neues Panel hinzufügen:** In `index.astro` weiteres `<section class="game-panel">` Segment kopieren.

## Interior Pages (`/me`, `/projects/[slug]`, `/projects/gamejams`)
- Nutzen `<Layout>` ohne `fullscreen` → bekommt automatisch `pt-20` für den fixed Header
- Article/Content hat `mx-auto max-w-3xl px-5` (eigenes Container)
- `Section.astro` enthält auch `mx-auto max-w-3xl px-5` Wrapper (genutzt von About auf `/me`)

## Header (`Header.astro`)
- `position: fixed`, `z-50`, startet komplett transparent
- Wird dunkel bei >60px Scroll: Klasse `header-scrolled` → `bg-black/92 backdrop-blur-md`
- Dropdown-Nav für "Projects" mit Unterlinks

## Layout.astro — globale Features
- Loading Screen mit Logo + Ladebalken
- Scroll-Progress-Bar (rot, oben fixiert)
- Floating Particles Canvas (Staub/Glühwürmchen, rot + cream)
- Cursor Trail (roter Glow)
- Custom XP-Cursor (SVG)
- Back-to-Top Button
- Page Transitions via CSS View Transitions API
- `fullscreen` Prop: wenn `true` → `<main>` hat kein padding-top

## Seiten
| Route | Datei | Beschreibung |
|---|---|---|
| `/` | `index.astro` | Full-screen Hero + 3 Game-Panels |
| `/me` | `me.astro` | About + Experience |
| `/projects/[slug]` | `[slug].astro` | Dynamische Projektseite |
| `/projects/gamejams` | `gamejams.astro` | Game Jam Übersicht |

## Aktuelle Projekte
1. **You Should Choose** — Hauptspiel, WIP, Unity/C# (Panel 01)
2. **Simple Light Flicker** — Unity Asset, Asset Store (Panel 02)
3. **Staged** — Sound Design für ProjectSunset UG, Ableton/Unreal (Panel 03)

## Wichtiges
- Ideale Bildgröße für Projektbanner: **740×460px** (oder 1480×920px für Retina)
- Git User: Dambthirteen | Branch: main
- TypeScript-Path-Aliases: `@config`, `@components`, `@layouts`, `@types`, `@icons`
