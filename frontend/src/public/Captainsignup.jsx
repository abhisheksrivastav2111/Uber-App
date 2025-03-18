import React from "react"
import { useState ,useContext} from "react"
import { Link } from "react-router-dom"
import { CaptainDataContext } from "../context/CaptainContext"
import { useNavigate } from "react-router-dom"
import axios from "axios"

function Captainsignup() {

      const [ email, setEmail ] = useState('')
       const [ password, setPassword ] = useState('')
       const [ firstName, setFirstName ] = useState('')
       const [ lastName, setLastName ] = useState('')
       const [ CaptainData, setCaptainData ] = useState({})

       
  const [ vehicleColor, setVehicleColor ] = useState('')
  const [ vehiclePlate, setVehiclePlate ] = useState('')
  const [ vehicleCapacity, setVehicleCapacity ] = useState('')
  const [ vehicleType, setVehicleType ] = useState('')

       const {captain , setCaptain} = useContext(CaptainDataContext)
       const navigate = useNavigate();
     
         
       const submitHandler = async (e) => {
         e.preventDefault()
         const CaptainData = {
          fullname: {
            firstname: firstName,
            lastname: lastName
          },
          email: email,
          password: password,
          vehicle: {
            color: vehicleColor,
            plate: vehiclePlate,
            capacity: vehicleCapacity,
            vehicleType: vehicleType
          }
    
        
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, CaptainData);
         if(response.status === 201){
          const data = response.data
          setCaptain(data.captain)
          localStorage.setItem('token', data.token);
          navigate('/captain-home')
         }
       console.log(CaptainData)
         setEmail('')
         setFirstName('')
         setLastName('')
         setPassword('')
         setVehicleColor('')
         setVehiclePlate('')
         setVehicleCapacity('')
         setVehicleType('')
       }

     return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-300  to-white">
        <div className="relative z-10 bg-white bg-opacity-95 p-10 rounded-xl shadow-2xl max-w-lg w-full">
          <img
            className="w-20 mb-3"
            src="https://www.svgrepo.com/show/505031/uber-driver.svg"
            alt=""
          />
          <form onSubmit={submitHandler} className="space-y-6">
            <h3 className="text-lg font-medium mb-2 text-center">What's our Captain's name</h3>
            <div className="flex gap-4 mb-7">
              <input
                required
                className="bg-gray-200 w-1/2 rounded-lg px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-indigo-500"
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                required
                className="bg-gray-200 w-1/2 rounded-lg px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-indigo-500"
                type="text"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <h3 className='text-lg font-medium mb-2'>What's our Captain's email</h3>
            <input
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              className='bg-gray-200 mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500'
              type="email"
              placeholder='email@example.com'
            />
            <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
            <input
              className='bg-gray-200 mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500'
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              required type="password"
              placeholder='password'
            />
            <h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>
            <div className='flex gap-4 mb-7'>
              <input
                required
                className='bg-gray-200 w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500'
                type="text"
                placeholder='Vehicle Color'
                value={vehicleColor}
                onChange={(e) => {
                  setVehicleColor(e.target.value)
                }}
              />
              <input
                required
                className='bg-gray-200 w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500'
                type="text"
                placeholder='Vehicle Plate'
                value={vehiclePlate}
                onChange={(e) => {
                  setVehiclePlate(e.target.value)
                }}
              />
            </div>
            <div className='flex gap-4 mb-7'>
              <input
                required
                className='bg-gray-200 w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500'
                type="number"
                placeholder='Vehicle Capacity'
                value={vehicleCapacity}
                onChange={(e) => {
                  setVehicleCapacity(e.target.value)
                }}
              />
              <select
                required
                className='bg-gray-200 w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500'
                value={vehicleType}
                onChange={(e) => {
                  setVehicleType(e.target.value)
                }}
              >
                <option value="" disabled>Select Vehicle Type</option>
                <option value="car">Car</option>
                <option value="auto">Auto</option>
                <option value="moto">Moto</option>
              </select>
            </div>
            <button className="bg-black text-white font-semibold rounded-lg px-4 py-2 w-full text-lg hover:bg-gray-800 transition">
              Create Captain Account
            </button>
          </form>
          <p className="text-center mt-4">
            Already have an account? <Link to="/captain-login" className="text-blue-600 hover:underline">Login here</Link>
          </p>
          <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
            Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
        </div>
      </div>
    )
}
export default Captainsignup;