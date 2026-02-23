# Repository Rename and Privacy Update - v1.2.3

## Overview
Rename the source code repository from `icodewith-ai/by-marcelo-lewin` to `icodewith-ai/icodewithai-code` and make it private, while maintaining the existing multi-repository deployment architecture.

## Current State
- **Source Repository**: `icodewith-ai/by-marcelo-lewin` (public)
- **Production Repository**: `icodewith-ai/icodewithai-prod` (public, GitHub Pages)
- **Staging Repository**: `icodewith-ai/icodewithai-next` (public, GitHub Pages)

## Target State
- **Source Repository**: `icodewith-ai/icodewithai-code` (private)
- **Production Repository**: `icodewith-ai/icodewithai-prod` (public, GitHub Pages) - unchanged
- **Staging Repository**: `icodewith-ai/icodewithai-next` (public, GitHub Pages) - unchanged

## Implementation Plan

### Phase 1: Pre-Rename Preparation (Marcelo)
**Estimated Time: 10 minutes**

#### Task 1.1: Backup Current State
- [x] **Who**: Marcelo
- [x] **Action**: Ensure all changes are committed and pushed to current repository
- [x] **Action**: Note current branch (`icodewith-ai/issue22` based on git status)
- [x] **Action**: Create local backup of repository (optional but recommended)

