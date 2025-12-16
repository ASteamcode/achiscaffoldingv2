## Repository Overview (Files & Folders)

This project is a **static website** built with **HTML / CSS / JavaScript**.  
Shared layout parts (Header/Footer) are stored once and loaded on every page.

### Root HTML Pages
- `index.html` — Home page (hero slider, sections, entry point of the website).
- `about.html` — About page content + layout.
- `services.html` — Services listing page.
- `service-details.html` — Single service details page layout + content sections.
- `projects.html` — Projects listing page.
- `project-details.html` — Project details layout (titles/sections for a single project).
- `gallery.html` — Gallery page (image grid + gallery JS behavior).
- `products.html` — Products page (includes 3D models viewer section + related scripts).
- `blog.html` — Blog listing page (blog cards + date handling).
- `blog-post-1.html` — Blog post details page (single article template).



### GitHub + VS Code
- `.github/workflows/static.yml` — GitHub Actions workflow used to deploy the static site (GitHub Pages).
- `.vscode/launch.json` — VS Code debug configuration (developer convenience).

### CSS Folder (`/css`)
Page-based styles are split to keep the project organized:
- `base.css` — Global base styling (fonts, resets, common utilities).
- `header.css` — Header/navigation styles.
- `footer.css` — Footer styles.
- `home.css` — Home page styles (hero, sections, homepage layout).
- `about.css` — About page styles.
- `services.css` — Services listing page styles.
- `service-details.css` — Service details page styles.
- `projects.css` — Projects listing page styles.
- `project-details.css` — Project details page styles.
- `gallery.css` — Gallery page styles.
- `products.css` — Products page styles (including layout for 3D viewer cards).
- `blog.css` — Blog listing + blog details shared styles.
- `style.css` — **Not used in the website** (kept as a **backup/legacy** stylesheet).

### JavaScript Folder (`/js`)
- `loadHeader.js` — Injects `partials/header.html` into all pages automatically.
- `loadFooter.js` — Injects `partials/footer.html` into all pages automatically.
- `menu.js` — Navigation/menu open/close behavior (desktop/mobile).
- `slider.js` — Home hero slider logic (slides, dots, arrows, timing).
- `clients-slider.js` — Clients logos slider behavior.
- `testimonials-slider.js` — Testimonials slider logic.
- `testimonials-modal.js` — Testimonials modal/open/close behavior if used.
- `why-slider.js` — “Why Choose Us” slider behavior.
- `blog-dates.js` — Handles blog card dates / formatting behavior.
- `gallery.js` — Gallery filtering/lightbox/grid behavior.
- `projects.js` — Projects page interactions (cards, modals, filtering if enabled).
- `products-3d.js` — Products 3D viewer logic (`.glb` models, loading, UI).
- `service-details.js` — Service details page interactions/scroll behavior.
- `scrollReveal.js` — Scroll-based reveal animations for sections.

### Partials (`/partials`)
Reusable layout components used on every page:
- `header.html` — Shared header/navigation markup.
- `footer.html` — Shared footer markup.

### Content & Assets (`/images`)
All images used across the website:
- `/images/blog` — Blog post thumbnails and blog assets.
- `/images/clients` — Client logos used in sliders/sections.
- `/images/gallery` — Gallery images displayed on `gallery.html`.
- `/images/reviews_pic` — Review/testimonial profile photos.
- `/images/services` — Service-related images.
- `/images/products` — 3D model files (`.glb`) used on the Products page.
- `/images/workDone` — Work documentation and project-specific photos/notes (reference archive).

### Projects Folder (`/projects`)
- `aishti-mall.html` — Example project page entry (project-specific HTML) .
