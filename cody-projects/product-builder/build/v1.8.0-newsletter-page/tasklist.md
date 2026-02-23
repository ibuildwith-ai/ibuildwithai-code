# Version Tasklist – v1.8.0-newsletter-page
This document outlines all the tasks to work on to delivery this particular version, grouped by phases.

| Status |      |
|--------|------|
| 🔴 | Not Started |
| 🟡 | In Progress |
| 🟢 | Completed |


## Phase 1: Frontend Implementation

| ID  | Task             | Description                             | Dependecies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 1.1 | Create Newsletter Layout | Create `themes/ibuildwithai/layouts/newsletter/single.html` mirroring `contact.html` but tailored for newsletter signup. | None | 🟢 Completed | AGENT |
| 1.2 | Create Newsletter Content | Create `content/newsletter.md` to render the page. | 1.1 | 🟢 Completed | AGENT |
| 1.3 | Create Newsletter JS | Create `themes/ibuildwithai/assets/js/newsletter-form.js` for client-side validation and submission handling. | 1.1 | 🟢 Completed | AGENT |
| 1.4 | Update Navigation | Add "Newsletter" link to Top Nav and Footer Nav (under "About"). | None | 🟢 Completed | AGENT |

## Phase 2: Backend Implementation

| ID  | Task             | Description                             | Dependecies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 2.1 | Create Netlify Function | Create `backend/netlify/functions/newsletter-signup.js` to handle Resend email and Mailchimp API integration. | None | � Completed | AGENT |
| 2.1 | Create Netlify Function | Create `backend/netlify/functions/newsletter-signup.js` to handle Resend email and Mailchimp API integration. | None |  Completed | AGENT |
| 2.2 | Install Dependencies | Ensure `resend` and `mailchimp-marketing` (or `axios`) packages are installed in `backend/package.json`. | None | 🟢 Completed | AGENT |

## Phase 3: Verification & Documentation

| ID  | Task             | Description                             | Dependecies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 3.1 | Verify Local Functionality | Test the form locally (mocking API calls if necessary). | 1.3, 2.1 | 🟢 Completed | AGENT |
| 3.2 | Update Documentation | Update `README.md` or setup docs with new Environment Variable requirements. | None | 🟢 Completed | AGENT |
