import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Card = () => {
  const navigate = useNavigate();
  const courses = useSelector((state) => state.courses.courses); // get from slice

  if (!courses || courses.length === 0) {
    return <p className="text-center text-gray-500">No courses available.</p>;
  }

  return (
    <>
      {courses.map((item) => (
        <div
          key={item.id}
          onClick={() => navigate(`/courses/${item.id}`)}
          className="relative overflow-hidden rounded-xl cursor-pointer group border-4 border-pink-800 shadow-md hover:shadow-xl transition-all duration-300 w-[90%] mx-auto"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-52 sm:h-56 md:h-60 object-cover rounded-xl transition duration-500"
          />
          <div className="absolute inset-0 bg-white/0 group-hover:bg-white/25 transition duration-500 rounded-xl"></div>
          <div className="absolute inset-0 flex items-center justify-start px-4 sm:px-6">
            <div
              className="text-pink-800 font-extrabold leading-tight drop-shadow-sm max-w-[65%] whitespace-pre-line transition-colors duration-500 group-hover:text-pink-700 text-base sm:text-xl md:text-xl lg:text-xl xl:text-2xl"
              dangerouslySetInnerHTML={{ __html: item.textOnImage }}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
