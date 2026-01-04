import { useDispatch } from "react-redux";
import { logout } from "../store/slice/authSlice/authSlice";
import { useNavigate } from "react-router-dom";

const Topbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    navigate("/login"); // ✅ redirect
  };

  return (
    <div className="w-full h-14 bg-white shadow flex justify-between items-center px-6">
      <h1 className="font-bold text-pink-950">
        NABA-AL-JANNAH Admin
      </h1>

      <button
        onClick={handleLogout}
        className="text-sm text-red-600 font-semibold"
      >
        Logout
      </button>
    </div>
  );
};

export default Topbar;
