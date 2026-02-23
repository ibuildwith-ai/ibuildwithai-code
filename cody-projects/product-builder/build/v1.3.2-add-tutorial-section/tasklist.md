# Release Tasklist – **v1.3.2 Add Tutorial Section**
This document outlines all the tasks to work on to delivery this particular version, grouped by phases.

| Status |      |
|--------|------|
| 🔴 | Not Started |
| 🟡 | In Progress |
| 🟢 | Completed |

## **Phase 1: Core Structure Setup**

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| T001 | Create tutorials archetype | Create `archetypes/tutorials.md` based on `podcast.md` but remove `audio_id` and guest fields, rename `host` to `presenter` | None | 🟢 Completed | AGENT |
| T002 | Create content directory | Create `content/tutorials/` directory structure | None | 🟢 Completed | AGENT |
| T003 | Update navigation config | Change tutorials URL in `config/_default/config.toml` from YouTube to `/tutorials/` | None | 🟢 Completed | AGENT |

## **Phase 2: Layout Templates**

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| T004 | Create tutorials list layout | Create `themes/icodewithai/layouts/tutorials/list.html` based on podcast list but with 2-card grid layout | T001, T002 | 🟢 Completed | AGENT |
| T005 | Create tutorials single layout | Create `themes/icodewithai/layouts/tutorials/single.html` based on podcast single, remove audio embed and guest section, rename host to "About the Presenter" | T001, T002 | 🟢 Completed | AGENT |

## **Phase 3: SEO Configuration**

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| T006 | Create SEO directory structure | Create `data/seo/content-types/tutorials/` with `listpage.yaml` and `entries/` directory | None | 🟢 Completed | AGENT |
| T007 | Configure list page SEO | Create SEO metadata for tutorials list page following existing patterns | T006 | 🟢 Completed | AGENT |

## **Phase 4: Content Creation & Testing**

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| T008 | Create sample tutorials | Create sample tutorial content with and without video_id for testing (1280x720 images stored in `assets/images/tutorials/` using Hugo pipes) | T001, T002, T004, T005 | 🟢 Completed | AGENT |
| T009 | Test upcoming/published sorting | Verify upcoming tutorials sort by date ASC, published by date DESC | T008 | 🔴 Not Started | AGENT |
| T010 | Test responsive layout | Verify 2-card grid works properly on mobile and desktop | T004, T008 | 🔴 Not Started | AGENT |
| T011 | Test image fallback | Verify image displays correctly when no video_id is provided | T005, T008 | 🔴 Not Started | AGENT |

## **Phase 5: Final Validation**

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| T012 | Verify navigation integration | Test that tutorials menu item correctly navigates to `/tutorials/` | T003, T004 | 🔴 Not Started | AGENT |
| T013 | SEO validation | Ensure SEO metadata is properly applied to tutorials pages | T007 | 🔴 Not Started | AGENT |
| T014 | Cross-browser testing | Test tutorials section functionality across different browsers | All previous | 🔴 Not Started | AGENT |

