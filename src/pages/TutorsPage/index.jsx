import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import TutorsHeader from '../../components/OurTutors/TutorsHeader'
import TutorsCard from '../../components/OurTutors/TutorsCards'
import ScrollToTop from '../../components/scrolltotop'
import TeachersAttributes from '../../components/OurTutors/TeachersAttributes'

const TutorPage = () => {
  return (
    <>
      <div
        className="relative min-h-screen"
        style={{
          backgroundColor: "#F5FAE1",
          backgroundImage: "url('/images/designnn.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-pink-200 opacity-30"></div>
        <Navbar />
        <TutorsHeader />
      </div>

      <TutorsCard />
      <TeachersAttributes />
      <ScrollToTop />
      <Footer />
    </>
  )
}

export default TutorPage
