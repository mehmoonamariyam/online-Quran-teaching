import React from "react";
import { useSelector } from "react-redux";
import Card from "./card";


const Container = () => {
  const courses = useSelector(state => state.courses.courses); // get data from slice

  return (
    <div className="container mx-auto mt-10 px-5">
      <h1 className="text-3xl font-bold text-center text-pink-900 mb-8">
         Our Courses 
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card data={courses} />
      </div>
    </div>
  );
};

export default Container;
