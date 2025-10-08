import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import Footer from "../components/Footer";
import OurPolicy from "../components/OurPolicy";
import { motion } from "framer-motion";

const WelcomePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* 🔹 Top Welcome Banner */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center py-3 text-sm md:text-base font-medium shadow-md"
      >
        🎉 Welcome to <span className="font-semibold">GetItWare</span> — Your
        Trusted Destination for the Latest Electronics!
      </motion.div>

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-8 md:px-20 py-10 md:py-16 relative -mt-4">
        {/* Left Content */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left space-y-6"
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Discover{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
              Smarter Shopping
            </span>{" "}
            with GetItWare
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-md mx-auto md:mx-0">
            Your one-stop store for premium electronics — laptops, mobiles, and
            gadgets designed to make your life easier.
          </p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link
              to="/home"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-300"
            >
              Explore Products
            </Link>

            <Link
              to="/login"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-300"
            >
              Sign Up
            </Link>
          </motion.div>

          <motion.div
            className="flex justify-center md:justify-start gap-6 mt-8 text-gray-700"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 hover:text-blue-600 transition">
              <span className="text-lg">🚚</span>
              <p>Free Shipping</p>
            </div>
            <div className="flex items-center gap-2 hover:text-blue-600 transition">
              <span className="text-lg">💬</span>
              <p>24/7 Support</p>
            </div>
            <div className="flex items-center gap-2 hover:text-blue-600 transition">
              <span className="text-lg">🔒</span>
              <p>Secure Payment</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="w-full md:w-1/2 relative flex justify-center mb-10 md:mb-0"
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-blue-600/10 to-indigo-700/10 rounded-3xl blur-3xl"></div>
          <motion.img
            src={assets.side}
            alt="Electronics"
            className="w-full max-w-lg object-contain z-10 rounded-3xl shadow-2xl"
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ type: "spring", stiffness: 120 }}
          />
        </motion.div>
      </section>

      {/* Features / Policy Section */}
      <motion.section
        className="bg-white py-16 shadow-inner"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Why Shop with <span className="text-blue-600">GetItWare?</span>
          </h2>
          <OurPolicy />
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="mt-auto bg-transparent text-gray-700 py-10 border-t border-gray-200"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-6xl mx-auto px-8">
          <Footer />
        </div>
      </motion.footer>
    </div>
  );
};

export default WelcomePage;
