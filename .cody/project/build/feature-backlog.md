# Feature Backlog

This document lists features and enhancements derived from the plan. It is a living document that will evolve throughout the project. It is grouped by release, with the Backlog tracking all features not added to a release yet.  It is used to create releases to work on.

| Status |  | Priority |  |
|--------|-------------|---------|-------------|
| 🔴 | Not Started | High | High priority items |
| 🟡 | In Progress | Medium | Medium priority items |
| 🟢 | Completed | Low | Low priority items |

## Backlog

| ID  | Feature             | Description                               | Priority | Status |
|-----|---------------------|-------------------------------------------|----------|--------|
| B.1 | Future enhancements | Additional features to be planned | Low | 🟢 Completed |

## v1.8.6-swap-integration-to-sender - 🟢 Completed
Migrate newsletter signup integration from Mailchimp to Sender.net. The user has deleted their Mailchimp account and is now using Sender.net as their email marketing platform. This version removes all Mailchimp dependencies and code, replaces it with Sender.net API integration, and maintains all existing functionality (form validation, rate limiting, Resend email notifications).

**Key Changes:**
- Remove Mailchimp API dependency (`@mailchimp/mailchimp_marketing` package)
- Implement Sender.net API integration for adding newsletter subscribers
- Update environment variables from `MAILCHIMP_*` to `SENDER_*`
- Delete legacy Mailchimp documentation (`MAILCHIMP_SETUP.md`)
- Update README with new Sender.net environment variables
- Maintain existing form functionality, validation, and rate limiting
- Keep Resend email notifications unchanged
- Test directly in production (no local testing phase)

| ID  | Feature                 | Description                              | Priority | Status |
|-----|-------------------------|------------------------------------------|----------|--------|
| 14.1 | Research Sender.net API | Review api.sender.net documentation to verify endpoint and payload structure | High | 🟢 Completed |
| 14.2 | Remove Mailchimp dependency | Remove `@mailchimp/mailchimp_marketing` from package.json and run npm install | High | 🟢 Completed |
| 14.3 | Update newsletter function | Replace Mailchimp API code with Sender.net API integration in newsletter-signup.js | High | 🟢 Completed |
| 14.4 | Update environment variables | Change from MAILCHIMP_* to SENDER_* env vars with proper error handling | High | 🟢 Completed |
| 14.5 | Update documentation | Update README.md and delete MAILCHIMP_SETUP.md legacy documentation | Medium | 🟢 Completed |
| 14.6 | Deploy to production | Deploy changes and update Netlify environment variables | High | 🔴 Not Started |
| 14.7 | Production testing | Test newsletter signup in production and verify Sender.net integration | High | 🔴 Not Started |

## v1.8.5-new-video-page - 🟢 Completed
Create a new "Videos" section for on-demand video content under the "Learn" menu. This will be similar to the Events section but focused exclusively on video content with YouTube embeds, ordered by latest first, with multi-presenter support.

**Key Features:**
- New `/videos/` URL path with list and detail pages
- Navigation integration under "Learn" (header + footer, desktop + mobile)
- Home page integration: 4th box under Learn section (between Podcast and Events)
- Multi-presenter support (comma-separated, like events)
- Always embed YouTube videos on detail pages
- No Links section needed (removed entirely)
- Simplified archetype with fields: `title`, `image`, `date_time`, `presenter`, `video_url`, `draft` (summary and audience removed per user feedback)
- Complete directory structure following events pattern (content, layouts, images, SEO data, archetypes)
- Configuration parameter: `videos = "/videos/"`
- Automation script support: `./automations/create-content.sh video "Video Title"`
- Home page CSS update: Created separate 4-column grid class for Learn section while maintaining 3-column grid for Build section
- Inline link styling: Added `.section-link-inline` CSS class for maintaining text size while preserving link styling

