import React from "react";
const WaitingForDriver = (props) => {
     return (
      <div>
      <h5
      onClick={()=>{
        props.waitingForDrive(false )
      }}
        
        className="p-3 text-center absolute top-0 w-[93%]"
        
      >
        <i className=" text-3xl text-gray-300 ri-arrow-down-wide-line"></i>
      </h5>

      <div className=" flex items-center justify-between">
      <img
              className=" h-12"
              src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
              alt=""
            />
            <div className="text-right">
              <h2 className="text-lg font-medium">Ansh</h2>
              <h4 className="text-xl font-semibold -mt-1 -mb-1">UP 45 AE 9887</h4>
              <p className="text-sm text-gray-600 ">Maruti Sujuki Alto</p>
            </div>
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

        
      </div>
     </div>
        )
     }

export default WaitingForDriver;