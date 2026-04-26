# EHU Slidev Theme

[![Slidev](https://img.shields.io/badge/Powered%20by-Slidev-00D88C?logo=visualstudiocode)](https://sli.dev/)

A custom corporate theme for the **University of the Basque Country (UPV/EHU)**, designed for academic presentations.

## Features

- **Corporate Branding**: Uses EHU green (`#00D88C` and `#006B3D`) and corporate typography (EHUSans / EHUSerif).
- **Responsive Layouts**: Provides a wide array of layouts for different slide types (images, dual-column, statements).
- **Custom Components**: Includes tailored Vue components for alerts, tables, and quotes to enhance academic content.
- **Progress Tracking**: Integrated progress bar (`slidev-component-progress`) and global page numbering.

## Installation

Add the theme to your `slides.md` frontmatter:

```yaml
---
theme: ./theme/ehu-theme
---
```

## Custom Components

This theme provides several Vue components that you can use directly inside your Markdown files:

### `<alert>`
A high-impact admonition block that automatically scales its font size to fit the content.
* **Props**:
  * `type` (String): Visual style. Options: `note`, `tip`, `important`, `warning`, `caution` (default: `note`).
  * `title` (String): Custom title for the alert.
  * `autofit` (Boolean): Whether the font should auto-shrink to fit (default: `true`).

```html
<alert type="tip" title="Consejo Importante">
  Tu contenido en **Markdown** aquí.
</alert>
```

### `<quote>`
A highly stylized blockquote container ideal for citations or important academic quotes, featuring the corporate serif font and right-alignment.

```html
<quote>
  «La frase o cita textual va aquí»
  — Autor
</quote>
```

### `<table-ehu>`
A wrapper to apply the corporate green styling and structure to standard Markdown tables.
* **Props**:
  * `shadow` (Boolean): Applies an elevation shadow (default: `true`).

```html
<table-ehu>

| Encabezado 1 | Encabezado 2 |
| --- | --- |
| Dato | Dato |

</table-ehu>
```

### `<page-number>`
Displays the current page out of the total. Placed automatically at the bottom right of the slides via `global-bottom.vue`.
* **Props**:
  * `absolute` (Boolean): Positions the element absolutely in the corner (default: `true`).

## Layouts

| Layout | Purpose |
| :--- | :--- |
| `cover` | Main title slide with corporate branding. |
| `default` | Standard content slide. |
| `center` | Vertically and horizontally centered content. |
| `intro` | Presenter profile / Introduction. |
| `index` | Grid-based table of contents. |
| `section` | Colored divider for main topics. |
| `statement` | Centralized text box for key messages. |
| `fact` | Large numbers or key statistical data. |
| `two-cols` | Two balanced columns of content. |
| `two-cols-header`| Two columns with a shared top header. |
| `image-*` | Layouts incorporating images (`image`, `image-left`, `image-right`, `image-full`). |
| `iframe-*`| Layouts embedding external websites (`iframe`, `iframe-left`, `iframe-right`). |
| `end` | "Thank you" closing slide. |

## Global Addons

- **Progress Bar**: Included at the top edge of all slides automatically.
- **Slide Numbers**: Hidden automatically on `cover`, `index`, `section`, `statement`, and `end` layouts.

## License

MIT License
