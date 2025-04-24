import {
    RxCrop,
    RxDesktop,
    RxPencil2,
    RxReader,
    RxRocket,
    RxAccessibility,
} from 'react-icons/rx';
import Bookaaro from '../assets/img/Bookaaro.png';
import Music from '../assets/img/music.png';
import Blog from '../assets/img/Blog.png';
import Airbnb from '../assets/img/airbnb.png';
import Game from '../assets/img/game.png';
import educonsult from '../assets/img/educonsultancy.png';


export const ServiceData  = [
    {
        icon:RxCrop,
        title: "Bookaroo - Bookstore Management Website",
        content: "An e-commerce bookstore platform built with React, Node.js, and MongoDB. Features secure user authentication, real-time order tracking, and seamless book browsing with Redux-powered state management.",
        backgroundImage: Bookaaro,
        githubRepo:"https://github.com/meehirlokhande/Bookaroo-BookstoreApp-",
        liveLink:"https://bookaroo-bookstore.netlify.app/",
        skill:["react","tailwind","mongodb","express","nodejs","postman"]
    },
    {
        icon:RxDesktop,
        title: "Blogify – Blog Website",
        content: "A dynamic blogging platform developed with Node.js, Express, and MongoDB. Supports user authentication, post creation, search, and pagination, with a clean and responsive design using EJS and CSS.",
        backgroundImage: Blog,
        githubRepo:"https://github.com/meehirlokhande/BACKEND_BLOGWEBSITE",
        liveLink:"",
        skill:["html","css","javascript","mongodb","express","nodejs"]
    },
    {
        icon:RxAccessibility,
        title: "Airbnb-Clone – Booking Platform",
        content: "A full-featured accommodation booking app using React, Node.js, and MongoDB. Includes secure user accounts, property management, real-time booking updates, and image uploads for listings.",
        backgroundImage: Airbnb,
        githubRepo:"https://github.com/meehirlokhande/Airbnb_clone",
        liveLink:"",
        skill:["react","tailwind","mongodb","express","nodejs","postman"]
    },
    {
        icon:RxAccessibility,
        title: "Education Consultancy Website",
        content: "A full-featured accommodation booking app using React, SpringBoot, and Mysql. Includes secure user & admin accounts, course management, subscription managements , and student management",
        backgroundImage: educonsult,
        githubRepo:"https://github.com/meehirlokhande/EducationConsultancy",
        liveLink:"",
        skill:["react","tailwind","mysql","express","spring","postman"]
        
    },
    {
        icon:RxAccessibility,
        title: "Echo Music Website",
        content: "A dynamic Music Player plaeform developed with React.js",
        backgroundImage: Music,
        githubRepo:"https://github.com/meehirlokhande/Echo_Music_App",
        liveLink:"",
        skill:["react","css","javascript"]
    },
    {
        icon:RxAccessibility,
        title: "Guess the Number",
        content: "Its the simple game based on luck factor. Languages used are HTML, CSS, and JAVASCRIPT.",
        backgroundImage:Game,
        githubRepo:"https://github.com/meehirlokhande/Game---Guess-the-number",
        liveLink:"",
        skill:["html","css","javascript"]
    },

];