# Version Design Document : v1.9.0-event-header-restructure
Technical implementation and design guide for event header restructuring.

## 1. Features Summary
_Overview of features included in this version._

This version restructures the event detail page header layout for desktop screens, creating the same two-column design implemented for blog posts in v1.8.9. The featured image displays on the left with event metadata and title on the right. The mobile layout remains unchanged, and all event images now display by default (no optional display toggle).

**Key Features:**
- Desktop two-column header layout (45% image, 55% content)
- Image resized and positioned on left column with proper scaling
- Event metadata reorganized on right column: EVENT label, title, date/time/timezone, presenter(s), location, meeting type, status
- Full-width horizontal divider spanning entire header width
- Balanced spacing above and below divider
- Mobile layout unchanged (stacked vertically as before)
- `displayImageInline` parameter removed from archetype (images always display)
- All 12 existing event entries updated to remove optional display flag
- Responsive design with breakpoint at 1050px (existing tablet breakpoint)
- Reuses existing `.blog-header-*` CSS classes (no new CSS needed)

## 2. Technical Architecture Overview
_High-level technical structure that supports all features in this version._

**Frontend Architecture:**
- **Hugo Template Restructuring**: Reorganize event header HTML structure with wrapper for two-column layout
- **CSS Grid Layout Reuse**: Use existing CSS Grid classes from blog header implementation
- **SCSS Responsive Design**: Desktop grid layout (45/55 split) below 1050px breakpoint (mobile stacked)
- **Spacing Consistency**: Same balanced margins and padding as blog header

**Template Structure:**
1. `.blog-header-wrapper` - CSS Grid container for two-column layout (reused from blog)
2. `.blog-header-image` - Left column with featured image (45% width)
3. `.blog-header-content` - Right column with event metadata and title (55% width)
4. `.blog-header-divider` - Full-width horizontal line spanning both columns

**File Structure:**
- `themes/ibuildwithai/layouts/events/single.html` - Updated template with new header structure
- `archetypes/events.md` - Removed `displayImageInline` parameter (no longer optional)
- `content/events/*.md` (12 files) - Removed `displayImageInline` from all event entries

## 3. Implementation Notes
_Shared technical considerations across all features in this version._

**CSS Grid Implementation:**
- Reuses existing `.blog-header-wrapper` grid: 45% for image, 1fr (remaining) for content
- Gap between columns: $spacing-lg (1.5rem)
- Divider uses `grid-column: 1 / -1` to span full width
- Mobile breakpoint: max-width 1049px (uses $breakpoint-tablet - 1px)

**Spacing Strategy:**
- Same spacing as blog header (v1.8.9):
  - Margin-top on divider: $spacing-md (1rem)
  - Margin-bottom on divider: 0
  - Margin-top on content: $spacing-md (1rem) - creates balanced spacing
  - h1 margin-bottom: $spacing-md (matches EVENT label to title spacing)
  - post-meta spacing maintains existing event metadata layout

**Responsive Behavior:**
- Desktop (>1050px): Two-column grid layout with image left, metadata right
- Mobile (≤1049px): Stacked layout - image full-width first, then metadata (unchanged from original)

**Content Display:**
- Featured images always display (no conditional check for `displayImageInline`)
- HTML structure remains clean and semantic
- Mobile experience identical to v1.8.x
- Event metadata order preserved: date/time, presenter(s), location, meeting type, status

## 4. Other Technical Considerations
_Shared any other technical information that might be relevant to building this version._

**Code Reuse:**
- This implementation leverages all CSS from v1.8.9-blog-header-restructure
- No new SCSS needed - template changes only
- Maintains consistency between blog and event page layouts

**Content Updates:**
- 12 event entries need `displayImageInline` parameter removed
- Archetype update prevents future events from using the removed parameter

**Testing Focus:**
- Verify event metadata displays correctly in right column
- Ensure multi-presenter events format properly (comma-separated names with Oxford comma)
- Confirm status messages ("completed" vs current events) display correctly
- Test meeting type and location display in new layout

## 5. Success Criteria
_How we know the feature is complete and working correctly._

- ✅ Desktop event pages display two-column header layout at 1050px+ width
- ✅ Image column is 45% width with proportional height scaling
- ✅ Content column displays event metadata in correct order: EVENT, title, date/time/timezone, presenters, location, type, status
- ✅ Full-width divider line spans from left edge to right edge
- ✅ Spacing above and below divider is equal ($spacing-md on both sides)
- ✅ Gap between image and content columns is $spacing-lg
- ✅ Mobile layout (≤1049px) stacks vertically with full-width image first
- ✅ Archetype no longer has `displayImageInline` parameter
- ✅ All 12 event entries have `displayImageInline` removed
- ✅ Event images always display on all events
- ✅ Responsive design works smoothly across all breakpoints
- ✅ Multi-presenter formatting works correctly in new layout
- ✅ Event status messages display correctly
