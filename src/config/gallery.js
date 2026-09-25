// ─────────────────────────────────────────────────────────────
// PHOTO GALLERY — shown on the home page ("Our Office & Smiles").
// Just drop photos into src/assets/gallery/ and rebuild.
// The file name becomes the image description for screen readers,
// so name files clearly, e.g. "reception-area.jpg",
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

function toAlt(path) {
  const name = path.split("/").pop().replace(/\.[^.]+$/, "");
  const words = name.replace(/[-_]+/g, " ").replace(/\s+/g, " ").trim();
  return words.charAt(0).toUpperCase() + words.slice(1);
}

export const GALLERY = Object.entries(files)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, src]) => ({ src, alt: toAlt(path) }));
