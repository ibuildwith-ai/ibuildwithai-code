# Plan: Add Tutorials Section to Website

## Overview
Add a complete tutorials section to the website with list and detail pages, following the existing design patterns from podcast and presentations sections.

## Requirements
- **List page**: Based on `podcast/list.html` but with 2 cards per row instead of single column
- **Detail page**: Based on `podcast/single.html` but without audio embed (only video)
- **Organization**: Upcoming (earliest first) and Published (latest first) based on date field
- **Navigation**: Update config to point tutorials menu to `/tutorials/` instead of YouTube
- **Fallback**: Show image where video embed would be if no video_id provided

## Implementation Tasks

### 1. Content Structure
- [ ] Create `archetypes/tutorials.md` based on `podcast.md` but removing:
  - `audio_id` field
  - All guest-related fields (`guest`, `guest_image`, `guest_details`, `guest_learn_more_link`)
- [ ] Create `content/tutorials/` directory
- [ ] Add sample tutorial content for testing

### 2. Layout Templates
- [ ] Create `themes/icodewithai/layouts/tutorials/list.html`:
  - Based on `podcast/list.html` structure
  - Change hero section title to "Tutorials"
  - Modify grid to show 2 cards per row instead of single column
  - Update sections: "Upcoming Tutorials" and "Published Tutorials"
  - Sort upcoming by date ASC, published by date DESC
- [ ] Create `themes/icodewithai/layouts/tutorials/single.html`:
  - Based on `podcast/single.html` structure
  - Remove audio embed section (lines 24-41)
  - Remove guest section (lines 47-72) but keep host section
  - Rename host section from "About the Host" to "About the Presenter"
  - Keep video embed with fallback to image display
  - Update back link to point to `/tutorials/`

### 3. Configuration Updates
- [ ] Update `config/_default/config.toml`:
  - Change `tutorials = "https://www.youtube.com/@icodewith_ai"` to `tutorials = "/tutorials/"`

### 4. SEO Configuration
- [ ] Create `data/seo/content-types/tutorials/` directory structure:
  - `listpage.yaml` for tutorials list page SEO
  - `entries/` directory for individual tutorial SEO data
- [ ] Follow existing patterns from podcast/blog/presentations SEO structure

### 5. Styling Updates
- [ ] Reuse existing CSS classes and styles as much as possible
- [ ] Avoid hard-coding new CSS styles - leverage existing grid/card patterns
- [ ] Ensure responsive behavior matches existing sections
- [ ] Test image fallback styling when no video_id provided

### 6. Content Archetype Structure
```toml
title = ""
slug = ""
date = "yyyy-mm-dd"
draft = false
status = "upcoming | published"
description = ""
image = "images/tutorials/placeholder.png"  # 1280x720 resolution
video_id = ""
presenter = "Marcelo Lewin"
```

**Image Requirements**: Tutorial images should be 1280x720 resolution to properly fit in the card layout on the list page and at the top of the details page. Images are stored in `assets/images/tutorials/` directory and processed through Hugo pipes.

### 7. Testing & Validation
- [ ] Create sample tutorial with video_id
- [ ] Create sample tutorial without video_id (image fallback)
- [ ] Test upcoming vs published organization
- [ ] Verify navigation updates work
- [ ] Test responsive layout on mobile/desktop

## Files to Create/Modify

### New Files
- `archetypes/tutorials.md`
- `themes/icodewithai/layouts/tutorials/list.html`
- `themes/icodewithai/layouts/tutorials/single.html`
- `content/tutorials/_index.md`
- `content/tutorials/sample-tutorial.md`
- `data/seo/content-types/tutorials/listpage.yaml`
- `data/seo/content-types/tutorials/entries/`

### Modified Files
- `config/_default/config.toml` (line 27: tutorials URL)
- CSS files (if needed for 2-card grid layout)

## Success Criteria
- [ ] Tutorials section accessible at `/tutorials/`
- [ ] List page shows tutorials in 2-card grid layout
- [ ] Upcoming/Published sections work correctly with proper sorting
- [ ] Detail pages show video embeds or fallback images
- [ ] Navigation menu points to new tutorials section
- [ ] SEO metadata properly configured
- [ ] Mobile responsive design maintained