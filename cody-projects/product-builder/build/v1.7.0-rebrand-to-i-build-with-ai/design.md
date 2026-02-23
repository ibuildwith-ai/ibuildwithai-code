# Version Design Document : v1.7.0-rebrand-to-i-build-with-ai
Technical implementation and design guide for rebranding from "iCodeWith.ai" to "I Build With AI" (iBuildWith.ai).

## 1. Features Summary
_Overview of features included in this version._

This version implements a complete rebrand from "iCodeWith.ai" to "I Build With AI" with the domain change from `icodewith.ai` to `ibuildwith.ai`. The rebrand touches 80+ files across the codebase including:

### ✅ COMPLETED BY USER (Pre-Implementation)
The following updates have already been completed:

**Total Files Modified:** 70 files

**1. Branding Assets Updated (12 files):**
- ✅ Main logo replaced (`themes/icodewithai/assets/images/logo.png`)
- ✅ All podcast episode images updated (e001-e007) - 7 files
- ✅ Podcast cover image updated
- ✅ Default social share image updated
- ✅ Presentation meetup images renamed: "coding-with-ai-meetup" → "i-build-with-ai-meetup" - 2 files

**2. SEO Metadata Files Updated (45 files):**
- ✅ SEO defaults file (`data/seo/defaults.yaml`)
  - Changed `site_name: "iCodeWith.ai"` → `"iBuildWith.ai"`
  - Changed title suffix `| iCodeWith.ai` → `| iBuildWith.ai`
  - Changed social_image_alt suffix
- ✅ Single page SEO files (3 files):
  - `about-marcelo.yaml` - Updated title, description, social_image_alt
  - `contact.yaml` - Updated branding
  - Homepage SEO (if exists)
- ✅ Blog SEO files (15 files):
  - All blog entry YAML files updated with `| iBuildWith.ai` suffix
  - `listpage.yaml` updated
- ✅ Podcast SEO files (8 files):
  - All podcast entry YAML files updated with `| iBuildWith.ai` suffix
  - `listpage.yaml` updated
- ✅ Presentation SEO files (12 files):
  - All presentation entry YAML files updated with `| iBuildWith.ai` suffix
  - Image references updated: "coding-with-ai-meetup" → "i-build-with-ai-meetup"
  - `listpage.yaml` updated
- ✅ App SEO files (7 files):
  - All app entry YAML files updated with `| iBuildWith.ai` suffix
  - `i-code-with-ai-website.yaml` - Updated title and descriptions
  - `listpage.yaml` updated

**3. Template Files Updated (6 files):**
- ✅ `themes/icodewithai/layouts/partials/header.html`
  - Changed logo alt text: `"iCodeWith.ai"` → `"iBuildWith.ai"` (2 instances)
- ✅ `themes/icodewithai/layouts/partials/footer.html`
  - Changed logo alt text: `"iCodeWith.ai"` → `"iBuildWith.ai"`
- ✅ `themes/icodewithai/layouts/partials/seo.html`
  - Changed comment: `SEO Partial for iCodeWith.ai` → `SEO Partial for iBuildWith.ai`
- ✅ `themes/icodewithai/layouts/partials/nav-dropdown.html`
  - Changed comment example: `"Coding with AI"` → `"Building with AI"`
- ✅ `themes/icodewithai/layouts/index.html`
  - Changed homepage scrolling carousel item: `"iCodeWith.ai"` → `"iBuildWith.ai"`
- ✅ `themes/icodewithai/layouts/about-marcelo.html`
  - Changed tagline: `"founder of iCodeWith.ai"` → `"founder of iBuildWith.ai"`
  - Changed body text: `"I created iCodeWith.ai"` → `"I created iBuildWith.ai"`
  - Changed app card heading: `"iCodeWith.ai"` → `"iBuildWith.ai"`
  - Changed app card description

**4. Content Files Updated (5 files):**
- ✅ 5 presentation markdown files updated with new image paths:
  - `building-marketing-tools-at-the-speed-of-vibes.md`
  - `from-vibe-coding-to-shippable-solution.md`
  - `how-to-publish-your-vibe-coded-app-for-others-to-use.md`
  - `multi-agent-vibe-coding-for-better-results.md`
  - `turning-ux-into-apps-at-the-speed-of-vibes.md`

**5. Configuration Files Updated (1 file):**
- ✅ `config/_default/config.toml`
  - Changed LinkedIn URL: `"/company/icodewithai"` → `"/company/ibuildwithai/"`
  - Note: Twitter and YouTube URLs kept as-is (social media handles to be updated separately)

