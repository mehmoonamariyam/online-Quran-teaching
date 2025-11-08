
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/homepage';
import CoursePage from './pages/coursesPage';
import CourseDetail from './components/courses/courseDetail';
import LoginPage from './pages/Login/login';



const RoutersCall = () => {
  return (
    <Routes>

      <Route path='/' element={<HomePage />} />
      <Route path='/login' element = {<LoginPage/>}/>
      <Route path='/courses' element={<CoursePage />} />
      <Route path='/courses/:id' element={<CourseDetail />} />
      <Route path='*' element={<p className="text-center mt-20 text-gray-500">Page not found!</p>} />
    </Routes>
  );
}

export default RoutersCall;
