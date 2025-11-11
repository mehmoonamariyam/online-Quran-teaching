import React from 'react'
import HeroAbout from '../../components/abouthero/hero'
import Navbar from '../../components/navbar'
import MissionVision from '../../components/mission/mission'
import Slider from '../../components/slider/slider'
import HomeTutors from '../../components/tutors/tutors'
import Footer from '../../components/footer'
import ScrollToTop from '../../components/scrolltotop'

const AboutPage = () => {
  return (
  <>
       <div className="relative min-h-screen" style={{
    backgroundColor: "#F5FAE1",
    backgroundImage: "url('/images/designnn.jpg')", 
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}>
    
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