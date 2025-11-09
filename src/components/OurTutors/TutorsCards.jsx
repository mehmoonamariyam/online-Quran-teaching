import React, { useState, useEffect } from "react";
import { fetchTutors } from "./tutorsApi";

const TutorsCard = () => {
  const [tutors, setTutors] = useState([]);
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    fetchTutors().then((data) => setTutors(data));
  }, []);

  const toggleExpand = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="bg-pink-50 min-h-screen py-14 px-6">
      <h2 className="text-4xl font-extrabold text-center text-pink-900 mb-12 relative">
        Our Tutors
        <span className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-pink-500 to-pink-900 rounded-full"></span>
      </h2>

      <div className="max-w-5xl mx-auto grid gap-8 grid-cols-2">
        {tutors.map((tutor) => (
          <div
            key={tutor.id}
            className="bg-pink-200 border-4 border-pink-300 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold text-pink-900 mb-2">
              {tutor.name}
            </h3>

            <p className="text-pink-900 leading-relaxed">
              {expanded[tutor.id] ? tutor.details : tutor.shortInfo}
            </p>

            <button
              onClick={() => toggleExpand(tutor.id)}
              className="mt-3 inline-block text-pink-900 font-semibold hover:text-pink-300 hover:underline transition-all"
            >
              {expanded[tutor.id] ? "Show Less" : "Show More"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TutorsCard;
