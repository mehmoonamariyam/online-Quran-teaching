import React from "react";

const HomeTutors = () => {
  return (
    <section className="py-20 px-6 md:px-16 bg-pink-100 text-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-pink-900 mb-6 relative inline-block">
        Our Tutors
        <span className="block w-20 h-1 bg-pink-900 mt-2 mx-auto rounded-full"></span>
      </h2>

      <p className="text-lg md:text-xl text-pink-900 mb-6 max-w-3xl mx-auto">
        Our team of qualified and experienced tutors is dedicated to helping students learn the Quran with ease and care. They bring both knowledge and passion to every class.
      </p>

      <p className="text-lg md:text-xl text-pink-900 mb-12 max-w-3xl mx-auto">
        Whether it’s Tajweed, Tafseer, or Hifz, our tutors provide personalized guidance and support to ensure every student progresses confidently.
      </p>

 

      <div className="mt-10">
        <a
          href="/tutors"
          className="bg-pink-900 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-pink-700 transition duration-300"
        >
          View All Tutors
        </a>
      </div>
    </section>
  );
};

export default HomeTutors;
