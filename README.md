# Deepak Gouda Portfolio

A fully accessible, semantic HTML5 portfolio website built with modern web standards and WCAG 2.1 AA compliance.

## 📁 Project Structure

```
portfolio/
│
├── index.html          # Home page
├── about.html          # About page with bio, skills, timeline
├── projects.html       # Projects gallery with filtering
├── contact.html        # Contact form with validation
│
├── css/
│   ├── style.css       # Main stylesheet with CSS custom properties
│   └── responsive.css  # Responsive breakpoints and media queries
│
├── js/
│   └── script.js       # Navigation, form validation, filtering
│
├── images/             # Image assets (add your images here)
├── assets/             # Additional assets (fonts, icons, etc.)
│
├── favicon.ico         # Site favicon
├── robots.txt          # Search engine crawler instructions
├── sitemap.xml         # XML sitemap for SEO
│
└── README.md           # This file
```

## ✨ Features

### Semantic HTML5
- Proper use of `<header>`, `<main>`, `<footer>`, `<nav>`, `<section>`, `<article>`, `<aside>`
- Semantic elements: `<figure>`, `<figcaption>`, `<time>`, `<address>`, `<blockquote>`, `<cite>`
- Definition lists (`<dl>`, `<dt>`, `<dd>`) for FAQ content
- Ordered/unordered lists with proper `role="list"` attributes

### WCAG 2.1 AA Accessibility
- **Skip Navigation Link**: "Skip to main content" link for keyboard users
- **ARIA Landmarks**: `role="banner"`, `role="main"`, `role="contentinfo"`, `role="navigation"`
- **ARIA Attributes**: 
  - `aria-label` and `aria-labelledby` for sections
  - `aria-expanded` and `aria-controls` for mobile menu
  - `aria-current="page"` for active navigation
  - `aria-pressed` for filter toggle buttons
  - `aria-required`, `aria-invalid`, `aria-describedby` for form fields
  - `aria-live="polite"` for dynamic content announcements
- **Focus Management**: 
  - Visible focus indicators (`:focus-visible`)
  - Focus trap in mobile menu
  - Focus moves to first error field on form validation
- **Screen Reader Support**:
  - `.sr-only` class for visually hidden but accessible text
  - `aria-hidden="true"` on decorative elements
  - Meaningful `alt` text on images
- **Keyboard Navigation**: 
  - Full Tab navigation
  - Escape key closes mobile menu
  - Enter/Space activates buttons
- **Reduced Motion**: Respects `prefers-reduced-motion` preference
- **Color Contrast**: All text meets 4.5:1 contrast ratio (WCAG AA)
- **Form Accessibility**:
  - Associated `<label>` elements with `for` attribute
  - Error messages with `role="alert"`
  - Input hints with `aria-describedby`
  - Autocomplete attributes

### SEO Optimization
- Descriptive `<title>` tags per page
- Meta tags: `description`, `keywords`, `author`, `robots`
- Open Graph tags: `og:title`, `og:description`, `og:type`, `og:url`, `og:locale`
- Twitter Card meta tags
- Canonical URLs
- Semantic heading hierarchy (h1 → h2 → h3)
- XML sitemap
- robots.txt

### Responsive Design
- Mobile-first CSS with breakpoints at 576px, 768px, 992px, 1200px
- Flexible layouts using CSS Grid and Flexbox
- Touch-friendly tap targets (minimum 44x44px)
- Responsive images with `loading="lazy"`

### Performance
- No external dependencies (vanilla HTML/CSS/JS)
- Minimal CSS with CSS custom properties
- Lazy loading images
- Print stylesheet included

## 🎨 Pages

### Home (index.html)
- Hero section with call-to-action buttons
- Skills/services cards
- Featured projects preview
- Client testimonials
- Contact CTA banner

### About (about.html)
- Profile image and bio
- Statistics (years experience, projects, clients)
- Technical skills with progress bars
- Career timeline
- Core values section

### Projects (projects.html)
- Category filter buttons (All, Full-Stack, Frontend, Open Source)
- Project cards with images, tags, and links
- Live demo and source code links
- Empty state for no results

### Contact (contact.html)
- Contact information sidebar
- Validated contact form
- Success confirmation message
- FAQ section

## 🚀 Getting Started

1. Clone or download this repository
2. Open `index.html` in a web browser
3. No build process or dependencies required!

## 🧪 Testing Accessibility

Run these tools to verify accessibility:

1. **Lighthouse** (Chrome DevTools): Aim for 100 Accessibility score
2. **WAVE** (wave.webaim.org): Check for errors and alerts
3. **axe DevTools** (browser extension): Automated accessibility testing
4. **Keyboard Testing**: Navigate entire site using only Tab, Enter, Escape
5. **Screen Reader**: Test with NVDA (Windows), VoiceOver (Mac), or JAWS

## 📋 Checklist for Lighthouse 100

- [x] All images have `alt` attributes
- [x] Proper heading hierarchy (no skipped levels)
- [x] Color contrast meets WCAG AA (4.5:1)
- [x] Interactive elements are keyboard accessible
- [x] ARIA attributes used correctly
- [x] Form inputs have associated labels
- [x] Links have discernible names
- [x] HTML lang attribute is set
- [x] Document has a main landmark
- [x] Skip link is provided

## 📄 License

MIT License - Feel free to use this template for your own portfolio!

## 👤 Author

**Deepak Gouda** 

---

Built with ❤️ and accessibility in mind.
