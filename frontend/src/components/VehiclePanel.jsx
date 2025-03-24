import React from "react";
function VehiclePanel(props){
     return (
          <div>
                 <h5 onClick={()=>{
                  props.setVehiclePanel(false)
           }} className="p-3 text-center absolute top-0 w-[93%]" ><i className=" text-3xl text-gray-300 ri-arrow-down-wide-line"></i></h5>
          
          <h2 className="text-2xl font-semibold mb-5">Choose a Veichle</h2>
          <div onClick={()=>{
               props.setConfirmRidePanel(true)
          }} className="flex border-2 border-black mb-2 rounded-xl w-full items-center p-3 justify-between">
               <img className="h-14" src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="" />
               <div className="w-1/2">
                    <h4 className="font-medium text-base">UberGo <span><i className="ri-user-3-fill"></i>4</span> </h4> 
                    <h5  className="font-medium text-sm" >2 mins away</h5>
                    <p>Affordable , compact rides</p>
               </div>
               <h2 className="text-2xl font-semibold">193.9 Rs</h2>
          </div>

          <div className="flex border-2 border-black mb-2 rounded-xl w-full items-center p-3 justify-between">
               <img className="h-14" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTutqrpU7mZAsnEklifsm4OMwu5qL02rlV0bw&s" alt="" />
               <div className="w-1/2">
                    <h4 className="font-medium text-base">Premier <span><i className="ri-user-3-fill"></i>4</span> </h4> 
                    <h5  className="font-medium text-sm" >2 mins away</h5>
                    <p>Comfortable sedans,top-quality Driver </p>
               </div>
               <h2 className="text-2xl font-semibold">493.9 Rs</h2>
          </div>

          <div className="flex border-2 border-black mb-2 rounded-xl w-full items-center p-3 justify-between">
               <img className="h-14" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_638,w_956/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
               <div className="w-1/2">
                    <h4 className="font-medium text-base">Moto <span><i className="ri-user-3-fill"></i>1</span> </h4> 
                    <h5  className="font-medium text-sm" >2 mins away</h5>
                    <p>Affordable ,MoterCycle rides</p>
               </div>
               <h2 className="text-2xl font-semibold">63 Rs</h2>
          </div>

          <div className="flex border-2 border-black mb-2 rounded-xl w-full items-center p-3 justify-between">
               <img className="h-14" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
               <div className="w-1/2">
                    <h4 className="font-medium text-base">Uber Auto <span><i className="ri-user-3-fill"></i>3</span> </h4> 
                    <h5  className="font-medium text-sm" >5 mins away</h5>
                    <p>Affordable , compact rides</p>
               </div>
               <h2 className="text-2xl font-semibold">153.9 Rs</h2>
          </div>

          </div>
     )
}

export default VehiclePanel;