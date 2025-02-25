"use client";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send("service_xxx", "template_xxx", formData, "user_xxx")
      .then(() => alert("Message sent successfully!"))
      .catch(() => alert("Error sending message"));
  };

  return (
    <div className="max-w-4xl mx-auto p-10 text-white">
      <h1 className="text-3xl font-bold text-blue-400 text-center">Contact Me</h1>
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <input type="text" name="name" placeholder="Your Name" onChange={handleChange} className="w-full p-2 rounded bg-gray-800 text-white" required />
        <input type="email" name="email" placeholder="Your Email" onChange={handleChange} className="w-full p-2 rounded bg-gray-800 text-white" required />
        <textarea name="message" placeholder="Your Message" onChange={handleChange} className="w-full p-2 rounded bg-gray-800 text-white" required></textarea>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg text-white">Send</button>
      </form>
    </div>
  );
}
