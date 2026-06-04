# Patch – v2.1.2 — Privacy Policies Section
This document captures a lightweight fix or small enhancement that does not require a full version build cycle.

## Patch Version
v2.1.2 — Privacy Policies Section

## Date
2026-06-04

## Type
Small Enhancement

## Original Prompt
_What the **USER** originally said or requested._

"I'm working on a new Privacy Policy page. It can be based on the `themes/ibuildwithai/layouts/about-marcelo.html`. I have the privacy-policy.md to give you after you create the patch folder."

Follow-up clarifications:
- The privacy policies are not linked from anywhere in the site nav — they are for mobile apps the USER is publishing to the iOS and Android app stores, reached by direct URL only.
- The page should have just the header and below it placeholder text for the policy (100% text-based), plus the footer.
- The USER wants a `privacy-policies` folder/section, with this first one being `privacy-policy-sagitta-chains`, giving the URL `ibuildwith.ai/privacy-policies/privacy-policy-sagitta-chains`.

## Problem
_The **AGENT's** understanding of the issue or change needed._

The USER needs a place to host per-app privacy policies for mobile app store submissions (iOS and Android). These pages must be publicly reachable by direct URL but must NOT appear in any site navigation (top nav or footer links). The platform currently has no such section.

The first policy is for an app called "Sagitta Chains" and must live at `/privacy-policies/privacy-policy-sagitta-chains/`. The solution should be a reusable Hugo content section so additional app privacy policies can be added later by simply dropping a new Markdown file into the section folder.

The page should reuse the existing v2.0.0+ design language — specifically the `sub-page-hero.html` gradient header partial used by `about-marcelo.html` — followed by a single, purely text-based content area that renders the policy body, and the standard site footer.

## Plan
_How the **AGENT** intends to fix or implement the change._

1. **Create the content section.** Add `content/privacy-policies/privacy-policy-sagitta-chains.md` with front matter (`title`, `description`) and the policy body in Markdown. Until the USER provides the real `privacy-policy.md` content, stub the body with placeholder policy text. Hugo will route this to `/privacy-policies/privacy-policy-sagitta-chains/` automatically.

2. **Create a reusable section layout.** Add `themes/ibuildwithai/layouts/privacy-policies/single.html`:
   - Render the `sub-page-hero.html` partial (listing variant) using the page `title` as the hero title.
   - Below it, a single `section-v2` containing a text wrapper that renders the page content (`{{ .Content }}`) so the Markdown body drives the page — 100% text.
   - The standard `baseof.html` wrapper provides header and footer automatically.

3. **Keep policies out of navigation.** Add no nav or footer links. Because nothing references the section, it stays "unlisted" — reachable only by direct URL. (Hugo will still generate the section list page `/privacy-policies/`; confirm whether to leave it or suppress it.)

4. **Styling.** Reuse existing classes (`section-v2`, `container`, and the bio text/prose styling) so no new CSS is strictly required. Add minimal prose styling only if the rendered Markdown needs it for readability.

5. **Verify the build** with `hugo` (or `hugo server`) to confirm the page renders at the correct URL with header, policy text, and footer, and emits no template errors.

## Solution
_What was actually done to resolve the issue._

Created a new reusable `privacy-policies` Hugo content section for hosting per-app privacy policies used in iOS/Android app store submissions. The pages are publicly reachable by direct URL but are not linked anywhere in the site navigation, and the section index page is intentionally not rendered.

- **Section layout** (`themes/ibuildwithai/layouts/privacy-policies/single.html`): Renders the existing `sub-page-hero.html` partial (listing variant) with the page `title` and the meta lines, followed by the policy body. The body reuses the **blog post body wrapper** (`article.blog-single > .container > .content`) because the site's prose styling is scoped to `.blog-single .content` — a bare `.content` div renders unstyled. Reusing the blog wrapper makes the policy prose render identically to blog posts (color, headings, paragraph spacing, lists, etc.) with zero new CSS. The standard `baseof.html` provides the header and footer. Any future app policy is added by dropping a new Markdown file into `content/privacy-policies/`.

- **Section index suppression** (`content/privacy-policies/_index.md`): Uses Hugo `build` front matter (`render: never`, `list: never`) so `/privacy-policies/` returns 404 and the section never appears in any list. Child policy pages still render normally — `build` options apply only to the page they're set on and do not cascade. (Note: this key was `_build` before Hugo 0.145.0, which renamed it to `build`.)

- **First policy** (`content/privacy-policies/privacy-policy-sagitta-chains.md`): Front matter (`title`, `effective-date`, `developer`, `contact`) plus the full Sagitta Chains privacy policy body (provided by the USER). Resolves to `/privacy-policies/privacy-policy-sagitta-chains/`.