| ID  | Feature                 | Description                              | Priority | Status |
|-----|-------------------------|------------------------------------------|----------|--------|
| 13.1 | Directory structure setup | Create content/videos/, layouts/videos/, images/videos/, SEO directories, and archetype | High | 🟢 Completed |
| 13.2 | Videos archetype | Create archetypes/videos.md with simplified frontmatter (title, image, date_time, presenter, video_url, draft) | High | 🟢 Completed |
| 13.3 | Videos list page | Create layouts/videos/list.html displaying all videos ordered by latest first | High | 🟢 Completed |
| 13.4 | Videos detail page | Create layouts/videos/single.html with YouTube embed, multi-presenter support, no Links section | High | 🟢 Completed |
| 13.5 | Navigation updates | Add "Videos" link to header and footer navigation (desktop + mobile) under "Learn" menu | High | 🟢 Completed |
| 13.6 | Home page integration | Add 4th box under Learn section with icon-videos.png and description, update grid to 4-column layout | High | 🟢 Completed |
| 13.7 | Configuration updates | Add `videos = "/videos/"` parameter to config files | High | 🟢 Completed |
| 13.8 | Automation script updates | Update create-content.sh to support `video` content type with singular-to-plural mapping | High | 🟢 Completed |
| 13.9 | SEO data setup | Create SEO YAML files for videos section (listpage.yaml and entries directory) | Medium | 🟢 Completed |
| 13.10 | robots.txt update | Add `Allow: /videos/` to production robots.txt for SEO | Medium | 🟢 Completed |
| 13.11 | CSS enhancements | Create `.homepage-features-grid-4col` and `.section-link-inline` classes | Medium | 🟢 Completed |

## v1.8.2-rename-presentations-to-events - 🟢 Completed
Complete rebranding from "Presentations" to "Events" throughout the entire platform. Update all directory structures, template files, CSS classes, configuration files, content paths, automation scripts, and documentation. This is a comprehensive rename that maintains all existing functionality while providing clearer, more inclusive terminology for the platform's event content.

**Scope:**
- Rename all "presentations" references to "events" (or "presentation" to "event" for singular)
- Update URL structure from `/presentations/` to `/events/`
- Keep all existing functionality, layouts, and features unchanged
- No redirects needed (clean cutover)

| ID  | Feature                 | Description                              | Priority | Status |
|-----|-------------------------|------------------------------------------|----------|--------|
| 12.1 | Directory structure rename | Rename 6 directories (content, layouts, images, SEO images, SEO data) and archetype from presentations to events | High | 🟢 Completed |
| 12.2 | Template file updates | Update 5 template files (single, list, index, header, footer) with events references | High | 🟢 Completed |
| 12.3 | CSS class updates | Update _components.scss to rename .presentation-* classes to .event-* | Medium | 🟢 Completed |
| 12.4 | Configuration updates | Update config.toml presentations parameter to events | High | 🟢 Completed |
| 12.5 | Automation script updates | Update create-content.sh to support singular "event" content type with plural mapping | High | 🟢 Completed |
| 12.6 | Documentation updates | Update components.md and content-management.md with events references | Medium | 🟢 Completed |
| 12.7 | Additional file updates | Update robots.txt, sitemap.xml, seo.html, nav-dropdown.html, scrolling-carousel.html, and all SEO YAML files | Medium | 🟢 Completed |
| 12.8 | Icon rename | Rename icon-presentation.png to icon-events.png | Low | 🟢 Completed |
| 12.9 | Testing and validation | Verify all events pages render correctly, navigation works, URLs updated, and content creation script works | High | 🟢 Completed |

## v1.8.1-updates-to-presentation-and-podcast-pages - 🟢 Completed
Updates to Podcast and Presentations list and single pages to improve content organization and user experience. Adds new "On-Demand" status and section for presentations, embeds YouTube videos for on-demand content, and conditionally displays sections based on content availability.

