# Release Design Document: v1.4.0 - Rename Tutorials to Built with Vibes
Technical implementation and design guide for the upcoming release.

## 1. Features Summary
_Overview of features included in this release._

Complete rebranding of the "Tutorials" section to "Built with Vibes" - a new show format where vibe coders share their screens and walk through real projects they've built. This involves comprehensive codebase changes to rename all references while maintaining functionality.

**Key Changes:**
- Section rebranding: "Tutorials" → "Built with Vibes"  
- URL structure: `/tutorials/` → `/built-with-vibes/`
- Content concept: Instructional tutorials → Screen-sharing project showcases
- Updated description: "Vibe coders share their screens and walk through real projects they've built. Explore the tech stacks, prompts, and tools that brought ideas to life, and discover practical insights for your own builds."

## 2. Technical Architecture Overview
_High-level technical structure that supports all features in this release._

**Hugo Static Site Architecture:**
- **Content Management**: Hugo markdown-based content with front matter
- **Template System**: Dedicated layouts for list and single pages
- **Asset Pipeline**: SCSS compilation and image processing via Hugo Pipes
- **SEO System**: Structured data management via YAML files
- **Build Automation**: Shell scripts for content creation workflow

**Directory Structure Changes:**
```
content/tutorials/ → content/built-with-vibes/
layouts/tutorials/ → layouts/built-with-vibes/
data/seo/content-types/tutorials/ → data/seo/content-types/built-with-vibes/
assets/images/tutorials/ → assets/images/built-with-vibes/
```

**URL Routing:**
- Hugo's automatic URL generation based on content directory structure
- Section-based routing will automatically update URLs when directories are renamed
- No custom URL configuration needed

## 3. Implementation Notes
_Shared technical considerations across all features in this release._

**Renaming Strategy:**
1. **File/Directory Operations**: Use `mv` commands to rename directories
2. **Template Updates**: Update all Hugo template references to new section name
3. **CSS Class Updates**: Rename CSS classes from `.tutorial-*` to `.built-with-vibes-*`
4. **Configuration Updates**: Update automation scripts and archetypes
5. **Content Migration**: Move existing content while preserving front matter

**Search and Replace Patterns:**
- String literals: "tutorials" → "built-with-vibes"
- CSS classes: "tutorial" → "built-with-vibes" 
- Template references: `.Site.Sections.tutorials` → `.Site.Sections.built-with-vibes`
- Hugo content types: `tutorials` → `built-with-vibes`

**Critical Files to Update:**
- `automations/create-content.sh` - Content creation script
- `archetypes/tutorials.md` - Content template
- `config/_default/config.toml` - Hugo configuration (if needed)
- All template files in `themes/icodewithai/layouts/tutorials/`
- CSS files containing tutorial-specific styles
- Navigation/menu references

## 4. Other Technical Considerations
_Other technical information relevant to building this release._

**SEO Implications:**
- Update meta titles, descriptions, and schema markup
- Maintain existing SEO file structure but with new naming
- No 301 redirects needed since this is a rebrand, not migration

**Asset Management:**
- Rename image directories to maintain organization
- Update image references in templates
- Preserve Hugo's asset fingerprinting for cache busting

**Build Process:**
- No changes to Hugo build pipeline required
- Asset processing will continue to work with new directory names
- Automation scripts must be updated to reference new content type

**Backward Compatibility:**
- This is a breaking change for any existing bookmarks to `/tutorials/`
- Internal links will be automatically updated via template changes
- Consider adding temporary messaging if needed

## 5. Open Questions
_Unresolved technical or product questions affecting this release._

1. **Existing Content**: Should we update the content of the existing tutorial entry to reflect the new format, or leave it as-is for now?

> Leave it as is since it's a sample entry. Not a real one.

2. **Navigation Order**: Should "Built with Vibes" maintain the same position in site navigation as "Tutorials" currently has?

> Yes.  Just rename it to "Built with Vibes"

3. **Analytics**: Do we need to update any Google Analytics or tracking configurations that specifically reference "tutorials"?

> No.

4. **Schema Markup**: Should we update any structured data markup to reflect the new content type (e.g., from "Tutorial" to "VideoObject" or custom type)?

> I'm not sure I understand this question.  Do we have any schema markup to update?

5. **Future Content**: Are there any specific content guidelines or templates needed for the new screen-sharing format that differ from the current tutorial template?

> Nope.