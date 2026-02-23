# Release Tasklist – **v1.3.5 Reminder Form**
This document outlines all the tasks to work on to delivery the reminder widget functionality, grouped by phases.

| Status |      |
|--------|------|
| 🔴 | Not Started |
| 🟡 | In Progress |
| 🟢 | Completed |


## **Phase 1: Backend Infrastructure**

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| P1-1 | Review existing environment variables | Verify `RESEND_API_KEY` and `RECIPIENT_EMAIL` are available | None | 🟢 Completed | AGENT |
| P1-2 | Add new environment variable | Add `REMINDER_ADMIN_EMAIL` in Netlify (set to `marcelo@icodewith.ai`) | None | 🟢 Completed | USER |
| P1-3 | Create reminder Netlify function | Create `/backend/netlify/functions/reminder-form.js` | P1-1 | 🟢 Completed | AGENT |
| P1-4 | Implement email sending | Add Resend email functionality with BCC to site owner | P1-3 | 🟢 Completed | AGENT |
| P1-5 | Add rate limiting | Implement IP-based rate limiting (5 submissions/hour) | P1-3 | 🟢 Completed | AGENT |
| P1-6 | Add form validation | Add server-side form data validation and sanitization | P1-3 | 🟢 Completed | AGENT |
| P1-7 | Add error handling | Implement comprehensive error handling with [REMINDER-FORM] logging | P1-3 | 🟢 Completed | AGENT |
| P1-8 | Test function deployment | Deploy and verify function is accessible | P1-3 | 🟢 Completed | AGENT |

## **Phase 2: Hugo Shortcode Development**

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| P2-1 | Create shortcode template | Create `/themes/icodewithai/layouts/shortcodes/reminder.html` | None | 🟢 Completed | AGENT |
| P2-2 | Implement shortcode parameters | Add support for `title`, `description`, `buttonLabel` parameters | P2-1 | 🟢 Completed | AGENT |
| P2-3 | Add form structure | Create form structure with First Name, Last Name, Email fields | P2-1 | 🟢 Completed | AGENT |
| P2-4 | Generate unique form IDs | Ensure multiple widgets on same page have unique IDs | P2-2 | 🟢 Completed | AGENT |
| P2-5 | Apply contact form styling | Use existing `.contact-form` CSS classes for consistency | P2-3 | 🟢 Completed | AGENT |
| P2-6 | Add success/error messaging | Include containers for success and error message display | P2-3 | 🟢 Completed | AGENT |

## **Phase 3: Frontend JavaScript Development**

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| P3-1 | Create reminder JS file | Create `/assets/js/reminder-form.js` following existing patterns | P2-1 | 🟢 Completed | AGENT |
| P3-2 | Implement form validation | Add client-side validation (required fields, email format) | P3-1 | 🟢 Completed | AGENT |
| P3-3 | Add page data capture | Capture `window.location.href` and `document.title` | P3-1 | 🟢 Completed | AGENT |
| P3-4 | Implement form submission | Add form submission to reminder Netlify function | P3-1, P1-3 | 🟢 Completed | AGENT |
| P3-5 | Add loading states | Add loading spinner/disable button during submission | P3-4 | 🟢 Completed | AGENT |
| P3-6 | Handle server responses | Handle success/error responses from backend | P3-4 | 🟢 Completed | AGENT |
| P3-7 | Support multiple widgets | Ensure JS works with multiple reminder widgets on same page | P3-1, P2-4 | 🟢 Completed | AGENT |
| P3-8 | Integrate with Hugo pipeline | Integrate with Hugo's asset pipeline (minification, fingerprinting) | P3-1 | 🟢 Completed | AGENT |

## **Phase 4: Integration & Testing**

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| P4-1 | Update shortcode with JS | Link reminder-form.js in the shortcode template | P2-1, P3-8 | 🔴 Not Started | AGENT |
| P4-2 | Test single widget | Test shortcode works on a single page | P2-6, P3-6 | 🔴 Not Started | AGENT |
| P4-3 | Test multiple widgets | Test multiple widgets on same page work independently | P3-7, P2-4 | 🔴 Not Started | AGENT |
| P4-4 | Test form validation | Test client-side and server-side validation | P3-2, P1-6 | 🔴 Not Started | AGENT |
| P4-5 | Test email delivery | Verify emails are sent to user and BCC to site owner | P1-4 | 🔴 Not Started | AGENT |
| P4-6 | Test rate limiting | Test rate limiting prevents spam submissions | P1-5 | 🔴 Not Started | AGENT |
| P4-7 | Test responsive design | Test widget works on mobile and desktop | P2-5 | 🔴 Not Started | AGENT |
| P4-8 | Test error handling | Test various error scenarios display correct messages | P1-7, P3-6 | 🔴 Not Started | AGENT |

