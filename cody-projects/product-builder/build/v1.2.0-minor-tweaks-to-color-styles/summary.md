# Release v1.2.0 - Minor Tweaks to Color & Styles

## Summary

This release includes typography improvements and color refinements to enhance the visual appearance and readability of the site.

## Changes Made

### 1. Font Update - DM Sans Implementation
- **Updated font family**: Changed from system fonts to DM Sans as primary font
- **Added Google Fonts integration**: 
  - Added preconnect links for performance optimization
  - Included full DM Sans font family with all weights and italic variants
  - Added to `themes/icodewithai/layouts/_default/baseof.html`
- **Modified font stack**: Updated `$font-family-base` in `_variables.scss`
  - Before: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif`
  - After: `'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif`

### 2. Logo Size Adjustment
- **Increased header and footer logo size**: 
  - Changed `$logo-size` from `60px` to `70px`
  - Both header and footer logos now use the same size variable

### 3. Code Cleanup - Removed Unused Variables
- **Removed unused footer logo variables**:
  - `$footer-logo-size: 72px`
  - `$footer-logo-size-mobile: 60px`
  - `$footer-logo-font-size: 1.8rem`
- **Removed unused CSS**: Deleted `.footer-logo-circle` class and related styles
- **Reason**: Footer logo was actually using the shared `$logo-size` variable, making the footer-specific variables dead code

### 4. Color Scheme Refinements
- **Background color update**: 
  - Changed `$neutral-900` from `#000000` (pure black) to `#121212` (softer dark gray)
- **Secondary text color update**: 
  - Changed `$neutral-400` from `#a3a3a3` to `#e2e2e2` (improved readability)
- **Card background adjustment**: 
  - Updated `$neutral-800` from `#1a1a1a` to `#161616` (consistent with new background)

### 5. Button System Standardization
- **Created unified button system**: Replaced 4+ different button implementations with 2 standardized classes
- **New button classes**:
  - `.btn-primary` - Green buttons for primary actions (solid `$primary-600` background)
  - `.btn-secondary` - Gray buttons for secondary actions (solid `#3a3a3a` background)
- **Consistent behavior**: Both buttons have identical styling except background color
  - White text (`$neutral-100`)
  - 40px height (`$button-height-sm`)
  - Animated underline on hover (customizable spacing)
  - Lift effect and drop shadow on hover
  - Solid color transitions (no gradients to prevent visual glitches)
- **Removed old button classes**: 
  - `.discord-btn`, `.project-link-primary`, `.project-link-secondary`, `.project-link`
- **Updated all HTML templates**: Header, apps, and presentations pages now use standardized classes
- **Fixed black blink issue**: Replaced gradient hovers with solid color transitions

### 6. Card Background Simplification  
- **Removed gradients from cards**: Changed from gradient backgrounds to solid color
- **Updated card mixin**: `@mixin card-base` now uses solid `$neutral-800` (#161616) background
- **Affects all cards**: App cards, blog cards, bio cards, social cards now have clean solid backgrounds

## Files Modified

### SCSS Files
- `assets/scss/_variables.scss`
  - Updated font family variable
  - Increased logo size
  - Removed unused footer logo variables
  - Updated color values

- `assets/scss/_components.scss`
  - Removed unused `.footer-logo-circle` CSS class
  - Removed related mobile responsive styles
  - Added standardized `.btn-primary` and `.btn-secondary` button classes
  - Removed old button classes (`.discord-btn`, `.project-link-*`)
  - Updated nav selector to exclude buttons from link styling
  
- `assets/scss/_mixins.scss`
  - Updated `@mixin card-base` to use solid background color instead of gradient

### HTML Templates
- `themes/icodewithai/layouts/_default/baseof.html`
  - Added Google Fonts preconnect links
  - Added DM Sans font family import

- `themes/icodewithai/layouts/partials/header.html`
  - Updated Discord button from `discord-btn` to `btn-primary`

- `themes/icodewithai/layouts/apps/single.html`
  - Updated all project buttons to use standardized classes
  - Preview buttons: `project-link-primary` → `btn-primary`
  - GitHub/NPM buttons: `project-link-secondary` → `btn-secondary`

- `themes/icodewithai/layouts/presentations/single.html`
  - Updated all presentation buttons to use standardized classes
  - Register buttons: `project-link-primary` → `btn-primary`
  - Learn More/On-Demand buttons: `project-link-secondary` → `btn-secondary`

## Impact

### Visual Improvements
- **Better typography**: DM Sans provides a more modern, clean appearance
- **Improved readability**: Lighter secondary text color increases legibility
- **Softer appearance**: Slightly lighter background reduces eye strain
- **Consistent logo sizing**: Unified logo size across header and footer
- **Standardized button system**: All buttons now have consistent behavior and appearance
- **Cleaner card design**: Solid backgrounds provide a more modern, less busy appearance
- **Eliminated visual glitches**: Fixed black blink issue on button hover

### Performance
- **Optimized font loading**: Added preconnect links for faster Google Fonts loading
- **Reduced CSS**: Removed unused code improves bundle efficiency

### Maintainability
- **Cleaner codebase**: Removed dead code and unused variables
- **Simplified logo system**: Single variable controls both header and footer logo sizes
- **Unified button system**: Single source of truth for button styling across the site
- **Easier customization**: Button underline spacing can be adjusted independently for each type

## Technical Notes

- All changes maintain backward compatibility
- CSS custom properties system ensures theme consistency
- Font fallbacks preserved for reliability
- No breaking changes to existing functionality

## Testing

- Verified DM Sans font loads correctly with fallbacks
- Confirmed logo sizing works across header and footer
- Validated color changes maintain proper contrast ratios
- Tested responsive behavior remains intact