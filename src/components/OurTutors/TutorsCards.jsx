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

  return (
    <section className="min-h-screen py-14">
      
      {/* Our Tutors Title */}
      <h2 className="text-4xl font-extrabold text-center text-pink-900 mb-12 relative">
        Our Tutors
        <span className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-pink-500 to-pink-900 rounded-full"></span>
      </h2>

      {tutors.map((tutor, index) => {
        const isEven = index % 2 === 0;

        // Row and Card colors
        const rowBg = isEven ? "bg-pink-200" : "bg-white";
        const cardBg = isEven ? "bg-white" : "bg-pink-200";

        // Text colors
        const nameColor = "text-pink-900";
        const textColor = "text-pink-900";
        const buttonHoverColor = isEven ? "hover:text-pink-300" : "hover:text-pink-100";

        // Use single female image for all cards
        const genderImage = "/images/Femaledp.png";

        return (
          <div key={tutor.id} className={`w-full py-10 ${rowBg}`}>
            <div className="max-w-5xl mx-auto px-6">
              <div
                className={`${cardBg} border-4 border-none rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 flex items-start gap-4`}
              >
                {/* Female Image */}
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
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default TutorsCard;
