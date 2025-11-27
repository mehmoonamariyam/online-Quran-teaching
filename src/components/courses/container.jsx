import React, { useEffect } from "react";
import Card from "./card";
import { fetchCourses } from "../../store/slice/courseSlice";
import { useDispatch, useSelector } from "react-redux";

const Container = () => {
  const dispatch = useDispatch();

  // Get courses from Redux store
  const { courses, loading } = useSelector((state) => state.courses);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12 py-12">

      {/* Heading: Our Courses */}
      <h2 className="text-4xl font-extrabold text-center text-pink-900 mb-12 relative">
        Our Courses
        <span className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-24 h-1 bg-linear-to-r from-pink-500 to-pink-900 rounded-full"></span>
      </h2>


      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card courses={courses} />
      </div>
    </div>
  );
};

export default Container;
