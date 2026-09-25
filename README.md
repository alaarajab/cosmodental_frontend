# Cosmo Dental Clinic – Website

> **Launch guide first — original project notes are further below.**

## Quick start

```bash
npm install
npm run dev        # local development at http://localhost:3000
npm run build      # production build → dist/ (prerendered pages + sitemap)
npm run preview    # preview the build
```

`npm run build` does three things: builds the app, prerenders every page to
real HTML (`dist/services/index.html`, …) for Google and fast loading, and
writes `sitemap.xml`, `robots.txt` and `404.html`.

## Where to change clinic information

| What | File |
|---|---|
| Name, phone, email, address, hours, social links, insurance list, languages | `src/config/clinic.js` |
| Website address used for SEO/sitemap (`siteUrl`) | `src/config/clinic.js` |
| Dentists and assistants (names, bios, photos) | `src/config/team.js` |
| Page titles & Google descriptions | `src/seo/routes.js` |
| Legal page dates / Privacy Officer name | `src/config/legal.js` |

Empty values (e.g. `hours: []`) hide that item or show a "please call us"
message, so the site never shows made-up information.

## Replacing photos with real clinic pictures

Keep the **same file name** to replace a photo, then rebuild.

| Where it appears | File | Suggested size |
|---|---|---|
| Top banner (every page) | `src/assets/home_welcome_dental.webp` | 1600 × 600 |
| Service cards & Services page | `src/assets/general.webp`, `cosmetic.webp`, `implant.webp`, `endodontics.webp` | 800 × 600 |
| Dentist portraits | `src/assets/basel-abozor.webp`, `hussain-akam.webp`, `mohammed-haqi.webp`, `asimImg.webp` | 600 × 600 |
| Map image (home + footer) | `src/assets/large-screen.webp`, `medium-screen.webp` | 1400 × 400 |
| Office / smile gallery (appears automatically) | drop files into `src/assets/gallery/` | 1200 wide |
| Link preview on social media / texts | `public/og-image.png` | 1200 × 630 |

Tips: use WebP or JPG, compress at https://squoosh.app (aim for under 300 KB).
Gallery file names become the image descriptions for blind visitors
(`reception-area.jpg` → "Reception area"). **Patient photos (including
before/after) need the patient's signed written authorization (HIPAA).**

## Contact form (EmailJS)

Environment variables: see `.env.example`. The form now also sends a
`reason` field — add `{{reason}}` to the EmailJS email template.
Point the template's "To email" to the clinic's Google Workspace inbox.

HIPAA note: the form asks for **no health or insurance information** and says
so to patients. EmailJS does not sign a HIPAA Business Associate Agreement,
so if the clinic wants online intake/medical forms, use a HIPAA-compliant
form or booking service that signs a BAA.

## Deploying

### Cloudflare Pages (recommended, free)
1. Workers & Pages → Create → Pages → Connect to Git → select this repo.
2. Build command `npm run build`, output directory `dist`.
3. Settings → Environment variables: add the three `VITE_EMAILJS_*` values.
4. Custom domains → add `cosmodentalusa.com` and `www.cosmodentalusa.com`,
   then add the DNS records it shows at the domain's DNS provider.
   **Do not change the Google (MX) email records.**
5. `public/_headers` adds security headers automatically.

### Namecheap / Apache shared hosting
Run `npm run build` and upload the **contents** of `dist/` to `public_html`.
`public/.htaccess` (copied into `dist/`) handles HTTPS, 404s and security headers.

### GitHub Pages preview
`.github/workflows/deploy.yml` builds with `BASE_PATH=/cosmodental_frontend/`
so the preview keeps working at the github.io sub-folder.

### After launch
- Submit `https://cosmodentalusa.com/sitemap.xml` in Google Search Console.
- Add the website link to the clinic's Google Business Profile.
- Paste the real Google reviews link into `googleReviewsUrl` in `src/config/clinic.js`.

## Compliance checklist

- ✅ WCAG 2.1 AA: tested with axe-core on every page (desktop + mobile), keyboard
  navigation, 320 px reflow. Re-test after big content changes.