**6. Cody Framework Files (1 file):**
- ✅ `.cody/project/build/feature-backlog.md` - Updated with v1.7.0 version entry

**Branding Changes Applied:**
- ✅ "iCodeWith.ai" → "iBuildWith.ai" (site name and branding text)
- ✅ "coding-with-ai-meetup" → "i-build-with-ai-meetup" (image references)
- ✅ All `| iCodeWith.ai` suffixes in titles → `| iBuildWith.ai`
- ✅ All social_image_alt text updated with new branding

**Total Progress:** ~85% of text-based rebranding completed!

**What This Accomplishes:**
- ✅ All SEO metadata now reflects new brand (search engines, social media previews)
- ✅ All visible branding in templates updated (header, footer, about page)
- ✅ All logo and image assets updated
- ✅ Content references updated where needed

### REMAINING WORK:

**Critical Infrastructure Changes (Must be done before deployment):**
1. ⚠️ **Domain configuration updates** - PARTIALLY COMPLETED
   - ✅ `config/_default/config.toml` - LinkedIn URL updated to `/company/ibuildwithai/`
   - ❌ `config/_default/config.toml` - Still needs: theme name, title updates
   - ❌ `config/prod/config.toml` - Update baseURL to `https://www.ibuildwith.ai`
   - ❌ `config/next/config.toml` - Update baseURL to `https://next.ibuildwith.ai`
   - Note: Twitter/YouTube URLs kept as old handles (intentional - to be updated separately)

2. ❌ **GitHub workflow updates** - Update deployment workflows
   - `.github/workflows/hugo-prod.yml` - Update repo references and CNAME
   - `.github/workflows/hugo-next.yml` - Update repo references and CNAME

3. ❌ **JavaScript API endpoint updates** - Update Netlify function URLs
   - `themes/icodewithai/assets/js/contact-form.js`
   - `themes/icodewithai/assets/js/reminder-form.js`

4. ❌ **Backend package updates** - Update package.json and repo references
   - `backend/package.json`

5. ❌ **Analytics updates** - Update Plausible.io domain
   - `themes/icodewithai/layouts/_default/baseof.html`

**Optional Changes (Can be done later):**
6. ❌ **Theme directory rename** - Rename `themes/icodewithai/` → `themes/ibuildwithai/`
   - Requires updating config.toml theme reference
   - Requires updating all internal template paths
   - DECISION NEEDED: Do you want to do this?

7. ❌ **People data updates** - Update Marcelo's bio
   - `data/people/marcelo-lewin.json`

8. ❌ **Documentation updates** - Update internal docs
   - `README.md`
   - `.cody/project/library/docs/components.md`
   - `.cody/project/library/docs/content-management.md`

9. ❌ **Content file updates** - Update blog posts, podcast episodes with references
   - Only if they mention "iCodeWith.ai" in the content body
   - May not be necessary if references are historical

10. ❌ **Favicon updates** - Create new favicon files
    - Multiple sizes needed (16x16, 32x32, apple-touch-icon, etc.)
    - QUESTION: Do you have new favicon files ready?

**Estimated Remaining Work:** ~15% of total rebranding effort

**Priority Order for Completion:**
1. Domain configuration (config files) - **CRITICAL**
2. GitHub workflows - **CRITICAL**
3. JavaScript endpoints - **CRITICAL**
4. Analytics - **HIGH**
5. Backend package - **MEDIUM**
6. People data - **MEDIUM**
7. Documentation - **LOW**
8. Theme directory rename - **OPTIONAL** (need decision)
9. Favicon files - **DEPENDS ON AVAILABILITY**

**Scope Exclusions:**
- Social media profile URLs (LinkedIn, Twitter/X, YouTube handles) will be kept as-is for now
- Social media profile URLs will be updated separately after domain migration is complete
- SEO metadata text (titles, descriptions) WILL be updated to reflect new brand

## 2. Technical Architecture Overview
_High-level technical structure that supports all features in this version._

### Current Architecture
- **Hugo Static Site Generator** with custom theme (`icodewithai`)
- **Multi-environment deployment:**
  - Development: `dev` branch → `icodewithai-next` repo → `next.icodewith.ai`
  - Production: `main` branch → `icodewithai-prod` repo → `www.icodewith.ai`
- **GitHub Actions** for CI/CD
- **Netlify Functions** for backend (contact forms, newsletter)
- **GitHub Pages** for hosting

