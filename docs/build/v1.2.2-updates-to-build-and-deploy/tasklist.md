# Task List - Build and Deploy Architecture Refactor v1.2.2

## Phase 1: Create New Repositories (Marcelo)
**Estimated Time: 15 minutes**

### Task 1.1: Create Production Repository
- [x] **Who**: Marcelo
- [x] **Action**: Create new repository `icodewith-ai/icodewithai-prod`
- [x] **Settings**: Public repository
- [x] **Action**: Go to repository Settings → Pages
- [x] **Action**: Set source to "Deploy from a branch"
- [x] **Action**: Select branch: `gh-pages` (will be created by first deployment)
- [x] **Action**: Add custom domain: `www.icodewith.ai`
- [x] **Action**: Enable "Enforce HTTPS" (if available)

### Task 1.2: Create Staging Repository
- [x] **Who**: Marcelo
- [x] **Action**: Create new repository `icodewith-ai/icodewithai-next`
- [x] **Settings**: Public repository
- [x] **Action**: Go to repository Settings → Pages
- [x] **Action**: Set source to "Deploy from a branch"
- [ ] **Action**: Select branch: `gh-pages` (will be created by first deployment)
- [ ] **Action**: Add custom domain: `next.icodewith.ai`
- [ ] **Action**: Enable "Enforce HTTPS" (if available)

## Phase 2: Generate Personal Access Token (Marcelo)
**Estimated Time: 5 minutes**

### Task 2.1: Create Personal Access Token
- [x] **Who**: Marcelo
- [x] **Action**: Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
- [x] **Action**: Click "Generate new token (classic)"
- [x] **Action**: Set expiration to "No expiration" (or your preferred duration)
- [x] **Action**: Add note: "Deploy to external repositories"
- [x] **Action**: Select scopes:
  - [x] `repo` (Full control of private repositories)
  - [x] `workflow` (Update GitHub Action workflows)
- [x] **Action**: Generate token
- [x] **Action**: Copy token and save securely (will be used in next phase)

## Phase 3: Configure Repository Secrets (Marcelo)
**Estimated Time: 5 minutes**

### Task 3.1: Add Deploy Token to Source Repository
- [x] **Who**: Marcelo
- [x] **Action**: Go to `icodewith-ai/icodewithai-code` repository
- [x] **Action**: Go to Settings → Secrets and variables → Actions
- [x] **Action**: Click "New repository secret"
- [x] **Action**: Name: `DEPLOY_TOKEN`
- [x] **Action**: Value: [paste the personal access token from Phase 2]
- [x] **Action**: Click "Add secret"

## Phase 4: Update GitHub Actions Workflows (Claude)
**Estimated Time: 10 minutes**

### Task 4.1: Update Production Workflow
- [x] **Who**: Claude
- [x] **Action**: Update `.github/workflows/hugo-prod.yml`
- [x] **Changes**:
  - [x] Change `permissions` from `contents: write` to `contents: read`
  - [x] Update deployment step to use `personal_token: ${{ secrets.DEPLOY_TOKEN }}`
  - [x] Update `external_repository: icodewith-ai/icodewithai-prod`
  - [x] Update `cname: www.icodewith.ai`

### Task 4.2: Update Staging Workflow
- [x] **Who**: Claude
- [x] **Action**: Update `.github/workflows/hugo-next.yml`
- [x] **Changes**:
  - [x] Change `permissions` from `contents: write` to `contents: read`
  - [x] Update deployment step to use `personal_token: ${{ secrets.DEPLOY_TOKEN }}`
  - [x] Update `external_repository: icodewith-ai/icodewithai-next`
  - [x] Update `cname: next.icodewith.ai`

## Phase 5: Test Deployments (Marcelo + Claude)
**Estimated Time: 15 minutes**

