# Release v1.1.2 - Bio and 404 Page

**Release Date:** 2025-06-24  
**Version:** v1.1.2-bio-and-404-page

## Overview
Added a dedicated bio page accessible at `/bio/` and a custom 404 error page to improve user experience and provide more detailed information about Marcelo Lewin, including professional background and startup history.

## New Features

### Bio Page (`/bio/`)
- **Dedicated Bio Page**: Created a standalone bio page separate from the homepage
- **Enhanced Content Structure**: 
  - Hero section with name and tagline
  - Bio overview with professional description
  - Photo placeholder for future profile image
  - Quick Facts section (unchanged from homepage)
  - New "Startups Created and Sold" section with 2-column card layout using existing app-card styling
- **Single Page Architecture**: Refactored from section page (`_index.md` + `list.html`) to single page (`bio.md` + `single.html`) for better semantic structure
- **Responsive Layout**: Maintains consistent styling with existing site design

### 404 Error Page (`/404.html`)
- **Custom 404 Page**: Created branded 404 error page with site styling
- **User-Friendly Messaging**: Features "404" heading and "Are you lost?" with helpful "home" link
- **Consistent Design**: Uses existing hero section styling and highlight classes

### Homepage Updates
- **Streamlined Bio Section**: Removed second paragraph and contact section from homepage
- **Enhanced Navigation**: Added "Learn more →" and "Get in touch →" links with proper spacing
- **Responsive Link Layout**: Used flexbox with gap for consistent spacing that works on all screen sizes

### Navigation Updates
- **Bio Menu Link**: Updated Bio navigation from `/#bio` (homepage anchor) to `/bio/` (dedicated page)
- **Contact Menu Link**: Temporarily pointed Contact menu to `/bio/` page
- **Improved UX**: Users now get dedicated page experiences instead of scrolling to homepage sections

## Technical Changes

### Content Structure
- Added `content/bio.md` - Bio page content and metadata (single page approach)
- Created `themes/icodewithai/layouts/bio/single.html` - Bio page template

### Configuration
- Updated `hugo.toml` menu configuration to point Bio link to `/bio/` page

### Layout Features
- Bio grid layout with content and facts sections
- Startup cards grid for showcasing entrepreneurial history
- Photo placeholder ready for future image integration
- Consistent styling with existing site theme

## Files Added
- `content/bio.md`
- `themes/icodewithai/layouts/bio/single.html`
- `themes/icodewithai/layouts/404.html`

## Files Modified
- `hugo.toml` (menu navigation updates for Bio and Contact)
- `themes/icodewithai/layouts/index.html` (streamlined bio section, added navigation links)

## Next Steps
- Add actual profile photo to replace placeholder
- Populate startup cards with real startup information
- Consider adding CSS styles specific to bio page elements if needed