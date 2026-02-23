# Version Design Document: v1.4.3-support-multiple-presenters-in-prezos
Technical implementation and design guide for supporting multiple presenters in presentations.

## 1. Features Summary
_Overview of features included in this version._

This version extends the presentations system to support multiple presenters while maintaining backward compatibility with single presenter presentations.

**Key Features:**
- Support comma-separated presenter values in frontmatter (`presenter = "marcelo-lewin,josh-thornes"`)
- Enhanced presenter name formatting with proper grammar (comma + "and" for last presenter)
- Multiple presenter bio sections displayed vertically
- Updated UI labels for plural vs singular presenters
- Responsive design maintained across all presenter layouts

## 2. Technical Architecture Overview
_High-level technical structure that supports all features in this version._

**Frontend Stack:**
- Hugo static site generator with Go templates
- Custom theme: `icodewithai`
- Data source: JSON files in `data/people/[first-last].json`

**Template Updates Required:**
1. `themes/icodewithai/layouts/presentations/single.html` - Individual presentation page
2. `themes/icodewithai/layouts/presentations/list.html` - Presentations listing page

**Data Flow:**
1. Parse comma-separated presenter field from frontmatter
2. Split presenter string into individual presenter keys
3. Loop through keys to fetch presenter data from `Site.Data.people`
4. Format presenter names with proper grammar rules
5. Render presenter information in templates

## 3. Implementation Notes
_Shared technical considerations across all features in this version._

**String Parsing Logic:**
- Use Hugo's `split` function to convert comma-separated string to slice
- Trim whitespace from each presenter key using `trim` function
- Handle empty/invalid presenter keys gracefully

**Name Formatting Rules:**
- 1 presenter: "Marcelo Lewin"
- 2 presenters: "Marcelo Lewin and Josh Thornes" (no comma)
- 3+ presenters: "Marcelo Lewin, Josh Thornes, and Bob Wilson" (Oxford comma)

**UI Conditional Logic:**
- Single presenter: "About the Presenter"
- Multiple presenters: "About the Presenters"
- Presenter boxes stack vertically with consistent spacing

**Backward Compatibility:**
- Existing single presenter format (`presenter = "marcelo-lewin"`) continues to work
- No changes required to existing presentation content files
- No changes to presenter data structure in JSON files

## 4. Other Technical Considerations
_Any other technical information that might be relevant to building this version._

**Responsive Design:**
- Maintain existing responsive behavior for presenter sections
- Ensure proper spacing between multiple presenter boxes on all screen sizes
- Preserve existing CSS classes and styling patterns

**Error Handling:**
- Handle missing presenter data gracefully (skip invalid keys)
- Provide fallback behavior if presenter JSON file doesn't exist
- Debug information should remain consistent with current implementation

**Performance Considerations:**
- Multiple presenter lookups should not significantly impact build time
- Template logic should be efficient for sites with many presentations

## 5. Open Questions
_Unresolved technical or product questions affecting this version._

**Resolved during discovery:**
- ✅ Presenter box layout: Confirmed vertical stacking
- ✅ Name formatting: Confirmed Oxford comma rules
- ✅ Data source: Confirmed JSON files in `data/people/`
- ✅ Responsive behavior: Confirmed maintain existing patterns

**No remaining open questions.**