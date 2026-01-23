import React, { useState } from "react";
import { useForm } from "../../hooks/useForm";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import "../ModalWithForm/ModalWithForm.css";
import "./ContactForm.css";

function ContactForm() {
  const [submittedType, setSubmittedType] = useState(""); // book or send
  const [isSending, setIsSending] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValid) return;

    setIsSending(true);

    const templateParams = {
      fullName: values.fullName,
      email: values.email,
      phone: values.phone,
      requestType: values.bookAppointment
        ? "Appointment Request"
        : "Contact Message",
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

      setSubmittedType(values.bookAppointment ? "book" : "send");
      toast.success(
        values.bookAppointment
          ? "Appointment request sent! We will contact you to confirm."
          : "Message sent! We will contact you soon.",
      );

      resetForm();
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="contact__form-container">
      {/* Toast container */}
      <Toaster position="top-right" reverseOrder={false} />

      <h2 className="modal__title">Contact Us</h2>
      <form className="modal__form" onSubmit={handleSubmit} noValidate>
        {/* Full Name */}
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

        {/* Email */}
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

        {/* Phone */}
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

        {/* Book Appointment Checkbox */}
        <label className="modal__label">
          <input
            type="checkbox"
            name="bookAppointment"
            className="modal__label-checkbox"
            checked={values.bookAppointment}
            onChange={handleChange}
          />{" "}
          Book Appointment
        </label>

        {/* Appointment Details */}
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

        <button
          type="submit"
          className="modal__submit"
          disabled={!isValid || isSending}
        >
          {isSending ? "Sending..." : values.bookAppointment ? "Book" : "Send"}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
