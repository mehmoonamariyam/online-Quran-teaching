import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  Home,
  Users,
  BookOpen,
  Layers,
  MessageSquare,
  Heart,
  Menu,
  X,
  Settings,
  FileText,
} from "lucide-react";

const DashboardLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex bg-[#fdf4f0] min-h-screen">
      
      {/* ------------------------------
          SIDEBAR
      --------------------------------*/}
      <aside
        className={`fixed md:static top-0 left-0 h-full w-64 bg-gradient-to-b from-[#fbeeea] to-[#f8d9d2] shadow-lg z-40 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 px-6 py-5 border-b border-pink-200">
          <img src="/images/logonaba.png" alt="Logo" className="w-12 h-12" />
          <h2 className="text-xl font-bold text-pink-900">Admin Panel</h2>
        </div>

        {/* Navigation */}
        <nav className="mt-4 flex flex-col gap-2 px-4 text-pink-900 font-medium">
          <DashboardLink to="/admin" icon={<Home size={18} />} label="Dashboard" />
          <DashboardLink to="/admin/students" icon={<Users size={18} />} label="Students" />
          <DashboardLink to="/admin/tutors" icon={<Users size={18} />} label="Tutors" />
          <DashboardLink to="/admin/courses" icon={<BookOpen size={18} />} label="Courses" />
          <DashboardLink to="/admin/enrollments" icon={<Layers size={18} />} label="Enrollments" />
          <DashboardLink to="/admin/messages" icon={<MessageSquare size={18} />} label="Messages" />
          <DashboardLink to="/admin/donations" icon={<Heart size={18} />} label="Donations" />
          <DashboardLink to="/admin/content" icon={<FileText size={18} />} label="Website Content" />
          <DashboardLink to="/admin/settings" icon={<Settings size={18} />} label="Settings" />
        </nav>
      </aside>

      {/* ------------------------------
          MAIN CONTENT AREA
      --------------------------------*/}
      <div className="flex-1 flex flex-col min-h-screen">

        {/* Top Bar */}
        <header className="w-full bg-white shadow-md py-3 px-6 flex justify-between items-center">
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-pink-900"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>

          <h1 className="text-xl font-bold text-pink-900">Dashboard</h1>

          {/* Admin Profile */}
          <div className="flex items-center gap-3">
            <img
              src="/images/girl.jpg"
              className="w-10 h-10 rounded-full border-2 border-pink-300"
              alt="Admin"
            />
            <span className="text-pink-900 font-semibold">Admin</span>
          </div>
        </header>

        {/* Page Content Outlet */}
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

/* ------------------------------
   REUSABLE SIDEBAR LINK COMPONENT
--------------------------------*/
const DashboardLink = ({ to, icon, label }) => {
  return (
    <Link
      to={to}
      className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/60 hover:shadow transition-all duration-200"
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
};

export default DashboardLayout;
