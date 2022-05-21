import React, {useState,useEffect} from 'react'
import NavBarD from '../Common/NavBarD'
import Requests from '../Requests'
import { Container  } from 'react-bootstrap'
import jwt_decode from 'jwt-decode'
import axios from "axios";

const StudentDashboard = () => {
    const [error, setError] = useState("");
    // const [isLoading,setIsLoading] = useState(true)
    const [sidebar, setSidebar] = useState(false);

    const getProfile = async(id) => {
        const config = {
            header: {
              "Content-Type": "application/json",
            },
          };
      
          try {
            const  data  = await axios.get(
              `http://localhost:5000/api/student/${id}`,
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
        <div className='home bg-light contextual' style={{minHeight:"100vh"}}>
        <NavBarD  sidebar={sidebar} setSidebar={setSidebar}/>
        
        <Container>
  
        <div class={`container h-100 p-2 my-3 nav-trans ${sidebar ? "navbar-spacing" : ""}`}>
        <div class="row h-100 justify-content-center align-items-center">
        <div class="col-10 col-md-8 col-lg-8">
  
        <h1 class="text-center">Student Dashboard</h1>
        
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
       < Requests />
      </div>
  
    </Container>
  

 
    </div>
    )
}

export default StudentDashboard
