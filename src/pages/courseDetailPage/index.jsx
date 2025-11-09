import React from "react";
import CourseDetail from "../../components/courses/courseDetail";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

const CourseDetailPage = () => {
  return (
    <div className="bg-pink-50 min-h-screen">
      {/* Navbar */}
      <div className="relative">
        <Navbar/>
      </div>

      {/* Course Detail container with same left/right margin as cards */}
      <div className="px-5 pt-8 max-w-7xl mx-auto">
        <CourseDetail />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CourseDetailPage;
