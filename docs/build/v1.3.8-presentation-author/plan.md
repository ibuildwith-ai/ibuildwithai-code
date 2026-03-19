# v1.3.8-presentation-author Implementation Plan

## Overview

This version adds comprehensive author functionality to presentations, following the successful implementation pattern from v1.3.7-blog-author. The goal is to create a consistent user experience across content types by implementing "About the Presenter" sections on single presentation pages and "Presented by" attribution on the presentation list page.

## Current State Analysis

### Presentation Templates Analysis

**Single Page Template (`/themes/icodewithai/layouts/presentations/single.html`)**
- Currently displays basic presentation metadata (date, time, timezone, location, meeting type)
- Has presenter lookup logic in meta section (lines 9-12): Shows "Presented by [presenter name]" 
- Missing the detailed "About the Presenter" section that should match the blog author implementation
- Has appropriate sections for content integration: after Links section, before back link

**List Page Template (`/themes/icodewithai/layouts/presentations/list.html`)**
- Currently shows date, location, meeting type in meta
- Missing "Presented by [presenter name]" attribution that should match blog implementation
- Uses app-card layout with app-meta class for presentation metadata

### Content State Analysis

**Presentation Archetype**: Already contains `presenter = "first-last"` field (confirmed clean from v1.3.7)

**Existing Presentation Files**: All 3 files already have correct presenter field set to "marcelo-lewin"
1. `/content/presentations/from-vibe-coding-to-shippable-code.md` - ✅ presenter = "marcelo-lewin"
2. `/content/presentations/intro-to-vibe-coding-with-amazon-kiro-demo.md` - ✅ presenter = "marcelo-lewin"  
3. `/content/presentations/vibe-coding-with-intent-for-better-and-faster-results.md` - ✅ presenter = "marcelo-lewin"

**People Data**: Confirmed marcelo-lewin profile exists in `/data/people/marcelo-lewin.json`

### Design Reference Analysis

**Source Template**: Podcast host section (`/themes/icodewithai/layouts/podcast/single.html`, lines 88-114)
- Uses standardized `guest-photo-section` and `guest-content` structure
- Includes responsive image handling with fingerprinting
- Shows full profile: photo, name, title, company, bio, learn more link
- Consistent styling with existing site patterns

**Blog Author Implementation**: Already implemented in v1.3.7
- Single page: "About the Author" section using guest-photo-section layout
- List page: "Written by [author name]" in post-author div
- Exact same structure that presentations should follow

## Implementation Plan

### Phase 1: Update Presentation Single Template

**File**: `/themes/icodewithai/layouts/presentations/single.html`

**Changes Required**:

1. **Add About the Presenter Section** (after Links section, before back link)
   - Copy exact structure from blog single template (lines 25-51)
   - Change "About the Author" to "About the Presenter"  
   - Change variable from `$authorData` to `$presenterData`
   - Use `.Params.presenter` instead of `.Params.author`
   - Keep all other styling and functionality identical

2. **Position Requirements**:
   - Insert after the Links section (line 48, after the closing `{{ end }}`)
   - Before the back-link-section (line 50)

### Phase 2: Update Presentation List Template

**File**: `/themes/icodewithai/layouts/presentations/list.html`

**Changes Required**:

1. **Add Presenter Attribution** (in app-meta section)
   - Add presenter lookup and display logic
   - Position after the date/location line, before the closing meta div
   - Format: "Presented by [presenter name]" in post-author div
   - Match blog list implementation pattern exactly

2. **Implementation Details**:
   - Add presenter check: `{{ if .Params.presenter }}`
   - Add data lookup: `{{ $presenterData := index .Site.Data.people .Params.presenter }}`
   - Add display: `{{ if $presenterData }}<div class="post-author">Presented by {{ $presenterData.fullName }}</div>{{ end }}`
   - Position after line 25 (location/meeting type line)

### Phase 3: Content Verification

**Task**: Verify all presentation content files have correct presenter values

**Files to Verify** (all confirmed as already correct):
- ✅ `/content/presentations/from-vibe-coding-to-shippable-code.md`
- ✅ `/content/presentations/intro-to-vibe-coding-with-amazon-kiro-demo.md` 
- ✅ `/content/presentations/vibe-coding-with-intent-for-better-and-faster-results.md`

**Status**: All files already contain `presenter = "marcelo-lewin"` - no changes needed.

## Technical Implementation Details

### Template Code Specifications

**Single Page - About the Presenter Section**:
```html
<!-- About the Presenter Section -->
{{ $presenterData := index .Site.Data.people .Params.presenter }}
{{ if $presenterData }}
<h2>About the Presenter</h2>
<div class="guest-photo-section">
    <div class="guest-content">
        <div class="guest-photo">
            {{ $presenterImg := resources.Get $presenterData.image }}
            {{ if $presenterImg }}
                {{ $presenterImgFingerprint := $presenterImg | resources.Fingerprint }}
                <img src="{{ $presenterImgFingerprint.RelPermalink }}" alt="{{ $presenterData.fullName }}" loading="lazy">
            {{ else }}
                <p>Debug: Image not found at {{ $presenterData.image }}</p>
            {{ end }}
        </div>
        <div class="guest-info">
            <h3>{{ $presenterData.fullName }}, {{ $presenterData.title }} @ {{ $presenterData.company }}</h3>
            <p>{{ $presenterData.bio }}</p>
            {{ if and $presenterData.learnMoreLink (ne $presenterData.learnMoreLink "") }}
            <div class="guest-link-wrapper">
                <a href="{{ $presenterData.learnMoreLink }}" class="section-link" target="_blank" rel="noopener noreferrer">Learn More →</a>
            </div>
            {{ end }}
        </div>
    </div>
</div>
{{ end }}
```

