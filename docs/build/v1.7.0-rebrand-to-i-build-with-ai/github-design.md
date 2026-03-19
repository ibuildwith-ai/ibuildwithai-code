# GitHub Organization & Domain Migration Design
## Version v1.7.0-rebrand-to-i-build-with-ai

**Purpose**: Migrate GitHub organization and repositories from `icodewith-ai` to `ibuildwith-ai` and update all domain references from `icodewith.ai` to `ibuildwith.ai`.

---

## Current State

### GitHub Organization: `icodewith-ai`
Repositories under your account:
1. **icodewithai-code** - Main codebase (dev + main branches)
2. **icodewithai-next** - GitHub Pages for `next.icodewith.ai`
3. **icodewithai-prod** - GitHub Pages for `www.icodewith.ai`
4. **icodewithai-backend** - Netlify backend for forms
5. **cody-framework** - Cody Framework repository

### Current Domains
- **Production**: `www.icodewith.ai` → `icodewith-ai/icodewithai-prod`
- **Staging**: `next.icodewith.ai` → `icodewith-ai/icodewithai-next`

### Current Workflow
- Push to `dev` branch → GitHub Actions → Deploys to `icodewithai-next` → `next.icodewith.ai`
- Push to `main` branch → GitHub Actions → Deploys to `icodewithai-prod` → `www.icodewith.ai`

---

## Target State

### GitHub Organization: `ibuildwith-ai`
Repositories:
1. **ibuildwithai-code** - Main codebase (dev + main branches)
2. **ibuildwithai-next** - GitHub Pages for `next.ibuildwith.ai`
3. **ibuildwithai-prod** - GitHub Pages for `www.ibuildwith.ai`
4. **ibuildwithai-backend** - Netlify backend for forms
5. **cody-framework** - (Decision needed: keep in org or move?)

### Target Domains
- **Production**: `www.ibuildwith.ai` → `ibuildwith-ai/ibuildwithai-prod`
- **Staging**: `next.ibuildwith.ai` → `ibuildwith-ai/ibuildwithai-next`

### Target Workflow
- Push to `dev` branch → GitHub Actions → Deploys to `ibuildwithai-next` → `next.ibuildwith.ai`
- Push to `main` branch → GitHub Actions → Deploys to `ibuildwithai-prod` → `www.ibuildwith.ai`

---

## Critical Questions (Need Answers Before Proceeding)

### 1. Domain Registration
- ❓ Have you already registered `ibuildwith.ai` domain?
- ❓ Who is the domain registrar? (GoDaddy, Namecheap, Cloudflare, etc.)
- ❓ Do you have access to DNS settings?

### 2. GitHub Organization Strategy
**Option A: Rename Existing Organization** (RECOMMENDED)
- GitHub allows renaming organizations
- GitHub automatically redirects old URLs to new URLs
- Less work, lower risk
- Preserves all settings, permissions, webhooks
- **Downside**: Old organization name becomes available for others to claim

**Option B: Create New Organization**
- Fresh start with new organization
- More control over migration timing
- **Downside**: Must manually transfer repos, reconfigure everything
- **Downside**: Old URLs will break unless you keep old org for redirects

❓ **Which option do you prefer?**

### 3. Netlify Configuration
- ❓ What's your current Netlify site name?
- ❓ Will you create a new Netlify site or rename the existing one?
- ❓ Do you want to keep the old Netlify site active for rollback?

### 4. Cody Framework Repository
- ❓ Keep `cody-framework` in the renamed organization?
- ❓ Or move it to a different organization/location?

### 5. Migration Timing
**Option A: GitHub First** (RECOMMENDED)
1. Rename GitHub org and repos
2. Update code to reference new URLs
3. Deploy to new domains

**Option B: Code First**
1. Update code to reference new URLs
2. Rename GitHub org and repos
3. Workflows will temporarily break until step 2 completes

❓ **Which timing do you prefer?**

### 6. Old Domain Strategy
- ❓ Will you keep `icodewith.ai` domain active?
- ❓ If yes, for how long? (Recommended: 6-12 months minimum)
- ❓ Setup 301 redirects from old domain to new domain?

---

## Migration Approach (Recommended: Option A - Rename Organization)

