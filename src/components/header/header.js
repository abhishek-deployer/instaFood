import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar expand="lg"  className='bgf' variant="dark">
      <Container>
        <Navbar.Brand href="#home">Food</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleToggle} />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#products">Products</Nav.Link>
          </Nav>
          <Nav>
           
          </Nav>
        </Navbar.Collapse>
        </Container>
        <Nav className="">
          <Nav.Link href="#cart">
            <FaShoppingCart />
            <FaUser className='mx-3'/>
          </Nav.Link>
        </Nav>
     
    </Navbar>
  );
};

export default Header;
