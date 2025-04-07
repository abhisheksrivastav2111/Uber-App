import React, { useRef, useState,useEffect, } from "react";
 import { useGSAP } from '@gsap/react';
 import gsap from "gsap";
 import axios from 'axios';
 import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver"
import { SocketContext } from "../context/SocketContext";
import { useContext } from "react";
import { UserDataContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import LiveTracking from "../components/LiveTracking";





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

  const [pickUpSuggestion, setPickupSuggestion] = useState([]);
  const [destinationSuggestion, setDestinationSuggestion] = useState([]);
  const [activeFeild , setActiveFeild] = useState(null);
const [fare,setFare] = useState({})
const [ vehicleType, setVehicleType ] = useState(null)
const [ ride, setRide ] = useState(null)

const navigate = useNavigate();

const {socket} = useContext(SocketContext);
const {user } = useContext(UserDataContext);



useEffect(()=>{
  
socket.emit("join" , {userType:"user" , userId : user._id})
}, [user])

socket.on('ride-confirmed' , (ride)=>{
  setVehicleFound(false)
  setWaitingForDriver(true);
  setRide(ride)
})

socket.on('ride-started', ride => {
  console.log("ride")
  setWaitingForDriver(false)
  navigate('/riding', { state: { ride } })
})








  const handlePickUpChange = async(e) =>{
    setPickup(e.target.value);
    try{
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`,{
        params:{input:  e.target.value  },
        headers:{
          Authorization : `Bearer ${(localStorage.getItem('token'))}`
        }
      })
     
      setPickupSuggestion(response.data)
     

    }catch(err){
         console.error(err)
    }
  }



  const handleDestinationChange = async(e)=>{
    setDestination(e.target.value);
    try{
      const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`,{
        params:{input: e.target.value},
        headers: {
          Authorization : `Bearer ${localStorage.getItem('token')}`
        }
      })
 
        setDestinationSuggestion(response.data)
    }catch(err){
      console.error(err);
    }
  }





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

async function findTrip(){
  setVehiclePanel(true);
  setPanelOpen(false);

  const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/ride/get-fare`,{
    params:{pickup,destination},
    headers:{
      Authorization:`Bearer ${localStorage.getItem('token')}`
    }
  })
  console.log(response.data)
  setFare(response.data);

}

async function createRide(){

  
  const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/ride/create`,{
    
      pickup,
      destination,
      vehicleType
  }, {
      headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
      }
  })

 console.log( "response is "+{response});
  
}
  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-16 absolute right-5 mr-8 top-5 z-50"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
      />
      <div className="h-screen w-screen">
        {/* image for temporary use  */}
        ,<LiveTracking/>
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
               setActiveFeild('pickup');
            }}
              value={pickup}
              onChange={handlePickUpChange}
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5"
              type="text"
              placeholder="Add your pickup location"
            />
            <input
             onClick={()=>{
               setPanelOpen(true);
               setActiveFeild('destination');
            }}
              value={destination}
              onChange={handleDestinationChange}
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3"
              type="text"
              placeholder="Enter your destination"
            />
            
          </form>
                       <button
                        onClick={findTrip}
                        className='bg-black text-white px-4 py-2 rounded-lg mt-3 w-full'>
                        Find Trip
                     </button>
        </div>
        <div ref={ panelRef} className="h-0 bg-white "> <LocationSearchPanel
         vehiclePanel={vehiclePanel} 
         setVehiclePanel={setVehiclePanel} 
         suggestions={activeFeild === 'pickup' ? pickUpSuggestion : destinationSuggestion}
         setPickup={setPickup}
         setDestination={setDestination}
         activeFeild={activeFeild}
         />
         </div>
      </div>

           
      <div ref={vehiclePanelRef} className="fixed w-full z-10 bottom-0 translate-y-0 bg-white px-3 py-10 pt-12">
         <VehiclePanel 
         setConfirmRidePanel={setConfirmRidePanel}
          setVehiclePanel={setVehiclePanel} 
           fare={fare}
           selectVehicle={setVehicleType}
           />
      </div>

      <div ref={confirmRidePanelRef} className="fixed w-full z-10 bottom-0 translate-y-0 bg-white px-3 py-7 pt-12">
         <ConfirmRide
          setconfirmRidePanel={setConfirmRidePanel} 
          setVehicleFound={setVehicleFound} 
          setVehiclePanel={setVehiclePanel}
          createRide={createRide}
          pickup={pickup}
          vehicleType={vehicleType}
          destination={destination}
          fare={fare}/>
      </div>
      
      <div ref={vechicleFoundRef} className="fixed w-full z-10 bottom-0 translate-y-0 bg-white px-3 py-7 pt-12">
         <LookingForDriver
         pickup={pickup}
         vehicleType={vehicleType}
         destination={destination}
         fare={fare}
         
         setVehicleFound={setVehicleFound} 
         
         />
      </div>
      <div ref={waitingForDriverRef}  className="fixed w-full z-10 bottom-0 translate-y-0 bg-white px-3 py-7 pt-12">
        <WaitingForDriver
        ride={ride}
        setVehicleFound={setVehicleFound}
        
        waitingForDriver={waitingForDriver}
        />
      </div>
      

    </div>
  );
}
export default Home;
