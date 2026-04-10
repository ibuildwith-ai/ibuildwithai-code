# Version Design Document : v2.0.0-home-page-and-nav-redesign
Technical implementation and design guide for the upcoming version.

## 1. Features Summary
_Overview of features included in this version._

This version is a major redesign that shifts the site from content-first to product-first. Three key areas of change:

**Navigation Restructure**
- Top nav changes from Learn/Explore/Build/Community/About → **Products/Resources/About**
- Products dropdown: Blocks Builder AI, Cody Product Builder, Cody Article Writer (all external links)
- Resources dropdown: Blog, Presentations, Explore Apps
- About dropdown: Marcelo Lewin, Newsletter, Contact, **Meetup** (new — moved from Community)
- Footer restructured to match: Products column, Resources column, About column (with Meetup), Follow Us column
- Build and Community sections fully removed from nav

**Content Merge: Videos + Events → Presentations**
- Videos section (4 entries) merges into Events section, renamed to **Presentations**
- Video entries become presentations with `status: "on-demand"` (they have YouTube embeds)
- Duplicate event entries (that exist in both events and videos) are removed — video versions kept
- Listing page displays three groupings: Upcoming, On-Demand, Completed
- App Gallery moves under Resources as **Explore Apps** (content and templates unchanged, nav reference updated)

**Home Page Redesign**
- Keep tagline/sub-tagline (reduced size)
- New product showcase: 3 cards with placeholder images, descriptions, external links
- Latest Blog Articles section (reuse existing blog card patterns)
- Latest Presentations section (reuse existing event/video card patterns)
- Remove: Start Your Journey (split cards), Explore (scrolling carousel), Build (feature cards), FAQ accordion

**Code Cleanup**
- Remove dead CSS, partials, templates, JS from removed sections
- Consolidate duplicate code exposed by the restructure

