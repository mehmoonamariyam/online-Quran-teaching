import React from 'react'
import DonationHero from '../../components/donationhero'
import Navbar from '../../components/navbar'
import QarzeHasana from '../../components/Qarzehasana/qarzehasana'
import Footer from '../../components/footer'

const DonationPage = () => {
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
    <DonationHero/>
    </div>
    <QarzeHasana/>  
    <Footer/>
    </>
  )
}

export default DonationPage