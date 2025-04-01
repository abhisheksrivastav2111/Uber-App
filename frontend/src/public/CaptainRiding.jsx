import React, { useRef, useState } from "react";
import { Link ,useLocation } from "react-router-dom";
import FinishRide from "../components/FinishRide";
import { useGSAP } from '@gsap/react';
 import gsap from "gsap";
 import 'remixicon/fonts/remixicon.css'
import LiveTracking from "../components/LiveTracking";

function CaptainRiding(){



     const[finishRidePanle , setFinishRidePanel] = useState(false);
     const finshRideRef = useRef(null);
     const location = useLocation()
     const rideData = location.state?.ride



     useGSAP(function () {
          if (finishRidePanle) {
              gsap.to(finshRideRef.current, {
                  transform: 'translateY(0)'
              })
          } else {
              gsap.to(finshRideRef.current, {
                  transform: 'translateY(100%)'
              })
          }
        }, [finishRidePanle])


     return(
          

          
          <div className=" h-screen ">

    
          <div className="fixed p-3 top-3 flex items-center justify-between w-full">
            <LiveTracking/>
            <Link
              to="/home"
              className="h-10 flex rounded-full  w-10 bg-white items-center justify-center"
            >
              <i className=" text-lg font-medium ri-logout-box-r-line"></i>
            </Link>
          </div>
          <div className="h-4/5">
            <LiveTracking/>
          </div>
          <div className="h-1/5 p-6 flex items-center justify-between relative bg-yellow-400" onClick={()=>{
               setFinishRidePanel(true)
          }}>
          <h5
        
        className="p-3 text-center absolute top-0 w-[95%]"
      
      >
        <i className=" text-3xl text-gray-300 ri-arrow-down-wide-line"></i>
      </h5>
          <h4 className="text-2xl  font-semibold">4Km Away</h4>
          <button className=" bg-green-400 font-semibold p-3 px-12 rounded-lg">Complete Ride</button>
           </div>
         

          <div ref={ finshRideRef} className="fixed w-full z-10 bottom-0 translate-y-0 bg-white px-3 py-7 pt-12">
            <FinishRide setFinishRidePanel={setFinishRidePanel}
                 ride = {rideData}
            />
          </div>
        </div>
     )
}

export default CaptainRiding;