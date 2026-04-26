

# NYSC Website Clone — Build Plan

I'll build a faithful clone of nysc.gov.ng using your uploaded images and screenshots as the source of truth for content, layout, and color. The site will use the official NYSC green palette and match the structure shown in your screenshots: green countdown bar → white nav with logo → hero → DG section → Key Links → News → Footer.

## Pages (separate routes for SEO)

1. **`/` — Home** — Countdown bar, hero with "Registration Portal" CTA, Nigeria map section, Meet the Director-General, Key Links grid, News & Updates, Achievements
2. **`/about`** — About NYSC (history, vision, mission, objectives) with `objectives-img.png`
3. **`/top-management`** — DG profile + management team
4. **`/departments`** — List of NYSC departments
5. **`/locations`** — State offices / orientation camps
6. **`/nhia-enrolment`** — NHIA enrolment info page
7. **`/publications`** — Publications listing
8. **`/registration-cybercafes`** — CyberCafe registration page
9. **`/contact`** — Contact info (HQ address, email)
10. **`/faqs`** — Frequently asked questions

Dropdown menus (About Us, Departments, Locations) will be implemented with the existing shadcn `navigation-menu` component.

## Design System

**Colors** (matching screenshots exactly):
- Primary green: `#006400` (deep NYSC green — countdown bar, nav buttons, footer)
- Accent green: `#0a8a0a` (hover states, scroll-to-top button)
- Background: `#ffffff`
- Footer text: white on green
- Body text: `#1a1a1a`

**Typography:** System sans (matches the site's clean sans look). Bold headings, regular body.

**Layout:** Full-width sections, max-width container ~1200px, generous spacing.

## Components to build

- `CountdownBar` — Top green strip with live JS countdown to "2026 Batch 'A' Stream II Orientation Course"
- `SiteHeader` — White bar, NYSC logo (left), green pill nav buttons with dropdowns
- `HeroSection` — Large banner with headline + "Registration Portal" CTA
- `NigeriaMapSection` — Interactive SVG map of Nigeria states (clickable states)
- `DirectorGeneralSection` — DG photo (`DG.png`) + bio + "Read More"
- `KeyLinksGrid` — Card grid (Mobilization Timetable, Online Registration, Mobile App, Service Year Overview, Camp Address, State Offices, Support Line, Guidelines, DG's Gallery)
- `NewsCards` — 3-column news cards using `news1.png`, `news2.png`, `news3.png`
- `AchievementsSection` — Using `achieve_2.png`, `achieve_3.png`
- `SiteFooter` — 4-column (Quick Links, Socials, Partners, Contact) on green background, with NDPR badge (`NYSC_NDPR_AUDIT_2023.png`) and 50th anniversary badge
- `ScrollToTopButton` — Floating green circle (bottom right)

## Assets

Copy uploaded images to `src/assets/`:
- `DG.png` → DG portrait
- `news1.png`, `news2.png`, `news3.png` → news cards
- `achieve_2.png`, `achieve_3.png` → achievements
- `objectives-img.png` → about page
- `NYSC_NDPR_AUDIT_2023.png` → footer badge
- `image.png` (NYSC logo crest) → header logo

The Nigeria map will be an inline SVG component (lightweight, no external dependency).

## Technical notes

- TanStack Start file-based routing (one file per route under `src/routes/`)
- Navigation dropdowns via shadcn `navigation-menu`
- Countdown via `useEffect` + `setInterval`, target date set to the 2026 Batch A Stream II date shown in the screenshot
- Each route file gets its own `head()` with unique `<title>` and meta description for SEO
- Mobile responsive (hamburger menu collapses nav on small screens)
- No backend required for this clone — all content static

## Important note on the clone

I will reproduce the **layout, structure, color palette, navigation labels, and visual design** as shown in your screenshots. Body copy on inner pages (About, FAQs, etc.) will be written as plausible placeholder content matching the NYSC tone — I won't copy long passages of text I don't have screenshots for, but anything visible in your screenshots will be reproduced verbatim. If you want exact text on inner pages, send screenshots of those pages or paste the text and I'll swap it in.

Approve and I'll start building.

