import React, { useEffect } from "react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import axios from 'axios';


  function UserProtectWrapper({ children }) {

   const token = localStorage.getItem('token')
   console.log(token);
     const navigate = useNavigate();
     const {user, setUser} = useContext(UserDataContext);
     const [ isLoading, setIsLoading ] = useState(true)

     


     useEffect(() =>{



        async  function fetchUser(){
          try{
               const response =  await axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`,{
                    headers: {
                         Authorization : `Bearer ${localStorage.getItem('token')}`
                       }
               });
               console.log(response.data)
               if(response.status === 200){
                    setUser(response.data);
                    setIsLoading(false)
               }
          }catch(err){
               console.error(err);
               
          }finally {
               setIsLoading(false);
             }
         

        }
         

        if(token){
          fetchUser()
        }

         

          
     },[token,setUser, navigate])
     

     if (isLoading) {
          return (
              <div>Loading...</div>
          )
      }


 
 
 
         
  return(
          <>
          {children}
          </>  
  )
}

export default UserProtectWrapper;