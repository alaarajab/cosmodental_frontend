// ─────────────────────────────────────────────────────────────
// TEAM — used on the home page and the "Our Team" page.
// To change a photo, replace the image file in src/assets/team/
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
    title: "General Dentist",
    bio: "Focuses on cosmetic dentistry, providing routine check-ups and preventive care.",
    image: asimImg,
  },

  {
    name: "Dr. Basel Abozor",
    title: "General Dentist",
    bio: "Focuses on endodontics (root canal treatment) with 20 years of patient-focused care.",
    image: baselImg,
  },

  {
    name: "Dr. Hussain Akam",
    title: "General Dentist",
    bio: "Focuses on dental surgery and implant care, along with routine check-ups.",
    image: hussainImg,
  },

  {
    name: "Dr. Mohammed Abdul Haq",
    title: "General Dentist",
    bio: "Focuses on dental surgery and implant care, along with preventive care",
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
