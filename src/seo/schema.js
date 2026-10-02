// Structured data (JSON-LD) that tells Google, Bing and AI assistants
// exactly who the clinic is, what it offers and where it is.
// Used at build time by scripts/prerender.mjs (through entry-server.jsx).
import { CLINIC } from "../config/clinic.js";
import { DENTISTS } from "../config/team.js";
import { CONTENT } from "../i18n/content.js";
import { PAGES, SERVICE_IDS, pathFor } from "../i18n/pages.js";

export const AREA_SERVED = [
  "Northlake",
  "Melrose Park",
  "Stone Park",
  "Franklin Park",
  "Elmhurst",
  "Bellwood",
  "Berkeley",
  "Hillside",
  "River Grove",
  "Chicago",
];

export function schemasFor(route, siteUrl) {
  const t = CONTENT[route.lang];
  const url = (p) => `${siteUrl}${p === "/" ? "/" : `${p}/`}`;
  const clinicId = `${siteUrl}/#dentist`;
  const out = [];

  const crumbs = (items) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map(([name, path], i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
      item: url(path),
    })),
  });
  const faqPage = (faqs) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: route.lang,
    mainEntity: faqs.map(([q, a]) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  });
  const homeName = t.ui.nav.home;
  const homePath = pathFor("home", route.lang);

  if (route.key === "home") {
    out.push({
      "@context": "https://schema.org",
      "@type": "Dentist",
      "@id": clinicId,
      name: CLINIC.name,
      description: t.meta.home.description,
      url: url(homePath),
      telephone: CLINIC.phoneHref.replace("tel:", ""),
      ...(CLINIC.email ? { email: CLINIC.email } : {}),
      image: `${siteUrl}/og-image.png`,
      address: {
        "@type": "PostalAddress",
        streetAddress: CLINIC.address.street,
        addressLocality: CLINIC.address.city,
        addressRegion: CLINIC.address.state,
        postalCode: CLINIC.address.zip,
        addressCountry: CLINIC.address.country,
      },
      geo: { "@type": "GeoCoordinates", latitude: CLINIC.geo.lat, longitude: CLINIC.geo.lng },
      hasMap: CLINIC.mapsUrl,
      areaServed: AREA_SERVED.map((name) => ({ "@type": "City", name: `${name}, IL` })),
      medicalSpecialty: "Dentistry",
      availableService: SERVICE_IDS.map((id) => ({
        "@type": "MedicalProcedure",
        name: t.services[id].name,
        url: url(pathFor(`service:${id}`, route.lang)),
      })),
      employee: DENTISTS.map((d) => ({ "@type": "Person", name: d.name, jobTitle: "Dentist" })),
      ...(CLINIC.hoursSchema.length ? { openingHours: CLINIC.hoursSchema } : {}),
      ...(CLINIC.languages.length ? { knowsLanguage: CLINIC.languages } : {}),
      ...(CLINIC.social.length ? { sameAs: CLINIC.social.map((s) => s.url) } : {}),
    });
    out.push({
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: CLINIC.name,
      url: url(homePath),
      inLanguage: route.lang,
      publisher: { "@id": clinicId },
    });
    out.push(faqPage(t.faqs));
    return out;
  }

  if (route.key.startsWith("service:")) {
    const id = route.key.slice(8);
    const s = t.services[id];
    out.push({
      "@context": "https://schema.org",
      "@type": "Service",
      name: s.name,
      serviceType: s.name,
      description: s.metaDescription,
      url: url(route.path),
      inLanguage: route.lang,
      provider: {
        "@type": "Dentist",
        "@id": clinicId,
        name: CLINIC.name,
        telephone: CLINIC.phoneHref.replace("tel:", ""),
        address: {
          "@type": "PostalAddress",
          streetAddress: CLINIC.address.street,
          addressLocality: CLINIC.address.city,
          addressRegion: CLINIC.address.state,
          postalCode: CLINIC.address.zip,
          addressCountry: CLINIC.address.country,
        },
      },
      areaServed: AREA_SERVED.map((name) => ({ "@type": "City", name: `${name}, IL` })),
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: s.name,
        itemListElement: s.includes.map((item) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: item },
        })),
      },
    });
    out.push(faqPage(s.faqs));
    out.push(
      crumbs([
        [homeName, homePath],
        [t.ui.nav.services, pathFor("services", route.lang)],
        [s.name, route.path],
      ]),
    );
    return out;
  }

  if (route.key === "staff") {
    out.push(
      ...DENTISTS.map((d) => ({
        "@context": "https://schema.org",
        "@type": "Person",
        name: d.name,
        jobTitle: route.lang === "es" ? "Dentista" : "Dentist",
        description: route.lang === "es" ? d.bioEs || d.bio : d.bio,
        worksFor: { "@type": "Dentist", "@id": clinicId, name: CLINIC.name },
        ...(CLINIC.languages.length ? { knowsLanguage: CLINIC.languages } : {}),
      })),
    );
  }

  if (route.key === "services") {
    out.push({
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: t.servicesPage.h1,
      itemListElement: SERVICE_IDS.map((id, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: t.services[id].name,
        url: url(pathFor(`service:${id}`, route.lang)),
      })),
    });
  }

  // Breadcrumbs for every other page
  const label =
    route.key === "services"
      ? t.ui.nav.services
      : route.key === "staff"
        ? t.ui.nav.staff
        : route.key === "contact"
          ? t.ui.nav.contact
          : route.title.split(" | ")[0];
  out.push(crumbs([[homeName, homePath], [label, route.path]]));
  return out;
}

