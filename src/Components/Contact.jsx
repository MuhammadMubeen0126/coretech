import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send the data to an API or email service)
    alert("Your message has been sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="relative">
      {/* Contact Section */}
      <section className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-blue-50 to-white py-16 px-6 md:px-16 lg:px-24">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
            Get in Touch with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              CORETECH
            </span>
          </h1>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            Whether you have a question, need support, or want to explore new
            opportunities with us, we are here to assist you. Contact us via the
            form below or reach out directly using the details provided.
          </p>
        </div>

        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center relative">
          <img
            src="/assets/images/Cloud.png"
            alt="Cloud Illustration"
            className="w-3/4 md:w-full max-w-md h-auto transform transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-br from-blue-500 to-purple-500 blur-3xl opacity-30 z-[-1] rounded-full"></div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-gray-100 py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6 leading-tight">
            Contact Form
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            We value your feedback and inquiries. Please fill out the form below,
            and we will get back to you as soon as possible.
          </p>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-8 max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg text-gray-700 font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-lg text-gray-700 font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-lg text-gray-700 font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  placeholder="Write your message here"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 px-8 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="bg-white py-16 px-6 md:px-16 lg:px-24 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6 leading-tight">
          Contact Information
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          For immediate assistance, feel free to contact us directly through the following channels:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <div className="text-blue-700 mb-4">
              <FaPhoneAlt size={40} />
            </div>
            <p className="font-bold text-gray-800">Phone</p>
            <p className="text-gray-600">+92 336 6845443</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-blue-700 mb-4">
              <FaEnvelope size={40} />
            </div>
            <p className="font-bold text-gray-800">Email</p>
            <p className="text-gray-600">info@coretech.com.pk</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-blue-700 mb-4">
              <FaMapMarkerAlt size={40} />
            </div>
            <p className="font-bold text-gray-800">Address</p>
            <p className="text-gray-600">Office # 12, Mezzanine Floor, CoreTech Solutions,<br />Karachi, Pakistan</p>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="py-20 px-6 md:px-16 lg:px-24 bg-gray-100">
        <div className="max-w-screen-xl mx-auto text-center">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6">
            Find Our Location
          </h3>
          <div className="relative pb-[56.25%] rounded-lg overflow-hidden shadow-md">
            {/* Embed Google Map here */}
            <iframe
              title="Our Location"
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.1964140700256!2d67.03644747407048!3d24.925377942659306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f8af4af5209%3A0xcb3ae5bc1a0c7506!2sSolution%20Net%20Link%20Saima%20Branch!5e0!3m2!1sen!2s!4v1732307977669!5m2!1sen!2s"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
