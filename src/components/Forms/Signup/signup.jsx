import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SignupUser } from '../../../store/slice/FormSlices/signup';
import { Link, useNavigate } from 'react-router-dom';

const SignupForm = () => {
 const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, loading, error } = useSelector((state) => state.signup);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [formError, setFormError] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (
      !form.name ||
      !form.email ||
      !form.password ||
      !form.confirmPassword
    ) {
      setFormError("All fields are required");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setFormError("Passwords do not match");
      return;
    }

    setFormError("");

    try {
      await dispatch(
        SignupUser ({
          Name: form.name,
          email: form.email,
          password: form.password,
        })
      ).unwrap();

      // Navigate to login page after signup
      navigate("/signin");
    } catch (err) {
      setFormError(err || "Signup failed");
    }
  };

  return (
    <>
    <div className="min-h-screen bg-[#e0b9ab] flex justify-center items-center px-4 py-8">
  <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
      <div className="p-0 bg-white rounded-xl max-w-sm mx-auto mt-0">

      <div> <img src="/images/bismillah.png" alt="Logintop"
          className="w-[400px] h-[90px] items-center pl-6.5" /></div>

          <div> <img src="/images/loginq.png" alt="Logintop"
          className="w-[350px] h-[150px] items-center pl-8.5" />
          <h1 className="text-pink-900 text-2xl font-bold pl-10.5 py-0 pt-0 pb-5">NABA-AL-JANNAH</h1></div>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={form.firstName}
          onChange={handleChange}
         className="block w-full mb-4 p-0.5 bg-[#f8f4f4] text-black placeholder-[#C48E84] border-none p-2 rounded focus: outline-none focus: ring-2 focus: ring-white"
        />
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
         className="block w-full mb-4 p-0.5 bg-[#f8f4f4] text-black placeholder-[#C48E84] border-none p-2 rounded focus: outline-none focus: ring-2 focus: ring-white"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
 className="block w-full mb-4 p-0.5 bg-[#f8f4f4] text-black placeholder-[#C48E84] border-none p-2 rounded focus: outline-none focus: ring-2 focus: ring-white"
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={handleChange}
 className="block w-full mb-4 p-0.5 bg-[#f8f4f4] text-black placeholder-[#C48E84] border-none p-2 rounded focus: outline-none focus: ring-2 focus: ring-white"
        />

{(formError || error) && (
  <p className="text-red-500 mt-2">{formError || error}</p>
)}
        <button
          type="submit"
          className="bg-pink-950 text-white rounded px-4 py-2 w-full"
          disabled={loading}
        >
          {loading ? "Signing up..." : "Sign Up"}
        </button>

        {/* Validation and API errors */}
        {formError && <p className="text-red-500 mt-2">{formError}</p>}
        {error && <p className="text-red-500 mt-2">{error}</p>}
        {user && <p className="text-green-600 mt-2">Signup successful!</p>}
      </form>
    </div>
    </div>
    </div>
    </>
  )
}

export default SignupForm