### Target Architecture (Post-Rebrand)
- **Hugo Static Site Generator** with renamed theme (`ibuildwithai`)
- **Multi-environment deployment:**
  - Development: `dev` branch → `ibuildwithai-next` repo → `next.ibuildwith.ai`
  - Production: `main` branch → `ibuildwithai-prod` repo → `www.ibuildwith.ai`
- **GitHub Actions** for CI/CD (updated workflows)
- **Netlify Functions** for backend (updated endpoints)
- **GitHub Pages** for hosting (new domain)

### Critical Dependencies
1. **New GitHub Repositories:**
   - `ibuildwithai-prod` (production deployment)
   - `ibuildwithai-next` (staging deployment)

2. **Domain & DNS:**
   - Register `ibuildwith.ai` domain
   - Configure DNS records
   - Setup SSL certificates
   - Configure GitHub Pages CNAME

3. **Netlify Configuration:**
   - Update Netlify site settings
   - Update function endpoints
   - Configure new domain

4. **Analytics:**
   - Update Plausible.io domain tracking
   - Update any other analytics properties

## 3. Implementation Notes
_Shared technical considerations across all features in this version._

### Theme Directory Rename Strategy
**Question for USER:** Should we rename the theme directory (`icodewithai` → `ibuildwithai`)?

**Option 1: Rename Theme Directory**
- **Pros:**
  - Complete consistency throughout codebase
  - Cleaner long-term maintenance
  - No confusion between internal and external naming
- **Cons:**
  - More files to update (CSS classes, template paths)
  - Potential for git history complexity
  - More testing required

**Option 2: Keep Theme Directory Name**
- **Pros:**
  - Less invasive change
  - Faster implementation
  - Theme name is internal-only
- **Cons:**
  - Inconsistency between internal (icodewithai) and external (ibuildwithai) naming
  - Potential confusion in future development

**RECOMMENDATION:** Rename theme directory for complete consistency. This is a major rebrand and worth doing completely.

### File Change Categories

**Category A: Configuration Files (Critical - Must Deploy Together)**
- `config/_default/config.toml`
- `config/prod/config.toml`
- `config/next/config.toml`
- Backend `package.json`
- GitHub workflow files

**Category B: SEO & Metadata (High Priority - SEO Impact)**
- `data/seo/defaults.yaml`
- 47+ individual SEO YAML files in `data/seo/content-types/`

**Category C: Templates & Assets (Medium Priority - User Facing)**
- HTML/Hugo template files
- JavaScript files
- Logo and image assets

**Category D: Content & Documentation (Lower Priority - Can Update Post-Launch)**
- Markdown content files (blog, podcast, presentations)
- Documentation files (README, etc.)
- People data files

### Deployment Strategy

