import React from 'react';
import './categories.css'; // Add your custom styles as needed
import { Container, Card } from 'react-bootstrap';
import { FaApple, FaCarrot, FaHamburger, FaFish } from 'react-icons/fa';

const Categories = () => {
  return (
    <Container className='categories-container'>
      <h1 className='text-center'>TOP CATEGORIES</h1>
      <div className='d-flex gap-2 justify-content-center flex-wrap'>
        <Card className='category-card'>
          <Card.Body className='text-center '>
            <FaApple size={50} color='red' />
            <Card.Title>Fruits</Card.Title>
          </Card.Body>
        </Card>

        <Card className='category-card'>
          <Card.Body className='text-center'>
            <FaCarrot size={50} color='#e9692c' />
            <Card.Title>Vegetables</Card.Title>
          </Card.Body>
        </Card>

        <Card className='category-card'>
          <Card.Body className='text-center'>
            <FaHamburger size={50}  color=' #f08080'/>
            <Card.Title>Meat</Card.Title>
          </Card.Body>
        </Card>

        <Card className='category-card'>
          <Card.Body className='text-center'>
            <FaFish size={50} color='#ffcc00' />
            <Card.Title>Fish</Card.Title>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default Categories;
