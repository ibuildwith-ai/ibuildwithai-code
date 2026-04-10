# Version Tasklist – v2.0.0-home-page-and-nav-redesign
This document outlines all the tasks to work on to deliver this particular version, grouped by phases.

| Status |      |
|--------|------|
| 🔴 | Not Started |
| 🟡 | In Progress |
| 🟢 | Completed |


## Phase 1: HTML Mockups (Pre-Coding)

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 1.1 | Create Mockup A | HTML prototype — clean/minimal layout with product showcase as hero cards, streamlined nav | None | 🟢 Completed | AGENT |
| 1.2 | Create Mockup B | HTML prototype — bold/editorial layout with large product feature sections, animated touches | None | 🟢 Completed | AGENT |
| 1.3 | Create Mockup C | HTML prototype — hybrid layout blending product cards with content previews in an integrated flow | None | 🟢 Completed | AGENT |
| 1.4 | User review & selection | User reviews all 3 mockups and selects Mockup B. Iterated on: logo, taglines, product images (SVGs), section headings, announcement pill, presentations section naming. | 1.1, 1.2, 1.3 | 🟢 Completed | USER |

## Phase 2: Navigation Restructure

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 2.1 | Update config.toml menus | Rewrite menu structure: Products, Resources, About. Update page slugs (remove videos/events, add presentations). Add Blocks Builder AI param. | 1.4 | 🟢 Completed | AGENT |
| 2.2 | Update header.html (desktop nav) | Replace Learn/Explore/Build/Community with Products/Resources/About. Add Meetup to About after Contact. All Products items use external links with ↗ icon. Updated dropdown CSS to mockup style. | 2.1 | 🟢 Completed | AGENT |
| 2.3 | Update header.html (mobile nav) | Mirror desktop nav changes in mobile menu overlay | 2.2 | 🟢 Completed | AGENT |
| 2.4 | Update footer.html (desktop) | Restructure to: Products + Resources stacked column, About column (with Meetup after Contact), Follow Us column. Remove Community, Build, Explore, Learn sections. | 2.1 | 🟢 Completed | AGENT |
| 2.5 | Update footer.html (mobile) | Mirror desktop footer changes: Products, Resources, About (with Meetup), Follow Us | 2.4 | 🟢 Completed | AGENT |
| 2.6 | Test navigation | Hugo build passes. Verify all nav links work, external links show ↗ icon, mobile menu functions correctly. | 2.2, 2.3, 2.4, 2.5 | 🟢 Completed | AGENT + USER |

## Phase 3: Content Merge — Videos + Events → Presentations

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 3.1 | Create presentations content folder | Create `/content/presentations/` directory | 1.4 | 🔴 Not Started | AGENT |
| 3.2 | Migrate video content | Move all 4 video entries to `/content/presentations/`, set `status: "on-demand"`, preserve `video_url` | 3.1 | 🔴 Not Started | AGENT |
| 3.3 | Migrate event content | Move non-duplicate events to `/content/presentations/`, preserve existing status values | 3.1 | 🔴 Not Started | AGENT |
| 3.4 | Remove duplicate events | Identify and remove event entries that duplicate video entries (keep video versions with YouTube embeds) | 3.2, 3.3 | 🔴 Not Started | AGENT |
| 3.5 | Create presentations archetype | New `archetypes/presentations.md` combining events + videos fields (title, summary, image, date_time, location, timezone, presenter, status, learn_more_url, on_demand_url, register_url, meeting_type, video_url, draft) | 3.1 | 🔴 Not Started | AGENT |
| 3.6 | Remove old archetypes | Delete `archetypes/events.md` and `archetypes/videos.md` | 3.5 | 🔴 Not Started | AGENT |
| 3.7 | Create presentations list template | New `/layouts/presentations/list.html` with Upcoming, On-Demand, Completed groupings | 3.1 | 🔴 Not Started | AGENT |
| 3.8 | Create presentations single template | New `/layouts/presentations/single.html` handling both on-demand (YouTube embed) and event-style display | 3.1 | 🔴 Not Started | AGENT |
| 3.9 | Remove old layout directories | Delete `/layouts/videos/` and `/layouts/events/` directories | 3.7, 3.8 | 🔴 Not Started | AGENT |
| 3.10 | Update default image paths | Create `/static/images/presentations/default.png` (or move from events/videos defaults) | 3.1 | 🔴 Not Started | AGENT |
| 3.11 | Add Hugo aliases | Add aliases in migrated content frontmatter for old `/events/*` and `/videos/*` URLs | 3.2, 3.3 | 🔴 Not Started | AGENT |
| 3.12 | Update SEO partial | Update `seo.html` to replace `events` and `videos` section references with `presentations` | 3.1 | 🔴 Not Started | AGENT |
| 3.13 | Test presentations section | Verify listing page groupings, single page display for all statuses, YouTube embeds, SEO meta tags | 3.4-3.12 | 🔴 Not Started | AGENT + USER |

