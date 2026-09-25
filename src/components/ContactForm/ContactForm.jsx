import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";

const TIME_SLOTS = ["Morning (9 AM – 12 PM)", "Afternoon (12 PM – 3 PM)", "Late afternoon (3 PM – 6 PM)"];

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

// Non-medical reasons only — we never ask for health details online.
const REASONS = [
  "New patient appointment",
  "Existing patient appointment",
  "Cleaning / check-up",
  "Cosmetic consultation",
  "Implant consultation",
  "General question",
];

function validate(values) {
  const errors = {};
  if (!values.fullName.trim()) errors.fullName = "Please enter your full name.";
  if (!/^\S+@\S+\.\S+$/.test(values.email.trim()))
    errors.email = "Please enter a valid email address, for example name@example.com.";
  const digits = values.phone.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 15)
    errors.phone = "Please enter a valid phone number, for example (708) 555-1234.";
  if (!values.reason) errors.reason = "Please choose a reason for your request.";
  if (values.bookAppointment && !values.preferredDate)
    errors.preferredDate = "Please choose a preferred date.";
  if (values.bookAppointment && !values.preferredTime)
    errors.preferredTime = "Please choose a preferred time.";
  if (!values.consent) errors.consent = "Please confirm you agree to be contacted.";
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
    if (touched[name]) setErrors(validate(next));
  }

  function handleBlur(e) {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors(validate(values));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    setTouched(Object.fromEntries(FIELD_ORDER.map((f) => [f, true])));

    const firstInvalid = FIELD_ORDER.find((f) => found[f]);
    if (firstInvalid) {
      setStatus({
        type: "error",
        message: `Please fix ${Object.keys(found).length} field${
          Object.keys(found).length > 1 ? "s" : ""
        } highlighted below.`,
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
        message: values.bookAppointment
          ? "Thank you! Your appointment request was sent. We will contact you to confirm a time."
          : "Thank you! Your message was sent. We will contact you soon.",
      });
      setValues(INITIAL);
      setTouched({});
      setErrors({});
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus({
        type: "error",
        message:
          "Sorry, your request could not be sent. Please try again or call our office.",
      });
    } finally {
      setIsSending(false);
    }
  }

  const describedBy = (name, hint) =>
    [hint, showError(name) ? `${name}-error` : null].filter(Boolean).join(" ") || undefined;

  return (
    <div className="contact-form">
      <h2 className="contact-form__title">Request an Appointment</h2>

      <p className="contact-form__privacy" id="privacy-note">
        <strong>Please do not include medical, dental or insurance details.</strong>{" "}
        This form is only for scheduling and general questions. We will discuss
        your health privately by phone or in the office.
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
          Fields marked with <span aria-hidden="true">*</span>
          <span className="visually-hidden">an asterisk</span> are required.
        </p>

        <div className="contact-form__field">
          <label htmlFor="fullName">
            Full name <span aria-hidden="true">*</span>
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
            Email <span aria-hidden="true">*</span>
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
            Phone <span aria-hidden="true">*</span>
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
            Reason for your request <span aria-hidden="true">*</span>
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
            <option value="">Choose one</option>
            {REASONS.map((r) => (
              <option key={r} value={r}>
                {r}
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
          <label htmlFor="bookAppointment">I would like to book an appointment</label>
        </div>

        {values.bookAppointment && (
          <fieldset className="contact-form__fieldset">
            <legend>Preferred appointment time</legend>

            <div className="contact-form__field">
              <label htmlFor="preferredDate">
                Preferred date <span aria-hidden="true">*</span>
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
                Preferred time <span aria-hidden="true">*</span>
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
                <option value="">Choose a time</option>
                {TIME_SLOTS.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
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
            I agree to be contacted by phone or email about this request, and I
            have read the{" "}
            <Link to="/privacy-policy">Website Privacy Policy</Link>.{" "}
            <span aria-hidden="true">*</span>
          </label>
        </div>
        {showError("consent") && (
          <p id="consent-error" className="contact-form__error">
            {errors.consent}
          </p>
        )}

        <button type="submit" className="btn btn--primary contact-form__submit" disabled={isSending}>
          {isSending ? "Sending…" : values.bookAppointment ? "Send Appointment Request" : "Send Message"}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
