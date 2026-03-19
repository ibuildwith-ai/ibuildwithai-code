I want to create a reminder widget I can add to any page I want in my site.  For the design, look at the @pocast-detail-with-reminder.png in the same folder as this file.  Focus only on the box that says "never miss an episode"  That's what we are creating.   Make sure it falls with the same style as our site.   Make sure you check @scss folder to follow all CSS standards in our site.   

I want to create this as an object we can add to any page I want in the future.

For example, it would be great to be able to do this:

<reminder title="" description="" buttonLabel="">

it would then send an email, to the user (their email) and also to me at marcelo@icodewith.ai.  The from would be contact@send.icodewith.ai

Please follow the design of the @contact.html file in themes/icodewithai/layouts

I already have resend as the backend set up for the contact form.   Please review @backend folder to see what we have there.   We would need a new function for for this reminder feature.

The function would send the following to me:

First Name
Last Name
Email
Page it's embedded in (URL): that tells me what they want to be reminded of.

The user would get the same thing.  You can bcc me in the email sent to the user (so only one email is sent).   For the function for netlify, let me configure the from and subject line.  For now,  you can use the contact@icodewith.ai email and for subject, put "Your iCodeWith.ai reminder is set!"

If you have any questions, please put them in here.  Below this line.  If you don't have any questions, that's ok too.  But tell me.  Then we'll move on to creating a plan.md file.

==== Your questions ====

I have a few questions to clarify the implementation:

1. **Hugo Shortcode Implementation**: You mentioned creating this as `<reminder title="" description="" buttonLabel="">` - should this be implemented as a Hugo shortcode? So users could include it in pages like:
   ```
   {{< reminder title="Never Miss an Episode" description="Sign up to get a reminder when this episode goes live." buttonLabel="Remind Me" >}}
   ```

> That's a great idea.  Love that.

2. **Backend Function Naming**: Should I create a new Netlify function called `reminder-form.js` alongside the existing `contact-form.js`?

> If you mean in the /backend/netlify/functions folder, then yes.

3. **Email Content Confirmation**: For the email sent to you, you mentioned including the page URL. Should I capture `window.location.href` from the browser to get the exact page URL where the reminder was embedded?

> WOuld it be the same for both?  I want the actual URL (for example: https://www.icodewith.ai/podcast/is-code-a-thing-of-the-past-in-vibe-coding/)

4. **User Email Content**: For the email sent to the user (with you BCC'd), what should the email content be? Should it be a confirmation like:
   - Subject: "Your iCodeWith.ai reminder is set!"
   - Body: Something like "Hi [First Name], your reminder for [Page Title/URL] has been set. We'll notify you when it's available!"

> Subject is good.
> Body "
> Hi [First Name], 
> Your reminder is set!  Here are the details:
> Page Name: [Title]
> Page URL: [URL]"
> Have a great one!
> "

5. **Styling Consistency**: I see the "Never Miss an Episode" box in the design has a dark background similar to your contact form. Should it use the same `.contact-form` styling classes or should I create new `.reminder-widget` classes?

> I think you can use the same as the contact-form styling.

No other questions - the design and requirements are clear!
