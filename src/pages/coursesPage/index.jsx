import React from "react";
import Container from "../../components/courses/container";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import CoursesHeader from "../../components/courses/CoursesHeader";
import ScrollToTop from "../../components/scrolltotop";

const CoursePage = () => {
  return (
    <>
       <div className="relative min-h-screen" style={{
    backgroundColor: "#F5FAE1",
    backgroundImage: "url('/images/designnn.jpg')", 
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}>
    <Navbar/>
    <CoursesHeader/>
    </div>
    <Container/>  
    <ScrollToTop/>
    <Footer/>
    
    </>
  );
};

export default CoursePage;
