import React from "react";
import { Link } from "react-router-dom";
function Start () {
  
  const handleScrollToFeatures = () => {
    document.getElementById("features").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-screen w-full bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1619059558110-c45be64b73ae?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex flex-col justify-center items-center h-full text-center text-white px-4">
          <img className="w-24 mb-6" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="Uber Logo" />
          <h1 className="text-5xl font-bold mb-4">Welcome to Your Ride</h1>
          <p className="text-xl mb-8">Experience a stylish journey like Uber, Ola, and Rapido.</p>
          <div className="flex space-x-4">
            <Link to="/userlogin" className="bg-white text-black font-semibold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition duration-300">Get Started</Link>
            <button onClick={handleScrollToFeatures} className="bg-transparent border border-white text-white py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition duration-300">Learn More</button>
          </div>
          <div className="absolute bottom-8 cursor-pointer" onClick={handleScrollToFeatures}>
            <svg className="w-8 h-8 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Suggestion Section */}
      <div className="container-inner py-8 bg-gray-200">
  <div className="block-container">
    <div className="block">
      <h3 className="title text-2xl font-bold text-center mb-4">Suggestions</h3>
      <div className="suggestions-list">
        <ul className="suggestions grid grid-cols-1 md:grid-cols-3 gap-4  flex-wrap justify-center">
          <li className=" bg-gray-300 suggestion-item  p-4 rounded-2xl ml-5 ">
            <a className="suggestion-link flex items-center" href="https://m.uber.com/go/connect/pickup">
              <div className="flex-1">
                <div className="label font-semibold">Courier</div>
                <p className="description text-sm">Uber makes same-day item delivery easier than ever.</p>
                <button className="details-button mt-2 bg-blue-600 text-white py-1 px-3 rounded">Details</button>
              </div>
              <img alt="Courier" className="image w-25 h-25 object-cover ml-4" src="https://cn-geo1.uber.com/static/mobile-content/Courier.png" />
            </a>
          </li>
          <li className="  bg-gray-300 suggestion-item  p-4 rounded-2xl">
            <a className="suggestion-link flex items-center" href="/">
              <div className="flex-1">
                <div className="label font-semibold">Ride</div>
                <p className="description text-sm">Go anywhere with Uber. Request a ride, hop in, and go.</p>
                <button className="details-button mt-2 bg-blue-600 text-white py-1 px-3 rounded">Details</button>
              </div>
              <img alt="Ride" className="image w-25 h-25 object-cover ml-4" src="https://mobile-content.uber.com/launch-experience/ride.png" />
            </a>
          </li>
          <li className="  bg-gray-300 suggestion-item  p-4 rounded-2xl mr-5">
            <a className="suggestion-link flex items-center" href="https://m.uber.com/reserve/">
              <div className="flex-1">
                <div className="label font-semibold">Reserve</div>
                <p className="description text-sm">Reserve your ride in advance so you can relax on the day of your trip.</p>
                <button className="details-button mt-2 bg-blue-600 text-white py-1 px-3 rounded">Details</button>
              </div>
              <img alt="Reserve" className="image w-25 h-25 object-cover ml-4" src="https://mobile-content.uber.com/uber_reserve/reserve_clock.png" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

     
      {/* Features Section */}
      <section id="features" className="py-12 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Our Features</h2>
          <div className="flex flex-wrap justify-center">
            {/* Stylish Feature Card for Fast Rides */}
            <div className="w-80 m-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300">
              <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_768,w_768/v1692743834/assets/54/f60161-cf6b-4401-a309-8bb196c0014c/original/U_CoastalCalifornia_White_Final-%281%29.jpg" alt="Fast Rides" className="w-full h-40 object-cover rounded-t-2xl" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Fast Rides</h3>
                <p className="text-gray-700">Enjoy quick and efficient rides anytime, anywhere.</p>
              </div>
            </div>
            {/* Stylish Feature Card for Safe Journeys */}
            <div className="w-80 m-4 bg-gradient-to-r from-green-100 to-teal-100 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300">
              <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_768,w_768/v1692743890/assets/f9/ba27c4-665c-4cca-8161-9e3f87f49994/original/Airport-rides.png" alt="Safe Journeys" className="w-full h-40 object-cover rounded-t-2xl" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Safe Journeys</h3>
                <p className="text-gray-700">Your safety is our priority on every ride.</p>
              </div>
            </div>
            {/* Stylish Feature Card for Affordable Rates */}
            <div className="w-80 m-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300">
              <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_1152,w_1152/v1696243819/assets/18/34e6fd-33e3-4c95-ad7a-f484a8c812d7/original/fleet-management.jpg" alt="Affordable Rates" className="w-full h-40 object-cover rounded-t-2xl" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Affordable Rates</h3>
                <p className="text-gray-700">Experience quality rides at budget-friendly rates.</p>
              </div>
            </div>
            
            {/* Stylish Feature Card for 24/7 Support */}
            <div className="w-80 m-4 bg-gradient-to-r from-red-100 to-pink-200 rounded-2xl shadow-lg transform hover:scale-105 transition duration-300">
              <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_648,w_1152/v1691776332/assets/d6/48f5b6-bb5f-450e-8733-90aefecbd09e/original/U4B_Spot_U4BWebsite.jpg" alt="24/7 Support" className="w-full h-40 object-cover rounded-t-2xl" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
                <p className="text-gray-700">Customer support around the clock for your convenience.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-8">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row justify-center items-center border-b border-gray-700 pb-6 mb-4">
      <div className="mb-4 md:mb-0 text-center">
        <h3 className="text-2xl font-bold">RideShare</h3>
        <p className="mt-2">Stylish rides, effortless journeys.</p>
      </div>
      
    </div>
    <div className="flex flex-col md:flex-row justify-center items-center">
      <p className="text-center text-sm mb-4 md:mb-0">© {new Date().getFullYear()} RideShare. All rights reserved.</p>
     
    </div>
  </div>
</footer>

    </div>
  )
}

export default Start;