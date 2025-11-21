import React from "react";
import { CheckCircle, Trash2, User } from "lucide-react";

const StudentsTable = ({ students, onApprove, onDelete }) => {
  return (
    <section className="mt-10 bg-white p-6 rounded-xl shadow-lg">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-pink-900">Student Enrollment Requests</h2>
        <p className="text-pink-800 mt-1">
          Review new submissions and manage enrollment status.
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#f8e6e2] text-pink-900 text-left">
              <th className="p-4">Student</th>
              <th className="p-4">Email</th>
              <th className="p-4">Course</th>
              <th className="p-4">Status</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {students.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center p-6 text-gray-500">
                  No new enrollment requests.
                </td>
              </tr>
            ) : (
              students.map((student) => (
                <tr
                  key={student.id}
                  className="border-b hover:bg-pink-50 transition"
                >
                  <td className="p-4 flex items-center gap-3">
                    <User className="text-pink-900" size={20} />
                    <span className="font-semibold text-gray-800">
                      {student.name}
                    </span>
                  </td>

                  <td className="p-4 text-gray-700">{student.email}</td>

                  <td className="p-4 text-gray-700">{student.course}</td>

                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        student.status === "Enrolled"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {student.status}
                    </span>
                  </td>

                  <td className="p-4 flex justify-center gap-4">
                    {/* Approve Button */}
                    {student.status !== "Enrolled" && (
                      <button
                        onClick={() => onApprove(student.id)}
                        className="bg-pink-900 text-white p-2 rounded-full hover:bg-pink-800 transition"
                        title="Mark as Enrolled"
                      >
                        <CheckCircle size={20} />
                      </button>
                    )}

                    {/* Delete Button */}
                    <button
                      onClick={() => onDelete(student.id)}
                      className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition"
                      title="Delete Student"
                    >
                      <Trash2 size={20} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default StudentsTable;
