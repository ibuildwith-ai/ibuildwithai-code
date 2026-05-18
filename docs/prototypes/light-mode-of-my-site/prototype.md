# Prototype – Light Mode of My Site
This document captures a throwaway, interactive prototype built to test an idea. A prototype is independent of the Plan and Build phases: build one whenever you want to try something, then ask Cody to use it when planning or building.

## Created
2026-05-18

## Last Updated
2026-05-18

## The Idea
_The idea this prototype is testing, and what the **USER** hopes to learn from it._

The iBuildWith.ai site currently ships only a dark theme. This prototype recreates the production **home page** with an added light mode and a light/dark switch in the header, so the **USER** can see what the site would look like in light mode and decide whether a light palette works for the brand. The main question to answer: **does a light palette look good with the iBuildWith.ai brand and content?**

## What to Test
_The specific things to try, click through, or evaluate in the prototype._

- Toggle between light and dark mode using the switch in the header (top right).
- Evaluate whether the light palette reads well across every home page section: hero, Products, Blog, Podcast, Presentations, footer.
- Check that the brand green still feels right against a light background.
- Confirm text contrast and legibility in light mode (headings, body copy, muted dates/meta).
- See how cards, borders, badges, and the hero background grid hold up on white.
- Confirm the light/dark choice persists on reload (stored in `localStorage`).

## Build Approach
_How the prototype is built and any tech choices. Kept lightweight -- it is throwaway._

A self-contained static prototype that reuses the **real site** for maximum fidelity:

- `index.html` — the production home page markup, taken from the Hugo build output (`public/index.html`), with asset paths localized and a theme toggle added to the header.
- `styles.css` — the real compiled site stylesheet (`public/scss/styles.min.css`), unchanged. This is the dark baseline.
- `light-theme.css` — prototype-only. Styles the toggle switch and repaints the home page in a light palette, scoped under a `.theme-light` class. The brand green is left untouched in both modes.
- `theme-toggle.js` — toggles the `.theme-light` class on `<html>` and remembers the choice in `localStorage`. An inline script in `<head>` applies the saved theme before first paint to avoid a flash.
- `images/` and `js/` — the real product/blog/podcast/presentation images and the site's mobile-menu and nav-dropdown scripts.

The logo is an **inline SVG** (recreated in `index.html`, in both the header and footer) rather than the original PNG. The original PNG had light-gray "With.ai" text that was unreadable on a white background. In the SVG, the icon and "iBuild" stay green in both modes; only the "With.ai" wordmark adapts — light gray on dark, dark gray on light. The icon is a simplified recreation of the original line-art, not a pixel match.

To view: open `index.html` directly in a browser. No build step required.

Notes / deliberate choices to evaluate:
- The product card image frame (`.product-image`) is kept dark even in light mode, because the product artwork is designed for a dark background.
- The light/dark switch sits in the header to the right of the "About" menu.
- The SVG logo icon is an approximation — a real light-mode logo asset would be needed for production.

## Findings Log
_What was learned, updated throughout the prototype session._

| Date | Finding |
|------|---------|
| 2026-05-18 | Prototype built. Awaiting the USER's review of the light palette. |
| 2026-05-18 | USER reviewed and likes the light mode. Flagged that the logo needs a light-mode version — the original PNG's gray "With.ai" text is unreadable on white. Logo recreated as an adaptive inline SVG in response. |
| 2026-05-18 | USER does not like the recreated SVG logo. They will provide their own light-mode logo. The SVG stays in the prototype as a placeholder for now. |

## Likes & Dislikes
_The **USER's** judgment about the prototype: what works, what does not, what to keep, what to throw away, and opinions on the design and architecture._

- **Likes:** The light mode overall — the light palette works for the site.
- **Dislike:** The recreated SVG logo. The USER will provide their own light-mode logo asset; the SVG is only a placeholder in the prototype.
- **Gap:** The original PNG logo does not work on a light background — production needs a dedicated light-mode logo.
