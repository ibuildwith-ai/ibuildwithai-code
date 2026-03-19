# Version Tasklist – v1.9.2-support-no-company-for-people
This document outlines all the tasks to work on to deliver this particular version, grouped by phases.

| Status |      |
|--------|------|
| 🔴 | Not Started |
| 🟡 | In Progress |
| 🟢 | Completed |

## Phase 1: Create Reusable Partial

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 1.1 | Create person-title-company partial | Create `themes/ibuildwithai/layouts/partials/person-title-company.html` with conditional logic for title/company display. Checks for null, empty, and "N/A" (case-insensitive). | None | 🟢 Completed | AGENT |

## Phase 2: Update Templates

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 2.1 | Update podcast list template | Replace 2 inline `[title] @ [company]` patterns in `podcast/list.html` (lines 62, 94) with partial call. Preserve "A conversation with" prefix. | 1.1 | 🟢 Completed | AGENT |
| 2.2 | Update podcast single template | Replace 3 inline patterns in `podcast/single.html` (line 29 header, line 107 guest bio, line 137 host bio) with partial call. | 1.1 | 🟢 Completed | AGENT |
| 2.3 | Update blog single template | Replace 1 inline pattern in `blog/single.html` (line 56 author bio) with partial call. | 1.1 | 🟢 Completed | AGENT |
| 2.4 | Update videos single template | Replace 1 inline pattern in `videos/single.html` (line 92 presenter bio) with partial call. | 1.1 | 🟢 Completed | AGENT |
| 2.5 | Update events single template | Replace 1 inline pattern in `events/single.html` (line 94 presenter bio) with partial call. | 1.1 | 🟢 Completed | AGENT |

## Phase 3: Testing

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 3.1 | Test existing people (title + company) | Run Hugo server and verify all existing people with title and company still display correctly across podcast, blog, events, and videos pages. | 2.1, 2.2, 2.3, 2.4, 2.5 | 🟢 Completed | USER |
| 3.2 | Test missing company | Create or modify a test person JSON with empty/missing company field. Verify display shows name + title only (no " @ "). | 3.1 | 🟢 Completed | USER |
| 3.3 | Test missing title and company | Test with a person JSON that has neither title nor company. Verify display shows name only. | 3.1 | 🟢 Completed | USER |
| 3.4 | Test N/A values | Test with company and/or title set to "N/A", "n/a", "N/a" to verify case-insensitive handling. | 3.1 | 🟢 Completed | USER |
