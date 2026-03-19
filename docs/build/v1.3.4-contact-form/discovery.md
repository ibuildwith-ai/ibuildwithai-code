I want you to create a new page called Contact.   From a design and what fiels to have perspective, please follow the @contactus.png image in the same folder this file is in.

FOr now, I only want the form.  No back end.  We'll focus on that later.

It should check for the required fields using javascript (on the client side).   I want the field errors to be configurable at the top of the page via variables.

I want to have captcha.

When the form is submitted, it should replace the form (not the header and descrition), with a "Thank you.  We'll get back to you within 24 hours.".   

This thank you message sould also be configurable at the top via variable.

It goes without saying, but I'll say it, that this should be responsive following our standards (table breakpoint)

Ask me any questions below if you have any.  Again, we are not focusing right now on sending this information or storing it, just on the form itself and its functionality.  We'll work on the back end after this is done.



===  AI Questions Below ===

1. **CAPTCHA Implementation**: Which CAPTCHA service should I use? Google reCAPTCHA v2, v3, hCaptcha, or a simple custom challenge? Since this is front-end only for now, I'll need to know which service to integrate.

> Whichever you recommend.

2. **"Reason for contacting us" dropdown**: The image shows a dropdown with "Please select a reason". What options should be available in this dropdown? (e.g., General Inquiry, Support, Partnership, Bug Report, etc.)

> I'll add those later.  Just make it so I can add them.

3. **Form validation timing**: Should validation errors appear immediately when a user leaves a field (onBlur), when they start typing (onChange), or only when they try to submit the form?

> Yes, when they leave the field.   There should be a backup when they try to submit just in case?

4. **Error message styling**: Should error messages appear below each field, or would you prefer a different approach? The image shows "Email is required" in red below the email field.

> Below each field, just like the design shows.

5. **URL structure**: Should this be accessible at `/contact` or `/contact-us`? 

> I think /contact should be good, unless the standard is /contact-us.   I'm flexible.

6. **Navigation integration**: Should I add a "Contact" link to the existing navigation menu, or will that be handled separately?

> Oh, yes, Both top (header) and bottom (footer).   Make sure it's added to both the desktop and mobile versions.

7. **Form submission behavior**: After showing the thank you message, should there be a way for users to submit another message, or should they need to refresh the page?

> They should have to refresh the page.