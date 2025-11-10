import DonationHero from '../../components/donationhero'
import Navbar from '../../components/navbar'
import QarzeHasana from '../../components/Qarzehasana/qarzehasana'
import Footer from '../../components/footer'
import CourseHeader from '../../components/courses/CourseHeader'
import Container from '../../components/courses/container'

const DonationPage = () => {
  return (
    <>
       <div className="relative min-h-screen" style={{
    backgroundColor: "#F5FAE1",
    backgroundImage: "url('/images/designnn.jpg')", 
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}>

    <Navbar/>
    <CourseHeader/>
    </div>
    <Container/>
    <Footer/>
    </>
  )
}

export default DonationPage