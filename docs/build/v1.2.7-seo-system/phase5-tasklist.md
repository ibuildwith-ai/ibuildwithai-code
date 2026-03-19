# Phase 5: Individual Content Items SEO - Task List

## Overview
Implement SEO for individual content items (specific apps, blog posts, presentations, podcast episodes) with smart fallback hierarchies and flexible override options.

## Tasks

### 1. Enhance SEO Partial for Individual Content Detection
- [ ] Add logic to detect individual content pages (not list pages)
- [ ] Implement fallback hierarchy for individual content:
  - [ ] Priority 1: Custom SEO file (e.g., `/data/seo/content-types/apps/my-app.yaml`)
  - [ ] Priority 2: Frontmatter fields (existing `title`, `description`, `summary`)
  - [ ] Priority 3: Content-type defaults (e.g., `/data/seo/content-types/apps/listpage.yaml`)
  - [ ] Priority 4: Site defaults (`/data/seo/defaults.yaml`)
- [ ] Handle description fallbacks: `description` → `summary` → auto-generated from content
- [ ] Support for individual content slug-based file naming

### 2. Create Sample SEO Files for Key Content
- [ ] Create sample app SEO file: `/data/seo/content-types/apps/[app-slug].yaml`
  - [ ] Use defaults.social_image with custom alt text
  - [ ] Custom title optimized for the specific app
  - [ ] Custom description highlighting app features
- [ ] Create sample blog post SEO file: `/data/seo/content-types/blog/[post-slug].yaml`
  - [ ] Use defaults.social_image with custom alt text
  - [ ] SEO-optimized title for the specific post
  - [ ] Custom description encouraging engagement
- [ ] Create sample presentation SEO file: `/data/seo/content-types/presentations/[presentation-slug].yaml`
  - [ ] Use defaults.social_image with custom alt text
  - [ ] Title optimized for the specific presentation
  - [ ] Description highlighting key takeaways

### 3. Implement Smart Content Item Logic
- [ ] Update SEO partial to handle individual content detection
- [ ] Add logic to map content slugs to SEO file paths
- [ ] Implement frontmatter integration as fallback
- [ ] Test inheritance from content-type defaults
- [ ] Handle cases where no individual SEO file exists

### 4. Social Media Image Handling for Content
- [ ] Support for content-specific images in `/static/images/seo/content-types/[type]/[slug]-social.png`
- [ ] Implement fallback chain:
  - [ ] Individual content social image
  - [ ] Content-type default social image
  - [ ] Site default social image (`defaults.social_image`)
- [ ] All using `defaults.social_image` pattern with custom alt text per content item

### 5. Test Individual Content SEO Implementation
- [ ] Test individual app page shows custom SEO (if SEO file exists)
- [ ] Test individual blog post shows custom SEO (if SEO file exists)
- [ ] Test individual presentation shows custom SEO (if SEO file exists)
- [ ] Test fallback to frontmatter when no SEO file exists
- [ ] Test fallback to content-type defaults when no frontmatter
- [ ] Test fallback to site defaults as final fallback
- [ ] Verify social media meta tags work correctly

### 6. Documentation and Guidelines
- [ ] Document individual content SEO file naming convention
- [ ] Create guidelines for when to create individual SEO files
- [ ] Document fallback hierarchy behavior
- [ ] Update plan.md with individual content patterns

## Success Criteria
- [ ] Individual content items can have custom SEO via YAML files
- [ ] Smart fallback system works: SEO file → frontmatter → content-type → site defaults
- [ ] Content without SEO files still have proper SEO via fallbacks
- [ ] Social media images work with fallback chain
- [ ] Individual content detection works reliably
- [ ] All existing functionality remains intact

## Files to be Created/Modified
- **New files:**
  - Sample individual SEO files for key content items
  - Additional SEO files as needed for testing
- **Modified files:**
  - `/themes/icodewithai/layouts/partials/seo.html` (enhanced content detection)
  - Plan.md documentation updates

## Testing Strategy
1. **Individual Content Testing**: Test specific content items with SEO files
2. **Fallback Testing**: Test content without SEO files (frontmatter fallbacks)
3. **Content Type Testing**: Verify content-type defaults still work
4. **Inheritance Testing**: Test complex inheritance scenarios
5. **Social Media Testing**: Test image fallback chain works

## Individual Content SEO File Naming Convention
```
/data/seo/content-types/[content-type]/[content-slug].yaml

Examples:
- /data/seo/content-types/apps/my-awesome-app.yaml
- /data/seo/content-types/blog/ai-development-tips.yaml
- /data/seo/content-types/presentations/i-build-with-ai.yaml
- /data/seo/content-types/podcast/episode-1-intro-to-ai.yaml
```

## Fallback Hierarchy Logic
1. **Individual SEO File**: Custom YAML file for specific content
2. **Frontmatter**: Existing `title`, `description`, `summary` in content files
3. **Content-Type Defaults**: List page YAML for the content type
4. **Site Defaults**: Global defaults.yaml

## Social Media Image Fallback
1. **Individual Content Image**: `defaults.social_image` with custom alt text
2. **Content-Type Image**: `defaults.social_image` with content-type alt text
3. **Site Default**: `defaults.social_image` with default alt text

## Phase 5 Deliverables
- Enhanced SEO partial with individual content detection
- Smart fallback hierarchy implementation
- Sample individual content SEO files
- Comprehensive testing of fallback logic
- Documentation of individual content SEO patterns
- Working individual content SEO system