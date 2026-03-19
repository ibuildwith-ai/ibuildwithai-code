# Content Management

## Creating New Content

### Multi-Repository Deployment (v1.2.2+)

The website now uses a multi-repository architecture:
- **Source Repository**: `ibuildwith-ai/ibuildwithai-code` (private) - Contains Hugo source code, content, and themes
- **Staging**: `dev` branch → `ibuildwithai-next` repository → `next.ibuildwith.ai`
- **Production**: `main` branch → `ibuildwithai-prod` repository → `www.ibuildwith.ai`

Create new blog posts, app pages, or events using the automated script with titles:
```bash
# Blog posts
./automations/create-content.sh blog "My New Blog Article"
./automations/create-content.sh blog "Building with Claude"
./automations/create-content.sh blog "JavaScript Tips"

# App showcase pages
./automations/create-content.sh app "My New App Name"
./automations/create-content.sh app "Todo CLI"
./automations/create-content.sh app "Weather Widget"

# Events
./automations/create-content.sh event "My Event Topic"
./automations/create-content.sh event "AI Ethics Workshop"
./automations/create-content.sh event "Contentful Masterclass"

# Podcast episodes
./automations/create-content.sh podcast "Episode Name"
./automations/create-content.sh podcast "AI Product Development"
./automations/create-content.sh podcast "No Code Future"

# Built with Vibes
./automations/create-content.sh built-with-vibes "My New Episode"
```

The automation script automatically creates:

**For apps:**
1. **Folder structure**: `content/apps/{app-name}/` with:
   - `index.md` - Content file using Hugo archetype with title pre-filled
   - `icon.png` - Template icon image (300x300px)
   - `thumbnail.png` - Template thumbnail image (480x120px)
   - `photogallery/` folder containing:
     - `image01.png` - Template gallery image (800x450px)
     - `image02.png` - Template gallery image (800x450px)
     - `image03.png` - Template gallery image (800x450px)
2. **SEO file**: `data/seo/content-types/apps/entries/{filename}.yaml` with default metadata

**For other content types (blog, podcast, events):**
1. **Content file**: `content/{type}/{filename}.md` using Hugo archetypes with the actual title pre-filled
2. **SEO file**: `data/seo/content-types/{type}/entries/{filename}.yaml` with:
   - Title formatted as `[Title] | iCodeWith.ai`
   - Placeholder description `[Add description here]`
   - All required SEO metadata with default values

**All content types:**
3. **Filename conversion**: Converts titles to URL-friendly filenames (e.g., "How Good at Coding?" → `how-good-at-coding.md`)

**Manual Hugo commands** (if needed):
```bash
# Legacy method - requires manual SEO file creation
hugo new content blog/my-new-blog-article.md
hugo new content apps/my-new-app-name/index.md
hugo new content events/my-event-topic.md
hugo new content podcast/episode-name.md
```

## Deployment Automation

### Moving Content to Production

Use the automated deployment script to move changes from dev to production:
```bash
./automations/move-to-prod.sh
```

The script performs the following git operations:
1. **Switch to main**: `git checkout main`
2. **Update main**: `git pull origin main`
3. **Merge dev**: `git merge dev`
4. **Deploy to production**: `git push origin main`
5. **Switch back to dev**: `git checkout dev`
6. **Update dev**: `git pull origin dev`
7. **Sync branches**: `git merge main`

**Features:**
- ✅ Error checking at each step with clear feedback
- ✅ Keeps both branches synchronized
- ✅ Returns to dev branch when complete
- ✅ Comprehensive status reporting

**Workflow:**
1. Create/edit content on `dev` branch
2. Test on staging environment (`next.icodewith.ai`)
3. Run `./automations/move-to-prod.sh` to deploy
4. Content goes live on production (`www.icodewith.ai`)

## Content Structure

- `content/blog/` - Blog posts
- `content/apps/` - App showcase pages (page bundles with images)
- `content/podcast/` - Podcast episodes
- `content/events/` - Event pages

## People Management

### Creating New People Profiles

People profiles are used for podcast guests, event presenters, and site contributors. Each person requires both a JSON data file and a corresponding profile image.

#### Step 1: Create JSON Data File
Create a new JSON file in `data/people/` by duplicating an existing profile:

```bash
# Copy an existing profile as template
cp data/people/marcelo-lewin.json data/people/new-person-name.json
```

