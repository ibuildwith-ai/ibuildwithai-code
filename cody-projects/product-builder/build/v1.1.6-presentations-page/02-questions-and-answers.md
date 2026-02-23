## Questions and Answers

### 1. Date and Time Format
For the "Date and Time" field, what format would you prefer?
- Should it be stored as a single datetime field or separate date and time fields?
- What format should be displayed? (e.g., "June 15, 2024 at 2:00 PM" or "2024-06-15 14:00"?)
- Should we include timezone information?

> Yes, include time zone.  I want to list it as June 15, 2024 at 2:00 PM PST (as an example).

### 2. Presenters Field
For the "Presenters" field:
- Should this be a simple text field (e.g., "Marcelo Lewin, John Doe") or a more structured format?
- Do you want individual presenter profiles/links, or just names?

> I love that you think about structured content.  But for now, just keep it as a simple string field.  Can we have a default in the template?  If so, make me the default "Marcelo Lewin"

### 3. Link More Field
For the "Link More" external presentation page:
- What should the link text be? (e.g., "View Presentation", "Learn More", "Watch Recording"?)
- Should this be the primary call-to-action button similar to how apps have "Live Preview" as primary?

> Learn More

### 4. Content Structure
Looking at the apps structure, I see they have frontmatter fields and then markdown content. For presentations:
- Should presentations have similar detailed content pages with markdown, or just the basic info from frontmatter?
- Do you want a presentation status field (e.g., "upcoming", "completed", "cancelled")?

> I think everything should be frontmatter fields except the description.  The description should be markdown so I can do what I want there.
> Yeah, let's add a status field that displayes "upcoming" or "completed".
> I think we also need a summary field for the list page.  Since there we'll not show the description (markdown freeform).  Make it a frontmatter field.

### 5. Navigation and Sorting
- Should presentations be sorted by date (newest first, or upcoming first)?
- Should the main navigation include a "Presentations" link?
- Any specific URL structure preference? (e.g., `/presentations/presentation-title`)

> Actually, here I think we need to group in the list page.   At the top ,we'll show Upcoming Presentations.  At the bottom (second row with heading), we'll show, completed presentations.   For upcoming presentations, it should be sorted by date, but ASC (So the one that's coming up first).  For Completed Presentations, sort by date, but DESC (the most latest one completed)

### 6. Archive Functionality
- Do you want to show past and future presentations together, or separate them?
- Any filtering capabilities needed (by year, by topic, etc.)?

> No archiving. Just follow #5 how to display the list.  For now, we'll show them all.

### 7. Responsive Considerations
- Should the presentation cards follow the exact same responsive behavior as app cards?
- Any mobile-specific considerations for the date/time display?

> Yes.  Follow the app cards.  I don't think any considerations I can think of for date/time display.

### 8. Single Page
I changed my mind about not have an item page.  I want an item page.  On the list page, you will show the Presentation Title, Summary, Date and a learn more link.  In the detailed page, you will show everything.

### 9. Add it to the home page.
I need you to add a "Latest Presentations" on the home page, below "Latests Posts", in the same style as Latest Posts and Latest Apps.   Feel free to create 2 dummy presentations in /content to test.

### **NEW** 10. Date/Time Storage Format
For the datetime field in frontmatter, what format should I use for storage? 
- Should it be ISO format like "2024-06-15T14:00:00-08:00" (which includes timezone)?
- Or a simpler format like "2024-06-15 14:00 PST"?

> Which do you recommend, I like the simpler format, but should I learn the more standardize one (with timezone)

**RECOMMENDATION:** Use ISO format (`2024-06-15T14:00:00-08:00`) for these reasons:
- Hugo's date functions work best with ISO format
- Future-proofing for API integrations
- Built-in timezone support for accurate sorting
- No parsing ambiguity across systems
- We can still display it as "June 15, 2024 at 2:00 PM PST" in templates

### **NEW** 11. Home Page Latest Presentations
For the "Latest Presentations" section on the home page:
- How many presentations should be displayed? (Latest Posts shows a limited number)
- Should it show upcoming presentations only, or a mix of upcoming and recent completed ones?
- Should it follow the same grouping as the main list page (upcoming vs completed sections)?

> Display 2, just like the other sections.
> You can display the latest 2 presentations, regardless of status.  Just get the latest 2 by date, sort by DESC and show those.
> No grouping, here you just show the latest 2 presentations by date, ignore status.


### **NEW** 12. Navigation Menu
Should I add "Presentations" to the main navigation menu in the header alongside Apps, Blog, etc.?

> Excellent catch!  YOu ar egood!   Yes, please do.   Both to the top navigation and the bottom navigation.  Please add it After Blog.