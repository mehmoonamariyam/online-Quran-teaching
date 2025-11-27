import React from "react";
import { BookOpen, Star, Users, Laptop, Heart, GraduationCap } from "lucide-react"; // icons
import { Link } from "react-router-dom";

const coursesOverview = [
  {
    title: "Quran Recitation",
    icon: <BookOpen className="w-10 h-10 text-pink-900" />,
    description:
      "Master Tajweed and recitation under the guidance of qualified tutors for a perfect Quranic pronunciation.",
  },
  {
    title: "Memorization",
    icon: <Star className="w-10 h-10 text-pink-900" />,
    description:
      "Step-by-step memorization plan with personal attention and spiritual focus to achieve your goals.",
  },
  {
    title: "Online Classes",
    icon: <Laptop className="w-10 h-10 text-pink-900" />,
    description:
      "Join live, interactive one-on-one or group sessions — flexible timings and accessible from anywhere.",
  },
  {
    title: "Group Learning",
    icon: <Users className="w-10 h-10 text-pink-900" />,
    description:
      "Collaborate, learn, and grow together through group recitations and shared learning experiences.",
  },
  {
    title: "Personal Mentorship",
    icon: <GraduationCap className="w-10 h-10 text-pink-900" />,
    description:
      "Learn directly under the supervision of expert tutors who track your progress and guide you personally.",
  },
  {
    title: "Spiritual Enrichment",
    icon: <Heart className="w-10 h-10 text-pink-900" />,
    description:
      "Develop a deeper bond with the Quran, fostering inner peace and understanding of its divine message.",
  },
];

const CoursesOverview = () => {
  return (
    <section className="relative py-20 px-6 md:px-16 bg-linear-to-b from-[#fbeeea] to-[#f8d9d2] overflow-hidden">
 
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        
        <h2 className="text-3xl md:text-4xl font-extrabold text-pink-900 mb-8 relative inline-block">
          Our Learning Paths
          <span className="block w-24 h-1 bg-pink-900 mt-3 mx-auto rounded-full"></span>
        </h2>

        <p className="text-lg md:text-xl text-pink-900 leading-relaxed mb-14 max-w-3xl mx-auto">
          Begin your spiritual journey through our structured learning paths — whether
          you’re starting from basics or advancing your Quranic understanding, we have
          the right course for you.
        </p>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {coursesOverview.map((course, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm border border-pink-900 rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex justify-center mb-4">{course.icon}</div>
              <h3 className="text-xl font-semibold text-pink-900 mb-2">
                {course.title}
              </h3>
              <p className="text-pink-800 text-base leading-relaxed">
                {course.description}
              </p>
            </div>
          ))}
        </div>

        
        <div className="relative mt-16 mb-10">
          <p className="text-pink-950 italic text-lg md:text-xl font-medium max-w-2xl mx-auto">
            “Every lesson brings you closer to understanding the words of Allah.”
          </p>
          <span className="block w-20 h-1 bg-pink-900 mt-3 mx-auto rounded-full"></span>
        </div>

        
        <Link className="inline-block bg-pink-900 text-white font-semibold py-3 px-10 rounded-full shadow-md hover:bg-pink-800 hover:scale-105 transition-transform duration-300">View All Courses</Link>
         
        
      </div>
    </section>
  );
};

export default CoursesOverview;
