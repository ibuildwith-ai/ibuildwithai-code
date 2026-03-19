# Contact Form Implementation Plan

## Overview
Create a client-side contact form page for the iCodeWith.ai Hugo website that matches the provided design mockup, includes client-side validation, CAPTCHA, and success messaging.

## Technical Approach

### 1. Page Structure
- Create Hugo content file: `content/contact.md`
- Create custom layout: `themes/icodewithai/layouts/contact.html`
- Create SEO data file: `data/seo/single-pages/contact.yaml`
- Follow existing site patterns (hero section + form section)

### 2. Form Fields (Based on Design)
- **First Name** (required) - text input
- **Last Name** (required) - text input  
- **Email Address** (required) - email input with validation
- **Reason for contacting us** - dropdown/select (will need options defined)
- **Message** (required) - textarea
- **CAPTCHA** - integration (service TBD)
- **Submit button** - "Send Message" styling

### 3. Client-Side Validation
- Use JavaScript for real-time validation (onBlur) with submit fallback
- Configurable error messages via variables at top of page
- Validation rules:
  - Required field checks
  - Email format validation
  - Minimum message length
  - CAPTCHA completion
- Error display below each field (matching design)
- Validation triggers: onBlur for individual fields + onSubmit as backup

### 4. Responsive Design
- Follow existing site patterns using `$breakpoint-tablet` (1050px)
- Two-column layout on desktop (First Name | Last Name)
- Single column on tablet and below
- Maintain existing site styling conventions

### 5. Form Submission Flow
1. Validate all fields on submit
2. If valid, hide form content (not header/description)
3. Show configurable thank you message
4. No actual data submission (frontend only)
5. User must refresh page to submit another message

### 6. Styling Integration
- Use existing SCSS variables and mixins from `assets/scss/_variables.scss` and `_mixins.scss`
- Add contact form styles to `assets/scss/_components.scss` (following existing pattern)
- Follow site's dark theme and color scheme - NO hardcoded values
- All new CSS values must use existing SCSS variables or extend them in `_variables.scss`
- Integrate with existing card/form styling patterns
- Use site's button and input styling

### 7. JavaScript Architecture
- Create dedicated contact form JS file: `assets/js/contact-form.js` (following existing pattern)
- Configure error messages and success message as variables
- Modular validation functions
- Clean separation of concerns
- Follow existing JS patterns from `assets/js/mobile-menu.js` and `nav-dropdown.js`

## Implementation Steps

1. **Setup Page Structure**
   - Create content/contact.md (accessible at /contact)
   - Create themes/icodewithai/layouts/contact.html
   - Create data/seo/single-pages/contact.yaml
   - Add "Contact" links to header and footer navigation (desktop + mobile)
   - Implement basic layout with hero section

2. **Build Form HTML**
   - Create form structure matching design
   - Add all required form fields
   - Include CAPTCHA placeholder

3. **Implement Styling**
   - Add contact form styles to `assets/scss/_components.scss`
   - Use only existing SCSS variables from `_variables.scss` (no hardcoded values)
   - Add new variables to `_variables.scss` if needed
   - Ensure responsive design works using existing breakpoint mixins
   - Match design mockup styling

4. **Add JavaScript Functionality**
   - Create `assets/js/contact-form.js` following existing patterns
   - Create form validation logic
   - Implement error messaging system
   - Add form submission handling
   - Configure success message display
   - Integrate with Hugo's asset pipeline (minification, fingerprinting)

5. **CAPTCHA Integration**
   - Integrate chosen CAPTCHA service
   - Add validation to submission flow

6. **Testing & Refinement**
   - Test all validation scenarios
   - Verify responsive behavior
   - Ensure accessibility compliance

## Configuration Variables (Top of Page)
```javascript
const CONFIG = {
  errorMessages: {
    firstName: "First name is required",
    lastName: "Last name is required", 
    email: "Please enter a valid email address",
    reason: "Please select a reason for contacting us",
    message: "Message is required",
    captcha: "Please complete the CAPTCHA"
  },
  successMessage: "We'll get back to you within 24 hours.",
  reasonOptions: [
    // Will be configured later - make easily configurable
    "General Inquiry", // placeholder
    "Support Request", // placeholder  
    "Other" // placeholder
  ]
};
```

## Dependencies
- Existing Hugo theme and SCSS framework
- Google reCAPTCHA v3 (recommended for better UX)
- No additional libraries needed - vanilla JavaScript approach

## Considerations
- Page will integrate seamlessly with existing site navigation
- Maintains site's performance standards (no heavy frameworks)
- Follows established code conventions and patterns
- Accessible and SEO-friendly Hugo structure