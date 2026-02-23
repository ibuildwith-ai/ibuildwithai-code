# v1.1.6 Presentations Page Task List

## Phase 1: Content Structure Setup

### Task 1.1: Create Presentations Archetype
**Responsible:** Claude  
**File:** `/archetypes/presentations.md`  
**Status:** Pending

- [ ] Create archetype file with all required frontmatter fields
- [ ] Set default values (presenters = "Marcelo Lewin", status = "upcoming")
- [ ] Include sample markdown structure for description
- [ ] Test archetype with `hugo new presentations/test.md`

### Task 1.2: Create Content Directory & Dummy Content
**Responsible:** Claude  
**Directory:** `/content/presentations/`  
**Status:** Pending

- [ ] Create presentations directory
- [ ] Create upcoming presentation example with realistic data
- [ ] Create completed presentation example with realistic data
- [ ] Use proper ISO datetime format for both examples
- [ ] Set appropriate status fields for testing

## Phase 2: Layout Templates

### Task 2.1: Create Presentations List Template
**Responsible:** Claude  
**File:** `/themes/icodewithai/layouts/presentations/list.html`  
**Status:** Pending

- [ ] Create presentations directory in layouts
- [ ] Duplicate apps list structure as baseline
- [ ] Implement "Upcoming Presentations" section (date ASC sort)
- [ ] Implement "Completed Presentations" section (date DESC sort)
- [ ] Add date/time formatting logic
- [ ] Handle empty states for both sections
- [ ] Test grouping and sorting logic

### Task 2.2: Create Presentations Single Template
**Responsible:** Claude  
**File:** `/themes/icodewithai/layouts/presentations/single.html`  
**Status:** Pending

- [ ] Duplicate apps single structure as baseline
- [ ] Display all frontmatter fields properly
- [ ] Implement date/time formatting with timezone
- [ ] Show full markdown description content
- [ ] Replace project links with single external link section
- [ ] Update back navigation to "← Back to Presentations"
- [ ] Test single page rendering

## Phase 3: Navigation Integration

### Task 3.1: Update Header Navigation
**Responsible:** Claude  
**File:** `/themes/icodewithai/layouts/partials/header.html`  
**Status:** Pending

- [ ] Read existing header.html to understand structure
- [ ] Add "Presentations" link after "Blog" in navigation
- [ ] Ensure responsive behavior matches existing items
- [ ] Test navigation functionality

### Task 3.2: Update Footer Navigation
**Responsible:** Claude  
**File:** `/themes/icodewithai/layouts/partials/footer.html`  
**Status:** Pending

- [ ] Read existing footer.html to understand structure
- [ ] Add "Presentations" link after "Blog" in footer
- [ ] Maintain consistent styling and structure
- [ ] Test footer navigation

## Phase 4: Home Page Integration

### Task 4.1: Update Home Page Template
**Responsible:** Claude  
**File:** `/themes/icodewithai/layouts/index.html`  
**Status:** Pending

- [ ] Read existing home page structure
- [ ] Add "Latest Presentations" section below "Latest Posts"
- [ ] Implement logic to show latest 2 presentations (date DESC)
- [ ] Display title, summary, formatted date, "Learn more" link
- [ ] Add "View all presentations →" link at bottom
- [ ] Match styling of existing "Latest Apps" section
- [ ] Test home page integration

## Phase 5: Testing & Validation

### Task 5.1: Content & Archetype Testing
**Responsible:** User  
**Dependencies:** Tasks 1.1, 1.2  
**Status:** Pending

- [ ] Test archetype creation with `hugo new presentations/test-presentation.md`
- [ ] Verify frontmatter fields are correctly populated
- [ ] Test markdown content rendering
- [ ] **User Action:** Review dummy content for accuracy

### Task 5.2: Page Rendering Testing
**Responsible:** User  
**Dependencies:** Tasks 2.1, 2.2  
**Status:** Pending

- [ ] **User Action:** Test presentations list page (`/presentations/`)
- [ ] **User Action:** Verify grouping (upcoming vs completed) works
- [ ] **User Action:** Check sorting (upcoming ASC, completed DESC)
- [ ] **User Action:** Test individual presentation pages
- [ ] **User Action:** Validate external link functionality if provided

### Task 5.3: Navigation Testing
**Responsible:** User  
**Dependencies:** Tasks 3.1, 3.2  
**Status:** Pending

- [ ] **User Action:** Test header "Presentations" link
- [ ] **User Action:** Test footer "Presentations" link
- [ ] **User Action:** Verify mobile responsiveness of navigation
- [ ] **User Action:** Check active state styling (if applicable)

### Task 5.4: Home Page Testing
**Responsible:** User  
**Dependencies:** Task 4.1  
**Status:** Pending

- [ ] **User Action:** Verify "Latest Presentations" section appears correctly
- [ ] **User Action:** Check that only 2 presentations are displayed
- [ ] **User Action:** Validate date sorting (most recent first)
- [ ] **User Action:** Test "View all presentations" link functionality

