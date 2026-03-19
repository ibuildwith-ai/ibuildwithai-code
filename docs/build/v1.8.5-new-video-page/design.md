# Version Design Document: v1.8.5-new-video-page
Technical implementation and design guide for creating a new Videos section.

## 1. Features Summary
Create a new "Videos" section for on-demand video content under the "Learn" menu. This section will be similar to the Events section but focused exclusively on video content with YouTube embeds, ordered by latest first.

### Key Features
- **Videos List Page**: Display all videos at `/videos/` ordered by date (latest first)
- **Video Detail Page**: Individual video pages with YouTube embed and multi-presenter support
- **Navigation Integration**: Add "Videos" link under "Learn" menu in header and footer (desktop + mobile)
- **Home Page Integration**: Add 4th box under Learn section (between Podcast and Events)
- **Simplified Archetype**: Video-specific frontmatter without event-related fields
- **Multi-Presenter Support**: Support comma-separated presenters (like events)
- **Content Creation**: Update automation script to support `video` content type
- **SEO Structure**: Complete SEO data files for videos section

## 2. Technical Architecture Overview

### Directory Structure
```
content/videos/                                     # Video content files
archetypes/videos.md                                # Video archetype template
themes/ibuildwithai/layouts/videos/
  ├── list.html                                    # Videos list page
  └── single.html                                  # Individual video page
themes/ibuildwithai/assets/images/videos/          # Video thumbnails
themes/ibuildwithai/assets/images/seo/content-types/videos/  # SEO images
themes/ibuildwithai/assets/images/icons/
  └── icon-videos.png                              # Already exists
data/seo/content-types/videos/
  ├── listpage.yaml                                # SEO for list page
  └── entries/
      └── [individual video SEO files]             # SEO for video pages
```

### Frontmatter Schema
**Videos Archetype** (`archetypes/videos.md`):
```yaml
+++
title = "{{ replace .Name "-" " " | title }}"
summary = ""
audience = ""
image = "/images/videos/default.png"
date_time = "{{ .Date }}"
presenter = "first-last"
video_url = ""
draft = true
+++
```

**Removed Fields** (compared to events):
- `location` - Not needed for videos
- `timezone` - Not needed for videos
- `status` - All videos are on-demand by default
- `learn_more_url` - Video is embedded, no external links needed
- `register_url` - Not applicable for on-demand videos
- `meeting_type` - Not applicable for on-demand videos
- `displayImageInline` - Videos always show embedded player

## 3. Implementation Notes

### Videos List Page (`layouts/videos/list.html`)
**Based on**: Events list page, specifically the "On-Demand" section

**Key Differences from Events**:
- No status filtering (all videos are on-demand)
- Single section display (no "Upcoming" or "Completed")
- Sort by `date_time` descending (latest first)
- No h2 section heading needed (direct card display)
- Remove location and meeting_type metadata from cards

**Template Structure**:
```html
{{ define "main" }}
    <main>
        <section class="hero">
            <h1><span class="highlight">Videos</span></h1>
            <p class="tagline">Watch on-demand tutorials, talks, presentations and other videos focused on vibe coding and product building.</p>
        </section>

        <section class="section">
            <div class="container">
                <div class="event-cards">
                    {{ range .Pages.ByParam "date_time" }}
                        <!-- Video card with thumbnail, title, presenter(s), date -->
                    {{ end }}
                </div>
            </div>
        </section>
    </main>
{{ end }}
```

### Video Detail Page (`layouts/videos/single.html`)
**Based on**: Events single page with `status="on-demand"`

**Key Differences from Events**:
- Always embed YouTube video (no conditional based on status)
- Remove entire "Links" section
- Remove timezone from meta display
- Remove location from meta display
- Remove meeting_type information
- Use `video_url` instead of `on_demand_url`
- Keep multi-presenter support with "About the Presenter(s)" section

**YouTube Embed Logic** (reuse from events):
```html
{{ $videoID := "" }}
{{ if (findRE "youtu\\.be/" .Params.video_url) }}
    {{ $videoID = index (last 1 (split .Params.video_url "/")) 0 }}
{{ else if (findRE "watch\\?v=" .Params.video_url) }}
    {{ $videoID = index (split (index (last 1 (split .Params.video_url "v=")) 0) "&") 0 }}
{{ else if (findRE "embed/" .Params.video_url) }}
    {{ $videoID = index (last 1 (split .Params.video_url "/")) 0 }}
{{ end }}
```

**Template Structure**:
```html
{{ define "main" }}
    <main>
        <article class="blog-single">
            <div class="container">
                <span class="content-type-header">Video</span>
                <h1>{{ .Title }}</h1>
                <div class="post-meta">
                    {{ dateFormat "January 2, 2006" .Params.date_time }}
                    <br>
                    [Multi-presenter logic here]
                </div>

                <!-- YouTube Video Embed -->
                <div class="blog-single-image">
                    <div class="video-embed-responsive">
                        <iframe src="https://www.youtube.com/embed/{{ $videoID }}" ...></iframe>
                    </div>
                </div>

                <!-- About the Video -->
                <div class="content">
                    <h3 class="project-links-title">About the Video</h3>
                    {{ .Content }}
                </div>

                <!-- Audience -->
                <div class="content">
                    <h3 class="project-links-title">Audience</h3>
                    {{ .Params.audience }}
                </div>

                <!-- About the Presenter(s) -->
                [Presenter boxes here - same as events]

                <!-- Back Link -->
                <div class="back-link-section">
                    <a href="{{ "videos/" | relURL }}" class="back-link">← Back to Videos</a>
                </div>
            </div>
        </article>
    </main>
{{ end }}
```

