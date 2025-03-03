"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./ContactForm.css";

const ContactForm = ({ buttonText = "Contact Us" }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    acceptedPolicy: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_hepdljh",
        "template_1p2jnte",
        formData,
        "bJSWFmn0jK5aVMiTh"
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
            acceptedPolicy: false,
          });
          setIsSubmittedSuccessfully(true);
          setTimeout(() => setIsSubmittedSuccessfully(false), 5000);
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send the message, please try again.");
        }
      );
  };

  return (
    <>
      {/* Button to open modal */}
      <button className="contact-button" onClick={() => setIsModalOpen(true)}>
        {buttonText}
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="backdrop" onClick={() => setIsModalOpen(false)}>
          <form
            className="contact-form"
            onSubmit={handleSubmit}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            {isSubmittedSuccessfully && (
              <div className="success-message">
                <span
                  role="img"
                  aria-label="checkmark"
                  style={{ color: "green" }}
                >
                  ✅
                </span>
                Ditt meddelande har skickats!
              </div>
            )}
            <div className="form-header">
              <h1>Kontakta Oss</h1>
              <button
                className="close-button"
                onClick={() => setIsModalOpen(false)}
              >
                Stäng
              </button>
            </div>

            <input
              type="text"
              name="name"
              placeholder="Namn"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Telefon Nummer"
              value={formData.phone}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Meddelande"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <div className="policy-box">
              <div className="privacy-policy-box">
                <input
                  type="checkbox"
                  name="acceptedPolicy"
                  id="policyCheckbox"
                  required
                />
                <label htmlFor="policyCheckbox">Jag accepterar</label>
                <div className="policy-link">
                  <a href="#" className="policy-button">
                    Säkerhetspolicy
                  </a>
                </div>
              </div>
            </div>
            <button className="submit-button" type="submit">
              Skicka
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default ContactForm;
