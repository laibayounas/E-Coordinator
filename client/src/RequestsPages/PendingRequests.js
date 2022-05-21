import React, {useEffect,useState} from 'react';
import CommonNav from '../components/CommonNav'
import axios from "axios";
import { Container , Table, Button, Modal } from 'react-bootstrap'

function PendingRequests() {
  const [error, setError] = useState("");
  const [fdata, setFdata] = useState([]);
  const [selectedData,setSelectedData] = useState("")
  const [modalShow, setModalShow] = useState(false);

  const getPendingRequests = async() => {
    
    const id = localStorage.getItem("id");
    const config = {
        header: {
          "Content-Type": "application/json",
        },
      };
  
      try {
        const  data  = await axios.get(
          `http://localhost:5000/api/applicationForm/pending/${id}`,
          config
        );
        setFdata(data.data)
      } catch (error) {
        setError(error.response?.data.error);
        setTimeout(() => {
          setError("");
        }, 5000);
      }
}

const getPendingRequests1 = async() => {
    
  const id = localStorage.getItem("id");
  const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const  data  = await axios.get(
        `http://localhost:5000/api/attendence1Form/pending/${id}`,
        config
      );
      console.log(data.data);
      for (let i = 0; i < data.data.length; i++) {
        let temp = data.data[i];
        console.log('temp',temp)
      setFdata(prev => [ ...prev,temp])
    }
      console.log(fdata);
    } catch (error) {
      setError(error.response?.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
}

const getPendingRequests2 = async() => {
    
  const id = localStorage.getItem("id");
  const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const  data  = await axios.get(
        `http://localhost:5000/api/attendence2Form/pending/${id}`,
        config
      );
      // setFdata(prev => [ ...prev,data.data])
      for (let i = 0; i < data.data.length; i++) {
        setFdata(prev => [ ...prev,data.data[i]])
      } 
      console.log(fdata);
      // if(data) setIsLoading(false)
    } catch (error) {
      setError(error.response?.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
}

useEffect (() => {
  // const user_type = localStorage.getItem('user_type');
  // if(user_type === 'user')
  getPendingRequests();
  getPendingRequests1();
  // getPendingRequests2();
  // else if()
},[])
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Request Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='d-flex flex-column justify-content-center align-items-center'>
          {selectedData?.request_type === 'Application' && 
           <> <p><b>Application Type: </b>{selectedData?.applicationType}</p>
            <p><b>Date: </b>{selectedData?.date}</p>
            <p><b>Name: </b>{selectedData?.name}</p>
            <p><b>Enrollment No: </b>{selectedData?.enrollmentNumber}</p>
            <p><b>Contact Number </b>{selectedData?.contactNumber}</p>
            <p><b>Class-Section: </b>{selectedData?.class}</p>
            <p><b>Application: </b>{selectedData?.application}</p> 
            </>}

            {selectedData?.request_type === 'Attendence1' && 
           <> <p><b>Subject: </b>{selectedData?.subject}</p>
            <p><b>Registration Id: </b>{selectedData?.registrationId}</p>
            <p><b>Name: </b>{selectedData?.name}</p>
            <p><b>Class-Section: </b>{selectedData?.class}</p>
            <p><b>Date of missing attendence: </b>{selectedData?.missDate}</p>
            <p><b>Hour: </b>{selectedData?.hour}</p>   
            <p><b>Reason: </b>{selectedData?.reason}</p>         
            </>}

            {selectedData?.request_type === 'Attendence2' && 
           <> <p><b>Course Title: </b>{selectedData?.courseTitle}</p>
            <p><b>Date: </b>{selectedData?.date}</p>
            <p><b>Name: </b>{selectedData?.name}</p>
            <p><b>Enrollment No. </b>{selectedData?.enrollmentNumber}</p>
            <p><b>Class-Section: </b>{selectedData?.class}</p>
            <p><b>Date of missing attendence: </b>{selectedData?.missDate}</p>
            <p><b>Hour: </b>{selectedData?.hour}</p>   
            <p><b>Statement: </b>{selectedData?.statement}</p>  
            </>}

        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
  return (
    <> 

    <div className='home bg-light contextual'  style={{minHeight:"100vh"}}>
        <CommonNav />

        <Container>
    
        <div className="container h-100 p-2 my-3" >
        <div className="row h-100 justify-content-center align-items-center">
        <div className="col-10 col-md-8 col-lg-8">

            <h1 className="text-center"> Pending Requests</h1>

        <Table striped bordered hover >
          <thead class="thead-dark">
              <tr>    
                <th>Request Type</th>
                <th>View</th>
              </tr>
          </thead>
          <tbody>
              {fdata?.map((f,index) => (
              <tr
                key={index}> 
                <td>{f.request_type}</td>
                <td><p onClick={()=>
                  {setSelectedData(f);
                   setModalShow(true);

                    }}>View</p></td>
              </tr>
                ) )}
           </tbody>
        </Table>
            
            
        </div>
        </div>
       </div>

    </Container>
    <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
  </div>
  </>
  );
}

export default PendingRequests;