- **Header meta fields**: Per the USER's request, the layout renders `title` as the hero heading and two smaller lines beneath it: (1) "Effective &lt;effective-date&gt; by &lt;developer&gt;" (e.g., "Effective June 4, 2026 by Red Pill, Blue Pill Studios, LLC"), built to degrade gracefully if either field is missing; and (2) "Have questions? Contact us." with "Contact us" linked to the `contact` URL. No bolding. Note: `effective-date` is read via `index .Params "effective-date"` because Hugo's dot syntax can't handle the hyphen.

- **Hero partial enhancement** (`themes/ibuildwithai/layouts/partials/sub-page-hero.html`): Extended the **listing** variant to render an optional `meta` slice (the detail variant already supported this). Each meta item renders through `safeHTML` so the contact line can include the anchor tag, styled by the existing `.sub-page-hero__meta` class. The change is purely additive and guarded by `{{ range $meta }}` — no existing listing caller (blog list, presentations list, contact, about, newsletter) passes `meta`, so their output is unchanged.

- **Per-entry SEO** (`data/seo/content-types/privacy-policies/entries/privacy-policy-sagitta-chains.yaml`): Added following the site's existing SEO data convention so the page gets a correct `<title>`, meta description, and canonical URL instead of falling back to the site default. (The shared `seo.html` partial only applies frontmatter/SEO data for a section once that section exists in the SEO data tree.) Social image and technical fields inherit from defaults.

- **Design-system alignment** (`themes/ibuildwithai/assets/scss/_components.scss`): The shared `.sub-page-hero__meta` class uses the dimmer "Footer text" color (`$neutral-600`) at 0.875rem, which is correct for detail-page metadata (e.g., blog post dates) but does not match the listing-header subtext standard. The site standard for listing-header subtext is `.sub-page-hero__subtitle` (used on /podcast/, /blog/, etc.): the "Secondary text" color (`$neutral-400`) at 1.05rem. Added a scoped rule so listing-variant meta matches that subtitle exactly — same font (inherited), size, line-height, and color — while detail-variant meta stays unchanged:
  ```scss
  .sub-page-hero__listing .sub-page-hero__meta {
    font-size: 1.05rem;
    line-height: $line-height-base;
    color: $neutral-400;
  }
  ```

- **Top spacing alignment** (`themes/ibuildwithai/assets/scss/_components.scss`): Because the body reuses `.blog-single`, it inherited `.blog-single .content { margin-top: $spacing-md }` (24px) on top of the section's `$spacing-2xl` (80px) padding — placing the policy 104px below the hero, ~24px more than the standard info sub-pages (about-marcelo, contact, newsletter) which use `.section-v2` (80px, no extra content margin). Added a `privacy-policy-single` class to the body article and a scoped rule `.privacy-policy-single .content { margin-top: 0; }` so the policy sits 80px below the hero, matching the other info pages. Blog posts keep their original spacing.

Layout reuses existing classes/wrappers (`sub-page-hero`, `sub-page-hero__meta`, `blog-single`, `container`, `content`); the CSS added is two scoped rules — header subtext on-standard, and top spacing matching the info sub-pages. No navigation or footer links were added, by design.

## Files Changed
_List of files that were created, modified, or deleted._

| File | Action |
|------|--------|
| themes/ibuildwithai/layouts/privacy-policies/single.html | Created |
| themes/ibuildwithai/layouts/partials/sub-page-hero.html | Modified (listing variant now renders optional `meta`) |
| themes/ibuildwithai/assets/scss/_components.scss | Modified (header subtext matches subtitle standard; policy top spacing matches info sub-pages) |
| content/privacy-policies/_index.md | Created |
| content/privacy-policies/privacy-policy-sagitta-chains.md | Created |
| data/seo/content-types/privacy-policies/entries/privacy-policy-sagitta-chains.yaml | Created |

## Testing Notes
_How to verify the fix or change._

1. Run the site locally: `hugo server --environment local`.
2. Visit `http://localhost:1313/privacy-policies/privacy-policy-sagitta-chains/`. Confirm:
   - The gradient hero header shows "Privacy Policy — Sagitta Chains" with the "Last updated…" subtitle.
   - The placeholder policy text renders below the header as plain prose.
   - The standard site header and footer appear.
3. Visit `http://localhost:1313/privacy-policies/` and confirm it returns **404** (the section index is suppressed).
4. View page source and confirm the `<title>` is "Privacy Policy — Sagitta Chains | iBuildWith.ai", the meta description matches, and the canonical URL is `…/privacy-policies/privacy-policy-sagitta-chains/`.
5. Confirm no link to the privacy policy appears in the top nav or footer.

A production build (`hugo`) was run and completed with no errors; the page rendered at the correct path and the section index was not generated.
