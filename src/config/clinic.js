// ─────────────────────────────────────────────────────────────
// CLINIC DETAILS — the single place to update clinic information.
// Everything on the site (header, footer, home page, SEO, Google
// structured data, sitemap) reads from this file.
// Leave a value as null/[] to hide that item until you have it.
// ─────────────────────────────────────────────────────────────

export const CLINIC = {
  name: "Cosmo Dental Clinic",
  shortName: "Cosmo Dental",

  // Final website address (no trailing slash). Used for SEO + sitemap.
  siteUrl: "https://cosmodentalusa.com",

  phone: "(708) 345-6313",
  phoneHref: "tel:+17083456313",

  // Inbox that receives patient emails. Change once the admin
  // finishes the Google Workspace setup (e.g. info@cosmodentalusa.com).
  email: "b.abozor@cosmodentalmail.com",

  address: {
    street: "159 E North Ave",
    city: "Northlake",
    state: "IL",
    zip: "60164",
    country: "US",
  },
  geo: { lat: 41.9068265, lng: -87.8963596 },

  // Google Maps search link (opens directions to the clinic).
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Cosmo+Dental+159+E+North+Ave+Northlake+IL+60164",

  // Paste the clinic's real Google reviews link here
  // (Google Business Profile → "Ask for reviews" / "Read reviews").
  // While null, the site links to the Google Maps listing instead.
  googleReviewsUrl: null,

  // Opening hours. Fill in the real hours, e.g.
  // { days: "Monday – Friday", time: "9:00 AM – 6:00 PM" }.
  // Leave empty to show "Call us for current hours".
  // `schema` entries use schema.org format for Google.
  hours: [
    { days: "Monday – Friday", time: "10:00 AM – 6:00 PM" },
    { days: "Saturday", time: "9:00 AM – 2:00 PM" },
  ],
  hoursSchema: ["Mo-Fr 10:00-18:00", "Sa 09:00-14:00"], // e.g. ["Mo-Fr 09:00-18:00", "Sa 09:00-14:00"]

  // Only add accounts that really exist.
  social: [
    { label: "Instagram", url: "https://www.instagram.com/dr_basel_abozor/" },
    // { label: "Facebook", url: "https://www.facebook.com/..." },
  ],

  // Languages spoken by the team (shown on the home page intro,
  // "Visit Our Office", and to Google).
  languages: ["English", "Spanish", "Arabic", "Urdu", "Hindi"], // e.g. ["English", "Arabic", "Spanish"]

  // Insurance plans the clinic is in-network with (real list only).
  insurance: [], // e.g. ["Delta Dental", "Cigna", "MetLife"]
};

export const fullAddress = `${CLINIC.address.street}, ${CLINIC.address.city}, ${CLINIC.address.state} ${CLINIC.address.zip}`;
export const reviewsUrl = CLINIC.googleReviewsUrl || CLINIC.mapsUrl;
