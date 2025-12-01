import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SignupUser } from "../../../store/slice/FormSlices/signup";
import { Link, useNavigate } from "react-router-dom";

const SignupForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, loading /*, error - not used directly here*/ } = useSelector((state) => state.signup);

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // store field-specific errors and a general error
  const [fieldErrors, setFieldErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    // clear that field's error as user types (nice UX)
    setFieldErrors((prev) => ({ ...prev, [name]: null, general: null }));
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // client-side validation
    const errors = {};

    if (!form.username.trim()) errors.username = "Username is required";
    if (!form.email.trim()) errors.email = "Email is required";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errors.email = "Invalid email address";
    if (!form.password.trim()) errors.password = "Password is required";
    if (!form.confirmPassword.trim()) errors.confirmPassword = "Confirm password is required";
    if (form.password && form.confirmPassword && form.password !== form.confirmPassword)
      errors.confirmPassword = "Passwords do not match";

    setFieldErrors(errors);

    if (Object.keys(errors).length > 0) return;

    // clear previous errors while submitting
    setFieldErrors({});

    try {
      // dispatch thunk and unwrap to catch rejected value
      const data = await dispatch(
        SignupUser({
          username: form.username,
          email: form.email,
          password: form.password,
        })
      ).unwrap();

      // success path
      if (data?.token) {
        localStorage.setItem("token", data.token);
      }
      // if you want to redirect to login after signup:
      navigate("/login");
    } catch (err) {
      console.log("Signup error (frontend):", err);

      // robustly extract message string from possible thunk rejections
      const message =
        (typeof err === "string" && err) ||
        err?.payload?.message ||
        err?.payload ||
        err?.message ||
        "Signup failed";

      // CHANGED: merge field errors instead of overwriting all (keeps other field messages)
      if (message.toLowerCase().includes("email")) {
        setFieldErrors((prev) => ({ ...prev, email: message }));
      } else if (message.toLowerCase().includes("username")) {
        setFieldErrors((prev) => ({ ...prev, username: message }));
      } else {
        setFieldErrors((prev) => ({ ...prev, general: message }));
      }
    }
  };

  const PopupError = ({ message }) => (
    <div className="bg-red-500 text-white text-xs px-2 py-1 rounded mb-1 absolute -mt-6 left-0 z-10">
      {message}
    </div>
  );
return (
   <div className="min-h-screen bg-[#e0b9ab] flex justify-center items-center px-4 py-8">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md text-center relative">
        <img src="/images/bismillah.png" alt="Bismillah" className="w-[300px] h-auto mx-auto mb-4" />
        <img src="/images/loginq.png" alt="Login top" className="w-[250px] h-auto mx-auto mb-2" />
        <h1 className="text-pink-900 text-2xl font-bold mb-6">NABA-AL-JANNAH</h1>

        <form onSubmit={handleSubmit} className="relative">
          <div className="relative mb-6">
            {fieldErrors.username && <PopupError message={fieldErrors.username} />}
            <input
              name="username"
              placeholder="Username"
              value={form.username}
              onChange={handleChange}
              className={`block w-full bg-[#f8f4f4] text-black placeholder-[#C48E84] border-pink-900 border p-2 rounded focus:outline-none focus:ring-1 focus:ring-pink-900 ${fieldErrors.username ? "border-2 border-red-500" : ""}`}
              aria-invalid={!!fieldErrors.username}
              aria-describedby={fieldErrors.username ? "username-error" : undefined}
            />
          </div>

          <div className="relative mb-6">
            {fieldErrors.email && <PopupError message={fieldErrors.email} />}
            <input
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className={`block w-full bg-[#f8f4f4] text-black placeholder-[#C48E84] border-pink-900 border p-2 rounded focus:outline-none focus:ring-1 focus:ring-pink-900 ${fieldErrors.email ? "border-2 border-red-500" : ""}`}
              aria-invalid={!!fieldErrors.email}
              aria-describedby={fieldErrors.email ? "email-error" : undefined}
            />
          </div>

          <div className="relative mb-6">
            {fieldErrors.password && <PopupError message={fieldErrors.password} />}
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className={`block w-full bg-[#f8f4f4] text-black placeholder-[#C48E84] border-pink-900 border p-2 rounded focus:outline-none focus:ring-1 focus:ring-pink-900 ${fieldErrors.password ? "border-2 border-red-500" : ""}`}
              aria-invalid={!!fieldErrors.password}
              aria-describedby={fieldErrors.password ? "password-error" : undefined}
            />
          </div>

          <div className="relative mb-6">
            {fieldErrors.confirmPassword && <PopupError message={fieldErrors.confirmPassword} />}
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
              className={`block w-full bg-[#f8f4f4] text-black placeholder-[#C48E84] border-pink-900 border p-2 rounded focus:outline-none focus:ring-1 focus:ring-pink-900 ${fieldErrors.confirmPassword ? "border-2 border-red-500" : ""}`}
              aria-invalid={!!fieldErrors.confirmPassword}
              aria-describedby={fieldErrors.confirmPassword ? "confirmPassword-error" : undefined}
            />
          </div>

          {fieldErrors.general && <p className="text-red-500 mb-4">{fieldErrors.general}</p>}

          <button
            type="submit"
            className="bg-pink-900 text-white rounded px-4 py-2 w-full font-semibold hover:bg-pink-700 transition"
            disabled={loading}
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>

          {user && <p className="text-green-600 mt-2">Signup successful!</p>}
        </form>

        <p className="text-sm text-center mt-4 text-pink-900">
          Already have an account?{" "}
          <Link to="/login" className="text-pink-900 font-semibold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
);
};

export default SignupForm;
