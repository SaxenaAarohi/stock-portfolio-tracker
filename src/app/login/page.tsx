"use client";
import { useState } from "react";

export default function AuthPage() {

  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex items-center justify-center min-h-screen  px-4">
      <div className="bg-gray-900/70  shadow-2xl rounded-2xl p-8 w-100">

        <h2 className="text-3xl font-extrabold text-green-400 text-center mb-8">
          {isLogin ? "Welcome Back " : "Create Account "}
        </h2>

        <form className="space-y-6">
          {!isLogin && (
            <div className="relative">
              <input
                type="text"
                id="name"
                className="peer w-full px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Name"
              />
              <label
                htmlFor="name"
                className="absolute left-4 top-2 text-sm text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-green-400"
              >
                Name
              </label>
            </div>
          )}

          <div className="relative">
            <input
              type="email"
              id="email"
              className="peer w-full px-4 pt-5 pb-2 rounded-lg bg-gray-800 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Email"
            />
            <label
              htmlFor="email"
              className="absolute left-4 top-2 text-sm text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-green-400"
            >
              Email
            </label>
          </div>

          <div className="relative">
            <input
              type="password"
              id="password"
              className="peer w-full px-4 pt-5 pb-2 rounded-lg bg-gray-800 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Password"
            />
            <label
              htmlFor="password"
              className="absolute left-4 top-2 text-sm text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-green-400"
            >
              Password
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold py-3 rounded-xl transition duration-200 shadow-md"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className="text-center text-sm mt-6 text-gray-400">
          {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-green-400 font-medium hover:underline"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}
