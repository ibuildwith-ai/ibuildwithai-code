# Tasklist: v1.3.7-blog-author Implementation

## Overview
Implementation of author functionality for blog posts, matching the exact design and structure of the host section in podcast single pages.

## Implementation Tasks

### Phase 1: Foundation Setup

#### Task 1.1: Update Blog Archetype
**File**: `/Volumes/NCC1701/Development/github/i-code-with-ai/archetypes/blog.md`
**Action**: Add author field to frontmatter
**Details**: 
- Add `author = ""` field to the frontmatter section
- Position it logically with other metadata fields
- Ensure proper TOML syntax

**Validation**: 
- Verify new blog posts created with `hugo new blog/test-post.md` include the author field
- Remove test post after validation

---

### Phase 2: Content Updates

#### Task 2.1: Update Blog Post - Business Overview RAG
**File**: `/Volumes/NCC1701/Development/github/i-code-with-ai/content/blog/a-business-overview-of-retrieval-augmented-generation.md`
**Action**: Add `author = ""` field to frontmatter
**Details**: 
- Insert field in the frontmatter section
- Leave value empty initially for content team to populate
- Maintain existing frontmatter structure and formatting

#### Task 2.2: Update Blog Post - AI Bias Types
**File**: `/Volumes/NCC1701/Development/github/i-code-with-ai/content/blog/an-overview-of-ai-bias-types.md`
**Action**: Add `author = ""` field to frontmatter
**Details**: 
- Insert field in the frontmatter section
- Leave value empty initially for content team to populate
- Maintain existing frontmatter structure and formatting

#### Task 2.3: Update Blog Post - AI Guardrails
**File**: `/Volumes/NCC1701/Development/github/i-code-with-ai/content/blog/an-overview-of-ai-guardrails.md`
**Action**: Add `author = ""` field to frontmatter
**Details**: 
- Insert field in the frontmatter section
- Leave value empty initially for content team to populate
- Maintain existing frontmatter structure and formatting

#### Task 2.4: Update Blog Post - Vibe Code Skills
**File**: `/Volumes/NCC1701/Development/github/i-code-with-ai/content/blog/how-good-at-coding-do-you-need-to-be-to-vibe-code.md`
**Action**: Add `author = ""` field to frontmatter
**Details**: 
- Insert field in the frontmatter section
- Leave value empty initially for content team to populate
- Maintain existing frontmatter structure and formatting

#### Task 2.5: Update Blog Post - Memory Systems
**File**: `/Volumes/NCC1701/Development/github/i-code-with-ai/content/blog/understanding-memory-systems-in-llm-applications.md`
**Action**: Add `author = ""` field to frontmatter
**Details**: 
- Insert field in the frontmatter section
- Leave value empty initially for content team to populate
- Maintain existing frontmatter structure and formatting

#### Task 2.6: Update Blog Post - Slopsquatting
**File**: `/Volumes/NCC1701/Development/github/i-code-with-ai/content/blog/what-slopsquatting-is-and-why-you-should-verify-your-dev-ai-agent-installs.md`
**Action**: Add `author = ""` field to frontmatter
**Details**: 
- Insert field in the frontmatter section
- Leave value empty initially for content team to populate
- Maintain existing frontmatter structure and formatting

---

### Phase 3: Template Implementation

#### Task 3.1: Analyze Source Template Structure
**File**: `/Volumes/NCC1701/Development/github/i-code-with-ai/themes/icodewithai/layouts/podcast/single.html`
**Action**: Review lines 90-116 for exact structure and styling
**Details**: 
- Document the complete HTML structure of the host section
- Note all CSS classes used
- Identify Hugo templating logic and data references
- Document conditional logic and error handling

**Dependencies**: None
**Output**: Understanding of source template structure for replication

#### Task 3.2: Add Author Section to Blog Single Template
**File**: `/Volumes/NCC1701/Development/github/i-code-with-ai/themes/icodewithai/layouts/blog/single.html`
**Action**: Insert "About the Author" section after line 23
**Details**: 
- Copy exact structure from podcast template lines 90-116
- Modify heading from "About the Host" to "About the Author"
- Change data reference from hardcoded "marcelo-lewin" to `.Params.author`
- Update data lookup to `index .Site.Data.people .Params.author`
- Maintain all existing CSS classes:
  - `.guest-photo-section` (container)
  - `.guest-content` (flex container) 
  - `.guest-photo` (image container)
  - `.guest-info` (text content)
  - `.guest-link-wrapper` (link container)
  - `.section-link` (learn more link)
