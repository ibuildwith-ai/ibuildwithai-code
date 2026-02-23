please read all the bottom*.md documents in this folder.   You will learn what we did to update the footer navigation in the previous session.

For the header navitation, the responsivenes is working perfectly, so we shouldn't need to do anything.

This updates focuses on:

1) Reordering the items 
2) Addding some new items
3) Createing a sub-menu (group) for some of the items that activates on hover (in desktop) and touch (in tablet / mobile)
4) Removing the [menu] items completely from the config.toml file (in _default) and just using the [params] listed in the same file for links.

We'll need to make sure sub-menus (groups) work in mobile.

Currently, we have single items in the header menu:

Bio | Apps | Blog | Podcast | Presentations | Contact

The new menu header should look like:

Bio | Apps | Content            | Coding with AI         | Contact
              > Blog                > Podcast
              > Presentations       > Discord
                                    > Meetup

The only groups are "Content" and "Coding with AI".  THose do not link anywhere.  They activate the hover menu in desktop and mobile.

Please create those as components we can reuse for later if I want to reshuffle other items into new groups.

If you have any questions, please put them in the top-qanda.md file in this folder.