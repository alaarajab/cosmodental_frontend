import React, { useState } from "react";
import { useForm } from "../../hooks/useForm";
import "../ModalWithForm/ModalWithForm.css"; // reuse modal styles
import "./ContactForm.css"; // optional: additional contact-specific tweaks

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submittedType, setSubmittedType] = useState(""); // track send vs book

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
  ];

  const { values, errors, handleChange, resetForm, isValid } = useForm(
    {
      fullName: "",
      email: "",
      phone: "",
      bookAppointment: false,
      preferredDate: "",
      preferredTime: "",
    },
    {
      fullName: (v) => (!v.trim() ? "Full Name is required" : ""),
      email: (v) => (!/^\S+@\S+\.\S+$/.test(v) ? "Invalid email address" : ""),
      phone: (v) => (!/^\+?\d{7,15}$/.test(v) ? "Invalid phone number" : ""),
      preferredDate: (v, all) =>
        all.bookAppointment && !v ? "Select a date" : "",
      preferredTime: (v, all) =>
        all.bookAppointment && !v ? "Select a time" : "",
    },
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedType(values.bookAppointment ? "book" : "send");
    resetForm();
    setSubmitted(true);
  };

  return (
    <div className="contact__form-container">
      <h2 className="modal__title">Contact Us</h2>

      <form className="modal__form" onSubmit={handleSubmit} noValidate>
        <label className="modal__label">
          Full Name
          <input
            type="text"
            name="fullName"
            className="modal__input"
            value={values.fullName}
            onChange={handleChange}
            placeholder="Full Name"
          />
          {errors.fullName && (
            <span className="modal__error">{errors.fullName}</span>
          )}
        </label>

        <label className="modal__label">
          Email
          <input
            type="email"
            name="email"
            className="modal__input"
            value={values.email}
            onChange={handleChange}
            placeholder="you@example.com"
          />
          {errors.email && <span className="modal__error">{errors.email}</span>}
        </label>

        <label className="modal__label">
          Phone
          <input
            type="tel"
            name="phone"
            className="modal__input"
            value={values.phone}
            onChange={handleChange}
            placeholder="Phone Number"
          />
          {errors.phone && <span className="modal__error">{errors.phone}</span>}
        </label>

        <label className="modal__label">
          <input
            className="modal__label-checkbox"
            type="checkbox"
            name="bookAppointment"
            checked={values.bookAppointment}
            onChange={handleChange}
          />{" "}
          Book Appointment
        </label>

        {values.bookAppointment && (
          <div className="contact__details">
            <label className="modal__label">
              Preferred Date
              <input
                type="date"
                name="preferredDate"
                className="modal__input"
                value={values.preferredDate}
                onChange={handleChange}
              />
              {errors.preferredDate && (
                <span className="modal__error">{errors.preferredDate}</span>
              )}
            </label>

            <label className="modal__label">
              Preferred Time
              <select
                name="preferredTime"
                className="modal__input"
                value={values.preferredTime}
                onChange={handleChange}
              >
                <option value="">Select Time</option>
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
              {errors.preferredTime && (
                <span className="modal__error">{errors.preferredTime}</span>
              )}
            </label>
          </div>
        )}

        <button type="submit" className="modal__submit" disabled={!isValid}>
          {values.bookAppointment ? "Book" : "Send"}
        </button>
      </form>

      {submitted && (
        <div className="modal__footer">
          {submittedType === "book"
            ? "We will contact you to confirm your appointment. All information is private."
            : "We will contact you soon."}
        </div>
      )}
    </div>
  );
}

export default ContactForm;
