import React from 'react'
import { MdEmail, MdOutlineFileDownload } from 'react-icons/md'

export default function Contact() {
  return (
    <div className='bg-black min-h-screen items-center justify-center text-white p-10 flex flex-col '>
       
      <div className="max-w-6xl w-full p-10 rounded-2xl bg-gradient-to-r from-gray-900/60 to-gray-800/40 backdrop-blur-md border border-gray-700/50 shadow-md hover:shadow-lime-400/20 transition-all duration-300 text-center">
        
        <h1 className="text-3xl sm:text-4xl font-bold mb-8">
         Feel Free to Reach Out Anytime
        </h1>
        <p className='text-lg text-gray-500'>I'll Be Glad to Hear From You! I’m Interested in new opportunities and collaborations to build projects & sharing ideas</p>

        <div className="flex flex-col py-10 pb-8 sm:flex-row justify-center items-center gap-6">
          <a  href="\ATS_ Resume.pdf"
            className="flex items-center gap-2 text-black bg-lime-400 px-6 py-3 rounded-lg font-semibold
            hover:bg-lime-300 transition-colors shadow-md">
            <MdOutlineFileDownload className="size-5" />
            Download Resume
          </a>

          <a 
          href="https://mail.google.com/mail/?view=cm&fs=1&to=sumaiasultana0120@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
            className="flex items-center gap-2 text-white bg-gray-700 px-6 py-3 rounded-lg font-semibold
            hover:bg-gray-600 transition-colors shadow-md">
             <MdEmail />
            Email Me
          </a>
        </div>
      </div>
      </div>
  )
}
