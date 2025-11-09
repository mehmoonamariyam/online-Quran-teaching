const coursesOverview = [
  { title: "Quran Recitation", icon: "📖" },
  { title: "Memorization", icon: "🕌" },
  { title: "Arabic Language", icon: "✍️" },
  { title: "Online Classes", icon: "💻" },
  { title: "Group Learning", icon: "🤝" },
  { title: "Personal Mentorship", icon: "🎓" },
];

const CoursesOverview = () => {
  return (
    <section className="bg-[#f4e7df] py-10 px-6">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-pink-900 mb-12 relative inline-block">
        Learn With Us
        <span className="absolute left-1/2 bottom-0 transform -translate-x-1/2 w-24 h-1 bg-linear-to-r from-pink-500 to-pink-900 rounded-full"></span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {coursesOverview.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-4xl mb-3">{course.icon}</div>
            <h3 className="text-lg md:text-xl font-semibold text-pink-900">{course.title}</h3>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
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

