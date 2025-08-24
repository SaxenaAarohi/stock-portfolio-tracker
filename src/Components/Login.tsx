"use client";

import { useState } from "react";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600">
      <div className="bg-white/10 backdrop-blur-md shadow-xl rounded-3xl p-8 w-full max-w-md">
        {/* Title */}
        <h2 className="text-3xl font-bold text-white text-center mb-6 tracking-wide">
          {isLogin ? "Welcome Back 👋" : "Create an Account 🚀"}
        </h2>

        <form className="space-y-6">
          {/* Name field (only in Sign Up) */}
          {!isLogin && (
            <div className="relative">
              <input
                type="text"
                id="name"
                className="peer w-full px-4 pt-5 pb-2 rounded-lg bg-white/20 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Name"
              />
              <label
                htmlFor="name"
                className="absolute left-4 top-2 text-gray-200 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-yellow-300"
              >
                Name
              </label>
            </div>
          )}

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              id="email"
              className="peer w-full px-4 pt-5 pb-2 rounded-lg bg-white/20 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Email"
            />
            <label
              htmlFor="email"
              className="absolute left-4 top-2 text-gray-200 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-yellow-300"
            >
              Email
            </label>
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type="password"
              id="password"
              className="peer w-full px-4 pt-5 pb-2 rounded-lg bg-white/20 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Password"
            />
            <label
              htmlFor="password"
              className="absolute left-4 top-2 text-gray-200 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-yellow-300"
            >
              Password
            </label>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-xl transition shadow-md"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        {/* Switch form */}
        <p className="text-center text-sm mt-6 text-gray-200">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-yellow-300 hover:underline"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}
