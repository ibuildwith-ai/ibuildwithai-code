# Version Design Document: v1.8.7-responsive-tables
Technical implementation and design guide for automatic responsive table styling.

## 1. Features Summary
_Overview of features included in this version._

This version implements automatic responsive styling for all markdown tables in blog posts, enhancing readability on both desktop and mobile devices without requiring any changes to existing content.

**Key Features:**
- **Automatic Conversion**: Hugo render hook intercepts all markdown tables and wraps them with responsive CSS classes
- **Desktop Styling** (> 1050px): Enhanced table presentation with:
  - Header row with dark background and centered text
  - Zebra striping (alternating row colors) for improved readability
  - Clean borders separating rows and columns
  - Centered text alignment
  - Dark theme using existing color variables
- **Mobile Styling** (≤ 1050px): Card-based layout where:
  - Each table row becomes an individual card
  - First column value becomes the card title/header
  - Remaining columns display as label-value pairs
  - All cards visible (no collapse/accordion)
  - Vertical stacking with standard spacing
- **Zero Configuration**: Works automatically on all existing and future markdown tables
- **Accessibility**: Proper ARIA labels and semantic HTML for screen readers
- **CSS-Only**: No JavaScript required for transformation

## 2. Technical Architecture Overview
_High-level technical structure that supports all features in this version._

**Hugo Render Hook:**
- Create `themes/ibuildwithai/layouts/_default/_markup/render-table.html`
- Intercepts markdown table rendering
- Wraps tables with semantic HTML structure
- Adds data attributes for CSS targeting
- Adds ARIA labels for accessibility

**CSS Architecture:**
- All styles in `themes/ibuildwithai/assets/scss/_components.scss`
- Desktop styles: Default table display with enhanced styling
- Mobile styles: Media query at `@media (max-width: $breakpoint-tablet)` (1050px)
- Uses existing SCSS variables for consistency:
  - `$neutral-900`: Primary background
  - `$neutral-800`: Card/header backgrounds
  - `$neutral-700`: Borders
  - `$neutral-400`: Secondary text
  - `$neutral-100`: Primary text
  - `$primary-500`: Green accent for highlights/hover
  - `$breakpoint-tablet`: 1050px

**HTML Structure (Output from Render Hook):**
```html
<div class="responsive-table-wrapper">
  <table class="responsive-table" role="table" aria-label="Data table">
    <thead>
      <tr>
        <th data-label="Column 1">Column 1</th>
        <th data-label="Column 2">Column 2</th>
        <th data-label="Column 3">Column 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Column 1">Value 1</td>
        <td data-label="Column 2">Value 2</td>
        <td data-label="Column 3">Value 3</td>
      </tr>
    </tbody>
  </table>
</div>
```

## 3. Implementation Notes
_Shared technical considerations across all features in this version._

**Hugo Render Hook Details:**
- Render hooks in Hugo intercept markdown rendering
- Located at `layouts/_default/_markup/render-table.html`
- Has access to `.Inner` (table content), `.Page`, and table attributes
- Must output valid HTML
- Automatically applies to all markdown tables (pipe tables)

**CSS Transformation Strategy:**

**Desktop (Default):**
- Standard table display
- `border-collapse: separate` for clean borders
- Header row: `$neutral-800` background, bold text, centered
- Even rows: `$neutral-900` background
- Odd rows: Slightly lighter shade (e.g., `lighten($neutral-900, 2%)`)
- All cells: Padding, centered text, borders
- Optional hover effect on rows using `$primary-500`

**Mobile (≤ 1050px):**
- Hide `<thead>` visually (keep for accessibility)
- Each `<tr>` becomes a block-level card
- Each `<td>` becomes a block element
- Use `::before` pseudo-element with `content: attr(data-label)` to show column headers
- First `<td>` in each row styled as card header (larger, bold, green accent)
- Remaining `<td>` elements styled as label-value pairs
- Cards separated by margin/padding

**Accessibility Considerations:**
- Maintain semantic HTML structure (`<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>`)
- Add `role="table"` to table element
- Add `aria-label` with descriptive text
- Keep `<thead>` in DOM (visibility hidden on mobile, not `display: none`)
- Ensure keyboard navigation works
- Test with screen readers

**Browser Compatibility:**
- CSS Grid/Flexbox for layout (supported by all modern browsers)
- Media queries (universal support)
- `attr()` function for data attributes (universal support)
- Graceful degradation for older browsers (they see standard table)

## 4. Other Technical Considerations
_Any other technical information that might be relevant to building this version._

**Performance:**
- CSS-only solution = zero JavaScript overhead
- No runtime transformations or DOM manipulation
- Minimal CSS footprint (~200-300 lines estimated)
- Hugo Pipes will minify and fingerprint CSS automatically

**Content Compatibility:**
- Works with any markdown table format
- Preserves bold/italic formatting in cells
- Supports links within table cells
- Handles multi-line content within cells
- No changes needed to existing markdown files

**Testing Strategy:**
- Test with existing blog tables (lines 35-41 and 79-83 in GEO blog post)
- Test tables with varying column counts (2, 3, 4, 5+ columns)
- Test tables with bold/italic/link formatting
- Test on multiple devices:
  - Desktop (> 1050px)
  - Tablet (≤ 1050px)
  - Mobile (< 768px)
- Test with screen reader (VoiceOver on macOS)
- Test keyboard navigation

**Visual Reference:**
- Desktop styling inspired by provided image with before/after comparison table
- Header row with distinct background
- Zebra striping for row differentiation
- Clean, professional appearance
- Mobile cards should feel like natural content cards

**Edge Cases to Consider:**
- Tables with only 1 column (edge case, but should work)
- Tables with very wide content (long URLs, etc.)
- Tables with empty cells
- Tables with header row only (no body rows)
- Nested tables (rare, but possible in HTML - not in markdown)

## 5. Open Questions
_Unresolved technical or product questions affecting this version._

None at this time. All requirements are clear and implementation approach is straightforward.

**Potential Future Enhancements (Out of Scope for v1.8.7):**
- Optional horizontal scroll for very wide tables on mobile (if card layout doesn't work well)
- Sortable columns on desktop (would require JavaScript)
- Collapsible/expandable rows on mobile (would require JavaScript)
- Custom styling per table via frontmatter or shortcode parameters
- Export table data as CSV/JSON
