import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminRoute = ({ children }) => {
  const user = useSelector((state) => state.login.user);

  // not logged in
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // logged in but not admin
  if (user.role !== "admin") {
    return <Navigate to="/courses" replace />;
  }

  // admin allowed
  return children;
};

export default AdminRoute;
