// ─────────────────────────────────────────────────────────────
// TEAM — used on the home page and the "Our Team" page.
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
    name: "Dr. Asim Abdul Quader",
    bio: "Focuses on cosmetic dentistry, providing routine check-ups and preventive care.",
    bioEs: "Se enfoca en la odontología estética y ofrece chequeos de rutina y atención preventiva.",
    image: asimImg,
  },

  {
    name: "Dr. Basel Abozor",
    bio: "Focuses on endodontics (root canal treatment) with 20 years of patient-focused care.",
    bioEs: "Se enfoca en la endodoncia (tratamiento de conducto), con 20 años de atención centrada en el paciente.",
    image: baselImg,
  },

  {
    name: "Dr. Hussain Akam",
    bio: "Focuses on dental surgery and implant care, along with routine check-ups.",
    bioEs: "Se enfoca en la cirugía dental y los implantes, además de chequeos de rutina.",
    image: hussainImg,
  },

  {
    name: "Dr. Mohammed Abdul Haq",
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
