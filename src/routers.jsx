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

import AdminRoute from "./routeradmin";


import DashboardLayout from "./admin/AdminDashboard";


const RoutersCall = () => {
  return (
    <Routes>
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

<Route
  path="/admin/dashboard"
  element={
    <AdminRoute>
      <DashboardLayout />
    </AdminRoute>
  }
/>



      {/* 404 */}
      <Route
        path="*"
        element={
          <p className="text-center mt-20 text-gray-500">Page not found!</p>
        }
      />
    </Routes>
  );
};

export default RoutersCall;
