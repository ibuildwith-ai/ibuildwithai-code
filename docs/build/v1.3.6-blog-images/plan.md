# Blog Images Implementation Plan

## Overview
Add image support to blog list and single views, following existing podcast image patterns and maintaining responsive design consistency.

## Requirements Summary
- **List view**: Image above title in blog cards (full card width) -> With a couple of pixes of buffer all around the image (maybe 5px?)
- **Single view**: Image below date line, only when `displayImageInline = true` and `image` field exists
- **Image processing**: Follow podcast pattern (`resources.Get` + `resources.Fingerprint`)
- **Path**: `/images/blog/filename` → `/themes/icodewithai/assets/images/blog/`
- **Fallback**: Show nothing if image missing
- **Alt text**: Blog post title
- **Responsive**: Full width, use existing breakpoint system

## Implementation Steps

### 1. Update Blog List Template (`themes/icodewithai/layouts/blog/list.html`)
**Location**: In the `{{ range .Pages }}` loop, add image above `<h3>{{ .Title }}</h3>`

**Template Code**:
```html
{{ if .Params.image }}
    {{ $imagePath := strings.TrimPrefix "/" .Params.image }}
    {{ $blogImg := resources.Get $imagePath }}
    {{ if $blogImg }}
        {{ $blogImgFingerprint := $blogImg | resources.Fingerprint }}
        <div class="blog-card-image">
            <img src="{{ $blogImgFingerprint.RelPermalink }}" alt="{{ .Title }}" loading="lazy">
        </div>
    {{ end }}
{{ end }}
```

### 2. Update Blog Single Template (`themes/icodewithai/layouts/blog/single.html`)
**Location**: Between post-meta div and content div (after date line)

**Template Code**:
```html
{{ if and .Params.image .Params.displayImageInline }}
    {{ $imagePath := strings.TrimPrefix "/" .Params.image }}
    {{ $blogImg := resources.Get $imagePath }}
    {{ if $blogImg }}
        {{ $blogImgFingerprint := $blogImg | resources.Fingerprint }}
        <div class="blog-single-image">
            <img src="{{ $blogImgFingerprint.RelPermalink }}" alt="{{ .Title }}" loading="lazy">
        </div>
    {{ end }}
{{ end }}
```

### 3. Add CSS Styles (`assets/scss/_components.scss`)
**Approach**: Extend existing patterns, avoid hardcoded values

**CSS Code**:
```scss
// Blog card images
.blog-card-image {
  width: 100%;
  margin-bottom: $spacing-sm;
  border-radius: $border-radius-base;
  overflow: hidden;
  
  img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
  }
}

// Blog single images  
.blog-single-image {
  width: 100%;
  margin: $spacing-md 0;
  border-radius: $border-radius-base;
  overflow: hidden;
  
  img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
  }
}
```

### 4. Update Blog Archetype (Already Complete)
- ✅ `archetypes/blog.md` already has `image = ""` field
- ✅ Content files already updated
- ✅ Images folder already created

## Technical Details

### Image Processing Pattern (Following Podcast Implementation)
1. Use `strings.TrimPrefix "/" .Params.image` to convert `/images/blog/file.png` → `images/blog/file.png`
2. Use `resources.Get $imagePath` to load from assets
3. Apply `resources.Fingerprint` for cache busting
4. Graceful fallback with `{{ if $blogImg }}` check

### CSS Integration
- Use existing variable system (`$spacing-*`, `$border-radius-*`)
- Follow existing responsive patterns with `@include tablet-down`
- Maintain consistency with other card components
- No hardcoded values

### Responsive Behavior
- Images will be 100% width of their container
- Will scale down naturally on mobile via existing container responsive behavior
- Use existing `$breakpoint-tablet` for any specific mobile adjustments needed

## Testing Checklist
- [ ] List view shows images above titles when `image` field exists
- [ ] List view shows no images when `image` field empty/missing
- [ ] Single view shows images when both `image` and `displayImageInline=true`
- [ ] Single view shows no images when `displayImageInline=false` or missing
- [ ] Single view shows no images when `image` field empty but `displayImageInline=true`
- [ ] Images are responsive across all screen sizes
- [ ] Images load with proper fingerprinted URLs for cache busting
- [ ] Alt text uses blog post titles
- [ ] No console errors for missing images

## Files to Modify
1. `/themes/icodewithai/layouts/blog/list.html` - Add image display logic
2. `/themes/icodewithai/layouts/blog/single.html` - Add image display logic  
3. `/assets/scss/_components.scss` - Add image styling

## Notes
- Following exact podcast image processing pattern (lines 68-74 in podcast/single.html)
- Using existing CSS variable system and responsive mixins
- Maintaining graceful degradation for missing images
- No new archetype changes needed (already complete)