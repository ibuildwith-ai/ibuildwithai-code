# v1.2.1 Podcast Section Implementation Plan

## Overview
Add a podcast section to the website based on the presentations format structure.

## Requirements Analysis

### 1. Podcast Page (`/podcast/`)
- **Static Content:**
  - Podcast name at the top
  - Podcast image
  - Podcast description
  - (Applied directly to HTML, no content management needed)

- **Dynamic Sections:**
  - **Upcoming Episodes:** Latest upcoming episodes (ASC order by date)
  - **Latest Episodes:** 3 most recent episodes in one row (DESC order)
  - **All Episodes:** All episodes (DESC order by published date)

### 2. Episode Detail Pages (`/podcast/episode-slug/`)
- Individual episode pages with full content
- Support for markdown content below frontmatter
- URL structure uses custom slug field from frontmatter

### 3. Home Page Integration
- Add "Latest 3 Episodes" section
- Position: Above "Latest Presentations", below "Latest Posts"
- Same format as Latest Episodes on Podcast Page

### 4. Content Management Structure
- **Folder:** `content/podcast/`
- **File format:** One markdown file per episode
- **Frontmatter fields:**
  ```yaml
  +++
  title = "Episode Title"
  slug = "episode-slug"
  date = "YYYY-MM-DD"
  draft = false
  description = "Short description"
  image = "url to image"
  episode_url = "Spotify embed URL"
  host = "Marcelo Lewin" (default)
  guest = "Guest Name 1, Guest Name 2"
  +++
  ```

## Implementation Plan

### Phase 1: Content Structure Setup
1. Create `content/podcast/` directory
2. Create episode archetype template
3. Set up podcast section configuration in Hugo

### Phase 2: Podcast Main Page
1. Create `layouts/podcast/list.html` template
2. Implement static content section (name, image, description)
3. Implement dynamic sections:
   - Upcoming Episodes section
   - Latest Episodes section (3 items)
   - All Episodes section

### Phase 3: Episode Detail Pages
1. Create `layouts/podcast/single.html` template
2. Implement episode detail layout
3. Add Spotify embed functionality
4. Style episode content display

### Phase 4: Home Page Integration
1. Modify `layouts/index.html`
2. Add "Latest 3 Episodes" section
3. Position correctly in page hierarchy

### Phase 5: Styling & Responsive Design
1. Apply consistent styling with existing site theme
2. Ensure mobile responsiveness
3. Test episode image display (1:1 aspect ratio)

### Phase 6: Testing & Content Creation
1. Create sample podcast episodes for testing
2. Test all sections and functionality
3. Verify responsive behavior
4. Test episode links and embeds

## Technical Considerations

### Image Storage
- **Location:** `themes/icodewithai/assets/images/podcast/`
- **Organization:** 
  - Main podcast image: `themes/icodewithai/assets/images/podcast/podcast-cover.jpg`
  - Episode images: `themes/icodewithai/assets/images/podcast/episode-slug-name.jpg`
- Use Hugo's asset pipeline for image processing
- Ensure 1:1 aspect ratio support for episode images

### Episode States
- **Upcoming:** Episodes with future dates
- **Published:** Episodes with past dates
- **Draft:** Episodes marked as draft=true

### Link Behavior
- **Upcoming Episodes:** "Learn More" button → Episode detail page
- **Published Episodes:** "Listen" button → Episode detail page

### Hugo Integration
- Leverage Hugo's taxonomy and content organization
- Use Hugo's date functions for sorting
- Configure Hugo to use custom slug field for episode URLs (`/podcast/episode-slug/`)
- Consider pagination for "All Episodes" if needed

## Dependencies
- Existing Hugo site structure
- Current CSS framework (Bulma)
- Existing presentation page structure for reference

## Questions for Review
1. Do we need podcast categories or tags taxonomy?
2. Should we implement pagination for the "All Episodes" section?
3. Any specific requirements for the Spotify embed implementation?
4. Should episode images follow a specific naming convention beyond `episode-slug-name.jpg`?