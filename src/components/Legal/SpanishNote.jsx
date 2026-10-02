import { CLINIC } from "../../config/clinic";

// Shown on English-only legal pages for Spanish-speaking visitors
function SpanishNote() {
  return (
    <p className="legal__callout" lang="es">
      Esta página solo está disponible en inglés. Si necesita ayuda en español,
      llámenos al <a href={CLINIC.phoneHref}>{CLINIC.phone}</a> y con gusto le
      explicaremos su contenido.
    </p>
  );
}

export default SpanishNote;