**HTML Mockups (Pre-Coding)**
- 2–3 HTML prototypes showing home page with new nav (top and bottom), stored in version folder
- **Creative freedom**: Mockups should explore fresh layouts and design ideas — not limited to existing components. New components can be proposed if the design calls for it. Stay within the established look and feel: dark theme (#121212), green accent (#22c55e), DM Sans font, existing color palette and spacing system.

## 2. Technical Architecture Overview
_High-level technical structure that supports all features in this version._

**No architectural changes** — this remains a Hugo static site with the same tech stack. All changes are at the template, content, and configuration layers:

| Layer | What Changes |
|-------|-------------|
| **Hugo Config** | `config.toml` — menu structure rewritten (Products, Resources, About). Remove `videos` and `events` page slugs, add `presentations`. Remove Discord/community params. |
| **Content** | `/content/videos/` entries move to `/content/presentations/`. `/content/events/` entries move to `/content/presentations/`. Duplicates resolved (keep video versions). `/content/apps/` stays but nav reference changes. |
| **Templates** | New `/layouts/presentations/list.html` and `single.html`. Remove `/layouts/videos/`. Remove `/layouts/events/`. Home page (`index.html`) rewritten. |
| **Partials** | `header.html` and `footer.html` updated for new nav structure. No new partials expected — reuse existing `nav-dropdown.html`, `app-card` patterns. |
| **Archetypes** | New `presentations.md` archetype combining events + videos fields. Remove `videos.md` and `events.md` archetypes. See details below. |
| **SCSS** | Audit `.video-*` and `.event-*` styles — migrate relevant ones to `.presentation-*` or shared classes. Keep all reusable components. |
| **JavaScript** | No new JS. No JS removed — keep all component scripts for future use. |
| **SEO** | `seo.html` partial has section-specific logic for `events` (lines 174, 374) and `videos` (lines 182, 463, 522) — all must be updated to reference `presentations` section. |
| **Static Images** | Default image paths in archetypes reference `/images/events/default.png` and `/images/videos/default.png` — update to `/images/presentations/default.png`. |

**Archetype Changes**

Current `events.md` archetype fields: title, summary, image, date_time, location, timezone, presenter, status (upcoming/completed/on-demand), learn_more_url, on_demand_url, register_url, meeting_type (in-person/online), draft.

Current `videos.md` archetype fields: title, image, date_time, presenter, video_url, draft.

New `presentations.md` archetype — combined superset:
```
title, summary, image, date_time, location, timezone, presenter,
status (upcoming/completed/on-demand), learn_more_url, on_demand_url,
register_url, meeting_type (in-person/online), video_url, draft
```
The `video_url` field is what distinguishes on-demand presentations from completed events. When `status = "on-demand"` and `video_url` is set, the single page renders a YouTube embed. When `on_demand_url` is set (external link to a recording), it renders as a link.

**Config Changes (`config/_default/config.toml`)**
- Remove page slugs: `videos = "/videos/"` (line 36), `events = "/events/"` (line 37)
- Add page slug: `presentations = "/presentations/"`
- Update menu structure: remove Learn, Explore, Build, Community menus; add Products, Resources menus; update About menu (add Meetup after Contact)
- Remove Discord-related params if present

## 3. Implementation Notes
_Shared technical considerations across all features in this version._

**Content Migration Strategy**
- The 4 videos in `/content/videos/` need to be moved to `/content/presentations/` with `status: "on-demand"` and their `video_url` field preserved.
- Events in `/content/events/` move to `/content/presentations/`. Any event that duplicates a video entry is removed (the video version is canonical because it has the YouTube embed).
- The `status` field in the archetype will support: `upcoming`, `on-demand`, `completed` (currently events use `upcoming` and `completed`; videos have no status field).
- The existing events archetype field `on_demand_url` (external link for completed events) remains useful for linking to external recordings.

**Presentations Listing Page**
- Three sections: Upcoming (sorted by date asc), On-Demand (sorted by date desc), Completed (sorted by date desc)
- On-Demand entries display YouTube thumbnail and "Watch video →" link pattern (from current videos list)
- Upcoming and Completed entries display as they do today in events list
- The `app-card` component is already shared between events and videos, so it should work for all three groupings with minor template logic changes.

**Presentations Single Page**
- Must handle two display modes:
  1. **On-demand** (has `video_url`): Show YouTube embed (from current videos/single.html), presenter bios, content
  2. **Upcoming/Completed** (no `video_url`): Show event-style layout with header image, presenter info, register/learn more links
- Merge the best of both `events/single.html` and `videos/single.html` into one template

**Home Page Product Cards**
- 3 cards in a row on desktop, stacked on mobile
- Each card: placeholder image, product name, short description, CTA button linking to external site
- Pull descriptions from existing content (current Build section on home page has Cody PB and Cody AW descriptions)
- Blocks Builder AI description pulled from https://www.blocksbuilder.ai (user will refine later)
- Placeholder images: agent's choice of style; user needs final dimensions communicated so they can replace with real images

**Home Page Latest Content**
- Latest Blog Articles: show the 3 most recent blog posts
- Latest Presentations: show the 3 most recent presentations across ALL statuses (upcoming, on-demand, completed), sorted by date descending. E.g., if 1 upcoming and 2 on-demand are the most recent, those 3 are shown.

**Navigation**
- `nav-dropdown.html` partial already supports external links (`url` field in menu config) — Products dropdown items will all use external URLs
- All external links must display the `↗` external arrow icon (CSS class `.external-link-icon`) — already used in footer and nav-dropdown partial
- Meetup link already exists in the config as an external link — just needs to move from Community to About
- Mobile menu (`mobile-menu.js`) reads from the same menu config, so it should update automatically

**Footer**
- Current footer has hardcoded link groups in `footer.html` — these need to be updated to match the new nav structure
- Column layout stays the same (4 columns), just content changes:
  - Column 2: Products (3 external links) + Resources (Blog, Presentations, Explore Apps)
  - Column 3: About (Marcelo, Newsletter, Contact, Meetup)
  - Column 4: Follow Us (unchanged)

## 4. Other Technical Considerations
_Any other technical information relevant to building this version._

**URL Structure**
- `/events/` → `/presentations/` (new URL)
- `/videos/` → content moves to `/presentations/` (URL removed)
- `/apps/` → stays at `/apps/` but nav label changes to "Explore Apps"
- Set up Hugo aliases from old `/events/*` and `/videos/*` slugs to `/presentations/*` for backward compatibility (low effort, good practice)

**Image Assets**
- Video content images are in page bundles under `/content/videos/`; these move with the content to `/content/presentations/`
- Event content images are in `/content/events/`; these also move to `/content/presentations/`
- SEO images in `/static/images/seo/` may need updating if there are events/videos-specific OG images

**Responsive Design**
- Single breakpoint at 1050px (tablet) — all new sections must follow this pattern
- Product cards: 3-column grid on desktop, single column on mobile
- Latest content sections: follow existing card grid patterns

**Code Cleanup Targets**
- `/layouts/videos/` — entire directory removed after migration
- `/layouts/events/` — replaced by `/layouts/presentations/`
- SCSS: Audit `.video-*` styles — migrate relevant ones to `.presentation-*` or shared classes
- **Keep all reusable components** (scrolling carousel, FAQ accordion, split cards, app-card, etc.) — only remove their usage from the home page. These may be used on other pages or in future versions.

**Duplicate Resolution: Events with `on_demand_url`**
- Some completed events have an `on_demand_url` field that simply links to the corresponding video entry under `/videos/`. After the merge, these are duplicates of the on-demand entries (which have actual YouTube embeds via `video_url`).
- Resolution: remove these duplicate event entries, keep the video versions as the canonical on-demand presentations.
- The `on_demand_url` field remains in the archetype for future use (e.g., linking to external recordings not hosted on YouTube).

## 5. Open Questions
_Unresolved technical or product questions affecting this version._

All questions resolved. Proceeding with implementation.
