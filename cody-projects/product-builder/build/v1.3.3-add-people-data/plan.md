# Plan: Add People Data Structure for Podcast System

## Overview
Migrate podcast host and guest information from config.toml and direct frontmatter to a centralized JSON-based people data system. Each person gets their own JSON file with standardized information that can be referenced across the site.

## Current State Analysis
- Podcast host info stored in `config.toml` (podcast_host_* parameters)
- Guest info directly in podcast frontmatter as strings
- Images stored in `themes/icodewithai/assets/images/people/`
- New people data structure: `data/people/[fullname].json`
- Podcast episodes now reference people by JSON filename: `host = "marcelo-lewin.json"`

## Requirements
1. **List Page**: Display guest as "with [fullName], [title] @ [company]"
2. **Single Page**: Keep same layout/format, pull data from JSON instead of config
3. **Remove**: All podcast_host_* parameters from config.toml
4. **Maintain**: Existing visual design and functionality
5. **Load**: JSON data efficiently using Hugo data loading

## Implementation Tasks

### 1. Update Podcast List Template
- **File**: `themes/icodewithai/layouts/podcast/list.html`
- **Changes**:
  - Load guest data from JSON using `.Site.Data.people`
  - Update display format to "with [fullName], [title] @ [company]"
  - Handle cases where guest field exists but JSON might not

### 2. Update Podcast Single Template  
- **File**: `themes/icodewithai/layouts/podcast/single.html`
- **Changes**:
  - Replace config.toml host data loading with JSON data loading
  - Load guest data from JSON instead of old frontmatter fields
  - Update image paths to use `images/people/` directory
  - Keep existing "About the Guest" and "About the Host" sections with same visual layout
  - **Mapping for both Host and Guest sections**:
    - **Image**: `[image]` from JSON
    - **Name/Title**: `[fullName], [title] @ [company]` 
    - **Description**: `[bio]`
    - **Learn More Link**: `[learnMoreLink]`

### 3. Remove Config.toml References
- **File**: `config/_default/config.toml`
- **Changes**:
  - Remove `podcast_host_details`
  - Remove `podcast_host_description` 
  - Remove `podcast_host_learn_more_link`
  - Remove `podcast_host_image`

### 4. Data Loading Strategy
- Use Hugo's built-in data loading: `index .Site.Data.people "filename"`
- Remove `.json` extension when referencing (Hugo handles this automatically)
- JSON structure provides: `fullName`, `firstName`, `lastName`, `title`, `company`, `bio`, `learnMoreLink`, `image`

## JSON Data Structure (Reference)
```json
{
    "fullName": "Debbie O'Brien",
    "firstName": "Debbie", 
    "lastName": "O'Brien",
    "title": "Principal Technical Program Manager",
    "company": "Microsoft",
    "bio": "Description of person...",
    "learnMoreLink": "https://example.com",
    "image": "images/people/debbie-o-brien.png"
}
```

## Files to Modify

### Templates
- `themes/icodewithai/layouts/podcast/list.html`
- `themes/icodewithai/layouts/podcast/single.html`

### Configuration  
- `config/_default/config.toml` (remove podcast_host_* params)

## Testing Requirements
- Verify list page shows correct guest format
- Verify single pages load host and guest data correctly
- Verify images display from new `images/people/` path
- Confirm no broken references to old config parameters

## Future Considerations (Notes Only)
- **Tutorials**: Could migrate `presenter` field to use people data
- **Presentations**: Could migrate `presenters` field to use people data
- These will be handled in future iterations

## Success Criteria
- [ ] Podcast list shows guest info in format: "with [fullName], [title] @ [company]"
- [ ] Podcast single pages display host and guest sections using JSON data
- [ ] All references to config.toml podcast_host_* parameters removed
- [ ] Images load correctly from `assets/images/people/` directory
- [ ] No build errors or broken references
- [ ] Visual design and layout unchanged