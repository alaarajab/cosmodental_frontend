// ─────────────────────────────────────────────────────────────
// HOLIDAY OFFER shown in the home page hero.
// Texts live in src/i18n/en.js / es.js (header.offer).
// The offer hides itself after `endsOn`. To turn it off early,
// set `enabled: false`. Rebuild + push after any change.
// ─────────────────────────────────────────────────────────────

export const OFFER = {
  enabled: true,
  endsOn: "2027-01-15", // last day of the offer (Chicago time)
};

// true while the offer should be shown
export function offerActive(now = new Date()) {
  if (!OFFER.enabled) return false;
  // Ends at the end of the day, Chicago time (UTC-6 in winter)
  return now < new Date(`${OFFER.endsOn}T23:59:59-06:00`);
}
