# Phase 2: Social Media & Open Graph - Task List

## Overview
Add comprehensive social media meta tags and enhanced image support to the existing SEO system.

## Tasks

### 1. Extend SEO Partial for Enhanced Social Media
- [ ] Add missing Open Graph meta tags:
  - [ ] `og:image:width` and `og:image:height` (1200x630)
  - [ ] `og:image:type` (image/png or image/jpeg)
  - [ ] `og:image:alt` (alt text for social images)
- [ ] Add enhanced Twitter Card meta tags:
  - [ ] `twitter:image:alt` (alt text for Twitter images)
  - [ ] `twitter:site` (Twitter handle if available)
  - [ ] `twitter:creator` (Twitter handle if available)
- [ ] Add conditional logic for `summary_large_image` vs `summary` based on image presence
- [ ] Add structured data support (JSON-LD) for website/organization

### 2. Social Media Image Logic Enhancement
- [ ] Implement robust image path resolution with multiple fallback levels:
  - [ ] Page-specific image (e.g., `/static/images/seo/single-pages/homepage-social.png`)
  - [ ] Content-type default (e.g., `/static/images/seo/content-types/apps/listpage-social.png`)
  - [ ] Site default (`/static/images/seo/default-social.png`)
- [ ] Add image validation (check if file exists)
- [ ] Support for different image formats (PNG, JPG, WEBP)
- [ ] Add image alt text configuration in YAML files

### 3. Extend YAML Configuration
- [ ] Add new fields to defaults.yaml:
  - [ ] `social_image_alt` - Alt text for social images
  - [ ] `twitter_site` - Site Twitter handle
  - [ ] `twitter_creator` - Creator Twitter handle
  - [ ] `og_image_width` and `og_image_height` - Image dimensions
- [ ] Update existing YAML files to demonstrate new fields
- [ ] Add validation for required vs optional fields

### 4. Social Media Testing & Validation
- [ ] Test Facebook sharing with Facebook Sharing Debugger
- [ ] Test Twitter card display with Twitter Card Validator
- [ ] Test LinkedIn sharing preview
- [ ] Validate Open Graph tags with online validators
- [ ] Test image fallback logic works correctly
- [ ] Test different Twitter card types (summary vs summary_large_image)

### 5. Documentation Updates
- [ ] Update plan.md with new social media fields
- [ ] Document new YAML configuration options
- [ ] Add social media testing workflow
- [ ] Update image specifications with alt text requirements

## Success Criteria
- [ ] All major social media platforms display proper previews
- [ ] Image fallback system works seamlessly
- [ ] Alt text appears correctly for accessibility
- [ ] Twitter cards display as `summary_large_image` when images exist
- [ ] Social media debugging tools show no errors
- [ ] All new fields inherit properly from defaults

## Files to be Created/Modified
- **Modified files:**
  - `/themes/icodewithai/layouts/partials/seo.html` (enhanced social media tags)
  - `/data/seo/defaults.yaml` (new social media fields)
  - `/data/seo/single-pages/homepage.yaml` (demonstrate new fields)
  - `/.vibedocs/releases/v1.2.7-seo-system/plan.md` (documentation)

## Testing Strategy
1. **Local Testing**: Verify meta tags appear in page source
2. **Social Media Validators**: Test with platform-specific tools
3. **Real Sharing**: Test actual sharing on Facebook, Twitter, LinkedIn
4. **Fallback Testing**: Test with missing images to verify fallbacks
5. **Accessibility**: Verify alt text appears correctly

## Social Media Debugging Tools
- **Facebook**: [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- **Twitter**: [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- **LinkedIn**: Built-in preview when sharing
- **Open Graph**: [OpenGraph.xyz](https://www.opengraph.xyz/)
- **General**: [Social Media Preview](https://socialsharepreview.com/)

## Phase 2 Deliverables
- Enhanced social media meta tags implementation
- Robust image fallback system
- Comprehensive social media testing
- Updated documentation with new features
- Validated social media sharing across platforms