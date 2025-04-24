import React from 'react'

import Navbar from './components/Navbar'
import AboutSection from './components/AboutSection'
import Footer from './components/Footer'
import {  BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import Resume from './Pages/Resume'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
import { AnimatePresence } from 'framer-motion'
import Achievements from './Pages/Achievements'



const AnimatedRoutes = () =>{
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<AboutSection/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/achievements' element={<Achievements/>}/>
        
      </Routes>
    </AnimatePresence>
  )
}

const App = () => {
  return (
    <Router>
    <div className='flex flex-col min-h-screen' >
      <Navbar />
        <div className='flex-grow'>
          <AnimatedRoutes/>
        </div> 
      <Footer />
    </div>
    </Router>
  )
}

export default App