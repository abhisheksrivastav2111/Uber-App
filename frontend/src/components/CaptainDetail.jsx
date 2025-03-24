import React from "react";

function CaptainDetail (){
     return(
          <div>
                    <div className="flex items-center justify-between">
                    <div className=" flex items-center justify-start gap-3">
                         <img className="h-10 w-10 rounded-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s" alt="" />
                         <h4 className="text-lg font-medium">Abhishek Patel</h4>
                    </div>
                    <div>
                         <h4 className="text-xl font-semibold">295.2</h4>
                         <p className=" text-sm font-medium bg--gray-600">Earned</p>
                    </div>
                    
                  </div>

                  <div className="flex p-4 mt-6 bg-gray-200 rounded-xl justify-center gap-5 items-start ">
                    <div className="text-center">
                         <i className="text-3xl mb-2 font-thin ri-timer-2-line"></i>
                         <h5 className="text-lg font-medium">10</h5>
                         <p className="text-sm text-gray-600">Hour Online</p>
                    </div>
                    <div className="text-center"> <i className="text-3xl mb-2 font-thin ri-speed-up-fill"></i>
                    <h5 className="text-lg font-medium">10</h5>
                    <p className="text-sm text-gray-600">Hour Online</p>
                    
                    </div>
                    <div className="text-center">
                         <i className="text-3xl mb-2 font-thin ri-booklet-line"></i>
                         <h5 className="text-lg font-medium">10</h5>
                         <p className="text-sm text-gray-600">Hour Online</p>
                    </div>
                  </div>

          </div>
     )
}


export default CaptainDetail;