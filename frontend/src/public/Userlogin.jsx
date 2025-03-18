import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from '../context/UserContext';
import axios from "axios";

function Userlogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useContext(UserDataContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { email, password };
    const Response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData);
    if (Response.status === 200) {
      const data = Response.data;
      localStorage.setItem('token', data.token);
      setUser(data.user);
      navigate('/home');
    }
    setEmail("");
    setPassword("");
  };

  return (
    
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-300  to-white">
      <div className="absolute inset-0 opacity-50"></div>
      <div className="relative z-10 bg-white bg-opacity-95 p-10 rounded-xl shadow-2xl max-w-md w-full">
        <div className="text-center mb-8">
          <img className="w-20 mx-auto mb-4" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="Uber Logo" />
          <h2 className="text-2xl font-bold">Login to RideShare</h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-lg font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-lg font-medium mb-2">Password</label>
            <input
              type="password"
              placeholder="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white font-semibold rounded-lg px-4 py-2 text-lg hover:bg-gray-800 transition"
          >
            Login
          </button>
        </form>
        <p className="text-center mt-4">
          New here? <Link to="/usersignup" className="text-blue-600 hover:underline">Create new Account</Link>
        </p>
        <div className="mt-6">
          <Link to="/captain-login" className="w-full block text-center bg-green-600 text-white font-semibold rounded-lg px-4 py-2 text-lg hover:bg-green-500 transition">
            Sign in as Captain
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Userlogin;
