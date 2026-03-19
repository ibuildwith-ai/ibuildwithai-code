# Release Tasklist – v1.4.0 - Rename Tutorials to Built with Vibes
This document outlines all the tasks to work on to delivery this particular version, grouped by phases.

| Status |      |
|--------|------|
| 🔴 | Not Started |
| 🟡 | In Progress |
| 🟢 | Completed |

## Phase 1: Directory and File Structure Rename

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 1.1 | Rename content directory | Move `content/tutorials/` to `content/built-with-vibes/` | None | 🟢 Completed | AGENT |
| 1.2 | Rename layouts directory | Move `themes/icodewithai/layouts/tutorials/` to `themes/icodewithai/layouts/built-with-vibes/` | None | 🟢 Completed | AGENT |
| 1.3 | Rename SEO data directory | Move `data/seo/content-types/tutorials/` to `data/seo/content-types/built-with-vibes/` | None | 🟢 Completed | AGENT |
| 1.4 | Rename assets directory | Move `themes/icodewithai/assets/images/tutorials/` to `themes/icodewithai/assets/images/built-with-vibes/` | None | 🟢 Completed | AGENT |
| 1.5 | Rename archetype file | Move `archetypes/tutorials.md` to `archetypes/built-with-vibes.md` | None | 🟢 Completed | AGENT |
| 1.6 | Create SEO images directory | Create `static/images/seo/content-types/built-with-vibes/` directory | None | 🟢 Completed | AGENT |

## Phase 2: Template Updates

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 2.1 | Update list template | Update `layouts/built-with-vibes/list.html` with new section references | 1.2 | 🟢 Completed | AGENT |
| 2.2 | Update single template | Update `layouts/built-with-vibes/single.html` with new section references | 1.2 | 🟢 Completed | AGENT |
| 2.3 | Update navigation references | Find and update navigation menu references from "Tutorials" to "Built with Vibes" | 1.2 | 🟢 Completed | AGENT |
| 2.4 | Update footer references | Update any footer links or references to tutorials section | 2.3 | 🟢 Completed | AGENT |

## Phase 3: CSS and Styling Updates

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 3.1 | Find tutorial CSS classes | Search for all `.tutorial-*` CSS classes in SCSS files | None | 🟢 Completed | AGENT |
| 3.2 | Rename CSS classes | Update `.tutorial-*` classes to `.built-with-vibes-*` in SCSS files | 3.1 | 🟢 Completed | AGENT |
| 3.3 | Update template CSS references | Update template files to use new CSS class names | 3.2, 2.1, 2.2 | 🟢 Completed | AGENT |
| 3.4 | Test responsive styling | Verify new CSS classes work properly across devices | 3.3 | 🟢 Completed | AGENT |

## Phase 4: Configuration and Automation Updates

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 4.1 | Update create-content script | Change "tutorials" to "built-with-vibes" in `automations/create-content.sh` | None | 🟢 Completed | AGENT |
| 4.2 | Update Hugo config | Check and update any tutorial references in `config/_default/config.toml` | None | 🟢 Completed | AGENT |
| 4.3 | Update archetype content | Update the content template in `archetypes/built-with-vibes.md` | 1.5 | 🟢 Completed | AGENT |
| 4.4 | Update SEO templates | Update any SEO template references for the new content type | 1.3 | 🟢 Completed | AGENT |

## Phase 5: Content and Asset Updates

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 5.1 | Update existing content | Update front matter and any internal references in existing tutorial content | 1.1 | 🟢 Completed | AGENT |
| 5.2 | Update image references | Update any hardcoded image paths in templates to use new directory | 1.4, 2.1, 2.2 | 🟢 Completed | AGENT |
| 5.3 | Update SEO metadata | Update SEO descriptions and metadata for the new content type concept | 4.4 | 🟢 Completed | AGENT |

## Phase 6: Testing and Validation

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 6.1 | Test Hugo build | Verify the site builds successfully with all changes | All previous phases | 🟢 Completed | AGENT |
| 6.2 | Test section listing | Verify the built-with-vibes section displays correctly | 6.1 | 🟢 Completed | AGENT |
| 6.3 | Test single pages | Verify individual built-with-vibes pages render correctly | 6.1 | 🟢 Completed | AGENT |
| 6.4 | Test navigation | Verify navigation links work and point to correct URLs | 6.1 | 🟢 Completed | AGENT |
| 6.5 | Test content creation | Test the updated automation script creates new content properly | 4.1, 6.1 | 🟢 Completed | AGENT |
| 6.6 | Test mobile responsive | Verify all changes work properly on mobile devices | 6.1, 3.4 | 🟢 Completed | AGENT |

## Phase 7: Final Cleanup and Documentation

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 7.1 | Remove old references | Search for any remaining "tutorial" references that were missed | All testing phases | 🟢 Completed | AGENT |
| 7.2 | Update internal documentation | Update any README or documentation files with new section name | 7.1 | 🟢 Completed | AGENT |
| 7.3 | Final build verification | Run final Hugo build and deploy test | 7.2 | 🟢 Completed | AGENT |
| 7.4 | User acceptance testing | USER to review all changes and approve | 7.3 | 🟢 Completed | USER |