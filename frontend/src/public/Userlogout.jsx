import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



function Userlogout() {
    
     const token = localStorage.getItem('token')
     const navigate = useNavigate();
    

     axios.get(`${import.meta.env.VITE_API_URL}/users/logout`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then((response) => {
        if (response.status === 200) {
            localStorage.removeItem('token')
            navigate('/userlogin')
        }
    })


         return (
             <div>
                 <h1>Logging out...</h1>
             </div>
         )


}
export default Userlogout;