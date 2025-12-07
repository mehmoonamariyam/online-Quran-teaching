import DonationHero from '../../components/donationhero'
import Navbar from '../../components/navbar'

import Footer from '../../components/footer'
import ScrollToTop from '../../components/scrolltotop'
import QarzeHasana from '../../components/donationhero/qarzehasana'
import CourseAddForm from './form'
import AdminEditCourse from './updateform'

const DonationPage = () => {
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
    <DonationHero/>
    </div>
    <ScrollToTop/>
  <QarzeHasana/>
    <Footer/>
    {/* <CourseAddForm/>
    <AdminEditCourse/> */}
    </>
  )
}

export default DonationPage