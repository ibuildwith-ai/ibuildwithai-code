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
| 3.1 | Create presentations content folder | Created `/content/presentations/` | 1.4 | 🟢 Completed | AGENT |
| 3.2 | Migrate video content | 4 video entries moved, `status: "on-demand"` added to each | 3.1 | 🟢 Completed | AGENT |
| 3.3 | Migrate event content | 14 non-duplicate events moved to presentations | 3.1 | 🟢 Completed | AGENT |
| 3.4 | Remove duplicate events | 4 duplicates identified and excluded (3 exact + 1 planet-cyber-sec) | 3.2, 3.3 | 🟢 Completed | AGENT |
| 3.5 | Create presentations archetype | `archetypes/presentations.md` created with combined fields | 3.1 | 🟢 Completed | AGENT |
| 3.6 | Remove old archetypes | Deleted `archetypes/events.md` and `archetypes/videos.md` | 3.5 | 🟢 Completed | AGENT |
| 3.7 | Create presentations list template | `presentations/list.html` with Upcoming, On-Demand, Completed groupings | 3.1 | 🟢 Completed | AGENT |
| 3.8 | Create presentations single template | `presentations/single.html` — on-demand shows YouTube embed, upcoming/completed shows event layout | 3.1 | 🟢 Completed | AGENT |
| 3.9 | Remove old layout directories | Deleted `/layouts/videos/` and `/layouts/events/` | 3.7, 3.8 | 🟢 Completed | AGENT |
| 3.10 | Update default image paths | Merged events + videos images into `/images/presentations/`. Updated all content image paths. | 3.1 | 🟢 Completed | AGENT |
| 3.11 | Add Hugo aliases | Skipped — not needed | 3.2, 3.3 | N/A | AGENT |
| 3.12 | Update SEO partial | All `events` and `videos` references replaced with `presentations` in seo.html | 3.1 | 🟢 Completed | AGENT |
| 3.13 | Test presentations section | Hugo build passes. Home page presentations section wired up. Visual testing done. | 3.4-3.12 | 🟢 Completed | AGENT + USER |

## Phase 4: App Gallery → Explore Apps

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 4.1 | Update nav references | Change "App Gallery" label to "Explore Apps" in config, header, footer | 2.1 | 🟢 Completed | AGENT |
| 4.2 | Update apps list template | Updated hero: "Explore Apps" title, "Apps and prototypes built with AI" subtitle | None | 🟢 Completed | AGENT |
| 4.3 | Test Explore Apps | Hugo build passes. Nav links point to /apps/, listing page updated. | 4.1, 4.2 | 🟢 Completed | AGENT + USER |

## Phase 5: Home Page Redesign

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 5.1 | Implement chosen mockup design | Built home page layout from Mockup B using Hugo templates. New _homepage.scss with all section styles. | 1.4, 2.6 | 🟢 Completed | AGENT |
| 5.2 | Reduce tagline/sub-tagline | Hero uses clamp(2rem, 4vw, 3rem) — smaller than original. Sub-tagline pulls from site description param. | 5.1 | 🟢 Completed | AGENT |
| 5.3 | Build product showcase section | 3 product cards with SVG images, editorial grid (featured left + 2 right), external links with ↗, gradient border glow hover. | 5.1 | 🟢 Completed | AGENT |
| 5.4 | Build Latest Blog Articles section | Dynamically displays 3 most recent blog posts with date, title, excerpt, read link. | 5.1 | 🟢 Completed | AGENT |
| 5.5 | Build Latest Presentations section | Dynamic: shows 3 most recent presentations across all statuses with badges (Upcoming/On-Demand/Completed), clickable cards. | 5.1, 3.7 | 🟢 Completed | AGENT |
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
