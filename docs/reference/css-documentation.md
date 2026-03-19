# CSS Architecture Documentation

## Overview

This document provides comprehensive documentation for the Enhanced CSS system implemented for the iBuildWith.ai website. The system uses SCSS (Sass) with a modular architecture, CSS custom properties for dynamic theming, and a comprehensive utility class system.

## File Structure

All SCSS files are now consolidated in the theme assets folder (v1.4.5):

```
themes/ibuildwithai/assets/scss/
├── styles.scss              # Main import file
├── _variables.scss          # Design tokens (colors, spacing, typography)
├── _mixins.scss            # Reusable mixins and utilities
├── _base.scss              # Reset, root styles, and CSS custom properties
├── _layout.scss            # Grid systems and layout components
├── _components.scss        # UI components (cards, buttons, navigation)
├── _utilities.scss         # Utility classes for rapid development
└── _responsive.scss        # Mobile-specific responsive overrides
```

**Asset Consolidation (v1.4.4 - v1.4.5):**
- All theme assets now in single location: `themes/ibuildwithai/assets/`
- Root `assets/` folder eliminated completely
- 54% build performance improvement (69ms → 32ms combined)

## Import Order

The main `styles.scss` file imports partials in this specific order to ensure proper cascade and variable availability:

1. **Variables** - Design tokens and SCSS variables
2. **Mixins** - Reusable patterns and functions
3. **Base** - Reset, root styles, CSS custom properties
4. **Layout** - Grid systems and layout components
5. **Components** - UI components and their styles
6. **Utilities** - Helper classes for quick styling
7. **Responsive** - Mobile-specific overrides

## Design Tokens

### Colors

#### SCSS Variables
```scss
// Primary Colors
$primary-500: #22c55e;        // Main green accent
$primary-600: #16a34a;        // Darker green for hover states

// Neutral Colors
$neutral-900: #121212;        // Background (softer dark gray)
$neutral-800: #161616;        // Card backgrounds  
$neutral-700: #2a2a2a;        // Borders
$neutral-100: #ffffff;        // Primary text
$neutral-400: #e2e2e2;        // Secondary text
$neutral-600: #666666;        // Footer text
```

#### CSS Custom Properties
```css
:root {
  --color-primary: #22c55e;
  --color-primary-hover: #16a34a;
  --color-bg: #121212;
  --color-bg-card: #161616;
  --color-bg-card-dark: #0f0f0f;
  --color-border: #2a2a2a;
  --color-text: #ffffff;
  --color-text-secondary: #e2e2e2;
  --color-text-muted: #666666;
}
```

### Typography

#### Font Sizes
```scss
$font-size-xs: 0.9rem;        // Small text (12px)
$font-size-sm: 1rem;          // Base small (14px)
$font-size-base: 1.1rem;      // Body text (15.4px)
$font-size-lg: 1.3rem;        // Large text (18.2px)
$font-size-xl: 1.5rem;        // Extra large (21px)
$font-size-2xl: 1.8rem;       // Headings (25.2px)
$font-size-3xl: 2.5rem;       // Section titles (35px)
$font-size-hero: clamp(3rem, 8vw, 6rem); // Responsive hero
```

#### Font Weights
```scss
$font-weight-normal: 400;     // Regular text
$font-weight-medium: 500;     // Emphasized text
$font-weight-bold: 700;       // Headings and strong emphasis
```

#### Font Family
```scss
$font-family-base: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
```

### Spacing System

Consistent spacing scale for margins, padding, and gaps:

```scss
// Micro-spacing for precise control
$spacing-2xs: 0.25rem;        // 4px
$spacing-micro: 0.3125rem;    // 5px (list margins, etc.)
$spacing-xs: 0.5rem;          // 8px
$spacing-tight: 0.9375rem;    // 15px (blockquote padding)

// Standard spacing scale
$spacing-sm: 1rem;            // 16px
$spacing-md: 1.5rem;          // 24px
$spacing-loose: 1.875rem;     // 30px (list padding)
$spacing-lg: 2rem;            // 32px
$spacing-xl: 3rem;            // 48px
$spacing-2xl: 5rem;           // 80px
$spacing-3xl: 6rem;           // 96px
```