**JSON Structure**:
```json
{
    "fullName": "Person Full Name",
    "firstName": "Person",
    "lastName": "Name", 
    "title": "Job Title",
    "company": "Company Name",
    "bio": "Brief professional biography describing their background and expertise.",
    "learnMoreLink": "https://linkedin.com/in/username or personal website",
    "image": "images/people/person-name.png"
}
```

**Required Fields**:
- `fullName` - Complete name for display
- `firstName` - First name for personalized content
- `lastName` - Last name for formal references
- `title` - Professional title/role
- `company` - Current organization
- `bio` - Professional background (keep under 200 words)
- `learnMoreLink` - LinkedIn profile or personal website
- `image` - Path to profile image (must match actual file)

#### Step 2: Add Profile Image
Add the corresponding profile image to `themes/icodewithai/assets/images/people/`:

**Image Requirements**:
- **Dimensions**: Square aspect ratio (1:1) recommended, minimum 300x300px
- **Formats**: PNG preferred, JPG acceptable
- **File Naming**: Use kebab-case matching the JSON filename
  - JSON: `debbie-o-brien.json` → Image: `debbie-o-brien.png`
- **File Size**: Keep under 100KB for optimal loading
- **Content**: Professional headshot or profile photo

**Example File Structure**:
```
data/people/
├── marcelo-lewin.json
├── debbie-o-brien.json
└── new-person-name.json

themes/icodewithai/assets/images/people/
├── marcelo-lewin.png
├── debbie-o-brien.png
└── new-person-name.png
```

#### Step 3: Usage in Content
Reference people in content using their JSON filename (without extension):

**Podcast Episodes**:
```yaml
+++
host = "marcelo-lewin"
guest = "debbie-o-brien"
+++
```

**Events**:
```yaml
+++
presenter = "marcelo-lewin.json"  # Note: events use .json extension
+++
```

#### People Profile Checklist
- [ ] JSON file created in `data/people/` with all required fields
- [ ] Profile image added to `themes/icodewithai/assets/images/people/`
- [ ] Image path in JSON matches actual file location
- [ ] Image is properly sized and optimized
- [ ] Bio is professional and under 200 words
- [ ] Learn more link is valid and accessible

### App Page Bundles
Apps use Hugo page bundles for better organization and image management:

```
content/apps/app-name/
├── index.md                    # App content and metadata
├── thumbnail.jpg/.png          # Optional card thumbnail (480x120px, 4:1 ratio)
└── photogallery/              # Optional photo gallery
    ├── image01.jpg/.png       # Gallery images (800x450px, 16:9 ratio)
    ├── image02.jpg/.png       # Sorted by filename (01, 02, 03...)
    └── image03.jpg/.png
```

### Image Requirements

#### Thumbnails (for cards)
- **Dimensions**: 480x120 pixels (4:1 aspect ratio)
- **Formats**: JPG or PNG
- **File naming**: `thumbnail.jpg` or `thumbnail.png`
- **Purpose**: Displayed on home page and apps list page
- **Behavior**: Only shows if file exists; cards work normally without thumbnails

#### Photo Gallery Images
- **Dimensions**: 800x450 pixels (16:9 aspect ratio) recommended
- **Alternative sizes**: 640x360px (smaller), 1200x675px (larger)
- **Formats**: JPG or PNG (can mix formats in same gallery)
- **File naming**: `image01.jpg`, `image02.jpg`, `image03.jpg`, etc.
- **Sorting**: Images display in filename order (01, 02, 03...)
- **Purpose**: Full photo gallery on app detail pages
- **Behavior**: Only shows if photogallery folder exists with images

#### Image Optimization Tips
- **Compression**: Use 80-85% quality for JPG images
- **File sizes**: Keep under 200KB per image for optimal loading
- **Alt text**: Automatically generated based on app title and image number
- **Lazy loading**: Built-in performance optimization
- **Responsive**: Images scale automatically across all devices

## SEO Management

The site includes comprehensive SEO optimization:

### Meta Tags & Descriptions
Add SEO-friendly descriptions to your content front matter:

**Blog posts:**
```yaml
+++
title = "My Blog Post"
description = "This description appears in Google search results and social media shares"
+++
```

**Apps:**
```yaml
+++
title = "My App"
description = "SEO description for search engines and social media"
+++
```

