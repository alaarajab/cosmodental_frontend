// Page titles + descriptions for Google (also used to build the sitemap).
// Keep titles under ~60 characters and descriptions under ~155.
export const ROUTES = [
  {
    path: "/",
    title: "Cosmo Dental Clinic | Dentist in Northlake, IL",
    description:
      "Family, children's, cosmetic and implant dentistry in Northlake, IL, serving the Chicago area. Call (708) 345-6313 to book.",
    priority: "1.0",
  },
  {
    path: "/services",
    title: "Dental Services | Cosmo Dental Clinic, Northlake IL",
    description:
      "General, cosmetic and pediatric dentistry, dental implants and root canal treatment at Cosmo Dental Clinic in Northlake, IL.",
    priority: "0.9",
  },
  {
    path: "/staff",
    title: "Meet Our Dentists | Cosmo Dental Clinic",
    description:
      "Meet the dentists and team at Cosmo Dental Clinic in Northlake, IL — experienced, friendly care for the whole family.",
    priority: "0.8",
  },
  {
    path: "/contact",
    title: "Contact & Appointments | Cosmo Dental Clinic",
    description:
      "Request a dental appointment or contact Cosmo Dental Clinic at 159 E North Ave, Northlake, IL 60164. Call (708) 345-6313.",
    priority: "0.9",
  },
  {
    path: "/privacy-policy",
    title: "Website Privacy Policy | Cosmo Dental Clinic",
    description: "How the Cosmo Dental Clinic website collects and uses information.",
    priority: "0.3",
  },
  {
    path: "/notice-of-privacy-practices",
    title: "Notice of Privacy Practices (HIPAA) | Cosmo Dental Clinic",
    description:
      "How Cosmo Dental Clinic may use and disclose your health information, and your rights under HIPAA.",
    priority: "0.3",
  },
  {
    path: "/accessibility",
    title: "Accessibility Statement | Cosmo Dental Clinic",
    description:
      "Cosmo Dental Clinic's commitment to an accessible website that meets WCAG 2.1 AA.",
    priority: "0.3",
  },
];

export const NOT_FOUND = {
  path: "/404",
  title: "Page Not Found | Cosmo Dental Clinic",
  description: "The page you are looking for could not be found.",
};

export function findRoute(pathname) {
  const clean = pathname.replace(/\/+$/, "") || "/";
  return ROUTES.find((r) => r.path === clean) || NOT_FOUND;
}
