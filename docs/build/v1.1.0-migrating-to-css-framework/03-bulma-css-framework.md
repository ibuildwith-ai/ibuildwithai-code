# Bulma CSS Framework Integration Plan

## Overview
Integrate Bulma, a modern CSS framework based on Flexbox, with Hugo using SCSS customization. Bulma provides a comprehensive component library while allowing full customization to match your dark theme.

## Why Choose Bulma CSS Framework?

### **Pros:**
- **CSS-only framework** - No JavaScript dependencies, perfect for Hugo
- **Comprehensive component library** - 40+ ready-to-use components
- **SCSS-based** - Full customization through variables
- **Modern architecture** - Flexbox-based, mobile-first design
- **Excellent Hugo integration** - Works seamlessly with Hugo Pipes
- **Active community** - Well-maintained with regular updates
- **Semantic class names** - Easy to understand and maintain
- **Accessibility built-in** - Components follow accessibility best practices

### **Cons:**
- **Framework opinions** - Some design decisions are opinionated
- **Learning curve** - Need to learn Bulma's class system and conventions
- **Bundle size** - Larger than custom CSS (though modular)
- **Customization limits** - Some deep customizations might be challenging

## Design System Components Available

### **Layout Components:**
- **Container** - Responsive containers with max-width
- **Columns** - Flexible grid system based on Flexbox
- **Section & Hero** - Page layout sections
- **Footer** - Pre-styled footer component
- **Level** - Horizontal alignment component

### **Navigation Components:**
- **Navbar** - Responsive navigation bar with mobile menu
- **Breadcrumb** - Navigation breadcrumbs
- **Pagination** - Page navigation component
- **Tabs** - Tab navigation component

### **Content Components:**
- **Box** - Generic content container (perfect for your cards)
- **Button** - Multiple button styles and states
- **Content** - Typography and content styling
- **Table** - Responsive table component
- **Tag** - Labels and tags
- **Title & Subtitle** - Heading hierarchy

### **Form Components:**
- **Field** - Form field wrapper
- **Control** - Input control wrapper
- **Input** - Text inputs with validation states
- **Textarea** - Multi-line text input
- **Select** - Dropdown select component
- **Checkbox & Radio** - Form controls
- **File Upload** - File input component

### **Interactive Components:**
- **Card** - Content cards (matches your current design)
- **Media Object** - Content with media (avatar + text)
- **Message** - Alert and notification boxes
- **Modal** - Overlay modal dialogs
- **Dropdown** - Dropdown menus

### **Layout Utilities:**
- **Spacing helpers** - Margin and padding utilities
- **Typography helpers** - Text alignment, color, size
- **Color helpers** - Background and text colors
- **Display helpers** - Show/hide, flexbox utilities
- **Responsive helpers** - Mobile/tablet/desktop specific classes

## Step-by-Step Conversion Plan

### **Phase 1: Bulma Setup & Configuration**
1. **Install Bulma** - Add Bulma SCSS source to your project
2. **Create custom SCSS structure** - Set up Bulma customization files
3. **Configure Hugo Pipes** - Update Hugo to process Bulma SCSS
4. **Override Bulma variables** - Customize colors, fonts, spacing to match your theme

### **Phase 2: Dark Theme Customization**
1. **Override color variables** - Set dark background, light text, green accent
2. **Customize component colors** - Update cards, buttons, navigation for dark theme
3. **Create dark theme variants** - Custom utility classes for dark theme elements
4. **Typography customization** - Match your current font stack and sizing

### **Phase 3: Template Conversion**
1. **Convert base layout** - Update baseof.html with Bulma's structure
2. **Convert header/navigation** - Use Bulma's navbar component
3. **Convert homepage sections** - Use Bulma's hero, section, and container classes
4. **Convert card components** - Use Bulma's card component with dark theme
5. **Convert blog templates** - Use Bulma's content and card components

### **Phase 4: Component Customization**
1. **Customize cards** - Match your current gradient and hover effects
2. **Style buttons and links** - Match your green accent color scheme
3. **Responsive behavior** - Ensure mobile-first responsive design
4. **Interactive states** - Customize hover, focus, active states

