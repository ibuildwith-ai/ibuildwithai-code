# Walkthrough - v1.8.0-newsletter-page

This version introduces a dedicated newsletter signup page with integration to Resend (for notifications) and Mailchimp (for list management).

## Changes

### Frontend
1.  **New Layout**: Created `themes/ibuildwithai/layouts/newsletter/single.html` based on the contact form layout.
2.  **New Content**: Created `content/newsletter.md` to serve the page at `/newsletter`.
3.  **New Script**: Created `themes/ibuildwithai/assets/js/newsletter-form.js` to handle form validation and submission.
4.  **Navigation**: Updated Header and Footer to include a "Newsletter" link under the "About" section.

### Backend
1.  **New Function**: Created `backend/netlify/functions/newsletter-signup.js`.
    *   Validates First Name, Last Name, and Email.
    *   Sends an email notification to the site owner via Resend.
    *   Adds the subscriber to a Mailchimp list.
    *   Handles rate limiting (max 5 requests per hour per IP).
2.  **Dependencies**: Added `@mailchimp/mailchimp_marketing` to `backend/package.json`.

### Documentation
1.  **README.md**: Updated with required Environment Variables for Mailchimp and Resend.

## Verification Results

### Automated Tests
*   N/A (No automated tests for this feature yet).

### Manual Verification
1.  **Page Rendering**: Verified that `/newsletter` renders correctly with the new layout.
2.  **Navigation**: Verified "Newsletter" link appears in Header and Footer under "About".
3.  **Form Validation**: Verified client-side validation for empty fields and invalid email formats.
4.  **Submission Handling**: The form uses the same pattern as the contact form - it POSTs to the production backend URL, allowing local testing once deployed.

## Next Steps
1.  **Deploy Backend**: Push changes to GitHub to deploy the new Netlify Function.
2.  **Configure Netlify**: Set the following Environment Variables in Netlify Site Settings:
    *   `MAILCHIMP_API_KEY`
    *   `MAILCHIMP_SERVER_PREFIX`
    *   `MAILCHIMP_LIST_ID`
    *   (Ensure `RESEND_API_KEY` and `RECIPIENT_EMAIL` are already set).
3.  **Test Locally**: Once deployed, you can test the full flow locally at `http://localhost:1313/newsletter/`.
4.  **Test in Production**: Verify the full flow (Email + Mailchimp) on the live site.
