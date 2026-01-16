# Version Design Document : v1.9.1-podcast-header-restructure
Technical implementation and design guide for podcast header restructuring.

## 1. Features Summary
_Overview of features included in this version._

This version restructures the podcast detail page header layout for desktop screens, creating the same two-column design implemented for blog posts (v1.8.9) and events (v1.9.0). The podcast episode image displays on the left with episode metadata and title on the right. The mobile layout remains unchanged.

**Key Features:**
- Desktop two-column header layout (45% image, 55% content)
- Podcast episode image positioned on left column with proper scaling
- Episode metadata reorganized on right column: PODCAST label, title, guest info ("A conversation with..."), date/time, Apple Podcast and Spotify icons (inline/horizontal)
- Full-width horizontal divider spanning entire header width
- Balanced spacing above and below divider
- Spotify audio embed player displayed below the header divider (when audio_id exists)
- Reminder widget displayed below audio embed for upcoming episodes (status = "upcoming")
- No audio embed for upcoming episodes (only published episodes with audio_id)
- Mobile layout unchanged (stacked vertically as before)
- Responsive design with breakpoint at 1050px (existing tablet breakpoint)
- Reuses existing `.blog-header-*` CSS classes (no new CSS needed)

## 2. Technical Architecture Overview
_High-level technical structure that supports all features in this version._

**Frontend Architecture:**
- **Hugo Template Restructuring**: Reorganize podcast header HTML structure with wrapper for two-column layout
- **CSS Grid Layout Reuse**: Use existing CSS Grid classes from blog header implementation
- **SCSS Responsive Design**: Desktop grid layout (45/55 split) below 1050px breakpoint (mobile stacked)
- **Spacing Consistency**: Same balanced margins and padding as blog and event headers

**Template Structure:**
1. `.blog-header-wrapper` - CSS Grid container for two-column layout (reused from blog/events)
2. `.blog-header-image` - Left column with podcast episode image (45% width)
3. `.blog-header-content` - Right column with podcast metadata and title (55% width)
4. `.blog-header-divider` - Full-width horizontal line spanning both columns
5. Audio embed section - Below divider (conditional on audio_id and status != "upcoming")
6. Reminder widget - Below audio embed (conditional on status = "upcoming")

**File Structure:**
- `themes/ibuildwithai/layouts/podcast/single.html` - Updated template with new header structure
- No archetype changes needed (podcast archetype doesn't have displayImageInline parameter)
- No content file updates needed (no parameter removal required)

## 3. Implementation Notes
_Shared technical considerations across all features in this version._

**CSS Grid Implementation:**
- Reuses existing `.blog-header-wrapper` grid: 45% for image, 1fr (remaining) for content
- Gap between columns: $spacing-lg (1.5rem)
- Divider uses `grid-column: 1 / -1` to span full width
- Mobile breakpoint: max-width 1049px (uses $breakpoint-tablet - 1px)

**Spacing Strategy:**
- Same spacing as blog and event headers (v1.8.9, v1.9.0):
  - Margin-top on divider: $spacing-md (1rem)
  - Margin-bottom on divider: 0
  - Margin-top on content below divider: $spacing-md (1rem) - creates balanced spacing
  - h1 margin-bottom: $spacing-md (matches PODCAST label to title spacing)
  - h3 (guest info) spacing maintained for readability

**Responsive Behavior:**
- Desktop (>1050px): Two-column grid layout with image left, metadata right
- Mobile (≤1049px): Stacked layout - image full-width first, then metadata (unchanged from original)

**Content Display:**
- Podcast episode images from `.Params.image` (all episodes have images based on list template)
- Podcast platform icons (Apple Podcast, Spotify) displayed inline/horizontal in right column
- Audio embed positioned below header divider (only for published episodes with audio_id)
- Reminder widget positioned below audio embed section (only for upcoming episodes)
- Guest info ("A conversation with...") and host info sections remain below audio embed/reminder

**Platform Icon Logic:**
- Apple Podcast icon links to episode-specific URL (`.Params.apple_podcast_episode_link`) or fallback to show URL (`.Site.Params.podcast_apple`)
- Spotify icon links to episode-specific URL (`.Params.spotify_episode_link`) or fallback to show URL (`.Site.Params.podcast_spotify`)
- Icons display inline/horizontal with existing `.podcast-icons-inline` and `.podcast-icon-link-inline` classes

## 4. Other Technical Considerations
_Shared any other technical information that might be relevant to building this version._

**Code Reuse:**
- This implementation leverages all CSS from v1.8.9-blog-header-restructure and v1.9.0-event-header-restructure
- No new SCSS needed - template changes only
- Maintains consistency between blog, event, and podcast page layouts

**Content Considerations:**
- No content file updates needed (unlike blog and events which required displayImageInline removal)
- All podcast episodes already have images based on list template usage
- Audio embed conditional logic already exists (checking for audio_id)
- Reminder widget conditional logic already exists (checking for status = "upcoming")

**Testing Focus:**
- Verify podcast episode metadata displays correctly in right column
- Ensure guest info ("A conversation with...") displays in right column before icons
- Confirm date/time formatting works for both upcoming and published episodes
- Test Apple Podcast and Spotify icon positioning and link functionality
- Verify audio embed displays below header divider for published episodes only
- Confirm reminder widget displays below header for upcoming episodes only
- Test guest photo section and host photo section display below all header content

## 5. Success Criteria
_How we know the feature is complete and working correctly._

- ✅ Desktop podcast pages display two-column header layout at 1050px+ width
- ✅ Image column is 45% width with proportional height scaling
- ✅ Content column displays podcast metadata in correct order: PODCAST label, title, guest info, date/time, platform icons
- ✅ Full-width divider line spans from left edge to right edge
- ✅ Spacing above and below divider is equal ($spacing-md on both sides)
- ✅ Gap between image and content columns is $spacing-lg
- ✅ Spotify audio embed displays below header divider for published episodes with audio_id
- ✅ Reminder widget displays below header (no audio embed) for upcoming episodes
- ✅ Mobile layout (≤1049px) stacks vertically with full-width image first
- ✅ Responsive design works smoothly across all breakpoints
- ✅ Apple Podcast and Spotify icons display inline/horizontal in right column
- ✅ Icon links work correctly with episode-specific or fallback URLs
- ✅ Guest photo section and host photo section display correctly below all header content
