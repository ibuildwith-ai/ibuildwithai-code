### Starting Prompt

This update will affecte 3 sections:

1) Home Page (@themes/icodewithai/layouts/index.html)
2) Apps List Page (@themes/icodewithai/layouts/apps/list.html)
3) Apps Details Page (@themes/icodewithai/layouts/apps/single.html)

I want to add:

1) An image that will be displayed above the App Title in the cards (in the homage page and in the apps list page).  This image should have a 4:1 aspect ratio.
2) A Photo Gallery, that can display images (at least 1 to as many as we want).  The photogallery needs to have arrows on the right and left (verticlally centered)
3) I'm open to the aspect ratio of these images (maybe 4:3? 16x9?)  But I need to know what you expect.
3) For every app, I'd like to store the images like this:

/app/app-name/thumbnail.jpg (or .png)
/app/app-name/photogallery/image1.jpg (or .png)
/app/app-name/photogallery/image2.jpg (or .png)
/app/app-name/photogallery/image3.jpg (or .png)

If there is a thumbnail or photogallery, show it.  if either (or neither) of them exists, you don't show it.  It's automatic.  I don't want to update anything in the /content/apps/app-name.md file.  No need to do that.  I think we can set it up to be more automatic as longs as 1 thumbnail exists (show it) and/or at least 1 photogallery image exists (show it).

Where would we store those images?  In content/apps?  I'm open to your suggestions.

For the cards, if you show the image, it should be linked to the same link that the card has (e.g. learn more).

The photogallery will not link to anywhere.  It's just a gallery of photos.

### Be strict about CSS

I have a full CSS design system.  Please make sure you follow that. If you have to create new styles, follow our conventions.  You can find all about our CSS design system in .vibedocs/architecture/css-documentation.md file.

### Be strict about HTML objects.

I'd like to continue expanding the design system, so I'm thinking the photo gallery is an object right?

### Be sure it's responsive 
Make sure it follows the responsiveness of our site.  Images need to be responsive. Photo gallery needs to be responsive.

### Questions?
Do you have questions, please place all your questions in 02-questions-and-answers.md file stored in this same folder.  You'll need to create that file.

Do not start anything until you read this and you added your questions in the Questions document listed above.   Once you do that. stop and I'll review it.

If you don't have any questions, tell me, then I'll give you further instructions.

If you need more information about the project, feel free to read any of the files in the .vibedocs folder that can help you.