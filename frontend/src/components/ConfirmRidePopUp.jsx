import React, { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

function ConfirmRidePopUp(props) {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/ride/start-ride`,
      {
        params: {
          rideId: props.ride._id,
          otp: otp,
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    if (response.status === 200) {
      console.log("i am here ")
      
      navigate('/captain-riding', { state: { ride: props.ride } })
    }
  };
  return (
    <div className="h-[95%]">
      <h5
        className="p-3 text-center absolute top-0 w-[93%]"
        onClick={() => {
          props.setConfirmRidePopUpPanel(false);
        }}
      >
        <i className=" text-3xl text-gray-300 ri-arrow-down-wide-line"></i>
      </h5>

      <h2 className="text-2xl font-semibold mb-5">
        Confirm this ride to Start
      </h2>
      <div className="flex items-center justify-between bg-yellow-400 p-4 rounded-xl mt-4">
        <div className="flex items-center gap-3 ">
          <img
            className="h-10 w-12 rounded-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
            alt=""
          />
          <h2 className="text-xl font-medium">
            {props.ride?.user.fullname.firstname +
              " " +
              props.ride?.user.fullname.lastname}
          </h2>
        </div>
        <h5 className="text-lg font-semibold">2.2km</h5>
      </div>

      <div className=" flex gap-2 justify-between flex-col items-center">
        <div className="w-full mt-5">
          <div className=" flex items-center gap-5 p-3 border-b-2 ">
            <i className=" text-lg ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className=" text-base -mt-1 text-gray-400">
                {props.ride?.pickup}
              </p>
            </div>
          </div>

          <div className=" flex items-center gap-5 p-3 border-b-2">
            <i className=" text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className=" text-base -mt-1 text-gray-400">
                {props.ride?.destination}
              </p>
            </div>
          </div>

          <div className=" flex items-center gap-5 p-3 border-b-2">
            <i className=" text-lg ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">₹{props.ride?.fare}</h3>
              <p className=" text-base -mt-1 text-gray-400">Cash Cash</p>
            </div>
          </div>
        </div>

        <div className="mt-6 w-full">
          <form onSubmit={submitHandler}>
            <input
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              type="text"
              className="bg-[#eee] px-6 py-4 font-mono text-lg rounded-lg w-full mt-3"
              placeholder="Enter OTP"
            />

            <button
              type="submit"
              className="w-full mt-5 text-lg flex justify-center bg-green-600 text-white font-semibold p-3 rounded-lg"
            >
              Confirm
            </button>
            <button
              onClick={() => {
                props.setConfirmRidePopupPanel(false);
                props.setRidePopupPanel(false);
              }}
              className="w-full mt-2 bg-red-600 text-lg text-white font-semibold p-3 rounded-lg"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default ConfirmRidePopUp;
