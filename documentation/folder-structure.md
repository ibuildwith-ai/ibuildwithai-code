# Project Folder Structure

This document outlines the complete folder structure of the iBuildWith.ai website project, built with Hugo and enhanced SCSS architecture.

## Root Directory

```
/
├── .claude/                     # Claude Code configuration and workflows
├── .cody/                       # Cody Framework spec-driven development structure
├── .github/                     # GitHub Actions workflows and automation
├── .gitignore                   # Git ignore patterns
├── .hugo_build.lock             # Hugo build lock file
├── README.md                    # Project documentation and setup instructions
├── archetypes/                  # Hugo content templates for new posts/apps
├── automations/                 # Automation scripts for content and deployment
├── backend/                     # Netlify Functions backend (separate git repo)
├── config/                      # Environment-specific Hugo configurations
├── content/                     # Markdown content files for site pages
├── data/                        # Hugo data files (people profiles, SEO metadata)
├── layouts/                     # Hugo shortcodes and custom layouts
├── public/                      # Generated static site (Hugo build output) - git ignored
├── resources/                   # Hugo's internal resource cache - git ignored
└── themes/                      # Hugo theme (ibuildwithai) with all assets
```

**Note:** Root `assets/` folder eliminated in v1.4.5 - all assets now in `themes/ibuildwithai/assets/`

## Detailed Structure

### `/archetypes/`
Templates for creating new content with `hugo new` command.

```
archetypes/
├── apps.md                      # Template for new app pages
├── blog.md                      # Template for new blog posts
├── podcast.md                   # Template for new podcast episodes
├── presentations.md             # Template for new presentation pages
└── show-and-tell.md             # Template for new Show & Tell pages
```

### `/automations/`
Scripts for automating content creation and deployment workflows.

```
automations/
├── create-content.sh            # Interactive script for creating new content (blog, podcast, etc.)
└── push-to-prod.sh             # Deployment script for production releases
```

### `/backend/`
Netlify Functions backend (separate git repository). Contains serverless functions for:
- Contact form processing
- Newsletter/reminder form handling
- API integrations with Resend email service

```
backend/
├── netlify/
│   └── functions/
│       ├── contact-form.js      # Contact form submission handler
│       └── reminder-form.js     # Reminder/newsletter form handler
├── netlify.toml                 # Netlify configuration
└── package.json                 # Backend dependencies
```

### `/config/`
Environment-specific Hugo configurations using Hugo's config directory structure.

```
config/
├── _default/
│   └── config.toml              # Default Hugo configuration (base settings, menus, params)
├── local/
│   └── config.toml              # Local development overrides
├── next/
│   └── config.toml              # Staging environment config (next.icodewith.ai)
└── prod/
    └── config.toml              # Production environment config (www.icodewith.ai)
```

### `/data/`
Hugo data files accessible in templates.

```
data/
├── people/                      # People profile data (presenters, guests, authors)
│   ├── marcelo-lewin.json
│   ├── brian-madison.json
│   ├── debbie-o-brien.json
│   ├── devon-streelman.json
│   ├── eric-provencher.json
│   ├── erin-carpenter.json
│   ├── jonathan-lewin.json
│   ├── josh-grossman.json
│   ├── josh-thornes.json
│   └── tim-benniks.json
└── seo/                         # SEO metadata for pages
    ├── blog.yaml
    ├── podcast.yaml
    └── presentations.yaml
```

### `/layouts/`
Custom Hugo layouts and shortcodes (extends theme templates).

```
layouts/
└── shortcodes/                  # Custom Hugo shortcodes
    ├── hspace.html              # Horizontal spacing
    ├── reminder.html            # Newsletter reminder widget
    ├── space.html               # Vertical spacing
    └── sup.html                 # Superscript text
```

### ~~`/assets/`~~ - ELIMINATED IN v1.4.5

**Asset Consolidation Complete (v1.4.4 - v1.4.5):**
- Root `assets/` folder completely removed
- All SCSS, JavaScript, and images moved to `themes/ibuildwithai/assets/`
- Single-location asset management for better organization
- 54% build performance improvement (69ms → 32ms combined)

All assets are now located in `themes/ibuildwithai/assets/` - see theme structure below.

### `/content/` - Site Content
Markdown files organized by content type. Apps use page bundles for image management.