**Podcast List Page Updates:**
- Hide "On Demand" section heading if there are no upcoming episodes
- Show "On Demand" heading only when upcoming episodes exist

**Presentations List Page Updates:**
- Remove description text from presentation cards
- Add new "On-Demand" section between "Upcoming" and "Completed" sections
- Filter presentations by status:
  - **Upcoming**: Display presentations with `status = "upcoming"`
  - **On-Demand**: Display presentations with `status = "on-demand"` (sorted by latest date first)
  - **Completed**: Display presentations with `status = "completed"` (exclude on-demand items)

**Presentations Single Page Updates:**
- When `status = "on-demand"`:
  - Embed YouTube player using `on_demand_url` frontmatter field instead of displaying the presentation image
  - Hide the "Links" section entirely for on-demand presentations

| ID  | Feature                 | Description                              | Priority | Status |
|-----|-------------------------|------------------------------------------|----------|--------|
| 11.1 | Podcast list conditional heading | Hide "On Demand" heading if no upcoming episodes exist | Medium | 🟢 Completed |
| 11.2 | Presentations list description removal | Remove description field from presentation card boxes | Medium | 🟢 Completed |
| 11.3 | Presentations "On-Demand" section | Add new section between Upcoming and Completed for on-demand presentations | High | 🟢 Completed |
| 11.4 | Presentations status filtering | Update list template to filter by status (upcoming, on-demand, completed) | High | 🟢 Completed |
| 11.5 | On-demand date sorting | Sort on-demand presentations by latest date first | Medium | 🟢 Completed |
| 11.6 | YouTube embed for on-demand | Embed YouTube player on single page when status is on-demand | High | 🟢 Completed |
| 11.7 | Conditional links section | Hide Links section on single page when status is on-demand | Medium | 🟢 Completed |

## v1.8.0-newsletter-page - 🟢 Completed
Create a dedicated newsletter signup page at `/newsletter` with a form collecting First Name, Last Name, and Email. The design and layout should strictly follow the existing contact page format (`themes/ibuildwithai/layouts/contact.html`), with "Newsletter" as the heading and "Sign up to our newsletter to stay up to date" as the subheading.

The form submission must:
1.  Send an email notification to the site owner via Resend (similar to contact form).
2.  Add the subscriber to a Mailchimp list.
3.  Display a "Thank You" message on the same page upon success.
4.  Enforce required fields and valid email format.

| ID  | Feature                 | Description                              | Priority | Status |
|-----|-------------------------|------------------------------------------|----------|--------|
| 10.1 | Newsletter Layout Template | Create `themes/ibuildwithai/layouts/newsletter/single.html` mirroring `contact.html` | High | 🟢 Completed |
| 10.2 | Newsletter Content Page | Create `content/newsletter.md` to render the page | High | 🟢 Completed |
| 10.3 | Newsletter Form JS | Create `themes/ibuildwithai/assets/js/newsletter-form.js` for validation and submission handling | High | 🟢 Completed |
| 10.4 | Newsletter Backend Function | Create `backend/netlify/functions/newsletter-signup.js` for Resend and Mailchimp integration | High | 🟢 Completed |
| 10.5 | Environment Variables | Document Mailchimp environment variables (`MAILCHIMP_API_KEY`, `MAILCHIMP_SERVER_PREFIX`, `MAILCHIMP_LIST_ID`) | High | 🟢 Completed |
| 10.6 | Navigation Updates | Add "Newsletter" link to Header and Footer navigation under "About" | High | 🟢 Completed |
| 10.7 | Security Enhancements | Update CORS and rate limiting for all forms (contact, newsletter, reminder) | High | 🟢 Completed |

## v1.7.0-rebrand-to-i-build-with-ai - 🟢 Completed
Complete rebranding from "iCodeWith.ai" to "I Build With AI" (iBuildWith.ai). Update domain, theme name, logos, configuration files, SEO metadata, content files, GitHub workflows, and all references throughout the codebase. Includes Cloudflare redirect setup for old domain. Production deployment completed and tested.

