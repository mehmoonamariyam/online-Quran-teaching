import React from 'react'
import HeroAbout from '../../components/abouthero/hero'
import Navbar from '../../components/navbar'
import Slider from '../../components/homesection/slider'
import Footer from '../../components/footer'
import ScrollToTop from '../../components/scrolltotop'
import MissionVision from '../../components/abouthero/mission'
import AchievementsSection from '../../components/abouthero/trust'
import ReviewSection from '../../components/ReviewBox'


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
  <AchievementsSection/>
  <ReviewSection/>
  <br/><br/>
   <Footer/>

    </>
  )
}

export default AboutPage