import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import { assets } from "../assets/assets";

const Contact = () => {
  const [image, setImage] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-100 flex flex-col items-center justify-center p-8">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-center text-indigo-700 mb-8"
      >
        Contact <span className="text-purple-600">GetItWare</span>
      </motion.h1>

      {/* Logo Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="flex flex-col items-center mb-10"
      >
        {image && (
          <img
            src={image}
            alt="Selected"
            className="w-32 h-32 mb-4 object-contain rounded-full shadow-lg"
          />
        )}
        <button
          onClick={() => setImage(assets.logo || "/assets/logo.png")}
          className="bg-indigo-600 text-white px-5 py-2 rounded-full shadow-md hover:bg-indigo-700 transition-transform hover:scale-105"
        >
          Show Logo
        </button>
      </motion.div>

      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full mb-12"
      >
        {/* Phone */}
        <div className="flex flex-col items-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition">
          <FaPhoneAlt className="text-indigo-600 text-3xl mb-3" />
          <h3 className="font-semibold text-lg mb-1">Phone</h3>
          <p className="text-gray-600">+94 75 3411591</p>
        </div>

        {/* Email */}
        <div className="flex flex-col items-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition">
          <FaEnvelope className="text-indigo-600 text-3xl mb-3" />
          <h3 className="font-semibold text-lg mb-1">Email</h3>
          <p className="text-gray-600">supportGetitWare@gmail.com</p>
        </div>

        {/* Address */}
        <div className="flex flex-col items-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition">
          <FaMapMarkerAlt className="text-indigo-600 text-3xl mb-3" />
          <h3 className="font-semibold text-lg mb-1">Address</h3>
          <p className="text-gray-600 text-center">
            No. 23, Main Street, Valaichenai, Batticaloa, Sri Lanka
          </p>
        </div>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl p-8 max-w-3xl w-full"
      >
        <h2 className="text-2xl font-bold text-indigo-700 mb-6 text-center">
          Send Us a Message
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <textarea
          rows="5"
          placeholder="Your Message..."
          className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full mt-6"
        ></textarea>

        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transform hover:scale-105 transition duration-300 shadow-md"
          >
            Send Message
          </button>
        </div>
      </motion.form>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="flex space-x-6 mt-10"
      >
        <a
          href="https://facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transform hover:scale-110 transition duration-300"
        >
          <FaFacebookF size={20} />
        </a>
        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 text-white shadow-lg hover:opacity-90 transform hover:scale-110 transition duration-300"
        >
          <FaInstagram size={22} />
        </a>
      </motion.div>

      {/* Footer */}
      <p className="text-gray-500 text-sm mt-8">
        © {new Date().getFullYear()} GetItWare — All Rights Reserved.
      </p>
    </div>
  );
};

export default Contact;
