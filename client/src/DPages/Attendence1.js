import React,{useState}  from 'react';
import NavBarD from '../components/Common/NavBarD'
import { Container , Form   } from 'react-bootstrap'
import axios from "axios";

function Attendence1() {
  const [sidebar, setSidebar] = useState(false);

  const [subject, setSubject] = useState('')
  const [registrationId, setRegistrationId] = useState('')
  const [section, setSection] = useState('')
  const [name, setName] = useState('')
  const [missDate, setMissDate] = useState('')
  const [hour, setHour] = useState('')
  const [reason, setReason] = useState('')
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
        `http://localhost:5000/api/attendence1Form/${id}`,
        { 
          subject : subject,
          registrationId : registrationId,
          name : name,
          class: section,
          missDate : missDate,
          hour : hour,
          reason : reason, 

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

        <div className="container h-100 p-2 my-3">
        <div className="row h-100 justify-content-center align-items-center">
        <div className="col-10 col-md-10 col-lg-8">
          
          <Form>
            <h1 className="text-center">ATTENDENCE CORRECTION FORM</h1>
            <p className="text-center description">(Applicable within 3 days of attendance entry including Weekends)</p>
             
          <div className="row ">
           <div className="col mb-3">
           <label for="subject">Subject:</label>
           <input type="text" value={subject} onChange={(e)=> setSubject(e.target.value)} class="form-control" id="subject" name="subject" required/>
           </div>

           <div className="col mb-3">
           <label for="regid">Registration ID:</label>
           <input type="text" value={registrationId} onChange={(e)=> setRegistrationId(e.target.value)}  class="form-control" id="regid" name="regid" required/>
           </div>
           </div>

           <div className="row ">
           <div className="col mb-3">
           <label for="name">Name:</label>
           <input type="text" value={name} onChange={(e)=> setName(e.target.value)} class="form-control" id="name" name="name" required/>
           </div>

           <div className="col mb-3">
           <label for="className">Class-Section:</label>
           <input type="text" value={section} onChange={(e)=> setSection(e.target.value)}  class="form-control" id="class" name="class" required/>
           </div>
           </div>

           <div className="row ">
           <div className="col mb-3">
           <label for="date">Date (of missing attendance):</label>
           <input type="date" value={missDate} onChange={(e)=> setMissDate(e.target.value)}  class="form-control" id="date" name="date" required/>
           </div>

           <div className="col mb-3">
           <label for="hour">Hour:</label>
           <input type="text" value={hour} onChange={(e)=> setHour(e.target.value)}  class="form-control" id="hour" name="hour" required/>
           </div>
           </div>

           <div className="mb-3">
          <label for="reason" className="form-label">Reason:</label>
          <textarea className="form-control" value={reason} onChange={(e)=> setReason(e.target.value)}  id="reason" rows="6" required></textarea>
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

export default Attendence1;




