import { useEffect, useState } from "react";
import "./DisplayOptions.css";

// Text size and high-contrast options built into the site (no plugin).
// The saved choice is applied before the page paints by a small script
// in index.html, so the page does not "jump" on load.
const STORAGE_KEY = "cd-display";
const SIZES = [
  { id: "default", label: "A", name: "Default text size", scale: "100%" },
  { id: "large", label: "A+", name: "Larger text", scale: "125%" },
  { id: "xlarge", label: "A++", name: "Largest text", scale: "150%" },
];

function readSaved() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function apply({ size, contrast }) {
  const root = document.documentElement;
  const found = SIZES.find((s) => s.id === size);
  root.style.fontSize = found && found.id !== "default" ? found.scale : "";
  root.classList.toggle("high-contrast", Boolean(contrast));
}

function DisplayOptions() {
  // Start with defaults so the prerendered HTML matches; then load the saved choice.
  const [prefs, setPrefs] = useState({ size: "default", contrast: false });

  useEffect(() => {
    const saved = readSaved();
    setPrefs({ size: saved.size || "default", contrast: Boolean(saved.contrast) });
  }, []);

  const update = (next) => {
    const merged = { ...prefs, ...next };
    setPrefs(merged);
    apply(merged);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
    } catch {
      /* private mode: the choice just isn't remembered */
    }
  };

  return (
    <div className="display-options" role="region" aria-label="Display options">
      <div className="display-options__inner">
        <div className="display-options__group" role="group" aria-labelledby="text-size-label">
          <span id="text-size-label" className="display-options__label">
            Text size
          </span>
          {SIZES.map((s) => (
            <button
              key={s.id}
              type="button"
              className={`display-options__btn display-options__btn--${s.id}`}
              aria-pressed={prefs.size === s.id}
              aria-label={s.name}
              onClick={() => update({ size: s.id })}
            >
              {s.label}
            </button>
          ))}
        </div>
        <button
          type="button"
          className="display-options__btn display-options__contrast"
          aria-pressed={prefs.contrast}
          onClick={() => update({ contrast: !prefs.contrast })}
        >
          <span aria-hidden="true" className="display-options__contrast-icon">◐</span>
          High contrast
        </button>
      </div>
    </div>
  );
}

export default DisplayOptions;
