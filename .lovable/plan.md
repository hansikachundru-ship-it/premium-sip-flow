

## Plan: Replace Hero Carousel with Single Static Image

### What changes
- Copy the uploaded image (`image-155.png`) to `src/assets/hero-landing.png`
- Replace the entire `HeroCarousel.tsx` component: remove the two-slide carousel with all its animation, arrows, and dots, and replace it with a single full-width hero section displaying only the new image
- The section will keep the same crimson background and similar height (`h-[55vh] sm:h-[65vh] md:h-[80vh]`), with the image centered and covering the area using `object-cover`
- No other files change — `Index.tsx` still imports `HeroCarousel`

### Technical details
- Remove all carousel state, `AnimatePresence`, arrow buttons, and dot indicators
- Single `<img>` tag with the new asset, full width/height, `object-cover`, no overlay text or buttons
- Keep the component name `HeroCarousel` to avoid touching imports elsewhere

