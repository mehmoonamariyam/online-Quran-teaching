import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

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

        {/* Main Section: Text Left, Image Right */}
        <div className="flex flex-col lg:flex-row items-start lg:items-start gap-10">
          {/* Left: Text Content */}
          <div className="flex-1 lg:pl-5"> {/* Added left padding */}
            <h1 className="text-4xl font-bold text-pink-800 mb-4">
              {course.title}
            </h1>

            <p className="text-lg leading-relaxed mb-6">{course.description}</p>

            <div className="flex flex-wrap gap-3 text-sm mb-8">
              <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-lg">
                Level: {course.level}
              </span>
              <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-lg">
                Duration: {course.duration}
              </span>
              <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-lg">
                Instructor: {course.instructor}
              </span>
            </div>

            <h3 className="text-xl font-semibold mb-2 text-pink-700">
              Course Outline:
            </h3>
            <ul className="list-disc list-inside space-y-1 mb-6">
              {course.details.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold mb-2 text-pink-700">
              Ideal For:
            </h3>
            <p className="mb-6">{course.idealFor}</p>

            <p className="text-xl font-semibold">
              <span className="text-gray-700">Price:</span>{" "}
              <span className="text-pink-800">{course.price}</span>
            </p>
          </div>

          {/* Right: PNG Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <img
              src={course.pngImage}
              alt={course.title}
              className="w-72 sm:w-80 lg:w-[480px] object-contain select-none pointer-events-none" // slightly smaller
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
