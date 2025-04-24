import React, { useState } from 'react'
import {animate, motion} from 'framer-motion'
import resumePdf from '../assets/documents/meehirResume.pdf'
import { div } from 'framer-motion/client';

const pageVariants = {
  initial: {opacity:0, x: -50},
  animate: {opacity: 1, x:0},
  exit: {opacity: 0, x:50},
};

const Resume = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{duration:0.5}}

      className='min-h-screen py-20 px-4 bg-[#F3F3F3] '
    >
      <div className='max-w-61 mx-auto'>

        <div className='text-center mb-16'>
          <h1 className='text-3xl md:text-4xl font-worksans text-wood  mb-4'>
           My Resume
          </h1>
        </div>

        <div className='flex flex-col sm:flex-row justify-center items-center gap-6 mb-16'>
          <button onClick={()=> setShowModal(true)} 
            className='flex items-center font-atkinson gap-2 px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-blue-500/20'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
            </svg>
            Preview Resume
            </button>

            <a href={resumePdf} download={resumePdf} 
              className='flex items-center gap-2 px-6 py-3 font-atkinson bg-gray-800 hover:bg-gray-700 dark:bg-gray-100 dark:hover:bg-gray-200 text-white dark:text-gray-800 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-gray-500/20'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Download Resume
            </a>
        </div>

        

        {showModal && (
          <div className='fixed inset-0 z-50 overflow-y-auto'>
            <div className='flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
              <div 
                className='fixed inset-0  transition-opacity'
                aria-hidden="true"
                onClick={()=> setShowModal(false)}>
                  <div className='absolute inset-0 bg-white opacity-75'></div>
                </div>

              <div className='inline-block align-bottom bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full'>
                <div className='bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:align-middle sm:max-w-4xl sm:w-full'>
                  <div className='bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
                    <div className='flex justify-between items-start'>
                      <h3 className='text-2xl font-bold text-gray-900 dark:text-white'>Resume Preview</h3>
                      <button
                        type="button"
                        className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                        onClick={() => setShowModal(false)}
                      >
                        <span className="sr-only">Close</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    <div className="mt-4 h-[70vh]">
                      <iframe
                        src={resumePdf}
                        className="w-full h-full border border-gray-200 dark:border-gray-700"
                        frameBorder="0"
                        title="Resume Preview"
                      ></iframe>
                    </div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <a
                      href={resumePdf}
                      download="Your-Name-Resume.pdf"
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-900 text-base font-medium text-white hover:bg-gray-600 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Download Resume
                    </a>
                    <button
                      type="button"
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
      
    </motion.div>
  )
}

export default Resume