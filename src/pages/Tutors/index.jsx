import React from 'react'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import TutorsHeader from '../../components/OurTutors'
import TutorsCards from '../../components/OurTutors/TutorsCards'

const TutorPage = () => {
  return (
    <>
      {/* Wrapper for header + cards */}
      <div className="relative">
        {/* Header image + dark overlay */}
        <div
          className="relative w-full"
          style={{
            backgroundColor: "#F5FAE1",
            backgroundImage: "url('/images/designnn.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <Navbar />
          <TutorsHeader />
        </div>

        {/* Tutors Cards Section */}
        <div className="bg-pink-50 relative z-10 py-14 px-6">
          <TutorsCards />
        </div>
      </div>

      <Footer />
    </>
  )
}

export default TutorPage
