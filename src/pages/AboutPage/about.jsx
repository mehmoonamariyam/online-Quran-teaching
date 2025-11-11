import React from 'react'
import HeroAbout from '../../components/abouthero/hero'
import Navbar from '../../components/navbar'
import Slider from '../../components/homesection/slider'
import Footer from '../../components/footer'
import ScrollToTop from '../../components/scrolltotop'
import MissionVision from '../../components/abouthero/mission'
import HomeTutors from '../../components/abouthero/tutors'


const AboutPage = () => {
  return (
  <>
       <div className="relative min-h-screen" style={{
    backgroundColor: "#F5FAE1",
    backgroundImage: "url('/images/designnn.jpg')", 
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}>
    <div className="absolute inset-0 bg-pink-200 opacity-30"></div>
    <Navbar/>
    <HeroAbout/>
    </div>
    <ScrollToTop/>
    <MissionVision/>
   <Slider/>
  <HomeTutors/>
   <Footer/>

    </>
  )
}

export default AboutPage