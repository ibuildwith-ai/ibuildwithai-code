# Version Tasklist – v1.7.0-rebrand-to-i-build-with-ai
This document outlines all the tasks to work on to deliver this particular version, grouped by phases.

| Status |      |
|--------|------|
| 🔴 | Not Started |
| 🟡 | In Progress |
| 🟢 | Completed |

---

## Phase 1: GitHub Organization & Repository Migration

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 1.1 | Backup current state | Tag current git state with `v1.6.0-final-before-rebrand` and push to remote | None | 🟢 Completed | USER |
| 1.2 | Verify GitHub access | Confirm owner/admin access to `icodewith-ai` organization | None | 🟢 Completed | USER |
| 1.3 | Rename GitHub organization | Rename `icodewith-ai` → `ibuildwith-ai` via GitHub settings | 1.1, 1.2 | 🟢 Completed | USER |
| 1.4 | Verify org rename | Visit new org URL and verify old URLs redirect automatically | 1.3 | 🟢 Completed | USER |
| 1.5 | Rename code repository | Rename `icodewithai-code` → `ibuildwithai-code` | 1.3 | 🟢 Completed | USER |
| 1.6 | Rename next repository | Rename `icodewithai-next` → `ibuildwithai-next` | 1.3 | 🟢 Completed | USER |
| 1.7 | Rename prod repository | Rename `icodewithai-prod` → `ibuildwithai-prod` | 1.3 | 🟢 Completed | USER |
| 1.8 | Rename backend repository | Rename `icodewithai-backend` → `ibuildwithai-backend` | 1.3 | 🟢 Completed | USER |
| 1.9 | Update local git remotes | Update local repository remote URLs to new org/repo names | 1.5 | 🟢 Completed | USER |
| 1.10 | Test git operations | Run `git fetch origin` to verify connection to renamed repos | 1.9 | 🟢 Completed | USER |

---

## Phase 2: Netlify Configuration

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 2.1 | Backup Netlify settings | Document current Netlify site configuration and environment variables | None | 🟢 Completed | USER |
| 2.2 | Rename Netlify team | Rename team from `iCodeWith.ai` to `iBuildWith.ai` and slug from `icodewithai` to `ibuildwithai` | 2.1 | 🟢 Completed | USER |
| 2.3 | Rename Netlify site | Rename site from `icodewithai` to `ibuildwithai` in Netlify dashboard | 2.2 | 🟢 Completed | USER |
| 2.4 | Verify Netlify URL | Confirm new site URL is `ibuildwithai.netlify.app` | 2.3 | 🟢 Completed | USER |
| 2.5 | Verify environment variables | Check that `RESEND_API_KEY`, `RECIPIENT_EMAIL`, `REMINDER_ADMIN_EMAIL` are still configured | 2.3 | 🟢 Completed | USER |
| 2.6 | Update GitHub connection | Verify Netlify is still connected to renamed GitHub repo | 2.3, 1.8 | 🟢 Completed | USER |

---

## Phase 3: Resend Email Domain Configuration

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 3.1 | Access Resend dashboard | Log in to Resend account | None | 🟢 Completed | USER |
| 3.2 | Add new sending domain | Add `send.ibuildwith.ai` as new domain in Resend | 3.1 | 🟢 Completed | USER |
| 3.3 | Get DNS records | Copy SPF, DKIM, and DMARC records from Resend dashboard | 3.2 | 🟢 Completed | USER |
| 3.4 | Add DNS records | Add all email DNS records to `ibuildwith.ai` domain at registrar | 3.3 | 🟢 Completed | USER |
| 3.5 | Verify sending domain | Wait for DNS propagation and verify domain in Resend dashboard | 3.4 | 🟢 Completed | USER |
| 3.6 | Test email sending | Send test email from Resend using new domain | 3.5 | 🟢 Completed | USER |

---

## Phase 4: Code Updates - Configuration Files

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 4.1 | Update prod config | Update `config/prod/config.toml` → `baseURL = "https://www.ibuildwith.ai"` | Phase 1 complete | 🟢 Completed | AGENT |
| 4.2 | Update next config | Update `config/next/config.toml` → `baseURL = "https://next.ibuildwith.ai"` | Phase 1 complete | 🟢 Completed | AGENT |
| 4.3 | Update default config | Update `config/_default/config.toml` → title, social media URLs (if needed) | Phase 1 complete | 🟢 Completed | AGENT |
| 4.4 | Verify config changes | Review all three config files for accuracy | 4.1, 4.2, 4.3 | 🟢 Completed | AGENT |

---

## Phase 5: Code Updates - GitHub Workflows

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 5.1 | Update prod workflow | Update `.github/workflows/hugo-prod.yml` → name, external_repository, cname | Phase 1 complete | 🟢 Completed | AGENT |
| 5.2 | Update next workflow | Update `.github/workflows/hugo-next.yml` → name, external_repository, cname | Phase 1 complete | 🟢 Completed | AGENT |
| 5.3 | Verify workflow syntax | Check YAML syntax and indentation in both workflow files | 5.1, 5.2 | 🟢 Completed | AGENT |

