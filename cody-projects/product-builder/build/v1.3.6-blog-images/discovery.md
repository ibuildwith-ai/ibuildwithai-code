I want to add images to my blog @list.html and @single.html.

I already updated the /archetypes/blog.md frontmatter field to include the image = "" field.

The path I enter in the image field will be "/images/blog/filename"  Which points to /themes/icodewithai/assets/images/blog

If the field is empty (or not included), then we don't show any image in the list or blog article.

I also updated all the entries in /content/blog/ to include the fields.

I also added a new folder in /themes/icodewithai/assets/images/blog and added one image in there already for the "how-good-at-coding-do-you-need-to-be-to-vibe-code.md" entry.

In the list.html, the image should be displayed above the title in the blog entry card. 

In the single.html, the image should be displayed below the horizontal line (after the published date).  But only if the "displayImageInline" frontmatter field is set to true (if it's false or does not exist, do not display anything).  Also, even if it's set to true, but image="" is empty or does not exist, do not list it.

The image must be responsive and work with the current system I have in place (review /assets/scss if needed)

Please ask questions below here if you have any.  DO NOT START CODING until I tell you to do so.  After this, we'll need a plan.md created in the same location as this file.


========= YOUR QUESTIONS ================

1. **Image processing approach**: Should I use Hugo Pipes `resources.Get` with fingerprinting for the images (for cache busting and optimization), or do you prefer a simpler approach without processing?

> Should follow the same as the podcast.

2. **Fallback behavior**: When an image path is specified but the actual file doesn't exist in `/themes/icodewithai/assets/images/blog/`, should I:
   - Show nothing (graceful degradation)
   - Show a placeholder/default image
   - Show an error message

> Show nothing.

3. **Image sizing/aspect ratios**: Are there any specific constraints for:
   - **List view**: Maximum dimensions or aspect ratio for blog card images?
   - **Single view**: Maximum width/height or should it span the full content width?

> For list view, it should be the width of the card.
> For single view, it should be the width of the canvas the entry is in.
> Both should be 100% reponsive.

4. **Alt text**: Should the alt text be:
   - The blog post title
   - A custom frontmatter field (like `image_alt`)
   - The filename
   - Something else?
> Blog post title

5. **CSS classes**: Do you want me to use specific CSS classes for the image containers (like `blog-card-image`, `blog-single-image`) so you can style them separately, or integrate with existing CSS patterns?

> Check the CSS.  Do not create anythign new, unless you have to.  If you do, make sure you don't hard code values (we have a variables file in there)

6. **Responsive behavior**: Should the images:
   - Scale proportionally on mobile
   - Have different sizes/crops for mobile vs desktop
   - Follow the existing responsive patterns in your SCSS

> We have a table breakpoint.  Otherwise, it should be responsive as the user minimizes the screen.