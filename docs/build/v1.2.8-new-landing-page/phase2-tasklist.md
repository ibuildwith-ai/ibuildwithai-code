# Phase 2 Task List - v1.2.8 New Landing Page

## Phase 2: Transform Homepage into Landing Page

### Task 1: Implement Dynamic SEO System
- [ ] Update `/themes/icodewithai/layouts/partials/seo.html` to use dynamic page detection
- [ ] Remove hardcoded conditions for aboutmarcelo and latest-content
- [ ] Test that existing pages still work with new dynamic system

### Task 2: Transform Homepage Layout
- [ ] Update `/themes/icodewithai/layouts/index.html` to remove all latest content sections
- [ ] Keep only the hero section from the current homepage

### Task 3: Add "Start Learning" Button to Homepage
- [ ] Add centered primary button below hero section linking to latest-content page
- [ ] Use existing button styling (check SCSS files for proper class names)
- [ ] Ensure button is properly responsive

### Task 4: Add Placeholder Cards Section
- [ ] Add 2-card row below button using about-marcelo card style (`facts-certificates-grid`)
- [ ] Create placeholder content with fake headings as requested
- [ ] Use existing CSS classes from about-marcelo page styling

### Task 5: Test Phase 2 Implementation
- [ ] Run Hugo server to test homepage transformation
- [ ] Verify Start Learning button links correctly to /latest-content/
- [ ] Test responsive behavior on mobile and desktop
- [ ] Confirm SEO system works dynamically for all pages

## Styling Notes
- Use existing `primary-button` class for Start Learning button
- Use existing `facts-certificates-grid` and `facts-card` classes for placeholder cards
- Check `/assets/scss/` files to understand existing button and card styling
- No new CSS needed - follow existing patterns