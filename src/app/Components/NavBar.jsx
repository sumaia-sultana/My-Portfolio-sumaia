"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
 
  // ✅ Place it here — inside your component
  const handleScroll = (e, path) => {
    e.preventDefault();
    const section = document.querySelector(path);
    section?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  // ✅ Navigation items
  const navItems = [
    { name: "Home", path: "#home" },
    { name: "Projects", path: "#projects" },
    { name: "Skills", path: "#skills" },
    { name: "Contact", path: "#contact" },
    { name: "About Me", path: "#about" },
  ];

  return (
    <div>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 
          w-[90%] md:w-[80%] lg:w-[70%] flex items-center justify-between
          px-6 py-3 backdrop-blur-md bg-black/30 border border-white/10 
          rounded-full shadow-lg"
      >
        {/* Logo */}
        <div className="flex items-center ">
          <span className="text-lime-400 text-2xl font-bold">&lt;/&gt;</span>
          <span className="text-white font-semibold text-lg">dev.sumaia</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-gray-300 text-[16px]">
          {navItems.map((item) => (
            <a
              key={item.path}
              href={item.path}
              onClick={(e) => handleScroll(e, item.path)}
              className="hover:text-white transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="#contact"
          onClick={(e) => handleScroll(e, "#contact")}
          className="text-white hidden md:inline-flex bg-lime-400 px-2 py-2 rounded-full font-semibold
            hover:bg-lime-300 transition-colors shadow-md"
        >
          Hire Me
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition"
        >
          {menuOpen ? <FiX /> : <AiOutlineMenu size={26} />}
        </button>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="absolute top-16 left-0 w-full bg-black/80 backdrop-blur-md 
                border-t border-white/10 flex flex-col items-center gap-6 py-6 
                text-gray-300 text-lg md:hidden rounded-b-2xl"
            >
              {navItems.map((item) => (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={(e) => handleScroll(e, item.path)}
                  className="hover:text-white transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, "#contact")}
                className="text-white bg-lime-400 px-2 py-2 rounded-lg font-semibold
                  hover:bg-lime-300 transition-colors shadow-md"
              >
                Hire Me
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}
