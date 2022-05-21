import React from 'react';
import CommonNav from '../components/CommonNav'

import { Container  } from 'react-bootstrap'

function AcceptedRequests() {
  return (
    <div className='home bg-light contextual'  style={{minHeight:"100vh"}}>
        <CommonNav />

        <Container>
    
        <div class="container h-100 p-2 my-3" >
        <div class="row h-100 justify-content-center align-items-center">
        <div class="col-10 col-md-8 col-lg-8">

        <form class="form-example" action="" method="post">
            <h1 class="text-center"> Accepted Requests</h1>
            <p class="text-center description"></p>
                    
        </form>
            
        </div>
        </div>
       </div>

    </Container>

  </div>
  );
}

export default AcceptedRequests;