```
content/
├── about-marcelo.md                # About page (professional bio)
├── contact.md                      # Contact page
├── apps/                           # App showcase pages (page bundles)
│   ├── app-name/                   # App page bundle
│   │   ├── index.md                # App content and metadata
│   │   ├── thumbnail.jpg           # Optional card thumbnail (480x120px)
│   │   └── photogallery/          # Optional photo gallery
│   │       ├── image01.jpg         # Gallery images (800x450px)
│   │       ├── image02.jpg         # Sorted by filename
│   │       └── image03.jpg
│   └── ...
├── blog/                           # Blog posts
│   ├── blog-article-name.md        # Individual blog articles
│   └── ...
├── podcast/                        # Podcast episodes
│   ├── episode-name.md             # Individual podcast episodes
│   └── ...
├── presentations/                  # Presentation pages
│   ├── presentation-name.md        # Individual presentation pages
│   └── ...
└── show-and-tell/                  # Show & Tell tutorials
    ├── tutorial-name.md            # Individual Show & Tell pages
    └── ...
```

### `/public/` - Generated Site
Static files generated by Hugo build process. **Do not edit directly.**

```
public/
├── index.html                   # Homepage
├── index.xml                    # RSS feed
├── sitemap.xml                  # Site sitemap
├── CNAME                        # GitHub Pages domain configuration
├── apps/                        # Generated app pages
│   ├── index.html               # Apps listing page
│   ├── index.xml                # Apps RSS feed
│   └── [app-name]/             # Individual app pages with images
│       ├── index.html           # App detail page
│       ├── thumbnail.jpg        # App thumbnail (if exists)
│       └── photogallery/       # Gallery images (if exist)
├── about-marcelo/               # Generated about page
│   └── index.html               # About page with professional background
├── contact/                     # Generated contact page
│   └── index.html               # Contact form page
├── 404.html                     # Custom 404 error page
├── blog/                        # Generated blog pages
│   ├── index.html               # Blog listing page
│   ├── index.xml                # Blog RSS feed
│   └── [post-name]/            # Individual blog posts
├── podcast/                     # Generated podcast pages
│   ├── index.html               # Podcast listing page
│   ├── index.xml                # Podcast RSS feed
│   └── [episode-slug]/         # Individual podcast episodes
├── presentations/               # Generated presentation pages
│   ├── index.html               # Presentations listing page
│   ├── index.xml                # Presentations RSS feed
│   └── [presentation-name]/     # Individual presentation pages
├── show-and-tell/               # Generated Show & Tell pages
│   ├── index.html               # Show & Tell listing page
│   ├── index.xml                # Show & Tell RSS feed
│   └── [tutorial-name]/        # Individual Show & Tell pages
├── categories/                  # Category taxonomy pages
├── tags/                        # Tag taxonomy pages
├── images/                      # Processed images with fingerprinting
├── scss/                        # Compiled CSS
│   └── styles.min.css           # Minified CSS output from SCSS
└── js/                          # Compiled JavaScript
    ├── contact-form.min.[hash].js    # Contact form handler
    ├── mobile-menu.min.[hash].js     # Mobile menu toggle
    ├── nav-dropdown.min.[hash].js    # Navigation dropdowns
    ├── photo-gallery.min.js          # Photo gallery functionality
    └── reminder-form.min.[hash].js   # Reminder form handler
```

### `/resources/` - Hugo Cache
Hugo's internal resource cache for processed assets. **Auto-generated.**

```
resources/
└── _gen/
    └── assets/
        ├── scss/
        │   ├── styles.scss_[hash].content    # Compiled CSS content
        │   └── styles.scss_[hash].json       # CSS asset metadata
        └── js/
            ├── photo-gallery.js_[hash].content  # Compiled JavaScript content
            └── photo-gallery.js_[hash].json     # JavaScript asset metadata
```

**Note:** The `public/` and `resources/` directories are auto-generated and git-ignored. They should never be manually edited.

### `/themes/ibuildwithai/` - Hugo Theme
Custom Hugo theme containing templates, layouts, and source assets.

