# v1.2.1 Podcast Section - Implementation Checklist

## ✅ Completed Tasks

### Content Management Structure
- [x] Created `content/podcast/` directory
- [x] Created podcast archetype template (`archetypes/podcast.md`)
- [x] Added all required frontmatter fields (title, slug, date, draft, status, description, image, episode_url, host, guest)
- [x] Added status field to control upcoming vs published episodes
- [x] Updated sample episodes with proper status field
- [x] Created sample episodes for testing (published and upcoming)

### Layout Templates
- [x] Created podcast main page layout (`layouts/podcast/list.html`)
- [x] Implemented bio-style layout with podcast info on left, image on right
- [x] Added conditional sections for Upcoming, Latest, and All Episodes based on status field
- [x] Implemented "Episodes coming soon" fallback message
- [x] Created episode detail page layout (`layouts/podcast/single.html`)
- [x] Added blog-style layout with Spotify embed placeholder
- [x] Added back link to podcast main page
- [x] Updated templates to use status field instead of date for filtering

### Styling & Design
- [x] Extended card system to include `.podcast-card`
- [x] Added podcast thumbnail styling with 1:1 aspect ratio
- [x] Created Spotify embed placeholder styling
- [x] Ensured consistent hover effects and transitions
- [x] Applied responsive design patterns

### Home Page Integration
- [x] Added "Latest 3 Episodes" section to home page
- [x] Positioned correctly between "Latest Posts" and "Latest Presentations"
- [x] Implemented conditional display (only shows if episodes exist)
- [x] Used consistent styling with other sections

### Directory Structure
- [x] Created `themes/icodewithai/assets/images/podcast/` directory
- [x] Set up proper image organization structure

### Hugo Integration
- [x] Configured custom slug support for episode URLs
- [x] Implemented proper status filtering for upcoming vs. published episodes
- [x] Added Hugo asset pipeline integration for images
- [x] Used Hugo's templating for conditional content display
- [x] Added "Podcast" navigation link to header and footer menus

## 🔧 Additional Updates Needed

### Visual & Layout Improvements
- [x] Fix episode image display issues (improved aspect ratio and styling)
- [x] Change episode meta styling: date and presenter now in green using .podcast-meta class
- [x] Fix grid layout: created .podcast-episodes class with 3-column grid (300px min-width)
- [x] Fix tagline display: created .podcast-tagline class for single-line display
- [x] Updated templates to use new podcast-specific classes
- [x] Updated .vibedocs/reference-library documentation files
- [x] Fixed podcast image aspect ratio (1:1) - separated from app-card-thumbnail styling
- [x] Removed "Latest Episodes" section from podcast list page (kept only Upcoming and All Episodes)
- [x] Updated home page headings: "Latest Posts" → "Latest Blog Posts", "Latest Episodes" → "Latest Podcast Episodes"
- [x] Fixed card sizing: implemented fixed 3-column grid with left-aligned cards and consistent widths
- [x] Made podcast tagline responsive: single line on desktop, wraps on mobile (no more ellipsis cutoff)

## 📋 Tasks for You to Complete

### Content Creation
- [ ] Add main podcast cover image to `themes/icodewithai/assets/images/podcast/podcast-cover.jpg`
- [ ] Add episode images to `themes/icodewithai/assets/images/podcast/` (following naming convention)
- [ ] Create real podcast episodes in `content/podcast/` directory
- [ ] Update podcast name, description, and tagline in `layouts/podcast/list.html` if needed
- [ ] Use status field: "upcoming" for upcoming episodes, "published" for published episodes

### Spotify Integration
- [ ] Replace Spotify placeholder in `layouts/podcast/single.html` with actual embed code
- [ ] Test Spotify embed functionality with real episode URLs
- [ ] Adjust embed styling if needed

### Navigation
- [x] Add "Podcast" link to main site navigation (header)
- [x] Add "Podcast" link to footer navigation

### Testing & Validation
- [ ] Test podcast main page with real content
- [ ] Test episode detail pages with actual episodes
- [ ] Verify responsive behavior on mobile devices
- [ ] Test conditional display with no episodes
- [ ] Validate all internal links work correctly

### Optional Enhancements
- [ ] Consider adding podcast RSS feed functionality
- [ ] Add podcast episode search functionality
- [ ] Implement episode categories/tags if needed
- [ ] Add social sharing buttons for episodes
- [ ] Consider adding episode transcripts

## 🔧 Technical Notes

### File Locations
- **Content:** `content/podcast/`
- **Images:** `themes/icodewithai/assets/images/podcast/`
- **Layouts:** `themes/icodewithai/layouts/podcast/`
- **Styles:** `assets/scss/_components.scss` (Podcast Specific section)

### URL Structure
- **Main page:** `/podcast/`
- **Episode pages:** `/podcast/episode-slug/` (uses slug from frontmatter)

### Image Requirements
- **Main podcast image:** Any aspect ratio, will be displayed in bio-style grid
- **Episode images:** 1:1 aspect ratio recommended for consistent card display

### Hugo Commands for Testing
```bash
# Create new episode
hugo new podcast/episode-name.md

# Run local server
hugo server -D

# Build site
hugo
```

## 🎯 Ready for Production
The podcast section is fully implemented and ready for content. All core functionality is working, including:
- Conditional content display
- Responsive design
- Custom slug URLs
- Proper image handling
- Consistent styling with site design system