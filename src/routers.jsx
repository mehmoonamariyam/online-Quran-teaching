import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/homepage";
import CoursePage from "./pages/coursesPage";
import CourseDetailPage from "./pages/courseDetailPage";
import LoginPage from "./pages/Login/login";
import SignupPage from "./pages/Login/signup";
import EnrollPage from "./pages/EnrollPage/enroll";
import AboutPage from "./pages/AboutPage/about";
import ContactPage from "./pages/ContactPage";
import DonationPage from "./pages/DonationPage/donation";
import TutorPage from "./pages/TutorsPage";

// ===== ADMIN =====
import AdminRoute from "./routeradmin";
import AdminLayout from "./admin/AdminLayout";
import AdminCourses from "./admin/AdminCourses";
import AdminTeachers from "./admin/AdminTeachers";
import DashboardHome from "./admin/DashboardHome";
import AdminUsers from "./admin/AdminUsers";
import AdminReviews from "./admin/AdminReviews";
import AdminEnrollments from "./admin/AdminEnrollments";


const RoutersCall = () => {
  return (
    <Routes>
      {/* ===== PUBLIC ROUTES ===== */}
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/signin" element={<LoginPage />} />
      <Route path="/enroll" element={<EnrollPage />} />
      <Route path="/courses" element={<CoursePage />} />
      <Route path="/courses/:id" element={<CourseDetailPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/donate" element={<DonationPage />} />
      <Route path="/tutors" element={<TutorPage />} />

      {/* ===== ADMIN ROUTES (NESTED) ===== */}
      <Route
  path="/admin"
  element={
    <AdminRoute>
      <AdminLayout />
    </AdminRoute>
  }
>
  <Route index element={<DashboardHome />} />
  <Route path="dashboard" element={<DashboardHome />} />
  <Route path="courses" element={<AdminCourses />} />
  <Route path="teachers" element={<AdminTeachers />} />
  <Route path="users" element={<AdminUsers />} />
  <Route path="reviews" element={<AdminReviews />} />
  <Route path="enrollments" element={<AdminEnrollments />} />
</Route>

      {/* ===== 404 ===== */}
      <Route
        path="*"
        element={
          <p className="text-center mt-20 text-gray-500">
            Page not found!
          </p>
        }
      />
    </Routes>
  );
};

export default RoutersCall;