```
themes/ibuildwithai/
├── assets/                      # ALL theme assets (consolidated v1.4.4-v1.4.5)
│   ├── scss/                    # SCSS source files (9 files)
│   │   ├── styles.scss          # Main SCSS entry point
│   │   ├── _variables.scss      # Design system variables
│   │   ├── _mixins.scss         # Reusable SCSS mixins
│   │   ├── _base.scss           # Base styles and resets
│   │   ├── _layout.scss         # Layout components
│   │   ├── _components.scss     # UI components
│   │   ├── _utilities.scss      # Utility classes
│   │   └── _responsive.scss     # Media queries
│   ├── js/                      # JavaScript source files (5 files)
│   │   ├── contact-form.js
│   │   ├── mobile-menu.js
│   │   ├── nav-dropdown.js
│   │   ├── photo-gallery.js
│   │   └── reminder-form.js
│   └── images/                  # Theme images (67 files organized by category)
│       ├── blog/                # Blog post images
│       ├── certificates/        # Certificate badges
│       ├── icons/               # Site icons
│       ├── people/              # Profile photos (marcelolewin.jpg, etc.)
│       ├── podcast/             # Podcast images
│       │   ├── podcast-cover.png
│       │   └── episode-*.jpg
│       ├── presentations/       # Presentation images
│       ├── seo/                 # SEO/social media images
│       └── show-and-tell/       # Show and tell images
├── layouts/                     # Hugo template files
│   ├── _default/
│   │   └── baseof.html          # Base template with <head>, <body> structure
│   ├── about-marcelo.html       # About/bio page template
│   ├── contact.html             # Contact form page template
│   ├── 404.html                 # Custom 404 error page template
│   ├── apps/
│   │   ├── list.html            # Apps listing page template (with thumbnails)
│   │   └── single.html          # Individual app page template (with photo gallery)
│   ├── blog/
│   │   ├── list.html            # Blog listing page template
│   │   └── single.html          # Individual blog post template
│   ├── podcast/
│   │   ├── list.html            # Podcast listing page template
│   │   └── single.html          # Individual podcast episode template
│   ├── presentations/
│   │   ├── list.html            # Presentations listing page template
│   │   └── single.html          # Individual presentation page template
│   ├── show-and-tell/
│   │   ├── list.html            # Show & Tell listing page template
│   │   └── single.html          # Individual Show & Tell page template
│   ├── index.html               # Homepage template
│   └── partials/
│       ├── header.html          # Site header with navigation
│       ├── footer.html          # Site footer with social links
│       ├── seo.html             # SEO meta tags and Open Graph
│       └── reminder-widget.html # Newsletter reminder widget
└── static/
    └── images/                  # Static images (favicons, PWA icons)
        ├── favicon.ico          # Browser favicon
        ├── favicon-16x16.png    # Small favicon
        ├── favicon-32x32.png    # Standard favicon
        ├── apple-touch-icon.png # iOS home screen icon
        ├── android-chrome-192x192.png  # Android app icon
        └── android-chrome-512x512.png  # Large Android app icon
```

### `/.cody/` - Cody Framework
Spec-driven development framework structure for systematic project development.

```
.cody/
├── config/                      # Cody Framework configuration
│   ├── agent.md                 # Agent instructions and commands
│   ├── settings.json            # Framework version and settings
│   ├── commands/                # Cody command definitions
│   ├── scripts/                 # Utility scripts (upgrade, etc.)
│   └── templates/               # Document templates
└── project/                     # Project-specific Cody files
    ├── build/                   # Build phase (versions)
    │   ├── feature-backlog.md   # Feature backlog across versions
    │   ├── v1.4.4-consolidate-images/
    │   └── v1.4.5-consolidate-asset-folders/
    ├── library/                 # Project documentation library
    │   ├── docs/                # Reference documentation
    │   │   ├── agent-reference.md
    │   │   ├── components.md
    │   │   ├── content-management.md
    │   │   ├── css-documentation.md
    │   │   ├── folder-structure.md
    │   │   └── seo-maintenance.md
    │   └── assets/              # Asset files for documentation
    └── plan/                    # Plan phase documents
        ├── discovery.md
        ├── prd.md
        └── plan.md
```

## Key Configuration Files

### `/config/_default/config.toml`
Main Hugo configuration containing:
- Site metadata (title, baseURL, language)
- Theme configuration
- Navigation menu structure
- Site parameters (author info, social links)
- Manual version tracking (`version` and `last_updated`)

### Environment-Specific Configs
- `/config/local/config.toml` - Local development overrides
- `/config/next/config.toml` - Staging (next.icodewith.ai)
- `/config/prod/config.toml` - Production (www.icodewith.ai)

