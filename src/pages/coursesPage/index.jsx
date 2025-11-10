import React from "react";
import Container from "../../components/courses/container";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import CoursesHeader from "../../components/courses/CoursesHeader";

const DonationPage = () => {
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
          
          <Navbar />
          <CoursesHeader />
        </div>

        {/* Tutors Cards Section */}
        <div className="bg-pink-50 relative z-10 py-14 px-6">
          <Container />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DonationPage;
