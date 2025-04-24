import React, { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const navbar = document.querySelector('nav');
    if (navbar) {
      const rect = navbar.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dx = mousePosition.x - centerX;
      const dy = mousePosition.y - centerY;

      const angle = Math.atan2(dy, dx);
      const distance = Math.min(Math.sqrt(dx * dx + dy * dy) / 10, 8);

      setEyePosition({
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance,
      });
    }
  }, [mousePosition]);

  const sideMenuVariants = {
    hidden: { x: '100%' },
    visible: { x: '50%', transition: { duration: 0.5, ease: 'easeInOut' } },
    exit: { x: '100%', transition: { duration: 0.5, ease: 'easeInOut' } },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <div>
      <nav className="bg-cream fixed top-0 left-0 w-full flex justify-between py-4 px-7 items-center z-50 ">
        <div className="flex items-center space-x-2">
          <svg
            className="m-2"
            preserveAspectRatio="none"
            data-bbox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="#EEA302"
            viewBox="0 0 200 200"
            role="img"
            aria-label="Homepage"
          >
            <g>
              <path d="M200 100c0 55.228-44.772 100-100 100S0 155.228 0 100 44.772 0 100 0s100 44.772 100 100z"></path>
            </g>
          </svg>
          <Link to="/" className="font-worksans text-[24px] font-semibold">
            Meehir Lokhande
          </Link>
          <h4 className="font-montserrat font-light text-[17px]">
            {' '}
            <span className="text-wood font-montserrat">
              <Typewriter
                words={[
                  'Full-Stack Developer !! ',
                  'Student !!',
                  'Coder !!',
                  'Gamer !!',
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h4>
        </div>

        {/* Eye Container */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none space-x-4">
          {/* Left Eye */}
          <div className="relative w-8 h-8 bg-white rounded-full border-2 border-gray-400 flex items-center justify-center">
            <div
              className="w-3 h-3 bg-black rounded-full"
              style={{
                transform: `translate(${eyePosition.x}px, ${eyePosition.y}px)`,
                transition: 'transform 0.05s linear',
              }}
            ></div>
          </div>

          {/* Right Eye */}
          <div className="relative w-8 h-8 bg-white rounded-full border-2 border-gray-400 flex items-center justify-center">
            <div
              className="w-3 h-3 bg-black rounded-full"
              style={{
                transform: `translate(${eyePosition.x}px, ${eyePosition.y}px)`,
                transition: 'transform 0.05s linear',
              }}
            ></div>
          </div>
        </div>

        <div className="flex space-x-4 items-center">
          <Link
            to="/projects"
            className="font-montserrat font-light text-[16px] pr-2 hover:text-wood duration-300"
          >
            Projects
          </Link>
          <span className="text-gray-400 text-2xl">|</span>
          <Link
            to="/resume"
            className="font-montserrat font-light text-[16px] pr-2 hover:text-wood duration-300"
          >
            Resume
          </Link>
          <span className="text-gray-400 text-2xl">|</span>
          <Link
            to="/achievements"
            className="font-montserrat font-light text-[16px] pr-2 hover:text-wood duration-300"
          >
              Milestones
          </Link>  
          <span className="text-gray-400 text-2xl">|</span>
          <button
            onClick={() => setIsMenuOpen(true)}
            className="font-montserrat font-light text-[16px] hover:text-wood"
          >
            <span className='flex'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </span>
          </button>
        </div>
      </nav>

      {/* Side Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-white/10 backdrop-blur-md bg-opacity-50 z-40"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={() => setIsMenuOpen(false)}
            ></motion.div>

            {/* Side Menu */}
            <motion.div
              className="fixed top-0 right-0 h-full w-1/2 bg-cream shadow-lg z-50 p-6"
              variants={sideMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-500 hover:text-black text-lg font-bold mb-4"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>

              </button>
              <ul className="space-y-4">
                <li>
                  <Link
                    to="/contact"
                    className="font-montserrat font-light text-[16px] hover:text-wood duration-300"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blogs"
                    className="font-montserrat font-light text-[16px] hover:text-wood duration-300"
                  >
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/achievements"
                    className="font-montserrat font-light text-[16px] hover:text-wood duration-300"
                  >
                    Milestones
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gallery"
                    className="font-montserrat font-light text-[16px] hover:text-wood duration-300"
                  >
                    Gallery
                  </Link>
                </li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;