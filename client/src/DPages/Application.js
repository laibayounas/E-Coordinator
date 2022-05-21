import React,{useState} from 'react';
import NavBarD from '../components/Common/NavBarD'
import axios from "axios";

import { Container , Form } from 'react-bootstrap'

function Application() {
  const [sidebar, setSidebar] = useState(false);
  const [applicationType, setApplicationType] = useState('')
  const [ddate, setDate] = useState('')
  const [name, setName] = useState('')
  const [enrollmentNo, setEnrollmentNo] = useState('')
  const [contactNo, setContactNo] = useState('')
  const [section, setSection] = useState('')
  const [application, setApplication] = useState('')
  const [error, setError] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    const id = localStorage.getItem("id");
    try {
      const { data } = await axios.post(
        `http://localhost:5000/api/applicationForm/${id}`,
        { 
          applicationType : applicationType,
          ddate : ddate,
          name: name,
          enrollmentNumber : enrollmentNo,
          contactNumber : contactNo,
          class : section, 
          application : application,
          // requestType : "application"
         },
        config
      );
      window.location.href = '/student_dashboard';
    } catch (error) {
      setError(error.response?.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };


  return (
    <div className='home bg-light contextual'>
        <NavBarD sidebar={sidebar} setSidebar={setSidebar}/>

        <Container>
    
        <div className="container h-100 p-2 my-3" >
        <div className="row h-100 justify-content-center align-items-center">
        <div className="col-10 col-md-8 col-lg-8">

        <Form >
            <h1 className="text-center">APPLICATION FORM</h1>
            <p className="text-center description"></p>

          <div className="row ">
           <div className="col mb-3">
           <label for="applicationtype">Application Type:</label>
           <input type="text" value={applicationType} onChange={(e)=> setApplicationType(e.target.value)} className="form-control" id="applicationtype" name="applicationtype" required/>
           </div>

           <div className="col mb-3">
           <label for="date">Date:</label>
           <input type="date" value={ddate} onChange={(e)=> setDate(e.target.value)} className="form-control" id="date" name="date" required/>
           </div>
           </div>

           <div className="row ">
           <div className="col mb-3">
           <label for="name">Name:</label>
           <input type="text" value={name} onChange={(e)=> setName(e.target.value)} className="form-control" id="name" name="name" required/>
           </div>

           <div className="col mb-3">
           <label for="enrollmentno">Enrollment No:</label>
           <input type="text" value={enrollmentNo} onChange={(e)=> setEnrollmentNo(e.target.value)} className="form-control" id="enrollmentno" name="enrollmentno" required/>
           </div>
           </div>

           <div className="row ">
           <div className="col mb-3">
           <label for="contactno">Contact No:</label>
           <input type="text" value={contactNo} onChange={(e)=> setContactNo(e.target.value)} className="form-control" id="contactno" name="contactno" required/>
           </div>

           <div className="col mb-3">
           <label for="className">Class-Section:</label>
           <input type="text" value={section} onChange={(e)=> setSection(e.target.value)} className="form-control" id="className" name="className" required/>
           </div>
           </div>

           <div className="mb-3">
          <label for="application" className="form-label">Application:</label>
          <textarea className="form-control" value={application} onChange={(e)=> setApplication(e.target.value)} id="application" rows="6" required></textarea>
          </div>


          <div className="row">
          <label for="sendto">Send To:</label>
           <div className="col mb-3">
           <button onClick={submitHandler} className="btn btn-primary mb-3">Coordinator</button>
           </div>

           </div>
                    
        </Form>
            
        </div>
        </div>
       </div>

    </Container>

  </div>
  );
}

export default Application;