| ID  | Feature                 | Description                              | Priority | Status |
|-----|-------------------------|------------------------------------------|----------|--------|
| 9.1 | Theme directory rename | Rename `themes/icodewithai/` to `themes/ibuildwithai/` | High | 🟢 Completed |
| 9.2 | Configuration updates | Update all config.toml files (default, prod, next, local) with new domain and theme name | High | 🟢 Completed |
| 9.3 | SEO metadata updates | Update 47+ SEO YAML files with new brand name and domain | High | 🟢 Completed |
| 9.4 | Template file updates | Update all HTML/Hugo template files with new branding, alt text, and references | High | 🟢 Completed |
| 9.5 | JavaScript updates | Update contact-form.js and reminder-form.js with new Netlify function URLs | High | 🟢 Completed |
| 9.6 | Backend package updates | Update backend package.json and repository references | High | 🟢 Completed |
| 9.7 | GitHub workflows update | Update hugo-prod.yml and hugo-next.yml with new domain and repo references | High | 🟢 Completed |
| 9.8 | Content file updates | Update all markdown content files (blog, podcast, presentations, apps) with new branding | High | 🟢 Completed |
| 9.9 | People data updates | Update data/people files with new company name and bio references | Medium | 🟢 Completed |
| 9.10 | Documentation updates | Update README, components.md, content-management.md with new branding | Medium | 🟢 Completed |
| 9.11 | Logo and asset creation | Create new logo files, favicons, and social share images | High | 🟢 Completed |
| 9.12 | Analytics updates | Update Plausible.io and analytics tracking domain references | Medium | 🟢 Completed |
| 9.13 | Cloudflare redirect setup | Configure 301 redirects from icodewith.ai to ibuildwith.ai with path preservation | High | 🟢 Completed |
| 9.14 | Production deployment | Deploy to production and verify all functionality | High | 🟢 Completed |

## v1.6.0-scrolling-component - 🟢 Completed
Create a reusable infinite scrolling carousel component for displaying content cards (apps, features, etc.) with configurable auto-scroll, speed, direction, and hover interactions. Replace the current "Explore" section on the home page.

| ID  | Feature                 | Description                              | Priority | Status |
|-----|-------------------------|------------------------------------------|----------|--------|
| 8.1 | Scrolling carousel shortcode | Create Hugo shortcode with configurable scroll, speed, direction parameters | High | 🟢 Completed |
| 8.2 | Card/box component | Build rectangular cards with icon, heading, optional description, and link | High | 🟢 Completed |
| 8.3 | Infinite scroll JavaScript | Implement seamless infinite loop scrolling with pause on hover | High | 🟢 Completed |
| 8.4 | Scroll controls | Add auto/none toggle, slow/fast speed, left/right direction controls | High | 🟢 Completed |
| 8.5 | Edge fade effect | Implement gradient fade-out on both left and right edges | High | 🟢 Completed |
| 8.6 | SCSS styling | Dark theme styling with green accents, hover effects matching FAQ component | High | 🟢 Completed |
| 8.7 | Home page integration | Replace current "Explore" section with new scrolling component | High | 🟢 Completed |
| 8.8 | Responsive design | Ensure horizontal scrolling works on mobile, tablet, and desktop | High | 🟢 Completed |
| 8.9 | Accessibility | Add ARIA attributes, keyboard navigation support | Medium | 🟢 Completed |
| 8.10 | Documentation | Add inline comments and usage examples for content creators | Medium | 🟢 Completed |

## v1.5.0-faq-component - 🟢 Completed
Create a reusable FAQ accordion component for displaying frequently asked questions throughout the site. Individual FAQ content files stored in `content/faq/` with flexible ordering via Hugo shortcode.

