// ContactUs.jsx
import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can integrate with your backend API here
    alert("Thank you! Your message has been sent.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="contact-us container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
      <div className="flex flex-col md:flex-row gap-8">
        {/* Contact Form */}
        <form
          className="flex-1 bg-white shadow-md rounded-lg p-6"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-semibold mb-4">Send us a message</h2>
          <label className="block mb-2 font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded"
            required
          />
          <label className="block mb-2 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded"
            required
          />
          <label className="block mb-2 font-medium">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded"
          />
          <label className="block mb-2 font-medium">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className="w-full mb-4 p-2 border rounded"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-primary text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="flex-1 bg-gray-50 shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Get in touch</h2>
          <p className="mb-2">
            <strong>Address:</strong> 11 Narborough Rd Leicester LE3 0LE
          </p>
          <p className="mb-2">
            <strong>Phone:</strong> +44 7737 098045
          </p>
          <p className="mb-2">
            <strong>Email:</strong> alinokam2002@yahoo.fr
          </p>
          <p className="mb-4">
            <strong>Opening Hours:</strong> Mon-Sun: 10:00 AM - 10:00 PM
          </p>

          {/* Embedded Google Map */}
          <div className="w-full h-64">
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
  );
};

export default ContactUs;