### **Phase 5: Optimization & Polish**
1. **Import only needed components** - Reduce bundle size
2. **Custom utility additions** - Add any missing utilities
3. **Performance testing** - Verify loading performance
4. **Cross-browser testing** - Ensure compatibility

## File Structure
```
themes/icodewithai/static/scss/
├── styles.scss              # Main import file
├── _variables.scss          # Bulma variable overrides
├── _custom.scss            # Custom components
├── _utilities.scss         # Additional utilities
└── bulma/                  # Bulma source files
    ├── bulma.scss
    ├── sass/
    │   ├── base/
    │   ├── components/
    │   ├── elements/
    │   ├── form/
    │   ├── grid/
    │   ├── helpers/
    │   └── layout/
```

## Dark Theme Customization

### **Variable Overrides (_variables.scss):**
```scss
// Colors
$black: #000000;
$grey-darker: #1a1a1a;
$grey-dark: #2a2a2a;
$white: #ffffff;
$grey-light: #a3a3a3;
$primary: #22c55e;
$primary-dark: #16a34a;

// Background colors
$body-background-color: $black;
$background: $grey-darker;

// Text colors
$text: $white;
$text-light: $grey-light;
$text-strong: $white;

// Component colors
$card-background-color: $grey-darker;
$card-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1);

// Border colors
$border: $grey-dark;
$border-hover: $primary;

// Link colors
$link: $primary;
$link-hover: $primary-dark;

// Button colors
$button-text-color: $white;
$button-text-hover-background-color: $grey-dark;
```

### **Custom Component Styles (_custom.scss):**
```scss
// Enhanced card with gradient background
.card-gradient {
  background: linear-gradient(135deg, #1a1a1a, #0a0a0a);
  border: 1px solid #2a2a2a;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: $primary;
    transform: translateY(-4px);
  }
}

// Custom button styles
.button.is-primary-gradient {
  background: linear-gradient(135deg, $primary, $primary-dark);
  border: none;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
}

// Custom scrollbar
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #1a1a1a;
}

::-webkit-scrollbar-thumb {
  background: $primary;
  border-radius: 4px;
}
```

## Template Examples

### **Hero Section with Bulma:**
```html
<section class="hero is-large">
  <div class="hero-body">
    <div class="container has-text-centered">
      <h1 class="title is-1">
        Hello, I'm <span class="has-text-primary">Marcelo</span>
      </h1>
      <p class="subtitle is-4">I build digital products with AI</p>
    </div>
  </div>
</section>
```

### **Apps Grid with Bulma Cards:**
```html
<div class="columns is-multiline">
  {{ range .Pages }}
  <div class="column is-half">
    <div class="card card-gradient">
      <div class="card-content">
        <div class="content">
          <h3 class="title is-5 has-text-white">{{ .Title }}</h3>
          <p class="has-text-grey-light">{{ .Params.description }}</p>
          <a href="{{ .Permalink }}" class="has-text-primary">View Project →</a>
        </div>
      </div>
    </div>
  </div>
  {{ end }}
</div>
```

### **Navigation with Bulma Navbar:**
```html
<nav class="navbar" role="navigation">
  <div class="navbar-brand">
    <a class="navbar-item">
      <div class="logo">ML</div>
      <span class="logo-text">Marcelo Lewin</span>
    </a>
  </div>
  
  <div class="navbar-menu">
    <div class="navbar-end">
      {{ range .Site.Menus.main }}
      <a href="{{ .URL }}" class="navbar-item">{{ .Name }}</a>
      {{ end }}
    </div>
  </div>
</nav>
```

## Hugo Integration

### **Main SCSS file (styles.scss):**
```scss
// Import custom variables first
@import "variables";

// Import Bulma
@import "bulma/bulma";

// Import custom styles
@import "custom";
@import "utilities";
```

### **Hugo template update (baseof.html):**
```html
{{ $style := resources.Get "scss/styles.scss" | resources.ToCSS | resources.Minify }}
<link rel="stylesheet" href="{{ $style.Permalink }}">
```

## **Estimated Timeline:** 3-4 days
## **Risk Level:** Medium (need to adapt Bulma components to match your design)
## **Maintenance:** Low (framework handles most updates, minimal custom code)

Bulma provides a comprehensive design system with 40+ components while allowing full customization to match your dark theme aesthetic. The SCSS-based architecture makes it perfect for Hugo integration.