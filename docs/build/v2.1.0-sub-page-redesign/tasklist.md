# Version Tasklist – v2.1.0 Sub-Page Redesign
This document outlines all the tasks to work on to deliver this version, grouped by phases.

| Status |      |
|--------|------|
| 🔴 | Not Started |
| 🟡 | In Progress |
| 🟢 | Completed |

---

## Phase 1 — Sub-Page Hero Partial

| ID   | Task | Description | Dependencies | Status | Assigned To |
|------|------|-------------|--------------|--------|-------------|
| 1.1  | Create sub-page-hero partial | Create `partials/sub-page-hero.html` with listing and detail variants, image support (rect + square), label, title, subtitle, and meta lines | None | 🟢 Completed | AGENT |
| 1.2  | Add sub-page hero SCSS | Add `.sub-page-hero` styles to `_components.scss` or new `_sub-page-hero.scss` — gradient glow, grid overlay, two-column detail layout, responsive rules | 1.1 | 🟢 Completed | AGENT |

---

## Phase 2 — Blog Pages

| ID   | Task | Description | Dependencies | Status | Assigned To |
|------|------|-------------|--------------|--------|-------------|
| 2.1  | Update blog list page | Replace `.hero` section with `sub-page-hero` (listing variant), replace card grid with `.hp-blog-grid` 3-column + `.hp-blog-card` | 1.1, 1.2 | 🟢 Completed | AGENT |
| 2.2  | Update blog detail page | Replace `blog-header-wrapper` with `sub-page-hero` (detail variant, rect image), body unchanged | 1.1, 1.2 | 🟢 Completed | AGENT |

---

## Phase 3 — Podcast Pages

| ID   | Task | Description | Dependencies | Status | Assigned To |
|------|------|-------------|--------------|--------|-------------|
| 3.1  | Update podcast list page | Replace `.hero` section with `sub-page-hero` (listing variant), replace card grid with 3-column `.hp-blog-grid` + `.hp-podcast-card` | 1.1, 1.2 | 🟢 Completed | AGENT |
| 3.2  | Update podcast detail page | Replace `blog-header-wrapper` with `sub-page-hero` (detail variant, square image 250×250), body unchanged | 1.1, 1.2 | 🟢 Completed | AGENT |

---

## Phase 4 — Presentations Pages

| ID   | Task | Description | Dependencies | Status | Assigned To |
|------|------|-------------|--------------|--------|-------------|
| 4.1  | Update presentations list page | Replace `.hero` section with `sub-page-hero` (listing variant), replace all three grouping grids with 3-column `.hp-pres-grid` + `.hp-pres-card` | 1.1, 1.2 | 🟢 Completed | AGENT |
| 4.2  | Update presentations detail page | Replace header section with `sub-page-hero` (detail variant, rect image), shared for both on-demand and event layouts, body unchanged | 1.1, 1.2 | 🟢 Completed | AGENT |

---

## Phase 5 — Testing & Cleanup

| ID   | Task | Description | Dependencies | Status | Assigned To |
|------|------|-------------|--------------|--------|-------------|
| 5.1  | Test all pages locally | Verify all 6 pages render correctly, images load, metadata displays, responsive layout works on mobile | 2.1–4.2 | 🟢 Completed | USER |
| 5.2  | Remove unused CSS | Remove old `.hero`, `.blog-posts`, `.event-cards`, `.blog-header-wrapper` styles if no longer used elsewhere | 5.1 | 🟢 Completed | AGENT |
| 5.3  | Final review and sign-off | USER reviews all pages in browser, confirms design matches mockup | 5.2 | 🟢 Completed | USER |

---

## Phase 6 — Remaining Sub-Pages

| ID   | Task | Description | Dependencies | Status | Assigned To |
|------|------|-------------|--------------|--------|-------------|
| 6.1  | Update About page | Replace existing header with `sub-page-hero` (listing variant), review body for any v2 style updates | 1.1, 1.2 | 🟢 Completed | AGENT |
| 6.2  | Update Newsletter page | Replace existing header with `sub-page-hero` (listing variant), review body for any v2 style updates | 1.1, 1.2 | 🟢 Completed | AGENT |
| 6.3  | Update Contact page | Replace existing header with `sub-page-hero` (listing variant), review body for any v2 style updates | 1.1, 1.2 | 🟢 Completed | AGENT |
| 6.4  | Test all 3 pages locally | Verify pages render correctly, responsive layout works on mobile | 6.1–6.3 | 🟢 Completed | USER |
| 6.5  | Final review and sign-off | USER reviews pages in browser, confirms design consistency | 6.4 | 🟢 Completed | USER |