## **Phase 5: Documentation & Deployment**

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| P5-1 | Create usage documentation | Document how to use the reminder shortcode | P2-2 | 🔴 Not Started | AGENT |
| P5-2 | Test in production | Deploy and test in production environment | P4-2 | 🔴 Not Started | AGENT |
| P5-3 | Monitor function logs | Check Netlify function logs for proper [REMINDER-FORM] prefixes | P5-2 | 🔴 Not Started | AGENT |
| P5-4 | Monitor email deliverability | Check email delivery success rates | P5-2 | 🔴 Not Started | AGENT |
| P5-5 | Create sample implementations | Create example usage for different page types | P5-1 | 🔴 Not Started | AGENT |

## **User Prerequisites (Required Before Starting)**

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| U1 | Verify existing API keys | Confirm `RESEND_API_KEY` and `RECIPIENT_EMAIL` are still active | None | 🔴 Waiting | USER |
| U2 | Add new environment variable | Add `REMINDER_ADMIN_EMAIL=marcelo@icodewith.ai` in Netlify | None | 🔴 Waiting | USER |
| U3 | Confirm environment variable settings | Set: Contains secret values: No, All scopes: Yes, Same value for all deploy contexts: Yes | U2 | 🔴 Waiting | USER |

## **Success Criteria Checklist**

### Shortcode Functionality
- [ ] Shortcode accepts `title`, `description`, `buttonLabel` parameters
- [ ] Shortcode can be embedded on any page type
- [ ] Multiple widgets work independently on same page
- [ ] Form uses consistent styling with site design

### User Experience
- [ ] User fills form (First Name, Last Name, Email) and clicks submit
- [ ] Form validates client-side and server-side
- [ ] Form submits to reminder Netlify function successfully
- [ ] User sees success message within 3 seconds
- [ ] Process completes without errors

### Email Delivery
- [ ] User receives confirmation email within 1 minute
- [ ] Site owner receives BCC copy of same email
- [ ] Email contains: First Name, Page Name, Page URL
- [ ] Email subject: "Your iCodeWith.ai reminder is set!"
- [ ] No emails end up in spam folder

### Backend Functionality
- [ ] Rate limiting prevents spam (5 submissions/hour per IP)
- [ ] Function logs are prefixed with [REMINDER-FORM]
- [ ] Server validation rejects invalid submissions
- [ ] Function executes within reasonable time limits

### Integration
- [ ] JavaScript integrates with Hugo asset pipeline
- [ ] Responsive design works on all devices  
- [ ] Error handling provides user-friendly messages
- [ ] Multiple widgets don't conflict with each other

## **Estimated Timeline**

| Phase | Estimated Duration | Dependencies |
|-------|------------------|-------------|
| Phase 1 | 60 minutes | User environment setup |
| Phase 2 | 45 minutes | Phase 1 complete |
| Phase 3 | 60 minutes | Phase 2 complete |
| Phase 4 | 45 minutes | All previous phases |
| Phase 5 | 30 minutes | Testing complete |
| **Total** | **4 hours** | All user prerequisites met |

## **Email Template Details**

### User Email (with BCC to Site Owner)
- **From:** `contact@send.icodewith.ai`
- **To:** User's email address
- **BCC:** `marcelo@icodewith.ai` (or `REMINDER_ADMIN_EMAIL`)
- **Subject:** `Your iCodeWith.ai reminder is set!`
- **Body:**
```
Hi [First Name],

Your reminder is set! Here are the details:
Page Name: [Page Title from document.title]
Page URL: [Page URL from window.location.href]

Have a great one!
```

## **Shortcode Usage Examples**

### Basic Usage
```hugo
{{< reminder title="Never Miss an Episode" description="Sign up to get a reminder when this episode goes live." buttonLabel="Remind Me" >}}
```

### Podcast Page
```hugo
{{< reminder title="Get Notified" description="Be the first to know when this podcast episode is available." buttonLabel="Notify Me" >}}
```

### App Release
```hugo
{{< reminder title="App Launch Alert" description="Get notified when this app is released." buttonLabel="Alert Me" >}}
```

## **Notes**
- Reuses existing `RESEND_API_KEY` - no additional Resend account setup needed
- All API keys stored securely in Netlify environment variables
- Backend function separate from contact form for clean log separation
- Implementation stays within free tiers of all services
- Widget styling consistent with existing site design patterns
- Supports unlimited widgets per page with unique form handling

## **Future Cleanup Task (After v1.3.5 Complete)**
- **Standardize environment variable naming**: Rename `RECIPIENT_EMAIL` to `CONTACT_ADMIN_EMAIL` to match the new `REMINDER_ADMIN_EMAIL` naming convention
- This will require updating the contact-form.js function to use the new variable name
- Should be done as a separate minor task to avoid disrupting current reminder form development