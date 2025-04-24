import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import cloud from '../assets/documents/certifications/cloud.png'
import gfg from '../assets/documents/certifications/gfg.png'
import cprogramming from '../assets/documents/certifications/cprogramming.png'
import udemy from '../assets/documents/certifications/udemy.png'
import serverside from '../assets/documents/certifications/serverside.png'
import htmlcss from '../assets/documents/certifications/htmlcss.png'

// Example certification data
const certifications = [
    {
        image: cloud,
        link: 'https://nptel.ac.in/noc/E_Certificate/NPTEL24CS118S167020158604431591',
        title: 'NPTEL-Cloud Computing',
    },
    {
        image: gfg,
        link: 'https://media.geeksforgeeks.org/courses/certificates/ef907c36c1b8dd962c542fd7c3ed1bb1.pdf',
        title: 'GFG-Complete Machine Learning & Data Science Program',
    },
    {
        image: cprogramming,
        link: 'https://nptel.ac.in/noc/E_Certificate/NPTEL23CS02S3477013703073512',
        title: 'NPTEL-C Programming',
    },
    {
        image: udemy,
        link: 'http://ude.my/UC-1d1e0c73-73a5-4a24-8d2a-59c57a725582',
        title: 'Mastering DSA using C++/C',
    },
    {
        image: serverside,
        link: 'https://coursera.org/verify/HVVBKUZP2GD2',
        title: 'Server side JavaScript with Node.js',
    },
    {
        image: htmlcss,
        link: 'https://www.coursera.org/account/accomplishments/verify/Q3QB9CLCDC99',
        title: ' HTML, CSS, and Javascript for Web Developers',
    },
];

const CertificationsSection = () => {
    return (
        <div className="pb-18 pt-4 px-4  ">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-worksans  font-semibold text-center pb-10 mb-4 text-gray-800">
                    My Certifications
                </h2>
               

                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        1280: { slidesPerView: 4 },
                    }}
                    className="relative group"
                >
                    {certifications.map((cert, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full">
                                <div className="aspect-w-3 aspect-h-4 w-full">
                                    <img
                                        src={cert.image}
                                        alt={cert.title}
                                        className="w-full h-full object-contain rounded-2xl border-2"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <div className="text-white">
                                        <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                                        <a
                                            href={cert.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center px-4 py-2 bg-white text-gray-800 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
                                        >
                                            View Certificate
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                    {/* Custom navigation buttons */}
                    <div className="swiper-button-prev hidden md:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12  rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </div>
                    <div className="swiper-button-next hidden md:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12  rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </Swiper>
            </div>
        </div>
    );
};

export default CertificationsSection;