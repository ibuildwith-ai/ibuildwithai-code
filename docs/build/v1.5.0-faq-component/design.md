# Version Design Document : v1.5.0-faq-component
Technical implementation and design guide for the upcoming version.

## 1. Features Summary
_Overview of features included in this version._

This version introduces a reusable FAQ accordion component system that allows flexible display of frequently asked questions throughout the iCodeWith.ai site. Key features include:

- **FAQ Content Type**: Individual FAQ markdown files stored in `content/faq/` with descriptive filenames (e.g., `what-is-sdd.md`, `who-are-vibe-coders.md`)
- **Flexible Shortcode**: Hugo shortcode that accepts comma-separated FAQ slugs for custom ordering
- **Accordion UI Component**: Dark-themed accordion with green accent colors matching site design (reference: [faq-example.png](../../library/assets/faq-example.png))
- **Interactive Behavior**: One FAQ open at a time with smooth chevron animations
- **Responsive Design**: Mobile-first responsive behavior across all devices
- **Accessibility**: ARIA attributes and keyboard navigation support
- **Home Page Integration**: New FAQ section below "Next Generation App Builders"

## 2. Technical Architecture Overview
_High-level technical structure that supports all features in this version._

**Content Layer:**
- `content/faq/` directory containing individual `.md` files with descriptive names
  - Examples: `what-is-sdd.md`, `who-are-vibe-coders.md`, `how-does-ai-help.md`
- Each file has frontmatter with `question` field
- Markdown body contains the answer (supports rich formatting)
- `archetypes/faq.md` template for creating new FAQ files

**Presentation Layer:**
- Hugo shortcode: `layouts/shortcodes/faq.html`
  - Accepts parameter: comma-separated FAQ slugs (e.g., `"what-is-sdd,who-are-vibe-coders,how-does-ai-help"`)
  - Looks up FAQ files by slug (filename without .md extension)
  - Renders accordion markup with proper structure
  - Component only (no heading included)

**Styling Layer:**
- SCSS component in `themes/icodewithai/assets/scss/components/_faq.scss`
- Dark background with rounded borders
- Green accent color (#00D9A3) for active/hover states
- Chevron icon positioning and rotation
- Responsive breakpoints

**Interaction Layer:**
- JavaScript in `themes/icodewithai/assets/js/components/faq.js`
- Accordion behavior (one open at a time)
- Chevron rotation animation
- Smooth expand/collapse transitions
- Keyboard navigation support

## 3. Implementation Notes
_Shared technical considerations across all features in this version._

**Hugo Shortcode Design:**

Example usage on home page:
```html
<section class="faq-section">
  <h2>Frequently Asked Questions</h2>
  {{< faq "what-is-sdd,who-are-vibe-coders,what-do-vibe-coders-build" >}}
</section>
```

Example usage in a blog post:
```markdown
## Common Questions About This Topic
{{< faq "what-is-sdd,how-does-ai-help" >}}
```

Shortcode behavior:
- Parses comma-separated FAQ slugs (filename without .md extension)
- Maintains specified order
- Can be used multiple times on same page with different FAQ sets
- Works in any content file or layout template

**CSS Architecture:**
- Follow existing SCSS structure in theme
- Use existing CSS variable system for colors
- Maintain consistency with other components (cards, buttons)
- Mobile-first responsive design

**JavaScript Approach:**
- Vanilla JavaScript (no dependencies)
- Event delegation for performance
- Initialize on DOMContentLoaded
- Handle multiple FAQ components on same page

**Content Management:**
- Simple file-based system (no additional configuration needed)
- FAQ files can be created using Hugo archetype: `hugo new faq/my-new-question.md`
- Use descriptive slugs for filenames (e.g., `what-is-sdd.md` not `faq001.md`)
- No numbering system means unlimited FAQs with self-documenting names
- Content creators control display order via shortcode parameter

## 4. Other Technical Considerations
_Shared any other technical information that might be relevant to building this version._

**Accessibility:**
- Use custom accordion markup with proper ARIA attributes
- Add `aria-expanded`, `aria-controls`, `aria-labelledby` for screen readers
- Ensure keyboard navigation (Enter/Space to toggle, Tab to navigate)
- Maintain focus management when toggling items

**Performance:**
- Minimal JavaScript footprint
- CSS-based animations for smoothness
- No external dependencies
- Lazy load if FAQ section is below fold (optional enhancement)

**Reusability:**
- Component can be used on any page type (home, blog posts, presentations, etc.)
- Multiple FAQ sections can exist on same page with different questions
- Easy to maintain (new FAQ = just create new .md file)

**Integration with Existing Code:**
- Follow existing theme structure and naming conventions
- Use established color variables from design system
- Match existing component patterns (similar to card components)
- Integrate with existing JavaScript module pattern if present

## 5. Open Questions
_Unresolved technical or product questions affecting this version._

**Resolved during discovery:**
- ✅ Should component include heading? **No, just the accordion**
- ✅ How to specify FAQ order? **Via shortcode parameter**
- ✅ One FAQ open or multiple? **One at a time (accordion behavior)**
- ✅ Where on home page? **Below "Next Generation App Builders" section**
- ✅ File naming convention? **Descriptive slugs (what-is-sdd.md) instead of numbered (faq001.md)**

**Implementation decisions:**
- ✅ Use custom accordion markup with JavaScript (not native `<details>`/`<summary>`) to support "one open at a time" behavior
- ✅ FAQ content will support full markdown features (links, code blocks, lists, etc.)
- ✅ Fixed animation duration (no configurable parameter needed)
- ✅ No "collapse all" functionality (not needed since only one opens at a time)
