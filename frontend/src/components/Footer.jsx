import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="animate-fade-in-up">
      {/* Main Footer */}
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-20 text-sm">
        {/* Logo & Description */}
        <div className="animate-fade-in-left">
          <img
            src={assets.logo}
            className="mb-5 w-32 transition-transform duration-500 hover:scale-110"
            alt="Logo"
          />
          <p className="w-full md:w-2/3 text-gray-600 leading-relaxed">
            <span className="font-semibold text-indigo-700">GetItWare</span> is
            your trusted destination for premium electronic gadgets and
            accessories. We bring you the latest tech — from smartphones to
            laptops — at unbeatable prices. Our goal is to make technology{" "}
            <span className="italic text-indigo-600">
              affordable, accessible, and reliable
            </span>
            for everyone across Sri Lanka.
          </p>
        </div>

        {/* Company Links */}
        <div className="animate-fade-in">
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            {["Home", "About us", "Delivery", "Privacy Policy"].map(
              (item, idx) => (
                <li
                  key={idx}
                  className="cursor-pointer transition-transform duration-300 hover:translate-x-2 hover:text-blue-600"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="animate-fade-in-right">
          <p className="text-xl font-medium mb-5">Get in Touch</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li className="transition-transform duration-300 hover:translate-x-2 hover:text-blue-600">
              0753411591
            </li>
            <li className="transition-transform duration-300 hover:translate-x-2 hover:text-blue-600">
              supportGetitWare@gmail.com
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="animate-fade-in">
        <hr className="border-gray-300" />
        <p className="py-5 text-sm text-center text-gray-600">
          © 2025 GetItWare.com — All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
