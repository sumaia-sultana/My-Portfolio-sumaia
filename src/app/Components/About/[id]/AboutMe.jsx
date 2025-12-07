import Image from 'next/image'
import React from 'react'
import { MdOutlineFileDownload } from "react-icons/md";

export default function AboutMe() {
  return (
   <section className="px-5 md:px-10 lg:px-20 py-10 text-center md:text-left">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center lg:text-">
        MERN Stack Web Developer
      </h1>

      {/* Description and image section */}
      <div className="mt-10 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 lg:gap-16">
        
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <Image
            src="https://i.ibb.co/Q7M32j7g/SuHalf.jpg"
            alt="sumaia Sultana"
            width={200}
            height={200}
            className="object-cover rounded-full border-4 border-lime-700 mx-auto md:mx-0 shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="px-16 flex flex-col items-center md:items-start text-gray-300 max-w-xl">
          <p className="text-base sm:text-lg leading-relaxed">
            I’m <span className="text-lime-300 font-medium">sumaia Sultana</span>, a passionate frontend developer 
            focused on building smooth, interactive, and modern web experiences.
          </p>
          
          <p className="py-3 text-sm sm:text-base leading-relaxed text-gray-200">
            I'm a curious developer who enjoys turning ideas into real and keen to create responsive interfaces 
            using React and Next.js. I’ve worked on projects involving Firebase authentication, MongoDB, and 
            Stripe payments and I’m always eager to tackle challenging problems.
          </p>

          {/* Download Button */}
          <a
            href="/ATS_ Resume.pdf"
            className="flex items-center gap-2 mt-4 text-black bg-lime-400 px-5 py-2 rounded-lg font-semibold
            hover:bg-lime-300 transition-colors shadow-md"
          >
            <MdOutlineFileDownload className="size-5" />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}
