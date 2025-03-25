import React, { useState } from "react";
import { Link } from "react-router-dom";

function ConfirmRidePopUp(props) {

  const [otp, setOtp] = useState('');

  const submitHandler = (e)=>{
    e.preventDefault()
  }
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

      <h2 className="text-2xl font-semibold mb-5">Confirm this ride to Start</h2>
      <div className="flex items-center justify-between bg-yellow-400 p-4 rounded-xl mt-4">
        <div className="flex items-center gap-3 ">
          <img
            className="h-10 w-12 rounded-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
            alt=""
          />
          <h2 className="text-xl font-medium">Ansh Singh</h2>
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
                Kankariya Talab , Ahemdabad
              </p>
            </div>
          </div>

          <div className=" flex items-center gap-5 p-3 border-b-2">
            <i className=" text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className=" text-base -mt-1 text-gray-400">
                Kankariya Talab , Ahemdabad
              </p>
            </div>
          </div>

          <div className=" flex items-center gap-5 p-3 border-b-2">
            <i className=" text-lg ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">193.2</h3>
              <p className=" text-base -mt-1 text-gray-400">Cash Cash</p>
            </div>
          </div>
        </div>

      <div className="mt-6 w-full">
        <form onSubmit={(e)=>{
          submitHandler(e);
        }}>

          <input onChange={(e)=>{
            setOtp(e.target.value)
          }} value={otp} type="text" className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-4" placeholder="Enter OTP" />
        <Link
        to='/captainriding'
          onClick={() => {}}
          className="w-full bg-green-400 mt-5 flex justify-center font-semibold p-2 rounded-lg "
        >
          Confirm
        </Link>

        <button
          onClick={() => {
            props.setConfirmRidePopUpPanel(false);
          }}
          className="w-full bg-red-500 font-semibold p-2 rounded-lg mt-1"
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