**Events:**
```yaml
+++
title = "My Event Topic"
summary = "Brief summary for listing pages"
description = "Detailed description for search engines and social media"
date_time = "2024-07-15T14:00:00-08:00"
timezone = "PST"
presenters = "Marcelo Lewin"
status = "upcoming"
external_url = "https://example.com/event-link"
+++

### Podcast Episodes
Podcast episodes use standard markdown files with comprehensive frontmatter:

```yaml
+++
title = "Episode Title"
slug = "episode-slug"
date = "YYYY-MM-DD"
draft = false
status = "published"  # or "upcoming"
description = "Episode description for SEO and listings"
image = "images/podcast/episode-slug.jpg"
episode_url = "https://open.spotify.com/episode/spotify-episode-id"
host = "Marcelo Lewin"
guest = "Guest Name, Guest Title"
+++

Episode content in markdown format...
```

#### Episode Status
- **"published"**: Episode is live and appears in Latest/All Episodes sections
- **"upcoming"**: Episode appears in Upcoming Episodes section

#### Episode Images
- **Location**: `themes/icodewithai/assets/images/podcast/`
- **Organization**: All images consolidated in theme assets folder (v1.4.4)
- **Naming**: Use episode slug (e.g., `episode-001.jpg`)
- **Dimensions**: 1:1 aspect ratio (square) recommended
- **Formats**: JPG or PNG
```

### SEO Priority Order
The site automatically uses the best available description:
1. Front matter `description` (highest priority)
2. Front matter `summary` 
3. Site default description from `hugo.toml` (fallback)

### Included SEO Features
- **Meta descriptions** - Optimized for search engines
- **Open Graph tags** - Facebook, LinkedIn sharing previews
- **Twitter Card support** - Twitter sharing previews
- **Author meta tags** - Content attribution
- **Structured page titles** - "Page Title | iCodeWith.ai"

### Social Media Sharing
Content automatically includes proper meta tags for rich previews when shared on:
- Facebook
- LinkedIn
- Twitter/X
- Other social platforms

## Hugo Pipes Image Processing

### Theme Images
Theme images (logos, profile photos, certificates) are processed through Hugo Pipes for optimization and cache busting:

#### File Location
- **Source**: `themes/icodewithai/assets/images/` (consolidated in v1.4.4)
- **Organization**: 67 image files organized by category (blog, podcast, events, seo, people, icons)
- **Generated**: `/public/images/[filename].[hash].[ext]`

#### Supported Images
- `marcelolewin.jpg` - Profile photo for bio page
- `logo.png` - Site logo (header and footer)
- `icon-contentful-certified-content-manager.png` - Certificate badge
- `icon-contentful-certified-professional.png` - Certificate badge
- `podcast/podcast-cover.png` - Main podcast cover image
- `podcast/episode-*.jpg` - Individual episode cover images (1:1 aspect ratio)

#### Template Usage
Images are referenced using Hugo's `resources.Get` function:
```html
{{ $profileImg := resources.Get "images/marcelolewin.jpg" | resources.Fingerprint }}
{{ if $profileImg }}
<img src="{{ $profileImg.RelPermalink }}" alt="Marcelo Lewin" loading="lazy">
{{ end }}
```

#### Benefits
- **Cache Busting**: Fingerprinted URLs ensure proper cache invalidation
- **Error Handling**: Graceful fallbacks when images are missing
- **Performance**: Lazy loading and optimized delivery
- **Consistency**: Unified asset pipeline with SCSS and JavaScript

#### File Management
- **Static Images**: Favicons and PWA icons remain in `themes/icodewithai/static/images/`
- **Theme Images**: All images consolidated in `themes/icodewithai/assets/images/` (v1.4.4)
- **Asset Consolidation**: All JS and SCSS also in `themes/icodewithai/assets/` (v1.4.5)
- **Performance**: 54% build improvement from consolidation (69ms → 32ms)
- **Content Images**: App thumbnails and galleries remain as page bundle resources

## SEO and Search Engine Control

### Environment-Specific Search Engine Indexing (v1.2.2+)

The website implements environment-specific search engine control:

- **Production** (`www.icodewith.ai`): Fully indexed by search engines
- **Staging** (`next.icodewith.ai`): Blocked from search engines using `noindex, nofollow` meta tags

This is configured via the `noindex` parameter in `config/next/config.toml` and automatically adds:
```html
<meta name="robots" content="noindex, nofollow">
```

### Testing SEO Configuration
- **Production**: View page source → should NOT contain "noindex"
- **Staging**: View page source → should contain `<meta name="robots" content="noindex, nofollow">`