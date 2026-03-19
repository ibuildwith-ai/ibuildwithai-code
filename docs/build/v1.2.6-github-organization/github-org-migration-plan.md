# GitHub User-to-Organization Migration Plan

This guide walks through migrating your GitHub setup from a personal user account (`@bymarcelolewin`) to an organization (`@icodewith-ai`), based on your current repo setup and deployment workflows.

---

## ✅ Repositories to Migrate

- `alien-smash` (GitHub Pages: aliensmash.icodewith.ai)
- `galactic-invaders` (GitHub Pages: galacticinvaders.icodewith.ai)
- `icodewithai-code` (Deploys to `-next` and `-prod`)
- `icodewithai-next` (GitHub Pages: next.icodewith.ai)
- `icodewithai-prod` (GitHub Pages: www.icodewith.ai)
- `content-modeling-cli`
- `vibedocs`

All repos are public and fully updated locally.

---

## ✅ A–Z Migration Plan

### 🔹 A. Create the GitHub Organization

1. Go to: https://github.com/account/organizations
2. Click **“New organization”**
3. Name it: `icodewith-ai`
4. Choose the **Free plan**
5. Skip invites for now

> ✅ Done

---

### 🔹 B. Transfer the Repositories

For each repo:
1. Go to **Settings > Danger Zone > Transfer ownership**
2. Enter `icodewith-ai` as the new owner
3. Confirm by typing the repo name
4. Repeat for all 7

- ✅ `alien-smash`
- ✅ `galactic-invaders`
- ✅ `icodewithai-code` 
- ✅ `icodewithai-next`
- ✅ `icodewithai-prod`
- ✅ `content-modeling-cli`
- ✅ `vibedocs`

GitHub will redirect old links.

---

### 🔹 C. Update GitHub Actions Workflows

Update the `external_repository:` lines in build workflows:

**Before:**
```
 external_repository: bymarcelolewin/icodewithai-next
```

**After:**
```
✅ external_repository: icodewith-ai/icodewithai-next
```

✅ Do the same for `icodewithai-prod`.

✅ Ensure `DEPLOY_TOKEN` still has access to the org repos.

---

### 🔹 D. Update Local Git Remotes

In each local repo:

```bash
git remote set-url origin git@github.com:icodewith-ai/<repo-name>.git
```

Or for HTTPS:

```bash
git remote set-url origin https://github.com/icodewith-ai/<repo-name>.git
```

- ✅ `alien-smash`
- ✅ `galactic-invaders`
- ✅ `icodewithai-code` 
- ✅ `content-modeling-cli`
- ✅ `vibedocs`

---

### 🔹 E. Update GitHub Pages DNS

Your current Namecheap CNAMEs point to:
```
bymarcelolewin.github.io
```

Update them to:
```
icodewith-ai.github.io
```

Domains to update:
- ✅ ✅ `aliensmash.icodewith.ai`
- ✅ ✅ `galacticinvaders.icodewith.ai`
- ✅ ✅ `next.icodewith.ai`
- ✅ ✅ `www.icodewith.ai`

✅ Ensure your repo CNAME files still contain the correct custom domains.

---

### 🔹 F. Confirm or Regenerate `DEPLOY_TOKEN`

- ✅ If current token was created from GitHub UI, ensure it still has repo access to:
  - `icodewith-ai/icodewithai-next`
  - `icodewith-ai/icodewithai-prod`

- Or generate a new fine-grained token with correct scopes and replace `DEPLOY_TOKEN` in `icodewithai-code` repo secrets.

---

### 🔹 G. Re-Test Build Workflows

From `icodewithai-code`, push to:

- `dev` → triggers `icodewithai-next`
- `main` → triggers `icodewithai-prod`

✅ Confirm GitHub Pages publishes the sites properly.

---

### 🔹 H. Update README.md and Docs

Search and replace all `bymarcelolewin` references:
- Shields.io badges
- Project links
- Markdown docs

---

### 🔹 I. Update Cursor and GitHub CLI

If needed:

```bash
gh auth logout
gh auth login
```

Re-authenticate as your user with access to `icodewith-ai`.

---

## ✅ Summary

| Area                            | Action Required         |
|---------------------------------|--------------------------|
| Repo Ownership                  | ✅ Transfer to org       |
| GitHub Actions                  | ✅ Update `external_repository` |
| DNS (Namecheap)                 | ✅ Point to `icodewith-ai.github.io` |
| Local Git Remotes              | ✅ Update URLs           |
| `DEPLOY_TOKEN`                 | ✅ Verify or regenerate  |
| GitHub Pages                    | ✅ Confirm post-transfer |
| CI/CD Triggers                  | ✅ Push to test builds   |
| Docs/Badges                     | ✅ Update references     |
| Cursor / CLI                    | ⚠️ Re-auth if needed     |

---

You're ready to make the move!