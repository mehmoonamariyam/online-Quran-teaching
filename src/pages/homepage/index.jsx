import Navbar from '../../components/navbar'
import HomeSection from '../../components/homesection'
import AboutUs from '../../components/homesection/about'
import Footer from '../../components/footer'
import ScrollToTop from '../../components/scrolltotop'
import Slider from '../../components/homesection/slider'
import CoursesOverview from '../../components/homesection/course'
import HomeTutors from '../../components/abouthero/tutors'




const HomePage = () => {
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
