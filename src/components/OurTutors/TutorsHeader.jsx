import React from "react";

const TutorsHeader = () => {
  return (
    <>
<section className="relative bg-linear-to-r py-20 px-6 md:px-16">
  <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
  <div className="md:w-1/2 text-center md:text-left">
  <h1 className="text-4xl md:text-5xl font-extrabold text-pink-900 mb-6">
    Our Asatizah<br/> Your Companion
  </h1>
  <p className="text-lg md:text-xl text-pink-900 mb-4 max-w-xl">
    Learn from qualified, compassionate, and experienced teachers who make Qur'an learning meaningful and enjoyable.
</p>
  <p className="text-lg md:text-xl text-pink-900 max-w-xl">
                Our Asatizah are mentors who inspire students to build a strong 
            connection with the Qur'an through understanding and reflection.

  </p>
</div>
     <div className="md:w-1/2 flex justify-center md:justify-end">
     <img
  src="/images/cardd.png"
  alt="Our Tutors"
  className="w-11/12 max-w-xs md:max-w-sm rounded-3xl shadow-2xl border-4 border-pink-900 bg-white"
/>

    </div>
  </div>
</section>
    </>
  );
};

export default TutorsHeader;
