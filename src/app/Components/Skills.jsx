"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from 'react'

export default function Skills() {
    const skills = [
   { src: "https://i.ibb.co/twfsNXQX/reaeec.jpg", alt: "React" },
    { src: "https://i.ibb.co/vbfDB6X/logo-firebase.jpg", alt: "Firebase" }, // ✅ fixed URL
    { src: "https://i.ibb.co/bYJNH9d/GitHub.png", alt: "Git" },
    { src: "https://i.ibb.co/TMX3FR9v/headless-ui-icon.jpg", alt: "HeadlessUI" },
    { src: "https://i.ibb.co/BpqY8pW/express-js.jpg", alt: "Express" },
    { src: "https://i.ibb.co/QjrcRXj6/Vercel-favicon.jpg", alt: "Vercel" }, // ✅ fixed domain
    { src: "https://i.ibb.co/LGgcjyJ/font-AWS.png", alt: "AWS" },
    { src: "https://i.ibb.co/FLSkncb3/mongodb.png", alt: "MongoDB" },
    { src: "https://i.ibb.co/Rpptz2RD/tailwind-css-logo.jpg", alt: "Tailwind" },
    { src: "https://i.ibb.co/yFgxF26w/next-logo.png", alt: "Next.js" },
 ];

  return (
 <div>
     <div className="relative flex items-center justify-center
       w-[280px] h-[280px] 
       sm:w-[380px] sm:h-[380px] 
       md:w-[450px] md:h-[450px] 
       lg:w-[500px] lg:h-[500px] 
       mx-auto"> 
      {/* Rotating ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute rounded-full border border-purple-500/20 h-full w-full" >
        {skills.map((skill, index) => {
          const angle = (index / skills.length) * 2 * Math.PI;
          const radius = 42;

          return (
            <motion.div
              key={index}
              className="absolute"
              style={{
                top: `${50 + radius * Math.sin(angle)}%`,
                left: `${50 + radius * Math.cos(angle)}%`,
                transform: "translate(-50%, -50%)",
              }} >
              <div className="bg-black/60 backdrop-blur-md lg:p-3 
                p-2 md:p-2.5 rounded-xl shadow-lg">
                <Image src={skill.src} alt={skill.alt} width={40} height={40} />
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Center image */}
      <div className="absolute rounded-full overflow-hidden w-40 h-40 border-4 border-purple-500 shadow-xl">
        <Image
          src="https://i.ibb.co/Q7M32j7g/SuHalf.jpg" // replace with your image
          alt="Profile"
          fill
          className="object-cover"
        />
      </div>
     
    </div>
  <div className="pt-10 px-10 ">
      <div className="flex flex-wrap justify-center gap-2 mt-2">
  {[ "JavaScript", "React","Express.js", "Tailwind CSS","Next.js", "Firebase", "MongoDB", "GitHub"].map((tech, i) => (
    <button
      key={`${tech}-${i}`}
      className="bg-gray-800/70 text-gray-200 text-sm px-4 py-2 rounded-full border border-gray-700 
                 hover:bg-lime-400 hover:text-black transition-colors shadow-sm" >
      {tech}
    </button>
  ))}
</div>
  </div>

 </div>
  
  )
}
