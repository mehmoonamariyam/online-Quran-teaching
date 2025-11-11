import React, { useState, useEffect } from "react";
import { fetchTutors } from "./TutorsAPI";

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

  // Group tutors in pairs for rows
  const rows = [];
  for (let i = 0; i < tutors.length; i += 2) {
    rows.push(tutors.slice(i, i + 2));
  }

  return (
    <section className="min-h-screen py-14">
      {/* Our Tutors Title */}
      <h2 className="text-4xl font-extrabold text-center text-pink-900 mb-12 relative">
        Our Tutors
        <span className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-pink-500 to-pink-900 rounded-full"></span>
      </h2>

      {rows.map((rowTutors, rowIndex) => {
        const rowBg = rowIndex % 2 === 0 ? "bg-pink-200" : "bg-white";

        return (
          <div key={rowIndex} className={`${rowBg} py-8`}>
            <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              {rowTutors.map((tutor, index) => {
                const cardBg = rowIndex % 2 === 0 ? "bg-white" : "bg-pink-200"; // card color opposite to row
                const nameColor = "text-pink-900";
                const textColor = "text-pink-900";
                const buttonHoverColor = rowIndex % 2 === 0 ? "hover:text-pink-300" : "hover:text-pink-100";
                const genderImage = "/images/Femaledp.png";

                return (
                  <div
                    key={tutor.id}
                    className={`${cardBg} border-4 border-none rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 flex items-start gap-4`}
                  >
                    <div className="flex-shrink-0 mt-1">
                      <img
                        src={genderImage}
                        alt="Female Teacher"
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    </div>

                    <div>
                      <h3 className={`text-2xl font-semibold mb-2 ${nameColor}`}>
                        {tutor.name}
                      </h3>

                      <p className={`${textColor} leading-relaxed`}>
                        {expanded[tutor.id] ? tutor.details : tutor.shortInfo}
                      </p>

                      <button
                        onClick={() => toggleExpand(tutor.id)}
                        className={`mt-3 inline-block font-semibold ${textColor} ${buttonHoverColor} hover:underline transition-all`}
                      >
                        {expanded[tutor.id] ? "Show Less" : "Show More"}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default TutorsCard;
