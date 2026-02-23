# Implementation Plan for v1.2.8 New Landing Page

## Phase 1: Create Latest Content Page & Update Navigation

### 1. Add Hugo Parameter for Latest Content URL
- **File**: `/config/_default/config.toml` (or appropriate config file)
- **Action**: Add `latest_content = "/latest-content/"` parameter to maintain consistency with other URLs

### 2. Create Latest Content Page Layout
- **File**: `/themes/icodewithai/layouts/latest-content.html`
- **Action**: Duplicate `/themes/icodewithai/layouts/index.html` and remove the hero section (lines 4-10)
- **Result**: Page will contain all latest content sections without the hero

### 3. Create SEO Configuration for Latest Content Page
- **File**: `/data/seo/single-pages/latest-content.yaml`
- **Action**: Duplicate `/data/seo/single-pages/homepage.yaml` and rename
- **Note**: Content will be updated by user later

### 4. Update Header Navigation (Desktop)
- **File**: `/themes/icodewithai/layouts/partials/header.html`
- **Action**: Add "Latest Content" link before Apps in desktop navigation (around line 23)
- **Code**: `<a href="{{ .Site.Params.latest_content }}">Latest Content</a>`

### 5. Update Header Navigation (Mobile)
- **File**: `/themes/icodewithai/layouts/partials/header.html`
- **Action**: Add "Latest Content" link before Apps in mobile navigation (around line 72)
- **Code**: Same as desktop navigation

### 6. Update Footer Navigation (Desktop)
- **File**: `/themes/icodewithai/layouts/partials/footer.html`
- **Action**: Add "Latest Content" as first item in Learn section (around line 33)
- **Code**: `<li><a href="{{ .Site.Params.latest_content }}">Latest Content</a></li>`

### 7. Update Footer Navigation (Mobile)
- **File**: `/themes/icodewithai/layouts/partials/footer.html`
- **Action**: Add "Latest Content" as first item in Learn section (around line 73)
- **Code**: Same as desktop footer

## Phase 2: Transform Homepage into Landing Page

### 8. Update Homepage Layout
- **File**: `/themes/icodewithai/layouts/index.html`
- **Action**: Remove all content sections, keep only hero section (lines 1-10)

### 9. Add "Start Learning" Button to Homepage
- **File**: `/themes/icodewithai/layouts/index.html`
- **Action**: Add centered primary button below hero section
- **Code**: 
  ```html
  <section class="section">
      <div class="container">
          <div class="text-center">
              <a href="{{ .Site.Params.latest_content }}" class="primary-button">Start Learning</a>
          </div>
      </div>
  </section>
  ```

### 10. Add Placeholder Cards Section
- **File**: `/themes/icodewithai/layouts/index.html`
- **Action**: Add 2-card row below button using about-marcelo card style
- **Code**: Use `facts-certificates-grid` style with placeholder content
- **Content**: Fake headings as specified by user

## Technical Implementation Details

### Hugo Routing
- The `latest-content.html` layout will be automatically accessible at `/latest-content/` due to Hugo's layout naming convention
- No additional routing configuration needed

### CSS Dependencies
- Will use existing CSS classes: `primary-button`, `facts-certificates-grid`, `facts-card`
- No new CSS needed for Phase 1 and 2

### Testing Approach
- Use `hugo server` for local development testing
- Verify navigation links work correctly
- Confirm SEO tags are properly generated
- Test responsive behavior on mobile and desktop

## File Changes Summary

**New Files:**
- `/themes/icodewithai/layouts/latest-content.html`
- `/data/seo/single-pages/latest-content.yaml`

**Modified Files:**
- `/config/_default/config.toml` (add parameter)
- `/themes/icodewithai/layouts/partials/header.html` (navigation updates)
- `/themes/icodewithai/layouts/partials/footer.html` (navigation updates)
- `/themes/icodewithai/layouts/index.html` (homepage transformation)

## Implementation Order
1. Add Hugo parameter first
2. Create latest-content page and SEO file
3. Update navigation (header and footer)
4. Transform homepage
5. Test all changes together

This plan maintains consistency with existing code patterns and follows Hugo best practices while implementing exactly what was requested for both phases.