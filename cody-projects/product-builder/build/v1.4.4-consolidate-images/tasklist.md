# Image Consolidation Task List
## Version 1.4.4 - Consolidate Images

**Project Goal:** Consolidate all images to a single location (`themes/icodewithai/assets/images/`) while maintaining favicons in static for performance.

**Total Estimated Time:** 5-7 hours  
**Status:** Not Started

---

## Pre-Flight Checklist

- [ ] Review `design.md` plan document
- [ ] Create backup branch: `git checkout -b backup/pre-image-consolidation`
- [ ] Ensure all current work is committed
- [ ] Verify Hugo version: `hugo version` (should work with any modern version)
- [ ] Test current build: `hugo --environment=local`

---

## Phase 0: Optional Archetype Path Standardization
**Time Estimate:** 10 minutes  
**Priority:** Low (Optional for consistency)

### Tasks:

- [ ] **0.1** Update `archetypes/podcast.md`
  - [ ] Change `image = "images/podcast/episode.png"` to `image = "/images/podcast/episode.png"`
  - [ ] Add leading slash for consistency
  
- [ ] **0.2** Update `archetypes/show-and-tell.md`
  - [ ] Change `image = "images/show-and-tell/placeholder.png"` to `image = "/images/show-and-tell/placeholder.png"`
  - [ ] Add leading slash for consistency

- [ ] **0.3** Test automation script (optional)
  - [ ] Run: `./automations/create-content.sh podcast "Test Episode"`
  - [ ] Verify image path format is correct
  - [ ] Delete test file: `rm content/podcast/test-episode.md`
  - [ ] Delete test SEO file: `rm data/seo/content-types/podcast/entries/test-episode.yaml`

**Completion Criteria:** All archetype image paths use consistent `/images/...` format

---

## Phase 1: Audit & Cleanup
**Time Estimate:** 1 hour  
**Priority:** High

### 1.1 Remove Empty Directory
- [ ] **1.1.1** Verify `assets/images/presentations/` is empty
  - [ ] Run: `ls -la assets/images/presentations/`
- [ ] **1.1.2** Remove empty directory
  - [ ] Run: `rm -rf assets/images/presentations/`

### 1.2 Document Current Image Inventory
- [ ] **1.2.1** Count images in each location
  - [ ] Run: `find themes/icodewithai/assets/images -type f ! -name ".DS_Store" | wc -l`
  - [ ] Run: `find static/images -type f ! -name ".DS_Store" | wc -l`
  - [ ] Run: `find themes/icodewithai/static/images -type f ! -name ".DS_Store" | wc -l`
  - [ ] Record counts in notes

- [ ] **1.2.2** List all image categories
  - [ ] Run: `ls -d themes/icodewithai/assets/images/*/`
  - [ ] Run: `ls -d static/images/*/`
  - [ ] Document structure

### 1.3 Check for Duplicate Images
- [ ] **1.3.1** Find potential duplicates by name
  - [ ] Run: `find themes/icodewithai/assets/images static/images -type f -name "*.png" -o -name "*.jpg" | xargs -n1 basename | sort | uniq -d`
  
- [ ] **1.3.2** If duplicates found, investigate
  - [ ] Compare file sizes: `ls -lh [duplicate-file-paths]`
  - [ ] Compare checksums: `md5 [duplicate-file-paths]`
  - [ ] Decide which to keep

### 1.4 Check for Unused Images
- [ ] **1.4.1** Search for image references in templates
  - [ ] Run: `grep -r "images/" themes/icodewithai/layouts/ | grep -v ".DS_Store"`
  
- [ ] **1.4.2** Search for image references in content
  - [ ] Run: `grep -r "image\s*=" content/ | grep -v ".DS_Store"`

