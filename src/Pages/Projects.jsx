import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Navigation } from 'swiper/modules';
import { useState } from 'react';
import { motion } from 'framer-motion';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Your skill icons imports
import react from '../assets/LogoImg/react.svg';
import angular from '../assets/LogoImg/angular.svg';
import bootstrap from '../assets/LogoImg/bootstrap.svg';
import c from '../assets/LogoImg/c.svg';
import cplus from '../assets/LogoImg/cplus.svg';
import css from '../assets/LogoImg/css.svg';
import html from '../assets/LogoImg/html.svg';
import express from '../assets/LogoImg/express.svg';
import figma from '../assets/LogoImg/figma.svg';
import java from '../assets/LogoImg/java.svg';
import javascript from '../assets/LogoImg/javascript.svg';
import jquery from '../assets/LogoImg/jquery.svg';
import laravel from '../assets/LogoImg/laravel.svg';
import mongodb from '../assets/LogoImg/mongodb.svg';
import mysql from '../assets/LogoImg/mysql.svg';
import nodejs from '../assets/LogoImg/nodejs.svg';
import php from '../assets/LogoImg/php.svg';
import postgresql from '../assets/LogoImg/postgresql.svg';
import postman from '../assets/LogoImg/postman.svg';
import python from '../assets/LogoImg/python.svg';
import spring from '../assets/LogoImg/spring.svg';
import sqlite from '../assets/LogoImg/sqlite.svg';
import tailwind from '../assets/LogoImg/tailwind.svg';
import vite from '../assets/LogoImg/vitejs.svg';
import { ServiceData } from '../constants';
import { animate } from 'framer-motion';

const skillImages = {
  react,
  angular,
  bootstrap,
  c,
  cplus,
  css,
  html,
  express,
  figma,
  java,
  javascript,
  jquery,
  laravel,
  mongodb,
  mysql,
  nodejs,
  php,
  postgresql,
  postman,
  python,
  spring,
  sqlite,
  tailwind,
  vite
};

const pageVariants = {
  initial: {opacity:0, x:-50},
  animate: {opacity:1, x:0},
  exit: {opacity:0, x:50},
};

const Projects = () => {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleReadMore = (id) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{duration:0.5}} className='flex items-center justify-center flex-col min-h-screen bg-[#F3F3F3] py-20 px-4'>
      <h2 className='text-3xl md:text-4xl font-worksans font-semibold text-wood mb-12'>My Projects</h2>

      <div className='relative w-full max-w-7xl'>
        <Swiper
          modules={[FreeMode, Pagination, Navigation]}
          freeMode={{
            enabled: true,
            momentum: true,
          }}
          pagination={{
            clickable: true,
            el: '.custom-pagination',
            bulletClass: 'custom-bullet',
            bulletActiveClass: 'custom-bullet-active',
          }}
          navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
          }}
          breakpoints={{
            340: { slidesPerView: 1, spaceBetween: 15 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 25 }
          }}
          className="w-full"
        >
          {ServiceData.map((item, index) => (
            <SwiperSlide key={item.title}>
              <div className="mx-2 mb-10 h-full flex flex-col bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 dark:hover:shadow-gray-700/50">
                <div className="relative overflow-hidden h-[200px] bg-gray-100 dark:bg-black">
                  <img
                    className="w-full h-full object-contain p-4 transition-transform  duration-500 hover:scale-105"
                    src={item.backgroundImage}
                    alt={item.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-5 flex bg-black flex-col flex-grow" style={{ minHeight: '300px' }}>
                  <a href={item.liveLink} className="mb-3 text-2xl font-semibold tracking-tight font-worksans text-gray-900 dark:text-white">
                    {item.title}
                  </a>
                  
                  <div className="mb-4 flex-grow">
                    <p className={`font-atkinson text-gray-700 dark:text-gray-400 ${expandedCards[index] ? '' : 'line-clamp-3'}`}>
                      {item.content}
                    </p>
                    {item.content.length > 120 && (
                      <button
                        onClick={() => toggleReadMore(index)}
                        className="text-wood dark:text-wood text-sm font-medium mt-2 hover:underline focus:outline-none"
                      >
                        {expandedCards[index] ? 'Read Less' : 'Read More'}
                      </button>
                    )}
                  </div>

                  <div className="flex justify-between items-center mt-auto">
                    <a
                      href={item.githubRepo}
                      className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-wood rounded-lg hover:bg-blue-700 focus:ring-2 focus:outline-none focus:ring-blue-300 dark:bg-wood dark:hover:bg-gray-600 transition-colors duration-300 group"
                    >
                      View Code
                      <svg
                        className="w-3.5 h-3.5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </a>
                    
                    <div className="flex gap-2">
                      {item.skill.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className="h-6 w-6 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 p-1"
                        >
                          <img
                            src={skillImages[skill]}
                            className="h-full w-full object-contain"
                            alt={skill}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows */}
        <div className="custom-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-300 -mr-4 md:-mr-6 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>

        <div className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-300 -ml-4 md:-ml-6 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>

        <div className="custom-pagination flex justify-center mt-8 space-x-2" />
      </div>

      <style jsx="true">{`
  .custom-bullet {
    width: 10px;
    height: 10px;
    display: inline-block;
    border-radius: 50%;
    background: rgba(108, 52, 175, 0.5);
    margin: 0 5px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .custom-bullet-active {
    background: #6c34af;
    transform: scale(1.3);
  }
  
  .swiper-slide {
    height: auto;
  }
`}</style>
    </motion.div>
  );
};

export default Projects;