| ID  | Feature                 | Description                              | Priority | Status |
|-----|-------------------------|------------------------------------------|----------|--------|
| 7.1 | FAQ content structure | Create `content/faq/` folder and archetype template | High | 🟢 Completed |
| 7.2 | FAQ shortcode | Create Hugo shortcode for flexible FAQ display with comma-separated FAQ IDs | High | 🟢 Completed |
| 7.3 | FAQ CSS component | Build accordion-style CSS with dark theme, green accents, and rounded borders | High | 🟢 Completed |
| 7.4 | FAQ JavaScript | Implement accordion interaction (one open at a time, chevron animation) | High | 🟢 Completed |
| 7.5 | Home page integration | Add FAQ section below "Next Generation App Builders" section | High | 🟢 Completed |
| 7.6 | Sample FAQ content | Create 5 sample FAQ markdown files for testing | Medium | 🟢 Completed |
| 7.7 | Responsive design | Ensure FAQ component works on mobile, tablet, and desktop | High | 🟢 Completed |
| 7.8 | Accessibility | Add ARIA attributes for screen readers and keyboard navigation | Medium | 🟢 Completed |

## v1.4.6-home-page-updates-part-1 - 🟢 Completed
Remove Show & Tell section entirely and update home page layout by moving Presentations box to Show & Tell's position and extending App Gallery to full width.

| ID  | Feature                 | Description                              | Priority | Status |
|-----|-------------------------|------------------------------------------|----------|--------|
| 6.1 | Delete Show & Tell content | Remove `content/show-and-tell/` directory | High | 🟢 Completed |
| 6.2 | Delete Show & Tell archetypes | Remove `archetypes/show-and-tell.md` | High | 🟢 Completed |
| 6.3 | Delete Show & Tell SEO data | Remove `data/seo/content-types/show-and-tell/` directory | High | 🟢 Completed |
| 6.4 | Delete Show & Tell layouts | Remove `themes/icodewithai/layouts/show-and-tell/` directory | High | 🟢 Completed |
| 6.5 | Delete Show & Tell images | Remove 3 image locations (show-and-tell folder, icon, SEO images) | High | 🟢 Completed |
| 6.6 | Remove Show & Tell from navigation | Remove from header and footer templates | High | 🟢 Completed |
| 6.7 | Remove Show & Tell config | Remove `showandtell` parameter from config files | High | 🟢 Completed |
| 6.8 | Update home page layout | Move Presentations to first row, extend App Gallery to full width | High | 🟢 Completed |
| 6.9 | Update home page CSS | Adjust CSS for new full-width App Gallery layout | Medium | 🟢 Completed |
| 6.10 | Test responsive behavior | Verify layout works on mobile, tablet, and desktop | High | 🟢 Completed |

## v1.4.5-consolidate-asset-folders - 🟢 Completed
Consolidate JS and SCSS assets from root `assets/` folder to `themes/icodewithai/assets/` for consistency with image consolidation (v1.4.4) and improved maintainability. Achieved 3% build performance improvement.

| ID  | Feature                 | Description                              | Priority | Status |
|-----|-------------------------|------------------------------------------|----------|--------|
| 5.1 | Move JS assets | Move all JS files from `assets/js/` to `themes/icodewithai/assets/js/` | High | 🟢 Completed |
| 5.2 | Move SCSS assets | Move all SCSS files from `assets/scss/` to `themes/icodewithai/assets/scss/` | High | 🟢 Completed |
| 5.3 | Verify asset resolution | Test that Hugo still resolves assets correctly via cascading lookup | High | 🟢 Completed |
| 5.4 | Clean up root assets | Remove empty root `assets/` folder after successful migration | Medium | 🟢 Completed |
| 5.5 | Build performance test | Measure build performance before/after consolidation | Low | 🟢 Completed |

## v1.4.4-consolidate-images - 🟢 Completed
Consolidate scattered image assets from 5 locations into single organized structure within `themes/icodewithai/assets/images/`. Achieved 37% build performance improvement.

