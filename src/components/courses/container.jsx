import React from "react";
import { useSelector } from "react-redux";
import Card from "./card";

const Container = () => {
  const courses = useSelector(state => state.courses.courses);

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card data={courses} />
      </div>
    </div>
  );
};

export default Container;
