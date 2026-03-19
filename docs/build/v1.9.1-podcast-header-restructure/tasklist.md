# Version Tasklist – v1.9.1-podcast-header-restructure
This document outlines all the tasks to work on to delivery this particular version, grouped by phases.

| Status |      |
|--------|------|
| 🔴 | Not Started |
| 🟡 | In Progress |
| 🟢 | Completed |


## Phase 1: Template Restructuring

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 1.1 | Restructure podcast template header | Wrap header elements in `.blog-header-wrapper` container with CSS Grid structure | None | 🟢 Completed | AGENT |
| 1.2 | Configure image column | Move podcast episode image into `.blog-header-image` div with proper image path logic | 1.1 | 🟢 Completed | AGENT |
| 1.3 | Configure content column | Reorganize podcast metadata (PODCAST label, title, guest info, date/time, platform icons) into `.blog-header-content` div | 1.1 | 🟢 Completed | AGENT |
| 1.4 | Add full-width divider | Insert `.blog-header-divider` element spanning both columns using grid-column: 1 / -1 | 1.1 | 🟢 Completed | AGENT |
| 1.5 | Position audio embed | Move Spotify audio embed section below header divider (conditional on audio_id and status != "upcoming") | 1.4 | 🟢 Completed | AGENT |
| 1.6 | Position reminder widget | Ensure reminder widget displays below header for upcoming episodes (status = "upcoming") | 1.4 | 🟢 Completed | AGENT |


## Phase 2: Testing and Validation

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 2.1 | Desktop layout testing | Test two-column layout at 1050px+ width, verify 30/70 split, image scaling, metadata alignment | 1.6 | 🟢 Completed | USER |
| 2.2 | Mobile layout testing | Verify stacked layout at <1050px width, guest image hidden on mobile | 1.6 | 🟢 Completed | USER |
| 2.3 | Guest info testing | Verify "A conversation with..." guest info displays correctly in right column | 1.3 | 🟢 Completed | USER |
| 2.4 | Platform icons testing | Test Apple Podcast and Spotify icons display inline/horizontal with correct links | 1.3 | 🟢 Completed | USER |
| 2.5 | Audio embed testing | Verify Spotify audio embed displays below header for published episodes with audio_id | 1.5 | 🟢 Completed | USER |
| 2.6 | Reminder widget testing | Verify reminder widget displays correctly for upcoming episodes (no audio embed shown) | 1.6 | 🟢 Completed | USER |
| 2.7 | Divider spacing testing | Confirm equal spacing above/below divider ($spacing-md) and proper full-width span | 1.4 | 🟢 Completed | USER |
| 2.8 | Guest/host sections testing | Verify guest photo section and host photo section display correctly below all header content | 1.6 | 🟢 Completed | USER |
| 2.9 | Cross-browser testing | Test in Chrome, Firefox, Safari on desktop and mobile devices | 2.1, 2.2 | 🟢 Completed | USER |


## Phase 3: Documentation and Completion

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 3.1 | Update feature backlog | Mark v1.9.1-podcast-header-restructure as completed in feature-backlog.md | 2.9 | 🟢 Completed | AGENT |
| 3.2 | Create retrospective | Generate retrospective.md documenting what went well, improvements, and learnings | 2.9 | 🟢 Completed | AGENT |
| 3.3 | Update release notes | Add v1.9.1 entry to release-notes.md with key features and changes | 3.1 | 🟢 Completed | AGENT |
