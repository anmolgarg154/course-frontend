import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">

      {/* Blurred Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 blur-3xl scale-110"></div>
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Login Card */}
      <div className="relative z-10 w-[90%] max-w-md rounded-2xl bg-white/20 backdrop-blur-xl shadow-2xl p-8">

        {/* Heading */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-white">Welcome Back</h1>
          <p className="text-sm text-white/70 mt-1">
            Login to your account
          </p>
        </div>

        {/* Form UI */}
        <div className="flex flex-col gap-4">

          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
          />

          {/* Remember / Forgot */}
          <div className="flex items-center justify-between text-sm text-white/70">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="accent-white" />
              Remember me
            </label>
            <span className="cursor-pointer hover:underline">
              Forgot password?
            </span>
          </div>

          <button
            type="submit"
            className="mt-2 w-full rounded-lg bg-white text-indigo-600 font-semibold py-3 hover:bg-white/90 transition"
          >
            Login
          </button>

        </div>

        {/* Footer */}
        <p className="text-center text-sm text-white/70 mt-6">
          Don’t have an account?
         <Link to="/register">
          <span className="text-white font-medium cursor-pointer hover:underline ml-1">
            Register
          </span>
         </Link>
        </p>

      </div>
    </div>
  )
}

export default Login
