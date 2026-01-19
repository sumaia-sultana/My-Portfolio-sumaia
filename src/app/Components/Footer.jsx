import Image from 'next/image'
import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import Chatbot from '../Chatbot'

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 border-t border-gray-800 py-10 px-6 md:px-16 mt-0">
      <Chatbot/>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10 md:gap-0">
        
        {/* Left - Logo & Description */}
        <div className="flex flex-col  item-start md:items-start  text-left md:text-left md:w-1/3">
          <div className="flex lg:items-center gap-2">
            <span className="text-lime-400 text-2xl font-bold">&lt;/&gt;</span>
            <span className="text-xl font-bold text-white ">Sumaia</span>
          </div>
          <p className="text-sm text-gray-400 mt-2 max-w-xs">
           I'm a Frontened developer passionate about crafting clean, elegant, and user-friendly web experiences. Let’s build something amazing together.
          </p>
        </div>
        {/* Middle - Navigation */}
        <div className="flex flex-col px-5 md:items-start text-left lg:text-center md:text-left md:w-1/3">
          <h3 className="font-semibold text-gray-200 mb-3 uppercase tracking-wider text-sm">Navigation</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-lime-400 transition-colors">Home</a></li>
            <li><a href="#projects" className="hover:text-lime-400 transition-colors">Projects</a></li>
            <li><a href="#skills" className="hover:text-lime-400 transition-colors">Skills</a></li>
            <li><a href="#about-me" className="hover:text-lime-400 transition-colors">About</a></li>
            <li><a href="#contact" className="hover:text-lime-400 transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Right - Social Links */}
        <div className="lg:flex  lg:flex-col md:items-start lg:px-0 px-7 lg:text-center text-left md:text-left md:w-1/3">
          <h3 className="font-semibold text-gray-200 mb-3 uppercase tracking-wider text-sm">Connect</h3>
          <div className="lg:flex md:flex grid grid-cols-1 gap-6 text-xl">
            <a
              href="https://github.com/sumaia-sultana"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-lime-400 transition-colors">
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/sumaia-sultana07/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-lime-400 transition-colors">
              <FaLinkedinIn />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=sumaiasultana0120@gmail.com"
              className="hover:text-lime-400 transition-colors" >
              <MdEmail />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center w-auto text-gray-500 text-sm mt-10 border-t border-gray-800 pt-4">
        © {new Date().getFullYear()} — Sumaia Sultana. All rights reserved.
      </div>
    </footer>
  )
}
