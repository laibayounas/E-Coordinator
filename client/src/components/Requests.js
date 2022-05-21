import React from "react";
import { Container } from "react-bootstrap";


function Requests() {
    return(
        <React.Fragment>

            <Container md>
            
        <h3 className="text-center text-capatalize my-5" >Requests Status</h3>
        <div className="container px-5">
          <div className="row">

            <div className="col-sm">
              <div class="card" style={{backgroundColor:"#1589FF"}} >
               <div class="card-body">
               <h5 class="card-title" style={{fontSize:"16px"}}>Pending Requests <i class="bi bi-chat-left-dots-fill"></i></h5>
               <p class="card-text"> </p>
               <a href="/pendingrequest" class="card-link text-white">Check</a>
               </div>
             </div>
             </div>


            <div className="col-sm">
              <div class="card" style={{backgroundColor:"#12AD2B"}}>
                <div class="card-body">
                <h5 class="card-title" style={{fontSize:"16px"}}>Accepted Requests <i class="bi bi-check-square-fill"></i></h5>
                <p class="card-text"> </p>
                <a href="acceptedrequest" class="card-link text-white">Check</a>
                </div>
              </div>
            </div>

          <div className="col-sm">
            <div class="card" style={{backgroundColor:"#C11B17"}}>
            <div class="card-body">
            <h5 class="card-title" style={{fontSize:"16px"}}>Rejected Requests <i class="bi bi-x-square-fill"></i> </h5>
            <p class="card-text"> </p>
            <a href="/rejectedrequest" class="card-link text-white ">Check</a>
            </div>
           </div>
          </div>

        </div>
      </div>

        </Container>
        </React.Fragment>

    );

};

export default Requests;