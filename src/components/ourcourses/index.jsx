const coursesOverview = [
  {
    title: "Quran Recitation",
    icon: "📖",
    description:
      "Master the rules of Tajweed and recite the Quran with confidence under the guidance of experienced teachers.",
  },
  {
    title: "Memorization",
    icon: "🕌",
    description:
      "Step-by-step memorization of the Holy Quran with personalized progress tracking and daily guidance.",
  },
  {
    title: "Arabic Language",
    icon: "✍️",
    description:
      "Learn to understand and speak Arabic fluently — from basic grammar to Quranic Arabic comprehension.",
  },
  {
    title: "Online Classes",
    icon: "💻",
    description:
      "Join live interactive sessions from anywhere in the world — flexible schedules and one-on-one attention.",
  },
  {
    title: "Group Learning",
    icon: "🤝",
    description:
      "Engage in collaborative group classes to strengthen your learning experience and build friendships.",
  },
  {
    title: "Personal Mentorship",
    icon: "🎓",
    description:
      "Receive personalized mentoring and feedback from certified Quran and Arabic teachers.",
  },
];

const CoursesOverview = () => {
  return (
    <section className="bg-[#f4e7df] py-10 px-6">
     <h2 className="text-3xl md:text-4xl font-extrabold text-pink-900  mb-10 relative text-center inline-block w-full">
 Our Learning Paths
  <span className="block w-24 h-1 bg-pink-900 mt-2 mx-auto rounded-full"></span>
</h2>

      <div className="max-w-4xl mx-auto space-y-8">
        {coursesOverview.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition duration-300"
          >
            <h3 className="text-2xl font-semibold text-pink-900 flex items-center gap-3 mb-2">
              <span className="text-3xl">{course.icon}</span>
              {course.title}
            </h3>
            <p className="text-gray-700 leading-relaxed">{course.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href="/courses"
          className="bg-pink-900 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300"
        >
          View All Courses
        </a>
      </div>
    </section>
  );
};

export default CoursesOverview;
