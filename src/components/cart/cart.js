// CartModal.jsx
import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Cart = ({ product }) => (
  <tr>
    <td>{product.productName}</td>
    <td>{product.price}</td>
    <td>{product.quantity}</td>
    {/* Add more product details or actions as needed */}
  </tr>
);

function CartModal({ handleClose }) {
  // Example product data
  const products = [
    {
      productName: 'Mango',
      price: '$10.99',
      quantity: 2,
    },
    {
      productName: 'Banana',
      price: '$5.99',
      quantity: 1,
    },
    {
      productName: 'Apple',
      price: '$7.99',
      quantity: 3,
    },
  ];

  return (
    <Modal show={true} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Cart items</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <table className="table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              {/* Add more table headers as needed */}
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <Cart key={index} product={product} />
            ))}
          </tbody>
        </table>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CartModal;
