import React from "react";
import { Users, BookOpen, GraduationCap, Mail, FilePlus } from "lucide-react";

const StatsCards = ({ stats }) => {
  return (
    <section className="py-10">
      {/* Top Gradient Header */}
      <div className="bg-linear-to-r from-[#fbeeea] to-[#f8d9d2] p-6 rounded-xl shadow-md mb-8">
        <h2 className="text-2xl font-bold text-pink-900">Dashboard Overview</h2>
        <p className="text-pink-800 mt-1">Quick insights of your platform’s activity</p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Students */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-pink-100">
              <Users className="text-pink-900" size={28} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-pink-900">Total Students</h3>
              <p className="text-2xl font-bold text-gray-800">{stats?.students || 0}</p>
            </div>
          </div>
        </div>

        {/* Tutors */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-pink-100">
              <GraduationCap className="text-pink-900" size={28} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-pink-900">Total Tutors</h3>
              <p className="text-2xl font-bold text-gray-800">{stats?.tutors || 0}</p>
            </div>
          </div>
        </div>

        {/* Courses */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-pink-100">
              <BookOpen className="text-pink-900" size={28} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-pink-900">Total Courses</h3>
              <p className="text-2xl font-bold text-gray-800">{stats?.courses || 0}</p>
            </div>
          </div>
        </div>

        {/* Enrollment Requests */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-pink-100">
              <FilePlus className="text-pink-900" size={28} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-pink-900">Enrollment Requests</h3>
              <p className="text-2xl font-bold text-gray-800">{stats?.requests || 0}</p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 lg:col-span-2">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-pink-100">
              <Mail className="text-pink-900" size={28} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-pink-900">New Messages</h3>
              <p className="text-2xl font-bold text-gray-800">{stats?.messages || 0}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default StatsCards;
