# Version Tasklist – v1.4.6-home-page-updates-part-1
This document outlines all the tasks to work on to deliver this particular version, grouped by phases.

| Status |      |
|--------|------|
| 🔴 | Not Started |
| 🟡 | In Progress |
| 🟢 | Completed |


## Phase 1: Show & Tell Content and Data Removal

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 1.1 | Delete Show & Tell content | Delete `content/show-and-tell/` directory and all files | None | 🟢 Completed | AGENT |
| 1.2 | Delete Show & Tell archetype | Delete `archetypes/show-and-tell.md` file | None | 🟢 Completed | AGENT |
| 1.3 | Delete Show & Tell SEO data | Delete `data/seo/content-types/show-and-tell/` directory | None | 🟢 Completed | AGENT |
| 1.4 | Verify deletions | Confirm all content and data files are removed | 1.1, 1.2, 1.3 | 🟢 Completed | AGENT |


## Phase 2: Show & Tell Layout and Template Removal

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 2.1 | Delete Show & Tell layouts | Delete `themes/icodewithai/layouts/show-and-tell/` directory | None | 🟢 Completed | AGENT |
| 2.2 | Verify layout deletions | Confirm all layout templates are removed | 2.1 | 🟢 Completed | AGENT |


## Phase 3: Show & Tell Image Asset Removal

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 3.1 | Delete Show & Tell image directory | Delete `themes/icodewithai/assets/images/show-and-tell/` directory | None | 🟢 Completed | AGENT |
| 3.2 | Delete Show & Tell icon | Delete `themes/icodewithai/assets/images/icons/icon-show-and-tell.png` | None | 🟢 Completed | AGENT |
| 3.3 | Delete Show & Tell SEO images | Delete `themes/icodewithai/assets/images/seo/content-types/show-and-tell/` directory | None | 🟢 Completed | AGENT |
| 3.4 | Verify image deletions | Confirm all image assets are removed | 3.1, 3.2, 3.3 | 🟢 Completed | AGENT |


## Phase 4: Show & Tell Navigation and Config Removal

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 4.1 | Remove Show & Tell from header | Remove Show & Tell link from `themes/icodewithai/layouts/partials/header.html` | None | 🟢 Completed | AGENT |
| 4.2 | Remove Show & Tell from footer | Remove Show & Tell link from `themes/icodewithai/layouts/partials/footer.html` | None | 🟢 Completed | AGENT |
| 4.3 | Remove Show & Tell config parameter | Remove `showandtell` parameter from `config/_default/config.toml` | None | 🟢 Completed | AGENT |
| 4.4 | Verify navigation and config updates | Confirm all references are removed | 4.1, 4.2, 4.3 | 🟢 Completed | AGENT |


## Phase 5: Home Page Layout Updates

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 5.1 | Remove Show & Tell card from home page | Remove Show & Tell split-card from `themes/icodewithai/layouts/index.html` | Phase 1, 2, 3, 4 | 🟢 Completed | AGENT |
| 5.2 | Move Presentations to first row | Move Presentations split-card from second row to first row (where Show & Tell was) | 5.1 | 🟢 Completed | AGENT |
| 5.3 | Extend App Gallery to full width | Update App Gallery to be full-width instead of 2-column layout | 5.2 | 🟢 Completed | AGENT |
| 5.4 | Update CSS classes if needed | Add or modify CSS for full-width App Gallery display | 5.3 | 🟢 Completed | AGENT |
| 5.5 | Verify home page layout | Confirm new layout renders correctly | 5.1, 5.2, 5.3, 5.4 | 🟢 Completed | AGENT |


## Phase 6: Testing and Validation

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 6.1 | Build site locally | Run `hugo server` to test the build | Phase 5 | 🟢 Completed | USER |
| 6.2 | Test desktop layout | Verify home page displays correctly on desktop | 6.1 | 🟢 Completed | USER |
| 6.3 | Test tablet layout | Verify home page displays correctly on tablet | 6.1 | 🟢 Completed | USER |
| 6.4 | Test mobile layout | Verify home page displays correctly on mobile | 6.1 | 🟢 Completed | USER |
| 6.5 | Check navigation menus | Verify header and footer menus work without Show & Tell | 6.1 | 🟢 Completed | USER |
| 6.6 | Verify no broken links | Check for any broken links or references to Show & Tell | 6.1 | 🟢 Completed | USER |
| 6.7 | Test all pages | Browse other pages to ensure no Show & Tell references remain | 6.1 | 🟢 Completed | USER |


## Phase 7: Documentation and Deployment

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 7.1 | Update feature backlog | Mark v1.4.6 as completed in feature-backlog.md | Phase 6 | 🟢 Completed | AGENT |
| 7.2 | Create retrospective | Create retrospective.md for this version | 7.1 | 🟢 Completed | AGENT |
| 7.3 | Update release notes | Update release-notes.md with v1.4.6 changes | 7.2 | 🟢 Completed | AGENT |
| 7.4 | Git commit changes | Commit all changes to git | Phase 6 | 🟢 Completed | USER |
| 7.5 | Deploy to staging | Deploy to next.icodewith.ai for testing | 7.4 | 🟢 Completed | USER |
| 7.6 | Deploy to production | Deploy to www.icodewith.ai | 7.5 | 🟢 Completed | USER |
