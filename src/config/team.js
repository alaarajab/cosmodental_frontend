// ─────────────────────────────────────────────────────────────
// TEAM — used on the home page, the "Our Team" page and each dentist's own page.
// `slug` is the dentist's web address (/staff/<slug>/ and /es/equipo/<slug>/).
// `focus` lists the services the dentist focuses on (ids from src/i18n/pages.js).
// `title` / `titleEs` is the dentist's role (all are general dentists — keep it
// that way unless a dentist is a licensed specialist).
// `bio` is shown on the English site, `bioEs` on the Spanish site.
// To change a photo, replace the image file in src/assets/
// (keep the same file name) or point `image` to a new file.
// Team members without a photo show a neutral placeholder.
// ─────────────────────────────────────────────────────────────
import baselImg from "../assets/basel-abozor.webp";
import hussainImg from "../assets/hussain-akam.webp";
import haqiImg from "../assets/mohammed-haqi.webp";
import asimImg from "../assets/asimImg.webp";

export const DENTISTS = [
  {
    slug: "dr-asim-abdul-quader",
    name: "Dr. Asim Abdul Quader",
    title: "General Dentist",
    titleEs: "Dentista general",
    focus: ["cosmetic-dentistry", "general-dentistry"],
    bio: "Focuses on cosmetic dentistry, providing routine check-ups and preventive care.",
    bioEs: "Se enfoca en la odontología estética y ofrece chequeos de rutina y atención preventiva.",
    image: asimImg,
  },

  {
    slug: "dr-basel-abozor",
    name: "Dr. Basel Abozor",
    title: "General Dentist",
    titleEs: "Dentista general",
    focus: ["root-canal-treatment", "general-dentistry"],
    bio: "Focuses on endodontics (root canal treatment) with 20 years of patient-focused care.",
    bioEs: "Se enfoca en la endodoncia (tratamiento de conducto), con 20 años de atención centrada en el paciente.",
    image: baselImg,
  },

  {
    slug: "dr-hussain-akam",
    name: "Dr. Hussain Akam",
    title: "General Dentist",
    titleEs: "Dentista general",
    focus: ["oral-surgery", "dental-implants", "general-dentistry"],
    bio: "Focuses on dental surgery and implant care, along with routine check-ups.",
    bioEs: "Se enfoca en la cirugía dental y los implantes, además de chequeos de rutina.",
    image: hussainImg,
  },

  {
    slug: "dr-mohammed-abdul-haq",
    name: "Dr. Mohammed Abdul Haq",
    title: "General Dentist",
    titleEs: "Dentista general",
    focus: ["oral-surgery", "dental-implants", "general-dentistry"],
    bio: "Focuses on dental surgery and implant care, along with preventive care.",
    bioEs: "Se enfoca en la cirugía dental y los implantes, además de la atención preventiva.",
    image: haqiImg,
  },
];

export const SUPPORT_STAFF = [
  {
    name: "Tom",
    title: "Dental Assistant",
    bio: "Supports dental procedures and patient care in all clinic operations.",
  },
  {
    name: "Ashley",
    title: "Dental Assistant",
    bio: "Assists with procedures and makes sure every patient is comfortable.",
  },
];
