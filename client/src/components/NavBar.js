import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import {Container, Image, Nav} from 'react-bootstrap';
//import logo from './logo.png'

const NavBar = () => {
  return (
    <div>
        <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home"><h1>E-Coordinator</h1></Navbar.Brand>
   
    <Nav className="me-auto">
    <Nav.Link href="#home"></Nav.Link>
      <Nav.Link href ="/login" >Student</Nav.Link>
      <Nav.Link href="/Coordinatorlogin">Coordinator</Nav.Link>
      <Nav.Link href="/Teacherlogin">Teacher</Nav.Link>
      <Nav.Link href="/HODlogin">HOD</Nav.Link>
      <Nav.Link href="/Advisorlogin">Registrar</Nav.Link>
      <Nav.Link href="/Deenlogin">Dean</Nav.Link>
      <Nav.Link href="/VClogin">Vice Chancellor</Nav.Link>

      <div onClick={()=>{localStorage.removeItem('authToken')}}>Logout</div>     
    </Nav>

    </Container>
  </Navbar>

</>
    </div>
  )
}

export default NavBar