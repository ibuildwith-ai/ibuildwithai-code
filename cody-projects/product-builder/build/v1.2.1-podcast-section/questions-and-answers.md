# v1.2.1 Podcast Section - Questions & Answers

## Claude's Questions

After reviewing the design system in `assets/scss/`, I have a few questions to ensure I implement the podcast section correctly:

### 1. Card Component Consistency
I see you have standardized card components (`.app-card`, `.blog-post-card`) in your design system. Should I:
- Create a new `.podcast-card` component following the same pattern?
- Use existing card styling and extend it for podcast-specific needs?
- Follow the same hover effects (lift animation, border color change)?

> Yes please.  Follow the same standard.

### 2. Grid Layout for Episodes
Looking at your grid systems (`.apps-grid`, `.blog-posts`), should the podcast episodes use:
- The same `repeat(auto-fit, minmax($card-min-width, 1fr))` pattern?
- A different grid approach for the different sections (Upcoming, Latest 3, All Episodes)?

> I think so. Basically, Upcoming and Latest 3 section will show 1 row with 3 episodes. All Episodes will show 3 columns, but all the episodes, so muliple rows.   So follow what you think is the correct way of doing it, but I want to not duplicate code.  So reuse reuse reuse. :-) 

### 3. Button Styling for Episode Actions
I notice you have `.btn-primary` and `.btn-secondary` standardized. For the episode links:
- Should "Learn More" buttons use `.btn-secondary`?
- Should "Listen" buttons use `.btn-primary`?
- Or should these be styled as regular links with your link system?

> They should be relgular links, in the same style as "learn more ->" in the Presentations or Apps list.

### 4. Section Headings
You have section heading styles (`.section h2`). Should I:
- Follow the same pattern for podcast section headings?
- Use the same color (`$primary-500`) and spacing (`$spacing-xl` margin-bottom)?

> Yes.  Should be similar to the other sections (presnetations, blog, apps)

### 5. Typography Consistency
For episode descriptions and content, should I use:
- The same font sizes and line heights as blog posts?
- The same color scheme (`$neutral-400` for secondary text)?

> For now yes, and then after I see it, we'll see.

### 6. Responsive Behavior
Looking at your mobile-only breakpoints, should the podcast sections:
- Stack vertically on mobile like your other grids?
- Use the same container padding adjustments?

> I'll leave this up to you.  Just follow the same consistent standards as the other sections.

### 7. Episode Image Aspect Ratio
The requirements mention 1:1 aspect ratio for episode images. Should I:
- Create a specific CSS class for this constraint?
- Use similar image handling as your existing components?

> Again, I'll leave it up to you, but I don't duplicate code.  So if we have something that will already work, use it.  Otherwise create it.

### 8. Spotify Embed Styling
For the Spotify embed on episode detail pages, do you have:
- Preferred styling for embedded content?
- Container/wrapper requirements?
- Responsive behavior expectations?

> I'm not sure yet how spotify will work (the embedding), so maybe we put a place holder for now that says "Spotify Placeholder here" and then once I have that, we can iterate through that?

### 9. Podcast Main Page Static Content
For the static content on the podcast main page (podcast name, image, description), should I:
- Create a hero-style section similar to other pages?
- Use a simple header section with the podcast branding?
- Where should the main podcast image be positioned relative to the name and description?

> If you look at the /bio/ page, that tops section, where you have my image on the right, the bio on the left and the header on the top, that's how it should look like.  Then below, the three sections.

### 10. Episode Meta Information Display
For episode cards, should I display meta information like:
- Publication date in the same style as blog post meta (`.post-meta`)?
- Host and guest information - how should this be formatted?
- Should guest names be clickable/linked or just displayed as text?

> I think Title, date, short description and link.  Like the other sections.

### 11. Episode Content Structure
For individual episode pages, should I:
- Follow the same layout as blog single pages (`.blog-single` class)?
- Use the same content width (`$blog-content-max-width`)?
- Include a similar back link section at the bottom?

> That sounds great.  But Right below the line (after the date), we would have the embed of the sound file.   Then the full markdown summary.

### 12. Home Page Integration Styling
For the "Latest 3 Episodes" section on the home page, should it:
- Use the same section styling as "Latest Posts" and "Latest Presentations"?
- Have its own distinct section heading or follow the existing pattern?

> Same style as the other sections.

** NOTE ** Please, for home page, if there are no podcast episodes yet, don't show the section.  For the list, under each section (upcoming, latest, all), if there are no episodes in each of them, then don't display that section.  If no sections show, go ahead and post a "episodes coming soon" (or something similar).

