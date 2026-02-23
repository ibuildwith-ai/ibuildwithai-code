# Version Design Document : v1.8.8-blog-references-styling
Technical implementation and design guide for the upcoming version.

## 1. Features Summary
_Overview of features included in this version._

This version redesigns how blog article references/footnotes are displayed by implementing a collapsible accordion component. The references section will be closed by default to reduce visual clutter, with automatic expansion when users click citation links in the article body.

**Key Features:**
- Collapsible accordion wrapping Hugo's auto-generated `.footnotes` div
- Closed by default with "References (count)" header showing total citation count
- Reuses existing FAQ accordion component (styling, JavaScript, chevron animation)
- Click citation `[^1]` in body → opens accordion and scrolls to specific reference
- Remove Hugo's default `<hr>` horizontal line above footnotes
- Reduce vertical spacing between individual footnotes
- Replace `### Knowledge Sources` heading with HTML comment `<!-- References -->`
- Zero changes to Hugo's footnote rendering - enhancement via CSS/JS only
- Responsive design matching existing breakpoints
- Only affects blog posts with footnotes (other posts unaffected)
- SEO-safe: content remains in HTML, fully crawlable by search engines and AI
- Preserves Hugo's `↩︎` backlink functionality

## 2. Technical Architecture Overview
_High-level technical structure that supports all features in this version._

**Frontend Architecture:**
- **Hugo Static Site Generator**: Continues to process markdown footnotes (`[^1]`, `[^2]`, etc.) into HTML `.footnotes` div
- **JavaScript Enhancement**: Client-side script detects `.footnotes` div and wraps it in accordion structure
- **CSS Styling**: Targets `.footnotes` elements for visual refinement (remove `<hr>`, spacing, dark theme)
- **Existing FAQ Component**: Reuse accordion JavaScript logic and CSS styles from v1.5.0-faq-component

**Hugo Footnote Processing Flow:**
1. Markdown file contains `[^1]` citations and `[^1]: Source...` definitions
2. Hugo's Goldmark renderer automatically generates `.footnotes` div with `<ol>` list
3. Our JavaScript runs on page load, detects `.footnotes`, wraps in accordion HTML
4. User sees collapsible "References (24)" accordion, closed by default
5. Clicking citation in body opens accordion and scrolls to specific footnote

**File Structure:**
- `themes/ibuildwithai/assets/js/blog-references.js` - New JavaScript for footnote accordion
- `themes/ibuildwithai/assets/scss/_blog-references.scss` - New SCSS for footnote styling
- Reuse: `themes/ibuildwithai/assets/scss/_components.scss` (FAQ accordion styles)
- Reuse: `themes/ibuildwithai/assets/js/faq.js` (accordion behavior reference)

## 3. Implementation Notes
_Shared technical considerations across all features in this version._

**JavaScript Implementation:**
- Target selector: `document.querySelector('.footnotes')`
- Only execute if `.footnotes` exists (non-footnote posts unaffected)
- Count footnotes: `document.querySelectorAll('.footnotes ol li').length`
- Create accordion wrapper with structure matching FAQ component
- Add click handlers to in-body citation links (superscript `<a>` with `href="#fn:1"` pattern)
- On citation click: expand accordion, scroll to footnote, briefly highlight it

**CSS Implementation:**
- Hide Hugo's `<hr>`: `.footnotes hr { display: none; }`
- Reduce spacing: `.footnotes ol li { margin-bottom: 0.5rem; }` (adjust as needed)
- Apply dark theme: Use existing color variables `$neutral-800`, `$neutral-700`, `$primary-500`
- Reuse FAQ accordion classes: `.faq-accordion`, `.faq-item`, `.faq-header`, `.faq-content`
- Ensure responsive behavior at breakpoint ≤1050px

**Content Update:**
- Find all blog posts with `### Knowledge Sources` heading
- Replace with `<!-- References -->` HTML comment
- This is a manual find/replace task across blog markdown files

**Preservation Requirements:**
- Hugo's footnote HTML structure must remain unchanged
- All `↩︎` backlink functionality must continue working
- Footnote IDs (`id="fn:1"`, `id="fn:2"`) must remain intact for anchor links
- SEO: All content stays in DOM (hidden via CSS, not removed)

## 4. Other Technical Considerations
_Shared any other technical information that might be relevant to building this version._

**Browser Compatibility:**
- Use vanilla JavaScript (no framework dependencies)
- Target modern browsers (ES6+ syntax acceptable based on existing codebase)
- Ensure accordion works without JavaScript (progressive enhancement)

**Performance:**
- Minimal JavaScript execution (runs once on page load)
- No external dependencies or additional HTTP requests
- Reuse existing CSS to minimize bundle size

**Accessibility:**
- Maintain keyboard navigation support (inherited from FAQ accordion)
- Ensure ARIA attributes are properly set for screen readers
- Accordion must be keyboard-accessible (Enter/Space to toggle)
- Focus management when expanding accordion via citation click

**Hugo Configuration:**
- No changes needed to Hugo's Goldmark footnote configuration
- Footnote extension remains enabled with default settings
- `backlinkHTML: '&#x21a9;&#xfe0e;'` (return arrow) preserved

**Breakpoint Consistency:**
- Desktop: > 1050px
- Mobile/Tablet: ≤ 1050px
- Match existing responsive patterns from tables (v1.8.7) and FAQ (v1.5.0)

## 5. Open Questions
_Unresolved technical or product questions affecting this version._

**Resolved during discovery:**
- ✅ Header name: "References" (not "Knowledge Sources")
- ✅ Horizontal line removal: Yes, hide Hugo's `<hr>`
- ✅ Spacing reduction: Yes, reduce vertical gaps between footnotes
- ✅ Accordion style: Reuse FAQ component (chevron, animation, dark theme)
- ✅ Default state: Closed
- ✅ Count badge: Yes, show "References (24)"
- ✅ SEO impact: None - content remains in HTML
- ✅ Click behavior: Citation click opens accordion and scrolls to reference
- ✅ Markdown changes: Replace `### Knowledge Sources` with `<!-- References -->`

**No remaining open questions.**
