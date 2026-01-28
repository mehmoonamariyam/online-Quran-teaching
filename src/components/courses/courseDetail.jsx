import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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
          <div className="flex-1 lg:pl-5 order-2 lg:order-1">
            <div className="w-full px-4 md:px-6">
  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-800 mb-6 md:mb-9 break-words">
    {course.title}
  </h1>
  <p
    className="text-base sm:text-lg md:text-lg leading-relaxed mb-6 text-justify break-words"
    dangerouslySetInnerHTML={{ __html: course.description }}
  />
</div>

            <div className="flex flex-wrap gap-2 text-small mb-8">
             
              <span className="bg-pink-200 text-pink-800 px-2 py-1 rounded-lg">
                Duration: {course.duration}
              </span>
              
            </div>
          </div>
        </div>
<div className="flex flex-col md:flex-row justify-center items-stretch gap-6 py-10 ">
  
 <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 py-10 ">

  {/* Outline Box */}
  <div className="w-full md:w-1/2 bg-white shadow-lg rounded-2xl p-6 border border-pink-200 flex flex-col justify-between mb-6 md:mb-0 md:ml-0">
    <h2 className="text-2xl font-semibold text-center mb-4 text-pink-900">Course Outline</h2>
    <table className="w-full text-gray-800 border-collapse">
      <tbody>
        {course.details.map((point, i) => (
          <tr
            key={i}
            className={i % 2 === 0 ? "bg-pink-100 border-b border-pink-200" : "bg-white border-b border-pink-200"}
          >
            <td className="px-4 py-2 break-words">{point}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  {/* Info Table Box */}
  <div className="w-full md:w-1/2 bg-white shadow-lg rounded-2xl p-4 border border-pink-200 flex flex-col justify-between mb-6 md:mb-0 md:ml-5">
    <h2 className="text-2xl font-semibold text-center mb-4 text-pink-900">Course Info</h2>

    <div className="overflow-x-auto">
      <table className="w-full table-auto text-gray-800 border-collapse">
        <tbody>
          <tr className="bg-pink-100 border-b border-pink-200 align-top">
            <td className="font-semibold py-1 px-1 sm:px-4 align-top break-words w-1/3">Classes/Week:</td>
            <td className="py-1 px-1 sm:px-4 break-words w-2/3">{course.classesPerWeek || "5 classes per week"}</td>
          </tr>
          <tr className="bg-white border-b border-pink-200 align-top">
            <td className="font-semibold py-1 px-1 sm:px-4 align-top break-words w-1/3">Class Duration:</td>
            <td className="py-1 px-1 sm:px-4 break-words w-2/3">{course.classduration || "60 minutes each"}</td>
          </tr>
          <tr className="bg-pink-100 border-b border-pink-200 align-top">
            <td className="font-semibold py-1 px-1 sm:px-4 align-top break-words w-1/3">Platform:</td>
            <td className="py-1 px-1 sm:px-4 break-words w-2/3">{course.platform || "Google Meet"}</td>
          </tr>
          <tr className="bg-white border-b border-pink-200 align-top">
            <td className="font-semibold py-1 px-1 sm:px-4 align-top break-words w-1/3">Language:</td>
            <td className="py-1 px-1 sm:px-4 break-words w-2/3">{course.language || "Urdu & English"}</td>
          </tr>
          <tr className="bg-pink-100 align-top">
            <td className="font-semibold py-1 px-1 sm:px-4 align-top break-words w-1/3">Assessment:</td>
            <td className="py-1 px-1 sm:px-4 break-words w-2/3">{course.assessment || "Weekly memorization tests"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
</div>
        {/* Ideal For */}
        <div className="w-full px-4 md:px-6">
  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-pink-700">Ideal For:</h3>
  <p
    className="text-base sm:text-lg leading-relaxed mb-6 text-justify break-words"
    dangerouslySetInnerHTML={{ __html: course.idealfor }}
  />
</div>

        <Link
          to="/enroll"
          className="block mx-auto text-center font-semibold py-2 px-6 rounded-full shadow-lg transition bg-pink-900 text-white hover:bg-pink-800 mt-4 w-fit"
        >
          Enroll Now
        </Link>
      </div>
    </div>
  );
};

export default CourseDetail;
