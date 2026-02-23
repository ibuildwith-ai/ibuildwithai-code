# Version Design Document: v1.4.6-home-page-updates-part-1
Technical implementation and design guide for removing Show & Tell section and updating home page layout.

## 1. Features Summary
_Overview of features included in this version._

This version performs two main tasks:

1. **Complete removal of Show & Tell section** - Delete all Show & Tell related files, directories, and references from the entire codebase
2. **Home page layout updates** - Reorganize the home page by moving the Presentations box to where Show & Tell was positioned and extending the App Gallery to full width

### Specific Changes:

**Show & Tell Removal:**
- Delete Show & Tell content files from `content/show-and-tell/` (entire directory)
- Delete Show & Tell archetype from `archetypes/show-and-tell.md`
- Delete Show & Tell layouts from `themes/icodewithai/layouts/show-and-tell/` (entire directory)
- Delete Show & Tell images from `themes/icodewithai/assets/images/show-and-tell/` (entire directory)
- Delete Show & Tell icon from `themes/icodewithai/assets/images/icons/icon-show-and-tell.png`
- Delete Show & Tell SEO images from `themes/icodewithai/assets/images/seo/content-type/show-and-tell/` (entire directory)
- Delete Show & Tell SEO data from `data/seo/content-types/show-and-tell/` (entire directory)
- Remove Show & Tell navigation links from header and footer (desktop and mobile)
- Remove `showandtell` parameter from config files

**Home Page Layout Updates:**
- Move Presentations split-card from second row to first row (where Show & Tell was)
- Extend App Gallery split-card to full width (remove from 2-column grid)
- Update CSS classes if needed for full-width App Gallery display

## 2. Technical Architecture Overview
_High-level technical structure that supports all features in this version._

**Hugo Static Site Architecture:**
- **Content Layer**: Hugo content files organized by section
- **Layout Layer**: Hugo templates in `themes/icodewithai/layouts/`
- **Asset Layer**: Images, icons in `themes/icodewithai/assets/images/`
- **Data Layer**: SEO metadata in `data/seo/`
- **Config Layer**: Site parameters in `config/_default/config.toml`

**Home Page Structure:**
- Main template: `themes/icodewithai/layouts/index.html`
- Uses Hugo template variables from `.Site.Params` for URLs
- Grid layouts controlled by CSS classes: `.homepage-features-grid` (3-column) and `.homepage-features-grid-2plus1` (2+1 layout)

## 3. Implementation Notes
_Shared technical considerations across all features in this version._

### Show & Tell Files to Delete:

**Content:**
- `content/show-and-tell/` (entire directory)

**Archetypes:**
- `archetypes/show-and-tell.md`

**Layouts:**
- `themes/icodewithai/layouts/show-and-tell/` (entire directory including `single.html` and `list.html`)

**Images:**
- `themes/icodewithai/assets/images/show-and-tell/` (entire directory)
- `themes/icodewithai/assets/images/icons/icon-show-and-tell.png`
- `themes/icodewithai/assets/images/seo/content-type/show-and-tell/` (entire directory)

**SEO Data:**
- `data/seo/content-types/show-and-tell/` (entire directory)

**Public folder** (generated, will be recreated on build):
- `public/show-and-tell/` (will disappear after rebuild)
- `public/images/icons/icon-show-and-tell.png` (will disappear after rebuild)

### Files to Modify:

**Config:**
- `config/_default/config.toml` - Remove `showandtell` parameter

**Navigation:**
- `themes/icodewithai/layouts/partials/header.html` - Remove Show & Tell link
- `themes/icodewithai/layouts/partials/footer.html` - Remove Show & Tell link

**Home Page:**
- `themes/icodewithai/layouts/index.html` - Remove Show & Tell card, move Presentations card, extend App Gallery

### Home Page Layout Changes:

**Current Structure:**
```
First Row (3-column grid):
- Blog
- Podcast
- Show & Tell

Second Row (2+1 grid):
- App Gallery
- Presentations
```

**New Structure:**
```
First Row (3-column grid):
- Blog
- Podcast
- Presentations (moved from row 2)

Second Row (full-width):
- App Gallery (extended to full width)
```

**CSS Classes:**
- First row: Keep `.homepage-features-grid` (3-column)
- Second row: Change from `.homepage-features-grid-2plus1` to single full-width card
- May need to add new CSS class for full-width card or reuse existing single-card pattern

## 4. Other Technical Considerations
_Shared any other technical information that might be relevant to building this version._

**Build Process:**
- After deletions, run `hugo server` locally to verify no broken links or references
- Check that navigation menus render correctly without Show & Tell
- Verify home page displays properly with new layout
- Test responsive behavior on mobile, tablet, and desktop

**SEO Impact:**
- Show & Tell URLs will return 404 after deployment
- No redirect strategy planned (section being removed entirely)
- Existing Show & Tell content will be deleted (one entry: "Automate your vibe coding workflow with hooks in Amazon Kiro")

**Automation Scripts:**
- No Show & Tell automation scripts found in `.vibedocs` directory
- If any exist elsewhere, they should be removed

**Git History:**
- All Show & Tell files will be deleted, but preserved in git history
- Can be recovered from previous commits if needed (v1.4.1 created Show & Tell)

## 5. Open Questions
_Unresolved technical or product questions affecting this version._

1. **CSS for Full-Width App Gallery**: Should we create a new CSS class for full-width feature cards, or reuse an existing pattern?
   - **Decision**: Will assess during implementation - likely can reuse existing single-card styling

2. **Automation Scripts**: Are there any Show & Tell automation scripts outside the main codebase?
   - **Decision**: Will search comprehensively before deletion

3. **Data Backup**: Should we archive Show & Tell content before deletion?
   - **Decision**: Not needed - git history preserves everything, and USER confirmed deletion is acceptable
