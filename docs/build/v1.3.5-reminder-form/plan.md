# V1.3.5 Reminder Form Implementation Plan

## Overview
Create a reusable reminder widget as a Hugo shortcode that can be embedded on any page. Users can sign up to receive email reminders, and both the user and site owner receive confirmation emails.

## Design Reference
- Based on the "Never Miss an Episode" box in `pocast-detail-with-reminder.png`
- Dark background similar to contact form styling
- Simple 3-field form: First Name, Last Name, Email
- Single action button with customizable label

## Implementation Components

### 1. Hugo Shortcode Creation
**File:** `/themes/icodewithai/layouts/shortcodes/reminder.html`

**Usage:**
```hugo
{{< reminder title="Never Miss an Episode" description="Sign up to get a reminder when this episode goes live." buttonLabel="Remind Me" >}}
```

**Features:**
- Accepts 3 parameters: `title`, `description`, `buttonLabel`
- Generates unique form ID for multiple widgets on same page
- Uses existing contact form CSS classes for styling consistency
- Includes JavaScript for form handling

### 2. JavaScript Implementation
**File:** `/assets/js/reminder-form.js`

**Features:**
- Handle form submission for reminder widgets
- Capture current page URL (`window.location.href`)
- Extract page title (`document.title`)
- Submit data to new Netlify function
- Display success/error messages
- Form validation (required fields, email format)

### 3. Backend Netlify Function
**File:** `/backend/netlify/functions/reminder-form.js`

**Features:**
- Based on existing `contact-form.js` structure
- Rate limiting by IP (same as contact form)
- Input validation and sanitization
- Send email to user with BCC to site owner
- CORS headers for frontend requests

**Data Processed:**
- First Name
- Last Name  
- Email
- Page URL (from `window.location.href`)
- Page Title (from `document.title`)
- Timestamp and IP for tracking

**Logging Separation:**
- Console logs prefixed with `[REMINDER-FORM]` for easy filtering
- Separate function name in Netlify logs
- Uses dedicated environment variable for recipient email

### 4. Email Configuration
**User Email (with BCC to owner):**
- **From:** `contact@send.icodewith.ai`
- **To:** User's email
- **BCC:** `marcelo@icodewith.ai`
- **Subject:** "Your iCodeWith.ai reminder is set!"
- **Body:**
  ```
  Hi [First Name],
  
  Your reminder is set! Here are the details:
  Page Name: [Page Title]
  Page URL: [Page URL]
  
  Have a great one!
  ```

### 5. CSS Styling
**Approach:** Reuse existing contact form styles

**Key Classes:**
- `.contact-form` - Main container styling
- `.form-group` - Form field grouping
- `.form-row` - Two-column layout for name fields
- `.btn-primary` - Submit button styling
- `.error-message` - Validation error display

## File Structure
```
/themes/icodewithai/layouts/shortcodes/
├── reminder.html                 # Hugo shortcode template

/assets/js/
├── reminder-form.js             # Frontend JavaScript

/backend/netlify/functions/
├── reminder-form.js             # Serverless function
```

## Implementation Steps

### Phase 1: Backend Infrastructure
1. **Environment Variables Setup:**
   - **Reuse existing `RESEND_API_KEY`** (no additional Resend setup needed)
   - **Add `REMINDER_RECIPIENT_EMAIL`** environment variable in Netlify (set to `marcelo@icodewith.ai`)
     - Contains secret values: ❌ No
     - All scopes: ✅ Yes  
     - Same value for all deploy contexts: ✅ Yes
2. Create `/backend/netlify/functions/reminder-form.js`
3. Implement email sending with Resend API (separate logging context)
4. Add rate limiting and validation  
5. Test function deployment

### Phase 2: Frontend Development  
1. Create Hugo shortcode `/themes/icodewithai/layouts/shortcodes/reminder.html`
2. Develop `/assets/js/reminder-form.js` for form handling
3. Integrate with existing CSS classes
4. Add form validation and success messaging

### Phase 3: Testing & Integration
1. Test shortcode on sample page
2. Verify email delivery to both user and owner
3. Test multiple widgets on same page
4. Validate responsive design
5. Test rate limiting functionality

### Phase 4: Documentation
1. Update any relevant documentation
2. Provide usage examples for the shortcode

## Technical Considerations

### Security
- Rate limiting prevents spam (5 requests per hour per IP)
- Input sanitization and validation
- CORS headers properly configured
- No sensitive data logged

### Responsive Design
- Shortcode inherits responsive behavior from contact form CSS
- Mobile-friendly form layout
- Proper touch targets for mobile devices

### Performance
- Minified JavaScript assets
- Efficient form handling
- Minimal additional CSS overhead

### Accessibility
- Proper form labels and ARIA attributes
- Keyboard navigation support
- Screen reader friendly error messages

## Success Criteria
- [ ] Shortcode can be embedded on any page
- [ ] Form submits successfully to backend
- [ ] User receives confirmation email
- [ ] Site owner receives BCC notification
- [ ] Multiple widgets work on same page
- [ ] Mobile responsive design
- [ ] Rate limiting prevents abuse
- [ ] Form validation provides clear feedback

## Future Enhancements (Out of Scope)
- Email template customization
- Integration with email marketing services
- Analytics tracking for reminder signups
- Admin dashboard for managing reminders