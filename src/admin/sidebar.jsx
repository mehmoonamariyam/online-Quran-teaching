import { Link } from "react-router-dom";
import { LayoutDashboard, Users, MessageSquare, Book, UserPlus, Mail } from "lucide-react";

const DashboardSidebar = () => {
  return (
    <div className="fixed left-0 top-0 w-64 h-screen bg-pink-100 p-5 shadow-lg">
      <h2 className="text-2xl font-bold mb-10 text-center">Admin Panel</h2>

      <nav className="space-y-3">
        <Link
          to="/admin"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#e4d4cf] transition"
        >
          <LayoutDashboard size={20} /> Dashboard Overview
        </Link>

        <Link
          to="/admin/students"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#e4d4cf] transition"
        >
          <Users size={20} /> Manage Students
        </Link>

        <Link
          to="/admin/tutors"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#e4d4cf] transition"
        >
          <UserPlus size={20} /> Manage Tutors
        </Link>

        <Link
          to="/admin/courses"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#e4d4cf] transition"
        >
          <Book size={20} /> Manage Courses
        </Link>

        <Link
          to="/admin/enrollments"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#e4d4cf] transition"
        >
          <Users size={20} /> Enrollment Requests
        </Link>

        <Link
          to="/admin/messages"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#e4d4cf] transition"
        >
          <MessageSquare size={20} /> Messages
        </Link>

        <Link
          to="/admin/profile"
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#e4d4cf] transition"
        >
          <Mail size={20} /> Admin Profile
        </Link>
      </nav>
    </div>
  );
};

export default DashboardSidebar;