| ID  | Feature                 | Description                              | Priority | Status |
|-----|-------------------------|------------------------------------------|----------|--------|
| 4.1 | Image migration | Move SEO images from static to assets, organize by category | High | 🟢 Completed |
| 4.2 | Template updates | Update 16 template references with TrimPrefix pattern | High | 🟢 Completed |
| 4.3 | Data standardization | Standardize all paths to `/images/...` format | High | 🟢 Completed |
| 4.4 | SEO partial updates | Implement 3-step fallback for social images | High | 🟢 Completed |
| 4.5 | Performance validation | Verify 37% build performance improvement | Medium | 🟢 Completed |

## v1.4.3-support-multiple-presenters-in-prezos - 🟢 Completed
Extend presentations system to support multiple presenters while maintaining backward compatibility with single presenter presentations.

| ID  | Feature                 | Description                              | Priority | Status |
|-----|-------------------------|------------------------------------------|----------|--------|
| 3.1 | Multi-presenter parsing | Parse comma-separated presenter values from frontmatter | High | 🟢 Completed |
| 3.2 | Name formatting enhancement | Implement proper grammar formatting with Oxford comma rules | High | 🟢 Completed |
| 3.3 | Single.html template updates | Update individual presentation page for multiple presenters | High | 🟢 Completed |
| 3.4 | List.html template updates | Update presentations listing for multiple presenters | High | 🟢 Completed |
| 3.5 | Responsive design maintenance | Ensure multiple presenter boxes maintain responsive behavior | Medium | 🟢 Completed |

## v1.4.1-rename-to-show-and-tell - 🟢 Completed
Rebranding "Built with Vibes" to "Show & Tell" - maintaining the same show format but with a more generic, universally understood name.

| ID  | Feature                 | Description                              | Priority | Status |
|-----|-------------------------|------------------------------------------|----------|--------|
| 2.1 | Section Rebranding | Rename "Built with Vibes" to "Show & Tell" throughout codebase | High | 🟢 Completed |
| 2.2 | URL Structure Update | Change `/built-with-vibes/` to `/show-and-tell/` | High | 🟢 Completed |
| 2.3 | Directory Structure Rename | Rename all built-with-vibes-related directories and files | High | 🟢 Completed |
| 2.4 | Template Updates | Update Hugo templates with new section references | High | 🟢 Completed |
| 2.5 | CSS Class Renaming | Update CSS classes from `.built-with-vibes-*` to `.show-and-tell-*` | Medium | 🟢 Completed |
| 2.6 | Automation Script Updates | Update content creation scripts for new content type | Medium | 🟢 Completed |
| 2.7 | Navigation Updates | Update site navigation and menus | High | 🟢 Completed |

## v1.4.0-rename-tutorials-to-built-with-vibes - 🟢 Completed
Complete rebranding of the "Tutorials" section to "Built with Vibes" - a new show format where vibe coders share their screens and walk through real projects.

| ID  | Feature                 | Description                              | Priority | Status |
|-----|-------------------------|------------------------------------------|----------|--------|
| 1.1 | Section Rebranding | Rename "Tutorials" to "Built with Vibes" throughout codebase | High | 🟢 Completed |
| 1.2 | URL Structure Update | Change `/tutorials/` to `/built-with-vibes/` | High | 🟢 Completed |
| 1.3 | Directory Structure Rename | Rename all tutorial-related directories and files | High | 🟢 Completed |
| 1.4 | Template Updates | Update Hugo templates with new section references | High | 🟢 Completed |
| 1.5 | CSS Class Renaming | Update CSS classes from `.tutorial-*` to `.built-with-vibes-*` | Medium | 🟢 Completed |
| 1.6 | Automation Script Updates | Update content creation scripts for new content type | Medium | 🟢 Completed |
| 1.7 | Navigation Updates | Update site navigation and menus | High | 🟢 Completed |