---

## Phase 6: Code Updates - Backend Files

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 6.1 | Update backend package.json | Update name, description, repository URL in `backend/package.json` | Phase 1 complete | 🟢 Completed | AGENT |
| 6.2 | Update contact-form function | Update branding text and `from:` email in `backend/netlify/functions/contact-form.js` | Phase 3 complete | 🟢 Completed | AGENT |
| 6.3 | Update reminder-form function | Update branding text and `from:` email in `backend/netlify/functions/reminder-form.js` | Phase 3 complete | 🟢 Completed | AGENT |
| 6.4 | Verify Resend integration | Review all Resend API calls for accuracy | 6.2, 6.3 | 🟢 Completed | AGENT |

---

## Phase 7: Code Updates - JavaScript Files

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 7.1 | Update contact form JS | Update Netlify function URL in `themes/icodewithai/assets/js/contact-form.js` | Phase 2 complete | 🟢 Completed | AGENT |
| 7.2 | Update reminder form JS | Update Netlify function URL in `themes/icodewithai/assets/js/reminder-form.js` | Phase 2 complete | 🟢 Completed | AGENT |
| 7.3 | Verify endpoint URLs | Check that both JS files point to correct Netlify site | 7.1, 7.2 | 🟢 Completed | AGENT |

---

## Phase 8: Code Updates - Analytics

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 8.1 | Update analytics domain | Update Plausible.io domain in `themes/icodewithai/layouts/_default/baseof.html` | Phase 1 complete | 🟢 Completed | AGENT |
| 8.2 | Create Plausible site | Create new site in Plausible.io dashboard for `ibuildwith.ai` domain | None | 🟢 Completed | USER |
| 8.3 | Verify analytics code | Check that data-domain attribute is correct | 8.1 | 🟢 Completed | AGENT |

---

## Phase 9: Code Updates - Documentation

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 9.1 | Update README | Update GitHub org/repo URLs and domain references in `README.md` | Phase 1 complete | 🟢 Completed | AGENT |
| 9.2 | Update content management docs | Update references in `.cody/project/library/docs/content-management.md` | Phase 1 complete | 🟢 Completed | AGENT |
| 9.3 | Update components docs | Update references in `.cody/project/library/docs/components.md` | Phase 1 complete | 🟢 Completed | AGENT |
| 9.4 | Verify documentation accuracy | Review all updated documentation files | 9.1, 9.2, 9.3 | 🟢 Completed | AGENT |

---

## Phase 10: Git Commit & Push to Staging

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 10.1 | Review all code changes | Verify all files updated correctly before committing | Phase 4-9 complete | 🟢 Completed | AGENT |
| 10.2 | Create git commit | Commit all changes with comprehensive message | 10.1 | 🟢 Completed | USER |
| 10.3 | Push to dev branch | Push commit to `dev` branch to trigger staging deployment | 10.2 | 🟢 Completed | USER |
| 10.4 | Monitor GitHub Actions | Watch GitHub Actions workflow to ensure successful deployment | 10.3 | 🟢 Completed | USER |
| 10.5 | Verify staging build | Confirm staging site builds without errors | 10.4 | 🟢 Completed | USER |

---

## Phase 11: GitHub Pages Configuration

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 11.1 | Update next repo CNAME | Update CNAME file in `ibuildwithai-next` gh-pages branch to `next.ibuildwith.ai` | Phase 10 complete | 🟢 Completed | USER |
| 11.2 | Configure next GitHub Pages | Set custom domain to `next.ibuildwith.ai` in repo settings | 11.1 | 🟢 Completed | USER |
| 11.3 | Wait for next DNS check | Wait for GitHub to verify DNS for staging domain (5-10 minutes) | 11.2 | 🟢 Completed | USER |
| 11.4 | Enable next HTTPS | Enable "Enforce HTTPS" for staging site once DNS verified | 11.3 | 🟢 Completed | USER |
| 11.5 | Update prod repo CNAME | Update CNAME file in `ibuildwithai-prod` gh-pages branch to `www.ibuildwith.ai` | Phase 10 complete | 🟢 Completed | USER |
| 11.6 | Configure prod GitHub Pages | Set custom domain to `www.ibuildwith.ai` in repo settings | 11.5 | 🟢 Completed | USER |
| 11.7 | Wait for prod DNS check | Wait for GitHub to verify DNS for production domain (5-10 minutes) | 11.6 | 🟢 Completed | USER |
| 11.8 | Enable prod HTTPS | Enable "Enforce HTTPS" for production site once DNS verified | 11.7 | 🟢 Completed | USER |

---

