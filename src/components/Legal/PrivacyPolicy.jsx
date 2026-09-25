import { Link } from "react-router-dom";
import "./Legal.css";
import ContactBlock from "./ContactBlock";
import { CLINIC } from "../../config/clinic";
import { LEGAL } from "../../config/legal";

// ⚠ Template text — have the clinic (or its compliance advisor) review
// it before launch and update it if the website changes.
function PrivacyPolicy() {
  return (
    <article className="legal">
      <h1>Website Privacy Policy</h1>
      {LEGAL.privacyPolicyUpdated && (
        <p className="legal__meta">Last updated: {LEGAL.privacyPolicyUpdated}</p>
      )}

      <p>
        This policy explains how {CLINIC.name} (“we”, “us”) handles information
        collected through this website. How we protect your health information as a
        patient is described in our{" "}
        <Link to="/notice-of-privacy-practices">Notice of Privacy Practices</Link>.
      </p>

      <h2>Information we collect</h2>
      <h3>Information you give us</h3>
      <p>
        When you use our contact form we collect your name, email address, phone
        number, the reason for your request and your preferred appointment time. We
        use this only to respond to you and schedule your visit.
      </p>
      <p className="legal__callout">
        <strong>Please do not send medical, dental or insurance information through
        this website or by regular email.</strong> Share those details with us by phone
        or in person.
      </p>
      <h3>Information collected automatically</h3>
      <p>
        Like most websites, our hosting provider may record basic technical data such
        as your IP address, browser type and the pages you visit, to keep the site
        secure and working properly. This website does not use advertising or social
        media tracking tools.
      </p>

      <h2>How your information is sent</h2>
      <p>
        Our website uses a secure (HTTPS) connection. Contact form messages are
        delivered to our office by an email delivery service. We do not sell, rent or
        trade your personal information.
      </p>

      <h2>Who we share it with</h2>
      <p>
        We share information only with service providers that help us run this
        website and our office (such as our website host and email providers), when
        required by law, or to protect the rights and safety of our patients and staff.
      </p>

      <h2>How long we keep it</h2>
      <p>
        We keep contact form messages only as long as needed to respond to you and for
        our normal business records. Information that becomes part of your dental
        record is kept as required by law.
      </p>

      <h2>Your choices</h2>
      <p>
        You can ask us to update or delete the contact information you sent through
        this website by contacting us using the details below.
      </p>

      <h2>Children’s privacy</h2>
      <p>
        This website is not directed to children under 13, and we do not knowingly
        collect personal information from them online. Parents and guardians can
        contact us by phone to schedule a child’s appointment.
      </p>

      <h2>Links to other websites</h2>
      <p>
        Our site links to services such as Google Maps and social media. Their own
        privacy policies apply when you visit them.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy from time to time. The latest version will always be
        posted on this page.
      </p>

      <h2>Contact us</h2>
      <ContactBlock />
    </article>
  );
}

export default PrivacyPolicy;
