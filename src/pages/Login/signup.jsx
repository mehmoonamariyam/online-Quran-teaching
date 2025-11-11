import React from 'react'
import SignupForm from '../../components/Forms/Signup/signup'

const SignupPage = () => {
  return (
  <>
  <div className="relative min-h-screen">
  {/* Background Image */}
  <img
    src="/images/designnn.jpg"
    alt="Background"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Light pink overlay */}
  <div className="absolute inset-0 bg-pink-200 opacity-30"></div>

  {/* Content */}
  <div className="relative flex space-x-5 min-h-screen">
    {/* Left side – Signup Form */}
    <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-6">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-pink-950 pt-30">
          “Welcome to your learning journey!”
        </h1>
        <SignupForm />
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

  </>
  )
}

export default SignupPage