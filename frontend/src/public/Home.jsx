import React, { useRef, useState,useEffect, use } from "react";
 import { useGSAP } from '@gsap/react';
 import gsap from "gsap";
 import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver"
 

function Home() {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] =  useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null)


  const[vehiclePanel , setVehiclePanel] = useState(false);
  const vehiclePanelRef = useRef(null);
  
  const [confirmRidePanel , setConfirmRidePanel] = useState(false);
  const confirmRidePanelRef = useRef();

  const [vehicleFound, setVehicleFound] = useState(false);
  const vechicleFoundRef = useRef(null);


  const waitingForDriverRef = useRef(null);
  const [waitingForDriver  , setWaitingForDriver] = useState(false);





  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(function () {
     if (panelOpen) {
         gsap.to(panelRef.current, {
             height: '70%',
             padding: 24
             // opacity:1
         })
         gsap.to(panelCloseRef.current, {
             opacity: 1
         })
     } else {
         gsap.to(panelRef.current, {
             height: '0%',
             padding: 0
             // opacity:0
         })
         gsap.to(panelCloseRef.current, {
             opacity: 0
         })
     }
 }, [ panelOpen ]) 

 useGSAP(function () {
     if (vehiclePanel) {
         gsap.to(vehiclePanelRef.current, {
             transform: 'translateY(0)'
         })
     } else {
         gsap.to(vehiclePanelRef.current, {
             transform: 'translateY(100%)'
         })
     }
 }, [ vehiclePanel ])
     
 useGSAP(function () {
  if (confirmRidePanel) {
      gsap.to(confirmRidePanelRef.current, {
          transform: 'translateY(0)'
      })
  } else {
      gsap.to(confirmRidePanelRef.current, {
          transform: 'translateY(100%)'
      })
  }
}, [confirmRidePanel ])  

useGSAP(function () {
  if (vehicleFound) {
      gsap.to(vechicleFoundRef.current, {
          transform: 'translateY(0)'
      })
  } else {
      gsap.to(vechicleFoundRef.current, {
          transform: 'translateY(100%)'
      })
  }
}, [vehicleFound])  

useGSAP(function () {
  if (waitingForDriver) {
      gsap.to(waitingForDriverRef.current, {
          transform: 'translateY(0)'
      })
  } else {
      gsap.to(waitingForDriverRef.current, {
          transform: 'translateY(100%)'
      })
  }
}, [waitingForDriver])

  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-16 absolute left-5 top-5"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
      />
      <div className="h-screen w-screen">
        {/* image for temporary use  */}
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>

      <div className=" flex flex-col justify-end h-screen absolute top-0 w-full  ">
        <div className="h-[30%] p-5 relative bg-white">
          <h5 ref={panelCloseRef} onClick={()=>{
               setPanelOpen(false)
          }} className="absolute opacity-0 right-6 top-6 text-2xl">
               <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className=" 3xl font-semibold ">Find a Trip</h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="line absolute h-16 w-1 top[45%] left-10 bg-black rounded-full"></div>
            <input
            onClick={()=>{
               setPanelOpen(true)
            }}
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value);
              }}
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5"
              type="text"
              placeholder="Add your pickup location"
            />
            <input
             onClick={()=>{
               setPanelOpen(true)
            }}
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3"
              type="text"
              placeholder="Add your destination"
            />
          </form>
        </div>
        <div ref={ panelRef} className="h-0 bg-white "> <LocationSearchPanel vehiclePanel={vehiclePanel} setVehiclePanel={setVehiclePanel} /> </div>
      </div>

           
      <div ref={vehiclePanelRef} className="fixed w-full z-10 bottom-0 translate-y-0 bg-white px-3 py-10 pt-12">
         <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel} />
      </div>

      <div ref={confirmRidePanelRef} className="fixed w-full z-10 bottom-0 translate-y-0 bg-white px-3 py-7 pt-12">
         <ConfirmRide setconfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound} setVehiclePanel={setVehiclePanel}/>
      </div>
      
      <div ref={vechicleFoundRef} className="fixed w-full z-10 bottom-0 translate-y-0 bg-white px-3 py-7 pt-12">
         <LookingForDriver setVehicleFound={setVehicleFound} />
      </div>
      <div ref={waitingForDriverRef}  className="fixed w-full z-10 bottom-0 translate-y-0 bg-white px-3 py-7 pt-12">
        <WaitingForDriver waitingForDriver={waitingForDriver}/>
      </div>
      

    </div>
  );
}
export default Home;
