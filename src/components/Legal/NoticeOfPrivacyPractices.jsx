import "./Legal.css";
import ContactBlock from "./ContactBlock";
import { CLINIC } from "../../config/clinic";
import { LEGAL } from "../../config/legal";

// ⚠ HIPAA requires this notice to be posted prominently on the website.
// This is a general template based on the standard HIPAA Notice of
// Privacy Practices. Replace or align it with the clinic's official,
// signed notice (the one given to patients in the office) before launch.
function NoticeOfPrivacyPractices() {
  return (
    <article className="legal">
      <h1>Notice of Privacy Practices</h1>
      {LEGAL.nppEffectiveDate && (
        <p className="legal__meta">Effective date: {LEGAL.nppEffectiveDate}</p>
      )}

      <p className="legal__callout">
        <strong>
          This notice describes how medical and dental information about you may be
          used and disclosed and how you can get access to this information. Please
          review it carefully.
        </strong>
      </p>

      <h2>Our commitment to your privacy</h2>
      <p>
        {CLINIC.name} is required by law to maintain the privacy of your protected
        health information (PHI), to give you this notice of our legal duties and
        privacy practices, to follow the terms of the notice currently in effect, and
        to notify you if a breach of your unsecured health information occurs.
      </p>

      <h2>How we may use and disclose your health information</h2>
      <h3>Treatment</h3>
      <p>
        We may use and share your information to provide dental care — for example,
        with a dental specialist, laboratory or pharmacy involved in your treatment.
      </p>
      <h3>Payment</h3>
      <p>
        We may use and share your information to bill and get payment from you, your
        dental insurance plan or another payer.
      </p>
      <h3>Health care operations</h3>
      <p>
        We may use your information to run our practice, improve the quality of care
        and train staff.
      </p>
      <h3>Appointment reminders</h3>
      <p>
        We may contact you by phone, text, mail or email to remind you about
        appointments or tell you about treatment options.
      </p>
      <h3>Other uses allowed or required by law</h3>
      <ul>
        <li>When required by federal, state or local law</li>
        <li>For public health and safety, such as reporting abuse or preventing a serious threat</li>
        <li>For health oversight activities and government audits</li>
        <li>In response to a court order, subpoena or other lawful process</li>
        <li>To law enforcement officials, medical examiners or funeral directors, as permitted by law</li>
        <li>For workers’ compensation claims</li>
        <li>For specialized government functions, such as military or national security</li>
      </ul>
      <h3>People involved in your care</h3>
      <p>
        Unless you object, we may share information with a family member, friend or
        other person you identify who is involved in your care or payment for care.
      </p>
      <h3>Uses that need your written permission</h3>
      <p>
        We will not use or share your information for marketing, sell your
        information, or use it in other ways not described in this notice without your
        written authorization. You may cancel an authorization at any time in writing.
      </p>

      <h2>Your rights</h2>
      <ul>
        <li>
          <strong>Get a copy of your records.</strong> You can ask to see or get a copy
          (paper or electronic) of your dental record. We may charge a reasonable,
          cost-based fee.
        </li>
        <li>
          <strong>Ask us to correct your record</strong> if you believe it is incorrect
          or incomplete.
        </li>
        <li>
          <strong>Request confidential communications</strong>, such as contacting you
          at a different phone number or address.
        </li>
        <li>
          <strong>Ask us to limit what we use or share.</strong> We are not required to
          agree, except that if you pay for a service in full out of pocket, you can ask
          us not to share that information with your health plan.
        </li>
        <li>
          <strong>Get a list of disclosures</strong> we have made of your information,
          with certain exceptions.
        </li>
        <li>
          <strong>Get a paper copy of this notice</strong> at any time, even if you
          agreed to receive it electronically.
        </li>
        <li>
          <strong>Choose someone to act for you</strong>, such as a legal guardian or
          someone with medical power of attorney.
        </li>
      </ul>

      <h2>Complaints</h2>
      <p>
        If you believe your privacy rights have been violated, you may file a complaint
        with us using the contact information below, or with the U.S. Department of
        Health and Human Services, Office for Civil Rights, at{" "}
        <a href="https://www.hhs.gov/ocr/complaints/" target="_blank" rel="noopener noreferrer">
          hhs.gov/ocr/complaints
          <span className="visually-hidden"> (opens in a new tab)</span>
        </a>
        . We will not retaliate against you for filing a complaint.
      </p>

      <h2>Changes to this notice</h2>
      <p>
        We may change the terms of this notice, and the changes will apply to all
        information we have about you. The new notice will be available in our office
        and on this website.
      </p>

      <h2>Contact our Privacy Officer</h2>
      <ContactBlock />
    </article>
  );
}

export default NoticeOfPrivacyPractices;
