import React from 'react'
import Myphoto from '../assets/img/Myphoto.jpeg'
import { Typewriter } from 'react-simple-typewriter';
import CertificationsSection from './CertificationsSection'
import SkillsSection from './SkillsSection'
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <div>
      {/* About Section */}
      <div className='flex flex-wrap justify-center items-center  p-4 max-w-screen-lg mx-auto my-28 gap-10 overflow-hidden animate-(--animate-slide-up)'>
        <div className='flex-1 flex justify-center items-center  max-w-[500px]  '>
          <img
            src={Myphoto}
            className='h-[480px] w-[480px] grayscale rounded-full object-cover border-1'
            alt="profile photo"
          />
        </div>
        <div className='flex-1  flex-col justify-start items-center  max-w-[480px] p-4 m-1'>
          <h1 className='font-worksans  text-[100px] font-semibold '>Hello,</h1>
          <h2 className='font-worksans text-[50px] font-semibold'> I'm Meehir </h2>
         
          <p className="text-black font-atkinson text-[14px] font-extralight mt-4">
            I’m a full-stack developer who believes clean code is poetry.
            I architect intuitive interfaces, design solid APIs, and debug like a detective.
          </p>
          {/* Cirlces */}
          <div className='flex justify-start items-center mt-4 gap-4'>
            <Link
              to="/resume"
              className="w-36 h-36 flex justify-center items-center rounded-full bg-yellow-500 border-1 text-black font-semibold hover:bg-white hover:text-black transition duration-300 animate-(--animate-slide-up-delay1)"
              aria-label="Resume"
            >
              Resume
            </Link>
            <Link
              to="/projects"
              className="w-36 h-36 flex justify-center items-center rounded-full bg-red-500 text-black border font-semibold hover:bg-white hover:text-black transition duration-300 animate-(--animate-slide-up-delay2)"
              aria-label="Projects"
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className="w-36 h-36 flex justify-center items-center rounded-full bg-cyan-500 text-black border font-semibold hover:bg-white hover:text-black transition duration-300 animate-(--animate-slide-up-delay3)"
              aria-label="Contact"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
      {/* separator */}
      <div className="w-full border-t border-gray-300 mt-2"></div>
      {/* skills */}
        <div>
          <SkillsSection />
        </div>
      {/* separator */}
      {/* <div className="w-full border-t border-gray-300 my-2"></div>
      <div>
        <CertificationsSection />
      </div> */}
    </div>
  )
}

export default AboutSection;