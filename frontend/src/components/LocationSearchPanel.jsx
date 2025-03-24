import React from "react";
function LocationSearchPanel(props){
     const location=[
          "21B, Near Kapoor's cafe, Shreyians Coading , Bhopal",
          "23B, Near Manhotra's cafe, Shreyians Coading , Bhopal",
          "24B, Near Kali's cafe, Shreyians Coading , Bhopal",
          "28B, Near Geta's cafe, Shreyians Coading , Bhopal"
     ]

     return (
       <div>
           
         {
          location.map(function(elem){
               return  <div onClick={()=>{
                    props.setVehiclePanel(true)
               }} className="flex border-2 p-3 border-gray-100 active:border-black rounded-xl gap-4 items-center my-2  justify-start">
               <h2 className=" bg-[#eee] h-8 flex items-center  w-12 rounded-full"><i className="ri-map-pin-fill"></i></h2>
               <h4 className="font-medium" >{elem}</h4>
               </div>
          })
         }

           

       </div>
     )
}
export default LocationSearchPanel;