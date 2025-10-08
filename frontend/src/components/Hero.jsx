import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      className="flex flex-col sm:flex-row items-center justify-between bg-gradient-to-r from-gray-50 via-white to-gray-100 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-500 border border-gray-50 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Hero Left Side */}
      <motion.div
        className="w-full sm:w-1/2 flex items-center justify-center py-12 px-6 sm:px-10"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.9 }}
      >
        <div className="text-[#2d2d2d] text-center sm:text-left space-y-4">
          {/* Tag */}
          <motion.div
            className="flex items-center justify-center sm:justify-start gap-3"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <p className="w-10 md:w-12 h-[2px] bg-[#2d2d2d]"></p>
            <p className="font-medium text-sm md:text-base tracking-widest uppercase">
              Our Bestseller
            </p>
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight hover:scale-105 transition-transform duration-300"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Latest Arrivals
          </motion.h1>

          {/* Button */}
          <motion.div
            className="flex items-center justify-center sm:justify-start gap-3 pt-3"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Link to="/collection">
              <button className="bg-[#414141] text-white font-semibold py-2 px-6 rounded-full hover:bg-gray-800 transition-colors duration-300">
                Shop Now
              </button>
            </Link>
            <p className="w-10 md:w-12 h-[2px] bg-[#2d2d2d]"></p>
          </motion.div>
        </div>
      </motion.div>

      {/* Hero Right Side */}
      <motion.div
        className="w-full sm:w-1/2 relative group overflow-hidden"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          className="h-[400px] sm:h-[500px] w-full object-cover transition-transform duration-700 scale-110 group-hover:scale-100"
          src={assets.side}
          alt="Latest Arrivals"
          whileHover={{ scale: 1.05, rotate: 1 }}
          transition={{ type: "spring", stiffness: 120 }}
        />
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        ></motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
