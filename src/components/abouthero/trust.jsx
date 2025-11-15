import { Users, Star, BookOpen, Globe } from "lucide-react";

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
          Over the years, <span className="font-semibold text-pink-950">Naba Al Jannah Academy</span> 
          has guided hundreds of students in learning and memorizing the Holy Quran.  
          With expert tutors and personalized attention, our students achieve their goals with confidence and faith.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-white/80 backdrop-blur-sm border border-pink-100 rounded-2xl p-8 shadow-md hover:shadow-xl transition-transform hover:-translate-y-2 duration-300">
            <Users className="w-10 h-10 text-[#C48E84] mx-auto mb-3" />
            <h3 className="text-3xl font-extrabold text-pink-900">1000+</h3>
            <p className="text-pink-800 font-medium">Students Enrolled</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm border border-pink-100 rounded-2xl p-8 shadow-md hover:shadow-xl transition-transform hover:-translate-y-2 duration-300">
            <BookOpen className="w-10 h-10 text-pink-900 mx-auto mb-3" />
            <h3 className="text-3xl font-extrabold text-pink-900">25+</h3>
            <p className="text-pink-800 font-medium">Courses Completed</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm border border-pink-100 rounded-2xl p-8 shadow-md hover:shadow-xl transition-transform hover:-translate-y-2 duration-300">
            <Star className="w-10 h-10 text-[#C48E84] mx-auto mb-3" />
            <h3 className="text-3xl font-extrabold text-pink-900">98%</h3>
            <p className="text-pink-800 font-medium">Student Satisfaction</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm border border-pink-100 rounded-2xl p-8 shadow-md hover:shadow-xl transition-transform hover:-translate-y-2 duration-300">
            <Globe className="w-10 h-10 text-pink-900 mx-auto mb-3" />
            <h3 className="text-3xl font-extrabold text-pink-900">15+</h3>
            <p className="text-pink-800 font-medium">Countries Reached</p>
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
