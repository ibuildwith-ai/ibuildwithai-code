# SEO System Implementation Plan

## Overview
Implement a centralized SEO system for the Hugo site with YAML configuration files, inheritance from defaults, and comprehensive meta tag generation.

## Phase 1: Foundation & Core SEO Partial
**Goal:** Create the basic SEO infrastructure and partial template

### Tasks:
1. **Create SEO folder structure**
   - Create `/data/seo/` directory
   - Create `/data/seo/content-types/` with subdirectories (apps, blog, podcast, presentations)
   - Create `/data/seo/single-pages/` directory
   - Create `/static/images/seo/` directory for social media images
   - Create `/static/images/seo/content-types/` with subdirectories (apps, blog, podcast, presentations)
   - Create `/static/images/seo/single-pages/` directory

2. **Create defaults.yaml**
   - Define site-wide SEO defaults with these fields:
     ```yaml
     # Basic SEO
     title: "iCodeWith.ai | Using AI to code and build apps faster than ever before"
     site_name: "iCodeWith.ai"
     description: "With AI, we can now code and build apps faster than ever before. The barrier to entry is gone. Anything is possible. Let's build something great together."
     author: "Marcelo Lewin"
     
     # Social Media
     social_image: "images/seo/default-social.png"
     twitter_card_type: "summary_large_image"
     
     # Technical SEO
     robots: "index, follow"
     canonical_base_url: "https://icodewith.ai"
     
     # Language/Locale
     language: "en-US"
     locale: "en_US"
     ```
   - Document inheritance syntax (defaults.fieldname)
   - Note: Additional fields can be added later and accessed via dot notation

3. **Create core SEO partial**
   - Create `/themes/icodewithai/layouts/partials/seo.html`
   - Implement YAML file reading logic
   - Implement inheritance logic (defaults.fieldname)
   - Generate basic meta tags (title, description, author)

4. **Update baseof.html**
   - Replace existing SEO code with single `{{ partial "seo.html" . }}`
   - Keep staging noindex logic

5. **Test with homepage**
   - Create `/data/seo/single-pages/homepage.yaml`
   - Test inheritance and fallbacks work correctly

**Deliverables:**
- Basic SEO partial working
- Homepage SEO centralized
- Inheritance system functional

## Social Media Image Specifications

### Recommended Dimensions
- **Size**: 1200x630 pixels (optimal for all platforms)
- **Format**: PNG or JPG (PNG preferred for graphics with text)
- **File Size**: Keep under 1MB for faster loading
- **Aspect Ratio**: 1.91:1 (works for Facebook, LinkedIn, Twitter)
- **Text Safety**: Keep important text within center 80% of image

### Image Path Structure in YAML Files
Images are stored in `/static/images/seo/` and referenced in YAML files as:

**Default image:**
```yaml
social_image: "images/seo/default-social.png"
```

**Single pages:**
```yaml
# For homepage, aboutmarcelo, etc.
social_image: "images/seo/single-pages/homepage-social.png"
social_image: "images/seo/single-pages/aboutmarcelo-social.png"
```

**Content types:**
```yaml
# For apps, blog, presentations, podcast
social_image: "images/seo/content-types/apps/listpage-social.png"
social_image: "images/seo/content-types/apps/app1-social.png"
social_image: "images/seo/content-types/blog/post1-social.png"
```

### File System Locations
- **Default**: `/static/images/seo/default-social.png`
- **Single Pages**: `/static/images/seo/single-pages/[page]-social.png`
- **Content Types**: `/static/images/seo/content-types/[type]/[item]-social.png`

**Note**: Hugo serves `/static/` content at site root, so `/static/images/seo/` becomes `/images/seo/` in browser URLs.

---

## Phase 2: Social Media & Open Graph
**Goal:** Add comprehensive social media meta tags and image support

### Tasks:
1. **Extend SEO partial for social media**
   - Add Open Graph meta tags (og:title, og:description, og:image, og:url, og:type)
   - Add Twitter Card meta tags
   - Support for `summary_large_image` when social images exist

2. **Social media image logic**
   - Implement image path resolution
   - Support for per-page social images
   - Fallback to default social image
   - Handle both `/data/seo/images/` and `/content/` image paths

3. **Create default social media images**
   - Create `/data/seo/images/default-social.png`
   - Create homepage social image
   - Update defaults.yaml with social image paths

4. **Test social media integration**
   - Test Facebook/LinkedIn sharing
   - Test Twitter card display
   - Validate with social media debugging tools

**Deliverables:**
- Complete social media meta tags
- Social image system working
- Default social images created

---

## Phase 3: Static Pages SEO
**Goal:** Centralize SEO for non-content pages (homepage, about-marcelo)

### Tasks:
1. **Create SEO files for static pages**
   - `/data/seo/homepage.yaml`
   - `/data/seo/aboutmarcelo.yaml`
   - Define page-specific titles, descriptions, social images

