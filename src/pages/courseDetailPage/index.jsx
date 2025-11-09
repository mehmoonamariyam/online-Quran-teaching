import React from "react";
import CourseDetail from "../../components/courses/courseDetail";
import Navbar2 from "../../components/navbar2";
import Footer from "../../components/footer";

const CourseDetailPage = () => {
  return (
    <div className="bg-pink-50 min-h-screen">
      {/* Navbar */}
      <div className="relative">
        <Navbar2 />

        {/* Our Courses text inside navbar */}
        <div className="absolute w-full text-center" style={{ bottom: "40px", zIndex: 10 }}>
          <h1 className="text-4xl font-bold text-pink-900">Our Courses</h1>
        </div>
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
