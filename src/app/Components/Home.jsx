"use client"
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

export default function Home() {
     const greetings = ["Hello..", "I'm sumaia", "Welcome to My Portfolio"];
  return (
    <div className='pt-20 px-7 lg:gap-20 lg:flex py-10 relative '> 
    
    
      {/* Greeting Section */}
      <div className="flex flex-col text-center md:text-left lg:py-20 space-y-2">
        
        {/* Hello line with emoji */}
        <motion.h1
          className="text-5xl  flex sm:text-6xl font-bold text-white items-center justify-center md:justify-start"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          {/** Animated letters for "Hello.." */}
          {"Hello..".split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.05, type: "spring", stiffness: 120 }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}

          {/* 👋 waving emoji */}
          <motion.span
            className="ml-2 text-yellow-500 inline-block"
            animate={{ rotate: [0, 15, -10, 15, 0] }}
            transition={{
              repeat: Infinity,
              repeatDelay: 2,
              duration: 1.5,
              ease: "easeInOut",
            }}
          >
            👋
          </motion.span>
        </motion.h1>

        {/* I'm sumaia */}
        <motion.h2
          className="text-3xl lg:py-5 sm:text-4xl font-semibold text-gray-400"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, type: "spring", stiffness: 100 }}>
          I'm sumaia
        </motion.h2>
       <div className='hidden lg:flex '>
         <motion.h2
          className="text-3xl  sm:text-4xl font-semibold text-lime-300"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, type: "spring", stiffness: 100 }}>
          MERN Stack Developer
        </motion.h2>

        
       </div>
       <div className='hidden lg:flex md:flex'>
        {/* Welcome line */}
        <motion.h2
          className="text-2xl flex flex-col lg:py-5 sm:text-3xl pb-5 text-gray-500"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.3, type: "spring", stiffness: 100 }}
        >
          Welcome to My Portfolio!!
        </motion.h2>
       </div>
        <div className='lg:flex gap-5 hidden  py-7'>
        <a 
        href='https://www.linkedin.com/in/sumaia-sultana-8324b8259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
            <FaLinkedin className='size-12 bg-white text-blue-500' /></a>
       <a 
        href='https://github.com/sumaia-sultana'><BsGithub className='size-12 bg-white' /></a>
        </div>
      </div>
      <div>
        <Image
        src="https://i.ibb.co/TxH1kmvF/sumaia.jpg"
        alt="sumaia's image"
         width={460}
         height={360}
        className="object-cover rounded-2xl text-center items-center justify-center"/>
   
      </div>
    
     </div>
  )
}
