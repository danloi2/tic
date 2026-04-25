# TIC en Educación Primaria — Presentation Suite

> Course presentations for *Las Tecnologías de la Información y la Comunicación en Educación Primaria* — UPV/EHU (HEFA), 2026/2027.

A [Slidev](https://sli.dev/)-based presentation repository featuring a custom institutional theme for the University of the Basque Country (UPV/EHU), built for the course **TIC en Educación Primaria** (2nd year, Primary Education Degree).

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) ≥ 18
- npm (comes with Node.js)

### Install & Run

```bash
npm install
npm run dev
```

Then open [http://localhost:3030](http://localhost:3030) in your browser.

### Build for production

```bash
npm run build
```

### Export to PDF

```bash
npm run export
```

---

## 📁 Project Structure

```
tic/
├── slides.md               # Main presentation: Student Guide (Decálogo)
├── aula-digital/           # Topic: Digital Classroom
│   └── slides.md
├── docente-digital/        # Topic: Digital Teacher
│   └── slides.md
├── docente-reflexivo/      # Topic: Reflective Teacher
│   └── slides.md
├── escuela-digital/        # Topic: Digital School
│   └── slides.md
├── lenguaje-audiovisual/   # Topic: Audiovisual Language
│   └── slides.md
└── theme/
    └── ehu-theme/          # Custom UPV/EHU Slidev theme
```

---

## 🎨 EHU Theme

A fully custom [Slidev theme](https://sli.dev/guide/write-theme) implementing the **UPV/EHU corporate identity**:

- **Typography**: EHUSans (custom webfont) with Fira Code for code blocks
- **Brand color**: `#00D88C` (EHU green)
- **Layout**: Vertical green column + fixed white logo block on all standard slides

### Available Layouts

| Layout | Description |
|---|---|
| `cover` | Title slide with full EHU branding |
| `intro` | Welcome / presenter introduction |
| `index` | Table of contents with numbered grid |
| `section` | Section divider with green background |
| `alert` | Full-slide admonition (see below) |
| `statement` | High-impact statement slide |
| `quote` | Pull quote with attribution |
| `fact` | Large number / key fact |
| `two-cols` | Two-column layout |
| `image`, `image-left`, `image-right` | Image-focused layouts |
| `end` | Closing slide |

### Alert Layout

The `alert` layout renders a full-slide admonition with **auto font scaling** — font size automatically reduces to fit all content.

```markdown
---
layout: alert
alertType: tip          # note | tip | important | warning | caution
alertTitle: My Title    # optional, falls back to type label
---

Content goes here. Supports **markdown**, lists, and inline code.
```

| `alertType` | Icon | Color |
|---|---|---|
| `note` | ℹ️ | Blue |
| `tip` | 💡 | EHU Green |
| `important` | ❗ | Purple |
| `warning` | ⚠️ | Orange |
| `caution` | 🚨 | Red |

### Theme Defaults

The theme sets the following Slidev defaults (can be overridden per slide):

```yaml
transition: fade
```

---

## 🧑‍💻 Development (Theme)

To work on the theme itself:

```bash
cd theme/ehu-theme
npm install
npm run dev   # Uses example.md as the preview
```

---

## 📦 Deployment

The project includes configuration for both **Netlify** (`netlify.toml`) and **Vercel** (`vercel.json`).

For static hosting, run `npm run build` and deploy the `dist/` folder.

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for details.

---

## 👤 Author

**Daniel Losada**  
Department of Didactics and School Organization — UPV/EHU (HEFA)  
Course: *TIC en Educación Primaria* · 2026/2027
