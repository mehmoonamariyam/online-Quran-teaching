import React from 'react'
import LoginForm from '../../components/Forms/login/login'

const LoginPage = () => {
  return (
    <>
 <div className="relative min-h-screen">
  <img
    src="/images/designnn.jpg"
    alt="background"
    className="absolute inset-0 w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-pink-200 opacity-30"></div>
  
  <div className="relative z-10">
  <div className="flex space-x-5">
    {/* Left side – Login Form */}
    <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-6">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-pink-950 pt-30">
          Welcome Back 👋
        </h1>
        <LoginForm/>
      </div>
    </div>

    {/* Right side – Image */}
    <div className="hidden md:flex w-1/3 justify-end items-center">
  <img
    src="/images/logins.png"
    alt="Login illustration"
    className="w-auto max-h-1/1 object-contain"
  />
</div>
  </div>
</div>
</div>
    </>
  )
}

export default LoginPage