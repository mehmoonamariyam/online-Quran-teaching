<<<<<<< Updated upstream
import React, { useEffect, useState } from 'react'

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";  // ✅ <-- Add this line
import { useForm } from 'react-hook-form';

// import { API as courses } from "../../../components/courses/API";
=======
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";  // ✅ <-- Add this line
import { useForm } from 'react-hook-form';
import { submitEnroll } from '../../../store/slice/FormSlices/enroll';
import { API as courses } from "../../../components/courses/API";
>>>>>>> Stashed changes

const schema = yup.object().shape({
  firstName: yup.string().trim().required("First name is required"),
  lastName: yup.string().trim().nullable(),
  email: yup.string().trim().email("Enter a valid email").required("Email is required"),
  countryCode: yup.string().required(),
  phone: yup.string().trim().required("Phone is required").matches(/^[0-9\s\-()+]+$/, "Invalid phone number"),
  course: yup.string().required("Please choose a course"),
  preferredDays: yup.string().nullable(),
  preferredTime: yup.string().nullable(),
  notes: yup.string().nullable(),
});

const defaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  countryCode: "+92",
  phone: "",
  course: "",
  preferredDays: "",
  preferredTime: "",
  notes: "",
};

const EnrollmentForm = () => {
const [courses, setCourses] = useState([]);
   const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
    mode: "onTouched",
  });

  useEffect(() => {
    const fetchCourses = async() => {
      const res = await fetch ('http://localhost:8080/api/courses');
      const data = await res.json();
      return setCourses(data);
    };
    fetchCourses();
  }, []);


  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    alert("Form submitted! Check console for data.");
    reset(defaultValues);
  };


    return (
         <div className="bg-white max-w-xl mx-auto shadow-md rounded-lg p-6">
       
      {/* <h2 className="text-2xl font-semibold mb-4 text-center">Book a Free Trial Class</h2> */}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex gap-3">
          <div className="flex-1">
            <label className="block text-sm font-medium">First name</label>
            <input
              {...register("firstName")}
              className={`mt-1 block w-full rounded border px-3 py-2 ${errors.firstName ? "border-red-400" : "border-gray-300"}`}
            />
            {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
          </div>

          <div className="flex-1">
            <label className="block text-sm font-medium">Last name</label>
            <input {...register("lastName")} className="mt-1 block w-full rounded border border-gray-300 px-3 py-2" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="col-span-2">
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              {...register("email")}
              className={`mt-1 block w-full rounded border px-3 py-2 ${errors.email ? "border-red-400" : "border-gray-300"}`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium">Country code</label>
            <select {...register("countryCode")} className="mt-1 block w-full rounded border border-gray-300 px-2 py-2">
              <option value="+92">+92</option>
              <option value="+91">+91</option>
              <option value="+1">+1</option>
              <option value="+44">+44</option>
              <option value="+61">+61</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium">Phone number</label>
          <input
            {...register("phone")}
            className={`mt-1 block w-full rounded border px-3 py-2 ${errors.phone ? "border-red-400" : "border-gray-300"}`}
            placeholder="e.g. 3001234567"
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">Course</label>
          <select
            {...register("course")}
            className={`mt-1 block w-full rounded border px-2 py-2 ${errors.course ? "border-red-400" : "border-gray-300"}`}
          >
            <option value="">Choose a course</option>
            {courses.map(c => (
              <option key={c.id} value={c.title}>{c.title}</option>
            ))}
          </select>
          {errors.course && <p className="text-red-500 text-sm mt-1">{errors.course.message}</p>}
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-medium">Preferred days</label>
            <input {...register("preferredDays")} placeholder="e.g. Mon, Wed, Fri" className="mt-1 block w-full rounded border border-gray-300 px-3 py-2" />
          </div>

          <div>
            <label className="block text-sm font-medium">Preferred time</label>
            <input {...register("preferredTime")} placeholder="e.g. 6:00 PM (UTC+5)" className="mt-1 block w-full rounded border border-gray-300 px-3 py-2" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium">Notes / Additional info</label>
          <textarea {...register("notes")} rows={3} className="mt-1 block w-full rounded border border-gray-300 px-3 py-2" placeholder="Tell us about student's age, previous experience, etc." />
        </div>

        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-4 py-2 rounded font-semibold text-white ${isSubmitting ? "bg-gray-400" : "bg-pink-950 hover:bg-pink-700"}`}
          >
            {isSubmitting ? "Sending..." : "Request Free Trial"}
          </button>

          <div className="text-sm text-gray-600">We will contact you to schedule the class via call.</div>
        </div>
      </form>
    </div>
    )
}

export default EnrollmentForm