### Task 5.5: Responsive & Cross-Browser Testing
**Responsible:** User  
**Dependencies:** All previous tasks  
**Status:** Pending

- [ ] **User Action:** Test all pages on mobile devices
- [ ] **User Action:** Verify tablet responsiveness
- [ ] **User Action:** Check desktop layout consistency
- [ ] **User Action:** Test date/time display on various screen sizes
- [ ] **User Action:** Validate card layouts maintain proper spacing

## Phase 6: CSS & Design System Validation

### Task 6.1: CSS Consistency Check
**Responsible:** Claude & User  
**Dependencies:** Tasks 2.1, 2.2, 4.1  
**Status:** Pending

- [ ] **Claude:** Verify no new CSS classes were created
- [ ] **Claude:** Ensure proper use of existing design system classes
- [ ] **User Action:** Visual review for consistency with apps section
- [ ] **User Action:** Check hover effects and transitions
- [ ] **User Action:** Validate typography consistency

## Phase 7: Final Review & Documentation

### Task 7.1: Code Review
**Responsible:** User  
**Dependencies:** All previous tasks  
**Status:** Pending

- [ ] **User Action:** Review all template code for quality
- [ ] **User Action:** Check for any hardcoded values that should be configurable
- [ ] **User Action:** Validate Hugo template best practices
- [ ] **User Action:** Ensure proper error handling

### Task 7.2: Documentation Update
**Responsible:** Claude  
**Dependencies:** Task 7.1  
**Status:** Pending

- [ ] Review and update 3 documents in `.vibedocs/architecture/` as needed:
  - [ ] `content-strategy.md` - Add presentations content type
  - [ ] `site-architecture.md` - Update with presentations section structure
  - [ ] `css-documentation.md` - Verify no new CSS additions needed
- [ ] Update project checklist document with all completed tasks
- [ ] Document any new content creation workflows for presentations
- [ ] **User Action:** Review all documentation updates

### Task 7.3: Final Retrospective
**Responsible:** Claude  
**Dependencies:** Task 7.2 + User approval  
**Status:** Pending

- [ ] **User Action:** Final approval that "it's all good"
- [ ] Create `retrospective.md` in release folder with:
  - [ ] Project summary and accomplishments
  - [ ] Technical lessons learned
  - [ ] Process improvements identified
  - [ ] Challenges encountered and solutions
  - [ ] Recommendations for future similar projects

### Task 7.4: Field Updates and Additional Content
**Responsible:** Claude  
**Dependencies:** All previous tasks  
**Status:** Pending

- [ ] Update presentations archetype: rename external_url to learn_more_url
- [ ] Add new fields: on_demand_url and register_url to archetype
- [ ] Update presentations single template with new link buttons
- [ ] Update Learn More button emoji to information emoji (ℹ️)
- [ ] Add On-Demand button with video emoji (📹)
- [ ] Add Register to Attend button with appropriate emoji (🎫)
- [ ] Ensure all link buttons only show when URLs are provided
- [ ] Create 2 additional dummy presentations for testing
- [ ] Update existing dummy presentations with new field structure

### Task 7.5: Home Page Layout Simplification
**Responsible:** Claude  
**Dependencies:** Task 7.4  
**Status:** Pending

- [ ] Remove entire Bio Section from home page (lines 12-39)
- [ ] Move "Learn more →" and "Get in touch →" links to Hero Section
- [ ] Place navigation links below tagline "I build digital products with AI"
- [ ] Maintain existing styling and CSS classes for the moved links
- [ ] **Revert command:** "Revert the hero section bio links change"

### Task 7.6: Production Readiness
**Responsible:** User  
**Dependencies:** All previous tasks  
**Status:** Pending

- [ ] **User Action:** Final testing on development environment
- [ ] **User Action:** Performance check (page load times)
- [ ] **User Action:** SEO validation (meta tags, structured data)
- [ ] **User Action:** Accessibility check
- [ ] **User Action:** Ready for production deployment

## Task Dependencies Summary

```
Phase 1 (Content) → Phase 2 (Templates) → Phase 3 (Navigation) 
                                       ↘
Phase 4 (Home Page) → Phase 5 (Testing) → Phase 6 (Validation) → Phase 7 (Final)
```

## Responsibility Summary

**Claude Responsibilities:**
- All file creation and code implementation
- Template logic and Hugo functionality
- Following existing CSS design system
- Creating dummy content for testing

**User Responsibilities:**
- All testing and validation
- Visual design review
- Content accuracy review
- Production deployment decisions
- Performance and accessibility validation

## Communication Checkpoints

1. **After Phase 2:** Claude completes templates → User reviews template structure
2. **After Phase 4:** Claude completes home page → User tests basic functionality  
3. **After Phase 5:** User completes testing → Feedback session for any issues
4. **After Phase 6:** Final validation → Decision to proceed to production