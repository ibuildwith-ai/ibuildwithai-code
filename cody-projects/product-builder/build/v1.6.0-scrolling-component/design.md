# Version Design Document : v1.6.0-scrolling-component
Technical implementation and design guide for the upcoming version.

## 1. Features Summary
_Overview of features included in this version._

This version introduces a reusable infinite scrolling carousel component for displaying content cards with the following capabilities:

- **Infinite horizontal scrolling carousel** with seamless looping
- **Configurable parameters**: auto/manual scroll, speed (slow/fast), direction (left/right)
- **Interactive cards** with icon, heading, optional description, and clickable links
- **Hover interactions**: pause scrolling on hover, resume on mouse leave
- **Edge fade effects**: gradient fade-out on both left and right edges
- **Responsive design**: adapts to canvas width, works on all devices
- **Accessibility**: ARIA attributes and keyboard navigation
- **Home page integration**: replaces current "Explore" section

## 2. Technical Architecture Overview
_High-level technical structure that supports all features in this version._

### Component Architecture
- **Hugo Shortcode** (`scrolling-carousel.html`) - Main component interface
- **SCSS Module** (`_scrolling-carousel.scss`) - Styling and animations
- **JavaScript Module** (`scrolling-carousel.js`) - Scroll logic and interactions

### Data Flow
1. Content creator uses shortcode with parameters in markdown/template files
2. Shortcode renders HTML structure with data attributes for configuration
3. JavaScript initializes carousel based on data attributes
4. CSS handles visual styling, transitions, and fade effects

### Component Structure
```
<div class="scrolling-carousel" data-scroll="auto" data-speed="slow" data-direction="left">
  <div class="scrolling-carousel__container">
    <div class="scrolling-carousel__track">
      <!-- Original items -->
      <div class="scrolling-carousel__item">
        <a href="/path">
          <img src="/icon.png" alt="Icon">
          <h3>Heading</h3>
          <p>Description (optional)</p>
        </a>
      </div>
      <!-- Cloned items for infinite loop -->
    </div>
  </div>
</div>
```

## 3. Implementation Notes
_Shared technical considerations across all features in this version._

### Infinite Scroll Implementation
- **Clone strategy**: Duplicate the entire item set 2-3 times in the DOM to create seamless loop
- **Position reset**: When scroll position reaches cloned set, instantly reset to original set position
- **Performance**: Use CSS `transform: translateX()` instead of `left` for better performance
- **RequestAnimationFrame**: Use for smooth 60fps scrolling animation

### Shortcode Parameters
- `scroll` (string): "auto" | "none" (default: "auto")
- `speed` (string): "slow" | "fast" (default: "slow")
- `direction` (string): "left" | "right" (default: "left")
- `width` (string): Card width value (e.g., "300px", "20rem") - applies to all cards
- `height` (string): Card height value (e.g., "200px", "15rem") - applies to all cards
- Content items passed as inner content with consistent structure

### Fade Effect Implementation
- **CSS Pseudo-elements**: Use `::before` and `::after` for left/right fade gradients
- **Gradient**: `linear-gradient(to right, rgba(bg-color, 1), transparent)`
- **Z-index**: Position fade overlays above carousel items
- **Width**: Fade width should be ~10-15% of container width

### Hover Behavior
- **Pause mechanism**: Stop animation frame loop on mouseenter
- **Resume mechanism**: Restart animation frame loop on mouseleave
- **Transition**: Smoothly decelerate/accelerate using easing function

### Responsive Considerations
- **Canvas width**: Use container-relative sizing, not viewport width
- **Item sizing**: Cards should be responsive with min/max widths
- **Mobile**: Maintain horizontal scroll, possibly reduce card size
- **Touch support**: Detect touch events for pause behavior on mobile

### Accessibility
- **ARIA role**: `role="region" aria-label="Scrolling carousel"`
- **Keyboard navigation**: Tab through items, Enter to activate links
- **Reduced motion**: Respect `prefers-reduced-motion` media query
- **Focus management**: Visible focus indicators on cards

### Styling Consistency
- **Color scheme**: Match dark theme with green accents (#00ff94)
- **Hover effect**: Similar to FAQ component (subtle scale, glow, shadow)
- **Card design**: Rounded corners, subtle borders, dark background
- **Typography**: Consistent with site font hierarchy

## 4. Other Technical Considerations
_Shared any other technical information that might be relevant to building this version._

### Performance Optimization
- **Lazy loading**: Consider lazy loading images in carousel items
- **GPU acceleration**: Use `will-change: transform` sparingly
- **Debouncing**: Debounce resize events for responsive recalculations
- **Memory**: Clean up event listeners and animation frames on component destroy

### Browser Compatibility
- **Modern browsers**: Target ES6+ with fallbacks if needed
- **CSS features**: Ensure gradient and transform support
- **Smooth scrolling**: Polyfill if necessary for older browsers

### Hugo Integration
- **Asset pipeline**: SCSS compiled via Hugo Pipes
- **JavaScript bundling**: Include in main.js or separate module
- **Image handling**: Support Hugo image processing for icons

### Testing Checklist
- [ ] Test with 3, 5, 10, 20+ items
- [ ] Test all parameter combinations (scroll, speed, direction)
- [ ] Test on mobile, tablet, desktop viewports
- [ ] Test hover/touch interactions
- [ ] Test keyboard navigation
- [ ] Test with prefers-reduced-motion enabled
- [ ] Test fade effects at different container widths
- [ ] Verify no layout shift or jank during initialization

### Content Creator Experience
- **Simple syntax**: Keep shortcode usage intuitive
- **Clear documentation**: Provide inline comments and usage examples
- **Flexible content**: Support variable number of items
- **Error handling**: Graceful degradation if parameters are invalid

## 5. Open Questions
_Unresolved technical or product questions affecting this version._

All questions resolved:

1. **Card dimensions**: ✅ RESOLVED - Dynamic values via `width` and `height` shortcode parameters (applies to all cards in the carousel)

2. **Speed values**: ✅ RESOLVED - slow = 30px/s, fast = 60px/s (to be tested and adjusted as needed)

3. **Number of clones**: ✅ RESOLVED - 2x clones (original + 2 copies = 3 total sets)

4. **Fade width**: ✅ RESOLVED - 150px fixed width or 10% of container (whichever is smaller)

5. **Mobile behavior**: ✅ RESOLVED - Auto-scroll on mobile if `scroll="auto"`, allow touch/swipe override

6. **Initial content**: ✅ RESOLVED - User will add final content, but for testing will use multiple example items with icons from `/themes/icodewithai/assets/images/icons/` folder (icon-apps.png, icon-blog.png, icon-podcast.png, icon-presentation.png, etc.)
