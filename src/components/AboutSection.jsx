import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Myphoto from '../assets/img/Myphoto.jpeg';
import SkillsSection from './SkillsSection';

const AboutSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const circleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    })
  };

  return (
    <div className="overflow-hidden">
      {/* Animated Profile Section */}
      <motion.div
        className="flex flex-col lg:flex-row justify-center items-center p-4 md:p-6 max-w-screen-lg mx-auto my-12 md:my-28 gap-8 md:gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Profile Image */}
        <motion.div
          className='w-full lg:w-1/2 flex justify-center order-2 lg:order-1'
          variants={itemVariants}
        >
          <img
            src={Myphoto}
            className='h-64 w-64 sm:h-80 sm:w-80 md:h-[400px] md:w-[400px] lg:h-[480px] lg:w-[480px] grayscale hover:grayscale-0 rounded-full object-cover border border-gray-200 transition-all duration-500'
            alt="profile photo"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          className='w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left order-1 lg:order-2'
          variants={containerVariants}
        >
          <motion.h1
            className='font-worksans text-[60px] sm:text-[80px] lg:text-[100px] font-semibold leading-[0.9] sm:leading-[1.1]'
            variants={itemVariants}
          >
            Hello,
          </motion.h1>

          <motion.h2
            className='font-worksans text-[40px] sm:text-[45px] lg:text-[50px] font-semibold leading-[1] mt-1 sm:mt-2'
            variants={itemVariants}
            transition={{ delay: 0.1 }}
          >
            I'm Meehir
          </motion.h2>

          <motion.div
            className='w-full max-w-[320px] sm:max-w-[380px] lg:max-w-full px-2 sm:px-0'
            variants={itemVariants}
            transition={{ delay: 0.2 }}
          >
            <p className="text-black font-atkinson text-[13px] sm:text-[14px] font-extralight mt-3 sm:mt-4 leading-relaxed">
              I'm a full-stack developer who believes clean code is poetry.
              I architect intuitive interfaces, design solid APIs, and debug like a detective.
            </p>
          </motion.div>

          {/* Animated Circles */}
          <motion.div
            className='flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mt-6 w-full'
            variants={containerVariants}
          >
            {[
              { to: "/resume", color: "bg-yellow-500", label: "Resume", delay: 0 },
              { to: "/projects", color: "bg-red-500", label: "Projects", delay: 0.1 },
              { to: "/contact", color: "bg-cyan-500", label: "Contact", delay: 0.2 }
            ].map((button, i) => (
              <motion.div
                key={button.to}
                custom={i}
                variants={circleVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={button.to}
                  className={`w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36 flex justify-center items-center rounded-full ${button.color} border text-black font-semibold hover:bg-white hover:text-black transition duration-300 shadow-md hover:shadow-lg`}
                  aria-label={button.label}
                >
                  <span className="text-xs sm:text-sm md:text-base">{button.label}</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Skills Section - with separator */}
      <div className="w-full border-t border-gray-300 my-6 md:my-8"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <SkillsSection />
      </motion.div>
    </div>
  );
};

export default AboutSection;