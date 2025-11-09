import Navbar from '../../components/navbar'
import HomeSection from '../../components/homesection'
import AboutUs from '../../components/aboutus'
import Footer from '../../components/footer'
import ScrollToTop from '../../components/scrolltotop'
import Slider from '../../components/slider/slider'
import CoursesOverview from '../../components/ourcourses'
import HomeTutors from '../../components/tutors/tutors'



const HomePage = () => {
  return (
    <>
    <div className="relative min-h-screen" style={{
    backgroundColor: "#F5FAE1",
    backgroundImage: "url('/images/designnn.jpg')", 
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}>
     <div
    className="absolute inset-0 bg-black opacity-10"
  ></div>
    <Navbar/>
    <HomeSection/>
    </div>
    <ScrollToTop/>
    <AboutUs/>
    <CoursesOverview/>
  <Slider/>
  <HomeTutors/>
    <Footer/>
    
    </>
  )
}

export default HomePage