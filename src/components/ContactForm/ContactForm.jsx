import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";
import { useLang } from "../../i18n";

const INITIAL = {
  fullName: "",
  email: "",
  phone: "",
  reason: "",
  bookAppointment: true,
  preferredDate: "",
  preferredTime: "",
  consent: false,
};

// Reasons and time slots: the value sent to the clinic is always English
// (so every staff member can read it); the label shown is translated.
// Non-medical reasons only — we never ask for health details online.

function validate(values, msg) {
  const errors = {};
  if (!values.fullName.trim()) errors.fullName = msg.fullName;
  if (!/^\S+@\S+\.\S+$/.test(values.email.trim())) errors.email = msg.email;
  const digits = values.phone.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 15) errors.phone = msg.phone;
  if (!values.reason) errors.reason = msg.reason;
  if (values.bookAppointment && !values.preferredDate) errors.preferredDate = msg.preferredDate;
  if (values.bookAppointment && !values.preferredTime) errors.preferredTime = msg.preferredTime;
  if (!values.consent) errors.consent = msg.consent;
  return errors;
}

const FIELD_ORDER = [
  "fullName",
  "email",
  "phone",
  "reason",
  "preferredDate",
  "preferredTime",
  "consent",
];

function todayISO() {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 10);
}

function ContactForm() {
  const { lang, t, to } = useLang();
  const f = t.form;
  const [values, setValues] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const formRef = useRef(null);
  // Set in the browser (not at build time) so the date limit is always today
  const [minDate, setMinDate] = useState(undefined);
  useEffect(() => setMinDate(todayISO()), []);

  const showError = (name) => touched[name] && errors[name];

  function handleChange(e) {
    const { name, type, value, checked } = e.target;
    const next = { ...values, [name]: type === "checkbox" ? checked : value };
    setValues(next);
    if (touched[name]) setErrors(validate(next, f.errors));
  }

  function handleBlur(e) {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors(validate(values, f.errors));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const found = validate(values, f.errors);
    setErrors(found);
    setTouched(Object.fromEntries(FIELD_ORDER.map((f) => [f, true])));

    const firstInvalid = FIELD_ORDER.find((f) => found[f]);
    if (firstInvalid) {
      setStatus({
        type: "error",
        message: f.fix(Object.keys(found).length),
      });
      formRef.current?.querySelector(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    setIsSending(true);
    setStatus({ type: "", message: "" });

    const templateParams = {
      fullName: values.fullName.trim(),
      email: values.email.trim(),
      phone: values.phone.trim(),
      reason: values.reason,
      requestType: values.bookAppointment ? "Appointment Request" : "Contact Message",
      preferredDate: values.bookAppointment ? values.preferredDate : "N/A",
      preferredTime: values.bookAppointment ? values.preferredTime : "N/A",
      // Tells the team which language to reply in (add {{language}} to the EmailJS template to see it)
      language: lang === "es" ? "Spanish (sent from the Spanish website)" : "English",
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setStatus({
        type: "success",
        message: values.bookAppointment ? f.successAppt : f.successMsg,
      });
      setValues(INITIAL);
      setTouched({});
      setErrors({});
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus({
        type: "error",
        message: f.failed,
      });
    } finally {
      setIsSending(false);
    }
  }

  const describedBy = (name, hint) =>
    [hint, showError(name) ? `${name}-error` : null].filter(Boolean).join(" ") || undefined;

  return (
    <div className="contact-form">
      <h2 className="contact-form__title">{f.title}</h2>

      <p className="contact-form__privacy" id="privacy-note">
        <strong>{f.privacyStrong}</strong> {f.privacy}
      </p>

      {/* Announced to screen readers when it changes */}
      <div
        role={status.type === "error" ? "alert" : "status"}
        aria-live="polite"
        className={`contact-form__status ${
          status.type ? `contact-form__status--${status.type}` : ""
        }`}
      >
        {status.message}
      </div>

      <form ref={formRef} className="contact-form__form" onSubmit={handleSubmit} noValidate>
        <p className="contact-form__required-note">
          {f.required} <span aria-hidden="true">*</span>
          <span className="visually-hidden">{f.requiredSr}</span> {f.requiredEnd}
        </p>

        <div className="contact-form__field">
          <label htmlFor="fullName">
            {f.fullName} <span aria-hidden="true">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            required
            value={values.fullName}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={Boolean(showError("fullName"))}
            aria-describedby={describedBy("fullName")}
          />
          {showError("fullName") && (
            <p id="fullName-error" className="contact-form__error">
              {errors.fullName}
            </p>
          )}
        </div>

        <div className="contact-form__field">
          <label htmlFor="email">
            {f.email} <span aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={Boolean(showError("email"))}
            aria-describedby={describedBy("email")}
          />
          {showError("email") && (
            <p id="email-error" className="contact-form__error">
              {errors.email}
            </p>
          )}
        </div>

        <div className="contact-form__field">
          <label htmlFor="phone">
            {f.phone} <span aria-hidden="true">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            required
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={Boolean(showError("phone"))}
            aria-describedby={describedBy("phone")}
          />
          {showError("phone") && (
            <p id="phone-error" className="contact-form__error">
              {errors.phone}
            </p>
          )}
        </div>

        <div className="contact-form__field">
          <label htmlFor="reason">
            {f.reason} <span aria-hidden="true">*</span>
          </label>
          <select
            id="reason"
            name="reason"
            required
            value={values.reason}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={Boolean(showError("reason"))}
            aria-describedby={describedBy("reason")}
          >
            <option value="">{f.choose}</option>
            {Object.entries(f.reasons).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
          {showError("reason") && (
            <p id="reason-error" className="contact-form__error">
              {errors.reason}
            </p>
          )}
        </div>

        <div className="contact-form__checkbox">
          <input
            id="bookAppointment"
            name="bookAppointment"
            type="checkbox"
            checked={values.bookAppointment}
            onChange={handleChange}
          />
          <label htmlFor="bookAppointment">{f.book}</label>
        </div>

        {values.bookAppointment && (
          <fieldset className="contact-form__fieldset">
            <legend>{f.preferred}</legend>

            <div className="contact-form__field">
              <label htmlFor="preferredDate">
                {f.date} <span aria-hidden="true">*</span>
              </label>
              <input
                id="preferredDate"
                name="preferredDate"
                type="date"
                min={minDate}
                required
                value={values.preferredDate}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={Boolean(showError("preferredDate"))}
                aria-describedby={describedBy("preferredDate")}
              />
              {showError("preferredDate") && (
                <p id="preferredDate-error" className="contact-form__error">
                  {errors.preferredDate}
                </p>
              )}
            </div>

            <div className="contact-form__field">
              <label htmlFor="preferredTime">
                {f.time} <span aria-hidden="true">*</span>
              </label>
              <select
                id="preferredTime"
                name="preferredTime"
                required
                value={values.preferredTime}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={Boolean(showError("preferredTime"))}
                aria-describedby={describedBy("preferredTime")}
              >
                <option value="">{f.chooseTime}</option>
                {Object.entries(f.times).map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
              {showError("preferredTime") && (
                <p id="preferredTime-error" className="contact-form__error">
                  {errors.preferredTime}
                </p>
              )}
            </div>
          </fieldset>
        )}

        <div className="contact-form__checkbox">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            required
            checked={values.consent}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={Boolean(showError("consent"))}
            aria-describedby={describedBy("consent", "privacy-note")}
          />
          <label htmlFor="consent">
            {f.consentA}{" "}
            <Link to={to("privacy")} hrefLang={lang === "es" ? "en" : undefined}>
              {f.consentLink}
            </Link>
            .{" "}
            <span aria-hidden="true">*</span>
          </label>
        </div>
        {showError("consent") && (
          <p id="consent-error" className="contact-form__error">
            {errors.consent}
          </p>
        )}

        <button type="submit" className="btn btn--primary contact-form__submit" disabled={isSending}>
          {isSending ? f.sending : values.bookAppointment ? f.sendAppt : f.sendMsg}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
