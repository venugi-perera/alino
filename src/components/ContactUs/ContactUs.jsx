"use client";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,  // replay every scroll
      mirror: true, // animate on scroll up
      offset: 100,
      easing: "ease-in-out",
    });

    const refreshTimer = setTimeout(() => AOS.refreshHard(), 300);
    window.addEventListener("resize", AOS.refresh);

    return () => {
      clearTimeout(refreshTimer);
      window.removeEventListener("resize", AOS.refresh);
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="bg-card py-20 px-6 lg:px-20">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h1
            className="text-4xl lg:text-5xl font-extrabold text-foreground mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Contact Us
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We’d love to hear from you! Reach out for reservations, questions, or feedback.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-xl rounded-2xl p-8 transition hover:shadow-2xl"
            data-aos="fade-right"
          >
            <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>

            <label className="block mb-2 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />

            <label className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />

            <label className="block mb-2 font-medium">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />

            <label className="block mb-2 font-medium">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full mb-6 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            ></textarea>

            <button
              type="submit"
              className="bg-primary text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-primary/90 transition-transform duration-300 hover:scale-105"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div
            className="bg-gray-50 shadow-xl rounded-2xl p-8 transition hover:shadow-2xl"
            data-aos="fade-left"
          >
            <h2 className="text-2xl font-semibold mb-6">Get in touch</h2>
            <p className="mb-3 text-muted-foreground">
              <strong className="text-foreground">Address:</strong> 11 Narborough Rd Leicester LE3 0LE
            </p>
            <p className="mb-3 text-muted-foreground">
              <strong className="text-foreground">Phone:</strong> +44 7737 098045
            </p>
            <p className="mb-3 text-muted-foreground">
              <strong className="text-foreground">Email:</strong> alinokam2002@yahoo.fr
            </p>
            <p className="mb-6 text-muted-foreground">
              <strong className="text-foreground">Opening Hours:</strong> Mon-Sun: 10:00 AM - 10:00 PM
            </p>

            {/* Google Map */}
            <div className="w-full h-64 rounded-xl overflow-hidden shadow-md">
              <iframe
                title="Restaurant Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.858171793637!2d-1.143451!3d52.629721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48776121a3b8a7db%3A0xc2ec7f1e1a13e740!2s11%20Narborough%20Rd%2C%20Leicester%20LE3%200LE%2C%20UK!5e0!3m2!1sen!2suk!4v1693220000000!5m2!1sen!2suk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
