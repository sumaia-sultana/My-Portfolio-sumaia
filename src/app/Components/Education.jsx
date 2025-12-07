import React from 'react'

export default function  () {
  return (
    <div className='bg-black justify-items-start text-white p-10 flex flex-col items-start'>
       <h1 className="text-4xl font-bold mb-8 border-b-2 border-lime-400 pb-2 inline-block">
        Education
      </h1>
     <div className="w-full p-8 rounded-2xl bg-gradient-to-r from-gray-900/60 to-gray-800/40 backdrop-blur-md border border-gray-700/50 shadow-md hover:shadow-lime-400/20 transition-all duration-300">
        <h2 className="text-2xl font-bold">
          BSc in Computer Science & Engineering (CSE)
        </h2>
        <h3 className="text-lg font-medium text-lime-400 mt-1">
          University Of Development Alternative
        </h3>
        <p className="text-gray-400 mt-2">
          May 2019 – May 2023
        </p>
      </div>
      {/* <h1 className="text-4xl pt-5 font-bold mb-8 border-b-2 border-lime-400 pb-2 inline-block">
        Certification
      </h1> */}
      {/* <div className="w-full p-8 rounded-2xl bg-gradient-to-r from-gray-900/60 to-gray-800/40 backdrop-blur-md border border-gray-700/50 shadow-md hover:shadow-lime-400/20 transition-all duration-300">
        <h2 className="text-2xl font-bold">
           Mern Stack Developement
        </h2>
        <h3 className="text-lg font-medium text-lime-400 mt-1">
           Proggramming Hero Level-1
        </h3>
         
      </div> */}
 </div>
  )
}
