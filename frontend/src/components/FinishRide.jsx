import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function FinishRide(props){

  const navigate = useNavigate()


  async function endRide(){
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/ride/end-ride`, {

      rideId: props.ride._id


  }, {
      headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
      }
  })

  if (response.status === 200) {
      navigate('/captain-home')
  }


  }





     return(
          <div >
          <h5
            className="p-3 text-center absolute top-0 w-[93%]"
            onClick={() => {
              props.setFinishRidePanel(false);
            }}
          >
            <i className=" text-3xl text-gray-300 ri-arrow-down-wide-line"></i>
          </h5>
    
          <h2 className="text-2xl font-semibold mb-5">Finish the Ride</h2>
          <div className="flex items-center justify-between bg-yellow-400 p-4 rounded-xl mt-4">
            <div className="flex items-center gap-3 ">
              <img
                className="h-10 w-12 rounded-full object-cover"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
                alt=""
              />
              <h2 className="text-xl font-medium">{props.ride?.user.fullname.firstname + " " +props.ride?.user.fullname.lastname}</h2>
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
            
    
              
            <button

            onClick={endRide}

          
              
              className="w-full bg-green-400 mt-5 flex text-lg justify-center font-semibold p-2 rounded-lg "
            >
          Finish

            </button>

            <p className=" mt-10 text-xm">Click on the finish Button if you complete the payment</p>
    
          
           
          </div>
          </div>
        </div>
     )
}
export default FinishRide;