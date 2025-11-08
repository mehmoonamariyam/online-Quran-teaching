// src/courses/card.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ data }) => {
  const navigate = useNavigate();

  return (
    <>
      {data?.map((item) => (
        <div
          key={item.id}
          onClick={() => navigate(`/courses/${item.id}`)}
          className="relative overflow-hidden rounded-xl cursor-pointer group"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-64 object-cover rounded-xl transition duration-500"
          />
          <div className="absolute inset-0 bg-white/0 group-hover:bg-white/25 transition duration-500 rounded-xl"></div>
          <div className="absolute inset-0 flex items-center justify-start px-6">
            <div
              className="text-pink-800 font-extrabold text-lg sm:text-xl md:text-2xl leading-tight drop-shadow-sm max-w-[65%] whitespace-pre-line transition-colors duration-500 group-hover:text-pink-700"
              dangerouslySetInnerHTML={{ __html: item.textOnImage }}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
