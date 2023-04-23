import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" style={{ paddingLeft: "2rem" }}>
      {/* <Container> */}

      <Navbar.Brand href="/" >
        <img
          alt=""
          src="/bohac.jpg"
          width="30"
          height="30"
          className="d-inline-block align-top"
          style={{ marginRight: '0.7rem' }}
        />SuiMaker </Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/create">CreatePage</Nav.Link>
      </Nav>
      {/* </Container> */}
    </Navbar>
  )
}

export default NavBar