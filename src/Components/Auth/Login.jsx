import React, { useState } from "react";
import {FcGoogle} from "react-icons/fc"
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <form className="bg-white px-10 py-6 rounded-3xl border-2 border-gray-100 shadow-lg">
          <h1 className="text-4xl text-center font-semibold ">Welcome Back</h1>
          <p className="font-medium text-md text-gray-500 mt-4">
            Welcome back! Please enter your details
          </p>
          <div className="mt-8">
            <label className="text-lg font-medium" htmlFor="email">
              Email:
            </label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              type="email"
              id="email"
              placeholder="Enter your email address"
              value={email}
              required
              onChange={handleEmailChange}
            />
          </div>
          <div className="">
            <label className="text-lg font-medium" htmlFor="password">
              Password:
            </label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
              type="password"
              id="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="mt-8 gap-x-4 flex justify-between items-center">
            <div className="">
              <input type="checkbox" id="remember" />
              <label className="ml-2 font-medium text-base" for="remember">
                Remember for 30 days
              </label>
            </div>
            <button className="font-medium text-base text-violet-500 ">
              Forgot password
            </button>
          </div>

          <div className="mt-8 flex flex-col gap-y-4 ">
            <button className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-violet-500 text-white txt-lg font-bold">Sign in</button>
            <button className="flex py-3 rounded-xl border-2 border-gray-100 justify-center items-center gap-2 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all">
             <FcGoogle />Sign in with Google
            </button>
          </div>
        </form>
      </div>
      <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200">
        <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-pulse">
          <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg " />
        </div>
      </div>
    </div>
  );
};

export default Login;
