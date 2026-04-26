# Accredian Enterprise - Next-Gen Landing Page

## 1. Project Overview
This project is a premium, production-ready web application inspired by the Accredian Enterprise website. It was built with a mobile-first approach, focusing on creating a visually stunning, highly responsive landing page. It showcases strong frontend engineering, clean component-based architecture, and modern SaaS design principles.

## 2. Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Library:** React 19
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Forms & Validation:** React Hook Form + Zod
- **Notifications:** React Hot Toast
- **Typography:** Google Fonts (Inter)

## 3. Setup Instructions

First, ensure you have Node.js installed. Then clone this repository and run the following commands:

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 4. AI Usage (IMPORTANT)
This project was developed with the assistance of an AI coding agent (Antigravity).

- **Scaffolding:** The AI was used to scaffold the initial Next.js project, generate boilerplate code, and set up the structural foundation of the UI and layout.
- **Manual Improvements:** I manually directed and improved:
  - **Responsiveness:** Ensured mobile-first breakpoints across all sections.
  - **Component Structure:** Enforced a clean, scalable `/components` directory structure (UI, layout, sections).
  - **UX Enhancements:** Added Framer Motion scroll animations, hover states, glassmorphism, and a dark mode toggle.
  - **Performance Optimizations:** Utilized Next.js best practices, modularized components to prevent unnecessary re-renders, and built an optimized production-ready layout.

## 5. Improvements Over Original
- **Better UI Design:** Migrated from a static layout to a modern SaaS aesthetic with glassmorphism, soft shadows, and vibrant gradients.
- **Animations:** Integrated Framer Motion for smooth, scroll-triggered animations and interactive hover effects.
- **Dark Mode:** Added full dark mode support with a toggle, complete with customized color palettes for both light and dark themes.
- **Extra Features:** Included a functional Lead Capture form with Zod validation, a Toast notification system, and an API route.

## 6. Future Improvements
- **Backend Integration:** Connect the `/api/lead` route to a real database (e.g., PostgreSQL via Prisma) or CRM (e.g., HubSpot, Salesforce).
- **Authentication:** Implement NextAuth.js for user login and course access.
- **Dashboard:** Create a protected dashboard area for users to view enrolled courses, progress, and certificates.
- **CMS Integration:** Use a headless CMS (like Sanity or Contentful) to manage the FAQ, Testimonials, and Course content dynamically.