## Phase 4: App Gallery → Explore Apps

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 4.1 | Update nav references | Change "App Gallery" label to "Explore Apps" in config, header, footer | 2.1 | 🔴 Not Started | AGENT |
| 4.2 | Update apps list template | Update hero title from "App Gallery" to "Explore Apps" and update subtitle | None | 🔴 Not Started | AGENT |
| 4.3 | Test Explore Apps | Verify nav links, listing page, and single pages still work | 4.1, 4.2 | 🔴 Not Started | AGENT + USER |

## Phase 5: Home Page Redesign

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 5.1 | Implement chosen mockup design | Built home page layout from Mockup B using Hugo templates. New _homepage.scss with all section styles. | 1.4, 2.6 | 🟢 Completed | AGENT |
| 5.2 | Reduce tagline/sub-tagline | Hero uses clamp(2rem, 4vw, 3rem) — smaller than original. Sub-tagline pulls from site description param. | 5.1 | 🟢 Completed | AGENT |
| 5.3 | Build product showcase section | 3 product cards with SVG images, editorial grid (featured left + 2 right), external links with ↗, gradient border glow hover. | 5.1 | 🟢 Completed | AGENT |
| 5.4 | Build Latest Blog Articles section | Dynamically displays 3 most recent blog posts with date, title, excerpt, read link. | 5.1 | 🟢 Completed | AGENT |
| 5.5 | Build Latest Presentations section | Placeholder added — will be populated with dynamic content after Phase 3 content merge. | 5.1, 3.7 | 🟡 In Progress | AGENT |
| 5.6 | Remove old home page sections | Old sections (Start Your Journey, Explore carousel, Build cards, FAQ) fully replaced by new layout. | 5.1 | 🟢 Completed | AGENT |
| 5.7 | Create any new components/SCSS | Created _homepage.scss with hero-v2, product cards, blog cards, section styling, buttons, responsive rules. SVG product images in themes/assets/images/products/. | 5.1 | 🟢 Completed | AGENT |
| 5.8 | Test home page responsive | Desktop and mobile tested. Fixed: header height/alignment, nav dropdown style, logo sizing, link contrast, clickable cards, footer layout, mobile nav (flat list design), hover standardization, removed underlines. | 5.2-5.7 | 🟢 Completed | AGENT + USER |

## Phase 6: Code Cleanup

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 6.1 | Remove `/layouts/videos/` | Delete entire videos layout directory | 3.9 | 🔴 Not Started | AGENT |
| 6.2 | Remove `/layouts/events/` | Delete entire events layout directory | 3.9 | 🔴 Not Started | AGENT |
| 6.3 | Audit and clean SCSS | Remove unused `.video-*` and `.event-*` styles. Consolidate into `.presentation-*` where needed. Keep all reusable component styles (carousel, FAQ, split cards, etc.) | 5.7 | 🔴 Not Started | AGENT |
| 6.4 | Update internal links | Search entire codebase for references to old nav structure (events, videos, community, build paths) and update | 3.13, 4.3 | 🔴 Not Started | AGENT |
| 6.5 | Remove unused config params | Clean up config.toml: remove discord, old page slugs, any orphaned params | 2.1 | 🔴 Not Started | AGENT |

## Phase 7: End-to-End Testing

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 7.1 | Full navigation test | Test all top nav, mobile nav, and footer links (internal and external) | 6.1-6.5 | 🔴 Not Started | AGENT + USER |
| 7.2 | Presentations test | Verify all presentation entries display correctly — upcoming, on-demand (YouTube), completed | 6.1-6.5 | 🔴 Not Started | AGENT + USER |
| 7.3 | Home page test | Verify all sections, product links, latest content, responsive behavior | 6.1-6.5 | 🔴 Not Started | AGENT + USER |
| 7.4 | Hugo build test | Run `hugo` build to verify no errors or warnings | 6.1-6.5 | 🔴 Not Started | AGENT |
| 7.5 | Cross-page test | Spot-check blog, podcast, apps, about pages for broken references | 7.1-7.4 | 🔴 Not Started | AGENT + USER |