// llms.txt — a plain-text summary that AI assistants (ChatGPT, Claude,
// Perplexity…) can read to answer questions about the clinic accurately.
export function buildLlmsTxt(siteUrl) {
  const t = CONTENT.en;
  const es = CONTENT.es;
  const url = (p) => `${siteUrl}${p === "/" ? "/" : `${p}/`}`;
  const hours = CLINIC.hours.length
    ? CLINIC.hours.map((h) => `- ${h.days}: ${h.time}`).join("\n")
    : "- Please call for current office hours.";
  const lines = [
    `# ${CLINIC.name}`,
    "",
    `> ${CLINIC.name} is a family dental clinic at ${CLINIC.address.street}, ${CLINIC.address.city}, ${CLINIC.address.state} ${CLINIC.address.zip} (USA), serving ${AREA_SERVED.join(", ")} and nearby communities. The team speaks ${CLINIC.languages.join(", ")}. New patients are welcome.`,
    "",
    "## Contact",
    `- Phone: ${CLINIC.phone}`,
    ...(CLINIC.email ? [`- Email: ${CLINIC.email}`] : []),
    `- Address: ${CLINIC.address.street}, ${CLINIC.address.city}, ${CLINIC.address.state} ${CLINIC.address.zip}`,
    `- Book an appointment: ${url(PAGES.contact.en)}`,
    `- Directions: ${CLINIC.mapsUrl}`,
    "",
    "## Hours",
    hours,
    "",
    "## Dentists",
    ...DENTISTS.map((d) => `- ${d.name}: ${d.bio}`),
    "",
    "## Services",
    ...SERVICE_IDS.map(
      (id) => `- [${t.services[id].name}](${url(PAGES[`service:${id}`].en)}): ${t.services[id].card}`,
    ),
    "",
    "## Frequently asked questions",
    ...t.faqs.map(([q, a]) => `- ${q} ${a}`),
    "",
    "## Pages",
    `- [Home](${url("/")})`,
    `- [All services](${url(PAGES.services.en)})`,
    `- [Our dentists](${url(PAGES.staff.en)})`,
    `- [Contact and appointments](${url(PAGES.contact.en)})`,
    `- [Accessibility](${url(PAGES.accessibility.en)})`,
    "",
    "## En español",
    `- [Inicio](${url(PAGES.home.es)})`,
    `- [Servicios](${url(PAGES.services.es)})`,
    ...SERVICE_IDS.map((id) => `- [${es.services[id].name}](${url(PAGES[`service:${id}`].es)})`),
    `- [Nuestro equipo](${url(PAGES.staff.es)})`,
    `- [Contacto y citas](${url(PAGES.contact.es)})`,
    "",
    "## Notes",
    "- Information on this website is general and not medical advice.",
    "- Please do not send medical or insurance information through the website; call the office instead.",
    "",
  ];
  return lines.join("\n");
}