2. **Implement page detection logic**
   - Update SEO partial to identify current page type
   - Map page types to appropriate SEO files
   - Handle special cases (homepage, 404, etc.)

3. **Create social images for static pages**
   - Create homepage social image
   - Create about-marcelo social image
   - Update respective YAML files

4. **Test static page SEO**
   - Verify each static page has correct SEO
   - Test social media sharing
   - Validate meta tags

**Deliverables:**
- All static pages have centralized SEO
- Custom social images for key pages
- Page detection logic working

---

## Phase 4: Content Type List Pages
**Goal:** Centralize SEO for content type listing pages (apps, blog, podcast, presentations)

### Tasks:
1. **Create list page SEO files**
   - `/data/seo/apps/listpage.yaml`
   - `/data/seo/blog/listpage.yaml`
   - `/data/seo/podcast/listpage.yaml`
   - `/data/seo/presentations/listpage.yaml`

2. **Define content-type-specific SEO**
   - Create compelling descriptions for each content type
   - Design content-type-specific social images
   - Set appropriate titles with branding

3. **Update SEO partial for list pages**
   - Add logic to detect content type list pages
   - Map to appropriate SEO files
   - Handle section-specific overrides

4. **Test all list pages**
   - Verify each list page has proper SEO
   - Test social media sharing
   - Check search engine appearance

**Deliverables:**
- All content type list pages have centralized SEO
- Content-type-specific social images
- List page detection working

---

## Phase 5: Individual Content Items
**Goal:** Implement SEO for individual content items with smart fallbacks

### Tasks:
1. **Enhance SEO partial for content items**
   - Add logic to detect individual content pages
   - Implement fallback hierarchy: SEO file → frontmatter → content-type defaults
   - Handle description fallbacks (description → summary → auto-generated)
   - Support both folder-based content (index.md) and file-based content

2. **Create sample SEO files for existing content**
   - Create SEO files for key apps, blog posts, presentations
   - Demonstrate inheritance and custom overrides
   - Use defaults.social_image pattern with custom alt text

3. **Individual Content File Naming**
   - Support folder-based content: `/apps/galactic-invaders/index.md` → `galactic-invaders.yaml`
   - Support file-based content: `/blog/post-name.md` → `post-name.yaml`
   - Automatic slug detection from file structure

4. **Test content item SEO**
   - Test individual content with custom SEO files
   - Verify content without SEO files falls back to frontmatter
   - Test social media sharing with custom content

**Deliverables:**
- Individual content SEO system working
- Smart fallback hierarchy implemented
- Sample SEO files created for key content
- Documentation of individual content patterns

---

## Phase 6: Advanced Features & Validation
**Goal:** Add advanced SEO features and validation

### Tasks:
1. **Add advanced meta tags**
   - Canonical URLs for all pages
   - Robots meta tag support (with exceptions only)
   - Schema.org structured data for content types

2. **Implement SEO validation**
   - Add warnings for missing required fields
   - Validate image paths exist
   - Check for duplicate titles/descriptions

3. **Add robots.txt enhancements**
   - Ensure proper robots.txt configuration
   - Handle staging vs production differences

4. **Performance optimization**
   - Optimize SEO partial for build speed
   - Minimize redundant file reads
   - Cache frequently accessed data

**Deliverables:**
- Advanced SEO features implemented
- Validation system working
- Optimized performance

---

## Phase 7: Migration & Cleanup
**Goal:** Clean up old SEO code and ensure everything is centralized

### Tasks:
1. **Audit existing SEO implementations**
   - Review all templates for hardcoded SEO
   - Identify any remaining scattered SEO code
   - Document what can be safely removed

2. **Remove old SEO code**
   - Clean up baseof.html (already done in Phase 1)
   - Remove SEO-related frontmatter that's now centralized
   - Update any remaining templates

3. **Handle URL slugs decision**
   - **Decision needed:** Keep slugs in individual markup files OR migrate to individual SEO files
   - **Keep in markup files:** Slugs are content-related, not SEO-specific
   - **Migrate to SEO files:** Centralize all page metadata in one place
   - **Recommendation:** Keep slugs in markup files since they're part of content structure

4. **Migration documentation**
   - Document how to add new pages to SEO system
   - Create examples for each content type
   - Document inheritance patterns
   - Document slug handling decision

5. **Final testing**
   - Test entire site for SEO completeness
   - Validate all pages have proper meta tags
   - Check social media sharing across all page types

**Deliverables:**
- All old SEO code removed
- Slug handling decision implemented
- Complete migration documentation
- Site-wide SEO validation complete

---

## Success Criteria
- All pages have centralized SEO management
- Social media sharing works perfectly across all page types
- Easy to add new pages/content to SEO system
- Inheritance system allows for DRY configuration
- Site performance is not negatively impacted
- SEO best practices are followed throughout

## Testing Strategy
Each phase will be tested with:
- Manual verification of meta tags
- Social media sharing tests (Facebook, Twitter, LinkedIn)
- SEO validation tools
- Performance impact assessment
- Cross-browser compatibility check