- Add conditional logic to only display section when author is specified
- Include graceful fallback if author data not found

**Dependencies**: Task 3.1 completed
**Position**: After content div, before blog-back-section (after line 23)

#### Task 3.3: Add "Written by" to Blog List Template
**File**: `/Volumes/NCC1701/Development/github/i-code-with-ai/themes/icodewithai/layouts/blog/list.html`
**Action**: Insert "Written by" text at line 30
**Details**: 
- Add new element under the title, before post-meta div
- Display format: "Written by [author full name]"
- Use data lookup: `index .Site.Data.people .Params.author`
- Access full name with `.full_name` field
- Add conditional logic to only display when author is specified
- Match existing styling patterns from the list template
- Ensure proper spacing and typography

**Dependencies**: None
**Position**: Line 30 (under title, before post-meta div)

---

### Phase 4: Testing and Validation

#### Task 4.1: Local Development Testing
**Action**: Test all changes in local development environment
**Details**: 
- Run `hugo server -D` to start local development server
- Navigate to all existing blog post single pages
- Verify "About the Author" section displays correctly when author is populated
- Verify section is hidden when author field is empty
- Navigate to blog list page and verify "Written by" text displays correctly
- Check responsive design on multiple screen sizes

**Dependencies**: Tasks 2.1-2.6, 3.2, 3.3 completed

#### Task 4.2: Template Syntax Validation
**Action**: Verify Hugo template syntax is correct
**Details**: 
- Check that all Hugo template functions are properly formatted
- Verify conditional logic (`{{ if }}` statements) are properly closed
- Ensure data lookups use correct syntax
- Validate that all HTML tags are properly closed
- Check for any template compilation errors in Hugo output

**Dependencies**: Tasks 3.2, 3.3 completed

#### Task 4.3: Missing Data Graceful Degradation Testing
**Action**: Test behavior when author data is missing or invalid
**Details**: 
- Test with empty author field in frontmatter
- Test with author field pointing to non-existent data file
- Test with malformed author data in people directory
- Verify no errors are thrown and pages render correctly
- Ensure graceful fallback behavior (sections hidden, no broken links)

**Dependencies**: All template tasks completed

#### Task 4.4: Cross-Browser Compatibility Testing
**Action**: Test in multiple browsers and devices
**Details**: 
- Test in Chrome, Firefox, Safari, Edge
- Verify responsive design on mobile devices
- Check that CSS classes render correctly
- Ensure no layout breaks or styling issues
- Validate accessibility features work properly

**Dependencies**: Task 4.1 completed

#### Task 4.5: Performance Impact Assessment
**Action**: Verify changes don't negatively impact site performance
**Details**: 
- Compare page load times before and after changes
- Check Hugo build times for any degradation
- Verify no additional HTTP requests are made
- Ensure data lookups don't cause performance bottlenecks

**Dependencies**: All implementation tasks completed

---

### Phase 5: Documentation and Cleanup

#### Task 5.1: Update Feature Documentation
**Action**: Document implementation details and usage
**Details**: 
- Update any relevant theme documentation
- Document the author field requirement for blog posts
- Create usage examples for content creators
- Document the people data file structure requirements

**Dependencies**: All testing tasks completed

#### Task 5.2: Code Review Preparation
**Action**: Prepare changes for code review
**Details**: 
- Ensure all code follows project coding standards
- Add appropriate code comments where needed
- Verify git commit messages are descriptive
- Prepare summary of changes for review

**Dependencies**: All implementation and testing completed

---

## Task Dependencies Summary

```
Phase 1 (1.1) → Phase 2 (2.1-2.6) → Phase 3 (3.1-3.3) → Phase 4 (4.1-4.5) → Phase 5 (5.1-5.2)
```

## Completion Criteria

- [ ] All 6 existing blog posts have author field in frontmatter
- [ ] Blog archetype includes author field for new posts
- [ ] "About the Author" section displays on blog single pages when author is specified
- [ ] "Written by" text displays on blog list page
- [ ] Graceful handling of missing author data
- [ ] No breaking changes to existing functionality
- [ ] All tests pass in local development environment
- [ ] Cross-browser compatibility verified
- [ ] Performance impact assessed and acceptable

## Notes

- Author data will be stored in `/Volumes/NCC1701/Development/github/i-code-with-ai/data/people/` directory
- Author field references the filename without .json extension
- Design matches pixel-perfect to existing host section in podcast pages
- All existing Hugo templating patterns are maintained
- CSS classes are reused from existing guest/host sections