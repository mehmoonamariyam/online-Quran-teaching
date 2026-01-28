import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-pink-300 font-semibold"
      : "hover:text-pink-300";

  return (
    <div className="w-64 min-h-screen bg-pink-950 text-white p-5">
      <h2 className="text-xl font-bold mb-8 text-center">
        Admin Panel
      </h2>

      <nav className="flex flex-col gap-4">
        <NavLink to="/admin/dashboard" className={linkClass}>
          Dashboard
        </NavLink>

        <NavLink to="/admin/courses" className={linkClass}>
          Courses
        </NavLink>

        <NavLink to="/admin/teachers" className={linkClass}>
          Teachers
        </NavLink>

        <NavLink to="/admin/users" className={linkClass}>
          Users
        </NavLink>

        <NavLink to="/admin/reviews" className={linkClass}>
          Reviews
        </NavLink>

        <NavLink to="/admin/enrollments" className={linkClass}>
          Enrollments
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
