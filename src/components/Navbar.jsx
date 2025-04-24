import React, { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    // Only track mouse for eye movement on desktop
    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile]);

  useEffect(() => {
    if (!isMobile) {
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
    }
  }, [mousePosition, isMobile]);

  const sideMenuVariants = {
    hidden: { x: '100%' },
    visible: { x: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
    exit: { x: '100%', transition: { duration: 0.3, ease: 'easeInOut' } },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <div>
      <nav className="bg-cream fixed top-0 left-0 w-full flex justify-between items-center py-4 px-4 sm:px-6 md:px-8 z-50">
        {/* Logo and Name */}
        <div className="flex items-center space-x-2">
          <svg
            className="m-1 sm:m-2"
            preserveAspectRatio="none"
            data-bbox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="#EEA302"
            viewBox="0 0 200 200"
            role="img"
            aria-label="Homepage"
          >
            <g>
              <path d="M200 100c0 55.228-44.772 100-100 100S0 155.228 0 100 44.772 0 100 0s100 44.772 100 100z"></path>
            </g>
          </svg>
          <Link to="/" className="font-worksans text-lg sm:text-xl md:text-2xl font-semibold">
            Meehir Lokhande
          </Link>
          {!isMobile && (
            <h4 className="font-montserrat font-light text-sm md:text-base">
              <span className="text-wood font-montserrat">
                <Typewriter
                  words={[
                    'Full-Stack Developer !!',
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
          )}
        </div>

        {/* Eye Container - Desktop Only */}
        {!isMobile && (
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none space-x-4">
            <div className="relative w-8 h-8 bg-white rounded-full border-2 border-gray-400 flex items-center justify-center">
              <div
                className="w-3 h-3 bg-black rounded-full"
                style={{
                  transform: `translate(${eyePosition.x}px, ${eyePosition.y}px)`,
                  transition: 'transform 0.05s linear',
                }}
              ></div>
            </div>
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
        )}

        {/* Navigation Links - Desktop */}
        {!isMobile && (
          <div className="flex space-x-3 sm:space-x-4 items-center">
            <Link
              to="/projects"
              className="font-montserrat font-light text-sm sm:text-base hover:text-wood duration-300"
            >
              Projects
            </Link>
            <span className="text-gray-400 text-xl">|</span>
            <Link
              to="/resume"
              className="font-montserrat font-light text-sm sm:text-base hover:text-wood duration-300"
            >
              Resume
            </Link>
            <span className="text-gray-400 text-xl">|</span>
            <Link
              to="/achievements"
              className="font-montserrat font-light text-sm sm:text-base hover:text-wood duration-300"
            >
              Milestones
            </Link>
          </div>
        )}

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden text-gray-700 hover:text-wood focus:outline-none"
          aria-label="Open menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </nav>

      {/* Mobile Side Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setIsMenuOpen(false)}
            />

            <motion.div
              className="fixed top-0 right-0 h-full w-3/4 max-w-sm bg-cream shadow-xl z-50 p-6"
              variants={sideMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="flex justify-end mb-8">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-600 hover:text-black"
                  aria-label="Close menu"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <ul className="space-y-6">
                <li>
                  <Link
                    to="/"
                    className="block py-2 text-lg font-medium hover:text-wood"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/projects"
                    className="block py-2 text-lg font-medium hover:text-wood"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    to="/resume"
                    className="block py-2 text-lg font-medium hover:text-wood"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Resume
                  </Link>
                </li>
                <li>
                  <Link
                    to="/achievements"
                    className="block py-2 text-lg font-medium hover:text-wood"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Milestones
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="block py-2 text-lg font-medium hover:text-wood"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blogs"
                    className="block py-2 text-lg font-medium hover:text-wood"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Blogs
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