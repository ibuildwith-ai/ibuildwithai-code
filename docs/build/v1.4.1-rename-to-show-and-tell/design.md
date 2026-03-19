# Release Design Document: v1.4.1 - Rename to Show & Tell
Technical implementation and design guide for the upcoming release.

## 1. Features Summary
_Overview of features included in this release._

Complete rebranding of the "Built with Vibes" section to "Show & Tell" - maintaining the same show format concept but with a more generic, universally understood name. This involves comprehensive codebase changes to rename all references while maintaining functionality.

**Key Changes:**
- Section rebranding: "Built with Vibes" → "Show & Tell"  
- URL structure: `/built-with-vibes/` → `/show-and-tell/`
- Variable naming: Use "And" instead of "&" symbol (e.g., `showAndTell`)
- Content concept: Same screen-sharing project showcases format
- Description/tagline: Remains the same as current "Built with Vibes" content

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
content/built-with-vibes/ → content/show-and-tell/
layouts/built-with-vibes/ → layouts/show-and-tell/
data/seo/content-types/built-with-vibes/ → data/seo/content-types/show-and-tell/
assets/images/built-with-vibes/ → assets/images/show-and-tell/
archetypes/built-with-vibes.md → archetypes/show-and-tell.md
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
3. **CSS Class Updates**: Rename CSS classes from `.built-with-vibes-*` to `.show-and-tell-*`
4. **Configuration Updates**: Update automation scripts and archetypes
5. **Content Migration**: Move existing content while preserving front matter

**Search and Replace Patterns:**
- String literals: "built-with-vibes" → "show-and-tell"
- CSS classes: "built-with-vibes" → "show-and-tell" 
- Template references: `.Site.Sections.built-with-vibes` → `.Site.Sections.show-and-tell`
- Hugo content types: `built-with-vibes` → `show-and-tell`
- Variable names: Use camelCase with "And" (e.g., `showAndTellImg`, `upcomingShowAndTell`)

**Critical Files to Update:**
- `automations/create-content.sh` - Content creation script
- `archetypes/show-and-tell.md` - Content template (renamed from built-with-vibes.md)
- `config/_default/config.toml` - Hugo configuration URLs parameter
- All template files in `themes/icodewithai/layouts/show-and-tell/`
- CSS files containing built-with-vibes-specific styles
- Navigation/menu references in header templates
- Homepage references

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
- Rename icon files (e.g., `icon-built-with-vibes.png` → `icon-show-and-tell.png`)

**Build Process:**
- No changes to Hugo build pipeline required
- Asset processing will continue to work with new directory names
- Automation scripts must be updated to reference new content type

**Variable Naming Convention:**
- Hugo template variables: Use camelCase with "And" (showAndTellEpisodes)
- CSS classes: Use kebab-case with hyphens (show-and-tell-episodes)
- Directory/file names: Use kebab-case with hyphens (show-and-tell)
- URL paths: Use kebab-case with hyphens (/show-and-tell/)

## 5. Open Questions
_Unresolved technical or product questions affecting this release._

None - this is a straightforward rename operation following the same pattern as v1.4.0 but with different naming conventions. All requirements are clearly defined.