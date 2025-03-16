import React from "react";
import { Link} from "react-router-dom";
import { useState ,useContext} from "react";
import {UserDataContext} from '../context/UserContext'
import { useNavigate } from "react-router-dom";
import axios from "axios";


function  Userlogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const [user,setUser] = useContext(UserDataContext);
  const navigate = useNavigate();

  const handleSubmit =  async(e) => {
    e.preventDefault();
    const userData ={
      email:email,
      password:password
    }


const Response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`,userData);
    if(Response.status === 200){
      const data = Response.data;
      localStorage.setItem('token',data.token);
      setUser(data.user);
      navigate('/home');
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-10 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-10 mt-5 ml-5"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s"
          alt=""
        />
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className="bg-white p-5 rounded-lg"
        >
          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            type="email"
            placeholder="example@gmail.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
          />

          <h3 className="text-lg font-medium mb-2">Password</h3>
          <input
            type="text"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base"
          />

          <button
            type="submit"
            className="bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base"
          >
            Login
          </button>
        </form>
        <p className="text-center">
          New here?{" "}
          <Link to="/usersignup" className="text-blue-600">
            Create new Account
          </Link>
        </p>
      </div>
      <div>
        <Link
          to="/captain-login"
          className="bg-[#10b461] flex items-center justify-center text-white font-semibold mb-5 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base"
        >
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
}
export default Userlogin;
