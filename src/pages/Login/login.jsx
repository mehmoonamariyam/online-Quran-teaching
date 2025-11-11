import React from "react";
import LoginForm from "../../components/Forms/login/login";

const LoginPage = () => {
  return (
    <div className="relative min-h-screen m-0 p-0 overflow-hidden">
      {/* Background */}
      <img
        src="/images/designnn.jpg"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-pink-200 opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row min-h-screen items-start md:items-center justify-center px-6">
        
        {/* Left side – Login Form */}
        <div className="flex flex-col justify-start md:justify-center items-center w-full md:w-1/2 mt-8 mb-10">
          <div className="w-full max-w-md mt-6 md:mt-0">
            <h1 className="text-3xl font-bold text-center mb-6 text-pink-950">
              Welcome Back 👋
            </h1>
            <LoginForm />
          </div>
        </div>

        {/* Right side – Image */}
        <div className="hidden md:flex w-1/2 justify-center items-center">
          <img
            src="/images/logins.png"
            alt="Login illustration"
            className="max-w-sm object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