#### Task 1.2: Update Local Git Remote (Prepare for Later)
- [x] **Who**: Marcelo
- [x] **Action**: Prepare command to update local remote URL (don't execute yet)
- [x] **Command**: `git remote set-url origin https://github.com/icodewith-ai/icodewithai-code.git`

### Phase 2: GitHub Repository Rename (Marcelo)
**Estimated Time: 5 minutes**

#### Task 2.1: Rename Repository on GitHub
- [x] **Who**: Marcelo
- [x] **Action**: Go to `icodewith-ai/by-marcelo-lewin` repository on GitHub
- [x] **Action**: Go to Settings → General → Repository name
- [x] **Action**: Change name from `by-marcelo-lewin` to `icodewithai-code`
- [x] **Action**: Confirm rename
- [x] **Note**: GitHub automatically redirects old URLs temporarily

#### Task 2.2: Make Repository Private
- [x] **Who**: Marcelo
- [x] **Action**: In same Settings → General → Danger Zone
- [x] **Action**: Click "Change repository visibility"
- [x] **Action**: Select "Make private"
- [x] **Action**: Confirm by typing repository name
- [x] **Note**: Repository will no longer be publicly accessible

### Phase 3: Update Local Git Configuration (Marcelo)
**Estimated Time: 5 minutes**

#### Task 3.1: Update Local Remote URL
- [x] **Who**: Marcelo
- [x] **Action**: Execute: `git remote set-url origin https://github.com/icodewith-ai/icodewithai-code.git`
- [x] **Action**: Verify with: `git remote -v`
- [x] **Action**: Test connection with: `git fetch`

#### Task 3.2: Update Local Configuration
- [x] **Who**: Marcelo
- [x] **Action**: Verify GitHub authentication still works (personal access token)
- [x] **Action**: Test push to new repository name
- [x] **Action**: Verify branch protection rules still apply (if any)

### Phase 4: Update GitHub Actions Workflows (Claude)
**Estimated Time: 15 minutes**

#### Task 4.1: Update References in Documentation
- [x] **Who**: Claude
- [x] **Action**: Update `.github/workflows/hugo-prod.yml` comments/descriptions
- [x] **Action**: Update `.github/workflows/hugo-next.yml` comments/descriptions
- [x] **Note**: External repository references remain unchanged (`icodewithai-prod`, `icodewithai-next`) - No changes needed, workflows already correctly configured

#### Task 4.2: Update Documentation References
- [x] **Who**: Claude
- [x] **Action**: Update `.vibedocs/reference-library/folder-structure.md`
- [x] **Action**: Update `.vibedocs/reference-library/content-management.md`
- [x] **Action**: Update any other documentation referencing the old repository name
- [x] **Action**: Update `content/apps/hugo-powered-website/index.md` GitHub URL reference
- [x] **Action**: Update README.md if it references the repository name - No changes needed

### Phase 5: Update Project Documentation (Claude)
**Estimated Time: 10 minutes**

#### Task 5.1: Update Internal Documentation
- [x] **Who**: Claude
- [x] **Action**: Search for all references to "by-marcelo-lewin" in `.vibedocs/`
- [x] **Action**: Update repository references in all documentation
- [x] **Action**: Update any URLs or links that reference the old repository name
- [x] **Action**: Update development workflow instructions

#### Task 5.2: Update Configuration Comments
- [x] **Who**: Claude
- [x] **Action**: Check Hugo configuration files for repository references - No changes needed
- [x] **Action**: Update any comments or documentation within config files - No changes needed
- [x] **Action**: Verify no hardcoded repository names in templates - No changes needed

### Phase 6: Testing and Validation (Marcelo + Claude)
**Estimated Time: 15 minutes**

#### Task 6.1: Test Repository Access
- [ ] **Who**: Marcelo
- [ ] **Action**: Verify local git operations work (pull, push, fetch)
- [ ] **Action**: Test GitHub Actions still have access via personal access token
- [ ] **Action**: Verify repository privacy settings are correct

#### Task 6.2: Test Deployment Pipeline
- [ ] **Who**: Marcelo
- [ ] **Action**: Make a small change to `dev` branch
- [ ] **Action**: Push to `dev` branch
- [ ] **Who**: Claude
- [ ] **Action**: Monitor GitHub Actions workflow execution
- [ ] **Action**: Verify deployment to `icodewithai-next` still works

#### Task 6.3: Test Production Deployment
- [ ] **Who**: Marcelo
- [ ] **Action**: Merge `dev` to `main` branch
- [ ] **Who**: Claude
- [ ] **Action**: Monitor GitHub Actions workflow execution
- [ ] **Action**: Verify deployment to `icodewithai-prod` still works

### Phase 7: Update External References (Marcelo)
**Estimated Time: 5 minutes**

#### Task 7.1: Update Personal References
- [ ] **Who**: Marcelo
- [ ] **Action**: Update any bookmarks that reference the old repository URL
- [ ] **Action**: Update any personal documentation or notes
- [ ] **Action**: Update IDE/editor project configurations if needed

## Important Notes

### GitHub Automatic Redirects
- GitHub automatically redirects requests from old repository URLs to new ones
- This redirect is temporary and will eventually expire
- All references should be updated to use the new repository name

### Personal Access Token
- Existing personal access token (`DEPLOY_TOKEN`) should continue to work
- Token permissions remain unchanged
- No need to regenerate or update token

### Deployment Repositories
- `icodewithai-prod` and `icodewithai-next` repositories remain unchanged
- GitHub Actions workflows will continue to deploy to these repositories
- No changes needed to deployment configuration

### Local Development
- Local development workflow remains unchanged
- Same Hugo commands and environment configurations
- Only the git remote URL changes

## Risk Mitigation

### Backup Strategy
- GitHub maintains history even after rename
- Local repository serves as backup
- All deployment repositories remain unchanged

### Rollback Plan
If issues arise:
1. GitHub allows reverting repository name changes
2. Can make repository public again if needed
3. Local repository can push to restored repository
4. Deployment pipelines will continue working

### Testing Strategy
- Test all git operations after rename
- Verify GitHub Actions still work
- Test both staging and production deployments
- Confirm documentation is updated correctly

## Success Criteria

### Technical Validation
- [ ] Repository successfully renamed to `icodewithai-code`
- [ ] Repository is private and not publicly accessible
- [ ] Local git operations work correctly
- [ ] GitHub Actions workflows execute successfully
- [ ] Deployments to staging and production work
- [ ] All documentation references updated

### Functional Validation
- [ ] `next.icodewith.ai` continues to work
- [ ] `www.icodewith.ai` continues to work
- [ ] Password protection works on staging
- [ ] All website features function normally
- [ ] No broken links or references

## Post-Implementation

### Monitoring
- Monitor deployments for 24-48 hours after rename
- Watch for any GitHub Actions failures
- Check for any broken documentation links
- Verify all team members can access private repository

### Documentation Updates
- Update any external documentation that references the repository
- Create this retrospective document
- Update development onboarding materials

## Timeline
- **Total Estimated Time**: 1 hour
- **Critical Path**: GitHub rename → Local git update → Test deployments
- **Dependencies**: All current work must be committed before starting

## Communication Plan
- Inform any team members before starting the rename
- Document the change for future reference
- Update any project management tools or documentation

---

**Note**: This plan assumes the current multi-repository deployment architecture (v1.2.2) is already in place and working correctly. The rename only affects the source code repository, not the deployment repositories.