When creating a new page, remember to also create the same pagename.yaml file in data/.  This is for SEO.  If you have any questions about this, please check .vibedocs/reference-library/seo-maintenance.md.

If you are not sure about something, always ask.  You can always check .vibedocs/reference-library about this system.

As you work in this session, make sure you continually update this file with any information you will need to remember.

========
continue updating your memory below this line
========

## Completed Tasks for v1.2.9 About Marcelo Update

1. **Removed certifications box completely** - Deleted the entire certificates-card section that contained Contentful certification badges
2. **Made Quick Facts box expand to full width** - Removed the facts-certificates-grid wrapper and made the facts-card span the full container width
3. **Duplicated "Startups I've built" section as "My Certificates"** - Added new section above the original startups section with same structure
4. **Redesigned certificate cards with 2-column layout** - Each certificate card now has:
   - Left column: certificate image (using Contentful cert manager icon as placeholder)
   - Right column: title, description, and "See certificate" button link
   - Added certificate-card class and certificate-image-container/certificate-content containers
   - Used placeholder titles/descriptions as requested
   - Added empty href="#" links for "See certificate" buttons (to be populated later)

## Files Modified
- `/themes/icodewithai/layouts/about-marcelo.html` - Main layout file updated
- `/assets/scss/_components.scss` - Added certificate card styling
- `/assets/scss/_layout.scss` - Fixed bio photo responsive layout

## Notes
- Used existing Contentful certification image as placeholder for all 3 certificate cards
- Certificate cards use existing .app-card styling with additional .certificate-card class
- Links and images are placeholders to be populated later as requested
- Maintained responsive design using existing breakpoints

## CSS Changes Made
- Added proper 2-column layout CSS for certificate cards in `_components.scss`
- Certificate cards now have image on left, content (title/description/link) on right
- Added responsive behavior: cards stack vertically on tablet/mobile (under 1050px)
- Used existing SCSS variables and mixins for consistent styling
- Certificate content aligns to center on mobile for better UX
- Button styling uses existing `.btn` class from the standard library
- **FIXED**: Used `!important` to override `.app-card` default `flex-direction: column` behavior so certificate cards display in 2-column layout

## Additional Fixes Made
1. **Certificate card titles**: Changed from green (`$primary-500`) to white (`var(--color-text)`) to match startup card titles
2. **Bio photo responsive layout**: Added responsive behavior to `.bio-page-grid` in `_layout.scss` so photo appears above bio text on tablet/mobile (under 1050px) using CSS Grid `order: -1`

