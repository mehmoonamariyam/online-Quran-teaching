import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import InfoTable from "./InfoTable"; // Keep if you’re still using it elsewhere
import { fetchSingleCourse } from "../../store/slice/courseSlice";





const CourseDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { currentCourse: course, loading } = useSelector(
    (state) => state.courses
  );
 useEffect(() => {
  if (id) {
    dispatch(fetchSingleCourse(id));
  }
}, [id]);

if (loading) {
  return <p className="text-center text-gray-500 mt-20">Loading course...</p>;
}

if (!course) {
  return <p className="text-center text-gray-500 mt-20">Course not found!</p>;
}

  return (
    <div className="min-h-screen bg-pink-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-2 py-10">

        {/* Top Section: Description + Image */}
        <div className="flex flex-col lg:flex-row items-start lg:items-start gap-1 mb-1">
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
            <h1 className="text-4xl font-bold text-pink-800 mb-9">
              {course.title}
            </h1>

            <p
              className="text-lg leading-relaxed mb-6 text-justify"
              dangerouslySetInnerHTML={{ __html: course.description }}
            />

            {/* Level, Duration, Instructor */}
            <div className="flex flex-wrap gap-2 text-small mb-8">
              <span className="bg-pink-200 text-pink-800 px-2 py-1 rounded-lg">
                Fees: {course.price}
              </span>
              <span className="bg-pink-200 text-pink-800 px-2 py-1 rounded-lg">
                Duration: {course.duration}
              </span>
              <span className="bg-pink-200 text-pink-800 px-2 py-1 rounded-lg">
                Instructor: {course.instructor}
              </span>
            </div>
          </div>
        </div>
{/* Outline + Table Section with Matching Pink Theme */}
<div className="flex flex-col md:flex-row justify-center items-stretch gap-6 py-10">
  
  {/* Outline Box */}
  <div className="w-full md:w-1/2 bg-white shadow-lg rounded-2xl p-6 border border-pink-200 flex flex-col justify-between">
    <h2 className="text-2xl font-semibold text-center mb-4 text-pink-900">Course Outline</h2>
    <table className="w-full text-gray-800 border-collapse">
      <tbody>
        {course.details.map((point, i) => (
          <tr
            key={i}
            className={i % 2 === 0 ? "bg-pink-100 border-b border-pink-200" : "bg-white border-b border-pink-200"}
          >
            <td className="px-4 py-2">{point}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

{/* Info Table Box with Full Course Info */}
<div className="w-full md:w-1/2 bg-white shadow-lg rounded-2xl p-6 border border-pink-200 flex flex-col justify-between">
  <h2 className="text-2xl font-semibold text-center mb-1 text-pink-900">Course Info</h2>
  <table className="w-full text-gray-800 border-collapse">
    <tbody>
      <tr className="bg-pink-100 border-b border-pink-200">
        <td className="font-semibold py-2 pl-6 pr-4">Classes/Week:</td>
        <td className="pl-4">{course.classesPerWeek || "5 classes per week"}</td>
      </tr>
      <tr className="bg-white border-b border-pink-200">
        <td className="font-semibold py-2 pl-6 pr-4">Class Duration:</td>
        <td className="pl-4">{course.classduration || "60 minutes each"}</td>
      </tr>
      <tr className="bg-pink-100 border-b border-pink-200">
        <td className="font-semibold py-2 pl-6 pr-4">Platform:</td>
        <td className="pl-4">{course.platform || "Google Meet"}</td>
      </tr>
      <tr className="bg-white border-b border-pink-200">
        <td className="font-semibold py-2 pl-6 pr-4">Language:</td>
        <td className="pl-4">{course.language || "Urdu & English"}</td>
      </tr>
      <tr className="bg-pink-100">
        <td className="font-semibold py-2 pl-6 pr-4">Assessment:</td>
        <td className="pl-4">{course.assessment || "Weekly memorization tests"}</td>
      </tr>
    </tbody>
  </table>
</div>



</div>



        {/* Ideal For */}
        <div>
          <h3 className="text-xl font-semibold mb-2 text-pink-700">Ideal For:</h3>
          <p
            className="text-lg leading-relaxed mb-6 text-justify"
            dangerouslySetInnerHTML={{ __html: course.idealfor }}
          />
        </div>

        {/* Enroll Button */}
        <Link
          to="/"
          className="block mx-auto text-center font-semibold py-2 px-6 rounded-full shadow-lg transition bg-pink-900 text-white hover:bg-pink-800 mt-4 w-fit"
        >
          Enroll Now
        </Link>
      </div>
    </div>
  );
};

export default CourseDetail;
