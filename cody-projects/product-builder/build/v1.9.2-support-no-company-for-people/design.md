# Version Design Document : v1.9.2-support-no-company-for-people
Technical implementation and design guide for the upcoming version.

## 1. Features Summary
_Overview of features included in this version._

Make the `title` and `company` fields optional when displaying people (guests, hosts, authors, presenters) across all content types. Currently, all templates unconditionally render `[name], [title] @ [company]`. When either field is null, empty, or "N/A" (case-insensitive), the display should gracefully omit the missing parts.

**Display Logic:**
- Title + Company: `Jane Doe, Developer @ Acme`
- Title only: `Jane Doe, Developer`
- Company only: `Jane Doe @ Acme`
- Neither: `Jane Doe`

**Affected Templates (7 locations across 6 files):**

| Template | Page Type | Locations | Current Pattern |
|----------|-----------|-----------|-----------------|
| podcast/list.html | List | Lines 62, 94 | `A conversation with [name], [title] @ [company]` |
| podcast/single.html | Detail | Lines 29, 107, 137 | `[name], [title] @ [company]` (header, guest bio, host bio) |
| blog/single.html | Detail | Line 56 | `[name], [title] @ [company]` (author bio) |
| videos/single.html | Detail | Line 92 | `[name], [title] @ [company]` (presenter bio) |
| events/single.html | Detail | Line 94 | `[name], [title] @ [company]` (presenter bio) |

## 2. Technical Architecture Overview
_High-level technical structure that supports all features in this version._

**Approach: Reusable Hugo Partial**

Create a single Hugo partial (`partials/person-title-company.html`) that encapsulates the conditional display logic. All 7 locations will call this partial instead of inlining the `[title] @ [company]` pattern.

**Partial Interface:**
- Input: A person data object (from `site.Data.people`)
- Output: Rendered string with appropriate format based on field presence

**Validation Logic (applied to both title and company):**
A field is considered "empty" if any of:
- The field does not exist on the object
- The field is an empty string `""`
- The field matches `"N/A"` (case-insensitive, e.g., "n/a", "N/a", "N/A")

**Hugo Template Implementation:**
```
{{ $hasTitle := and .title (ne .title "") (not (eq (lower .title) "n/a")) }}
{{ $hasCompany := and .company (ne .company "") (not (eq (lower .company) "n/a")) }}
{{ if and $hasTitle $hasCompany }}{{ .fullName }}, {{ .title }} @ {{ .company }}
{{ else if $hasTitle }}{{ .fullName }}, {{ .title }}
{{ else if $hasCompany }}{{ .fullName }} @ {{ .company }}
{{ else }}{{ .fullName }}{{ end }}
```

**Two Usage Contexts:**
1. **Bio sections** (blog, podcast, events, videos single pages): Partial renders inside `<h3>` tags
2. **Podcast list cards**: Partial renders inside `<div>` with "A conversation with" prefix — the prefix stays in the template, partial only handles the name/title/company part

## 3. Implementation Notes
_Shared technical considerations across all features in this version._

- **No JSON schema changes**: The people JSON files remain unchanged. Fields can be present with empty values or "N/A", or simply omitted.
- **No CSS changes**: This is purely a template logic change. The styling remains identical.
- **Backward compatible**: All existing people with title + company will render exactly as before.
- **Partial location**: `themes/ibuildwithai/layouts/partials/person-title-company.html`
- **Hugo's `lower` function**: Used for case-insensitive N/A comparison. Available in Hugo without additional configuration.

## 4. Other Technical Considerations
_Shared any other technical information that might be relevant to building this version._

- The podcast list page uses a slightly different pattern ("A conversation with...") compared to the bio sections. The partial should only output the `[name][, title][ @ company]` portion so each calling template controls the surrounding context.
- The host section in podcast/single.html hardcodes `marcelo-lewin` — this person currently has both title and company, but the fix applies universally.
- Events and videos templates iterate over multiple presenters in a `range` loop — the partial call needs to work within that loop context using the current iterator variable.

## 5. Open Questions
_Unresolved technical or product questions affecting this version._

None. Requirements and scope are clear.
