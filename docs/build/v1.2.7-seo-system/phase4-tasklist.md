# Phase 4: Content Type List Pages SEO - Task List

## Overview
Centralize SEO for content type listing pages (apps, blog, podcast, presentations) with compelling descriptions and optimized titles.

## Tasks

### 1. Create Content Type List Page SEO Files
- [ ] Create `/data/seo/content-types/apps/listpage.yaml`
  - [ ] Compelling title focused on AI-powered app development
  - [ ] Description highlighting app showcase and learning resources
  - [ ] Use defaults.social_image with custom alt text
- [ ] Create `/data/seo/content-types/blog/listpage.yaml`
  - [ ] SEO-optimized title for blog listing
  - [ ] Description emphasizing AI development insights and tutorials
  - [ ] Use defaults.social_image with custom alt text
- [ ] Create `/data/seo/content-types/presentations/listpage.yaml`
  - [ ] Title focused on presentations and talks
  - [ ] Description highlighting speaking engagements and knowledge sharing
  - [ ] Use defaults.social_image with custom alt text
- [ ] Create `/data/seo/content-types/podcast/listpage.yaml`
  - [ ] Title optimized for podcast discovery
  - [ ] Description emphasizing AI development discussions and interviews
  - [ ] Use defaults.social_image with custom alt text

### 2. Verify Content Type Detection Logic
- [ ] Test apps list page detection (`/apps/`)
- [ ] Test blog list page detection (`/blog/`)
- [ ] Test presentations list page detection (`/presentations/`)
- [ ] Test podcast list page detection (`/podcast/`)
- [ ] Verify SEO partial correctly maps sections to YAML files
- [ ] Test inheritance works for unspecified fields

### 3. Content SEO Optimization
- [ ] Optimize apps listing title for search visibility
- [ ] Optimize blog listing title for content marketing
- [ ] Optimize presentations listing title for speaking/expertise
- [ ] Optimize podcast listing title for audio content discovery
- [ ] Ensure all descriptions are compelling and action-oriented
- [ ] Include relevant keywords naturally in titles and descriptions

### 4. Test Content Type List Pages
- [ ] Test apps list page shows custom SEO content
- [ ] Test blog list page shows custom SEO content
- [ ] Test presentations list page shows custom SEO content
- [ ] Test podcast list page shows custom SEO content
- [ ] Verify social media meta tags generate correctly
- [ ] Test fallback behavior if YAML files missing

### 5. SEO Content Guidelines Implementation
- [ ] Apps: Focus on showcasing AI-powered development tools and examples
- [ ] Blog: Emphasize educational content, tutorials, and insights
- [ ] Presentations: Highlight speaking expertise and knowledge sharing
- [ ] Podcast: Focus on conversations, interviews, and AI development discussions
- [ ] Ensure consistent branding across all content types

## Success Criteria
- [ ] All content type list pages have custom, optimized SEO
- [ ] Titles are compelling and search-engine friendly
- [ ] Descriptions encourage clicks and engagement
- [ ] Social media sharing shows proper content type branding
- [ ] All pages fall back gracefully to defaults when needed
- [ ] Content type detection works reliably

## Files to be Created/Modified
- **New files:**
  - `/data/seo/content-types/apps/listpage.yaml`
  - `/data/seo/content-types/blog/listpage.yaml`
  - `/data/seo/content-types/presentations/listpage.yaml`
  - `/data/seo/content-types/podcast/listpage.yaml`
- **Modified files:**
  - SEO partial already supports content type detection

## Testing Strategy
1. **Content Type Testing**: Visit each list page and verify custom SEO
2. **Social Media Testing**: Check social media meta tags for each content type
3. **Inheritance Testing**: Verify unspecified fields inherit from defaults
4. **Fallback Testing**: Test behavior with missing YAML files
5. **Search Engine Testing**: Verify titles and descriptions appear correctly

## SEO Content Guidelines

### Apps List Page
- **Focus**: AI-powered app development showcase
- **Keywords**: AI apps, development tools, code examples
- **CTA**: Explore, learn, build

### Blog List Page
- **Focus**: Educational content and tutorials
- **Keywords**: AI development, coding tutorials, tech insights
- **CTA**: Read, learn, implement

### Presentations List Page
- **Focus**: Speaking expertise and knowledge sharing
- **Keywords**: AI presentations, tech talks, speaking
- **CTA**: Watch, learn, invite

### Podcast List Page
- **Focus**: Conversations and interviews
- **Keywords**: AI podcast, development discussions, interviews
- **CTA**: Listen, subscribe, learn

## Phase 4 Deliverables
- Custom SEO for all content type list pages
- Optimized titles and descriptions for each content type
- Consistent use of default social image with custom alt text
- Verified content type detection and inheritance
- Tested list page SEO implementation