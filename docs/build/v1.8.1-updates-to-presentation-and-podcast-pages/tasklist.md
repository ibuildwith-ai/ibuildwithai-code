# Version Tasklist – v1.8.1-updates-to-presentation-and-podcast-pages
This document outlines all the tasks to work on to deliver this particular version, grouped by phases.

| Status |      |
|--------|------|
| 🔴 | Not Started |
| 🟡 | In Progress |
| 🟢 | Completed |


## Phase 1: Podcast List Page Updates

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 1.1 | Update podcast list conditional logic | Modify `themes/ibuildwithai/layouts/podcast/list.html` to conditionally display "On-Demand" heading only when upcoming episodes exist | None | 🟢 Completed | AGENT |


## Phase 2: Presentations List Page Updates

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 2.1 | Remove description from presentation cards | Remove `<p>{{ .Params.summary }}</p>` from both Upcoming and Completed sections in `themes/ibuildwithai/layouts/presentations/list.html` | None | 🟢 Completed | AGENT |
| 2.2 | Add on-demand status filter | Add `$onDemandPresentations := where .Pages ".Params.status" "on-demand"` variable to presentations list template | None | 🟢 Completed | AGENT |
| 2.3 | Create On-Demand section | Add new "On-Demand" section between Upcoming and Completed sections with proper heading and card layout | 2.2 | 🟢 Completed | AGENT |
| 2.4 | Implement on-demand date sorting | Sort on-demand presentations by `.Params.date_time` in descending order (latest first) | 2.3 | 🟢 Completed | AGENT |
| 2.5 | Verify completed section filter | Verify Completed section already filters for status "completed" only (no changes needed) | None | 🟢 Completed | AGENT |


## Phase 3: Presentations Single Page Updates

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 3.1 | Implement YouTube embed logic | Add conditional check for `status == "on-demand"` and embed YouTube player using `on_demand_url` instead of displaying image in `themes/ibuildwithai/layouts/presentations/single.html` | None | 🟢 Completed | AGENT |
| 3.2 | Extract YouTube video ID | Implement URL parsing logic to extract video ID from various YouTube URL formats (watch?v=, youtu.be/, embed/) | 3.1 | 🟢 Completed | AGENT |
| 3.3 | Create responsive YouTube embed | Build responsive iframe embed using same structure as podcast page (`video-embed-responsive` wrapper) | 3.2 | 🟢 Completed | AGENT |
| 3.4 | Conditionally hide Links section | Hide entire Links section (lines 102-123) when presentation status is "on-demand" | None | 🟢 Completed | AGENT |


## Phase 4: Testing & Verification

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 4.1 | Test podcast page conditional heading | Verify "On-Demand" heading displays/hides correctly based on upcoming episodes | 1.1 | 🟢 Completed | USER |
| 4.2 | Test presentations list page layout | Verify three-section layout (Upcoming, On-Demand, Completed) displays correctly with proper filtering | 2.1, 2.2, 2.3, 2.4, 2.5 | 🟢 Completed | USER |
| 4.3 | Test YouTube embed functionality | Verify YouTube videos embed correctly for on-demand presentations and image is hidden | 3.1, 3.2, 3.3 | 🟢 Completed | USER |
| 4.4 | Test links section conditional display | Verify Links section is hidden for on-demand presentations | 3.4 | 🟢 Completed | USER |
| 4.5 | Test responsive behavior | Test all changes on mobile, tablet, and desktop viewports | 4.1, 4.2, 4.3, 4.4 | 🟢 Completed | USER |
| 4.6 | Build and deploy to staging | Run Hugo build and deploy to staging environment (next.ibuildwith.ai) for final testing | 4.5 | 🟢 Completed | USER |


## Phase 5: Documentation & Deployment

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 5.1 | Update feature backlog | Mark version v1.8.1 as completed in `.cody/project/build/feature-backlog.md` | 4.6 | 🟢 Completed | AGENT |
| 5.2 | Create retrospective document | Generate retrospective documenting lessons learned and future improvements | 5.1 | 🟢 Completed | AGENT |
| 5.3 | Update release notes | Add v1.8.1 entry to `.cody/project/build/release-notes.md` with implementation details | 5.2 | 🟢 Completed | AGENT |
| 5.4 | Git commit changes | Commit all changes with descriptive commit message | 5.3 | 🟢 Completed | USER |
| 5.5 | Deploy to production | Deploy to production environment (www.ibuildwith.ai) after final approval | 5.4 | 🟢 Completed | USER |


## Summary

- **Total Tasks**: 17
- **Phase 1**: 1 task (Podcast updates)
- **Phase 2**: 5 tasks (Presentations list updates)
- **Phase 3**: 4 tasks (Presentations single page updates)
- **Phase 4**: 6 tasks (Testing & verification)
- **Phase 5**: 5 tasks (Documentation & deployment)
