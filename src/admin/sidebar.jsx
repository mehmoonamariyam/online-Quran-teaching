import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 min-h-screen bg-pink-950 text-white p-5">
      <h2 className="text-xl font-bold mb-8 text-center">
        Admin Panel
      </h2>

      <nav className="flex flex-col gap-4">
        <Link to="/admin/dashboard" className="hover:text-pink-300">
          Dashboard
        </Link>

        <Link to="/admin/courses" className="hover:text-pink-300">
          Courses
        </Link>

        <Link to="/admin/teachers" className="hover:text-pink-300">
          Teachers
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
