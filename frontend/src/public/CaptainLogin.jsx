import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { CaptainDataContext } from "../context/CaptainContext";

function CaptainLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { captain, setCaptain } = useContext(CaptainDataContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const credentials = { email, password };
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, credentials);
    if (response.status === 200) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem('token', data.token);
      navigate('/captain-home');
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-300  to-white">
      <div className="relative z-10 bg-white bg-opacity-95 p-10 rounded-xl shadow-2xl max-w-md w-full">
        <div className="text-center mb-8">
          <img className="w-20 mx-auto mb-4" src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="Driver Logo" />
          <h2 className="text-2xl font-bold">Login as Captain</h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-lg font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="captain@example.com"
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
          <button type="submit" className="w-full bg-black text-white font-semibold rounded-lg px-4 py-2 text-lg hover:bg-gray-800 transition">
            Login
          </button>
        </form>
        <p className="text-center mt-4">
          Join a fleet? <Link to="/captain-signup" className="text-blue-600 hover:underline">Register as a Captain</Link>
        </p>
        <div className="mt-6">
          <Link to="/userlogin" className="w-full block text-center bg-orange-500 text-white font-semibold rounded-lg px-4 py-2 text-lg hover:bg-orange-400 transition">
            Sign in as User
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CaptainLogin;