- [ ] **1.4.3** Create list of potentially unused images (if any found)
  - [ ] Document in `unused-images.txt` (don't delete yet)

**Completion Criteria:** 
- Empty directory removed
- Image inventory documented
- Duplicates identified and resolved
- Unused images documented (but not deleted)

---

## Phase 2: Consolidate SEO Images to Assets
**Time Estimate:** 2-3 hours  
**Priority:** High

### 2.1 Backup Current Structure
- [ ] **2.1.1** Create snapshot of current state
  - [ ] Run: `git add -A && git commit -m "Pre-consolidation snapshot"`

### 2.2 Move SEO Images
- [ ] **2.2.1** Create target directory
  - [ ] Run: `mkdir -p themes/icodewithai/assets/images/seo`

- [ ] **2.2.2** Move SEO directories
  - [ ] Run: `mv static/images/seo/* themes/icodewithai/assets/images/seo/`
  - [ ] Verify move: `ls -R themes/icodewithai/assets/images/seo/`

- [ ] **2.2.3** Verify structure
  - [ ] Check: `themes/icodewithai/assets/images/seo/content-types/` exists
  - [ ] Check: `themes/icodewithai/assets/images/seo/single-pages/` exists
  - [ ] Check: `themes/icodewithai/assets/images/seo/default-social.png` exists

- [ ] **2.2.4** Remove old empty directories
  - [ ] Run: `rm -rf static/images/`

### 2.3 Update SEO Partial Template
- [ ] **2.3.1** Open `themes/icodewithai/layouts/partials/seo.html`

- [ ] **2.3.2** Find social image logic (around line 190-205)
  - [ ] Locate: `$socialImage := .Params.image`
  - [ ] Locate: `$contentTypeImage := printf "images/seo/content-types/%s/listpage-social.png"`
  - [ ] Locate: `$finalSocialImage = "images/seo/default-social.png"`

- [ ] **2.3.3** Update to use `resources.Get` instead of direct paths
  - [ ] Update content type image logic:
    ```go-html-template
    {{- $contentTypeImagePath := printf "images/seo/content-types/%s/listpage-social.png" .Section -}}
    {{- $contentTypeImage := resources.Get $contentTypeImagePath -}}
    {{- if $contentTypeImage -}}
      {{- $finalSocialImage = $contentTypeImage.RelPermalink -}}
    {{- end -}}
    ```
  
  - [ ] Update default image logic:
    ```go-html-template
    {{- with resources.Get "images/seo/default-social.png" -}}
      {{- $finalSocialImage = .RelPermalink -}}
    {{- end -}}
    ```

- [ ] **2.3.4** Handle existing image parameter
  - [ ] Check if `.Params.image` needs conversion
  - [ ] Update if it's a direct path to use resources.Get

- [ ] **2.3.5** Save file

### 2.4 Test SEO Changes
- [ ] **2.4.1** Build site locally
  - [ ] Run: `hugo --environment=local`
  - [ ] Check for errors in output

- [ ] **2.4.2** Test homepage
  - [ ] Run: `hugo server --environment=local`
  - [ ] Open: `http://localhost:1313`
  - [ ] View page source
  - [ ] Find `<meta property="og:image"` tag
  - [ ] Verify image URL is correct

- [ ] **2.4.3** Test blog list page
  - [ ] Navigate to: `http://localhost:1313/blog/`
  - [ ] View page source
  - [ ] Verify og:image meta tag

- [ ] **2.4.4** Test individual blog post
  - [ ] Navigate to any blog post
  - [ ] View page source
  - [ ] Verify og:image shows post-specific image

- [ ] **2.4.5** Test podcast list page
  - [ ] Navigate to: `http://localhost:1313/podcast/`
  - [ ] Verify og:image meta tag

- [ ] **2.4.6** Test presentations list page
  - [ ] Navigate to: `http://localhost:1313/presentations/`
  - [ ] Verify og:image meta tag

- [ ] **2.4.7** Test social share preview (optional)
  - [ ] Use Twitter Card Validator: https://cards-dev.twitter.com/validator
  - [ ] Or Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/

**Completion Criteria:**
- SEO images moved to assets folder
- SEO partial template updated
- All pages build without errors
- Social meta tags show correct images
- No broken image links

---

## Phase 3: Verify Existing Assets Structure
**Time Estimate:** 30 minutes  
**Priority:** Medium

### 3.1 Verify Current Assets Organization
- [ ] **3.1.1** List all image categories in assets
  - [ ] Run: `ls -d themes/icodewithai/assets/images/*/`
  - [ ] Verify structure:
    ```
    blog/
    certificates/
    icons/
    interviews/
    people/
    podcast/
    presentations/
    show-and-tell/
    seo/  (newly added)
    ```

- [ ] **3.1.2** Check for proper organization
  - [ ] Verify blog images are in `blog/` folder
  - [ ] Verify podcast images are in `podcast/` folder
  - [ ] Verify presentation images are in `presentations/` folder
  - [ ] Verify people photos are in `people/` folder

### 3.2 Verify Template References
- [ ] **3.2.1** Check header template
  - [ ] Open: `themes/icodewithai/layouts/partials/header.html`
  - [ ] Verify logo: `resources.Get "images/logo.png"`

- [ ] **3.2.2** Check footer template
  - [ ] Open: `themes/icodewithai/layouts/partials/footer.html`
  - [ ] Verify logo reference

- [ ] **3.2.3** Check about-marcelo page
  - [ ] Open: `themes/icodewithai/layouts/about-marcelo.html`
  - [ ] Verify profile image: `resources.Get "images/people/marcelo-lewin.png"`
  - [ ] Verify certificate images

- [ ] **3.2.4** Check homepage
  - [ ] Open: `themes/icodewithai/layouts/index.html`
  - [ ] Verify icon references

- [ ] **3.2.5** Check podcast list page
  - [ ] Open: `themes/icodewithai/layouts/podcast/list.html`
  - [ ] Verify podcast platform icons

**Completion Criteria:**
- Assets folder structure documented
- All template references verified as correct
- No changes needed (already using resources.Get)

---

## Phase 4: Verify Favicon Structure
**Time Estimate:** 15 minutes  
**Priority:** Low

### 4.1 Confirm Favicon Location
- [ ] **4.1.1** List favicon files
  - [ ] Run: `ls -la themes/icodewithai/static/images/`
  - [ ] Verify 7 files exist:
    - favicon.ico
    - favicon-16x16.png
    - favicon-32x32.png
    - apple-touch-icon.png
    - android-chrome-192x192.png
    - android-chrome-512x512.png

- [ ] **4.1.2** Verify template references
  - [ ] Open: `themes/icodewithai/layouts/_default/baseof.html`
  - [ ] Verify favicon links use `absURL` function
  - [ ] Confirm paths: `{{ "images/favicon.ico" | absURL }}`

### 4.2 Test Favicon Loading
- [ ] **4.2.1** Build and serve site
  - [ ] Run: `hugo server --environment=local`

- [ ] **4.2.2** Check favicon in browser
  - [ ] Open: `http://localhost:1313`
  - [ ] Check browser tab for favicon
  - [ ] Open DevTools > Network tab
  - [ ] Filter for "favicon"
  - [ ] Verify 200 status code

- [ ] **4.2.3** Test different favicon sizes
  - [ ] Check in browser inspector
  - [ ] Verify correct size is loading for device

**Completion Criteria:**
- Favicons remain in static folder (per design decision)
- All 7 favicon files present
- Favicons load correctly in browser
- No changes needed

---

## Phase 5: Test Content References
**Time Estimate:** 45 minutes  
**Priority:** High

### 5.1 Test Blog Posts
- [ ] **5.1.1** Test blog list page
  - [ ] Navigate to: `http://localhost:1313/blog/`
  - [ ] Verify all blog post thumbnails load
  - [ ] Check browser console for errors

- [ ] **5.1.2** Test individual blog posts
  - [ ] Pick 3 recent blog posts
  - [ ] Verify featured image displays
  - [ ] Check: `displayImageInline = true` posts show image

- [ ] **5.1.3** Verify image paths in front matter
  - [ ] Open: `content/blog/vibe-coding-best-practices-to-get-better-results.md`
  - [ ] Check: `image = "/images/blog/vibe-coding-best-practices.png"`
  - [ ] Verify this still works (Hugo resolves from assets)

### 5.2 Test Podcast Episodes
- [ ] **5.2.1** Test podcast list page
  - [ ] Navigate to: `http://localhost:1313/podcast/`
  - [ ] Verify all episode images load

- [ ] **5.2.2** Test individual podcast episodes
  - [ ] Pick 2 episodes
  - [ ] Verify episode image displays

### 5.3 Test Presentations
- [ ] **5.3.1** Test presentations list page
  - [ ] Navigate to: `http://localhost:1313/presentations/`
  - [ ] Verify all presentation thumbnails load

- [ ] **5.3.2** Test individual presentations
  - [ ] Pick 2 presentations
  - [ ] Verify thumbnail displays

### 5.4 Test Show & Tell
- [ ] **5.4.1** Test show-and-tell list page
  - [ ] Navigate to: `http://localhost:1313/show-and-tell/`
  - [ ] Verify all episode images load

### 5.5 Test Apps Gallery
- [ ] **5.5.1** Test apps list page
  - [ ] Navigate to: `http://localhost:1313/apps/`
  - [ ] Verify all app thumbnails load

- [ ] **5.5.2** Check page bundle resources
  - [ ] Verify thumbnails from `content/apps/*/thumbnail.png` work
  - [ ] These should still use `.Resources.Get` (no change)

### 5.6 Test About Page
- [ ] **5.6.1** Navigate to about page
  - [ ] URL: `http://localhost:1313/about-marcelo/`
  - [ ] Verify profile photo loads
  - [ ] Verify certification badges load
  - [ ] Verify interview thumbnail loads

**Completion Criteria:**
- All blog posts display images correctly
- All podcast episodes display images correctly
- All presentations display thumbnails correctly
- All show-and-tell episodes display images correctly
- All apps display thumbnails correctly
- About page displays all images correctly
- No 404 errors in browser console

---

## Phase 6: Full Site Build & Testing
**Time Estimate:** 1 hour  
**Priority:** Critical

### 6.1 Clean Build Test
- [ ] **6.1.1** Clean previous build
  - [ ] Run: `rm -rf public/`

- [ ] **6.1.2** Build for local environment
  - [ ] Run: `hugo --environment=local`
  - [ ] Check for errors/warnings
  - [ ] Note build time

- [ ] **6.1.3** Build for next (staging) environment
  - [ ] Run: `hugo --environment=next`
  - [ ] Check for errors/warnings

- [ ] **6.1.4** Build for production environment
  - [ ] Run: `hugo --environment=prod`
  - [ ] Check for errors/warnings

### 6.2 Verify Public Folder Structure
- [ ] **6.2.1** Check images in public folder
  - [ ] Run: `ls -R public/images/ | head -50`
  - [ ] Verify structure matches expectations

- [ ] **6.2.2** Check for fingerprinted assets
  - [ ] Run: `ls public/images/*.png | head -20`
  - [ ] Look for hash patterns (e.g., `logo.a1b2c3d4.png`)

- [ ] **6.2.3** Verify favicons are NOT fingerprinted
  - [ ] Run: `ls public/images/favicon*`
  - [ ] Should see: `favicon.ico`, `favicon-16x16.png`, etc. (no hashes)

### 6.3 Check Image Optimization
- [ ] **6.3.1** Check image file sizes
  - [ ] Run: `du -sh public/images/`
  - [ ] Compare to previous build (if available)

- [ ] **6.3.2** Verify images are processed
  - [ ] Check a few images in public folder
  - [ ] Verify they're actual image files (not broken links)

### 6.4 Validate HTML Output
- [ ] **6.4.1** Check a sample page
  - [ ] Run: `cat public/blog/vibe-coding-best-practices-to-get-better-results/index.html | grep "og:image"`
  - [ ] Verify meta tag has correct image path

- [ ] **6.4.2** Check for broken image links
  - [ ] Search HTML for common image patterns
  - [ ] Run: `grep -r "img src=" public/ | grep -v "http" | head -20`

### 6.5 Test with Hugo Server
- [ ] **6.5.1** Start development server
  - [ ] Run: `hugo server --environment=local`

- [ ] **6.5.2** Navigate through entire site
  - [ ] Homepage
  - [ ] Blog list and 3 posts
  - [ ] Podcast list and 2 episodes
  - [ ] Presentations list and 2 items
  - [ ] Show & Tell list and 1 episode
  - [ ] Apps gallery
  - [ ] About page
  - [ ] Contact page

- [ ] **6.5.3** Check browser console on each page
  - [ ] No 404 errors
  - [ ] No failed image loads

- [ ] **6.5.4** Check DevTools Network tab
  - [ ] Filter for images
  - [ ] Verify all images return 200 status
  - [ ] Check image cache headers

**Completion Criteria:**
- Site builds successfully for all environments
- No build errors or warnings
- Public folder structure is correct
- Favicons are NOT fingerprinted
- Content images ARE fingerprinted (if enabled)
- All pages display correctly
- No broken image links
- Browser console shows no errors

---

## Phase 7: Performance Validation
**Time Estimate:** 30 minutes  
**Priority:** Medium

### 7.1 Compare Build Times
- [ ] **7.1.1** Record build time
  - [ ] Run: `time hugo --environment=local`
  - [ ] Note: "Total in X ms"

- [ ] **7.1.2** Compare to previous build time (if known)
  - [ ] Should be similar or slightly faster

### 7.2 Check Image Loading Performance
- [ ] **7.2.1** Open site in browser
  - [ ] Open DevTools > Network tab
  - [ ] Disable cache
  - [ ] Reload homepage

- [ ] **7.2.2** Check image metrics
  - [ ] Note total images loaded
  - [ ] Note total image size (MB)
  - [ ] Note load time

- [ ] **7.2.3** Test with cache enabled
  - [ ] Re-enable cache in DevTools
  - [ ] Reload page
  - [ ] Verify images load from cache

### 7.3 Test Responsive Images (if implemented)
- [ ] **7.3.1** Test on mobile view
  - [ ] DevTools > Toggle device toolbar
  - [ ] Select mobile device
  - [ ] Verify images load

- [ ] **7.3.2** Check for proper image sizes
  - [ ] Verify mobile devices don't load desktop-sized images

**Completion Criteria:**
- Build time is acceptable (not significantly slower)
- Images load efficiently
- Browser caching works correctly
- No performance regressions

---

## Phase 8: Git Commit & Documentation
**Time Estimate:** 30 minutes  
**Priority:** High

### 8.1 Review Changes
- [ ] **8.1.1** Check git status
  - [ ] Run: `git status`
  - [ ] Review all changed files

- [ ] **8.1.2** Check git diff
  - [ ] Run: `git diff themes/icodewithai/layouts/partials/seo.html`
  - [ ] Review SEO partial changes

- [ ] **8.1.3** Verify moved files
  - [ ] Run: `git log --follow themes/icodewithai/assets/images/seo/default-social.png`
  - [ ] Ensure git tracked the move

### 8.2 Stage Changes
- [ ] **8.2.1** Stage archetype changes (if Phase 0 done)
  - [ ] Run: `git add archetypes/podcast.md archetypes/show-and-tell.md`

- [ ] **8.2.2** Stage moved SEO images
  - [ ] Run: `git add themes/icodewithai/assets/images/seo/`
  - [ ] Run: `git rm -r static/images/`

- [ ] **8.2.3** Stage template changes
  - [ ] Run: `git add themes/icodewithai/layouts/partials/seo.html`

- [ ] **8.2.4** Stage cleanup changes
  - [ ] Run: `git add -A` (to catch any deletions)

### 8.3 Commit Changes (USER ACTION REQUIRED)
- [ ] **8.3.1** Review all staged changes one final time
  - [ ] Run: `git status`
  - [ ] Run: `git diff --cached` (review changes before committing)
  
- [ ] **8.3.2** Create commit manually (suggested message below)
  - [ ] **YOU commit the changes** - copy and customize this message:
  ```bash
  git commit -m "feat: Consolidate images to assets folder (v1.4.4)
  
  - Moved SEO images from static/images/seo/ to assets/images/seo/
  - Updated SEO partial to use resources.Get for image processing
  - Standardized archetype image paths (added leading slash)
  - Removed empty assets/images/presentations/ directory
  - Kept favicons in static/images/ for optimal performance
  
  Benefits:
  - Single source of truth for images (except favicons)
  - Asset pipeline optimization and fingerprinting
  - Better cache busting
  - Improved maintainability
  
  See: .cody/project/build/v1.4.4-consolidate-images/design.md"
  ```
  - [ ] Adjust message as needed based on actual changes made

### 8.4 Update Documentation
- [ ] **8.4.1** Update README (if needed)
  - [ ] Document new image structure
  - [ ] Add guidelines for adding new images

- [ ] **8.4.2** ~~Update version number~~ 
  - [ ] **SKIP** - The `automations/push-to-prod.sh` script will handle version updates
  - [ ] Version will be updated to 1.4.4 when running push-to-prod script
  - [ ] `last_updated` will be automatically set to current date

- [ ] **8.4.3** Create contributor guidelines (optional)
  - [ ] Document where to add images:
    - Content images: `themes/icodewithai/assets/images/[category]/`
    - Favicons: `themes/icodewithai/static/images/`
    - Page bundles: `content/[section]/[page]/`

### 8.5 Tag Release
- [ ] **8.5.1** Create git tag
  - [ ] Run: `git tag -a v1.4.4 -m "Image consolidation - Move SEO images to assets"`

**Completion Criteria:**
- All changes committed with clear message
- Version number updated
- Documentation updated
- Git tag created

---

## Phase 9: Deploy to Staging
**Time Estimate:** 30 minutes  
**Priority:** Critical

### 9.1 Pre-Deployment Checklist
- [ ] **9.1.1** Verify you're on dev branch
  - [ ] Run: `git branch --show-current`
  - [ ] Should show: `dev`

- [ ] **9.1.2** Ensure all changes are committed
  - [ ] Run: `git status`
  - [ ] Should show: "nothing to commit, working tree clean"

- [ ] **9.1.3** Push to remote
  - [ ] Run: `git push origin dev`
  - [ ] Run: `git push origin v1.4.4` (push tag)

### 9.2 Deploy to Staging (next.icodewith.ai)
- [ ] **9.2.1** Trigger staging deployment
  - [ ] (Check your deployment method - Netlify, manual, etc.)
  - [ ] Wait for deployment to complete

- [ ] **9.2.2** Verify deployment succeeded
  - [ ] Check deployment logs
  - [ ] Look for build errors

### 9.3 Test on Staging
- [ ] **9.3.1** Navigate to staging site
  - [ ] URL: `https://next.icodewith.ai`

- [ ] **9.3.2** Smoke test all sections
  - [ ] Homepage loads
  - [ ] Blog section works
  - [ ] Podcast section works
  - [ ] Presentations section works
  - [ ] Apps gallery works
  - [ ] About page works

- [ ] **9.3.3** Check images specifically
  - [ ] View page source on blog list page
  - [ ] Verify og:image meta tag
  - [ ] Check actual image URL
  - [ ] Open image URL directly in browser (should load)

- [ ] **9.3.4** Test social share previews
  - [ ] Use Twitter Card Validator: https://cards-dev.twitter.com/validator
  - [ ] Enter URL: `https://next.icodewith.ai/blog/`
  - [ ] Verify image displays in preview
  - [ ] Test with a specific blog post URL

- [ ] **9.3.5** Check browser console
  - [ ] Open DevTools console
  - [ ] Navigate through site
  - [ ] Look for any errors

- [ ] **9.3.6** Test on mobile device (optional)
  - [ ] Open site on actual mobile device
  - [ ] Navigate through sections
  - [ ] Verify images load

**Completion Criteria:**
- Code pushed to remote repository
- Staging deployment successful
- All pages load correctly on staging
- Images display properly
- Social share previews work
- No errors in browser console

---

## Phase 10: Production Deployment
**Time Estimate:** 30 minutes  
**Priority:** Critical

### 10.1 Pre-Production Checklist
- [ ] **10.1.1** Staging has been tested thoroughly
  - [ ] All Phase 9 tests passed

- [ ] **10.1.2** Get stakeholder approval (if needed)
  - [ ] Notify team of pending deployment
  - [ ] Get sign-off

- [ ] **10.1.3** Plan deployment window
  - [ ] Choose low-traffic time if possible
  - [ ] Have rollback plan ready

### 10.2 Merge to Main Branch
- [ ] **10.2.1** Switch to main branch
  - [ ] Run: `git checkout main`

- [ ] **10.2.2** Pull latest changes
  - [ ] Run: `git pull origin main`

- [ ] **10.2.3** Merge dev branch
  - [ ] Run: `git merge dev`
  - [ ] Resolve any conflicts (shouldn't be any)

- [ ] **10.2.4** Push to main
  - [ ] Run: `git push origin main`
  - [ ] Run: `git push origin v1.4.4`

### 10.3 Deploy to Production
- [ ] **10.3.1** Trigger production deployment
  - [ ] (Check your deployment method)
  - [ ] Or run: `./automations/push-to-prod.sh` (if applicable)

- [ ] **10.3.2** Monitor deployment
  - [ ] Watch deployment logs
  - [ ] Look for any errors or warnings

- [ ] **10.3.3** Verify deployment completed
  - [ ] Check deployment status
  - [ ] Note deployment time

### 10.4 Post-Deployment Testing
- [ ] **10.4.1** Navigate to production site
  - [ ] URL: `https://www.icodewith.ai`

- [ ] **10.4.2** Smoke test critical pages
  - [ ] Homepage
  - [ ] Blog list page
  - [ ] One recent blog post
  - [ ] Podcast page
  - [ ] About page

- [ ] **10.4.3** Verify images load
  - [ ] Check a few images visually
  - [ ] Open DevTools Network tab
  - [ ] Verify no 404s

- [ ] **10.4.4** Test social share preview on production
  - [ ] Use Twitter Card Validator
  - [ ] Test with production URL
  - [ ] Verify image shows (may need to clear cache)

- [ ] **10.4.5** Check page load performance
  - [ ] Use Lighthouse (DevTools > Lighthouse)
  - [ ] Run performance audit
  - [ ] Compare to previous baseline (if available)

### 10.5 Monitor for Issues
- [ ] **10.5.1** Check error logs (first hour)
  - [ ] Review server logs
  - [ ] Look for 404s or errors

- [ ] **10.5.2** Monitor analytics (first 24 hours)
  - [ ] Check for unusual bounce rates
  - [ ] Look for error pages being hit

- [ ] **10.5.3** Check social media shares
  - [ ] Verify shared links show correct images
  - [ ] May take time for social platforms to re-scrape

**Completion Criteria:**
- Code merged to main branch
- Production deployment successful
- All critical pages load correctly
- Images display properly
- Social share previews work
- No errors or issues reported
- Performance is acceptable

---

## Phase 11: Post-Deployment Cleanup
**Time Estimate:** 15 minutes  
**Priority:** Low

### 11.1 Clean Up Branches
- [ ] **11.1.1** Switch back to dev branch
  - [ ] Run: `git checkout dev`

- [ ] **11.1.2** Pull latest from main
  - [ ] Run: `git pull origin main`

- [ ] **11.1.3** Delete backup branch (if created)
  - [ ] Run: `git branch -d backup/pre-image-consolidation`

### 11.2 Update Project Documentation
- [ ] **11.2.1** Mark this tasklist as complete
  - [ ] Update status at top of file

- [ ] **11.2.2** Update project status
  - [ ] Mark design.md as "Implemented"

- [ ] **11.2.3** Archive unused files
  - [ ] Move `unused-images.txt` to archive (if created)

### 11.3 Celebrate! 🎉
- [ ] **11.3.1** Share success with team
  - [ ] Post update in Slack/Discord
  - [ ] Document lessons learned

- [ ] **11.3.2** Update changelog (if maintained)
  - [ ] Add entry for v1.4.4

**Completion Criteria:**
- Branches cleaned up
- Documentation updated
- Team notified
- Project marked as complete

---

## Rollback Plan (If Needed)

### Emergency Rollback Steps
- [ ] **R.1** Switch to backup branch
  - [ ] Run: `git checkout backup/pre-image-consolidation`

- [ ] **R.2** Push to main (if already merged)
  - [ ] Run: `git push origin main --force`

- [ ] **R.3** Redeploy previous version
  - [ ] Trigger deployment

- [ ] **R.4** Verify rollback successful
  - [ ] Test site

### Partial Rollback (SEO Issues Only)
- [ ] **R.5** Revert SEO partial
  - [ ] Run: `git checkout HEAD~1 themes/icodewithai/layouts/partials/seo.html`

- [ ] **R.6** Move images back
  - [ ] Run: `mv themes/icodewithai/assets/images/seo static/images/`

- [ ] **R.7** Commit and deploy
  - [ ] Run: `git commit -m "revert: Rollback SEO image changes"`

---

## Issue Tracking

### Known Issues
- None at start

### Issues Found During Implementation
_(Document any issues encountered here)_

1. Issue: ____________________
   - Impact: ____________________
   - Resolution: ____________________

---

## Sign-Off

- [ ] **All phases completed**
- [ ] **Production tested and verified**
- [ ] **Documentation updated**
- [ ] **Team notified**

**Completed by:** _________________  
**Date:** _________________  
**Sign-off:** _________________

---

## Notes & Lessons Learned

_(Add any observations, insights, or recommendations for future projects)_

- 
- 
-
