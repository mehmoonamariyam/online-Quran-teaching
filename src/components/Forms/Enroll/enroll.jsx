import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { submitEnroll } from "../../../store/slice/FormSlices/enroll";

// ==================== VALIDATION SCHEMA ====================
const schema = yup.object().shape({
  firstName: yup.string().trim().required("First name is required"),
  lastName: yup.string().trim().nullable(),
  email: yup.string().trim().email("Enter a valid email").required("Email is required"),
  countryCode: yup.string().required(),
  phone: yup.string().trim().required("Phone is required").matches(/^[0-9\s\-()+]+$/, "Invalid phone number"),
  age: yup.number().typeError("Age must be a number").required("Age is required").min(1).max(120),
  gender: yup.string().required("Gender is required"),
  course: yup.string().required("Please choose a course"),
  notes: yup.string().nullable(),
});

const defaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  countryCode: "+92",
  phone: "",
  age: "",
  gender: "",
  course: "",
  notes: "",
};

const EnrollmentForm = () => {
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((state) => state.enroll);

  const [courses, setCourses] = useState([]);
  const [countries, setCountries] = useState([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues,
    mode: "onTouched",
  });

  // ==================== FETCH COURSES ====================
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/courses");
        const data = await res.json();
        setCourses(data);
      } catch (err) {
        console.error("Failed to fetch courses:", err);
      }
    };
    fetchCourses();
  }, []);

  // ==================== FETCH COUNTRIES ====================
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all?fields=name,idd,cca2");
        const data = await res.json();
        const mapped = data
          .map((c, index) => ({
            name: c.name.common,
            dial: c.idd?.root ? c.idd.root + (c.idd?.suffixes?.[0] || "") : "",
            code: c.cca2 || index,
          }))
          .filter((c) => c.dial);
        setCountries(mapped);
      } catch (err) {
        console.error("Failed to fetch countries", err);
      }
    };
    fetchCountries();
  }, []);

  // ==================== SUBMIT HANDLER ====================
  const onSubmit = async (data) => {
    const resultAction = await dispatch(submitEnroll(data));
    if (submitEnroll.fulfilled.match(resultAction)) {
      reset(defaultValues);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full">
      <h2 className="text-2xl font-bold text-center text-pink-900 mb-4">Enrollment Form</h2>

      {/* First Name & Last Name */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1">
          <label className="block text-sm font-medium">First Name</label>
          <input
            {...register("firstName")}
            className={`mt-1 block w-full rounded border px-3 py-2 ${
              errors.firstName ? "border-red-400" : "border-gray-300"
            }`}
          />
          {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium">Last Name</label>
          <input
            {...register("lastName")}
            className="mt-1 block w-full rounded border border-gray-300 px-3 py-2"
          />
        </div>
      </div>

      {/* Email & Country Code */}
      <div className="grid grid-cols-3 gap-3">
        <div className="col-span-2">
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            {...register("email")}
            className={`mt-1 block w-full rounded border px-3 py-2 ${
              errors.email ? "border-red-400" : "border-gray-300"
            }`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium">Country Code</label>
          <select
            {...register("countryCode")}
            className="mt-1 block w-full rounded border border-gray-300 px-2 py-2"
          >
            {countries.map((c, index) => (
              <option key={c.code + index} value={c.dial}>
                {c.name} ({c.dial})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Phone Number */}
      <div>
        <label className="block text-sm font-medium">Phone Number</label>
        <input
          {...register("phone")}
          className={`mt-1 block w-full rounded border px-3 py-2 ${
            errors.phone ? "border-red-400" : "border-gray-300"
          }`}
          placeholder="e.g. 3001234567"
        />
        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
      </div>

      {/* Age & Gender */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1">
          <label className="block text-sm font-medium">Age</label>
          <input
            type="number"
            {...register("age")}
            className={`mt-1 block w-full rounded border px-3 py-2 ${
              errors.age ? "border-red-400" : "border-gray-300"
            }`}
          />
          {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age.message}</p>}
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium">Gender</label>
          <select
            {...register("gender")}
            className={`mt-1 block w-full rounded border px-2 py-2 ${
              errors.gender ? "border-red-400" : "border-gray-300"
            }`}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender.message}</p>}
        </div>
      </div>

      {/* Course */}
      <div>
        <label className="block text-sm font-medium">Course</label>
        <select
          {...register("course")}
          className={`mt-1 block w-full rounded border px-2 py-2 ${
            errors.course ? "border-red-400" : "border-gray-300"
          }`}
        >
          <option value="">Choose a course</option>
          {courses.map((c) => (
            <option key={c._id} value={c.title}>
              {c.title}
            </option>
          ))}
        </select>
        {errors.course && <p className="text-red-500 text-sm mt-1">{errors.course.message}</p>}
      </div>

      {/* Notes */}
      <div>
        <label className="block text-sm font-medium">Notes / Additional Info</label>
        <textarea
          {...register("notes")}
          rows={3}
          className="mt-1 block w-full rounded border border-gray-300 px-3 py-2"
          placeholder="Tell us about student’s experience, interests, or any special needs"
        />
      </div>

      {/* Success/Error */}
      {success && <p className="text-green-600 font-semibold">{success}</p>}
      {error && <p className="text-red-600 font-semibold">{error}</p>}

      {/* Submit Button */}
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <button
          type="submit"
          disabled={isSubmitting || loading}
          className={`px-4 py-2 rounded font-semibold text-white ${
            isSubmitting || loading ? "bg-gray-400" : "bg-pink-950 hover:bg-pink-700"
          }`}
        >
          {isSubmitting || loading ? "Sending..." : "Submit"}
        </button>
        <div className="text-sm text-gray-600 mt-2 sm:mt-0">
          We will contact you to schedule the class via WhatsApp or Email.
        </div>
      </div>
    </form>
  );
};

export default EnrollmentForm;
