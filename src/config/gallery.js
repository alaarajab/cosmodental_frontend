// ─────────────────────────────────────────────────────────────
// PHOTO GALLERY — shown on the home page ("Our Office & Smiles").
// Just drop photos into src/assets/gallery/ and rebuild.
// The file name becomes the image description for screen readers,
// so name files clearly, e.g. "reception-area.jpg",
// Start a name with a number to set the order: "1-reception-desk.jpg".
// "treatment-room.jpg", "dr-abozor-with-patient.jpg".
// The section stays hidden until at least one photo is added.
//
// ⚠ Patient photos (including before/after): only with the patient's
// signed written authorization (HIPAA). Never show faces or names
// without it.
// ─────────────────────────────────────────────────────────────
const files = import.meta.glob("../assets/gallery/*.{jpg,jpeg,png,webp,avif}", {
  eager: true,
  import: "default",
});

// Better descriptions for screen readers, by file name (without number or
// extension). Photos not listed here use their file name instead.
const DESCRIPTIONS = {
  "reception-desk":
    "Front reception desk with a black marble counter and white orchids",
  "modern-treatment-room":
    "Bright treatment room with a modern dental chair and white cabinets",
  "treatment-room-with-garden-view":
    "Treatment room with a dental chair beside a large window with a view of trees",
  "digital-x-ray-room": "Room with a digital panoramic dental X-ray machine",
  "clinic-hallway": "Hallway leading to the treatment rooms",
  "waiting-room":
    "Waiting room with cushioned chairs and large windows letting in daylight",
};

// Spanish descriptions (Spanish website). Same keys as above.
const DESCRIPTIONS_ES = {
  "reception-desk":
    "Recepción con mostrador de mármol negro y orquídeas blancas",
  "modern-treatment-room":
    "Sala de tratamiento luminosa con un sillón dental moderno y gabinetes blancos",
  "treatment-room-with-garden-view":
    "Sala de tratamiento con sillón dental junto a un gran ventanal con vista a los árboles",
  "digital-x-ray-room": "Sala con un equipo de radiografía dental panorámica digital",
  "clinic-hallway": "Pasillo que lleva a las salas de tratamiento",
  "waiting-room":
    "Sala de espera con sillas acolchadas y grandes ventanas que dejan entrar la luz natural",
};

const baseName = (path) =>
  path.split("/").pop().replace(/\.[^.]+$/, "").replace(/^\d+[-_ ]*/, "");

function toAlt(path) {
  // Leading numbers (e.g. "1-reception-desk") only set the order
  const name = path.split("/").pop().replace(/\.[^.]+$/, "").replace(/^\d+[-_ ]*/, "");
  if (DESCRIPTIONS[name]) return DESCRIPTIONS[name];
  const words = name.replace(/[-_]+/g, " ").replace(/\s+/g, " ").trim();
  return words.charAt(0).toUpperCase() + words.slice(1);
}

export const GALLERY = Object.entries(files)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, src]) => ({
    src,
    alt: toAlt(path),
    altEs: DESCRIPTIONS_ES[baseName(path)] || toAlt(path),
  }));
