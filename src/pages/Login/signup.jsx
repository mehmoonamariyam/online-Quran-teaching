import React from 'react'
import SignupForm from '../../components/Forms/Signup/signup'

const SignupPage = () => {
  return (
    <>
      <div className="relative min-h-screen m-0 p-0 overflow-hidden">
        {/* Background Image */}
        <img
          src="/images/designnn.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Light pink overlay */}
        <div className="absolute inset-0 bg-pink-200 opacity-30"></div>

        {/* Content */}
        <div className="relative flex flex-col md:flex-row space-x-5 min-h-screen items-start md:items-center justify-center gap-10">
          
          {/* ✅ Left side – Image */}
          <div className="hidden md:flex w-1/3 justify-center items-center">
            <img
              src="/images/flip.png"
              alt="Login illustration"
              className="max-w-sm object-contain"
            />
          </div>

          {/* ✅ Right side – Signup Form */}
          <div className="flex flex-col justify-start md:justify-center items-center w-full md:w-1/2 mt-8 mb-10">
            <div className="w-full max-w-md mt-6 md:mt-0">
              <h1 className="text-2xl font-bold text-center mb-6 text-pink-950">
                “Welcome to your learning journey!”
              </h1>
              <SignupForm />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignupPage
