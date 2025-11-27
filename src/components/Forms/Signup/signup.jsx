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

  const [formError, setFormError] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.username || !form.email || !form.password || !form.confirmPassword) {
      setFormError("All fields are required");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setFormError("Passwords do not match");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setFormError("Invalid email address");
      return;
    }

    setFormError("");

    try {
      const data = await dispatch(
        SignupUser({
          username: form.username,
          email: form.email,
          password: form.password,
        })
      ).unwrap();
      console.log(data);

      localStorage.setItem("token", data.token);

      navigate("/login");
    } catch (err) {
      const message = typeof err === 'string' ? err : (err?.message || String(err));
  setFormError(message);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-[#e0b9ab] flex justify-center items-center px-4 py-8">
        <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md text-center">
          {/* Top Images */}
          <div>
            <img
              src="/images/bismillah.png"
              alt="Bismillah"
              className="w-[300px] h-auto mx-auto mb-4"
            />
          </div>

          <div className="flex flex-col items-center mb-6">
            <img
              src="/images/loginq.png"
              alt="Login top"
              className="w-[250px] h-auto mx-auto"
            />
            <h1 className="text-pink-900 text-2xl font-bold mt-3">
              NABA-AL-JANNAH
            </h1>
          </div>

          {/* Signup Form */}
          <form onSubmit={handleSubmit}>
            <input
              name="username"
              placeholder="Username"
              value={form.username}
              onChange={handleChange}
              className="block w-full mb-4 bg-[#f8f4f4] text-black placeholder-[#C48E84] border-pink-900 border p-2 rounded focus:outline-none focus:ring-1 focus:ring-pink-900"
            />
            <input
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="block w-full mb-4 bg-[#f8f4f4] text-black placeholder-[#C48E84] border-pink-900 border p-2 rounded focus:outline-none focus:ring-1 focus:ring-pink-900"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="block w-full mb-4 bg-[#f8f4f4] text-black placeholder-[#C48E84] border-pink-900 border p-2 rounded focus:outline-none focus:ring-1 focus:ring-pink-900"
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
              className="block w-full mb-4 bg-[#f8f4f4] text-black placeholder-[#C48E84] border-pink-900 border p-2 rounded focus:outline-none focus:ring-1 focus:ring-pink-900"
            />

            {(formError || error) && (
              <p className="text-red-500 mt-2">
                {formError || (typeof error === 'string' ? error : error?.message || 'Signup failed')}
              </p>
            )}


            <button
              type="submit"
              className="bg-pink-900 text-white rounded px-4 py-2 w-full font-semibold hover:bg-pink-700 transition"
              disabled={loading}
            >
              {loading ? "Signing up..." : "Sign Up"}
            </button>

            {user && (
              <p className="text-green-600 mt-2">Signup successful!</p>
            )}
          </form>

          {/* Footer Text */}
          <p className="text-sm text-center mt-4 text-pink-900">
            Already have an account?{" "}
            <Link to="/login" className="text-pink-900 font-semibold hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
