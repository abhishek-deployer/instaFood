import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./footer.css"
const Footer = () => {
  return (
    <footer className="bgf text-light mt-5">
      <Container>
        <Row className="py-4">
          <Col md={6}>
            <h3>Organic Food</h3>
            <p>Providing fresh and healthy organic food options for a better lifestyle.</p>
          </Col>
          <Col md={3}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Contact Us</h5>
            <p>Email: info@organicfood.com</p>
            <p>Phone: +1 (555) 123-4567</p>
          </Col>
        </Row>
      </Container>
      <div className="text-center py-3">
        <p>&copy; 2024 Organic Food. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