**List Page - Presenter Attribution**:
```html
{{ if .Params.presenter }}
    {{ $presenterData := index .Site.Data.people .Params.presenter }}
    {{ if $presenterData }}<div class="post-author">Presented by {{ $presenterData.fullName }}</div>{{ end }}
{{ end }}
```

### CSS Classes Used

**Existing Classes** (no new CSS required):
- `guest-photo-section` - Main container for presenter bio section
- `guest-content` - Content wrapper within photo section
- `guest-photo` - Photo container with responsive image
- `guest-info` - Text content container (name, title, bio)
- `guest-link-wrapper` - Container for learn more link
- `section-link` - Styling for learn more link
- `post-author` - Attribution text styling for list page

### Data Dependencies

**People Data Structure** (already exists):
- File: `/data/people/marcelo-lewin.json`
- Required fields: `fullName`, `title`, `company`, `bio`, `image`, `learnMoreLink`
- Image path: Must be in `/assets/` directory for Hugo resource processing

## Quality Assurance

### Testing Requirements

**Single Page Testing**:
1. Navigate to each presentation single page
2. Verify "About the Presenter" section appears after Links, before back link
3. Confirm presenter photo displays correctly with proper fingerprinting
4. Check presenter name, title, company format matches design
5. Verify bio content displays properly
6. Test "Learn More" link functionality if present
7. Verify responsive behavior on mobile/desktop

**List Page Testing**:
1. Navigate to presentations list page (`/presentations/`)
2. Check both upcoming and completed sections
3. Verify "Presented by [name]" appears in each card
4. Confirm styling matches blog post attribution
5. Test responsive behavior

**Cross-Browser Testing**:
- Chrome, Firefox, Safari, Edge
- Mobile and desktop viewports
- Verify image loading and layout consistency

### Validation Checklist

**Template Validation**:
- [ ] Single page template compiles without errors
- [ ] List page template compiles without errors  
- [ ] Hugo build completes successfully
- [ ] No broken image references in console
- [ ] Proper alt text on all images

**Content Validation**:
- [ ] All presentation files have valid presenter field
- [ ] Presenter data exists in people directory
- [ ] Image paths resolve correctly
- [ ] No missing or broken profile data

**Design Validation**:
- [ ] Presenter section styling matches blog author section
- [ ] Attribution styling matches blog post attribution
- [ ] Responsive behavior works on all screen sizes
- [ ] Typography and spacing consistent with site design

## Dependencies

### Required Files (all confirmed to exist):
- `/data/people/marcelo-lewin.json` - ✅ Presenter profile data
- `/assets/images/people/marcelo-lewin.jpg` - ✅ Presenter photo
- Presentation content files - ✅ All have presenter field

### Template Dependencies:
- Hugo resources pipeline for image processing
- Site.Data.people structure for profile lookup
- Existing CSS classes from guest photo sections

## Risk Assessment

**Low Risk Implementation**:
- Templates follow established patterns from blog/podcast
- All content files already have correct presenter values
- CSS classes already exist and tested
- Image resources already available
- No new dependencies required

**Potential Issues**:
- Image path changes could break photo display (mitigated by existing assets)
- People data structure changes could affect lookup (mitigated by stable data structure)
- Template syntax errors could break page rendering (mitigated by copying proven code)

## Success Criteria

**Functional Requirements**:
1. ✅ "About the Presenter" section displays on all presentation single pages
2. ✅ "Presented by [name]" attribution displays on presentation list cards  
3. ✅ Presenter photos load correctly with proper optimization
4. ✅ All presenter profile information displays accurately
5. ✅ Learn more links function properly when present
6. ✅ No broken templates or build errors

**Design Requirements**:
1. ✅ Visual consistency with blog author and podcast host sections
2. ✅ Responsive design works on all screen sizes
3. ✅ Typography and spacing match site standards
4. ✅ Attribution styling matches blog implementation

**Content Requirements**:
1. ✅ All existing presentations show presenter information
2. ✅ New presentations will automatically use presenter field
3. ✅ Consistent presenter data across all content types

## Implementation Order

1. **Template Updates** (parallel tasks):
   - Update presentation single template with About the Presenter section
   - Update presentation list template with presenter attribution

2. **Testing & Validation**:
   - Local development testing of both templates
   - Content verification across all presentation files
   - Cross-browser and responsive testing

3. **Final Integration**:
   - Hugo build verification
   - Performance testing with image optimization
   - User acceptance testing

**Estimated Effort**: 2-3 hours total implementation and testing time

**Dependencies**: None - all required assets and data already exist