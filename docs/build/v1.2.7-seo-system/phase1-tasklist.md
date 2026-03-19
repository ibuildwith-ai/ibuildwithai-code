# Phase 1: Foundation & Core SEO Partial - Task List

## Overview
Create the basic SEO infrastructure and partial template for centralized SEO management.

## Tasks

### 1. Create SEO Folder Structure
- [x] Create `/data/seo/` directory
- [x] Create `/data/seo/images/` directory for social media images
- [x] Create subdirectories for content types:
  - [x] `/data/seo/apps/`
  - [x] `/data/seo/blog/`
  - [x] `/data/seo/podcast/`
  - [x] `/data/seo/presentations/`

### 2. Create defaults.yaml
- [x] Create `/data/seo/defaults.yaml` with site-wide SEO defaults
- [x] Include all required fields:
  - Basic SEO (title, site_name, description, author)
  - Social Media (social_image, twitter_card_type)
  - Technical SEO (robots, canonical_base_url)
  - Language/Locale (language, locale)
- [x] Document inheritance syntax in comments

### 3. Create Core SEO Partial
- [x] Create `/themes/icodewithai/layouts/partials/seo.html`
- [x] Implement YAML file reading logic
- [x] Implement inheritance logic (defaults.fieldname)
- [x] Generate basic meta tags:
  - [x] Title tag
  - [x] Description meta tag
  - [x] Author meta tag
  - [x] Basic Open Graph tags
  - [x] Twitter Card tags

### 4. Update baseof.html
- [x] Replace existing SEO code (lines 7-27) with `{{ partial "seo.html" . }}`
- [x] Keep staging noindex logic (integrated into SEO partial)
- [x] Preserve favicon links (lines 29-37)

### 5. Test with Homepage
- [x] Create `/data/seo/homepage.yaml` with homepage-specific SEO
- [x] Test inheritance works correctly
- [x] Verify fallback logic functions properly
- [x] Check all meta tags are generated correctly

### 6. Validation & Testing (Developer)
- [x] Test homepage loads without errors
- [x] Verify meta tags appear in page source
- [x] Test inheritance (defaults.fieldname) works
- [x] Confirm staging noindex logic still works
- [x] Check favicon links still work

### 7. User Testing Required
- [ ] **User should test homepage locally**
- [ ] **User should verify SEO meta tags in browser dev tools**
- [ ] **User should confirm site builds and runs properly**
- [ ] **User should validate inheritance system works as expected**

## Success Criteria
- [ ] Basic SEO partial working
- [ ] Homepage SEO centralized
- [ ] Inheritance system functional
- [ ] No existing functionality broken

## Files to be Created/Modified
- **New files:**
  - `/data/seo/defaults.yaml`
  - `/data/seo/homepage.yaml`
  - `/themes/icodewithai/layouts/partials/seo.html`
- **Modified files:**
  - `/themes/icodewithai/layouts/_default/baseof.html`

## Testing Strategy
1. Build site locally and check for errors
2. Inspect homepage source for correct meta tags
3. Test staging environment noindex functionality
4. Verify inheritance works by checking homepage.yaml references to defaults