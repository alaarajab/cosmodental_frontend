import "./Legal.css";
import { CLINIC } from "../../config/clinic";
import { useLang } from "../../i18n";

function AccessibilityEs() {
  return (
    <article className="legal">
      <h1>Declaración de accesibilidad</h1>

      <p>
        {CLINIC.name} se compromete a que nuestro sitio web pueda ser usado por
        todas las personas, incluidas las personas con discapacidad. Nuestro
        objetivo es cumplir con las{" "}
        <strong>
          Pautas de Accesibilidad para el Contenido Web (WCAG) 2.1, nivel AA
        </strong>
        .
      </p>

      <h2>Lo que hemos hecho</h2>
      <ul>
        <li>Los textos y botones tienen suficiente contraste de color para leerse con facilidad.</li>
        <li>Todo el sitio se puede usar con el teclado, con un contorno de enfoque visible.</li>
        <li>Al principio de cada página aparece un enlace para “Saltar al contenido principal”.</li>
        <li>Las imágenes tienen descripciones de texto y las imágenes decorativas se ocultan a los lectores de pantalla.</li>
        <li>Las páginas usan encabezados claros y regiones identificadas para los lectores de pantalla.</li>
        <li>Los campos del formulario tienen etiquetas y los errores se explican con texto.</li>
        <li>El diseño se adapta a teléfonos, tabletas y a un zoom de hasta 400 %.</li>
        <li>Las animaciones se reducen cuando su dispositivo tiene activada la opción de “reducir movimiento”.</li>
        <li>
          En la parte superior de cada página hay una opción de{" "}
          <strong>Tamaño del texto</strong> (A, A+, A++) y una opción de{" "}
          <strong>Alto contraste</strong>. Su elección se guarda en este dispositivo.
        </li>
        <li>El texto aumenta con la configuración de tamaño de letra de su navegador, no solo con el zoom.</li>
        <li>El sitio funciona con el modo de alto contraste de Windows (temas de contraste).</li>
        <li>Los mensajes y errores usan palabras e íconos, nunca solo el color.</li>
        <li>El sitio está disponible en español y en inglés.</li>
      </ul>

      <h2>¿Necesita ayuda o encontró un problema?</h2>
      <p>
        Si alguna parte de este sitio web le resulta difícil de usar, avísenos y le
        ayudaremos a obtener la información o el servicio que necesita. Llámenos al{" "}
        <a href={CLINIC.phoneHref}>{CLINIC.phone}</a>
        {CLINIC.email && (
          <>
            {" "}o escríbanos a <a href={`mailto:${CLINIC.email}`}>{CLINIC.email}</a>
          </>
        )}
        . Procuramos responder en un plazo de dos días hábiles.
      </p>
      <p>
        <strong>¿Necesita ayuda para llamar por teléfono?</strong> Puede llamarnos sin
        costo a través del <strong>servicio de retransmisión 711</strong> desde
        cualquier teléfono, teléfono de texto (TTY) o computadora. Solo marque 711 y
        dé al operador nuestro número, {CLINIC.phone}.
      </p>
    </article>
  );
}

function Accessibility() {
  const { lang } = useLang();
  if (lang === "es") return <AccessibilityEs />;
  return (
    <article className="legal">
      <h1>Accessibility Statement</h1>

      <p>
        {CLINIC.name} is committed to making our website usable by everyone,
        including people with disabilities. We aim to meet the{" "}
        <strong>Web Content Accessibility Guidelines (WCAG) 2.1, Level AA</strong>.
      </p>

      <h2>What we have done</h2>
      <ul>
        <li>Text and buttons have enough color contrast to be easy to read.</li>
        <li>The whole site can be used with a keyboard, with a visible focus outline.</li>
        <li>A “Skip to main content” link appears first on every page.</li>
        <li>Images have text descriptions, and decorative images are hidden from screen readers.</li>
        <li>Pages use clear headings and labeled regions for screen readers.</li>
        <li>Form fields have labels, and errors are explained in text.</li>
        <li>The layout adapts to phones, tablets and zoom up to 400%.</li>
        <li>Animations are reduced when your device’s “reduce motion” setting is on.</li>
        <li>
          A <strong>Text size</strong> option (A, A+, A++) and a{" "}
          <strong>High contrast</strong> option are at the top of every page.
          Your choice is remembered on this device.
        </li>
        <li>Text grows with your browser’s font-size setting, not just with zoom.</li>
        <li>The site works with Windows High Contrast (Contrast themes).</li>
        <li>Messages and errors use words and icons, never color alone.</li>
        <li>The site is available in English and Spanish.</li>
      </ul>

      <h2>Need help or found a problem?</h2>
      <p>
        If any part of this website is hard to use, please tell us and we will help
        you get the information or service you need. Call us at{" "}
        <a href={CLINIC.phoneHref}>{CLINIC.phone}</a>
        {CLINIC.email && (
          <>
            {" "}or email <a href={`mailto:${CLINIC.email}`}>{CLINIC.email}</a>
          </>
        )}
        . We aim to respond within two business days.
      </p>
      <p>
        <strong>Need help with phone calls?</strong> You can call us free of charge
        through the <strong>711 Relay</strong> service from any phone, text
        telephone (TTY) or computer. Just dial 711 and give the operator our
        number, {CLINIC.phone}.
      </p>
    </article>
  );
}

export default Accessibility;
