# EHU Slidev Theme

[![Slidev](https://img.shields.io/badge/Powered%20by-Slidev-00D88C?logo=visualstudiocode)](https://sli.dev/)

A custom corporate theme for the **University of the Basque Country (UPV/EHU)**, designed for academic presentations.

## Features

- **Corporate Branding**: Uses EHU green (`#00D88C`) and EHUSans typography.
- **Fixed Branding**: Logo block always visible on the top-left (configurable per layout).
- **Auto-scaling Alerts**: Special `alert` layout that automatically adjusts font size to fit your content.
- **Academic Focus**: Optimized for structured course material (decilogues, matrices, etc.).

## Installation

Add the theme to your `slides.md` frontmatter:

```yaml
---
theme: ./theme/ehu-theme
---
```

## Layouts

| Layout | Purpose |
|---|---|
| `cover` | Main title slide with corporate squares. |
| `intro` | Presenter profile / Introduction. |
| `index` | Grid-based table of contents (auto-columns). |
| `section` | Colored divider for main topics. |
| `alert` | High-impact admonition with auto-scaling font. |
| `statement` | Centralized text box for key messages. |
| `quote` | Stylized blockquotes. |
| `fact` | Large numbers or key statistical data. |
| `end` | "Thank you" closing slide. |

### Alert Layout Usage

The `alert` layout supports five types of visual admonitions:

```yaml
---
layout: alert
alertType: tip # note, tip, important, warning, caution
alertTitle: Custom Title
---
Your content here...
```

## Contributing

1. `npm install`
2. `npm run dev` to start the preview using `example.md`.
3. Edit files in `layouts/` or `styles/` to see changes.

## License

MIT License
