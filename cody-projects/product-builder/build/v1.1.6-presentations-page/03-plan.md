# v1.1.6 Presentations Page Implementation Plan

## Overview
Create a complete presentations section that mirrors the apps section structure, including list/single pages, navigation integration, and home page section.

## Phase 1: Content Structure Setup

### 1.1 Create Presentations Archetype
**File:** `/archetypes/presentations.md`
- Create archetype with all required frontmatter fields
- Set defaults: presenters = "Marcelo Lewin", status = "upcoming", draft = true
- Include sample markdown structure

**Fields to include:**
```toml
title = "{{ replace .Name "-" " " | title }}"
summary = ""
date_time = "{{ .Date }}"
timezone = "PST"
presenters = "Marcelo Lewin"
status = "upcoming"
external_url = ""
draft = true
```

### 1.2 Create Content Directory
**Directory:** `/content/presentations/`
- Create directory structure
- Create 2 dummy presentations for testing:
  - One upcoming presentation
  - One completed presentation
- Use realistic data with proper ISO datetime format

## Phase 2: Layout Templates

### 2.1 Create Presentations List Template
**File:** `/themes/icodewithai/layouts/presentations/list.html`
- Duplicate apps list structure as baseline
- Implement grouped sections:
  - "Upcoming Presentations" section (sorted by date ASC)
  - "Completed Presentations" section (sorted by date DESC)
- Display: title, summary, formatted date/time, "Learn more →" link
- Use existing CSS classes (app-card, etc.) for consistency
- Handle empty state for each section

### 2.2 Create Presentations Single Template
**File:** `/themes/icodewithai/layouts/presentations/single.html`
- Duplicate apps single structure as baseline
- Display all fields: title, date/time with timezone, presenters, status
- Show full markdown description content
- Replace project links section with single external link (if provided)
- Update back navigation to "← Back to Presentations"

## Phase 3: Navigation Integration

### 3.1 Update Header Navigation
**File:** `/themes/icodewithai/layouts/partials/header.html`
- Add "Presentations" link after "Blog" in main navigation
- Ensure responsive behavior matches existing nav items

### 3.2 Update Footer Navigation
**File:** `/themes/icodewithai/layouts/partials/footer.html`
- Add "Presentations" link after "Blog" in footer navigation
- Maintain consistent styling and structure

## Phase 4: Home Page Integration

### 4.1 Update Home Page Template
**File:** `/themes/icodewithai/layouts/index.html`
- Add "Latest Presentations" section below "Latest Posts"
- Display latest 2 presentations sorted by date DESC (ignore status)
- Use same card styling as "Latest Apps" section
- Show: title, summary, formatted date, "Learn more →" link
- Include "View all presentations →" link at bottom

## Phase 5: Template Logic Implementation

### 5.1 Date/Time Formatting
- Implement Hugo template logic to parse ISO datetime format
- Display as "June 15, 2024 at 2:00 PM PST" format
- Handle timezone display properly

### 5.2 Status-Based Grouping
- Create logic to separate presentations by status field
- Sort upcoming presentations by date ASC
- Sort completed presentations by date DESC
- Handle edge cases (no presentations in either group)

### 5.3 Conditional Link Display
- Show external_url link only if provided
- Use "Learn More" as link text
- Style consistently with existing project links

## Phase 6: Testing & Validation

### 6.1 Content Testing
- Test archetype creation: `hugo new presentations/test-presentation.md`
- Verify all frontmatter fields are properly set
- Test markdown content rendering

### 6.2 Page Rendering Testing
- Test presentations list page functionality
- Verify grouping and sorting work correctly
- Test single page display of all fields
- Validate external link functionality

### 6.3 Navigation Testing
- Verify header navigation link works
- Test footer navigation link
- Ensure mobile responsiveness

### 6.4 Home Page Testing
- Verify "Latest Presentations" section displays correctly
- Test limiting to 2 presentations
- Validate date sorting (DESC)
- Test "View all presentations" link

### 6.5 Responsive Testing
- Test all pages on mobile devices
- Verify card layouts maintain consistency
- Check date/time display on small screens

## Phase 7: CSS Validation

### 7.1 Existing CSS Usage
- Verify no new CSS classes are needed
- Ensure proper use of existing design system:
  - `.app-card` for presentation cards
  - `.blog-list` structure for list page
  - `.blog-single` structure for single page
  - Existing navigation styles

### 7.2 Visual Consistency Check
- Compare with apps section styling
- Ensure consistent spacing and typography
- Verify hover effects and transitions work

## File Structure Summary

**New files to create:**
```
/archetypes/presentations.md
/content/presentations/
  ├── upcoming-ai-ethics-workshop.md
  └── completed-contentful-masterclass.md
/themes/icodewithai/layouts/presentations/
  ├── list.html
  └── single.html
```

**Existing files to modify:**
```
/themes/icodewithai/layouts/partials/header.html
/themes/icodewithai/layouts/partials/footer.html
/themes/icodewithai/layouts/index.html
```

## Success Criteria

1. ✅ Presentations archetype creates proper frontmatter structure
2. ✅ List page displays grouped presentations (upcoming/completed) with correct sorting
3. ✅ Single page shows all presentation details including formatted date/time
4. ✅ Navigation includes "Presentations" in header and footer
5. ✅ Home page shows "Latest Presentations" section with 2 most recent
6. ✅ All pages are responsive and follow existing CSS design system
7. ✅ External links work properly when provided
8. ✅ Date/time displays in requested format with timezone
9. ✅ No new CSS needed - uses existing design system
10. ✅ Dummy content created for testing purposes

## Risk Mitigation

- **Risk:** Date/time parsing issues
  - **Mitigation:** Use Hugo's built-in date functions with ISO format
- **Risk:** CSS inconsistencies
  - **Mitigation:** Reuse existing CSS classes and structure
- **Risk:** Navigation breaking
  - **Mitigation:** Follow existing navigation patterns exactly
- **Risk:** Home page layout issues
  - **Mitigation:** Duplicate existing "Latest Apps" section structure