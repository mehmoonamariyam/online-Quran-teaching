import React from "react";
import { Link } from "react-router-dom";
import { BookOpen, Heart, Star } from "lucide-react"; 

const HomeTutors = () => {
  return (
    <section className="relative py-20 px-6 md:px-16 bg-linear-to-b from-[#fbeeea] to-[#f8d9d2] text-center overflow-hidden">

  
      <div className="relative z-10 max-w-6xl mx-auto">
      
       <h2 className="text-3xl md:text-4xl font-extrabold text-pink-900 mb-8 relative text-center">
  <span className="inline-block">
    Our Asatizah
    
  </span>
</h2>


        <p className="text-lg md:text-xl text-pink-900 leading-relaxed mb-10 max-w-3xl mx-auto">
          Guided by faith, wisdom, and experience our Asatizah are the heart of{" "}
          <span className="font-bold text-pink-900">Naba Al Jannah</span>.
          They inspire every student to connect with the Qur'an through patience,
          compassion, and deep understanding.
        </p>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
     
          <div className="bg-white/70 backdrop-blur-md p-8 rounded-2xl  border border-pink-900 shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-2">
            <div className="flex justify-center mb-4">
              <BookOpen className="text-pink-900 w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold text-pink-900 mb-2">
  Qualified Asatizah
</h3>
<p className="text-pink-800 text-base leading-relaxed text-justify">
  Each ustazah is certified, skilled in Tajweed and Quranic sciences, and carefully selected by our expert Asatizah panel to provide authentic and structured guidance.
</p>
</div>
          <div className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-md hover:shadow-xl  border border-pink-900 transition-transform duration-300 hover:-translate-y-2">
            <div className="flex justify-center mb-4">
              <Heart className="text-pink-900 w-10 h-10" />
            </div>
            <h3 className="text-xl font-semibold text-pink-900 mb-2">
  Dedicated Mentors
</h3>
<p className="text-pink-800 text-base leading-relaxed text-justify">
  Our Asatizah go beyond teaching. They mentor with care, guiding students through tests, presentations, pair work, group discussions, and workshops for interactive, practical learning.
</p>

          </div>

      
          <div className="bg-white/70 backdrop-blur-md p-8 rounded-2xl  border border-pink-900 shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-2">
            <div className="flex justify-center mb-4">
              <Star className="text-pink-900 w-10 h-10" />
            </div>
           <h3 className="text-xl font-semibold text-pink-900 mb-2">
  Inspiring Excellence
</h3>
<p className="text-pink-800 text-base leading-relaxed text-justify">
  With gentle encouragement and spiritual focus, our Asatizah help students excel in recitation and understanding, guiding them to reach their full potential.
</p>


          </div>
        </div>

      
        <div className="relative mt-16 mb-10">
          <p className="text-pink-950 italic text-lg md:text-xl font-medium max-w-2xl mx-auto">
            “The best among you are those who learn the Quran and teach it.”
          </p>
          
        </div>

     
        <Link
          to="/tutors"
          className="inline-block bg-pink-900 text-white font-semibold py-3 px-10 rounded-full shadow-md hover:bg-pink-800 hover:scale-105 transition-transform duration-300"
        >
          Meet Our Asatizah
        </Link>
      </div>
    </section>
  );
};

export default HomeTutors;


