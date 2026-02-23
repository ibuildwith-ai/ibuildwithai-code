# Retrospective: v1.4.2-add-app-creator

## Summary
This document summarizes the uncommitted changes made in the workspace as of September 2, 2025, for the `v1.4.2-add-app-creator` build. These changes have not yet been checked into git.

---

## Changed Files

### 1. `archetypes/apps.md`
- **Added**: `builder = "Marcelo Lewin"` to the front matter.

### 2. `content/apps/content-modeling-cli/index.md`
- **Added**: `builder = "Marcelo Lewin"` to the front matter.

### 3. `content/apps/galactic-invaders/index.md`
- **Added**: `builder = "Marcelo Lewin"` to the front matter.

### 4. `content/apps/i-code-with-ai-website/index.md`
- **Added**: `builder = "iCodeWith.ai"` to the front matter.

### 5. `content/apps/treex/index.md`
- **Added**: `builder = "Marcelo Lewin"` to the front matter.

### 6. `themes/icodewithai/layouts/apps/list.html`
- **Changed**: App cards now display `v[current_version] • Created by [builder]` in the meta section, instead of showing only version or update date.

### 7. `themes/icodewithai/layouts/apps/single.html`
- **Changed**: App detail page now displays `v[current_version] • Created by [builder]` and the update date in the post meta section, improving consistency and attribution.

---

## Purpose of Changes
- **Attribution**: Added a `builder` field to app metadata for clearer attribution of app creators.
- **UI Consistency**: Updated app list and single app pages to consistently display builder information alongside version and update date.

