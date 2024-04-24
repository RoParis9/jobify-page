import React from 'react'
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-[#111111] ">
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
      gap-[3rem] items-start pb-[2rem] border-b-2 border-white border-opacity-10">
        <div> 
          <h2 className="text-[24px] text-white mb-[1rem] font-bold uppercase">Jobify</h2>
          <p className="text-[14px] text-white text-opacity-70">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, laborum?
          </p>
          <div className="mt-[5rem] flex items-center space-x-3">
            <div className="w-[2.4rem] h-[2.4rem] bg-blue-600 rounded-full 
            flex items-center justify-center flex-col">
              <FaFacebookF className="text-white"/>
            </div>
            <div className="w-[2.4rem] h-[2.4rem] bg-red-400 rounded-full 
            flex items-center justify-center flex-col">
              <FaInstagram className="text-white"/>
            </div>
            <div className="w-[2.4rem] h-[2.4rem] bg-red-600 rounded-full 
            flex items-center justify-center flex-col">
              <FaYoutube className="text-white"/>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-[22px] w-fit text-white font-semibold mb-[1.5rem]">
            About Us
          </h2>
          <p className="text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer 
          text-opacity-30 mb-[0.7rem]">
            Job
          </p>
          <p className="text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer 
          text-opacity-30 mb-[0.7rem]">
            Privacy
          </p>
          <p className="text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer 
          text-opacity-30 mb-[0.7rem]">
            Policy
          </p>
          <p className="text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer 
          text-opacity-30 mb-[0.7rem]">
            Candidate 
          </p>
        </div>


        <div>
          <h2 className="text-[22px] w-fit text-white font-semibold mb-[1.5rem]">
            Quick Link
          </h2>
          <p className="text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer 
          text-opacity-30 mb-[0.7rem]">
            All Jobs
          </p>
          <p className="text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer 
          text-opacity-30 mb-[0.7rem]">
            Job Details
          </p>
          <p className="text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer 
          text-opacity-30 mb-[0.7rem]">
            How to apply
          </p>
          <p className="text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer 
          text-opacity-30 mb-[0.7rem]">
            Resume
          </p>
        </div>


        <div>
          <h2 className="text-[22px] w-fit text-white font-semibold mb-[1.5rem]">
            Get in touch
          </h2>
          <p className="text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer 
          text-opacity-30 mb-[0.7rem]">
            +123 456 789
          </p>
          <p className="text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer 
          text-opacity-30 mb-[0.7rem]">
            jobify@gmail.com
          </p>
          <p className="text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer 
          text-opacity-30 mb-[0.7rem]">
            Houston, Texas
          </p>
          <p className="text-[15px] w-fit text-white hover:text-yellow-300 cursor-pointer 
          text-opacity-30 mb-[0.7rem]">
            Resume
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer