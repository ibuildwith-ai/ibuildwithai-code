# iBuildWith.ai Website

This is the source code for iBuildWith.ai website.

## Environment Variables

To run the backend functions (Contact Form, Newsletter), you need to set the following environment variables in Netlify (or `.env` for local development):

### General
*   `RECIPIENT_EMAIL`: The email address where notifications should be sent.

### Resend (Email Sending)
*   `RESEND_API_KEY`: API Key for Resend.

### Sender.net (Newsletter)
*   `SENDER_API_TOKEN`: API Access Token for Sender.net.
*   `SENDER_GROUP_ID`: The Group ID where subscribers should be added.