**Phase 1: Pre-Migration Setup (External)**
1. Create new GitHub repositories (`ibuildwithai-prod`, `ibuildwithai-next`)
2. Register domain `ibuildwith.ai`
3. Setup DNS records (but don't point to new site yet)
4. Create new Netlify sites
5. Prepare new logo/branding assets

**Phase 2: Code Changes (Development)**
1. Create feature branch `feature/rebrand-to-ibuildwithai`
2. Rename theme directory
3. Update all configuration files
4. Update SEO metadata files
5. Update template files
6. Update JavaScript files
7. Update content files
8. Update documentation

**Phase 3: Testing (Staging)**
1. Deploy to new staging environment (`next.ibuildwith.ai`)
2. Comprehensive testing of all pages
3. Verify all links work
4. Test forms and Netlify functions
5. Check analytics tracking
6. SEO metadata validation

**Phase 4: Production Deployment**
1. Merge feature branch to main
2. Deploy to new production environment
3. Point DNS to new domain
4. Monitor for issues

**Phase 5: Post-Migration**
1. Setup 301 redirects from old domain (if keeping old domain active)
2. Submit new sitemap to search engines
3. Monitor analytics and error logs
4. Update any external references

### Git Strategy
- **Single Large Commit Approach:**
  - All changes in one commit for atomic rebrand
  - Easy rollback if issues arise
  - Clear in git history
  - Recommended for this rebrand

- **OR Multi-Commit Approach:**
  - Separate commits by category (config, SEO, templates, content)
  - More granular git history
  - Harder to coordinate deployment

**RECOMMENDATION:** Single large commit for atomic rebrand.

## 4. Other Technical Considerations

### URL Slug Handling
**Current:** `content/apps/i-code-with-ai-website/`
**Options:**
1. **Keep legacy slug** (`i-code-with-ai-website`)
   - Maintains URL continuity
   - No broken links
   - Recommended for SEO

2. **Update to new slug** (`i-build-with-ai-website`)
   - Complete consistency
   - Requires 301 redirects
   - More work, potential SEO impact

**RECOMMENDATION:** Keep legacy slug for URL continuity. Update content/references but maintain directory structure.

### Social Media Handle Updates
**Current Handles:**
- Twitter/X: `@icodewith_ai`
- YouTube: `@icodewith_ai`
- LinkedIn: `/company/icodewithai`
- GitHub: `/icodewith-ai`

**Strategy:**
- Social media profile URLs will NOT be updated in this version (per user request)
- Social media metadata text (titles, descriptions) WILL be updated
- GitHub organization may need to be updated (clarify with user)

### Analytics Migration
**Plausible.io:**
- Current: `data-domain="icodewith.ai"`
- Update to: `data-domain="ibuildwith.ai"`
- May need to create new site in Plausible dashboard
- Consider keeping old domain active for historical data

### Form Endpoint Updates
**Netlify Functions:**
- Contact form: `https://icodewithai.netlify.app/.netlify/functions/contact-form`
- Reminder form: `https://icodewithai.netlify.app/.netlify/functions/reminder-form`

**Action Required:**
- Update JavaScript files with new Netlify subdomain
- Netlify site name may need to change
- Test all forms after deployment

### SEO Considerations
**301 Redirects:**
- Old domain should redirect to new domain for 6-12 months minimum
- Preserves search engine rankings
- Maintains user bookmarks
- Prevents 404 errors

**Sitemap:**
- Generate new sitemap with new domain
- Submit to Google Search Console
- Submit to Bing Webmaster Tools

**Meta Tags:**
- Canonical URLs must use new domain
- Open Graph URLs must use new domain
- Twitter Card URLs must use new domain

### Image Asset Updates

**Logo Files to Update/Create:**
1. `/themes/ibuildwithai/assets/images/logo.png` - Main logo
2. `/themes/ibuildwithai/static/images/favicon.ico`
3. `/themes/ibuildwithai/static/images/favicon-16x16.png`
4. `/themes/ibuildwithai/static/images/favicon-32x32.png`
5. `/themes/ibuildwithai/static/images/apple-touch-icon.png`
6. `/themes/ibuildwithai/static/images/android-chrome-192x192.png`
7. `/themes/ibuildwithai/static/images/android-chrome-512x512.png`

**Social Share Images:**
- `/themes/ibuildwithai/assets/images/seo/default-social.png`
- Individual content type social images (if they contain branding)

**Note:** User indicated they have new logo files ready.

## 5. Open Questions

### Critical Questions (Need Answers Before Starting)

1. **GitHub Organization Migration:**
   - Will you create a new GitHub organization `ibuildwith-ai`?
   - Or keep existing organization and just update repository names?
   - This affects all GitHub URLs in the code

2. **Theme Directory Rename:**
   - Do you want to rename `themes/icodewithai/` to `themes/ibuildwithai/`?
   - See recommendation in Section 3 (Implementation Notes)

3. **Netlify Configuration:**
   - Do you have access to create new Netlify sites?
   - What should the new Netlify site name be? (`ibuildwithai`?)
   - Do you need help with Netlify setup?

4. **Domain Registration:**
   - Have you already registered `ibuildwith.ai`?
   - Do you need guidance on DNS configuration?

5. **Old Domain Strategy:**
   - Will you keep `icodewith.ai` active for redirects?
   - How long should 301 redirects remain in place?

### Technical Questions

6. **Social Media Handles:**
   - For SEO metadata, should we keep old Twitter handle `@icodewith_ai` in meta tags?
   - Or update to new handle even though profile URLs aren't changing yet?

7. **Logo Files:**
   - Are new logo files ready to be added to the codebase?
   - What format and sizes do you have available?
   - Do you need help generating different sizes/formats?

8. **Analytics:**
   - Do you want to create a new Plausible site or migrate existing?
   - Any other analytics platforms that need updating?

9. **Content Update Priority:**
   - Should all content files be updated in this version?
   - Or can some be updated gradually after launch?

10. **Testing Environment:**
    - Do you want to test on `next.ibuildwith.ai` before going live?
    - Or deploy directly to production?

### Implementation Details

11. **CSS Class Names:**
    - If we rename theme directory, should we also rename CSS classes?
    - Example: `.icodewithai-*` → `.ibuildwithai-*`
    - This could be hundreds of class name updates

12. **Legacy URL Slugs:**
    - Confirmed: Keep `i-code-with-ai-website` slug for app?
    - Apply same strategy to all content slugs?

13. **Repository Names:**
    - New repo names: `ibuildwithai-code`, `ibuildwithai-prod`, `ibuildwithai-next`?
    - Or different naming convention?

14. **Deployment Timing:**
    - Do you want to deploy all three repos (code, prod, next) simultaneously?
    - Or staged deployment?

15. **Rollback Plan:**
    - If issues arise, should we keep old repos/domains active?
    - What's the rollback strategy?

---

## Implementation Checklist

Once open questions are answered, implementation will follow this order:

### Pre-Implementation
- [ ] Answer all critical questions (1-5)
- [ ] Create new GitHub repositories
- [ ] Register/verify domain ownership
- [ ] Setup Netlify sites
- [ ] Prepare logo/branding assets
- [ ] Create feature branch

### Code Changes (Grouped by Risk Level)

**Phase 1: Critical Configuration**
- [ ] Rename theme directory (if decided)
- [ ] Update `config/_default/config.toml`
- [ ] Update `config/prod/config.toml`
- [ ] Update `config/next/config.toml`
- [ ] Update GitHub workflow files

**Phase 2: SEO & Metadata**
- [ ] Update `data/seo/defaults.yaml`
- [ ] Update all 47+ SEO YAML files
- [ ] Verify canonical URLs
- [ ] Verify Open Graph metadata

**Phase 3: Templates & Code**
- [ ] Update template files (header, footer, baseof, etc.)
- [ ] Update JavaScript files (form endpoints)
- [ ] Update backend package.json
- [ ] Update robots.txt

**Phase 4: Assets**
- [ ] Add new logo files
- [ ] Update favicon files
- [ ] Update social share images
- [ ] Verify all image alt text

**Phase 5: Content & Documentation**
- [ ] Update content files (blog, podcast, presentations, apps)
- [ ] Update people data files
- [ ] Update README and documentation
- [ ] Update components.md

### Testing
- [ ] Local build verification
- [ ] Deploy to staging (`next.ibuildwith.ai`)
- [ ] Test all pages
- [ ] Test all forms
- [ ] Verify all links
- [ ] Check analytics tracking
- [ ] SEO metadata validation
- [ ] Mobile responsiveness check
- [ ] Accessibility check

### Production Deployment
- [ ] Merge to main branch
- [ ] Deploy to production
- [ ] Point DNS to new domain
- [ ] Verify production deployment
- [ ] Setup 301 redirects
- [ ] Monitor error logs
- [ ] Submit new sitemap

### Post-Deployment
- [ ] Monitor analytics
- [ ] Check for broken links
- [ ] Verify search engine indexing
- [ ] Update any external references
- [ ] Archive old repositories (if applicable)
- [ ] Document lessons learned

---

## File-by-File Change Reference

See comprehensive audit report from exploration phase for detailed file-by-file breakdown of all 80+ files requiring changes. Each file includes:
- Exact file path
- Line numbers requiring changes
- Before/after text
- Priority level
- Dependencies

**Summary of Files by Category:**
- Configuration files: 4 files
- SEO/Metadata files: 47+ files
- Template files: 12+ files
- JavaScript files: 2 files
- Backend files: 2 files
- GitHub workflows: 2 files
- Content files: 8+ files
- Data files: 1 file
- Documentation files: 3+ files
- **Total: 80+ files**

---

## Risk Assessment

### High Risk Areas
1. **Domain DNS Configuration** - Incorrect DNS can cause downtime
2. **GitHub Workflow Updates** - Broken workflows prevent deployments
3. **Netlify Function Endpoints** - Broken forms lose user engagement
4. **SEO Metadata** - Incorrect changes can hurt search rankings

### Medium Risk Areas
1. **Theme Directory Rename** - Many file references could break
2. **Content URL Slugs** - Changing URLs can break bookmarks
3. **Analytics Tracking** - Loss of tracking data if misconfigured

### Low Risk Areas
1. **Documentation Updates** - No user-facing impact
2. **Logo/Image Assets** - Easy to revert if needed
3. **People Data Updates** - Limited scope

### Mitigation Strategies
- Keep old domain active with 301 redirects
- Maintain old repositories as backup
- Test thoroughly on staging before production
- Have rollback plan ready
- Single atomic commit for easy revert
- Comprehensive testing checklist