- ✅ Notice of Privacy Practices, Website Privacy Policy, Accessibility Statement,
  medical disclaimer (footer).
- ⚠️ Have the clinic review the legal text (`src/components/Legal/`) and match the
  NPP to its official office copy; then set dates in `src/config/legal.js`.
- ⚠️ No ad trackers (Meta Pixel etc.). If analytics are added, keep them off the
  contact page and use a privacy-friendly tool.
- ⚠️ Google Workspace: accept the HIPAA BAA in the Admin console.

---

# Cosmo Dental Clinic – Custom React Application

## Project Overview

**Cosmo Dental Clinic** is a responsive, single-page React application designed to promote a dental clinic’s services while providing educational oral health content. The project combines business and marketing goals (advertising services, building trust, encouraging appointments) with technical goals, including third-party API integration, reusable components, client-side routing, backend API security, user authentication, and optional AI-enhanced features.

---

## Primary Users

- **New Patients:** Main audience, aiming to learn about the clinic and book appointments.
- **Existing Patients:** Secondary audience, supporting appointment management and access to saved educational content.

---

## Educational Content

- **Dental Education Page:** Users can select topics via a dropdown menu.
- Content is fetched from:
  - A **local JSON file** with educational tips.
  - The **API Ninjas Nutrition API** to show relevant nutrition cards.
- Public access: All users can view educational content.
- Protected access: Only logged-in users can **save cards** to their portal.

---

## API Usage & MVP Scope

- **Core API for MVP:** Medical / Symptoms API (via JSON and Ninja API).

---

## User Authentication & Protected Routes (coming soon)

- **Authentication:** Users can register and log in.
- **Security:** JWT-based authentication for secure sessions.
- **Protected Features:**
  - Saving educational cards
  - Viewing booked appointments
- **Public Routes:** Home, Services, Contact/Book Appointment, Dental Education (view-only), Staff
- **Protected Routes:** Dental Education (save cards & view appointments)

**Benefits:**

- Encourages user registration and lead capture
- Builds trust through secure, members-only features
- Increases repeat engagement and return visits

---

## Planned Features (MVP)

### Frontend (React)

- **Home Page:** Clinic overview, marketing message, and appointment CTA
- **Services Page:** Dental services displayed using reusable card components
- **Contact / Book Appointment Page:** Calendar-based appointment scheduling form
- **Dental Education Page (Public + Protected Features):**
  - API-powered condition cards
  - Dropdown topic selection (no search)
  - Optional AI chatbot for educational guidance
  - Save cards, view, and delete them in user portal (requires login)
- **Contact / About Us Page:** Clinic info, mission, and outreach CTAs

### General Features

- Reusable UI components (cards, buttons, sections)
- Client-side routing using **React Router**
- Responsive design for desktop, tablet, and mobile
- CSS structured using **BEM methodology**

---

## Minimal Backend

A lightweight **Node.js + Express** backend is implemented to:

- Securely store and hide API keys
- Proxy requests to third-party APIs
- Handle user authentication and authorization
- Store saved educational cards and appointment data for logged-in users

---

## Technologies Used

- **Frontend:** React, React Router, Context API
- **Backend:** Node.js, Express
- **State Management:** React `useState`, `useEffect`, Context API
- **Styling:** CSS (BEM methodology)
- **API Integration:** Ninja API, local JSON data, optional AI features

## How to Run the Mock Server for Dental Tips

## API Configuration

This project uses the API Ninjas Nutrition API.

For security reasons, the API key is stored in a `.env` file and is not committed to the repository.

Reviewers can request the `.env` file via TripleTen Hub DM to test the full functionality.

## Links

- [Trello: Agile Management Tool](https://trello.com/b/V6WNoFHd/smilecare-dental-clinic)

- [Figma Design](https://www.figma.com/design/eTZhbfgWLREEoAQLVZW11Q/SMILECARE?node-id=22618-606&p=f&t=hvbkAGRaEzZ4f7UR-0)

- [Backend Repository](https://github.com/alaarajab/smilecare_backend)

- [Project Pitch Video](https://youtu.be/M2-xkqREXTo)

-[deployment link](https://alaarajab.github.io/cosmodental_frontend/)
