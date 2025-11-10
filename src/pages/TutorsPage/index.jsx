import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import TutorsHeader from '../../components/OurTutors/TutorsHeader'
import TutorsCard from '../../components/OurTutors/TutorsCards'

const TutorPage = () => {
  return (
    <>
       <div className="relative min-h-screen" style={{
    backgroundColor: "#F5FAE1",
    backgroundImage: "url('/images/designnn.jpg')", 
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}>
    <Navbar/>
    <TutorsHeader/>
    </div>
    <TutorsCard/>  
    <Footer/>
    </>
  )
}

export default TutorPage