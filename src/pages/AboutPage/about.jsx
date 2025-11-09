import React from 'react'
import HeroAbout from '../../components/abouthero/hero'
import Navbar from '../../components/navbar'
import MissionVision from '../../components/mission/mission'
import Slider from '../../components/slider/slider'
import HomeTutors from '../../components/tutors/tutors'
import Footer from '../../components/footer'

const AboutPage = () => {
  return (
   <>
   <Navbar/>
   <HeroAbout/>
   <MissionVision/>
   <Slider/>
   <HomeTutors/>
   <Footer/>
   </>
  )
}

export default AboutPage