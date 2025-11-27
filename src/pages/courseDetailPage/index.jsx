import React from "react";

import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import ScrollToTop from "../../components/scrolltotop";
import CourseDetail from "../../components/courses/courseDetail";

const CourseDetailPage = () => {
  return (
    <div className="bg-pink-50 min-h-screen">
      <div className="relative">
        <Navbar />
      </div>
      <div className="px-5 pt-8 max-w-7xl mx-auto">
        <CourseDetail/>
      </div>
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default CourseDetailPage;
