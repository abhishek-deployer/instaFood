import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import "./header.css"
import CartModal from "../cart/cart";
const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const [isCartModalVisible, setCartModalVisible] = useState(false);

  const handleToggleModal = () => {
    setCartModalVisible(!isCartModalVisible);
  };
  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar expand="lg" className="bgf" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Food</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={handleToggle}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#products">Products</Nav.Link>
          </Nav>
          <Nav></Nav>
        </Navbar.Collapse>
      </Container>
      <Nav className="">
      <Nav.Link href="#cart">
          <span
            className="text"
            onClick={() => setCartModalVisible(true)}
          >
            {0} <FaShoppingCart color="white" className="" />
          </span>
        </Nav.Link>
        {isCartModalVisible && (
          <CartModal handleClose={() => setCartModalVisible(false)} />
        )}
        <Nav.Link href="#cart">
          <FaUser className="mx-3" />
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
