// src/components/CourseInfoTable.jsx
import React from "react";

const InfoTable = ({ course }) => {
  return (
    <div className="flex-none lg:w-[27rem] w-full bg-white rounded-xl shadow p-5">
      {/* Heading */}
      <h3 className="text-xl font-semibold text-pink-800 mb-4 text-center">
        Classes Details
      </h3>

      <table className="min-w-full text-left border-collapse">
        <tbody>
          <tr className="bg-pink-50">
            <th className="px-4 py-3 text-pink-800 font-medium border-b border-pink-200">Classes per week</th>
            <td className="px-4 py-3 border-b border-pink-200">{course.classesPerWeek}</td>
          </tr>
          <tr className="bg-white">
            <th className="px-4 py-3 text-pink-800 font-medium border-b border-pink-200">Class duration</th>
            <td className="px-4 py-3 border-b border-pink-200">{course.classDuration}</td>
          </tr>
          <tr className="bg-pink-50">
            <th className="px-4 py-3 text-pink-800 font-medium border-b border-pink-200">Platform</th>
            <td className="px-4 py-3 border-b border-pink-200">{course.platform}</td>
          </tr>
          <tr className="bg-white">
            <th className="px-4 py-3 text-pink-800 font-medium border-b border-pink-200">Language</th>
            <td className="px-4 py-3 border-b border-pink-200">{course.language}</td>
          </tr>
          <tr className="bg-pink-50">
            <th className="px-4 py-3 text-pink-800 font-medium">Assessment</th>
            <td className="px-4 py-3">{course.assessment}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default InfoTable;