### Layout Variables

```scss
$container-max-width: 1200px;  // Maximum content width
$container-padding: 2rem;      // Horizontal container padding
$content-max-width: 600px;     // Content area max width
$blog-content-max-width: 800px; // Blog content max width
$hero-bottom-padding: 3.8rem;  // Hero section bottom padding
$breakpoint-tablet: 1050px;    // Tablet breakpoint
```

### Border Radius

```scss
$border-radius-sm: 4px;        // Small elements (buttons)
$border-radius-base: 8px;      // Standard radius
$border-radius-lg: 12px;       // Cards and larger components
$border-radius-full: 50%;      // Circular elements (logo)
```

### Transitions

```scss
$transition-base: all 0.3s ease;   // Standard transitions
$transition-fast: all 0.2s ease;   // Quick interactions
$transition-slow: all 0.6s ease;   // Slow animations (shine effects)
$transition-width: width 0.3s ease; // Width-only transitions (underlines)
```

### Animation & Effect Variables

#### Animation Durations
```scss
$animation-duration-fast: 0.3s;    // Quick animations (fade-in)
$animation-duration-normal: 0.4s;  // Standard animations (slide-up)
$animation-duration-shine: 0.6s;   // Shine effect animations
```

#### Effect Distances
```scss
$hover-lift-distance: -4px;        // Standard hover lift amount
$hover-lift-small: -2px;           // Small hover lift for subtle effects
$slide-distance: 20px;             // Slide-up animation distance
$underline-offset: -4px;            // Underline position below text
$underline-height: 2px;             // Underline thickness
```

#### Opacity Levels
```scss
// General opacity levels
$opacity-light: 0.1;               // Light overlay effects
$opacity-medium: 0.2;              // Medium box shadows and effects
$opacity-strong: 0.3;              // Strong glow and shadow effects
$opacity-backdrop: 0.7;            // Header backdrop opacity

// Specific effect opacities
$opacity-shadow: 0.1;              // Standard drop shadows
$opacity-inset-light: 0.2;         // Light inset shadows (highlights)
$opacity-inset-dark: 0.1;          // Dark inset shadows (depth)
$opacity-shine: 0.1;               // Shine effect base opacity
$opacity-shine-hover: 0.3;         // Shine effect hover opacity
```

#### Component Dimensions
```scss
$scrollbar-width: 8px;                  // Custom scrollbar width
$bio-image-max-width: 280px;            // Bio section image constraints
$bio-image-min-height: 300px;           // Bio section image constraints
$certificate-image-width: 120px;        // Certificate/badge image size
$footer-logo-size: 72px;                // Footer logo dimensions (desktop)
$footer-logo-size-mobile: 60px;         // Footer logo dimensions (mobile)
$footer-logo-font-size: 1.8rem;         // Footer logo text size
$card-min-width: 400px;                 // Minimum card width in grids
$bio-page-max-width: 900px;             // Bio page content max width
$footer-column-min-width: 120px;        // Footer column minimum width
```

#### Letter Spacing
```scss
$letter-spacing-tight: 0.02em;          // Tight letter spacing for headings
```

## Mixins

### Card Mixins

#### @mixin card-base
Creates the standard card appearance with gradient background and border.

```scss
@mixin card-base {
  background: linear-gradient(135deg, var(--color-bg-card), var(--color-bg-card-dark));
  padding: var(--spacing-lg);
  border-radius: $border-radius-lg;
  border: 1px solid var(--color-border);
  transition: var(--transition-base);
}
```

**Usage:**
```scss
.my-card {
  @include card-base;
}
```

#### @mixin card-hover
Standard hover effect for cards (border color change and lift).

