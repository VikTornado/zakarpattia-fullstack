// src/components/ContactForm.js
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        "service_7mvckjh", // 🔁 твій Service ID
        "template_9n050rj", // 🔁 твій Template ID
        formData,
        "OvhOImc_uZNw89FCM" // 🔁 твій Public Key з EmailJS
      )
      .then(
        (result) => {
          setStatus("Message sent successfully! ✅");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setStatus("Something went wrong. ❌");
          console.error(error);
        }
      );
  };

  return (
    <form
      onSubmit={sendEmail}
      className="max-w-xl mx-auto p-6 bg-white shadow rounded space-y-4"
    >
      <h2 className="text-2xl font-bold text-center">Contact Us</h2>

      <input
        type="text"
        name="name"
        placeholder="Your name"
        className="w-full border p-2 rounded"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your email"
        className="w-full border p-2 rounded"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder="Your message"
        className="w-full border p-2 rounded"
        value={formData.message}
        onChange={handleChange}
        rows={5}
        required
      ></textarea>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Send
      </button>

      {status && <p className="text-center mt-2">{status}</p>}
    </form>
  );
}

export default ContactForm;
