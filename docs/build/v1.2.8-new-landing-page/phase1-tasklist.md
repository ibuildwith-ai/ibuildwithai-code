# Phase 1 Task List - v1.2.8 New Landing Page

## Phase 1: Create Latest Content Page & Update Navigation

### Task 1: Add Hugo Parameter for Latest Content URL
- [ ] Find the correct config file in `/config/_default/` 
- [ ] Add `latest_content = "/latest-content/"` parameter to maintain consistency with other URLs

### Task 2: Create Latest Content Page Layout
- [ ] Duplicate `/themes/icodewithai/layouts/index.html` to `/themes/icodewithai/layouts/latest-content.html`
- [ ] Remove the hero section from the new file (keep all other content sections)

### Task 3: Create SEO Configuration for Latest Content Page
- [ ] Duplicate `/data/seo/single-pages/homepage.yaml` to `/data/seo/single-pages/latest-content.yaml`

### Task 4: Update Header Navigation (Desktop)
- [ ] Add "Latest Content" link before Apps in desktop navigation in `/themes/icodewithai/layouts/partials/header.html`
- [ ] Use existing navigation styling (no new CSS needed)

### Task 5: Update Header Navigation (Mobile)
- [ ] Add "Latest Content" link before Apps in mobile navigation in `/themes/icodewithai/layouts/partials/header.html`
- [ ] Use existing mobile navigation styling

### Task 6: Update Footer Navigation (Desktop)
- [ ] Add "Latest Content" as first item in Learn section in `/themes/icodewithai/layouts/partials/footer.html`
- [ ] Use existing footer link styling

### Task 7: Update Footer Navigation (Mobile)
- [ ] Add "Latest Content" as first item in Learn section (mobile version) in `/themes/icodewithai/layouts/partials/footer.html`
- [ ] Use existing mobile footer styling

### Task 8: Test Phase 1 Implementation
- [ ] Run local Hugo server to test all changes
- [ ] Verify navigation links work correctly
- [ ] Confirm latest-content page displays properly
- [ ] Test responsive behavior on mobile and desktop

## CSS/Styling Notes
- All existing CSS classes will be used
- No new CSS classes needed for Phase 1
- Following existing navigation patterns and footer patterns