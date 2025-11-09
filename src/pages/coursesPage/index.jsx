import React from "react";
import Container from "../../components/courses/container";
import Navbar2 from "../../components/navbar2";
import Footer from "../../components/footer";

const CoursePage = () => {
  return (
    <div className="bg-pink-50 min-h-screen"> {/* Body background pink */}
      {/* Navbar */}
      <div className="relative">
        <Navbar2 />

        {/* “Our Courses” text positioned inside navbar */}
        <div
          className="absolute w-full text-center"
          style={{ bottom: "40px", zIndex: 20 }}
        >
          <h1 className="text-4xl font-bold text-pink-900">
            Our Courses
          </h1>
        </div>
      </div>

      {/* Courses container */}
      <div className="px-4 sm:px-6 lg:px-8 py-8">
        <Container />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CoursePage;