### Navigation Updates
**Files to Update**:
- `themes/ibuildwithai/layouts/partials/header.html`
- `themes/ibuildwithai/layouts/partials/footer.html`

**Placement**: Under "Learn" menu, between "Podcast" and "Events"

**Desktop Navigation** (header.html):
```html
<div class="navbar-dropdown">
    <a href="{{ "blog/" | relURL }}" class="navbar-item">Blog</a>
    <a href="{{ "podcast/" | relURL }}" class="navbar-item">Podcast</a>
    <a href="{{ "videos/" | relURL }}" class="navbar-item">Videos</a>  <!-- NEW -->
    <a href="{{ "events/" | relURL }}" class="navbar-item">Events</a>
</div>
```

**Mobile Navigation** (header.html + footer.html):
```html
<a href="{{ "videos/" | relURL }}" class="navbar-item">Videos</a>  <!-- NEW -->
```

### Home Page Integration
**File**: `themes/ibuildwithai/layouts/index.html`

**Location**: Under Learn section, create 4th box between Podcast and Events

**Icon**: `icon-videos.png` (already exists at `themes/ibuildwithai/assets/images/icons/`)

**Description**: "Watch on-demand tutorials, talks, presentations and other videos focused on vibe coding and product building."

**Link**: `/videos/`

**Implementation**:
```html
<div class="homepage-cards">
    <!-- Blog -->
    <!-- Podcast -->
    <!-- Videos (NEW) -->
    <a href="{{ "videos/" | relURL }}" class="app-card-link">
        <article class="app-card">
            <div class="app-icon">
                <img src="{{ $iconVideos.RelPermalink }}" alt="Videos" loading="lazy">
            </div>
            <h3>Videos</h3>
            <p>Watch on-demand tutorials, talks, presentations and other videos focused on vibe coding and product building.</p>
            <span class="card-link">Watch videos →</span>
        </article>
    </a>
    <!-- Events -->
</div>
```

### Configuration Updates
**Files to Update**:
- `config/_default/config.toml`
- `config/prod/config.toml` (if exists)
- `config/next/config.toml` (if exists)
- `config/local/config.toml` (if exists)

**Parameter to Add**:
```toml
videos = "/videos/"
```

### Automation Script Updates
**File**: `automations/create-content.sh`

**Changes**:
1. Add "videos" to VALID_TYPES array (plural form)
2. Add singular-to-plural mapping: `video` → `videos`
3. Add case statement for video content type

**Example**:
```bash
# Add to singular-to-plural mapping
if [ "$content_type" = "video" ]; then
    content_type="videos"
fi

# Add to case statement
videos)
    FILE_PATH="content/videos/${SLUG}.md"
    ;;
```

### SEO Data Structure
**Files to Create**:

1. **List Page SEO** (`data/seo/content-types/videos/listpage.yaml`):
```yaml
title: "Videos - I Build With AI"
description: "Watch on-demand tutorials, talks, presentations and other videos focused on vibe coding and product building with AI."
keywords: "ai development videos, vibe coding videos, spec driven development tutorials"
og_title: "Videos - I Build With AI"
og_description: "Watch on-demand tutorials, talks, presentations and other videos."
og_image: "/images/seo/content-types/videos/default.png"
og_type: "website"
twitter_card: "summary_large_image"
twitter_title: "Videos - I Build With AI"
twitter_description: "Watch on-demand tutorials, talks, presentations and other videos."
twitter_image: "/images/seo/content-types/videos/default.png"
schema_type: "CollectionPage"
```

2. **Individual Video SEO Files** (`data/seo/content-types/videos/entries/[video-slug].yaml`):
   - Create as needed per video
   - Follow same structure as events entries
   - Place in `entries/` subdirectory

### CSS Classes Reuse
**No new CSS needed**. Videos will reuse existing classes:
- `.event-cards` - For video list grid
- `.event-card-thumbnail` - For video thumbnails
- `.app-card` - For video cards
- `.video-embed-responsive` - For YouTube embed
- `.blog-single` - For video detail page wrapper
- `.guest-photo-section` - For presenter boxes
- `.post-meta` - For video metadata

## 4. Other Technical Considerations

### Multi-Presenter Logic
**Reuse from Events**: Exact same implementation for parsing comma-separated presenters and formatting with proper grammar (Oxford comma).

### YouTube Video ID Extraction
**Reuse from Events**: Regex-based URL pattern matching supporting:
- `https://www.youtube.com/watch?v=VIDEO_ID`
- `https://youtu.be/VIDEO_ID`
- `https://www.youtube.com/embed/VIDEO_ID`

### Image Path Handling
**Follow Events Pattern**: Use `strings.TrimPrefix` and `resources.Get` for Hugo resources pipeline with fingerprinting.

### Responsive Design
**Inherit from Events**: All existing responsive breakpoints and mobile styles will apply automatically through shared CSS classes.

### Default Images
**Create**: `themes/ibuildwithai/assets/images/videos/default.png` as placeholder for videos without custom thumbnails.

### SEO Images
**Create**: `themes/ibuildwithai/assets/images/seo/content-types/videos/default.png` for Open Graph/Twitter Card fallback.

## 5. Open Questions

**Q: Should videos have any additional metadata fields?**
A: Starting simple with provided fields. Can add tags, categories, or duration in future versions if needed.

**Q: Should we show video count on the list page?**
A: Not included in initial implementation. Can add as enhancement if requested.

**Q: Should videos be included in site-wide search?**
A: Videos will be indexed like other content types. No special search handling needed initially.

**Q: Should we create a default video thumbnail image?**
A: Yes, create a generic default.png in the videos images folder.

**Q: Do we need any video-specific CSS styles?**
A: No, reusing all existing classes from events, blog, and podcast sections.
