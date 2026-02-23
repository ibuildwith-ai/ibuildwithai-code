# Build and Deploy Architecture Refactor - v1.2.2

## Overview
Refactor the current GitHub Pages deployment to use separate repositories for production and staging, allowing for proper custom domain management and cleaner separation of concerns.

## Current State
- **Source Repository**: `icodewith-ai/icodewithai-code` (private, GitHub Pages enabled)
- **Production**: Deploys to `gh-pages` branch → `www.icodewith.ai`
- **Staging**: Deploys to `gh-pages-dev` branch → `next.icodewith.ai` (not working due to GitHub Pages limitations)

## Target State
- **Source Repository**: `icodewith-ai/icodewithai-code` (private, no GitHub Pages)
- **Production Repository**: `icodewith-ai/icodewithai-prod` (public, GitHub Pages enabled)
- **Staging Repository**: `icodewith-ai/icodewithai-next` (public, GitHub Pages enabled)

## Implementation Plan

### Phase 1: Create New Repositories
1. **Create `icodewith-ai/icodewithai-prod`**
   - Public repository
   - Enable GitHub Pages (source: `gh-pages` branch)
   - Add custom domain: `www.icodewith.ai`

2. **Create `icodewith-ai/icodewithai-next`**
   - Public repository
   - Enable GitHub Pages (source: `gh-pages` branch)
   - Add custom domain: `next.icodewith.ai`

### Phase 2: Generate Personal Access Token
1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token with these permissions:
   - `repo` (Full control of private repositories)
   - `workflow` (Update GitHub Action workflows)
3. Name it: `DEPLOY_TOKEN`
4. Save token securely for next steps

### Phase 3: Configure Repository Secrets
1. **In source repository** (`icodewith-ai/icodewithai-code`):
   - Add repository secret: `DEPLOY_TOKEN` (value: personal access token from Phase 2)

### Phase 4: Update GitHub Actions Workflows

#### Production Workflow (`.github/workflows/hugo-prod.yml`)
```yaml
name: Deploy to www.icodewith.ai

on:
  push:
    branches:
      - main

permissions:
  contents: read

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    env:
      HUGO_VERSION: 0.147.9
      HUGO_ENV: prod    
      HUGO_ENVIRONMENT: prod 
      TZ: America/Los_Angeles

    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          submodules: recursive

      - name: Install Hugo
        run: |
          wget -O hugo.deb https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_linux-amd64.deb
          sudo dpkg -i hugo.deb

      - name: Install Dart Sass
        run: |
          wget https://github.com/sass/dart-sass/releases/download/1.89.2/dart-sass-1.89.2-linux-x64.tar.gz
          tar -xzf dart-sass-1.89.2-linux-x64.tar.gz
          sudo cp -r dart-sass/* /usr/local/bin/

      - name: Build site
        run: hugo --environment prod --minify

      - name: Deploy to Production
        uses: peaceiris/actions-gh-pages@v3
        with:
          personal_token: ${{ secrets.DEPLOY_TOKEN }}
          external_repository: icodewith-ai/icodewithai-prod
          publish_branch: gh-pages
          publish_dir: ./public
          cname: www.icodewith.aicom
```

#### Staging Workflow (`.github/workflows/hugo-next.yml`)
```yaml
name: Deploy to next.icodewith.ai

on:
  push:
    branches:
      - dev

permissions:
  contents: read

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    env:
      HUGO_VERSION: 0.147.9
      HUGO_ENV: next 
      HUGO_ENVIRONMENT: next
      TZ: America/Los_Angeles

    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          submodules: recursive

      - name: Install Hugo
        run: |
          wget -O hugo.deb https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_linux-amd64.deb
          sudo dpkg -i hugo.deb

      - name: Install Dart Sass
        run: |
          wget https://github.com/sass/dart-sass/releases/download/1.89.2/dart-sass-1.89.2-linux-x64.tar.gz
          tar -xzf dart-sass-1.89.2-linux-x64.tar.gz
          sudo cp -r dart-sass/* /usr/local/bin/

      - name: Build site
        run: hugo --environment next --minify

      - name: Deploy to Staging
        uses: peaceiris/actions-gh-pages@v3
        with:
          personal_token: ${{ secrets.DEPLOY_TOKEN }}
          external_repository: icodewith-ai/icodewithai-next
          publish_branch: gh-pages
          publish_dir: ./public
          cname: next.icodewith.ai
```

### Phase 5: Update DNS Configuration (Namecheap)
1. **Production** (`www.icodewith.ai`):
   - Update CNAME record to point to: `icodewith-ai.github.io` (from `icodewithai-prod` repo)

2. **Staging** (`next.icodewith.ai`):
   - Update CNAME record to point to: `icodewith-ai.github.io` (from `icodewithai-next` repo)

### Phase 6: Clean Up Source Repository
1. **Disable GitHub Pages** in `icodewith-ai/icodewithai-code`
2. **Delete old deployment branches**:
   - Delete `gh-pages` branch
   - Delete `gh-pages-dev` branch

## Testing Strategy
1. **Test staging first**: Push to `dev` branch and verify `next.icodewith.ai` works
2. **Test production**: Push to `main` branch and verify `www.icodewith.ai` works
3. **Verify DNS propagation**: Check both domains resolve correctly

## Rollback Plan
If issues arise:
1. Re-enable GitHub Pages in source repository
2. Revert workflow changes
3. Update DNS back to original settings

## Benefits of New Architecture
- ✅ **Proper domain separation**: Each environment has its own GitHub Pages site
- ✅ **Security**: Clear separation between source code and deployed sites
- ✅ **Clarity**: Clear separation between source code and deployed sites
- ✅ **Scalability**: Easy to add more environments (e.g., `icodewithai-demo`)
- ✅ **Independence**: Each environment can have different settings/configurations

## Repository Naming Convention
- `icodewithai-prod` - Production deployment repository
- `icodewithai-next` - Staging deployment repository
- Pattern: `icodewithai-{environment}` for future environments

## Timeline
- **Phase 1-2**: 15 minutes (repository creation and token setup)
- **Phase 3-4**: 30 minutes (workflow updates and testing)
- **Phase 5**: 15 minutes (DNS updates, up to 48 hours for propagation)
- **Phase 6**: 10 minutes (cleanup)

**Total estimated time**: 1-2 hours (plus DNS propagation time)