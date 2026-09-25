import { CLINIC, fullAddress } from "../../config/clinic";
import { LEGAL } from "../../config/legal";

function ContactBlock() {
  return (
    <p>
      {LEGAL.privacyOfficer}, {CLINIC.name}
      <br />
      {fullAddress}
      <br />
      Phone: <a href={CLINIC.phoneHref}>{CLINIC.phone}</a>
      {CLINIC.email && (
        <>
          <br />
          Email: <a href={`mailto:${CLINIC.email}`}>{CLINIC.email}</a>
        </>
      )}
    </p>
  );
}

export default ContactBlock;
