import React,{useState}  from 'react';
import NavBarD from '../components/Common/NavBarD'
import { Container, Form  } from 'react-bootstrap'
import axios from "axios";

function Attendence2() {
  const [sidebar, setSidebar] = useState(false);

  const [courseTitle, setCourseTitle] = useState('')
  const [registrationId, setRegistrationId] = useState('')
  const [name, setName] = useState('')
  const [section, setSection] = useState('')
  const [missDate, setMissDate] = useState('')
  const [hour, setHour] = useState('')
  const [statement, setStatement] = useState('')
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
          courseTitle : courseTitle,
          registrationId : registrationId,
          name : name,
          class: section,
          missDate : missDate,
          hour : hour,
          statement : statement, 

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

        <div className="container h-100 p-2 my-3 ">
        <div className="row h-100 justify-content-center align-items-center">
        <div className="col-10 col-md-10 col-lg-8">
          
          <Form>
            <h1 className="text-center">ATTENDENCE CORRECTION FORM</h1>
            <p className="text-center description">(Applicable after 3 days of attendance entry)</p>
             
          <div className="row ">
           <div className="col mb-3">
           <label for="course">Course Title:</label>
           <input type="text" value={courseTitle} onChange={(e)=> setCourseTitle(e.target.value)}  className="form-control" id="course" name="course"/>
           </div>

           <div className="col mb-3">
           <label for="regid">Registration ID:</label>
           <input type="text"  value={registrationId} onChange={(e)=> setRegistrationId(e.target.value)} className="form-control" id="regid" name="regid"/>
           </div>
           </div>

           <div className="row ">
           <div className="col mb-3">
           <label for="name">Name:</label>
           <input type="text" value={name} onChange={(e)=> setName(e.target.value)}   className="form-control" id="name" name="name"/>
           </div>

           <div className="col mb-3">
           <label for="className">Class-Section:</label>
           <input type="text" value={section} onChange={(e)=> setSection(e.target.value)}   className="form-control" id="className" name="className"/>
           </div>
           </div>

           <div className="row ">
           <div className="col mb-3">
           <label for="date">Date (of missing attendance):</label>
           <input type="date" value={missDate} onChange={(e)=> setMissDate(e.target.value)} className="form-control" id="date" name="date"/>
           </div>

           <div className="col mb-3">
           <label for="hour">Hour:</label>
           <input type="text" value={hour} onChange={(e)=> setHour(e.target.value)}  className="form-control" id="hour" name="hour"/>
           </div>
           </div>

           <div className="mb-3">
          <label for="reason" className="form-label">Statement of Correction:</label>
          <textarea className="form-control" value={statement} onChange={(e)=> setStatement(e.target.value)}  id="reason" rows="6"></textarea>
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

export default Attendence2;




