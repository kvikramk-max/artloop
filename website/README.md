# ArtLoop Events - Docusaurus Website

A boutique event company website built with Docusaurus, connecting hosts and performers for curated events.

## Features

- **Homepage**: Displays 3 upcoming events with beautiful cards (visible without scrolling on desktop)
- **Event Details Pages**: Individual pages for each event with full details and ticket purchase functionality
- **Host Registration**: Form for event hosts to register and show interest
- **Performer Registration**: Form for performers to register and showcase their talents
- **Email Integration**: All registrations are sent to sanket.bakshi@gmail.com

## Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn

### Installation

1. Navigate to the website directory:
```bash
cd website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The site will open at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

This will generate static files in the `build` directory.

### Serving the Production Build

```bash
npm run serve
```

## Email Setup

The registration forms are configured to send emails to `sanket.bakshi@gmail.com`. To enable this functionality, you need to set up FormSpree:

### Option 1: Using FormSpree (Recommended)

1. Go to [FormSpree.io](https://formspree.io/) and create a free account
2. Create two forms:
   - One for Host Registration
   - One for Performer Registration
3. Get the form IDs for each form
4. Update the following files:
   - `src/pages/register/host.tsx` - Replace `YOUR_FORM_ID` on line 39
   - `src/pages/register/performer.tsx` - Replace `YOUR_FORM_ID` on line 39

Example:
```typescript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
```

Replace `YOUR_FORM_ID` with your actual FormSpree form ID (e.g., `xpwaazbq`)

### Option 2: Using Custom Backend

If you prefer to use your own backend:

1. Create an API endpoint that accepts POST requests with the form data
2. Update the `handleSubmit` functions in both registration forms to point to your API
3. Ensure your backend sends emails to sanket.bakshi@gmail.com

## Project Structure

```
website/
├── src/
│   ├── components/       # React components
│   ├── css/             # Global styles
│   └── pages/           # Page components
│       ├── index.tsx    # Homepage with event cards
│       ├── events/      # Event detail pages
│       │   ├── [id].tsx
│       │   ├── 1.tsx
│       │   ├── 2.tsx
│       │   └── 3.tsx
│       └── register/    # Registration forms
│           ├── host.tsx
│           └── performer.tsx
├── static/              # Static assets
├── docusaurus.config.ts # Site configuration
└── package.json
```

## Customization

### Adding New Events

To add new events, update the `upcomingEvents` array in:
- `src/pages/index.tsx` (homepage)
- `src/pages/events/[id].tsx` (event details)

Then create a new file `src/pages/events/[new-id].tsx`:
```typescript
export { default } from './[id]';
```

### Changing Colors

Edit `src/css/custom.css` to change the primary brand colors.

### Updating Site Information

Edit `docusaurus.config.ts` to update:
- Site title and tagline
- Navigation menu items
- Footer links
- Organization name

## Deployment

### GitHub Pages

1. Update `docusaurus.config.ts` with your GitHub info
2. Run:
```bash
npm run deploy
```

### Netlify/Vercel

1. Connect your repository
2. Set build command: `npm run build`
3. Set publish directory: `build`

## Support

For questions or support, contact: sanket.bakshi@gmail.com

## License

Copyright © 2025 ArtLoop Events. All rights reserved.
