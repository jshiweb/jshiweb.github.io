import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "./../logo.svg";
const Mynavbar = () => {
  return (
    <div className="Navbar">
      <ul>
        <li>
          <img className="icon" src={logo} alt="logo" />
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li style={{ float: "right " }}>
          <a>Broken Button</a>
        </li>
      </ul>
    </div>
    // <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg" sticky="top">
    //   <Container>
    //     <Navbar.Brand href="/">My Baller Website</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //     <Navbar.Collapse id="responsive-navbar-nav">
    //       <Nav className="me-auto">
    //         <Nav.Link href="/">Home</Nav.Link>
    //         <Nav.Link href="/about">About</Nav.Link>
    //       </Nav>
    //       <Nav>
    //         <Nav.Link href="#deets">Fake Button</Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  );
};
export default Mynavbar;
