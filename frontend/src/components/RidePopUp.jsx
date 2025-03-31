import React from "react";

function RidePopUp(props){
     return(
          <div>
                <h5
        
        className="p-3 text-center absolute top-0 w-[93%]"
        onClick={() =>{
          props.setRidePopUpPanel(false)
        }}
      >
        <i className=" text-3xl text-gray-300 ri-arrow-down-wide-line"></i>
      </h5>

      <h2 className="text-2xl font-semibold mb-5">New Ride Available !</h2>
      <div className="flex items-center justify-between bg-yellow-400 p-4 rounded-xl mt-4">
          <div className="flex items-center gap-3 ">
               <img className="h-10 w-12 rounded-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s" alt="" />
               <h2 className="text-xl font-medium capitalize">{props.ride?.user.fullname.firstname + " " + props.ride?.user.fullname.lastname}</h2>
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


          <div  className=" flex items-center gap-5 p-3 border-b-2">
            <i className=" text-lg ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">₹{props.ride?.fare} </h3>
              <p className=" text-base -mt-1 text-gray-400">
               Cash Cash
              </p>
            </div>
          </div>
        </div>

      <div className="flex mt-5 w-full items-center justify-between">
      <button  onClick={() =>{
          props.setConfirmRidePopUpPanel(true)
          props.confirmRide()
        }} className=" bg-green-400 font-semibold p-2 px-11 rounded-lg">
          Accept
        </button>

        <button  onClick={() =>{
          props.setRidePopUpPanel(false)
        }} className=" bg-gray-400 font-semibold p-2 px-11 rounded-lg ">
          Ignore
        </button>
      </div>
      </div>
          </div>
     )
}
export default RidePopUp