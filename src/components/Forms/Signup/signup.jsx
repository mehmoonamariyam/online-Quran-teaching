import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SignupUser } from "../../../store/slice/FormSlices/signup";
import { Link, useNavigate } from "react-router-dom";

const SignupForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, loading, error } = useSelector((state) => state.signup);

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [fieldErrors, setFieldErrors] = useState({});

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = {};

    if (!form.username.trim()) errors.username = "Username is required";
    if (!form.email.trim()) errors.email = "Email is required";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errors.email = "Invalid email address";
    if (!form.password.trim()) errors.password = "Password is required";
    if (!form.confirmPassword.trim())
      errors.confirmPassword = "Confirm password is required";
    if (
      form.password &&
      form.confirmPassword &&
      form.password !== form.confirmPassword
    )
      errors.confirmPassword = "Passwords do not match";

    setFieldErrors(errors);

    if (Object.keys(errors).length > 0) return;

    try {
      const data = await dispatch(
        SignupUser({
          username: form.username,
          email: form.email,
          password: form.password,
        })
      ).unwrap();

      localStorage.setItem("token", data.token);
      navigate("/login");
    } catch (err) {
      console.log("Signup error (frontend):", err);

      // extract message from possible locations
      const message =
        (typeof err === "string" && err) ||
        err?.payload?.message ||
        err?.payload ||
        err?.message ||
        "Signup failed";

      // Map message to the specific field
      if (message.toLowerCase().includes("email")) {
        setFieldErrors({ email: message });
      } else if (message.toLowerCase().includes("username")) {
        setFieldErrors({ username: message });
      } else {
        setFieldErrors({ general: message });
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
      <img
        src="/images/bismillah.png"
        alt="Bismillah"
        className="w-[300px] h-auto mx-auto mb-4"
      />
      <img
        src="/images/loginq.png"
        alt="Login top"
        className="w-[250px] h-auto mx-auto mb-2"
      />
      <h1 className="text-pink-900 text-2xl font-bold mb-6">NABA-AL-JANNAH</h1>

      <form onSubmit={handleSubmit} className="relative">
        <div className="relative mb-6">
          {fieldErrors.username && <PopupError message={fieldErrors.username} />}
          <input
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            className="block w-full bg-[#f8f4f4] text-black placeholder-[#C48E84] border-pink-900 border p-2 rounded focus:outline-none focus:ring-1 focus:ring-pink-900"
          />
        </div>

        <div className="relative mb-6">
          {fieldErrors.email && <PopupError message={fieldErrors.email} />}
          <input
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="block w-full bg-[#f8f4f4] text-black placeholder-[#C48E84] border-pink-900 border p-2 rounded focus:outline-none focus:ring-1 focus:ring-pink-900"
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
            className="block w-full bg-[#f8f4f4] text-black placeholder-[#C48E84] border-pink-900 border p-2 rounded focus:outline-none focus:ring-1 focus:ring-pink-900"
          />
        </div>

        <div className="relative mb-6">
          {fieldErrors.confirmPassword && (
            <PopupError message={fieldErrors.confirmPassword} />
          )}
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
            className="block w-full bg-[#f8f4f4] text-black placeholder-[#C48E84] border-pink-900 border p-2 rounded focus:outline-none focus:ring-1 focus:ring-pink-900"
          />
        </div>

        {fieldErrors.general && (
          <p className="text-red-500 mb-4">{fieldErrors.general}</p>
        )}

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
        <Link
          to="/login"
          className="text-pink-900 font-semibold hover:underline"
        >
          Login
        </Link>
      </p>
    </div>
  </div>
);
};

export default SignupForm;
