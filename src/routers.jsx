import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage";
import CoursePage from "./pages/coursesPage";
import CourseDetailPage from "./pages/courseDetailPage";
import LoginPage from "./pages/Login/login"; // from your friend's version

const RoutersCall = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/courses" element={<CoursePage />} />
      <Route path="/courses/:id" element={<CourseDetailPage />} />
      <Route
        path="*"
        element={<p className="text-center mt-20 text-gray-500">Page not found!</p>}
      />
    </Routes>
  );
};

export default RoutersCall;
