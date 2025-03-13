import React from 'react'
import './App.css'
import { Routes , Route } from 'react-router-dom'
import Home from './public/Home.jsx'
import Userlogin from './public/Userlogin.jsx'
import Usersignup from './public/Usersignup.jsx'  
import CaptainLogin from './public/CaptainLogin.jsx'
import Captainsignup from './public/Captainsignup.jsx'

function App() {
 

  return (
    <div>
      
     <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/userlogin' element={<Userlogin/>} />
         <Route path='/usersignup' element={<Usersignup/>} />
         <Route path='/captain-login' element={<CaptainLogin/>} />
         <Route path='/captain-signup' element={<Captainsignup/>} />   


     </Routes>
      </div> 
    
  )
}

export default App
