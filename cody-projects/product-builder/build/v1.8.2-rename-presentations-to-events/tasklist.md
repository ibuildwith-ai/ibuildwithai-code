# Version Tasklist – v1.8.2-rename-presentations-to-events
This document outlines all the tasks to work on to delivery this particular version, grouped by phases.

| Status |      |
|--------|------|
| 🔴 | Not Started |
| 🟡 | In Progress |
| 🟢 | Completed |


## Phase 1: Directory Structure Rename

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 1.1 | Rename content directory | Rename `content/presentations/` to `content/events/` | None | 🟢 Completed | AGENT |
| 1.2 | Rename layouts directory | Rename `themes/ibuildwithai/layouts/presentations/` to `themes/ibuildwithai/layouts/events/` | None | 🟢 Completed | AGENT |
| 1.3 | Rename images directory | Rename `themes/ibuildwithai/assets/images/presentations/` to `themes/ibuildwithai/assets/images/events/` | None | 🟢 Completed | AGENT |
| 1.4 | Rename SEO images directory | Rename `themes/ibuildwithai/assets/images/seo/content-types/presentations/` to `themes/ibuildwithai/assets/images/seo/content-types/events/` | None | 🟢 Completed | AGENT |
| 1.5 | Rename SEO data directory | Rename `data/seo/content-types/presentations/` to `data/seo/content-types/events/` | None | 🟢 Completed | AGENT |
| 1.6 | Rename archetype file | Rename `archetypes/presentations.md` to `archetypes/events.md` | None | 🟢 Completed | AGENT |


## Phase 2: Template File Updates

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 2.1 | Update events single.html | Update `themes/ibuildwithai/layouts/events/single.html` with "event" terminology | 1.2 | 🟢 Completed | AGENT |
| 2.2 | Update events list.html | Update `themes/ibuildwithai/layouts/events/list.html` with "event" terminology | 1.2 | 🟢 Completed | AGENT |
| 2.3 | Update home page | Update `themes/ibuildwithai/layouts/index.html` events section references | None | 🟢 Completed | AGENT |
| 2.4 | Update header partial | Update `themes/ibuildwithai/layouts/partials/header.html` navigation link | None | 🟢 Completed | AGENT |
| 2.5 | Update footer partial | Update `themes/ibuildwithai/layouts/partials/footer.html` navigation link | None | 🟢 Completed | AGENT |


## Phase 3: CSS and Configuration Updates

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 3.1 | Update CSS classes | Update `themes/ibuildwithai/assets/scss/_components.scss` to rename `.presentation-*` to `.event-*` | None | 🟢 Completed | AGENT |
| 3.2 | Update config.toml | Update `config/_default/config.toml` presentations parameter to events | None | 🟢 Completed | AGENT |


## Phase 4: Automation and Documentation Updates

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 4.1 | Update create-content.sh | Update `automations/create-content.sh` VALID_TYPES array and references | None | 🟢 Completed | AGENT |
| 4.2 | Update components.md | Update `.cody/project/library/docs/components.md` with events references | None | 🟢 Completed | AGENT |
| 4.3 | Update content-management.md | Update `.cody/project/library/docs/content-management.md` with events references | None | 🟢 Completed | AGENT |


## Phase 5: Testing and Validation

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 5.1 | Test Hugo build | Verify Hugo builds without errors | 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2 | 🟢 Completed | USER |
| 5.2 | Test events list page | Verify events list page renders correctly with all sections (upcoming, on-demand, completed) | 5.1 | 🟢 Completed | USER |
| 5.3 | Test events single page | Verify individual event pages render correctly with YouTube embeds for on-demand | 5.1 | 🟢 Completed | USER |
| 5.4 | Test navigation links | Verify header and footer navigation links work correctly | 5.1 | 🟢 Completed | USER |
| 5.5 | Test home page | Verify events section displays correctly on home page | 5.1 | 🟢 Completed | USER |
| 5.6 | Test URL structure | Verify URLs changed from `/presentations/` to `/events/` | 5.1 | 🟢 Completed | USER |
| 5.7 | Test content creation | Test `./automations/create-content.sh events "Test Event"` creates content correctly | 4.1 | 🟢 Completed | USER |
| 5.8 | Test responsive design | Verify events pages work on mobile, tablet, and desktop | 5.1, 5.2, 5.3 | 🟢 Completed | USER |


## Phase 6: Documentation and Cleanup

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 6.1 | Update feature backlog | Update feature-backlog.md status to completed | 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 5.7, 5.8 | 🟢 Completed | AGENT |
| 6.2 | Create retrospective | Create retrospective.md document | 6.1 | 🟢 Completed | AGENT |
| 6.3 | Update release notes | Update release-notes.md with v1.8.2 details | 6.2 | 🟢 Completed | AGENT |


## Summary Statistics
- **Total Tasks**: 24
- **Phases**: 6
- **Files to Rename**: 6 directories
- **Files to Update**: 11 files
- **Testing Tasks**: 8
