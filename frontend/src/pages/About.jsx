import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-50 via-white to-indigo-100 p-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl text-center rounded-3xl shadow-2xl p-10 bg-white/80 backdrop-blur-sm border border-indigo-100"
      >
        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-700 via-purple-600 to-indigo-500 text-transparent bg-clip-text mb-6">
          About GetItWare
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
          <span className="font-semibold text-indigo-700">GetItWare</span> is
          your trusted hub for all things tech — where{" "}
          <span className="text-indigo-600 font-semibold">
            innovation meets convenience
          </span>
          . From cutting-edge laptops and smartphones to high-quality home
          electronics, we bring you products that blend performance and value.
        </p>

        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
          We go beyond just selling — our commitment includes{" "}
          <span className="font-semibold text-indigo-600">
            24/7 customer support, fast island-wide delivery, and hassle-free
            returns
          </span>
          . Whether you’re enhancing your workspace or exploring smart devices,
          we’re here to make your experience seamless and enjoyable.
        </p>

        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
          Our mission is simple:{" "}
          <span className="italic text-indigo-700 font-semibold">
            making technology accessible, affordable, and reliable for everyone
            in Sri Lanka
          </span>
          .
        </p>

        {/* Animated Icons */}
        <motion.div
          className="flex justify-center space-x-8 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-600 text-white shadow-xl hover:bg-blue-700 transform hover:scale-125 transition-all duration-300 hover:shadow-2xl"
          >
            <FaFacebookF size={22} />
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 text-white shadow-xl hover:opacity-90 transform hover:scale-125 transition-all duration-300 hover:shadow-2xl"
          >
            <FaInstagram size={26} />
          </a>
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="text-sm mt-10 text-gray-500 tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          © {new Date().getFullYear()} GetItWare — Empowering Tech for Everyone
          ⚡
        </motion.p>
      </motion.div>
    </div>
  );
};

export default About;
