# Plan: v1.3.7-blog-author Implementation

## Overview
Add author functionality to blog posts, matching the exact design and structure of the host section in podcast single pages.

## Requirements Analysis
Based on code review:
- **Source template**: `themes/icodewithai/layouts/podcast/single.html` (lines 90-116)
- **Target template**: `themes/icodewithai/layouts/blog/single.html` 
- **List template**: `themes/icodewithai/layouts/blog/list.html`
- **Archetype**: `archetypes/blog.md`
- **Existing blog posts**: 6 files in `content/blog/`

## Implementation Steps

### 1. Update Blog Archetype (`archetypes/blog.md`)
- Add `author = ""` field to frontmatter
- This ensures all new blog posts will have the author field

### 2. Update All Existing Blog Posts
Add `author = ""` field to frontmatter in:
- `a-business-overview-of-retrieval-augmented-generation.md`
- `an-overview-of-ai-bias-types.md`
- `an-overview-of-ai-guardrails.md`
- `how-good-at-coding-do-you-need-to-be-to-vibe-code.md`
- `understanding-memory-systems-in-llm-applications.md`
- `what-slopsquatting-is-and-why-you-should-verify-your-dev-ai-agent-installs.md`

### 3. Add "About the Author" Section to Blog Single Template
**Location**: `themes/icodewithai/layouts/blog/single.html`
**Position**: After line 23 (after content div, before blog-back-section)
**Design**: Exact copy of host section from podcast template (lines 90-116) with these changes:
- Heading: "About the Author" instead of "About the Host"
- Reference: `.Params.author` instead of hardcoded "marcelo-lewin"
- Data lookup: `index .Site.Data.people .Params.author`

### 4. Add "Written by" to Blog List Template
**Location**: `themes/icodewithai/layouts/blog/list.html`
**Position**: Line 30 (under the title, before post-meta div)
**Content**: "Written by [author full name]" using data from people data files

### 5. CSS Classes
Reuse existing CSS classes:
- `.guest-photo-section` (container)
- `.guest-content` (flex container)
- `.guest-photo` (image container)
- `.guest-info` (text content)
- `.guest-link-wrapper` (link container)
- `.section-link` (learn more link)

## Technical Notes
- Author data will be stored in `data/people/` directory (following existing pattern)
- Author field will reference the filename (without .json extension)
- Design will be pixel-perfect match to host section
- Graceful fallback if author not found in data
- All existing Hugo templating patterns maintained

## Testing
- Verify author section displays correctly on blog single pages
- Verify "Written by" appears on blog list page
- Test with missing author data (graceful degradation)
- Ensure existing functionality remains intact