### Task 5.1: Test Staging Deployment
- [x] **Who**: Marcelo
- [x] **Action**: Make a small change to any file in `dev` branch
- [x] **Action**: Push to `dev` branch
- [x] **Who**: Claude
- [x] **Action**: Monitor GitHub Actions workflow for success
- [x] **Action**: Verify deployment created `gh-pages` branch in `icodewithai-next`
- [x] **Action**: Check if `next.icodewith.ai` serves the content (may take a few minutes)

### Task 5.2: Test Production Deployment
- [x] **Who**: Marcelo
- [x] **Action**: Merge `dev` branch to `main` branch (or push directly to `main`)
- [x] **Who**: Claude
- [x] **Action**: Monitor GitHub Actions workflow for success
- [x] **Action**: Verify deployment created `gh-pages` branch in `icodewithai-prod`
- [x] **Action**: Check if `www.icodewith.ai` serves the content (may take a few minutes)

## Phase 6: Update DNS Configuration (Marcelo)
**Estimated Time: 10 minutes**

### Task 6.1: Update Production DNS
- [x] **Who**: Marcelo
- [x] **Action**: Log into Namecheap DNS management
- [x] **Action**: Locate CNAME record for `www.icodewith.ai`
- [x] **Action**: Verify it points to `icodewith-ai.github.io`
- [x] **Note**: This should already be correct, but verify the target repository is now `icodewithai-prod`

### Task 6.2: Update Staging DNS
- [x] **Who**: Marcelo
- [x] **Action**: Log into Namecheap DNS management
- [x] **Action**: Locate CNAME record for `next.icodewith.ai`
- [x] **Action**: Verify it points to `icodewith-ai.github.io`
- [x] **Note**: This should already be correct, but verify the target repository is now `icodewithai-next`

### Task 6.3: Wait for DNS Propagation
- [x] **Who**: Marcelo
- [x] **Action**: Wait up to 48 hours for DNS changes to propagate globally
- [x] **Action**: Test domains from different networks/locations
- [x] **Tools**: Use `dig` or online DNS propagation checkers

## Phase 7: Clean Up Source Repository (Marcelo)
**Estimated Time: 5 minutes**

### Task 7.1: Disable GitHub Pages
- [x] **Who**: Marcelo
- [x] **Action**: Go to `icodewith-ai/icodewithai-code` repository
- [x] **Action**: Go to Settings → Pages
- [x] **Action**: Unpublish site.

### Task 7.2: Delete Old Deployment Branches
- [x] **Who**: Marcelo
- [x] **Action**: Go to `icodewith-ai/icodewithai-code` repository
- [x] **Action**: Go to branches page
- [x] **Action**: Delete `gh-pages` branch
- [x] **Action**: Delete `gh-pages-dev` branch

## Phase 8: Final Testing and Validation (Marcelo + Claude)
**Estimated Time: 10 minutes**

### Task 8.1: Comprehensive Testing
- [x] **Who**: Marcelo
- [x] **Action**: Test `www.icodewith.ai` loads correctly
- [x] **Action**: Test `next.icodewith.ai` loads correctly
- [x] **Action**: Test navigation, links, and assets work on both domains
- [x] **Action**: Test responsive design on both domains

### Task 8.2: Test Development Workflow
- [x] **Who**: Marcelo
- [x] **Action**: Make a change in `dev` branch
- [x] **Action**: Push to `dev` branch
- [x] **Action**: Verify change appears on `next.icodewith.ai`
- [x] **Action**: Merge `dev` to `main`
- [x] **Action**: Verify change appears on `www.icodewith.ai`

### Task 8.3: Document New Workflow
- [x] **Who**: Claude
- [x] **Action**: Update `.vibedocs/reference-library/` documentation
- [x] **Action**: Update any build/deploy instructions
- [x] **Action**: Create retrospective document

## Summary
**Total Estimated Time: 1-2 hours (plus DNS propagation time)**

### Critical Success Factors:
- [x] Both repositories created and configured correctly
- [x] Personal access token has correct permissions
- [x] Repository secret added to source repository
- [x] Both workflows updated and tested
- [x] DNS records pointing to correct GitHub Pages sites
- [x] All domains loading correctly