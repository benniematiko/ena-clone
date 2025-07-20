import React from 'react'


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Gallary from './pages/gallary/Gallary'
import ContactUs from './pages/contactus/ContactUs'
import AboutUs from './pages/aboutus/AboutUs'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div>

      <Router>

        <Navbar />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/aboutus" element={ <AboutUs /> } />
          <Route path="/gallary" element={ <Gallary /> } />
          <Route path="/contactus" element={ <ContactUs /> } />
          <Route path="/contactus" element={ <ContactUs /> } />
        </Routes>

        <Footer />
      </Router>



      
      
    </div>
  )
}

export default App
