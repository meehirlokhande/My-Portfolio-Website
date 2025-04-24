import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';
import Batch100Day from '../assets/achievements/leetcode/100Day.png';
import Batch50Day from '../assets/achievements/leetcode/50Day.png';
import Batch200Day from '../assets/achievements/leetcode/200Day.png';
import Batch100Day2024 from '../assets/achievements/leetcode/100Day2024.png';
import Batch50Day2024 from '../assets/achievements/leetcode/50Day2024.png';
import skillindia from '../assets/achievements/competition/skillindia.jpeg';
import indiaskillcerti from '../assets/achievements/competition/IndiaskillCerti.png';
import CertificationsSection from '../components/CertificationsSection';

const Achievements = () => {
  const badgeVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    },
  };

  
  const badges = [
    { id: 1, title: '100 Days Of Coding 2025', image: Batch100Day },
    { id: 2, title: '50 Days Of Coding 2025', image: Batch50Day },
    { id: 3, title: '200 Days Of Coding 2025', image: Batch200Day },
    { id: 4, title: '100 Days Of Coding 2024', image: Batch100Day2024 },
    { id: 5, title: '50 Days Of Coding 2024', image: Batch50Day2024 },
  ];


  const competitions = [
    {
      id: 1,
      title: 'India Skills 2024',
      level: 'National Level',
      image: skillindia,
      certificate: indiaskillcerti,
      description: 'IndiaSkills 2024 National Competition with 900+ participants from 30+ states/UTs competing in 61 skills.',
      date: 'May 2024',
      achievements: [
        '1st Rank in State Qualifier',
        'Solved complex problem statements',
      ],
      link: 'https://worldskillsindia.co.in/'
    },
  ];

  return (
    <motion.div
      className="min-h-screen bg-cream"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      
      <div className="pt-20  px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

        
        <motion.div
          className="text-center mb-16 pt-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className='flex justify-between'>
            <h1 className="text-4xl font-worksans font-semibold text-wood mb-4">My Achievements</h1>
            <div className='flex gap-4 items-center p-1'>
              <a href="https://www.linkedin.com/in/meehirlokhande">
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="Linkedin--Streamline-Simple-Icons" height="24" width="24"><desc>Linkedin Streamline Icon: https://streamlinehq.com</desc><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0 -1.328 -0.027 -3.037 -1.852 -3.037 -1.853 0 -2.136 1.445 -2.136 2.939v5.667H9.351V9h3.414v1.561h0.046c0.477 -0.9 1.637 -1.85 3.37 -1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0 -2.063 -0.926 -2.063 -2.065 0 -1.138 0.92 -2.063 2.063 -2.063 1.14 0 2.064 0.925 2.064 2.063 0 1.139 -0.925 2.065 -2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C0.792 0 0 0.774 0 1.729v20.542C0 23.227 0.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.222 0h0.003z" fill="#000000" stroke-width="1"></path></svg>
              </a>
              <a href="https://www.geeksforgeeks.org/user/meehirlokhande/">
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="Geeksforgeeks--Streamline-Simple-Icons" height="35" width="35"><desc>Geeksforgeeks Streamline Icon: https://streamlinehq.com</desc><title>GeeksforGeeks</title><path d="M21.45 14.315c-0.143 0.28 -0.334 0.532 -0.565 0.745a3.691 3.691 0 0 1 -1.104 0.695 4.51 4.51 0 0 1 -3.116 -0.016 3.79 3.79 0 0 1 -2.135 -2.078 3.571 3.571 0 0 1 -0.13 -0.353h7.418a4.26 4.26 0 0 1 -0.368 1.008zm-11.99 -0.654a3.793 3.793 0 0 1 -2.134 2.078 4.51 4.51 0 0 1 -3.117 0.016 3.7 3.7 0 0 1 -1.104 -0.695 2.652 2.652 0 0 1 -0.564 -0.745 4.221 4.221 0 0 1 -0.368 -1.006H9.59c-0.038 0.12 -0.08 0.238 -0.13 0.352zm14.501 -1.758a3.849 3.849 0 0 0 -0.082 -0.475l-9.634 -0.008a3.932 3.932 0 0 1 1.143 -2.348c0.363 -0.35 0.79 -0.625 1.26 -0.809a3.97 3.97 0 0 1 4.484 0.957l1.521 -1.49a5.7 5.7 0 0 0 -1.922 -1.357 6.283 6.283 0 0 0 -2.544 -0.49 6.35 6.35 0 0 0 -2.405 0.457 6.007 6.007 0 0 0 -1.963 1.276 6.142 6.142 0 0 0 -1.325 1.94 5.862 5.862 0 0 0 -0.466 1.864h-0.063a5.857 5.857 0 0 0 -0.467 -1.865 6.13 6.13 0 0 0 -1.325 -1.939A6 6 0 0 0 8.21 6.34a6.698 6.698 0 0 0 -4.949 0.031A5.708 5.708 0 0 0 1.34 7.73l1.52 1.49a4.166 4.166 0 0 1 4.484 -0.958c0.47 0.184 0.898 0.46 1.26 0.81 0.368 0.36 0.66 0.792 0.859 1.268 0.146 0.344 0.242 0.708 0.285 1.08l-9.635 0.008A4.714 4.714 0 0 0 0 12.457a6.493 6.493 0 0 0 0.345 2.127 4.927 4.927 0 0 0 1.08 1.783c0.528 0.56 1.17 1 1.88 1.293a6.454 6.454 0 0 0 2.504 0.457c0.824 0.005 1.64 -0.15 2.404 -0.457a5.986 5.986 0 0 0 1.964 -1.277 6.116 6.116 0 0 0 1.686 -3.076h0.273a6.13 6.13 0 0 0 1.686 3.077 5.99 5.99 0 0 0 1.964 1.276 6.345 6.345 0 0 0 2.405 0.457 6.45 6.45 0 0 0 2.502 -0.457 5.42 5.42 0 0 0 1.882 -1.293 4.928 4.928 0 0 0 1.08 -1.783A6.52 6.52 0 0 0 24 12.457a4.757 4.757 0 0 0 -0.039 -0.554z" fill="#000000" stroke-width="1"></path></svg>
              </a>
              <a href="https://github.com/meehirlokhande">

                <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#333]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                    <path
                      d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                  </svg>
                </span>
              </a>
              <a href="https://leetcode.com/u/meehirlokhande/">
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="Leetcode--Streamline-Simple-Icons" height="24" width="24"><desc>Leetcode Streamline Icon: https://streamlinehq.com</desc><title>LeetCode</title><path d="M13.483 0a1.374 1.374 0 0 0 -0.961 0.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0 -1.209 2.104 5.35 5.35 0 0 0 -0.125 0.513 5.527 5.527 0 0 0 0.062 2.362 5.83 5.83 0 0 0 0.349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193 0.039 0.038c2.248 2.165 5.852 2.133 8.063 -0.074l2.396 -2.392c0.54 -0.54 0.54 -1.414 0.003 -1.955a1.378 1.378 0 0 0 -1.951 -0.003l-2.396 2.392a3.021 3.021 0 0 1 -4.205 0.038l-0.02 -0.019 -4.276 -4.193c-0.652 -0.64 -0.972 -1.469 -0.948 -2.263a2.68 2.68 0 0 1 0.066 -0.523 2.545 2.545 0 0 1 0.619 -1.164L9.13 8.114c1.058 -1.134 3.204 -1.27 4.43 -0.278l3.501 2.831c0.593 0.48 1.461 0.387 1.94 -0.207a1.384 1.384 0 0 0 -0.207 -1.943l-3.5 -2.831c-0.8 -0.647 -1.766 -1.045 -2.774 -1.202l2.015 -2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0 -1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38 -1.382 1.38 1.38 0 0 0 -1.38 -1.382z" fill="#000000" stroke-width="1"></path></svg>
              </a>
              <a href="https://codeforces.com/profile/meehir">
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="Codeforces--Streamline-Simple-Icons" height="24" width="24"><desc>Codeforces Streamline Icon: https://streamlinehq.com</desc><title>Codeforces</title><path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 0.828 -0.672 1.5 -1.5 1.5h-3C0.673 21 0 20.328 0 19.5V9c0 -0.828 0.673 -1.5 1.5 -1.5h3zm9 -4.5c0.828 0 1.5 0.672 1.5 1.5v15c0 0.828 -0.672 1.5 -1.5 1.5h-3c-0.827 0 -1.5 -0.672 -1.5 -1.5v-15c0 -0.828 0.673 -1.5 1.5 -1.5h3zm9 7.5c0.828 0 1.5 0.672 1.5 1.5v7.5c0 0.828 -0.672 1.5 -1.5 1.5h-3c-0.828 0 -1.5 -0.672 -1.5 -1.5V12c0 -0.828 0.672 -1.5 1.5 -1.5h3z" fill="#000000" stroke-width="1"></path></svg>
              </a>
            </div>
          </div>
          
          
        </motion.div>

        {/* LeetCode Badges Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Leetcode Coding Streaks</h2>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-6"
            variants={containerVariants}
          >
            {badges.map((badge) => (
              <motion.div
                key={badge.id}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col items-center"
                variants={badgeVariants}
                whileHover={{ y: -5 }}
              >
                <img
                  src={badge.image}
                  alt={badge.title}
                  className="w-20 h-20 object-contain mb-4"
                />
                <p className="text-center font-medium text-gray-700">{badge.title}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Competitions Section */}
        <section className="mb-12">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Competitions</h2>
          
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
          >
            {competitions.map((competition) => (
              <motion.div
                key={competition.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100"
                variants={badgeVariants}
                whileHover={{ y: -3 }}
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={competition.image}
                    alt={competition.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-blue-600 text-white text-xs font-medium">
                      <FaTrophy className="mr-1" /> {competition.level}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <a
                      href={competition.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-bold text-gray-800 hover:text-blue-600 flex items-center"
                    >
                      {competition.title}
                      <FaExternalLinkAlt className="ml-1.5 text-xs" />
                    </a>
                    <span className="text-xs text-gray-500 whitespace-nowrap">{competition.date}</span>
                  </div>

                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{competition.description}</p>

                  <ul className="space-y-1.5 mb-4">
                    {competition.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 mr-2 flex-shrink-0"></span>
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex space-x-2">
                    <a
                      href={competition.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-3 py-1.5 border border-gray-300 rounded-md text-xs text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      <FaMedal className="mr-1.5" /> Photos
                    </a>
                    <a
                      href={competition.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center px-3 py-1.5 bg-blue-600 text-white rounded-md text-xs hover:bg-blue-700 transition-colors"
                    >
                      <FaCertificate className="mr-1.5" /> Certificate
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>

      <div className="w-full border-t border-gray-300 my-2"></div>
      <div>
        <CertificationsSection />
      </div>
    </motion.div>
  );
};

export default Achievements;