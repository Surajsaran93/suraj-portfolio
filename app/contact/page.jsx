"use client";

import { useState } from "react";
import Link from "next/link";

export default function LetsConnect() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Your message has been sent successfully!");
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        alert("Failed to send your message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-jetbrains relative p-6">
      {/* Top Navigation */}
      <div className="absolute top-4 left-4">
        <h1 className="text-2xl font-bold">Suraj Kumar</h1>
      </div>
      <div className="absolute top-4 right-4">
        <nav className="flex space-x-6">
          <Link href="/" className="text-gray-300 hover:text-yellow-400 transition duration-200">
            Home
          </Link>
          <Link href="/work" className="text-gray-300 hover:text-yellow-400 transition duration-200">
            Work
          </Link>
          <Link href="/services" className="text-gray-300 hover:text-yellow-400 transition duration-200">
            Services
          </Link>
          <Link href="/resume" className="text-gray-300 hover:text-yellow-400 transition duration-200">
            Resume
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-yellow-400 transition duration-200">
            Contact
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto items-center mt-12">
        {/* Left Side: Welcome Message and Form */}
        <div className="flex flex-col justify-center">
          <div className="mb-8">
            <h1 className="text-4xl font-extrabold text-yellow-400 mb-4">Let&apos;s Connect</h1>
            <p className="text-gray-400 text-lg">
              Feel free to reach out if you have any questions, want to collaborate, or simply wish to connect.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-700 text-white focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-700 text-white focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-300 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-700 text-white focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="service" className="block text-gray-300 mb-2">
                Type of Service Needed
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-700 text-white focus:ring-2 focus:ring-yellow-400"
                required
              >
                <option value="">Select a Service</option>
                <option value="Web Development">Web Development</option>
                <option value="Software Development">Software Development</option>
                <option value="Application Development">Application Development</option>
                <option value="Content Writing">Content Writing</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-700 text-white focus:ring-2 focus:ring-yellow-400"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-yellow-400 text-black font-bold py-2 px-4 rounded hover:bg-yellow-500 transition duration-200 w-full"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right Side: Contact Information */}
        <div className="flex flex-col justify-center bg-gray-900 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-yellow-400 mb-6">Contact Information</h2>
          <div className="text-gray-300 space-y-4">
            <div className="flex items-center">
              <img src="/address-icon.png" alt="Address Icon" className="w-6 h-6 mr-3" />
              <span>VVG Nagar, Theni, Tamil Nadu, 625523</span>
            </div>
            <div className="flex items-center">
              <img src="/email-icon.png" alt="Email Icon" className="w-6 h-6 mr-3" />
              <span>surajsran@gmail.com</span>
            </div>
            <div className="flex items-center">
              <img src="/phone-icon.png" alt="Phone Icon" className="w-6 h-6 mr-3" />
              <span>+91 6380743142</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
