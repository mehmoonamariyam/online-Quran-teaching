import React from "react";

const attributes = [
  { 
    icon: "/images/Patient.png", 
    title: "Patient & Supportive",
    description: "Our teachers guide students gently, ensuring each lesson is clear and understood, no matter the pace of learning."
  },
  { 
    icon: "/images/Knowledge.png", 
    title: "Knowledgeable & Skilled",
    description: "Every tutor is well-versed in Quran, Tajweed, and Islamic teachings, providing authentic and accurate instruction."
  },
  { 
    icon: "/images/Friendly.png", 
    title: "Friendly & Approachable",
    description: "They create a warm, welcoming environment that encourages students to ask questions and learn confidently."
  },
  { 
    icon: "/images/Motivating.png", 
    title: "Dedicated & Motivating",
    description: "Our teachers inspire students to stay consistent, practice regularly, and achieve their Quran learning goals."
  },
];

const centerImage = "/images/femalee.png";

const TeachersAttributes = () => {
  return (
    <section className="py-20 bg-pink-50 flex flex-col items-center">
      
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-pink-900 mb-12 text-center">
        Why Choose Our Teachers
        <span className="block w-20 h-1 bg-pink-900 mt-2 mx-auto rounded-full"></span>
      </h2>

      {/* Attributes Layout */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 w-full max-w-6xl">

        {/* Left Column (Top 2 attributes) */}
        <div className="flex flex-col sm:flex-row lg:flex-col justify-center items-center gap-6 order-1">
          {attributes.slice(0, 2).map((attr, index) => (
            <div key={index} className="flex flex-col items-center text-center max-w-[220px]">
              <img src={attr.icon} alt={attr.title} className="w-45 h-45 mb-3" />
              <h3 className="text-pink-900 font-semibold text-lg mb-2">{attr.title}</h3>
              <p className="text-pink-900 text-sm">{attr.description}</p>
            </div>
          ))}
        </div>

        {/* Center Image */}
        <div className="flex-shrink-0 order-2">
          <img
            src={centerImage}
            alt="Teacher"
            className="w-75 h-75 md:w-111 md:h-111 object-cover"
          />
        </div>

        {/* Right Column (Bottom 2 attributes) */}
        <div className="flex flex-col sm:flex-row lg:flex-col justify-center items-center gap-6 order-3">
          {attributes.slice(2, 4).map((attr, index) => (
            <div key={index} className="flex flex-col items-center text-center max-w-[220px]">
              <img src={attr.icon} alt={attr.title} className="w-45 h-45 mb-3" />
              <h3 className="text-pink-900 font-semibold text-lg mb-2">{attr.title}</h3>
              <p className="text-pink-900 text-sm">{attr.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TeachersAttributes;
