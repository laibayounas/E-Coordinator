import React, {useState,useEffect} from 'react'
import CommonNav from '../CommonNav'
import { Container  } from 'react-bootstrap'
import Requests from '../Requests'
import jwt_decode from 'jwt-decode'
import axios from "axios";

const VCDashboard = () => {
  
  // const [isLoading,setIsLoading] = useState(true)
  const [error, setError] = useState("");

    const getProfile = async(id) => {
        const config = {
            header: {
              "Content-Type": "application/json",
            },
          };
      
          try {
            const  data  = await axios.get(
              `http://localhost:5000/api/vc/${id}`,
              config
            );

            localStorage.setItem("id", data.data[0]._id);
            localStorage.setItem("email", data.data[0].email);
            localStorage.setItem("username", data.data[0].username);
            // setIsLoading(false)

          } catch (error) {
            setError(error.response.data.error);
            setTimeout(() => {
              setError("");
            }, 5000);
          }
    }
    useEffect(()=> {
        var token = localStorage.getItem("authToken");
        var decoded = jwt_decode(token);
        console.log(decoded);
        getProfile(decoded.id);

    },[])

    return (
      <div className='home bg-light contextual'>
      <CommonNav />
      
      <Container>

      <div class="container h-100 p-2 my-3" >
      <div class="row h-100 justify-content-center align-items-center">
      <div class="col-10 col-md-8 col-lg-8">

      <h1 class="text-center">Vice Chancellor Dashboard</h1>
      
      <div class="col mb-3">
       <label for="name">User Name: <span></span></label>   
       {localStorage.getItem('username')}       
       </div>
  
       <div class="col mb-3">
       <label for="email">Email: <span></span></label> 
       {localStorage.getItem('email')}  
     
       </div>
   
      </div>
     </div>
    </div>

  </Container>

  < Requests />

  </div>
    )
}

export default VCDashboard
