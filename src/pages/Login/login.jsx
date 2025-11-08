import React from 'react'
import LoginForm from '../../components/Forms/login/login'

const LoginPage = () => {
  return (
    <>
     <div className='bg-[#C48E84]'>

    <div className="flex h-screen space-x-5">
      {/* Left side – Login Form */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-6">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
            Welcome Back 👋
          </h1>
       <LoginForm/>
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

export default LoginPage