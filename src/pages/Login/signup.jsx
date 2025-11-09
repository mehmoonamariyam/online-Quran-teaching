import React from 'react'
import SignupForm from '../../components/Forms/Signup/signup'

const SignupPage = () => {
  return (
  <>
  <div className='bg-[#ce9f97] min-h-screen'>

    <div className="flex space-x-5">
      {/* Left side – Login Form */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-6">
        <div className="w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-6 text-pink-950 pt-30">
           “Welcome to your learning journey!”
          </h1>
      <SignupForm/>
        </div>
      </div>

      {/* Right side – Image */}
      <div className="hidden md:flex w-1/2.5 place-items-end">
        <img
          src="/images/logins.png"
          alt="Login illustration"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
    </div>
  </>
  )
}

export default SignupPage