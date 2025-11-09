import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser} from '../../../store/slice/FormSlices/login';
import { Link } from 'react-router-dom';

const LoginForm = () => {
    const dispatch = useDispatch();
    const { user, loading, error } = useSelector((state) => state.login || state);
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    useEffect(()=>{
         if (user) {
      setUsername("");
      setPassword("");
    }
    },[user]
    );
    const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ username, password }));
  };
  return (
 <>
    <div className="flex justify-center items-center  bg-[#ffe7d2] px-4">

      <div className="bg-[#ffe7d2] shadow-md rounded-lg p-8 w-full max-w-md">

        {/* intro portion */}

        <div> <img src="/images/bismillah.png" alt="Logintop"
          className="w-[400px] h-[90px] items-center pl-6.5" /></div>

          <div> <img src="/images/loginq.png" alt="Logintop"
          className="w-[350px] h-[150px] items-center pl-8.5" />
          <h1 className="text-pink-950 text-3xl font-bold pl-10.5 py-0 pt-0">NABA-AL-JANNAH</h1></div>


        {/* <h2 className="text-2xl font-bold text-center mb-6 text-gray-700"></h2> */}

        {user ? (
          <div className="text-center mb-4">
            <p className="text-green-600 font-semibold">Welcome back, {user.firstName || user.name || user.username || user.email}!</p>
            <p className="text-sm text-gray-600 mt-1">{user.email}</p>
          </div>
        ) : null}

        {error && !user && (
          <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter your username"
            className="bg-[#f8f4f4] text-black placeholder-[#C48E84] border-none p-2 rounded focus:outline-none focus:ring-2 focus: ring-white"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            disabled={loading}
          />
          <input
            type="password"
            placeholder="Enter your password"
            className="bg-[#f8f4f4] text-[#fe4653] placeholder-[#C48E84] border-none p-2 rounded focus:outline-none focus:ring-2 focus:ring-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={loading}
          />
          <button
            type="submit"
            className={`py-2 rounded text-white font-bold transition ${loading ? "bg-blue-300 cursor-not-allowed" : "bg-pink-950 hover:bg-blue-600"}`}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Don’t have an account?{" "}
          <Link to ="/signup" className="text-pink-950 hover:underline">
  Signup
</Link>

        </p>
      </div>
    </div>
    </>
  )
}

export default LoginForm