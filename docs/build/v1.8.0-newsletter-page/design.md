# Version Design Document : v1.8.0-newsletter-page
Technical implementation and design guide for the upcoming version.

## 1. Features Summary
_Overview of features included in this version._

This version introduces a dedicated newsletter signup page (`/newsletter`) to capture user subscriptions.
*   **Newsletter Page**: A new page with a clean, focused layout for signing up.
*   **Signup Form**: A form collecting First Name, Last Name, and Email.
*   **Backend Integration**: A Netlify Function to handle submissions, sending an email notification via Resend and adding the subscriber to a Mailchimp list.
*   **User Feedback**: Immediate "Thank You" message upon successful submission without page reload.

## 2. Technical Architecture Overview
_High-level technical structure that supports all features in this version._

*   **Frontend**:
    *   **Hugo Layout**: A new layout `layouts/newsletter/single.html` based on the existing `contact.html` but tailored for the newsletter.
    *   **Content**: A new content file `content/newsletter/_index.md` to drive the page generation.
    *   **JavaScript**: A new script `assets/js/newsletter-form.js` to handle client-side validation and asynchronous form submission to the Netlify Function.
*   **Backend**:
    *   **Netlify Function**: A new function `netlify/functions/newsletter-signup.js` (or `backend/netlify/functions/newsletter-signup.js` depending on repo structure) to process the POST request.
    *   **Resend API**: Used to send an email notification to the site owner.
    *   **Mailchimp API**: Used to add the subscriber to the specified audience list.

## 3. Implementation Notes
_Shared technical considerations across all features in this version._

*   **Reusability**: The design should closely mirror the Contact page to maintain visual consistency. We can potentially reuse CSS classes from the contact form.
*   **Security**: The Netlify Function must validate input to prevent spam and abuse. Rate limiting (by IP) should be implemented similar to the contact form.
*   **Environment Variables**: The backend function will require:
    *   `RESEND_API_KEY`: For sending notifications (Reusing existing key).
    *   `RECIPIENT_EMAIL`: Where to send notifications (Reusing existing key).
    *   `MAILCHIMP_API_KEY`: For Mailchimp integration (New).
    *   `MAILCHIMP_SERVER_PREFIX`: (e.g., `us1`) For API endpoint construction (New).
    *   `MAILCHIMP_LIST_ID`: The target audience ID (New).

## 4. Other Technical Considerations
_Shared any other technical information that might be relevant to building this version._

*   **Mailchimp API**: We will use the `/lists/{list_id}/members` endpoint. We need to handle cases where the user is already subscribed (e.g., return a friendly "You're already on the list!" message or silently succeed).
*   **Error Handling**: The frontend should gracefully handle network errors or API failures and display a user-friendly error message.

*   **Navigation**: Add "Newsletter" link to the top navigation bar (under "About", above "Contact") and the footer navigation (same location).

## 5. Open Questions
_Unresolved technical or product questions affecting this version._

*   None at this time. Requirements have been clarified.
