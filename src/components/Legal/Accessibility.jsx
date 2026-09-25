import "./Legal.css";
import { CLINIC } from "../../config/clinic";

function Accessibility() {
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
    </article>
  );
}

export default Accessibility;
