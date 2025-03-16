import React from 'react'
import './App.css'
import { Routes , Route } from 'react-router-dom'
import Start from './public/Start.jsx'
import Userlogin from './public/Userlogin.jsx'
import Usersignup from './public/Usersignup.jsx'  
import CaptainLogin from './public/CaptainLogin.jsx'
import Captainsignup from './public/Captainsignup.jsx'
import Home from './public/Home.jsx'
import UserProtectWrapper from './public/userProtectWrapper.jsx'
import Userlogout from './public/Userlogout.jsx'
import Captainhome from './public/Captainhome.jsx'
import CaptainProtectWrapper from './public/CaptainProtectWrapper.jsx'
 import Captainlogout from './public/Captainlogout.jsx'

function App() {
 

  return (
    <div>
      
     <Routes>
         <Route path='/' element={<Start/>} />
         <Route path='/captain-home' element={<CaptainProtectWrapper> <Captainhome/> </CaptainProtectWrapper>  } />
        <Route path='/captain-logout' element={<Captainlogout/>} />
         <Route path='/userlogin' element={<Userlogin/>} />
         <Route path='/usersignup' element={<Usersignup/>} />
         <Route path='/captain-login' element={<CaptainLogin/>} />
         <Route path='/captain-signup' element={<Captainsignup/>} />
         <Route path='/home' element={<UserProtectWrapper><Home/></UserProtectWrapper>} />   
          <Route path='/userlogout'element={<Userlogout/>} />

     </Routes>
      </div> 
    
  )
}

export default App
