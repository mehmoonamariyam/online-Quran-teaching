import React from "react";
import { Link } from "react-router-dom";
import { BookOpen, Heart, Star } from "lucide-react"; // simple icons

const HomeTutors = () => {
  return (
    <section className="relative py-20 px-6 md:px-16 bg-linear-to-b from-[#fbeeea] to-[#f8d9d2] text-center overflow-hidden">

  
      <div className="relative z-10 max-w-6xl mx-auto">
      
        <h2 className="text-3xl md:text-4xl font-extrabold text-pink-900 mb-8 relative inline-block">
          Our Tutors
          <span className="block w-24 h-1 bg-pink-900 mt-3 mx-auto rounded-full"></span>
        </h2>

        <p className="text-lg md:text-xl text-pink-900 leading-relaxed mb-10 max-w-3xl mx-auto">
          Guided by faith, wisdom, and experience — our tutors are the heart of{" "}
          <span className="font-bold text-pink-900">Naba Al Jannah</span>.
          They inspire every student to connect with the Quran through patience,
          compassion, and deep understanding.
        </p>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
     
          <div className="bg-white/70 backdrop-blur-md p-8 rounded-2xl  border border-pink-900 shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-2">
            <div className="flex justify-center mb-4">
              <BookOpen className="text-pink-900 w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold text-pink-900 mb-2">
              Qualified Scholars
            </h3>
            <p className="text-pink-800 text-base">
              Every tutor is certified and well-versed in Tajweed and Quranic sciences,
              ensuring authentic and structured learning.
            </p>
          </div>

        
          <div className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-md hover:shadow-xl  border border-pink-900 transition-transform duration-300 hover:-translate-y-2">
            <div className="flex justify-center mb-4">
              <Heart className="text-pink-900 w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold text-pink-900 mb-2">
              Dedicated Mentors
            </h3>
            <p className="text-pink-800 text-base">
              Our tutors go beyond teaching — they mentor with care, guiding students
              at their own pace with sincerity and love.
            </p>
          </div>

      
          <div className="bg-white/70 backdrop-blur-md p-8 rounded-2xl  border border-pink-900 shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-2">
            <div className="flex justify-center mb-4">
              <Star className="text-pink-900 w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold text-pink-900 mb-2">
              Inspiring Excellence
            </h3>
            <p className="text-pink-800 text-base">
              With gentle encouragement and spiritual focus, they help students
              excel in both recitation and understanding of the Quran.
            </p>
          </div>
        </div>

      
        <div className="relative mt-16 mb-10">
          <p className="text-pink-950 italic text-lg md:text-xl font-medium max-w-2xl mx-auto">
            “The best among you are those who learn the Quran and teach it.”
          </p>
          <span className="block w-20 h-1 bg-pink-900 mt-3 mx-auto rounded-full"></span>
        </div>

     
        <Link
          to="/tutors"
          className="inline-block bg-pink-900 text-white font-semibold py-3 px-10 rounded-full shadow-md hover:bg-pink-800 hover:scale-105 transition-transform duration-300"
        >
          Meet Our Tutors
        </Link>
      </div>
    </section>
  );
};

export default HomeTutors;