### Why Rename Organization is Better
1. ✅ GitHub automatically redirects all old URLs to new URLs
2. ✅ All settings, webhooks, permissions preserved
3. ✅ Existing clones and forks continue to work
4. ✅ Less risky, faster migration
5. ✅ No need to update GitHub secrets or deploy keys (they stay the same)

### What GitHub Automatically Handles
- All repository URLs redirect (`icodewith-ai/*` → `ibuildwith-ai/*`)
- Web interface redirects work immediately
- Git operations (clone, push, pull) redirect automatically
- Existing webhooks continue to work
- GitHub Pages settings preserved

### What Doesn't Automatically Update (YOU must handle)
- CNAME records in GitHub Pages repositories
- Local git remote URLs (optional, redirects still work)
- Hard-coded references in code (we'll update these)

---

## Implementation Plan

### PHASE 1: Pre-Migration Preparation (USER Tasks)

#### 1.1 Domain Setup
**⚠️ CRITICAL: Do this BEFORE any code changes**

- [ ] **Register `ibuildwith.ai` domain** (if not already done)
- [ ] **Verify domain ownership** with registrar
- [ ] **Do NOT point DNS yet** - keep old domain active for now
- [ ] **Document current DNS settings** for `icodewith.ai` (for reference)

#### 1.2 Netlify Preparation
- [ ] **Decide**: Create new Netlify site or rename existing?
- [ ] If creating new site:
  - [ ] Create new Netlify site named `ibuildwithai` (or similar)
  - [ ] Link it to GitHub account
  - [ ] Configure environment variables (if any)
  - [ ] Do NOT configure domain yet
- [ ] If renaming:
  - [ ] Document current Netlify site name and settings

#### 1.3 GitHub Preparation
- [ ] **Backup critical data**:
  - [ ] Export repository settings (if possible)
  - [ ] Document any custom webhooks
  - [ ] Document collaborators and permissions
- [ ] **Notify collaborators** (if any) about upcoming migration
- [ ] **Verify you have owner/admin access** to organization

#### 1.4 Code Backup
- [ ] **Ensure all work is committed and pushed** to current repos
- [ ] **Tag current state**: `git tag v1.6.0-final-before-rebrand`
- [ ] **Push tags**: `git push origin --tags`
- [ ] **Verify staging site** is working correctly

---

### PHASE 2: GitHub Organization Migration (USER Tasks)

**⚠️ IMPORTANT: Do this during low-traffic period (late night/weekend)**

#### 2.1 Rename GitHub Organization
**Instructions**: [GitHub Docs - Renaming an Organization](https://docs.github.com/en/organizations/managing-organization-settings/renaming-an-organization)

1. [ ] Go to `https://github.com/organizations/icodewith-ai/settings/profile`
2. [ ] Click "Rename organization"
3. [ ] Enter new name: `ibuildwith-ai`
4. [ ] Review warnings and confirm
5. [ ] ✅ **GitHub will automatically redirect all old URLs**

**What Happens**:
- Organization URL changes: `icodewith-ai` → `ibuildwith-ai`
- All repository URLs automatically redirect
- All existing clones continue to work (via redirects)
- All GitHub Actions workflows continue to work
- All webhooks continue to work

#### 2.2 Rename Repositories
**For each repo, follow these steps**:

**Rename: icodewithai-code → ibuildwithai-code**
1. [ ] Go to `https://github.com/ibuildwith-ai/icodewithai-code/settings`
2. [ ] Under "Repository name", enter: `ibuildwithai-code`
3. [ ] Click "Rename"

**Rename: icodewithai-next → ibuildwithai-next**
1. [ ] Go to `https://github.com/ibuildwith-ai/icodewithai-next/settings`
2. [ ] Under "Repository name", enter: `ibuildwithai-next`
3. [ ] Click "Rename"

**Rename: icodewithai-prod → ibuildwithai-prod**
1. [ ] Go to `https://github.com/ibuildwith-ai/icodewithai-prod/settings`
2. [ ] Under "Repository name", enter: `ibuildwithai-prod`
3. [ ] Click "Rename"

**Rename: icodewithai-backend → ibuildwithai-backend**
1. [ ] Go to `https://github.com/ibuildwith-ai/icodewithai-backend/settings`
2. [ ] Under "Repository name", enter: `ibuildwithai-backend`
3. [ ] Click "Rename"

**Cody Framework (if keeping in org)**
- [ ] **Decision**: Keep `cody-framework` name as-is? Or rename?
- [ ] If renaming, provide new name: _______________

#### 2.3 Verify Migration
- [ ] Visit new organization URL: `https://github.com/ibuildwith-ai`
- [ ] Verify all 5 repos appear with new names
- [ ] Test old URLs redirect: `https://github.com/icodewith-ai/icodewithai-code` → should redirect
- [ ] Verify GitHub Actions is still working on current deployments

#### 2.4 Update Local Repository Remotes (Optional but Recommended)
**On your local machine** in `icodewithai-code` directory:

```bash
# Check current remote URL
git remote -v

# Update remote URL to new org/repo names
git remote set-url origin https://github.com/ibuildwith-ai/ibuildwithai-code.git

# Verify new URL
git remote -v

# Test connection
git fetch origin
```

**Note**: This step is optional since GitHub redirects will work, but recommended for clarity.

---

### PHASE 3: Code Updates (AGENT Tasks)

**After GitHub migration is complete**, AGENT will update all code references:

#### 3.1 Configuration Files
- [ ] Update `config/prod/config.toml` → `baseURL = "https://www.ibuildwith.ai"`
- [ ] Update `config/next/config.toml` → `baseURL = "https://next.ibuildwith.ai"`
- [ ] Update `config/_default/config.toml` → Update title, theme name (if needed)

#### 3.2 GitHub Workflows
- [ ] Update `.github/workflows/hugo-prod.yml`:
  - Workflow name: `Deploy to www.ibuildwith.ai`
  - `external_repository: ibuildwith-ai/ibuildwithai-prod`
  - `cname: www.ibuildwith.ai`
- [ ] Update `.github/workflows/hugo-next.yml`:
  - Workflow name: `Deploy to next.ibuildwith.ai`
  - `external_repository: ibuildwith-ai/ibuildwithai-next`
  - `cname: next.ibuildwith.ai`

#### 3.3 Backend Package Updates
- [ ] Update `backend/package.json`:
  - `name: "ibuildwithai-backend"`
  - `description: "Backend services for iBuildWith.ai"`
  - `repository.url: "https://github.com/ibuildwith-ai/ibuildwithai-backend.git"`

#### 3.4 JavaScript Updates
- [ ] Update `themes/icodewithai/assets/js/contact-form.js` → Netlify function URL
- [ ] Update `themes/icodewithai/assets/js/reminder-form.js` → Netlify function URL
  - **Note**: Actual URL depends on Netlify site name (need USER input)

#### 3.5 Analytics Updates
- [ ] Update `themes/icodewithai/layouts/_default/baseof.html`:
  - Plausible.io: `data-domain="ibuildwith.ai"`

#### 3.6 Documentation Updates (Lower Priority)
- [ ] Update `README.md` with new GitHub org and repo URLs
- [ ] Update `.cody/project/library/docs/content-management.md` (if needed)
- [ ] Update `.cody/project/library/docs/components.md` (if needed)

#### 3.7 Git Commit
- [ ] Commit all changes with message:
  ```
  v1.7.0 - Complete GitHub org and domain migration

  - Migrated from icodewith-ai → ibuildwith-ai organization
  - Renamed all repositories (code, next, prod, backend)
  - Updated all domain references: icodewith.ai → ibuildwith.ai
  - Updated GitHub workflows with new repo paths
  - Updated Netlify function endpoints
  - Updated analytics tracking domain

  🤖 Generated with Claude Code

  Co-Authored-By: Claude <noreply@anthropic.com>
  ```

---

### PHASE 4: GitHub Pages Configuration (USER Tasks)

#### 4.1 Update CNAME in ibuildwithai-next Repository
1. [ ] Go to `https://github.com/ibuildwith-ai/ibuildwithai-next`
2. [ ] Switch to `gh-pages` branch
3. [ ] Edit or create `CNAME` file
4. [ ] Content should be: `next.ibuildwith.ai`
5. [ ] Commit changes

**Note**: GitHub Actions workflow will overwrite this on next deployment, but we need it for initial setup.

#### 4.2 Update CNAME in ibuildwithai-prod Repository
1. [ ] Go to `https://github.com/ibuildwith-ai/ibuildwithai-prod`
2. [ ] Switch to `gh-pages` branch
3. [ ] Edit or create `CNAME` file
4. [ ] Content should be: `www.ibuildwith.ai`
5. [ ] Commit changes

#### 4.3 Configure GitHub Pages Settings
**For ibuildwithai-next**:
1. [ ] Go to `https://github.com/ibuildwith-ai/ibuildwithai-next/settings/pages`
2. [ ] Source: Deploy from branch `gh-pages` / `root`
3. [ ] Custom domain: `next.ibuildwith.ai`
4. [ ] Wait for DNS check to complete
5. [ ] ✅ Enable "Enforce HTTPS" once DNS is configured

**For ibuildwithai-prod**:
1. [ ] Go to `https://github.com/ibuildwith-ai/ibuildwithai-prod/settings/pages`
2. [ ] Source: Deploy from branch `gh-pages` / `root`
3. [ ] Custom domain: `www.ibuildwith.ai`
4. [ ] Wait for DNS check to complete
5. [ ] ✅ Enable "Enforce HTTPS" once DNS is configured

---

### PHASE 5: DNS Configuration (USER Tasks)

**⚠️ CRITICAL: This is when the actual cutover happens**

#### 5.1 Configure DNS for ibuildwith.ai

**At your domain registrar** (GoDaddy, Namecheap, Cloudflare, etc.):

**For next.ibuildwith.ai (Staging)**:
```
Type: CNAME
Name: next
Value: ibuildwith-ai.github.io
TTL: 3600 (or default)
```

**For www.ibuildwith.ai (Production)**:
```
Type: CNAME
Name: www
Value: ibuildwith-ai.github.io
TTL: 3600 (or default)
```

**For ibuildwith.ai (Apex Domain)**:
```
Type: A
Name: @ (or leave blank)
Value: 185.199.108.153
TTL: 3600

Type: A
Name: @ (or leave blank)
Value: 185.199.109.153
TTL: 3600

Type: A
Name: @ (or leave blank)
Value: 185.199.110.153
TTL: 3600

Type: A
Name: @ (or leave blank)
Value: 185.199.111.153
TTL: 3600
```

**Note**: These are GitHub Pages IP addresses (as of 2024). Verify current IPs at [GitHub Docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain).

#### 5.2 DNS Propagation
- [ ] **Wait 15-60 minutes** for DNS propagation
- [ ] **Test DNS resolution**:
  ```bash
  # Test staging domain
  nslookup next.ibuildwith.ai

  # Test production domain
  nslookup www.ibuildwith.ai
  ```
- [ ] **Verify CNAME record**:
  ```bash
  dig next.ibuildwith.ai CNAME
  dig www.ibuildwith.ai CNAME
  ```

#### 5.3 Verify GitHub Pages
- [ ] Visit `https://next.ibuildwith.ai` - should show staging site
- [ ] Visit `https://www.ibuildwith.ai` - should show production site
- [ ] Check for certificate warnings (may take a few minutes for GitHub to provision SSL)

---

### PHASE 6: Netlify Configuration (USER Tasks)

#### 6.1 Update Netlify Site Domain
**If you created a new Netlify site**:
1. [ ] Go to Netlify dashboard → Your new site
2. [ ] Domain settings → Add custom domain
3. [ ] Add domain: `ibuildwithai.netlify.app` (or your chosen subdomain)
4. [ ] Configure Netlify Functions (if needed)

**If you renamed existing site**:
1. [ ] Go to Netlify dashboard → Site settings
2. [ ] Update site name to new domain
3. [ ] Verify functions still work

#### 6.2 Update Netlify Function URLs (AGENT Task)
Once you provide the new Netlify site URL, AGENT will update:
- `themes/icodewithai/assets/js/contact-form.js`
- `themes/icodewithai/assets/js/reminder-form.js`

**USER: Please provide your new Netlify site URL**:
- Current: `https://icodewithai.netlify.app` (assumed)
- New: `https://_____________________.netlify.app`

#### 6.3 Test Forms
- [ ] Test contact form on staging site
- [ ] Test reminder form on staging site
- [ ] Verify emails are being sent correctly
- [ ] Test contact form on production site (after deployment)
- [ ] Test reminder form on production site (after deployment)

---

### PHASE 7: Deployment & Testing (AGENT + USER)

#### 7.1 Deploy to Staging (AGENT Task)
- [ ] AGENT: Push updated code to `dev` branch
- [ ] GitHub Actions automatically deploys to `ibuildwithai-next`
- [ ] Site publishes to `next.ibuildwith.ai`

#### 7.2 Test Staging Environment (USER Task)
Comprehensive testing checklist:

**Visual/Content Testing**:
- [ ] Homepage loads correctly at `https://next.ibuildwith.ai`
- [ ] Logo displays new "iBuildWith.ai" branding
- [ ] All images load correctly
- [ ] Navigation menu works (header and footer)
- [ ] Mobile menu works on mobile devices

**Content Section Testing**:
- [ ] Blog section loads and displays correctly
- [ ] Blog individual posts load
- [ ] Podcast section loads and displays correctly
- [ ] Podcast individual episodes load
- [ ] Presentations section loads and displays correctly
- [ ] Presentation individual pages load
- [ ] Apps section loads and displays correctly
- [ ] App individual pages load with photo galleries
- [ ] About Marcelo page loads
- [ ] Contact page loads

**Functionality Testing**:
- [ ] Contact form submits successfully
- [ ] Contact form sends email to correct address
- [ ] Reminder form submits successfully
- [ ] Reminder form sends email to correct address
- [ ] All internal links work correctly
- [ ] All external links work correctly
- [ ] Search functionality works (if applicable)

**Technical Testing**:
- [ ] Analytics tracking works (check Plausible.io dashboard)
- [ ] SSL certificate is valid (no browser warnings)
- [ ] All pages return HTTP 200 status
- [ ] No console errors in browser DevTools
- [ ] No broken images (check DevTools Network tab)
- [ ] Page load speed is acceptable
- [ ] Mobile responsiveness works on phone/tablet

**SEO Testing**:
- [ ] View page source and verify meta tags show "iBuildWith.ai"
- [ ] Open Graph image previews work (test with Facebook Debugger)
- [ ] Twitter Card previews work (test with Twitter Card Validator)
- [ ] Canonical URLs point to `ibuildwith.ai` domain
- [ ] Sitemap generates correctly at `/sitemap.xml`
- [ ] Robots.txt is correct

**Cross-Browser Testing**:
- [ ] Test in Chrome/Edge
- [ ] Test in Firefox
- [ ] Test in Safari (if on Mac)
- [ ] Test on mobile Safari (iPhone)
- [ ] Test on mobile Chrome (Android)

#### 7.3 Deploy to Production (USER Task)
**Only after staging tests pass completely**:

1. [ ] USER: Run the push-to-prod script:
   ```bash
   ./automations/push-to-prod.sh
   ```
   - Script will prompt for version number (suggest: `1.7.0`)
   - Script will merge `dev` → `main`
   - Script will push to production

2. [ ] GitHub Actions automatically deploys to `ibuildwithai-prod`
3. [ ] Site publishes to `www.ibuildwith.ai`

#### 7.4 Verify Production Deployment (USER Task)
**Repeat all tests from 7.2** on `www.ibuildwith.ai`:
- [ ] Quick smoke test: Homepage, Blog, Podcast, Apps
- [ ] Test contact form
- [ ] Test reminder form
- [ ] Verify analytics tracking
- [ ] Check SSL certificate
- [ ] Test on mobile device

---

### PHASE 8: Old Domain Redirect Setup (USER Tasks)

**⚠️ RECOMMENDED: Keep old domain active for 6-12 months minimum**

#### 8.1 Configure 301 Redirects (Optional but Highly Recommended)

**Option A: If keeping old GitHub Pages repos active**:
1. [ ] Keep `icodewith-ai/icodewithai-prod` repository
2. [ ] Create a minimal Hugo site with redirect HTML
3. [ ] Configure DNS to point old domain to old repo
4. [ ] Each page redirects to new domain with 301 status

**Option B: Use domain registrar redirects**:
1. [ ] Check if your registrar offers domain forwarding
2. [ ] Setup 301 redirect from `icodewith.ai` → `ibuildwith.ai`
3. [ ] Preserve URL paths (e.g., `/blog/post` → `/blog/post`)

**Option C: Use Netlify redirects**:
1. [ ] Create a new Netlify site for old domain
2. [ ] Add `_redirects` file with catch-all redirect
3. [ ] Point old domain DNS to Netlify

#### 8.2 Search Engine Updates
- [ ] **Google Search Console**:
  - [ ] Add new property for `ibuildwith.ai`
  - [ ] Submit new sitemap
  - [ ] Monitor for crawl errors
  - [ ] Request reindexing of key pages
- [ ] **Bing Webmaster Tools**:
  - [ ] Add new site for `ibuildwith.ai`
  - [ ] Submit new sitemap
- [ ] **Other Search Engines** (if you've registered with them):
  - [ ] Update sitemaps as needed

---

### PHASE 9: Post-Migration Monitoring (USER + AGENT)

#### 9.1 First 24 Hours (USER Tasks)
- [ ] Monitor analytics for traffic levels
- [ ] Check for error spikes in browser console
- [ ] Monitor contact form submissions
- [ ] Check social media links still work
- [ ] Monitor Discord for user reports

#### 9.2 First Week (USER Tasks)
- [ ] Monitor Google Search Console for crawl errors
- [ ] Check search rankings for key terms
- [ ] Monitor analytics for drop in organic traffic
- [ ] Review any 404 errors reported
- [ ] Test all social media share buttons

#### 9.3 First Month (USER Tasks)
- [ ] Review analytics trends
- [ ] Check for any broken backlinks
- [ ] Monitor search engine rankings
- [ ] Verify old domain redirects are working
- [ ] Consider reaching out to high-value referring sites about URL change

#### 9.4 Update External References (USER Tasks)
**Update your profiles on external platforms**:
- [ ] LinkedIn profile and company page
- [ ] Twitter/X profile bio
- [ ] YouTube channel description
- [ ] Discord server info
- [ ] GitHub profile README (if applicable)
- [ ] Any directory listings or portfolios
- [ ] Email signatures
- [ ] Business cards (if applicable)

---

## Risk Assessment & Mitigation

### High Risk Items

#### Risk 1: DNS Misconfiguration
**Impact**: Site becomes unreachable
**Mitigation**:
- Keep old domain DNS active until new domain is verified working
- Test DNS resolution before updating production
- Have registrar support contact info ready

#### Risk 2: GitHub Actions Failure
**Impact**: Unable to deploy updates
**Mitigation**:
- Test on staging environment first
- Verify `DEPLOY_TOKEN` secret still works after org rename
- Have manual deployment process ready as backup

#### Risk 3: Broken Forms (Netlify Functions)
**Impact**: Users can't contact you
**Mitigation**:
- Test forms thoroughly on staging
- Keep old Netlify site active as backup
- Have alternative contact method visible (email address)

#### Risk 4: SSL Certificate Issues
**Impact**: Browser warnings, users can't access site
**Mitigation**:
- Wait for GitHub to provision SSL (can take 1-24 hours)
- Don't enforce HTTPS until certificate is ready
- Inform users of temporary issues if needed

#### Risk 5: SEO Ranking Drop
**Impact**: Loss of organic traffic
**Mitigation**:
- Setup 301 redirects from old domain
- Keep redirects active for 6-12 months
- Submit new sitemap to search engines
- Monitor search console for issues

### Medium Risk Items

#### Risk 6: Analytics Data Loss
**Impact**: Can't track visitors during migration
**Mitigation**:
- Update Plausible.io domain tracking immediately
- Consider keeping old domain tracking active temporarily
- Document any data gaps for historical analysis

#### Risk 7: Social Media Share Counts Reset
**Impact**: Share counts on old URLs lost
**Mitigation**:
- Accept that share counts will reset (unavoidable)
- Old shares will redirect via 301
- Focus on creating new shareable content

#### Risk 8: Browser Cache Issues
**Impact**: Users see old branding/content
**Mitigation**:
- Update cache-control headers if needed
- Users will naturally see updates as cache expires
- Major changes are visible (domain change)

### Low Risk Items

#### Risk 9: Local Development Confusion
**Impact**: Developers confused by org/repo name changes
**Mitigation**:
- Update local git remotes (optional, redirects work)
- Document migration in README
- GitHub redirects handle most cases automatically

#### Risk 10: External Backlinks
**Impact**: Sites linking to old domain
**Mitigation**:
- 301 redirects preserve link value
- Reach out to high-value sites about update
- Most external links will redirect automatically

---

## Rollback Plan

**If critical issues arise during migration:**

### Immediate Rollback (DNS Level)
1. **Revert DNS records** to point back to old domain
2. **Wait for DNS propagation** (15-60 minutes)
3. **Old site becomes active again**
4. **Investigate issues and try again later**

### Code Rollback (Git Level)
1. **Checkout previous commit**:
   ```bash
   git checkout v1.6.0-final-before-rebrand
   ```
2. **Force push to dev branch** (if needed):
   ```bash
   git push origin HEAD:dev --force
   ```
3. **Verify staging site reverts**
4. **Fix issues before trying migration again**

### GitHub Organization Rollback
**⚠️ WARNING**: Cannot undo organization rename after someone else claims the old name!
- GitHub automatically redirects old URLs (so partial rollback is possible)
- If you need the old name back and it's still available, you can rename again
- Consider keeping old name reserved for 30+ days if possible

---

## Success Criteria

### Migration is Successful When:
- ✅ Organization renamed to `ibuildwith-ai`
- ✅ All 4 repos renamed with `ibuildwithai-*` prefix
- ✅ Staging site (`next.ibuildwith.ai`) fully functional
- ✅ Production site (`www.ibuildwith.ai`) fully functional
- ✅ All forms working (contact, reminder)
- ✅ Analytics tracking works
- ✅ SSL certificates valid on both domains
- ✅ GitHub Actions deploying successfully
- ✅ No console errors on key pages
- ✅ Mobile site works correctly
- ✅ Search engines can crawl new site
- ✅ 301 redirects from old domain working (if configured)

### Post-Migration Success (1 Week):
- ✅ No significant traffic drop
- ✅ No increase in 404 errors
- ✅ No user complaints about broken features
- ✅ Search engines indexing new domain
- ✅ Social media shares working
- ✅ Forms receiving submissions

### Long-Term Success (1 Month):
- ✅ Search rankings stable or improved
- ✅ Organic traffic at or above pre-migration levels
- ✅ No broken backlinks reported
- ✅ All external profiles updated
- ✅ Old domain traffic declining (users finding new domain)

---

## Estimated Timeline

### Conservative Estimate (Recommended)
- **Phase 1 (Pre-Migration Prep)**: 2-4 hours
- **Phase 2 (GitHub Migration)**: 1-2 hours
- **Phase 3 (Code Updates)**: 2-3 hours (AGENT)
- **Phase 4 (GitHub Pages Config)**: 1 hour
- **Phase 5 (DNS Configuration)**: 1 hour + 1-24 hours propagation
- **Phase 6 (Netlify Config)**: 1-2 hours
- **Phase 7 (Deployment & Testing)**: 3-5 hours
- **Phase 8 (Old Domain Redirects)**: 2-3 hours (optional)
- **Phase 9 (Monitoring)**: Ongoing

**Total Active Work**: 13-22 hours
**Total Calendar Time**: 2-4 days (including DNS propagation, testing, monitoring)

### Aggressive Estimate (Risky)
- **All phases completed in 1 day**: 8-12 hours of focused work
- **Risk**: Less testing time, higher chance of missing issues
- **Not recommended** unless urgent

---

## What YOU Need to Do vs What AGENT Will Do

### USER RESPONSIBILITIES (Critical - Only You Can Do These)

**Before Migration**:
- ✅ Register `ibuildwith.ai` domain
- ✅ Prepare Netlify site (create or rename)
- ✅ Backup current state (tag git repo)
- ✅ Answer all critical questions in this document

**During Migration**:
- ✅ Rename GitHub organization `icodewith-ai` → `ibuildwith-ai`
- ✅ Rename all 4 GitHub repositories
- ✅ Update CNAME files in GitHub Pages repos
- ✅ Configure GitHub Pages settings for both repos
- ✅ Configure DNS records at domain registrar
- ✅ Update Netlify site domain/settings
- ✅ Provide Netlify site URL to AGENT

**After Migration**:
- ✅ Test staging environment thoroughly (comprehensive checklist)
- ✅ Run push-to-prod script to deploy to production
- ✅ Test production environment
- ✅ Setup 301 redirects from old domain (optional but recommended)
- ✅ Update search engine sitemaps
- ✅ Monitor analytics and error logs
- ✅ Update external profiles and references

### AGENT RESPONSIBILITIES (AGENT Will Handle These)

**During Migration**:
- ✅ Update all configuration files (`config.toml`)
- ✅ Update GitHub workflow files (`.github/workflows/*.yml`)
- ✅ Update backend package.json
- ✅ Update JavaScript files (Netlify function URLs)
- ✅ Update analytics configuration
- ✅ Update documentation files
- ✅ Create comprehensive git commit with all changes

**After Migration**:
- ✅ Push updated code to `dev` branch (triggers staging deployment)
- ✅ Assist with troubleshooting any issues
- ✅ Update additional files if needed during testing

---

## Communication Plan

### Before Migration
- [ ] USER: Notify any collaborators or stakeholders
- [ ] USER: Schedule migration during low-traffic period
- [ ] USER: Prepare any necessary announcements

### During Migration
- [ ] USER: Monitor Discord/social media for user reports
- [ ] USER: Be ready to respond to issues quickly
- [ ] AGENT: Provide updates as each phase completes

### After Migration
- [ ] USER: Announce migration completion on social media
- [ ] USER: Update Discord server info
- [ ] USER: Send email to subscribers (if applicable)
- [ ] USER: Monitor for 24-48 hours actively

---

## Questions for USER (Please Answer These)

### Critical Questions (Need Before Starting)
1. **Domain Registration**:
   - Have you registered `ibuildwith.ai`? ___________
   - What's your domain registrar? ___________
   - Do you have DNS access? ___________

2. **GitHub Organization Strategy**:
   - Rename existing org? (Recommended) ___________
   - Or create new org? ___________

3. **Netlify Configuration**:
   - Current Netlify site name: ___________
   - Will you create new or rename? ___________
   - New Netlify site URL: ___________

4. **Cody Framework**:
   - Keep in renamed org? ___________
   - Or move elsewhere? ___________

5. **Migration Timing**:
   - Preferred day/time for migration: ___________
   - Backup plan if issues occur: ___________

6. **Old Domain Strategy**:
   - Keep `icodewith.ai` active for redirects? ___________
   - For how long? (Recommend: 6-12 months) ___________

### Nice to Know (Can Answer Later)
7. **Timeline Preference**:
   - Conservative (2-4 days)? ___________
   - Or aggressive (1 day)? ___________

8. **Testing Approach**:
   - Thorough testing on staging first? (Recommended) ___________
   - Or deploy directly to production? ___________

---

## Next Steps

### Step 1: Answer Critical Questions
- [ ] USER: Fill in answers to all 6 critical questions above
- [ ] USER: Review entire document for any concerns or questions

### Step 2: Schedule Migration
- [ ] USER: Pick date and time for migration
- [ ] USER: Block out sufficient time (recommend full day)
- [ ] USER: Prepare backup plans

### Step 3: Begin Phase 1
- [ ] USER: Complete all Pre-Migration Preparation tasks
- [ ] USER: Confirm domain registration
- [ ] USER: Prepare Netlify site
- [ ] USER: Tag current git state

### Step 4: Execute Migration
- [ ] Follow phases 2-9 in order
- [ ] Don't skip testing phases
- [ ] Monitor actively during and after

---

## Notes & Reminders

### Important Reminders
- ⚠️ **Don't rush** - Take time to test thoroughly
- ⚠️ **Keep backups** - Tag git state before starting
- ⚠️ **Monitor actively** - Watch for issues in first 24-48 hours
- ⚠️ **Have rollback ready** - Know how to revert if needed
- ⚠️ **Test on staging first** - Always deploy to next.ibuildwith.ai before production
- ⚠️ **Keep old domain active** - 301 redirects preserve SEO value

### GitHub Organization Rename Resources
- [GitHub Docs: Renaming an Organization](https://docs.github.com/en/organizations/managing-organization-settings/renaming-an-organization)
- [GitHub Docs: Managing a Custom Domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [GitHub Pages IP Addresses](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain)

### Contact Support If Needed
- **GitHub Support**: https://support.github.com
- **Netlify Support**: https://www.netlify.com/support/
- **Domain Registrar Support**: (your registrar's support page)

---

**Document Status**: ✅ Ready for Review
**Next Action**: USER to answer critical questions and schedule migration
**AGENT Status**: Ready to execute Phase 3 (Code Updates) once Phases 1-2 complete
