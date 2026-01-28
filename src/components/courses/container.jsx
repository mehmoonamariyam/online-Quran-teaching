import React, { useEffect } from "react";
import Card from "./card";
import { fetchCourses } from "../../store/slice/courseSlice";
import { useDispatch, useSelector } from "react-redux";

const Container = () => {
  const dispatch = useDispatch();

  const { courses, loading } = useSelector((state) => state.courses);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12 py-12">
<div className="text-center">
     <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-extrabold text-pink-900 mb-8 md:mb-12 relative inline-block">
  Our Courses
  
</h2>

</div>



      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card courses={courses} />
      </div>
    </div>
  );
};

export default Container;