```scss
@mixin card-hover {
  border-color: var(--color-primary);
  transform: translateY(-4px);
}
```

### Button Mixins

#### @mixin button-base
Base button styling with padding and transitions.

```scss
@mixin button-base {
  display: inline-block;
  padding: $spacing-xs $spacing-sm;
  border-radius: $border-radius-sm;
  text-decoration: none;
  font-weight: $font-weight-medium;
  transition: $transition-base;
  cursor: pointer;
}
```

#### @mixin button-primary
Primary button styling with green background and hover effects.

```scss
@mixin button-primary {
  @include button-base;
  background-color: var(--color-primary);
  color: var(--color-text);
  
  &:hover {
    background-color: var(--color-primary-hover);
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    color: var(--color-text);
  }
}
```

### Gradient Mixins

#### @mixin gradient-primary
Primary brand gradient (green tones).

```scss
@mixin gradient-primary {
  background: linear-gradient(135deg, $primary-500, $primary-600);
}
```

#### @mixin gradient-text
Creates gradient text effect (white to gray).

```scss
@mixin gradient-text {
  background: linear-gradient(135deg, $neutral-100, $neutral-400);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

#### @mixin gradient-primary-text
Creates primary color gradient text effect.

```scss
@mixin gradient-primary-text {
  background: linear-gradient(135deg, $primary-500, $primary-600);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### Link Mixins

#### @mixin link-base
Base link styling with color and transitions.

```scss
@mixin link-base {
  color: $neutral-400;
  text-decoration: none;
  font-weight: $font-weight-medium;
  transition: $transition-base;
  position: relative;
}
```

#### @mixin link-hover
Standard link hover effect (color change).

```scss
@mixin link-hover {
  color: $primary-500;
}
```

#### @mixin link-underline
Animated underline effect for links.

```scss
@mixin link-underline {
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: $primary-500;
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
}
```

### Animation Mixins

#### @mixin hover-lift
Standard hover lift effect (4px upward translation).

```scss
@mixin hover-lift {
  transition: var(--transition-base);
  
  &:hover {
    transform: translateY(-4px);
  }
}
```

#### @mixin smooth-transition / @mixin fast-transition
Apply standard transition timings.

```scss
@mixin smooth-transition {
  transition: var(--transition-base);
}

@mixin fast-transition {
  transition: var(--transition-fast);
}
```

#### @mixin fade-in / @mixin slide-up
Animation presets for content entrance.

```scss
@mixin fade-in {
  animation: fadeIn 0.3s ease-in-out;
}

@mixin slide-up {
  animation: slideUp 0.4s ease-out;
}
```

### Responsive Mixins

#### @mixin tablet-down
Styles that apply on tablet and smaller screens.

```scss
@mixin tablet-down {
  @media (max-width: $breakpoint-tablet) {
    @content;
  }
}
```

#### @mixin desktop-up
Styles that apply on desktop and larger screens.

```scss
@mixin desktop-up {
  @media (min-width: $breakpoint-tablet + 1px) {
    @content;
  }
}
```

**Usage:**
```scss
.element {
  font-size: 1rem;
  
  @include tablet-down {
    font-size: 0.9rem;
  }
  
  @include desktop-up {
    font-size: 1.2rem;
  }
}
```

### Responsive Strategy

The site uses a two-tier responsive approach:
- **Tablet and below** (≤1050px): Mobile menu activated, simplified layouts
- **Desktop and above** (≥1051px): Full desktop navigation, complex layouts

This approach eliminates the previous mobile-only breakpoint (768px) for a cleaner, more maintainable responsive system.

## Utility Classes

### Display Utilities

```scss
.flex { display: flex; }
.flex-col { flex-direction: column; }
.grid { display: grid; }
.block { display: block; }
.inline-block { display: inline-block; }
.hidden { display: none; }
```

### Flexbox Utilities

```scss
.items-start { align-items: flex-start; }
.items-center { align-items: center; }
.items-end { align-items: flex-end; }
.justify-start { justify-content: flex-start; }
.justify-center { justify-content: center; }
.justify-end { justify-content: flex-end; }
.justify-between { justify-content: space-between; }
.flex-grow { flex-grow: 1; }
.flex-wrap { flex-wrap: wrap; }
```

### Gap Utilities

```scss
.gap-xs { gap: $spacing-xs; }    // 8px
.gap-sm { gap: $spacing-sm; }    // 16px
.gap-md { gap: $spacing-md; }    // 24px
.gap-lg { gap: $spacing-lg; }    // 32px
.gap-xl { gap: $spacing-xl; }    // 48px
```

### Spacing Utilities

#### Margin
```scss
.m-0 { margin: 0; }
.m-xs { margin: $spacing-xs; }   // 8px all sides
.m-sm { margin: $spacing-sm; }   // 16px all sides
.m-md { margin: $spacing-md; }   // 24px all sides
.m-lg { margin: $spacing-lg; }   // 32px all sides
.m-xl { margin: $spacing-xl; }   // 48px all sides

// Margin Top
.mt-0 { margin-top: 0; }
.mt-xs { margin-top: $spacing-xs; }
.mt-sm { margin-top: $spacing-sm; }
.mt-md { margin-top: $spacing-md; }
.mt-lg { margin-top: $spacing-lg; }
.mt-xl { margin-top: $spacing-xl; }

// Margin Bottom
.mb-0 { margin-bottom: 0; }
.mb-xs { margin-bottom: $spacing-xs; }
.mb-sm { margin-bottom: $spacing-sm; }
.mb-md { margin-bottom: $spacing-md; }
.mb-lg { margin-bottom: $spacing-lg; }
.mb-xl { margin-bottom: $spacing-xl; }
```

#### Padding
```scss
.p-0 { padding: 0; }
.p-xs { padding: $spacing-xs; }   // 8px all sides
.p-sm { padding: $spacing-sm; }   // 16px all sides
.p-md { padding: $spacing-md; }   // 24px all sides
.p-lg { padding: $spacing-lg; }   // 32px all sides
.p-xl { padding: $spacing-xl; }   // 48px all sides
```

### Typography Utilities

```scss
// Text Alignment
.text-left { text-align: left; }
.text-center { text-align: center; }
.text-right { text-align: right; }

// Text Colors
.text-primary { color: $primary-500; }
.text-white { color: $neutral-100; }
.text-gray { color: $neutral-400; }
.text-dark-gray { color: $neutral-600; }

// Font Weights
.font-normal { font-weight: $font-weight-normal; }
.font-medium { font-weight: $font-weight-medium; }
.font-bold { font-weight: $font-weight-bold; }

// Font Sizes
.text-xs { font-size: $font-size-xs; }
.text-sm { font-size: $font-size-sm; }
.text-base { font-size: $font-size-base; }
.text-lg { font-size: $font-size-lg; }
.text-xl { font-size: $font-size-xl; }
.text-2xl { font-size: $font-size-2xl; }
.text-3xl { font-size: $font-size-3xl; }
```

### Responsive Utilities

Mobile-specific utilities:

```scss
@include mobile-only {
  .mobile\:hidden { display: none; }
  .mobile\:block { display: block; }
  .mobile\:flex { display: flex; }
  .mobile\:flex-col { flex-direction: column; }
  .mobile\:text-center { text-align: center; }
  .mobile\:gap-sm { gap: $spacing-sm; }
}
```

Desktop-specific utilities:

```scss
@include desktop-up {
  .desktop\:hidden { display: none; }
  .desktop\:block { display: block; }
  .desktop\:flex { display: flex; }
}
```

## Components

### Header Components

#### .header
Main site header with sticky positioning and backdrop blur.

#### .logo-section
Container for logo and site title.

#### .logo
Circular logo with gradient background.

#### .logo-text
Site title text next to logo.

#### .nav
Navigation container with horizontal layout.

### Content Components

#### .hero
Main hero section with centered content and large typography.

#### .section
Standard content section with vertical padding.

#### .container
Content wrapper with max-width and horizontal padding.

### Card Components

#### .app-card, .blog-post-card
Content cards with gradient backgrounds, hover effects, and consistent internal spacing.

#### .split-card (Generic Split Card Component)
A versatile card component with separated icon and content sections for use throughout the site.

**Structure:**
```html
<div class="split-card">
  <div class="split-card-icon-section">
    <img src="..." alt="...">
  </div>
  <div class="split-card-content-section">
    <h3 class="split-card-title">Title</h3>
    <p class="split-card-description">Description</p>
    <div class="split-card-actions">
      <a href="..." class="btn-primary">Action</a>
    </div>
  </div>
</div>
```

**CSS Classes:**
- `.split-card` - Main container with border, hover effects, and flexbox layout
- `.split-card-icon-section` - Top section with darker background (`$neutral-900`) for icons
- `.split-card-content-section` - Bottom content area with standard background (`$neutral-800`)
- `.split-card-title` - Title styling with primary color
- `.split-card-description` - Description text with secondary color
- `.split-card-actions` - Container for buttons/actions, aligned to bottom

**Features:**
- Hover effects: Border color change, lift animation, icon scale
- Responsive design: Works with any grid system
- Consistent spacing using design system variables
- Icon section has `min-height: 80px` for visual consistency
- Flexbox layout ensures equal height cards

**Modifiers:**

##### .split-card--wide
Modifier class for cards that span 2 columns in grid layouts.

```scss
.split-card--wide {
  grid-column: span 2;
  
  // Alternative for specific grid layouts
  &.wide {
    grid-column: span 2;
  }
}
```

##### Icon Positioning Modifiers
Control where the icon section appears in relation to the content. **All split-cards require an explicit positioning modifier:**

- `.split-card--icon-top` - Icon at top, content at bottom (vertical layout)
- `.split-card--icon-bottom` - Icon at bottom, content at top (vertical layout)
- `.split-card--icon-left` - Icon on left, content on right (horizontal layout)
- `.split-card--icon-right` - Icon on right, content on left (horizontal layout)

**CSS Implementation:**
```scss
// Icon at top (explicit positioning required)
.split-card--icon-top {
  flex-direction: column;
  
  .split-card-icon-section {
    min-height: 80px;
    border-bottom: 1px solid $neutral-700;
  }
}

// Icon at bottom
.split-card--icon-bottom {
  flex-direction: column-reverse;
  
  .split-card-icon-section {
    border-bottom: none;
    border-top: 1px solid $neutral-700;
  }
}

// Icon on left
.split-card--icon-left {
  flex-direction: row;
  
  .split-card-icon-section {
    border-bottom: none;
    border-right: 1px solid $neutral-700;
    min-width: 120px;
    min-height: auto;
  }
  
  // Responsive: revert to vertical on mobile
  @include tablet-down {
    flex-direction: column;
    
    .split-card-icon-section {
      border-right: none;
      border-bottom: 1px solid $neutral-700;
      min-width: auto;
      min-height: 80px;
    }
  }
}

// Icon on right  
.split-card--icon-right {
  flex-direction: row-reverse;
  
  .split-card-icon-section {
    border-bottom: none;
    border-left: 1px solid $neutral-700;
    min-width: 120px;
    min-height: auto;
  }
  
  // Responsive: revert to vertical on mobile
  @include tablet-down {
    flex-direction: column;
    
    .split-card-icon-section {
      border-left: none;
      border-bottom: 1px solid $neutral-700;
      min-width: auto;
      min-height: 80px;
    }
  }
}
```

**Usage Examples:**
```html
<!-- All positioning requires explicit modifier classes -->
<div class="split-card split-card--icon-top">...</div>
<div class="split-card split-card--icon-bottom">...</div>
<div class="split-card split-card--icon-left">...</div>
<div class="split-card split-card--icon-right">...</div>

<!-- Combine with wide modifier -->
<div class="split-card split-card--wide split-card--icon-top">...</div>
<div class="split-card split-card--wide split-card--icon-left">...</div>
<div class="split-card split-card--wide split-card--icon-right">...</div>
<div class="split-card split-card--wide split-card--icon-bottom">...</div>
```

**Important:** The base `.split-card` class no longer has default positioning. You **must** include one of the four positioning modifiers or the card will not display properly.

**Responsive Behavior:**
- **Desktop**: Uses specified icon position
- **Tablet/Mobile**: Horizontal layouts (left/right) automatically revert to vertical (icon top) for better mobile experience
- **All positions**: Maintain consistent hover effects and styling

**Design Notes:**
- Icon section uses darker background to create visual separation
- Border line automatically separates icon and content sections
- Maintains all existing color scheme and hover behaviors
- Can be used anywhere on the site for consistent card appearance

#### .app-card-thumbnail
Responsive thumbnail images for app cards with hover effects and optimized aspect ratios.

#### .photo-gallery
Interactive image gallery component with navigation arrows and responsive container.

#### .facts-card
Special card variant for displaying quick facts with checkmarks.

#### .social-card
Compact cards for social media links with icons.

### Navigation Components

#### .nav-dropdown
Primary navigation dropdown component with relative positioning for hover-based menu system.

```scss
.nav-dropdown {
  position: relative;
  display: inline-block;
  
  // Desktop hover behavior (only on desktop)
  @media (min-width: #{$breakpoint-tablet + 1px}) {
    &:hover .nav-dropdown-menu {
      opacity: 1;
      transform: translateY(0);
      visibility: visible;
    }
  }
}
```

#### .nav-dropdown--right
Modifier class for right-aligned dropdown menus, used for navigation items positioned at the right edge of the screen.

```scss
.nav-dropdown--right .nav-dropdown-menu {
  left: auto;
  right: 0;
}
```

#### .nav-dropdown-toggle
Button styling for dropdown toggles with flexible layout and hover effects.

```scss
.nav-dropdown-toggle {
  @include link-base;
  @include link-underline;
  @include smooth-transition;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: $spacing-xs;
  padding: 0;
}
```

#### .nav-dropdown-arrow
Animated arrow indicator that rotates on hover/expand states.

```scss
.nav-dropdown-arrow {
  font-size: $font-size-sm;
  transition: $transition-fast;
  color: $neutral-400;
  
  .nav-dropdown-toggle[aria-expanded="true"] &,
  .nav-dropdown:hover & {
    transform: rotate(180deg);
  }
}
```

#### .nav-dropdown-menu
Dropdown menu with absolute positioning, transitions, and hover states.

```scss
.nav-dropdown-menu {
  position: absolute;
  top: calc(100% + #{$spacing-xs});
  left: 0;
  background: lighten($neutral-900, 5%);
  border: 1px solid $neutral-700;
  border-radius: $border-radius-base;
  box-shadow: 
    0 4px 6px rgba(0, 0, 0, 0.1),
    0 2px 4px rgba(0, 0, 0, 0.06);
  list-style: none;
  margin: 0;
  padding: $spacing-xs 0;
  min-width: 180px;
  opacity: 0;
  transform: translateY(-8px);
  visibility: hidden;
  transition: all $transition-fast;
  z-index: $z-index-dropdown;
}
```

#### .nav-dropdown-item
Individual menu item container with hover effects and external link support.

```scss
.nav-dropdown-item {
  margin: 0;
  
  a {
    @include link-base;
    @include link-underline;
    @include smooth-transition;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: $spacing-xs $spacing-sm;
    
    &:hover {
      background: rgba($neutral-700, 0.3);
    }
  }
}
```

#### .blog-back-section
Navigation section for blog posts with top border and spacing, containing back-to-blog link.

#### .back-link-section  
Navigation section for app pages with top border and spacing, containing back-to-apps link.

### Layout Components

#### Grid Systems
- `.bio-grid` - Two-column grid for bio section
- `.apps-grid` - Responsive grid for app cards
- `.follow-grid` - Flexible container for social links
- `.blog-posts` - Vertical grid for blog post cards

### Footer Components

#### .footer
Main site footer with top border and proper spacing.

#### .footer-content
Container for footer main content using flexbox layout with space-between.

#### .footer-logo
Left-side logo section with enhanced logo and text layout.

#### .footer-logo-container
Flexbox container aligning logo circle with text content.

#### .footer-logo-circle
Enhanced circular logo (72px) with gradient background, larger than header logo.

#### .footer-logo-text
Text container for name and tagline with vertical column layout.

#### .footer-logo-name
Clickable site name with gradient text effect and hover transitions.

#### .footer-tagline
Tagline text with consistent styling and responsive behavior.

#### .footer-columns
Container for navigation and social link columns with responsive spacing (100px gap using clamp).

#### .footer-column
Individual column container with minimum width constraints.

#### .footer-heading
Section headers for "Navigation" and "Follow Me" with appropriate typography.

#### .footer-links
Styled lists for navigation and social links with hover effects.

#### .footer-bottom
Bottom section for copyright and version with full-width border separation.

### Interactive Components

#### Buttons (v1.2.0 Standardized System)
- `.btn-primary` - Green buttons for primary actions (Live Preview, Register, Discord)
  - Solid `$primary-600` background, white text, animated underline hover
- `.btn-secondary` - Gray buttons for secondary actions (GitHub, NPM, Learn More)  
  - Solid `#3a3a3a` background, white text, animated underline hover
- Both buttons: 40px height, lift effect, drop shadow, customizable underline spacing

#### Links
**All text links now use consistent animated underline hover effects:**

**Navigation Style Links:**
- Header navigation links (`.nav a`) - Animated underline with primary color
- Footer navigation links (`.footer-links a`) - Animated underline with primary color  
- Footer social links - Animated underline with primary color

**Page Style Links:**
- Section links (`.section-link`) - "Learn more →", "Get in touch →" type links
- Blog back links (`.blog-back-link`) - "← Back to Blog" navigation
- App back links (`.back-link`) - "← Back to Apps" navigation  
- Card links (`.card-link`) - "Learn more →", "Read more →" in app/blog cards
- Content links within cards and articles - Bio startup links, etc.

**Card Link Behavior:** Card links use `align-self: flex-start` to ensure the animated underline only spans the text width, not the full card width.

**Standardized hover behavior:** All links use `@mixin link-underline` for animated underline that grows from left to right on hover, combined with color transitions for consistent user experience. Underline animations use `$transition-width` for optimal performance.

## CSS Custom Properties for Theming

The system uses CSS custom properties to enable dynamic theming capabilities. These can be changed at runtime via JavaScript for features like theme switching.

### Available Theme Variables

```css
:root {
  /* Colors - can be overridden for theme switching */
  --color-primary: #22c55e;
  --color-primary-hover: #16a34a;
  --color-bg: #121212;
  --color-bg-card: #161616;
  --color-bg-card-dark: #0f0f0f;
  --color-border: #2a2a2a;
  --color-text: #ffffff;
  --color-text-secondary: #e2e2e2;
  --color-text-muted: #666666;
  
  /* Spacing - can be adjusted for different density preferences */
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
  --spacing-xl: 3rem;
  
  /* Typography - can be scaled for accessibility */
  --font-size-base: 1.1rem;
  --font-size-lg: 1.3rem;
  --font-size-xl: 1.5rem;
  
  /* Transitions - can be disabled for reduced motion */
  --transition-base: all 0.3s ease;
  --transition-fast: all 0.2s ease;
}
```

### Theme Switching Example

```javascript
// Example: Switch to light theme
document.documentElement.style.setProperty('--color-bg', '#ffffff');
document.documentElement.style.setProperty('--color-text', '#121212');
document.documentElement.style.setProperty('--color-bg-card', '#f8f9fa');

// Example: Increase font sizes for accessibility
document.documentElement.style.setProperty('--font-size-base', '1.3rem');
document.documentElement.style.setProperty('--font-size-lg', '1.5rem');
```

## Complete Variable Reference

### Quick Variable Lookup

#### Most Used Variables
```scss
// Spacing
$spacing-xs: 0.5rem;       // 8px
$spacing-sm: 1rem;         // 16px  
$spacing-md: 1.5rem;       // 24px
$spacing-lg: 2rem;         // 32px
$spacing-xl: 3rem;         // 48px

// Colors
$primary-500: #22c55e;     // Main green
$neutral-900: #121212;     // Background
$neutral-100: #ffffff;     // Text

// Effects
$hover-lift-distance: -4px;     // Standard hover
$hover-lift-small: -2px;        // Subtle hover
$transition-base: all 0.3s ease; // Standard transitions
$opacity-shadow: 0.1;           // Drop shadows
$opacity-backdrop: 0.7;         // Header backdrop
```

#### Animation Variables
```scss
$animation-duration-fast: 0.3s;      // Quick effects
$animation-duration-normal: 0.4s;    // Standard animations
$animation-duration-shine: 0.6s;     // Shine effects
$transition-width: width 0.3s ease;  // Underline animations
```

#### Component Sizing
```scss
$card-min-width: 400px;             // Card grids
$bio-page-max-width: 900px;         // Bio content
$footer-logo-size: 72px;            // Footer logo
$footer-logo-font-size: 1.8rem;     // Footer text
```

### Variable Usage Guidelines

1. **Always use spacing variables** instead of hardcoded pixel values
2. **Use opacity variables** for consistent shadow and overlay effects  
3. **Apply animation duration variables** for consistent timing
4. **Leverage effect distance variables** for standardized hover effects
5. **Use component dimension variables** for maintainable sizing

### Common Patterns
```scss
// Good - Uses variables
.my-component {
  padding: $spacing-lg;
  margin-bottom: $spacing-md;
  transition: $transition-base;
  box-shadow: 0 4px 6px rgba(0, 0, 0, $opacity-shadow);
  
  &:hover {
    transform: translateY($hover-lift-distance);
  }
}

// Avoid - Hardcoded values
.bad-component {
  padding: 32px;           // Use $spacing-lg
  margin-bottom: 24px;     // Use $spacing-md  
  transition: all 0.3s;    // Use $transition-base
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);  // Use $opacity-shadow
}
```

## Performance Notes

- **Bundle size**: ~8.6KB minified (comprehensive variable system adds minimal overhead)
- **Hugo compilation**: Uses Hugo Pipes with Sass processing and minification
- **Modular structure**: Allows for easy removal of unused components
- **CSS custom properties**: Enable runtime theming without bundle size increase
- **Variable systematization**: 100% of animations, effects, and dimensions use variables

## Best Practices

1. **Use mixins** for repeated patterns rather than duplicating CSS
2. **Prefer utility classes** for simple styling needs
3. **Use CSS custom properties** for values that might change dynamically
4. **Follow the comprehensive variable system** - Use variables for all spacing, dimensions, animations, and effects rather than hardcoded values
5. **Leverage the opacity variables** for consistent shadow and overlay effects
6. **Use animation duration variables** for consistent timing across all animations
7. **Apply component dimension variables** for maintainable sizing constraints
8. **Test responsive behavior** with the provided mixins
9. **Maintain component isolation** by keeping styles within their respective partials

## Future Enhancements

The system is designed to grow with the site. Potential additions:

1. **Dark/light theme toggle** using CSS custom properties
2. **Additional utility classes** as needed for new components
3. **Animation library** expansion with more preset animations
4. **Component variants** by extending existing mixins
5. **Accessibility features** like reduced motion preferences