### Asset Processing

All assets consolidated in `themes/ibuildwithai/assets/` (v1.4.4-v1.4.5). Hugo Pipes processes SCSS, JavaScript, and images:

**CSS Processing** (`themes/ibuildwithai/assets/scss/` → `/public/scss/styles.min.css`):
- SCSS compilation
- CSS minification
- Autoprefixing
- Asset fingerprinting for cache busting
- 9 SCSS files in modular architecture

**JavaScript Processing** (`themes/ibuildwithai/assets/js/` → `/public/js/[filename].min.js`):
- JavaScript minification
- Asset fingerprinting for cache busting
- Conditional loading (only when needed)
- 5 JavaScript files for different components

**Image Processing** (`themes/ibuildwithai/assets/images/` → `/public/images/[filename].[hash].[ext]`):
- Asset fingerprinting for cache busting
- Error handling for missing images
- Lazy loading attributes
- 67 images organized by category (blog, podcast, presentations, seo, people, icons)
- Consistent asset pipeline with SCSS and JavaScript

**Build Performance (v1.4.4-v1.4.5):**
- Asset consolidation: 37% improvement from images (v1.4.4)
- Full consolidation: 3% additional improvement from JS/SCSS (v1.4.5)
- Combined total: 54% build improvement (69ms → 32ms)
- Single-location asset management improves maintainability

## Development Workflow

### Multi-Repository Architecture (v1.2.2+) with Consolidated Assets (v1.4.4-v1.4.5)

1. **Content Creation**:
   - Blog/Presentations: Add new `.md` files to `/content/blog/` or `/content/presentations/`
   - Podcasts: Add new `.md` files to `/content/podcast/`
   - Apps: Create page bundles in `/content/apps/app-name/` with `index.md` + images
2. **Images**:
   - App content: Add to app bundles (`thumbnail.jpg` and `photogallery/image01.jpg`)
   - Theme images: Add to `themes/ibuildwithai/assets/images/` (organized by category)
3. **Styling**: Modify SCSS files in `themes/ibuildwithai/assets/scss/` (not root assets/)
4. **JavaScript**: Modify JS files in `themes/ibuildwithai/assets/js/` (not root assets/)
5. **Templates**: Update Hugo templates in `themes/ibuildwithai/layouts/`
6. **Development Testing**: Run `hugo server --environment local`
7. **Staging Deployment**: Push to `dev` branch → GitHub Actions → `icodewithai-next` repository → `next.icodewith.ai`
8. **Production Deployment**: Push to `main` branch → GitHub Actions → `icodewithai-prod` repository → `www.icodewith.ai`

**Important:** All theme assets are now in `themes/ibuildwithai/assets/` - the root `assets/` folder no longer exists.

### Repository Architecture
- **Source Repository**: `icodewith-ai/icodewithai-code` (private) - Contains Hugo source code, content, and themes
- **Deployment Repositories**: 
  - `icodewithai-prod`: Production deployment (www.icodewith.ai)
  - `icodewithai-next`: Staging deployment (next.icodewith.ai)
- **GitHub Actions**: Automatically deploy to appropriate repository based on branch

## Design System Architecture

The SCSS system follows a structured approach:
- **Location**: All SCSS in `themes/ibuildwithai/assets/scss/` (consolidated v1.4.5)
- **Variables**: All design tokens centralized in `_variables.scss`
- **Components**: Reusable UI patterns with consistent styling
- **Utilities**: Rapid development classes for spacing, typography, layout
- **Responsive**: Mobile-first design with consistent breakpoints
- **No Hardcoded Values**: All dimensions, colors, spacing use variables

## Asset Consolidation Benefits (v1.4.4-v1.4.5)

**Organization:**
- Single location for all theme assets: `themes/ibuildwithai/assets/`
- 67 images organized by category (blog, podcast, presentations, seo, people, icons)
- 9 SCSS files in modular architecture
- 5 JavaScript files for different components

**Performance:**
- 54% build improvement (69ms → 32ms combined)
- Faster Hugo resource lookups
- Reduced path complexity
- Simplified deployment

**Maintainability:**
- Easier to locate all theme assets
- Consistent file organization
- Better separation from content
- Clearer project structure

This architecture ensures maintainability, consistency, and scalability as the site grows.