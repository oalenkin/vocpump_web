# FlashBot Landing Page

A modern landing page for a Telegram flashcard bot built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- **Hero Section** with call-to-action
- **Features Grid** showcasing bot capabilities
- **How It Works** step-by-step guide
- **FAQ Section** with accordion UI
- **Blog System** with Markdown support
- **Privacy Policy** page
- **SEO Optimized** with meta tags and Schema.org markup
- **Analytics Ready** (Google Analytics & Yandex Metrika)
- **Mobile Responsive** design
- **TypeScript** for type safety
- **Tailwind CSS** for styling

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Package Manager:** npm
- **Hosting:** Vercel-ready

## Project Structure

```
flashcards-bot-landing/
├── public/
│   ├── images/          # Image assets
│   ├── og-image.jpg     # Social media preview image
│   └── robots.txt       # SEO crawler instructions
├── src/
│   ├── app/             # Next.js App Router pages
│   │   ├── blog/        # Blog listing and posts
│   │   ├── privacy/     # Privacy policy
│   │   ├── layout.tsx   # Root layout with SEO
│   │   ├── page.tsx     # Home page
│   │   └── globals.css  # Global styles
│   ├── components/      # React components
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── FAQ.tsx
│   │   └── Footer.tsx
│   ├── lib/             # Utilities
│   │   ├── analytics.ts # Analytics tracking
│   │   ├── seo.ts       # SEO helpers
│   │   └── constants.ts # Site configuration
│   └── content/
│       └── blog/        # Markdown blog posts
├── next.config.ts       # Next.js configuration
├── tailwind.config.ts   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or pnpm package manager

### Installation

1. **Clone the repository:**

```bash
cd /path/to/flash_cards_web
```

2. **Install dependencies:**

```bash
npm install
```

3. **Create environment file:**

```bash
cp .env.example .env.local
```

4. **Configure environment variables:**

Edit `.env.local` and update the following:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_BOT_LINK=https://t.me/yourbotname

# Analytics (optional for local development)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_YM_ID=XXXXXXXX
```

Replace:
- `yourbotname` with your actual Telegram bot username
- Analytics IDs with your actual IDs (or leave empty for local testing)

### Running Locally

1. **Start the development server:**

```bash
npm run dev
```

2. **Open your browser:**

Navigate to [http://localhost:3000](http://localhost:3000)

3. **Test the pages:**

- Home page: `http://localhost:3000`
- Blog: `http://localhost:3000/blog`
- Blog post: `http://localhost:3000/blog/spaced-repetition-method`
- Privacy: `http://localhost:3000/privacy`

### Building for Production

Test the production build locally:

```bash
npm run build
npm start
```

This will:
1. Build the optimized production bundle
2. Start the production server on port 3000

## Deploying to Vercel

### Method 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub:**

```bash
git add .
git commit -m "Initial commit: FlashBot landing page"
git push origin main
```

2. **Sign up/Login to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up or login with GitHub

3. **Import your project:**
   - Click "Add New Project"
   - Select your GitHub repository
   - Vercel will auto-detect Next.js configuration

4. **Configure Environment Variables:**

In the Vercel project settings, add:

```
NEXT_PUBLIC_SITE_URL=https://yourdomain.vercel.app
NEXT_PUBLIC_BOT_LINK=https://t.me/yourbotname
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_YM_ID=XXXXXXXX
```

5. **Deploy:**
   - Click "Deploy"
   - Wait for build to complete (2-3 minutes)
   - Your site is live!

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI:**

```bash
npm install -g vercel
```

2. **Login to Vercel:**

```bash
vercel login
```

3. **Deploy:**

```bash
vercel
```

Follow the prompts:
- Set up and deploy? **Y**
- Which scope? Select your account
- Link to existing project? **N**
- What's your project's name? **flashbot-landing** (or your choice)
- In which directory is your code located? **./**
- Want to override settings? **N**

4. **Set environment variables:**

```bash
vercel env add NEXT_PUBLIC_SITE_URL
vercel env add NEXT_PUBLIC_BOT_LINK
vercel env add NEXT_PUBLIC_GA_ID
vercel env add NEXT_PUBLIC_YM_ID
```

5. **Deploy to production:**

```bash
vercel --prod
```

## Post-Deployment Checklist

After deploying, verify:

- [ ] Home page loads correctly
- [ ] All components render properly
- [ ] Blog posts are accessible
- [ ] Privacy policy page works
- [ ] Links to Telegram bot work
- [ ] Mobile responsive design
- [ ] OG image appears when sharing
- [ ] Analytics tracking works (check GA/YM dashboards)

## Customization

### Update Bot Information

Edit [src/lib/constants.ts](src/lib/constants.ts):

```typescript
export const SITE_CONFIG = {
  name: 'YourBotName',
  url: 'https://yourdomain.com',
  botLink: 'https://t.me/yourbotname',
  // ... other settings
}
```

### Add New Blog Posts

1. Create a new `.md` file in `src/content/blog/`
2. Add frontmatter:

```markdown
---
title: "Your Post Title"
excerpt: "Brief description"
date: "2025-01-26"
keywords: ["keyword1", "keyword2"]
---

# Your Post Title

Your content here...
```

3. The post will automatically appear in the blog listing

### Customize Colors

Edit [tailwind.config.ts](tailwind.config.ts) to change the color scheme.

### Add Custom OG Image

Replace `public/og-image.jpg` with your custom image (1200x630px).

## SEO Optimization

The site includes:

- Meta tags for all pages
- Open Graph tags for social sharing
- Twitter Card tags
- Schema.org structured data
- Sitemap (auto-generated by Next.js)
- robots.txt

### Generating Sitemap

Add to `next.config.ts`:

```typescript
async headers() {
  return [
    // ... existing headers
  ]
},
async rewrites() {
  return [
    {
      source: '/sitemap.xml',
      destination: '/api/sitemap',
    },
  ]
},
```

Then create `src/app/api/sitemap/route.ts` for dynamic sitemap generation.

## Analytics Setup

### Google Analytics 4

1. Create GA4 property at [analytics.google.com](https://analytics.google.com)
2. Copy your Measurement ID (G-XXXXXXXXXX)
3. Add to environment variables

### Yandex Metrika

1. Create counter at [metrika.yandex.com](https://metrika.yandex.com)
2. Copy your counter ID
3. Add to environment variables

## Troubleshooting

### Build Errors

If you get build errors:

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules
npm install

# Rebuild
npm run build
```

### TypeScript Errors

Run type checking:

```bash
npm run type-check
```

### Styling Issues

Make sure Tailwind is configured correctly:

```bash
# Check if PostCSS is working
npx tailwindcss -i ./src/app/globals.css -o ./test-output.css
```

## Performance Optimization

- Images are optimized automatically by Next.js
- Static pages are pre-rendered at build time
- CSS is automatically purged by Tailwind
- Analytics scripts load after interactive

### Lighthouse Score Goals

- Performance: 90+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

Run Lighthouse in Chrome DevTools to verify.

## Future Enhancements

See [web_app_description.md](web_app_description.md) for planned features:

- Multi-language support (i18n)
- CMS integration
- Email collection
- A/B testing
- Admin dashboard
- User testimonials

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is private and proprietary.

## Support

For issues or questions:
- Check the [documentation](web_app_description.md)
- Open an issue on GitHub
- Contact via Telegram channel

## Built With

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Remark](https://remark.js.org/) - Markdown processing
- [Vercel](https://vercel.com/) - Hosting platform

---

**Current Status:** MVP Complete ✅

Last updated: January 26, 2025
