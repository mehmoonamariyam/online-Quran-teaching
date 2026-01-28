import { Users, Award, ThumbsUp, MessageCircleIcon } from "lucide-react";

const AchievementsSection = () => {
  return (
    <section className="relative py-20 px-6 md:px-16 bg-linear-to-b from-[#f8d9d2] to-[#fbeeea] text-center overflow-hidden">
      {/* Decorative background pattern */}
      <img
        src="/images/pattern1.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-pink-900 mb-8">
          Trusted by Learners Around the World
        </h2>
        <p className="text-lg text-pink-900 mb-14 max-w-3xl mx-auto leading-relaxed">
          Since 2018, <span className="font-semibold text-pink-900">Naba Al Jannah Academy </span> 
          has guided hundreds of students in learning and memorizing the Holy Qur'an.  
          With expert Asatizah and personalized attention, our students achieve their goals with confidence and faith.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
  <div className="bg-white/80 backdrop-blur-sm border border-pink-100 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-transform hover:-translate-y-1 sm:hover:-translate-y-2 duration-300 text-center">
    <Users className="w-8 sm:w-10 h-8 sm:h-10 text-pink-900 mx-auto mb-2 sm:mb-3" />
    <h3 className="text-2xl sm:text-3xl font-extrabold text-pink-900">1000+</h3>
    <p className="text-pink-800 font-medium text-sm sm:text-base">Students Enrolled</p>
  </div>

  <div className="bg-white/80 backdrop-blur-sm border border-pink-100 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-transform hover:-translate-y-1 sm:hover:-translate-y-2 duration-300 text-center">
    <Award className="w-8 sm:w-10 h-8 sm:h-10 text-pink-900 mx-auto mb-2 sm:mb-3" />
    <h3 className="text-2xl sm:text-3xl font-extrabold text-pink-900">70+</h3>
    <p className="text-pink-800 font-medium text-sm sm:text-base">Courses Completed</p>
  </div>

  <div className="bg-white/80 backdrop-blur-sm border border-pink-100 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-transform hover:-translate-y-1 sm:hover:-translate-y-2 duration-300 text-center">
    <ThumbsUp className="w-8 sm:w-10 h-8 sm:h-10 text-pink-900 mx-auto mb-2 sm:mb-3" />
    <h3 className="text-2xl sm:text-3xl font-extrabold text-pink-900">98%</h3>
    <p className="text-pink-800 font-medium text-sm sm:text-base">Student Satisfaction</p>
  </div>

  <div className="bg-white/80 backdrop-blur-sm border border-pink-100 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-transform hover:-translate-y-1 sm:hover:-translate-y-2 duration-300 text-center">
    <MessageCircleIcon className="w-8 sm:w-10 h-8 sm:h-10 text-pink-900 mx-auto mb-2 sm:mb-3" />
    <h3 className="text-2xl sm:text-3xl font-extrabold text-pink-900">25+</h3>
    <p className="text-pink-800 font-medium text-sm sm:text-base">Active Study Groups</p>
  </div>




        </div>

        {/* Motivational Line */}
        <p className="mt-14 text-lg italic text-pink-950">
          “Every learner who joins us becomes a part of our growing global Quran community.”
        </p>
      </div>
    </section>
  );
};

export default AchievementsSection;
