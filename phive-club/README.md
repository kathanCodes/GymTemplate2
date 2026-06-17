# Phive Club — Landing Page

Premium dark-mode fitness club landing page, built with React, Tailwind CSS,
Framer Motion, and Lucide React. Inspired by phive.pt's kinetic, brutalist
UI direction.

## Setup

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## File structure

```
src/
  App.jsx              — assembles all sections
  index.css            — Tailwind directives + reduced-motion safety net
  main.jsx             — React entry point
  components/
    Hero.jsx            — full-screen hero, masked staggered headline
    Marquee.jsx          — infinite horizontal ticker
    Locations.jsx        — bento grid, hover-zoom cards, stagger-in
    Features.jsx         — sticky heading + amenities list w/ icons
    Classes.jsx           — horizontal-scroll class cards
    AppSection.jsx        — app promo, floating phone mockup
    Footer.jsx            — closing footer
```

## Display font

The design calls for a heavy, condensed display face (Monument Extended /
Integral CF). Neither is on Google Fonts — license one and self-host it,
then add an `@font-face` rule in `index.css` and point a `font-display`
Tailwind class at it. Until then every heading uses `font-black
tracking-tighter` on Inter, which approximates the same weight and
tightness.

## Adding smooth scroll (Lenis)

For the inertia/momentum scroll feel phive.pt uses, install Lenis:

```bash
npm install lenis
```

Then in `main.jsx`, before rendering:

```jsx
import Lenis from "lenis";

const lenis = new Lenis({ duration: 1.2, smoothWheel: true });
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
```

Framer Motion's `whileInView` triggers continue to work normally with
Lenis active — no changes needed in the section components.

## Notes

- All images are Unsplash placeholders — swap the `img` / background-image
  URLs in `Locations.jsx` and `Classes.jsx` for real photography.
- The Hero's background is a static image placeholder with a comment
  showing exactly where to drop in a `<video>` tag instead.
- Accent color is `#CCFF00` (electric lime) — used sparingly, only on
  primary CTAs and icons, per the brief's "very specific calls to action"
  direction.
- `prefers-reduced-motion: reduce` is respected globally via a CSS
  media query in `index.css`.
