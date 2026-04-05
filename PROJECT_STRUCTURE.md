# Soul Resonances Frontend - Project Structure

## Complete File List

### Root Configuration Files
- `package.json` - Dependencies and scripts
- `vite.config.js` - Vite server and build configuration
- `tailwind.config.js` - Tailwind CSS custom colors and theme
- `postcss.config.js` - PostCSS with Tailwind and Autoprefixer
- `index.html` - Main HTML entry point

### Source Files
- `src/main.jsx` - React entry point
- `src/index.css` - Tailwind directives and custom component styles
- `src/App.jsx` - Main app router with all routes defined
- `src/lib/supabase.js` - Supabase client initialization

### Components
- `src/components/Navbar.jsx` - Navigation with auth state and mobile menu
- `src/components/Footer.jsx` - Footer with links and social media
- `src/components/ProtectedRoute.jsx` - Route guard for authenticated pages

### Pages
- `src/pages/Home.jsx` - Hero, features, testimonials, YouTube CTA
- `src/pages/Membership.jsx` - Tier pricing cards with FAQ accordion
- `src/pages/Resources.jsx` - Free articles from Supabase + YouTube playlists
- `src/pages/Services.jsx` - Spiritual Services with contact CTA
- `src/pages/Api.jsx` - Live demo tabs, pricing, API documentation
- `src/pages/Login.jsx` - Magic link authentication form
- `src/pages/Dashboard.jsx` - Protected user dashboard with plan info

## Design System

### Colors (Tailwind Extended)
- `brand-purple`: #4c1d95 (deep purple)
- `brand-purple-dark`: #2d0d47 (darker purple)
- `brand-gold`: #d97706 (gold/champagne)
- `brand-cream`: #fef3c7 (cream/beige)

### Component Classes
- `.btn-primary` - Gold button with white text
- `.btn-outline` - Gold outline button with hover fill
- `.btn-secondary` - Purple button
- `.card` - White card with shadow and hover effect
- `.card-cream` - Cream background card
- `.section-container` - Max-width container with padding
- `.hero-section` - Full-screen centered flex container

## Key Features

### Authentication
- Supabase magic link auth (email-only)
- Protected routes redirect to /login
- Auth state persists across navigation

### Content Management
- Articles fetched from Supabase `articles` table
- Filterable by access_tier and published status
- Placeholder fallback if no articles

### Stripe Integration
- Three membership tiers with direct Stripe links
- Opens in new tabs with target="_blank"
- Seeker ($9), Awakened ($19 - featured), Enlightened ($39)

### API Integration
- Live demo tabs calling soul-resonances-api.onrender.com
- Bearer token: sr_demo_free_1
- Three endpoints: daily-reading, three-card-spread, affirmation
- Response displayed as formatted JSON

### Mobile Responsive
- Hamburger menu on mobile/tablet
- Grid layouts scale from 1 to 3 columns
- Touch-friendly button sizes

## Getting Started

```bash
npm install
npm run dev        # Start development server
npm run build      # Production build
npm run preview    # Preview production build
```

## Environment

- React 18.3.1
- Vite 5.0.8
- React Router v6
- Tailwind CSS 3.3.6
- Supabase JS Client 2.38.4

All styling uses Tailwind utility classes only - no external UI libraries.
