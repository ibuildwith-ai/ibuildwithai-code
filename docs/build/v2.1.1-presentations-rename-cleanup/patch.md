# Patch – v2.1.1 — Presentations Rename Cleanup
This document captures a lightweight fix or small enhancement that does not require a full version build cycle.

## Patch Version
v2.1.1 — Presentations Rename Cleanup

## Date
2026-05-04

## Type
Bug Fix

## Original Prompt
_What the **USER** originally said or requested._

> If you look at the last versions. We renamed events to presentations. But I think we forgot to rename `themes/ibuildwithai/assets/images/seo/content-types/events/` folder. And also, if we do that, we need to update all the entries in `data/seo/content-types/presentations/entries/`, the `social_image` field to point to that new folder (vs. events).
>
> Finally, I think we may need to move the `themes/ibuildwithai/assets/images/seo/content-types/videos/` files to the presentations folder (after you rename it from events). If the content of those are still needed. If not, we can delete the content of those and remove that folder.

## Problem
_The **AGENT's** understanding of the issue or change needed._

When the events → presentations rename was performed in v2.0.0, two SEO image folders and several stale documentation references were missed:

1. **`themes/ibuildwithai/assets/images/seo/content-types/events/`** still exists — should be renamed to `presentations/` to match the content type rename.
2. **`themes/ibuildwithai/assets/images/seo/content-types/videos/`** still exists — leftover from when videos were a separate content type before being merged back into presentations.
3. **17 SEO entry YAMLs** in `data/seo/content-types/presentations/entries/` have `social_image` paths pointing to the old `events/` and `videos/` folders. These currently work only because the old folders haven't been deleted yet.
4. An **orphaned typo file** `ai-dev-agemts-overview-social-share.jpg` exists in `events/` (note "agemts" instead of "agents") that nothing references.
5. **Stale references** in `cody.json` and several docs (`docs/reference/components.md`, `docs/reference/content-management.md`, `docs/plan/prd.md`, `docs/plan/plan.md`) still describe the content type as "events" and/or "videos".

## Plan
_How the **AGENT** intends to fix or implement the change._

### SEO Image Folder Cleanup

1. **Rename** `themes/ibuildwithai/assets/images/seo/content-types/events/` → `presentations/` (using `git mv` to preserve history).
2. **Move unique image** `ai-dev-agents-overview.jpg` from `videos/` to `presentations/`. The other 3 images in `videos/` (`ai-at-work-planet-cyber-sec.png`, `ai-cafe-presentation.jpg`, `tech-showcase-2025.jpg`) are duplicates of files already in events/presentations and don't need to be moved.
3. **Delete** the now-empty (or duplicate-only) `videos/` folder.
4. **Delete** the orphaned typo file `ai-dev-agemts-overview-social-share.jpg`.

### YAML Entry Updates

Update `social_image` field in 17 entries under `data/seo/content-types/presentations/entries/`:

**13 entries** with `events/...` → change to `presentations/...`:
- after-the-ai-prompt-what-comes-next.yaml
- agent-skills-foundations--best-practices--and-a-hands-on-workshop.yaml
- building-ai-skills-without-code-designing-workflow-driven-agents-for-non-developers.yaml
- building-marketing-tools-at-the-speed-of-vibes.yaml
- from-vibe-coding-to-shippable-solution.yaml
- github-copilot-dev-days-los-angeles.yaml
- how-to-publish-your-vibe-coded-app-for-others-to-use.yaml
- intro-to-agent-skills-at-cal-poly-pomona-ai-fair---hackathon.yaml
- multi-agent-vibe-coding-for-better-results.yaml
- openclaw-101-practical-ai-smarter-workflows-and-secure-setup.yaml
- turn-your-domain-expertise-into-a-mobile-app-with-ai.yaml
- turning-ux-into-apps-at-the-speed-of-vibes.yaml
- unlocking-the-strategic-mindset-of-ai.yaml
- vibe-coding-at-planet-cyber-sec-conference.yaml

**4 entries** with `videos/...` → change to `presentations/...`:
- an-overview-of-ai-dev-agents-for-non-developers.yaml
- from-vibe-coding-to-shippable-app-at-planet-cyber-sec.yaml
- structured-vibe-coding-without-losing-the-vibes.yaml
- tech-showcase-lightning-demos-cody-framework.yaml

