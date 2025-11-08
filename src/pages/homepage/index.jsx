import Navbar from '../../components/navbar'
import HomeSection from '../../components/homesection'
import AboutUs from '../../components/aboutus'

const HomePage = () => {
  return (
    <>
    <div className="relative min-h-screen" style={{
    backgroundColor: "#F5FAE1",
    backgroundImage: "url('/images/designnn.jpg')", 
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}>
    <Navbar/>
    <HomeSection/>
    </div>
    <AboutUs/>
    
    </>
  )
}

export default HomePage