 
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";

export default function  () {
  return (
    <div className="bg-black text-white px-6 md:px-16 py-12">

      {/* Heading */}
      <h1 className="text-4xl font-bold mb-12 border-b-2 border-lime-400 inline-block pb-2">
        Featured Projects
      </h1>

      {/* Grid Layout - Responsive  */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">

        {/* Project Card 1 */}
        <div className="bg-gradient-to-br from-gray-900/70 to-black/70 backdrop-blur-md border border-gray-800/50 rounded-2xl shadow-lg hover:shadow-lime-400/10 transition-all duration-300 p-6">
          <p className="text-gray-400 text-sm">2025 - Featured</p>
          <h2 className="text-2xl font-semibold mt-1">
            SparkFit || Fitness Training Web-app
          </h2>

          <img
            src="https://i.ibb.co/G3n1dMjq/admin-balance.jpg"
            alt="Admin Dashboard"
            className="w-full h-72 object-cover rounded-xl mt-4"
          />

          <p className="text-gray-400 mt-4">Full-Stack</p>

          <div className="flex flex-wrap gap-2 mt-2">
            {[ "React", "Express.js","Firebase","MongoDB", "Tailwind CSS", "Stripe"].map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="bg-gray-800/60 text-gray-300 text-sm px-3 py-1 rounded-full border border-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-6 mt-6">
            <a
              href="https://github.com/sumaia-sultana/SparkFitt-Fitness-trainer-booking-app-client"
              className="flex items-center gap-2 text-lime-400 hover:text-lime-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer">
              <FaGithub /> Source Code
            </a>
            <a
              href="https://spark-fit.web.app/"
              className="flex items-center gap-2 text-lime-400 hover:text-lime-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Site <BiLinkExternal />
            </a>
          </div>
        </div>

        {/* Project Card 2 */}
        <div className="bg-gradient-to-br from-gray-900/70 to-black/70 backdrop-blur-md border border-gray-800/50 rounded-2xl shadow-lg hover:shadow-lime-400/10 transition-all duration-300 p-6">
          <p className="text-gray-400 text-sm">2025</p>
          <h2 className="text-2xl font-semibold mt-1">
            Sunset Diary || Blogging Web-app
          </h2>

          <img
            src="https://i.ibb.co/84RKNfBS/Blogging-Site.jpg"
            alt="Sunset Diary Blogging Site"
            className="w-full h-72 object-cover rounded-xl mt-4"
          />

          <p className="text-gray-400 mt-4">Full-Stack</p>

          <div className="flex flex-wrap gap-2 mt-2">
            {["Express.js", "React", "Tailwind CSS", "Firebase", "MongoDB"].map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="bg-gray-800/60 text-gray-300 text-sm px-3 py-1 rounded-full border border-gray-700">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-6 mt-6">
            <a
              href="https://github.com/sumaia-sultana/Sunset-Diary-Blog-App"
              className="flex items-center gap-2 text-lime-400 hover:text-lime-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub /> Source Code
            </a>
            <a
              href="https://sunset-diary.web.app/"
              className="flex items-center gap-2 text-lime-400 hover:text-lime-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Site <BiLinkExternal />
            </a>
          </div>
        </div>

        {/* Project Card 3 */}
        <div className="bg-gradient-to-br from-gray-900/70 to-black/70 backdrop-blur-md border border-gray-800/50 rounded-2xl shadow-lg hover:shadow-lime-400/10 transition-all duration-300 p-6">
          <p className="text-gray-400 text-sm">2025</p>
          <h2 className="text-2xl font-semibold mt-1">
            GardenCare || Gardening Web-app
          </h2>

          <img
            src="https://i.ibb.co/sJ96VyTW/gardencare.jpg"
            alt="Gardening Activities Web"
            className="w-full h-72 object-cover rounded-xl mt-4"
          />

          <p className="text-gray-400 mt-4">Full-Stack</p>

          <div className="flex flex-wrap gap-2 mt-2">
            {["Firebase", "React", "Tailwind CSS", "MongoDB"].map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="bg-gray-800/60 text-gray-300 text-sm px-3 py-1 rounded-full border border-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-6 mt-6">
            <a
              href="https://github.com/sumaia-sultana/GardenCare-App"
              className="flex items-center gap-2 text-lime-400 hover:text-lime-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub /> Source Code
            </a>
            <a
              href="https://gardencare.web.app/"
              className="flex items-center gap-2 text-lime-400 hover:text-lime-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer">
              Live Site <BiLinkExternal />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
