import React from "react";
import CourseDetail from "../../components/courses/courseDetail";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import ScrollToTop from "../../components/scrolltotop";

const CourseDetailPage = () => {
  return (
    <div className="bg-pink-50 min-h-screen relative">
      
      {/* Navbar with background image */}
      <div
        className="relative w-full"
        style={{
          backgroundImage: "url('/images/designnn.jpg')", // image for navbar background
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark pink overlay for readability */}
        <div className="absolute inset-0 bg-pink-900 opacity-20 pointer-events-none"></div>

        {/* Navbar */}
        <div className="relative z-10">
          <Navbar />
        </div>
      </div>

      {/* Course Detail container */}
      <div className="px-5 pt-8 max-w-7xl mx-auto">
        <CourseDetail />
      </div>

      {/* Footer */}
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default CourseDetailPage;
