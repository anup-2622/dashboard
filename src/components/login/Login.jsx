import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import "./login.css";

const Login = () => {
  return (
    <div className=" sm:h-screen  flex justify-center items-center bg-gray-200">
      <div className=" sm:h-85 sm:w-2/5 md:w-fit border-gray-500">
        <h1 className="text-3xl font-bold m-2 text-center sm:text-left ">
          Sign In{" "}
        </h1>
        <p className="m-2 text-center sm:text-left ">
          Sign in to your account{" "}
        </p>
        <div className=" flex justify-between  mb-3 ">
          <div className="auth ">
            <FcGoogle className="m-2" />
            <button className="">Sign in with Google</button>
          </div>
          <div className="auth">
            <FaApple className="m-2" />
            <button className="">Sign in with Apple </button>
          </div>
        </div>

        <div className="border  flex flex-col justify-center items-center rounded-2xl p-3 w-60~~  bg-white">
          <div class="flex flex-col-reverse mb-4">
            <input
              type="email"
              name="email"
              id="form3Example3"
              class="bg-gray-200 rounded-md w-80 h-9 p-3 mt-1"
              placeholder="Johndoe@gmail.com"
            />
            <label className="text-md " for="form3Example3">
              Email address
            </label>
          </div>
          <div class="flex flex-col-reverse  mb-4">
            <input
              type="password"
              name="password"
              id="form3Example4"
              class="bg-gray-200 rounded-md w-80 h-9 p-3 mt-1"
              placeholder="***********"
            />
            <label className="text-md" for="form3Example4">
              Password
            </label>
          </div>
          <a href="" className="text-sm text-blue-500 ">
            Forget password?
          </a>
          <div className="btn">
            <button className="bg-black text-white rounded-md w-80 h-9 font-semibold mt-2 mb-2">
              Sign in
            </button>
          </div>
        </div>
        <p className="text-gray-400 text-center mt-3">
          Don't have an account?{" "}
          <a href="" className="text-blue-500">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
