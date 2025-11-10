import React from "react";

const TutorsHeader = () => {
  return (
    <>
      <section className="relative bg-linear-to-r py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
          {/* Left: Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-pink-900 mb-4">
              Our Tutors — Your Companions 
            </h1>
            <p className="text-lg md:text-xl text-pink-800 mb-4 max-w-xl">
              Learn from qualified, compassionate, and experienced teachers who 
              make Quran learning meaningful and enjoyable.
            </p>
            <p className="text-lg md:text-xl text-pink-800 max-w-xl">
              Our tutors are not just instructors — they are mentors who inspire 
              students to build a strong connection with the Quran through 
              understanding, reflection, and love for Allah’s words.
            </p>
          </div>

          {/* Right: Image */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <img
              src="/images/cardd.png"  // replace with your tutors image path
              alt="Our Tutors"
              className="w-full max-w-sm md:max-w-md rounded-3xl shadow-2xl border-4 border-pink-900 bg-white"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default TutorsHeader;
