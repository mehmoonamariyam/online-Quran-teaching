import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SignupUser } from '../../../store/slice/FormSlices/signup';
import { Link } from 'react-router-dom';

const SignupForm = () => {

  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.signup);
  const [form, setForm] = useState({ firstname: "", lastname: "", age: "" });
  const [formError, setFormError] = useState("");


  const SubmitChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation
    if (!form.firstname || !form.lastname || !form.age) {
      setFormError("All fields are required.");
      return;
    }
    // if (!form.name || !form.email || !form.password || !form.confirmPassword) {
    //   setFormError("All fields are required.");
    //   return;
    // }

    // if (form.password !== form.confirmPassword) {
    //   setFormError("Passwords do not match.");
    //   return;
    // }

    setFormError("");
    dispatch(SignupUser({ firstname: form.firstname, lastname: form.lastname, age: form.age }));
  };

  return (
    <>
      <div className="p-6 bg-white rounded-xl max-w-sm mx-auto mt-8">
        <h2 className="text-pink-900 text-xl font-bold mb-4 pl-30">Sign Up here</h2>
        <div> <img src="/images/bismillah.png" alt="Logintop"
          className="w-[400px] h-[90px] items-center pl-6.5" /></div>

        <div> <img src="/images/loginq.png" alt="Logintop"
          className="w-[350px] h-[150px] items-center pl-8.5" />
          <h1 className="text-pink-950 text-3xl font-bold pl-10.5 py-0 pt-0 pb-10">NABA-AL-JANNAH</h1></div>

        <form onSubmit={handleSubmit}>

          {/* Name here */}
          <input
            name="firstname"
            placeholder="Name"
            value={form.name}
            onChange={SubmitChange}
            className=" text-pink-400 block w-full mb-3 p-2 border rounded"
          />

          {/* Email here */}
          <input
            name="lastname"
            placeholder="Last Name"
            value={form.lastname}
            onChange={SubmitChange}
            className=" text-pink-400 block w-full mb-3 p-2 border rounded"
          />

          <input
            name="age"
            placeholder="Enter Age"
            value={form.age}
            onChange={SubmitChange}
            className=" text-pink-400 block w-full mb-3 p-2 border rounded"
          />


          {/* password here */}
          {/* <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={SubmitChange}
          className="text-pink-400 block w-full mb-3 p-2 border rounded"
        /> */}
          {/* Confirm Password */}
          {/* <input
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={SubmitChange}
          className="block w-full mb-3 p-2 border rounded"
        /> */}

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-pink-950 text-white rounded px-4 py-2 w-full"
            disabled={loading}
          >
            <Link to="/signin">
              {loading ? "Signing up..." : "Sign Up"}</Link>
          </button>


          {/* Form validation error */}
          {formError && <p className="text-red-500 mt-2">{formError}</p>}
        </form>

        {error && <p className="text-red-500 mt-2">Error: {error}</p>}
        {user && <p className="text-green-600 mt-2">Signup successful!</p>}
      </div>
    </>
  )
}

export default SignupForm