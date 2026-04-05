# Soul Resonances Frontend

A premium spiritual wellness membership app built with React, Vite, and Tailwind CSS.

## Overview

Soul Resonances is a full-featured membership platform featuring:
- **Authentication**: Supabase magic link auth (email-only, no passwords)
- **Membership Tiers**: Seeker ($9), Awakened ($19 featured), Enlightened ($39)
- **Content Management**: Dynamic articles from Supabase
- **API Demo**: Live integration with Soul Resonances API
- **Responsive Design**: Mobile-first, Tailwind CSS utilities only

## Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Navigation with mobile menu
│   │   ├── Footer.jsx       # Footer with links
│   │   └── ProtectedRoute.jsx # Auth guard
│   ├── pages/
│   │   ├── Home.jsx         # Hero, features, testimonials
│   │   ├── Membership.jsx   # Pricing tiers & FAQ
│   │   ├── Resources.jsx    # Free content & playlists
│   │   ├── Services.jsx     # Service offerings
│   │   ├── Api.jsx          # API demo & docs
│   │   ├── Login.jsx        # Magic link form
│   │   └── Dashboard.jsx    # Protected member dashboard
│   ├── lib/
│   │   └── supabase.js      # Client initialization
│   ├── App.jsx              # Main router
│   ├── main.jsx             # React entry
│   └── index.css            # Tailwind & custom styles
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── index.html
```

## Quick Start

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Server runs at http://localhost:5173

### Production Build
```bash
npm run build
npm run preview
```

## Technology Stack

- **React** 18.3.1 - UI library
- **Vite** 5.0.8 - Build tool
- **React Router** v6 - Routing
- **Tailwind CSS** 3.3.6 - Styling
- **Supabase JS** 2.38.4 - Auth & database
- **PostCSS** with Autoprefixer - CSS processing

## Design System

### Brand Colors
- **Purple**: `#4c1d95` (brand-purple)
- **Dark Purple**: `#2d0d47` (brand-purple-dark)
- **Gold**: `#d97706` (brand-gold)
- **Cream**: `#fef3c7` (brand-cream)

### Custom Tailwind Components
- `.btn-primary` - Gold button
- `.btn-secondary` - Purple button
- `.btn-outline` - Outlined button
- `.card` - White card with shadow
- `.card-cream` - Cream background card
- `.section-container` - Responsive max-width container
- `.hero-section` - Full-screen hero

## Pages & Features

### Home (/)
- Full-screen hero with gradient background
- Feature cards highlighting core offerings
- Testimonial section
- YouTube channel link

### Membership (/membership)
- Three tier cards with Stripe integration
- Most popular badge on Awakened tier
- Feature comparison
- FAQ accordion section
- Direct links to Stripe payment pages

### Resources (/resources)
- Free articles from Supabase (filterable by access_tier)
- Placeholder cards if no articles in DB
- YouTube playlist links
- Category badges

### Services (/services)
- Three service offerings with descriptions
- "Book a Session" CTAs via email
- Contact form links

### Developer API (/api)
- Live demo tabs for three endpoints
- Real API calls with demo key
- JSON response display
- Pricing tiers (Free, Basic $9, Pro $29)
- API documentation with examples
- Links to RapidAPI

### Login (/login)
- Email-only magic link authentication
- Supabase integration
- Error/success messages
- Redirect to dashboard on auth

### Dashboard (/dashboard)
- Protected route (redirects to login if unauthenticated)
- Display user's subscription tier
- Link to Stripe customer portal
- Show latest 3 articles user has access to
- Upgrade CTA for free users

## Authentication

### Magic Link Flow
1. User enters email on `/login`
2. Supabase sends magic link to email
3. Click link → authenticated → redirects to `/dashboard`
4. Session persists across navigation
5. Logout clears session

### Protected Routes
`ProtectedRoute` component checks session and redirects to `/login` if not authenticated.

## Integrations

### Supabase
- **URL**: https://yfphwdlmvilfjivuisvi.supabase.co
- **Key**: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
- **Tables**: `articles`, `profiles`

### Stripe Payment Links
- **Seeker $9/mo**: https://buy.stripe.com/8x28wPgUA0VodOpc6a7Vm0o
- **Awakened $19/mo**: https://buy.stripe.com/14A9AT7k0gUm25H7PU7Vm0p
- **Enlightened $39/mo**: https://buy.stripe.com/4gM9AT33KbA26lXgmq7Vm0q

### API Demo
- **Base URL**: https://soul-resonances-api.onrender.com
- **Auth**: Bearer sr_demo_free_1
- **Endpoints**:
  - POST `/v1/spiritual/daily-reading`
  - POST `/v1/spiritual/three-card-spread`
  - POST `/v1/spiritual/affirmation`

## Styling Guidelines

All styling uses **Tailwind CSS utility classes only**. No external UI libraries.

### Typography
- Font weights: 300 (light), 400 (normal), 500 (medium), 600 (semibold)
- Primary font: System sans-serif
- Elegant, not heavy - emphasis on light typography

### Spacing & Layout
- Max-width container: `max-w-7xl`
- Section padding: `py-20` standard
- Card padding: `p-8`
- Gap between elements: `gap-8`

### States
- Hover effects on links: `hover:text-brand-gold`
- Button hover: background darkening
- Transitions: `transition-colors`, `transition-all`

### Responsive
- Mobile-first approach
- Breakpoints: `md:` (768px), `lg:` (1024px)
- Grid scales: 1 column mobile → 2-3 columns desktop

## Development Notes

### Adding New Pages
1. Create file in `src/pages/YourPage.jsx`
2. Import in `src/App.jsx`
3. Add route to Routes
4. Link from Navbar/Footer as needed

### Adding New Components
1. Create file in `src/components/YourComponent.jsx`
2. Import and use in pages
3. Keep reusable and focused

### Styling New Elements
- Use existing custom classes: `.btn-primary`, `.card-cream`, etc.
- Combine with Tailwind utilities
- Add to `index.css` if reusable pattern
- Extend `tailwind.config.js` for new colors/sizes

### Database Integration
- Use `supabase` client from `src/lib/supabase.js`
- Example: `supabase.from('table').select().eq('field', value)`
- Handle loading/error states with useState

## Deployment

This project is ready for deployment to:
- **Vercel** (recommended for Vite + React)
- **Netlify**
- **AWS Amplify**
- Any static hosting with Node.js build support

Build output: `dist/` directory

## Support

For questions about Soul Resonances, visit:
- **YouTube**: @SoulResonances844
- **Instagram**: @soulresonances
- **Email**: vg@soulresonances.com

---

Built with care for the Soul Resonances community.
© 2026 Soul Resonances LLC. All rights reserved.
