import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser} from '../../../store/slice/FormSlices/login';
import { Link, useNavigate} from 'react-router-dom';

const LoginForm = () => {
    const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, loading, error } = useSelector((state) => state.login || state);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (user) {
      setUsername("");
      setPassword("");
      // Navigate to course page after successful login
      navigate("/logcourse");
    }
  }, [user, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ username, password }));
  };
  return (
 <>
  <div className="min-h-screen bg-[#e0b9ab] flex justify-center items-center px-4 py-8">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        {/* Images */}
        <img
          src="/images/bismillah.png"
          alt="Bismillah"
          className="w-full max-w-[400px] h-auto mx-auto mb-4"
        />
        <img
          src="/images/loginq.png"
          alt="Login Illustration"
          className="w-full max-w-[350px] h-auto mx-auto mb-4"
        />

        <h1 className="text-pink-950 text-3xl font-bold text-center mb-6">
          NABA-AL-JANNAH
        </h1>

    {/* Form */}
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Enter your username"
        className="w-full p-2 border rounded text-black placeholder-[#C48E84] focus:outline-none focus:ring-1 focus:ring-pink-950"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        disabled={loading}
      />
      <input
        type="password"
        placeholder="Enter your password"
        className="w-full p-2 border rounded text-[#000000] placeholder-[#C48E84] focus:outline-none focus:ring-1 focus:ring-pink-950"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        disabled={loading}
      />
      <button
        type="submit"
        className={`w-full py-2 rounded text-white font-bold transition ${
          loading ? "bg-pink-300 cursor-not-allowed" : "bg-pink-900 hover:bg-pink-700"
        }`}
        disabled={loading}
      >
        {loading ? "Logging in..." : "Login"}
      </button>
    </form>

        <p className="text-sm text-center mt-4">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-pink-950 hover:underline">
            Signup
          </Link></p>

           <p className="text-sm text-center mt-4">
          Don’t have an account?{" "}
          <Link to="/enroll" className="text-pink-950 hover:underline">
            Enroll-Now
          </Link>
        </p>
      </div>
    </div>

    </>
  )
}

export default LoginForm