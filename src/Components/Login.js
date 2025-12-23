import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { setLogin } from '../Action';

function Login() {
  const nav = useNavigate();

async  function doLogin() {
    const s1 = document.getElementById("Lt1").value;
    const s2 = document.getElementById("Lt2").value;

  await axios
      .post("http://localhost:5000/api/v1/users/login", {
        Email: s1,
        Password: s2
      })
      .then(reply => {
        if (reply.status === 200) {
          if (!reply.data.status) {
            if (document.getElementById("c1").checked) {
              let d = new Date();
              d.setDate(d.getDate() + 7);
            }

            setLogin('Y');

            document.getElementById("Lt1").value = "";
            document.getElementById("Lt2").value = "";

            nav("");
          } else {
            alert("Invalid Login/Password!!!");
            document.getElementById("Lt2").focus();
          }
        }
      })
      .catch(err => {
        console.error(err);
        alert("Server error");
      });
  }

  
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 blur-3xl scale-110"></div>
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 w-[90%] max-w-md rounded-2xl bg-white/20 backdrop-blur-xl shadow-2xl p-8">

        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-white">Welcome Back</h1>
          <p className="text-sm text-white/70 mt-1">Login to your account</p>
        </div>

        <div className="flex flex-col gap-4">
          <input
            id="Lt1"
            type="email"
            placeholder="Email"
            className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white"
          />

          <input
            id="Lt2"
            type="password"
            placeholder="Password"
            className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white"
          />

          <div className="flex items-center justify-between text-sm text-white/70">
            <label className="flex items-center gap-2 cursor-pointer">
              <input id="c1" type="checkbox" className="accent-white" />
              Remember me
            </label>
            <span className="cursor-pointer hover:underline">
              Forgot password?
            </span>
          </div>

          <button
            type="button"
            className="mt-2 w-full rounded-lg bg-white text-indigo-600 font-semibold py-3 hover:bg-white/90 transition"
            onClick={doLogin}
          >
            Login
          </button>
        </div>

        <p className="text-center text-sm text-white/70 mt-6">
          Don't have an account?
          <Link to="/register">
            <span className="text-white font-medium cursor-pointer hover:underline ml-1">
              Register
            </span>
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Login;
