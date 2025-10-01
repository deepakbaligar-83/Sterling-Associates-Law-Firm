# Sterling & Associates - Law Firm Website

A modern, professional, and fully responsive website for a law firm built with **Next.js 15**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

## 🌟 Features

### Pages
- **🏠 Home** - Hero banner with headline, tagline, CTA, highlights with icons, interactive carousel, and final CTA section
- **📖 About Us** - Mission hero, timeline, core values pillars, image grid, and team preview
- **⚖️ Practice Areas** - Filterable grid with hover effects, icons, and featured consultation CTA
- **👩‍⚖️ Our Attorneys** - Filterable directory with modal bios, hover animations, and detailed profiles
- **🗣️ Testimonials** - Carousel slider, animated counters, case results, and review submission form
- **📝 Blog / Insights** - Search/filter functionality, category tags, and newsletter signup
- **💼 Careers** - Culture sections, accordion job listings, employee testimonials, and application form with resume upload
- **📞 Contact Us** - Split layout with contact info, validated form with real-time error messages, map embed placeholder, and social links
- **Legal Pages** - Privacy Policy, Terms & Conditions, Disclaimer

### Interactive Components
- **Carousel** - Auto-rotating content with manual controls
- **Modal** - Popup for attorney bios with overlay
- **Accordion** - Expandable job listings
- **AnimatedCounter** - Scroll-triggered number animations
- **FadeIn** - Scroll-triggered fade-in animations
- **PracticeAreaCard** - Hover effects with gradient overlays

### Design & UX
- **Responsive** - Mobile-first design with breakpoints for tablet and desktop
- **Dark Mode** - Automatic theme switching based on system preference
- **Smooth Scroll** - Anchor links with smooth scrolling behavior
- **Accessibility** - ARIA labels, keyboard navigation, focus-visible outlines
- **Professional Branding** - Navy, gray, and gold color palette with elegant typography

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd Trial/my-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/app/
├── components/          # Reusable UI components
│   ├── Header.tsx       # Sticky navigation with mobile menu
│   ├── Footer.tsx       # Footer with links and social media
│   ├── Hero.tsx         # Hero banner component
│   ├── Section.tsx      # Section wrapper
│   ├── Card.tsx         # Generic card component
│   ├── Testimonial.tsx  # Testimonial card
│   ├── TeamProfile.tsx  # Attorney profile card
│   ├── Carousel.tsx     # Auto-rotating carousel
│   ├── Modal.tsx        # Modal overlay
│   ├── Accordion.tsx    # Expandable accordion
│   ├── AnimatedCounter.tsx  # Scroll-triggered counter
│   ├── FadeIn.tsx       # Fade-in animation wrapper
│   ├── ContactForm.tsx  # Validated contact form
│   └── PracticeAreaCard.tsx  # Practice area card with hover effects
├── about/page.tsx       # About Us page
├── practice-areas/page.tsx  # Practice Areas page
├── attorneys/page.tsx   # Our Attorneys page
├── testimonials/page.tsx    # Testimonials page
├── blog/page.tsx        # Blog / Insights page
├── careers/page.tsx     # Careers page
├── contact/page.tsx     # Contact Us page
├── legal/               # Legal pages
│   ├── privacy-policy/page.tsx
│   ├── terms/page.tsx
│   └── disclaimer/page.tsx
├── layout.tsx           # Root layout with Header & Footer
├── page.tsx             # Home page
└── globals.css          # Global styles and CSS variables
```

## 🎨 Customization

### Brand Colors
Edit `src/app/globals.css` to change the color palette:

```css
:root {
  --navy: #0b2545;      /* Deep navy for headings */
  --accent: #b8860b;    /* Gold accent for CTAs */
  --muted: #6b7280;     /* Gray for secondary text */
}
```

To switch to **burgundy** or **deep green** accent:
```css
--accent: #800020;  /* Burgundy */
/* OR */
--accent: #2d5016;  /* Deep green */
```

### Logo
Replace the placeholder logo in `src/app/components/Header.tsx` and `Footer.tsx`:
1. Add your logo to `public/logo.png`
2. Update the `<Link>` in `Header.tsx`:
   ```tsx
   <Image src="/logo.png" alt="Sterling & Associates" width={180} height={40} />
   ```

### Contact Information
Update contact details in:
- `src/app/components/Footer.tsx`
- `src/app/contact/page.tsx`
- `src/app/page.tsx` (final CTA section)

### Attorney Profiles
Edit `src/app/attorneys/page.tsx` to add/remove attorneys:
```tsx
const team: Attorney[] = [
  {
    name: "Your Name",
    title: "Partner",
    expertise: "Practice Area",
    bio: "Bio text...",
    education: "JD, Law School; BA, University",
    barAdmissions: "State, State",
    email: "email@sterlinglaw.com",
  },
  // Add more...
];
```

### Practice Areas
Edit `src/app/practice-areas/page.tsx` to modify services:
```tsx
const areas = [
  { icon: "🏢", title: "Your Practice", desc: "Description...", category: "Business" },
  // Add more...
];
```

### Map Integration
Replace the map placeholder in `src/app/contact/page.tsx` with Google Maps or Leaflet:
```tsx
<iframe
  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"
  className="w-full h-full border-0"
  allowFullScreen
  loading="lazy"
/>
```

## 🔧 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Fonts:** Geist Sans & Geist Mono (Google Fonts)
- **Icons:** Emoji (can be replaced with React Icons or Lucide)

## 📝 Form Handling

The contact form includes client-side validation. To connect it to a backend:

1. **Option A: API Route (Next.js)**
   Create `src/app/api/contact/route.ts`:
   ```ts
   export async function POST(request: Request) {
     const data = await request.json();
     // Send email via SendGrid, Resend, etc.
     return Response.json({ success: true });
   }
   ```

2. **Option B: Third-party Service**
   Use services like Formspree, Netlify Forms, or Getform.

## 🚢 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms
- **Netlify:** `npm run build` → Deploy `/.next` folder
- **AWS/Azure:** Use Docker or static export

## 📄 License

This project is built for demonstration purposes. Customize and use as needed for your law firm.

## 🤝 Support

For questions or customization requests, contact the development team.

---

**Built with ❤️ using Next.js and Tailwind CSS**
