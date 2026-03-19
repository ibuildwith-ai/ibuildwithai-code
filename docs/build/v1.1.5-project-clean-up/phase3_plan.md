# Phase 3 Implementation Plan - Variable System Extension

**Current Status Confirmed:** Phase 2 completed successfully. Many variables already exist, need to add missing ones and replace remaining hardcoded values.

## Step 1: Add Missing Variables to _variables.scss

### Animation & Transitions (already has $transition-* vars, need these):
- `$animation-duration-fast: 0.3s;`
- `$animation-duration-normal: 0.4s;`

### Effect Distances:
- `$hover-lift-distance: -4px;`
- `$slide-distance: 20px;`
- `$underline-offset: -4px;`
- `$underline-height: 2px;`

### Opacity Levels:
- `$opacity-light: 0.1;`
- `$opacity-medium: 0.2;`
- `$opacity-strong: 0.3;`
- `$opacity-backdrop: 0.7;`

### Component Dimensions:
- `$scrollbar-width: 8px;`
- `$bio-image-max-width: 280px;`
- `$bio-image-min-height: 300px;`
- `$certificate-image-width: 120px;`
- `$footer-logo-size: 72px;`
- `$footer-logo-size-mobile: 60px;`
- `$card-min-width: 400px;`
- `$bio-page-max-width: 900px;`
- `$footer-column-min-width: 120px;`

### Letter Spacing:
- `$letter-spacing-tight: 0.02em;`

## Step 2: Replace Hardcoded Values Found

### _base.scss:
- Line 60: `width: 8px;` → `width: $scrollbar-width;`

### _components.scss:
- Line 13: `rgba($neutral-900, 0.7)` → `rgba($neutral-900, $opacity-backdrop)`
- Line 43: `rgba($primary-500, 0.2)` → `rgba($primary-500, $opacity-medium)`
- Line 73-74: `rgba($primary-500, 0.3)` → `rgba($primary-500, $opacity-strong)`
- Line 103: `letter-spacing: 0.02em;` → `letter-spacing: $letter-spacing-tight;`
- Line 209: `min-height: 300px;` → `min-height: $bio-image-min-height;`
- Line 214: `max-width: 280px;` → `max-width: $bio-image-max-width;`
- Line 216: `min-height: 300px;` → `min-height: $bio-image-min-height;`
- Line 224: `rgba($primary-500, 0.2)` → `rgba($primary-500, $opacity-medium)`
- Line 375: `width: 120px;` → `width: $certificate-image-width;`
- Line 747-748: `width: 72px; height: 72px;` → `width: $footer-logo-size; height: $footer-logo-size;`
- Line 756: `rgba($primary-500, 0.2)` → `rgba($primary-500, $opacity-medium)`
- Line 788-789: `rgba($primary-500, 0.3)` → `rgba($primary-500, $opacity-strong)`
- Line 812: `letter-spacing: 0.02em;` → `letter-spacing: $letter-spacing-tight;`
- Line 842-843: `width: 60px; height: 60px;` → `width: $footer-logo-size-mobile; height: $footer-logo-size-mobile;`
- Line 865: `min-width: 120px;` → `min-width: $footer-column-min-width;`

### _layout.scss:
- Line 39: `max-width: 900px;` → `max-width: $bio-page-max-width;`
- Line 52: `minmax(400px, 1fr)` → `minmax($card-min-width, 1fr)`
- Line 67: `minmax(400px, 1fr)` → `minmax($card-min-width, 1fr)`

### _mixins.scss:
- Line 17: `translateY(-4px)` → `translateY($hover-lift-distance)`
- Line 83: `bottom: -4px;` → `bottom: $underline-offset;`
- Line 86: `height: 2px;` → `height: $underline-height;`
- Line 102: `translateY(-4px)` → `translateY($hover-lift-distance)`
- Line 124: `0.3s` → `$animation-duration-fast`
- Line 128: `0.4s` → `$animation-duration-normal`
- Line 140: `translateY(20px)` → `translateY($slide-distance)`

## Step 3: Validation
- Build site locally to ensure no visual changes
- Verify all variables are properly defined before use

**Total Changes:** ~30 hardcoded values → systematic variables