### Documentation Updates

5. **`cody.json`** — update description to reflect "presentations" instead of "events, videos".
6. **`docs/plan/prd.md`** — replace lingering "events" / "videos" references with "presentations".
7. **`docs/plan/plan.md`** — same as prd.md.
8. **`docs/reference/components.md`** — update `layouts/events/single.html` → `layouts/presentations/single.html`.
9. **`docs/reference/content-management.md`** — update `events/` references to `presentations/`.

Note: `learn_more_url` fields in content with `meetup.com/.../events/` paths are legitimate external URLs and will NOT be changed.

### Verification

10. Run `hugo` and confirm a clean build with no missing-resource warnings related to social images.

## Solution
_What was actually done to resolve the issue._

Completed all planned cleanup of leftover `events/` and `videos/` references after the v2.0.0 content type rename:

- **Renamed** `themes/ibuildwithai/assets/images/seo/content-types/events/` → `presentations/` via `git mv` (history preserved for 8 image files).
- **Moved** `ai-dev-agents-overview.jpg` from `videos/` to `presentations/` (the only unique image; the other 3 in `videos/` were duplicates of files already in events/presentations and were deleted).
- **Deleted** the now-empty `videos/` folder.
- **Deleted** the orphaned typo file `ai-dev-agemts-overview-social-share.jpg` (note misspelled "agemts") that no entry referenced.
- **Updated** `social_image` paths in 17 SEO entry YAMLs (13 `events/...` → `presentations/...`, 4 `videos/...` → `presentations/...`).
- **Updated docs** (`cody.json`, `docs/plan/prd.md`, `docs/plan/plan.md`, `docs/reference/components.md`, `docs/reference/content-management.md`) to remove stale "events"/"videos" content-type language. Also swept lingering `themes/icodewithai/...` paths in `content-management.md` to `themes/ibuildwithai/...` for consistency with the v1.7.0 rebrand (these were on lines I was already editing).
- **Verified** with `hugo --environment local` build — clean, no missing-resource warnings. Spot-checked rendered HTML for two presentations confirms `<meta property="og:image">` now resolves to the new `/images/seo/content-types/presentations/...` paths.
- **Removed empty `apps/` SEO image folder** at `themes/ibuildwithai/assets/images/seo/content-types/apps/` — the apps content type was already fully removed in earlier work (no `content/apps/`, `layouts/apps/`, archetype, `data/seo/content-types/apps/`, or template references to its SEO data). The folder was empty and is now gone.

## Files Changed
_List of files that were created, modified, or deleted._

