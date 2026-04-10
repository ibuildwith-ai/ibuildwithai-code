# Version Design Document: v2.1.0 — Sub-Page Redesign
Technical implementation and design guide for the upcoming version.

## 1. Features Summary
Continue the v2.0.0 redesign by bringing the gradient hero header to all internal sub-pages. The primary deliverable is a reusable `sub-page-hero` partial that replaces the existing `.hero` section on all listing and detail pages. Listing page cards are updated to use the home page card components and all listing grids move to 3 columns.

**Pages affected:**
- `blog/list.html` — new hero header, 3-column hp-blog-card grid
- `blog/single.html` — new hero header with cover image + metadata
- `podcast/list.html` — new hero header, 3-column hp-podcast-card grid
- `podcast/single.html` — new hero header with guest photo + metadata
- `presentations/list.html` — new hero header, 3-column hp-pres-card grids per grouping
- `presentations/single.html` — new hero header with cover image + metadata (shared by on-demand and event layouts)

## 2. Technical Architecture Overview
**Framework:** Hugo static site generator (v0.160.1)
**Styling:** SCSS — existing variables, mixins, and component partials
**New partial:** `themes/ibuildwithai/layouts/partials/sub-page-hero.html`

### sub-page-hero partial parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| `variant` | string | `"listing"` or `"detail"` |
| `title` | string | Page/article title |
| `subtitle` | string | Subtitle or tagline (listing) or guest/presenter line (detail) |
| `label` | string | Content-type label for detail pages (e.g. "Blog", "Podcast", "Presentation") |
| `image` | string | Image path (detail only) |
| `image_type` | string | `"rect"` (blog/presentations) or `"square"` (podcast) |
| `meta` | slice | Array of metadata strings (date, reading time, etc.) |
| `meta_links` | slice | Array of dicts `{text, url}` for linked metadata (e.g. "Written with...") |
| `context` | page | Current Hugo page context (for image pipeline) |

### Image dimensions (approved in mockup)
- Blog/Presentations detail: `420px wide × 16:9 aspect ratio`, `border-radius: 12px`
- Podcast detail: `250×250px square`, `border-radius: 12px`

### Listing cards
Listing pages reuse the existing home page card classes already defined in `_homepage.scss`:
- Blog: `.hp-blog-card` / `.hp-blog-grid` (3 columns)
- Podcast: `.hp-podcast-card` + `.hp-blog-grid` (3 columns, shared grid class)
- Presentations: `.hp-pres-card` / `.hp-pres-grid` (3 columns per grouping)

## 3. Implementation Notes
- The sub-page hero background (glow, grid overlay) is identical to `hero-v2` from `_homepage.scss`. Extract shared keyframe animations and background styles into a new `_sub-page-hero.scss` partial or add to `_components.scss`.
- Listing pages: remove the existing `.hero` + `.section` structure and replace with the new partial + updated card grid.
- Detail pages: remove the existing `blog-header-wrapper` / two-column header and replace with the new partial. Body content below is unchanged.
- The `sub-page-hero` partial handles both variants (`listing` and `detail`) with conditional rendering.
- No eyebrow/announcement pill on sub-pages — home page only.

## 4. Other Technical Considerations
- All existing card classes (`.hp-blog-card`, `.hp-podcast-card`, `.hp-pres-card`) are already defined and styled in `_homepage.scss`. No new card SCSS needed — listing pages simply adopt them.
- Listing pages currently use 2-column `.blog-posts` / `.event-cards` grids. These will be replaced with the 3-column home page grid classes.
- The `blog/single.html` currently embeds the cover image inside the header wrapper. In the new design the image moves into the sub-page hero partial.
- Podcast `single.html` currently shows the guest photo inside `blog-header-wrapper`. Same migration applies.
- Presentations `single.html` has two code paths (on-demand vs event). The new header is shared — only the body content below differs.

## 5. Open Questions
- None — design approved via mockup on 2026-04-10.
