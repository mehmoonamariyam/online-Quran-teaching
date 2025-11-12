import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import InfoTable from "./InfoTable"; // Make sure this path is correct

const CourseDetail = () => {
  const { id } = useParams();
  const courses = useSelector((state) => state.courses.courses);
  const course = courses.find((item) => item.id === parseInt(id));

  if (!course) {
    return <p className="text-center text-gray-500 mt-20">Course not found!</p>;
  }

  return (
    <div className="min-h-screen bg-pink-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Back Button */}
        <Link
          to="/courses"
          className="inline-block font-semibold py-1.5 px-5 rounded-full shadow-lg transition bg-pink-900 text-white hover:bg-pink-800 mb-8"
        >
          ← Back to Courses
        </Link>

       {/* Top Section: Description + Image */}
<div className="flex flex-col lg:flex-row items-start lg:items-start gap-8 mb-10">
  {/* Right: PNG Image */}
  <div className="flex-1 flex justify-center lg:justify-end order-1 lg:order-2 mb-6 lg:mb-0">
    <img
      src={course.pngImage}
      alt={course.title}
      className="w-72 sm:w-80 lg:w-[480px] object-contain select-none pointer-events-none"
    />
  </div>

  {/* Left: Text Content */}
  <div className="flex-1 lg:pl-5 order-2 lg:order-1">
    <h1 className="text-4xl font-bold text-pink-800 mb-4">{course.title}</h1>

    <p
      className="text-lg leading-relaxed mb-6 text-justify"
      dangerouslySetInnerHTML={{ __html: course.description }}
    />

    {/* Level, Duration, Instructor */}
    <div className="flex flex-wrap gap-3 text-lg mb-8">
      <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-lg">
        Fees: {course.price}
      </span>
      <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-lg">
        Duration: {course.duration}
      </span>
      <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-lg">
        Instructor: {course.instructor}
      </span>
    </div>

    {/* Course Outline */}
    <h3 className="text-lg font-semibold mb-2 text-pink-700">Course Outline:</h3>
    <ul className="list-disc list-inside space-y-1 mb-6 text-lg">
      {course.details.map((point, i) => (
        <li key={i}>{point}</li>
      ))}
    </ul>
  </div>
</div>

{/* Bottom Section: Ideal For + InfoTable */}
<div className="flex flex-col lg:flex-row gap-16 mb-6">
  {/* Left: Ideal For paragraph */}
  <div className="flex-1 lg:max-w-[calc(100%-30rem)]">
    <h3 className="text-lg font-semibold mb-2 text-pink-700">Ideal For:</h3>
    <p
      className="text-lg leading-relaxed mb-6 text-justify"
      dangerouslySetInnerHTML={{ __html: course.idealFor }}
    />
  </div>

  {/* Right: InfoTable */}
  <div className="lg:w-[25rem] flex-shrink-0 self-start mx-auto lg:mx-0">
    <InfoTable course={course} />
  </div>
</div>



      </div>
    </div>
  );
};

export default CourseDetail;
