# Phase 3: Static Pages SEO - Task List

## Overview
Centralize SEO for non-content pages (homepage, about-marcelo) with custom titles, descriptions, and social images.

## Tasks

### 1. Create SEO Files for Static Pages
- [ ] Create `/data/seo/single-pages/homepage.yaml` with proper homepage SEO
  - [ ] Custom title optimized for homepage
  - [ ] Compelling description for homepage
  - [ ] Homepage-specific social image reference
  - [ ] Custom social image alt text
- [ ] Create `/data/seo/single-pages/aboutmarcelo.yaml` with about page SEO
  - [ ] Personal/professional title for about page
  - [ ] About page description highlighting expertise
  - [ ] About page social image reference
  - [ ] Custom social image alt text

### 2. Verify Page Detection Logic
- [ ] Test homepage detection (`.IsHome`)
- [ ] Test about-marcelo page detection (`/about-marcelo/` path)
- [ ] Verify SEO partial correctly maps pages to YAML files
- [ ] Test inheritance still works for unspecified fields
- [ ] Handle edge cases (404, search pages, etc.)

### 3. Create Social Images for Static Pages
- [ ] Design homepage social image (1200x630 pixels)
  - [ ] Save as `/static/images/seo/single-pages/homepage-social.png`
  - [ ] Include site branding and main value proposition
- [ ] Design about-marcelo social image (1200x630 pixels)
  - [ ] Save as `/static/images/seo/single-pages/aboutmarcelo-social.png`
  - [ ] Include personal branding and expertise highlights
- [ ] Update respective YAML files with new image paths

### 4. Test Static Page SEO Implementation
- [ ] Test homepage SEO with custom values
- [ ] Test about-marcelo page SEO with custom values
- [ ] Verify social media image fallback works if images missing
- [ ] Test inheritance for fields not specified in page YAML
- [ ] Validate all meta tags generate correctly
- [ ] Test JSON-LD structured data for both pages

### 5. SEO Content Optimization
- [ ] Optimize homepage title for search engines and social sharing
- [ ] Optimize homepage description for click-through rates
- [ ] Optimize about-marcelo title for personal branding
- [ ] Optimize about-marcelo description for professional positioning
- [ ] Ensure alt text describes images accurately for accessibility

### 6. Additional Static Pages (if needed)
- [ ] Identify other static pages that need custom SEO
- [ ] Create YAML files for additional static pages
- [ ] Update SEO partial to handle additional page types
- [ ] Create social images for additional pages

## Success Criteria
- [ ] Homepage has custom, optimized SEO content
- [ ] About-marcelo page has custom, optimized SEO content
- [ ] Custom social images display correctly
- [ ] Page detection logic works reliably
- [ ] All static pages fall back gracefully to defaults when needed
- [ ] Social media sharing shows proper custom content

## Files to be Created/Modified
- **New files:**
  - `/data/seo/single-pages/homepage.yaml` (custom homepage SEO)
  - `/data/seo/single-pages/aboutmarcelo.yaml` (custom about page SEO)
  - `/static/images/seo/single-pages/homepage-social.png` (homepage social image)
  - `/static/images/seo/single-pages/aboutmarcelo-social.png` (about page social image)
- **Modified files:**
  - SEO partial may need updates if additional page types discovered

## Testing Strategy
1. **Local Testing**: Verify custom SEO appears in page source
2. **Page Type Testing**: Test different page types show appropriate SEO
3. **Inheritance Testing**: Verify fields not specified inherit from defaults
4. **Image Testing**: Test social images display correctly
5. **Fallback Testing**: Test behavior when images are missing

## Content Guidelines
### Homepage SEO
- **Title**: Focus on main value proposition and brand
- **Description**: Highlight key benefits and call-to-action
- **Social Image**: Brand-focused with main messaging

### About-Marcelo SEO
- **Title**: Personal/professional branding focus
- **Description**: Highlight expertise, experience, and personality
- **Social Image**: Professional photo with expertise highlights

## Phase 3 Deliverables
- Custom SEO for homepage with optimized content
- Custom SEO for about-marcelo page with personal branding
- Custom social images for both static pages
- Verified page detection and inheritance system
- Tested static page SEO implementation