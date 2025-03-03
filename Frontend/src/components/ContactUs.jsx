import React, { useState } from "react";
import styles from "./ContactUs.module.css";
import { MdOutlinePhoneCallback } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { FaLocationDot } from "react-icons/fa6";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");

  // Handle Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_fjspr4a", // 🔹 Replace with EmailJS Service ID
        "template_h3yiunr", // 🔹 Replace with EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "oOFp1peEd6HMQsXkW" // 🔹 Replace with EmailJS Public Key
      )
      .then(
        () => {
          setStatusMessage("✅ Message Sent Successfully!");
          setFormData({ name: "", email: "", message: "" }); // Reset form
        },
        () => {
          setStatusMessage("❌ Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.title}>Get In Touch</h1>
      <p className={styles.subtitle}>
        We’d love to hear from you! Reach out to us for any inquiries or feedback.
      </p>

      <div className={styles.contactContent}>
        {/* Contact Information Section */}
        <div className={styles.contactInfo}>
          <h2>Connect With Us</h2>
          <p><strong><MdOutlinePhoneCallback /></strong> <u>8927179013</u></p>
          <p><strong><TfiEmail /></strong> <u>shibantaglobal@gmail.com</u></p>
          <p><strong><FaLocationDot /></strong> Kolkata, India</p>
        </div>

        {/* Contact Form */}
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className={styles.inputField}
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className={styles.inputField}
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            className={styles.textarea}
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className={styles.submitButton}>
            Send Message
          </button>
        </form>
      </div>

      {statusMessage && <p className={styles.statusMessage}>{statusMessage}</p>}
    </div>
  );
};

export default ContactUs;