## Phase 12: Staging Testing - Visual & Content

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 12.1 | Test staging homepage | Visit `https://next.ibuildwith.ai` and verify homepage loads | Phase 11.4 complete | 🟢 Completed | USER |
| 12.2 | Verify logo branding | Check that logo displays "iBuildWith.ai" branding | 12.1 | 🟢 Completed | USER |
| 12.3 | Verify navigation | Test header and footer navigation menus | 12.1 | 🟢 Completed | USER |
| 12.4 | Test mobile menu | Open mobile menu on phone/tablet and verify it works | 12.1 | 🟢 Completed | USER |
| 12.5 | Test blog section | Visit blog list and individual blog posts | 12.1 | 🟢 Completed | USER |
| 12.6 | Test podcast section | Visit podcast list and individual episodes | 12.1 | 🟢 Completed | USER |
| 12.7 | Test presentations | Visit presentations list and individual pages | 12.1 | 🟢 Completed | USER |
| 12.8 | Test apps section | Visit apps list and individual app pages with galleries | 12.1 | 🟢 Completed | USER |
| 12.9 | Test about page | Visit About Marcelo page and verify content/branding | 12.1 | 🟢 Completed | USER |
| 12.10 | Verify all images load | Check browser DevTools Network tab for broken images | 12.1 | 🟢 Completed | USER |

---

## Phase 13: Staging Testing - Functionality

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 13.1 | Test contact form submission | Fill out and submit contact form on staging | Phase 12 complete | 🟢 Completed | USER |
| 13.2 | Verify contact email received | Check that contact email arrives at correct address | 13.1 | 🟢 Completed | USER |
| 13.3 | Verify contact email content | Confirm email contains correct branding and "from" address | 13.2 | 🟢 Completed | USER |
| 13.4 | Test reminder form submission | Fill out and submit reminder form on staging | Phase 12 complete | 🟢 Completed | USER |
| 13.5 | Verify reminder email received | Check that reminder email arrives at user's email | 13.4 | 🟢 Completed | USER |
| 13.6 | Verify reminder email content | Confirm email contains correct branding and "from" address | 13.5 | 🟢 Completed | USER |
| 13.7 | Test internal links | Click several internal links to verify they work | Phase 12 complete | 🟢 Completed | USER |
| 13.8 | Test external links | Click external links (Discord, social media) to verify | Phase 12 complete | 🟢 Completed | USER |

---

## Phase 14: Production Deployment

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 14.1 | Final staging verification | Confirm all staging tests passed successfully | Phase 12-13 complete | 🟢 Completed | USER |
| 14.2 | Run push-to-prod script | Execute `./automations/push-to-prod.sh` with version 1.7.0 | 14.1 | 🟢 Completed | USER |
| 14.3 | Monitor GitHub Actions | Watch production workflow execute successfully | 14.2 | 🟢 Completed | USER |
| 14.4 | Verify prod deployment | Check that production site updates at `www.ibuildwith.ai` | 14.3 | 🟢 Completed | USER |
| 14.5 | Wait for DNS propagation | Allow 5-10 minutes for changes to fully propagate | 14.4 | 🟢 Completed | USER |

---

## Phase 15: Production Testing - Quick Smoke Tests

| ID  | Task             | Description                             | Dependencies | Status | Assigned To |
|-----|------------------|-----------------------------------------|-------------|----------|--------|
| 15.1 | Test prod homepage | Visit `https://www.ibuildwith.ai` and verify homepage loads | Phase 14.5 complete | 🟢 Completed | USER |
| 15.2 | Quick content check | Spot check blog, podcast, presentations, apps sections | 15.1 | 🟢 Completed | USER |
| 15.3 | Test contact form | Submit contact form on production | 15.1 | 🟢 Completed | USER |
| 15.4 | Verify contact email | Check that production contact email arrives | 15.3 | 🟢 Completed | USER |
| 15.5 | Test reminder form | Submit reminder form on production | 15.1 | 🟢 Completed | USER |
| 15.6 | Verify reminder email | Check that production reminder email arrives | 15.5 | 🟢 Completed | USER |
| 15.7 | Verify SSL certificate | Check for valid SSL on production domain | 15.1 | 🟢 Completed | USER |
| 15.8 | Check analytics tracking | Verify Plausible.io tracking production visits | 15.1 | 🟢 Completed | USER |
| 15.9 | Test on mobile device | Open production site on actual mobile device | 15.1 | 🟢 Completed | USER |
| 15.10 | Verify no console errors | Check browser console for errors on production | 15.1 | 🟢 Completed | USER |

---

## Summary Statistics

**Total Phases**: 15
**Total Tasks**: 89
**USER Tasks**: ~70 tasks (79%)
**AGENT Tasks**: ~19 tasks (21%)

**Estimated Time**:
- **Active Work**: 8-12 hours total
- **Waiting Time**: 2-4 hours (DNS propagation, SSL certificates)
- **Total Calendar Time**: 1-2 days

---

## Critical Path (Must Complete in Order)

1. **Phase 1** (GitHub Migration) → **Phase 2** (Netlify) → **Phase 3** (Resend)
2. **Phase 4-9** (All Code Updates)
3. **Phase 10** (Git Commit & Deploy to Staging)
4. **Phase 11** (GitHub Pages Config)
5. **Phase 12-13** (Staging Testing)
6. **Phase 14** (Production Deployment)
7. **Phase 15** (Production Testing)

---

## Version Complete!

All critical phases of the v1.7.0 rebrand are complete. The iBuildWith.ai website is now live in production with full functionality.
