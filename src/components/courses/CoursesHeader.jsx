import React from "react";

const CoursesHeader = () => {
  return (
    <>
      <section className="relative bg-linear-to-r py-14 px-6 md:px-16">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
          {/* Left: Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-pink-900 mb-2">
              Explore Our Courses
            </h1>
            <p className="text-lg md:text-xl text-pink-800 mb-4 max-w-xl">
              Learn Qur'an, Arabic, and Islamic studies through structured and 
              engaging courses designed for all ages and levels.
            </p>
            <p className="text-lg md:text-xl text-pink-800 max-w-xl">
              Each course is guided by experienced instructors who make learning 
              interactive, easy to understand, and spiritually rewarding.
            </p>
          </div>

          {/* Right: Image */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
           <img
           src="/images/guide.png"
            alt="About"
            className="w-11/12 max-w-xs md:max-w-sm rounded-3xl shadow-2xl border-4 border-pink-900 bg-white"
            />

    </div>
        </div>
      </section>
    </>
  );
};

export default CoursesHeader;
