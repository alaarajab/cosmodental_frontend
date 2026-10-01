# Cosmo Dental Clinic – Website

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

### Cloudflare Workers (live site)
The site runs on Cloudflare Workers in the clinic's Cloudflare account
(project `cosmodental`) and deploys automatically on every push to `main`.
1. Build command `npm run build`, deploy command `npx wrangler deploy`
   (`wrangler.jsonc` serves the `dist/` folder).
2. Settings → Builds → Variables and secrets: the three `VITE_EMAILJS_*` values.
3. Custom domains: `cosmodentalusa.com` and `www.cosmodentalusa.com`.
4. The old domain `cosmodentalmail.com` redirects here with a Cloudflare
   Redirect Rule. **Do not change its Google (MX/SPF/DKIM) email records.**
5. `public/_headers` adds security headers automatically.

### Namecheap / Apache shared hosting (alternative)
Run `npm run build` and upload the **contents** of `dist/` to `public_html`.
`public/.htaccess` (copied into `dist/`) handles HTTPS, 404s and security headers.

### After launch
- Submit `https://www.cosmodentalusa.com/sitemap.xml` in Google Search Console.
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
- ✅ Google Workspace HIPAA BAA accepted in the Admin console (April 2026).
