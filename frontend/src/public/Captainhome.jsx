import React from "react";
import { Link } from "react-router-dom";
import CaptainDetail from "../components/CaptainDetail";
function Captainhome() {
  return (
    <div className=" h-screen">
      <div className="fixed p-3 top-3 flex items-center justify-between w-full">
        <img
          className="w-16"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <Link
          to="/home"
          className="h-10 flex rounded-full  w-10 bg-white items-center justify-center"
        >
          <i className=" text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className="h-3/5">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className="h-2/5 p-6">
        <CaptainDetail />
      </div>
    </div>
  );
}

export default Captainhome;
 