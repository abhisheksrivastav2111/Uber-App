import React from "react";

function ConfirmRide(props) {
  return (
    <div>
      <h5
        
        className="p-3 text-center absolute top-0 w-[93%]"
        onClick={() =>{
          props.setconfirmRidePanel(false)
        }}
      >
        <i className=" text-3xl text-gray-300 ri-arrow-down-wide-line"></i>
      </h5>

      <h2 className="text-2xl font-semibold mb-5">Confirm your Ride</h2>

      <div className=" flex gap-2 justify-between flex-col items-center">
        <img
          className=" h-20"
          src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
          alt=""
        />

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


          <div  className=" flex items-center gap-5 p-3 border-b-2">
            <i className=" text-lg ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className=" text-base -mt-1 text-gray-400">
                Kankariya Talab , Ahemdabad
              </p>
            </div>
          </div>
        </div>

        <button onClick={()=>{
          props.setVehicleFound(true)
          props.setconfirmRidePanel(false)

        }} className="w-full bg-green-400 font-semibold p-2 rounded-lg mt-5">
          Confirm Ride
        </button>
      </div>
    </div>
  )
}
export default ConfirmRide;
