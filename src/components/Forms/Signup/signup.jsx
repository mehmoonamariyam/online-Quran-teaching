import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SignupUser } from '../../../store/slice/FormSlices/signup';

const SignupForm = () => {

    const dispatch = useDispatch();
    const {user, loading, error} = useSelector((state)=> state.signup);
    const [form, setForm] = useState({name: "", password: "", email:""});


    const SubmitChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(SignupUser(form));
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
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={SubmitChange}
          className=" text-pink-400 block w-full mb-3 p-2 border rounded"
        />

        {/* Email here */}
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={SubmitChange}
          className=" text-pink-400 block w-full mb-3 p-2 border rounded"
        />

        {/* password here */}
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={SubmitChange}
          className="text-pink-400 block w-full mb-3 p-2 border rounded"
        />


{/* Submit Button */}
        <button
          type="submit"
          className="bg-pink-950 text-white rounded px-4 py-2 w-full"
          disabled={loading}
        >
          {loading ? "Signing up..." : "Sign Up"}
        </button>
      </form>

      {error && <p className="text-red-500 mt-2">Error: {error}</p>}
      {user && <p className="text-green-600 mt-2">Signup successful!</p>}
    </div>
   </>
  )
}

export default SignupForm