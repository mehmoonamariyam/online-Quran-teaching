import React from "react";

const MissionVision = () => {
  return (
    <>
    <section className="bg-[#fff4f1] py-16 px-6 md:px-16 text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-pink-900 mt-15 mb-10 relative text-center inline-block w-full">
  Our Mission & Vision
  <span className="block w-24 h-1 bg-pink-900 mt-2 mx-auto rounded-full"></span>
</h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 text-gray-700 text-lg">
        <div>
          <h3 className="text-2xl font-semibold text-pink-900 mb-2">Mission</h3>
          <p>
            To provide accessible, interactive, and high-quality Quranic education
            to students of all ages, nurturing spiritual growth and understanding.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-pink-900 mb-2">Vision</h3>
          <p>
            To become a leading online Quran academy, inspiring lifelong
            learning, community care, and excellence in Islamic knowledge.
          </p>
        </div>
      </div>
    </section>

    <section className="py-16 px-6 md:px-16 bg-[#fce9e7] text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-pink-900 mb-4">
        Ready to Begin Your Journey?
      </h2>
      <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
        Join our growing community and start learning Quran with our experienced
        tutors today. Spiritual growth and knowledge await you.
      </p>
      <a
        href="/courses"
        className="bg-pink-900 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-full transition duration-300"
      >
        View Courses
      </a>
    </section>
    </>
  );
};

export default MissionVision;