| File | Action |
|------|--------|
| `docs/build/v2.1.1-presentations-rename-cleanup/patch.md` | Created |
| `themes/ibuildwithai/assets/images/seo/content-types/events/after-the-ai-prompt-what-comes-next.png` → `.../presentations/after-the-ai-prompt-what-comes-next.png` | Renamed |
| `themes/ibuildwithai/assets/images/seo/content-types/events/ai-at-work-planet-cyber-sec.png` → `.../presentations/ai-at-work-planet-cyber-sec.png` | Renamed |
| `themes/ibuildwithai/assets/images/seo/content-types/events/ai-cafe-presentation.jpg` → `.../presentations/ai-cafe-presentation.jpg` | Renamed |
| `themes/ibuildwithai/assets/images/seo/content-types/events/building-ai-skills-without-code.png` → `.../presentations/building-ai-skills-without-code.png` | Renamed |
| `themes/ibuildwithai/assets/images/seo/content-types/events/cpp-ai-fair-hackathon-presentation.png` → `.../presentations/cpp-ai-fair-hackathon-presentation.png` | Renamed |
| `themes/ibuildwithai/assets/images/seo/content-types/events/i-build-with-ai-meetup-social-share.png` → `.../presentations/i-build-with-ai-meetup-social-share.png` | Renamed |
| `themes/ibuildwithai/assets/images/seo/content-types/events/tech-showcase-2025.jpg` → `.../presentations/tech-showcase-2025.jpg` | Renamed |
| `themes/ibuildwithai/assets/images/seo/content-types/videos/ai-dev-agents-overview.jpg` → `.../presentations/ai-dev-agents-overview.jpg` | Renamed |
| `themes/ibuildwithai/assets/images/seo/content-types/events/ai-dev-agemts-overview-social-share.jpg` | Deleted (orphaned typo) |
| `themes/ibuildwithai/assets/images/seo/content-types/videos/ai-at-work-planet-cyber-sec.png` | Deleted (duplicate) |
| `themes/ibuildwithai/assets/images/seo/content-types/videos/ai-cafe-presentation.jpg` | Deleted (duplicate) |
| `themes/ibuildwithai/assets/images/seo/content-types/videos/tech-showcase-2025.jpg` | Deleted (duplicate) |
| `themes/ibuildwithai/assets/images/seo/content-types/videos/` | Deleted (empty folder) |
| `themes/ibuildwithai/assets/images/seo/content-types/apps/` | Deleted (empty folder; apps content type previously removed) |
| `data/seo/content-types/presentations/entries/after-the-ai-prompt-what-comes-next.yaml` | Modified |
| `data/seo/content-types/presentations/entries/agent-skills-foundations--best-practices--and-a-hands-on-workshop.yaml` | Modified |
| `data/seo/content-types/presentations/entries/an-overview-of-ai-dev-agents-for-non-developers.yaml` | Modified |
| `data/seo/content-types/presentations/entries/building-ai-skills-without-code-designing-workflow-driven-agents-for-non-developers.yaml` | Modified |
| `data/seo/content-types/presentations/entries/building-marketing-tools-at-the-speed-of-vibes.yaml` | Modified |
| `data/seo/content-types/presentations/entries/from-vibe-coding-to-shippable-app-at-planet-cyber-sec.yaml` | Modified |
| `data/seo/content-types/presentations/entries/from-vibe-coding-to-shippable-solution.yaml` | Modified |
| `data/seo/content-types/presentations/entries/how-to-publish-your-vibe-coded-app-for-others-to-use.yaml` | Modified |
| `data/seo/content-types/presentations/entries/intro-to-agent-skills-at-cal-poly-pomona-ai-fair---hackathon.yaml` | Modified |
| `data/seo/content-types/presentations/entries/multi-agent-vibe-coding-for-better-results.yaml` | Modified |
| `data/seo/content-types/presentations/entries/openclaw-101-practical-ai-smarter-workflows-and-secure-setup.yaml` | Modified |
| `data/seo/content-types/presentations/entries/structured-vibe-coding-without-losing-the-vibes.yaml` | Modified |
| `data/seo/content-types/presentations/entries/tech-showcase-lightning-demos-cody-framework.yaml` | Modified |
| `data/seo/content-types/presentations/entries/turn-your-domain-expertise-into-a-mobile-app-with-ai.yaml` | Modified |
| `data/seo/content-types/presentations/entries/turning-ux-into-apps-at-the-speed-of-vibes.yaml` | Modified |
| `data/seo/content-types/presentations/entries/unlocking-the-strategic-mindset-of-ai.yaml` | Modified |
| `data/seo/content-types/presentations/entries/vibe-coding-at-planet-cyber-sec-conference.yaml` | Modified |
| `cody.json` | Modified (description + version metadata) |
| `docs/plan/prd.md` | Modified |
| `docs/plan/plan.md` | Modified |
| `docs/reference/components.md` | Modified |
| `docs/reference/content-management.md` | Modified |
| `release-notes.md` | Modified (added v2.1.1 entry) |

## Testing Notes
_How to verify the fix or change._

1. Run `hugo --environment local` and confirm the build completes with no missing-resource warnings (the only deprecation warnings should be pre-existing — `languageCode`, `.Site.Data` — already tracked in the backlog).
2. Visit any presentation detail page locally (e.g. `http://localhost:1313/presentations/github-copilot-dev-days-los-angeles/`) and view-source. The `<meta property="og:image">` URL should resolve to `/images/seo/content-types/presentations/...` (not `events/` or `videos/`).
3. Confirm `themes/ibuildwithai/assets/images/seo/content-types/` contains only `apps`, `blog`, `podcast`, `presentations` — no `events` or `videos`.
4. Spot-check that `data/seo/content-types/presentations/entries/an-overview-of-ai-dev-agents-for-non-developers.yaml` social_image renders correctly (this entry's image was the one moved over from `videos/`).
5. Optional: paste the production URL of any updated presentation into a social-share debugger (e.g. opengraph.xyz, Twitter Card validator) once deployed to verify the social image resolves.
