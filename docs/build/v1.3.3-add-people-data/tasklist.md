# Release Tasklist – **v1.3.3 Add People Data Structure**
This document outlines all the tasks to work on to delivery this particular version, grouped by phases.

| Status |      |
|--------|------|
| 🔴 | Not Started |
| 🟡 | In Progress |
| 🟢 | Completed |

## **Phase 1: Template Updates**

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| P001 | Update podcast list template | Update `themes/icodewithai/layouts/podcast/list.html` to load guest data from JSON and display as "with [fullName], [title] @ [company]" | None | 🔴 Not Started | AGENT |
| P002 | Update podcast single template | Update `themes/icodewithai/layouts/podcast/single.html` to load host and guest data from JSON files instead of config.toml | None | 🔴 Not Started | AGENT |

## **Phase 2: Configuration Cleanup**

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| P003 | Remove config host parameters | Remove all podcast_host_* parameters from `config/_default/config.toml` | P002 | 🔴 Not Started | AGENT |

## **Phase 3: Testing & Validation**

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| P004 | Test podcast list page | Verify guest info displays correctly in format: "with [fullName], [title] @ [company]" | P001 | 🔴 Not Started | AGENT |
| P005 | Test podcast single pages | Verify host and guest sections load data from JSON files with correct mapping | P002, P003 | 🔴 Not Started | AGENT |
| P006 | Verify image loading | Confirm images load correctly from `assets/images/people/` directory | P002 | 🔴 Not Started | AGENT |
| P007 | Check for broken references | Ensure no broken references to old config parameters remain | P003 | 🔴 Not Started | AGENT |

