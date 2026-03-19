# Version Design Document : v1.8.2-rename-presentations-to-events
Technical implementation and design guide for the upcoming version.

## 1. Features Summary
_Overview of features included in this version._

This version performs a comprehensive rebranding from "Presentations" to "Events" throughout the entire I Build With AI platform. The rename maintains all existing functionality, layouts, and features while providing clearer, more inclusive terminology for the platform's event content.

**Key Changes:**
- Rename all directory structures from `presentations` to `events`
- Update all template files with "events" terminology
- Rename CSS classes from `.presentation-*` to `.event-*`
- Update configuration parameters from `presentations` to `events`
- Update URL paths from `/presentations/` to `/events/`
- Update automation scripts to support "events" content type
- Update all documentation references

**What Stays the Same:**
- All existing functionality (upcoming, on-demand, completed statuses)
- Page layouts and designs
- YouTube video embeds for on-demand content
- Multi-presenter support
- SEO metadata structure
- Content frontmatter fields (no changes to existing markdown files)

## 2. Technical Architecture Overview
_High-level technical structure that supports all features in this version._

**Hugo Static Site Architecture:**
- **Content Layer**: `content/presentations/` → `content/events/`
- **Template Layer**: `themes/ibuildwithai/layouts/presentations/` → `themes/ibuildwithai/layouts/events/`
- **Asset Layer**: `themes/ibuildwithai/assets/images/presentations/` → `themes/ibuildwithai/assets/images/events/`
- **Data Layer**: `data/seo/content-types/presentations/` → `data/seo/content-types/events/`
- **Configuration Layer**: Hugo config.toml parameters
- **Build Layer**: Archetype templates for content creation
- **Automation Layer**: Shell scripts for content management

**Affected Components:**
1. **Hugo Content System**: Directory rename with automatic path resolution
2. **Hugo Templates**: List and single page layouts, partials (header, footer), home page
3. **CSS/SCSS**: Component styles with class name updates
4. **Configuration**: Hugo config parameters for section URLs
5. **Automation**: create-content.sh script for new content generation
6. **Documentation**: Internal docs for developers and content creators

## 3. Implementation Notes
_Shared technical considerations across all features in this version._

**Directory Rename Strategy:**
- Use `mv` command for atomic directory renames
- Rename in order: content → layouts → assets → data → archetypes
- Hugo will automatically resolve new paths after directory moves

**Template Update Strategy:**
- Update Hugo template references: `{{ .Site.Params.presentations }}` → `{{ .Site.Params.events }}`
- Update section checks: `{{ if eq .Section "presentations" }}` → `{{ if eq .Section "events" }}`
- Update text labels: "Presentations" → "Events", "Presentation" → "Event"
- Update navigation links in header and footer partials

**CSS Update Strategy:**
- Find and replace all `.presentation-*` classes with `.event-*`
- No structural CSS changes needed, only class name updates
- Maintain existing responsive design and hover states

**Configuration Update Strategy:**
- Update `config/_default/config.toml` parameter: `presentations = "/presentations/"` → `events = "/events/"`
- No other config changes needed

**Automation Script Update Strategy:**
- Update `create-content.sh` VALID_TYPES array: "presentations" → "events"
- Update content type references in case statements
- Update output messages and examples
- Maintain backward compatibility for other content types

**Documentation Update Strategy:**
- Update all references in `components.md` and `content-management.md`
- Update command examples showing content creation
- Update file path references
- Update section descriptions

**Testing Approach:**
- Verify Hugo builds without errors
- Test all event pages render correctly (list and single views)
- Test navigation links work (header, footer, home page)
- Verify URL structure changed from `/presentations/` to `/events/`
- Test content creation script with new "events" type
- Verify existing event content displays properly (upcoming, on-demand, completed)
- Test responsive design on mobile, tablet, desktop

## 4. Other Technical Considerations
_Shared any other technical information that might be relevant to building this version._

**Git Workflow:**
- This is a large rename operation affecting many files
- Consider committing in logical phases:
  1. Directory renames
  2. Template updates
  3. CSS updates
  4. Config and automation updates
  5. Documentation updates
- Use clear commit messages for each phase

**SEO Considerations:**
- No redirects needed per user requirement (clean cutover)
- Search engines will discover new URLs through sitemap
- Existing indexed pages will naturally update over time
- Social media shares will use new URLs going forward

**Build Performance:**
- No performance impact expected
- Directory renames don't affect Hugo build time
- Asset processing remains unchanged

**Backward Compatibility:**
- No backward compatibility needed (clean cutover)
- Old `/presentations/` URLs will return 404 after deployment
- Content creators should use "events" for all new content

**Content Migration:**
- 11 existing markdown files in `content/presentations/` will automatically work after directory rename
- No frontmatter changes required
- No content edits needed

**Multi-Environment Deployment:**
- Test on staging (`next.ibuildwith.ai`) first
- Verify all functionality before production deployment
- Deploy to production (`www.ibuildwith.ai`) after approval

## 5. Open Questions
_Unresolved technical or product questions affecting this version._

**None.** All requirements are clear and scope is well-defined. The user confirmed:
- ✅ Comprehensive rename of everything "presentations" to "events"
- ✅ URL structure changes from `/presentations/` to `/events/`
- ✅ No redirects needed
- ✅ Functionality and layouts remain unchanged
- ✅ Content files don't need frontmatter changes
- ✅ Automation script needs updating
- ✅ Documentation needs updating
- ✅ About page descriptive text needs updating
