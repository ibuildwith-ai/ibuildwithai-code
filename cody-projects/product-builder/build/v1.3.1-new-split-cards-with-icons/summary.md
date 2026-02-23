# Split Card System Implementation - v1.3.1

## Overview
Implemented a comprehensive split-card component system with flexible icon positioning and added icons to the homepage "Start Your Journey" section.

## Features Implemented

### 1. Generic Split Card Component
- **Reusable component** for use throughout the website
- **Icon section** with darker background (`$neutral-900`) for visual separation
- **Content section** with standard background (`$neutral-800`)
- **Consistent hover effects** with border color change, lift animation, and icon scaling
- **Flexbox layout** ensures equal height cards

### 2. Icon Positioning System (Explicit)
Created four explicit positioning modifiers:
- `.split-card--icon-top` - Icon at top, content below (vertical)
- `.split-card--icon-bottom` - Icon at bottom, content above (vertical)
- `.split-card--icon-left` - Icon on left, content on right (horizontal)
- `.split-card--icon-right` - Icon on right, content on left (horizontal)

**Key Design Decision:** Removed default positioning - all cards must use explicit positioning modifiers for consistency.

### 3. Wide Card Modifier
- `.split-card--wide` - Spans 2 columns in grid layouts
- **Composable** with all positioning modifiers
- **Independent operation** - width and positioning are orthogonal concerns

### 4. Responsive Behavior
- **Horizontal layouts** (left/right) automatically revert to vertical (top) on mobile
- **Maintains usability** across all device sizes
- **Consistent styling** preserved across breakpoints

## Implementation Details

### CSS Structure
```scss
// Base component (no default positioning)
.split-card { ... }

// Content containers
.split-card-icon-section { ... }
.split-card-content-section { ... }
.split-card-title { ... }
.split-card-description { ... }
.split-card-actions { ... }

// Modifiers
.split-card--wide { ... }
.split-card--icon-top { ... }
.split-card--icon-bottom { ... }
.split-card--icon-left { ... }
.split-card--icon-right { ... }
```

### Homepage Updates
1. **Start Your Journey Section:**
   - Added icons to all 5 cards using Hugo's asset pipeline
   - Used `split-card--icon-top` for vertical layout
   - App Gallery uses `split-card--wide split-card--icon-top`

2. **Structure Meets Creativity Section:**
   - Converted to split-card system
   - "Add Structure" uses `split-card--icon-left`
   - "Keep the Vibe" uses `split-card--icon-right`
   - Demonstrates horizontal layouts

### Asset Management
- **Icons stored** in `themes/icodewithai/assets/images/icons/`
- **Hugo asset pipeline** used for proper URL generation
- **Responsive images** with consistent 48x48px sizing

## Files Modified

### CSS
- `assets/scss/_components.scss` - Added complete split-card system

### HTML
- `themes/icodewithai/layouts/index.html` - Updated homepage sections

### Documentation
- `.vibedocs/reference-library/css-documentation.md` - Complete component documentation

## Usage Examples

### Basic Usage
```html
<div class="split-card split-card--icon-top">
  <div class="split-card-icon-section">
    <img src="..." alt="...">
  </div>
  <div class="split-card-content-section">
    <h3 class="split-card-title">Title</h3>
    <p class="split-card-description">Description</p>
    <div class="split-card-actions">
      <a href="..." class="section-link">Action →</a>
    </div>
  </div>
</div>
```

### Advanced Usage
```html
<!-- Wide card with horizontal layout -->
<div class="split-card split-card--wide split-card--icon-left">
  <!-- ... content ... -->
</div>
```

## Design System Integration
- **Uses existing variables** for spacing, colors, transitions
- **Follows established patterns** for hover effects and animations
- **Maintains consistency** with existing card components
- **Fully documented** in CSS documentation system

## Benefits
1. **Reusability** - Generic component usable site-wide
2. **Flexibility** - Four positioning options with width modifiers
3. **Consistency** - Standardized hover effects and styling
4. **Maintainability** - Single source of truth for split-card styling
5. **Accessibility** - Semantic HTML structure with proper alt text
6. **Performance** - Hugo asset pipeline optimization

## Future Enhancements
- Additional icon sizes (small, large)
- Animation variations
- Color theme variations
- Additional layout modifiers as needed