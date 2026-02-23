# Version Design Document: v1.8.1-updates-to-presentation-and-podcast-pages
Technical implementation and design guide for the upcoming version.

## 1. Features Summary
_Overview of features included in this version._

This version enhances the Podcast and Presentations sections by improving content organization, adding a new "On-Demand" status for presentations, and providing better user experience through conditional display logic and YouTube video embeds.

**Key Features:**
1. **Podcast List Page**: Conditional display of "On-Demand" heading based on upcoming episodes
2. **Presentations List Page**: New three-section layout (Upcoming, On-Demand, Completed) with description removal
3. **Presentations Single Page**: YouTube video embed for on-demand presentations with conditional links section

## 2. Technical Architecture Overview
_High-level technical structure that supports all features in this version._

**Frontend Stack:**
- **Hugo Static Site Generator**: Template-based rendering with Go template language
- **Existing Templates**:
  - `themes/ibuildwithai/layouts/podcast/list.html` (podcast list page)
  - `themes/ibuildwithai/layouts/presentations/list.html` (presentations list page)
  - `themes/ibuildwithai/layouts/presentations/single.html` (individual presentation page)
- **Content Management**: Markdown files in `content/presentations/` with frontmatter metadata
- **Hugo Pipes**: Asset processing for images (already implemented)

**Content Structure:**
- **Presentation Frontmatter Fields**:
  - `status`: "upcoming", "on-demand", or "completed"
  - `on_demand_url`: YouTube URL for on-demand presentations
  - `image`: Presentation thumbnail image
  - `summary`: Description text (to be hidden on list page)
  - Other existing fields: `date_time`, `presenter`, `location`, `meeting_type`, etc.

## 3. Implementation Notes
_Shared technical considerations across all features in this version._

### Podcast List Page (list.html)
**Current Behavior:**
- Lines 39-40: Filters episodes by status ("upcoming" and "published")
- Lines 42-74: "Upcoming Live" section (conditional)
- Lines 76-108: "On-Demand" section (conditional)

**Required Change:**
- Line 77: Conditionally display `<h2>On-Demand</h2>` only if `$upcomingEpisodes` exists
- Logic: `{{ if $upcomingEpisodes }}<h2>On-Demand</h2>{{ end }}`

### Presentations List Page (list.html)
**Current Behavior:**
- Lines 14-15: Filters by status ("upcoming" and "completed")
- Lines 17-67: "Upcoming" section
- Lines 69-119: "Completed" section
- Lines 61 & 113: Display `{{ .Params.summary }}` description

**Required Changes:**
1. Add new filter: `$onDemandPresentations := where .Pages ".Params.status" "on-demand"`
2. Remove description lines (61 & 113): Delete `<p>{{ .Params.summary }}</p>`
3. Insert new "On-Demand" section between Upcoming and Completed
4. Sort on-demand by date descending (`.Params.date_time` "desc")
5. Update completed filter to exclude on-demand status

### Presentations Single Page (single.html)
**Current Behavior:**
- Lines 38-47: Display image if `displayImageInline` is true
- Lines 102-123: Display Links section if URLs exist

**Required Changes:**
1. Check if `status == "on-demand"`
2. If true, embed YouTube player instead of image (lines 38-47 replacement)
3. If true, hide entire Links section (lines 102-123)

**YouTube Embed Implementation:**
- Extract video ID from `on_demand_url` (supports various YouTube URL formats)
- Use responsive iframe embed with Hugo template
- Maintain existing styling consistency

## 4. Other Technical Considerations
_Any other technical information that might be relevant to building this version._

### YouTube URL Parsing
YouTube URLs can have multiple formats:
- `https://www.youtube.com/watch?v=VIDEO_ID`
- `https://youtu.be/VIDEO_ID`
- `https://www.youtube.com/embed/VIDEO_ID`

Need to extract VIDEO_ID reliably and construct embed URL: `https://www.youtube.com/embed/VIDEO_ID`

### Hugo Template Logic
- Use Hugo's `where` function for filtering by status
- Use conditional blocks with `{{ if eq .Params.status "on-demand" }}`
- Leverage existing CSS classes for consistency (`.podcast-episodes`, `.app-card`, etc.)
- No new CSS required - reuse existing presentation card styling

### Responsive Design
- YouTube embeds should be responsive (aspect ratio 16:9)
- Existing card layouts already responsive
- Test mobile display after implementation

### Backward Compatibility
- Existing presentations with status "upcoming" or "completed" continue to work
- New "on-demand" status is additive
- No breaking changes to existing content

## 5. Open Questions
_Unresolved technical or product questions affecting this version._

**Q1: Should the "On-Demand" heading on podcast page be hidden when there are NO upcoming episodes, or when there ARE upcoming episodes?**
- **Answer from User**: Hide when there are NO upcoming episodes. Show only when upcoming episodes exist.

**Q2: Should presentations with `status = "on-demand"` still appear in the Completed section as a fallback?**
- **Answer**: No, they should only appear in the On-Demand section. Completed section should exclude on-demand items.

**Q3: Should the YouTube embed preserve the original aspect ratio or use a fixed size?**
- **Recommendation**: Use responsive 16:9 aspect ratio (standard YouTube) with CSS.

**Q4: What if `on_demand_url` is missing for a presentation with `status = "on-demand"`?**
- **Recommendation**: Fall back to displaying the image as normal (defensive programming).

**Q5: Should we add a play icon overlay on on-demand presentation thumbnails in the list view?**
- **Decision**: Not in this version. Keep it simple. Can add in future enhancement.
