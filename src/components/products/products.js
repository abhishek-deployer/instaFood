import React, { useState } from 'react';
import './products.css';

const Products = () => {
  const [active, setActive] = useState('Vegetables');

  const handleCategoryClick = (category) => {
    setActive(category);
 
  };
  const VegetableProducts = [
    { id: 1, name: 'Carrot', price: '$1.99' },
    { id: 2, name: 'Broccoli', price: '$2.49' },
    { id: 3, name: 'Tomato', price: '$0.99' },
    // Add more vegetable products as needed
  ];
  const fruitsProducts = [
    { id: 1, name: 'Carrot', price: '$1.99' },
    { id: 2, name: 'Mango', price: '$2.49' },
    { id: 3, name: 'Litchi', price: '$0.99' },
    // Add more vegetable products as needed
  ];
  const driedProducts = [
    { id: 1, name: 'Raisins', price: '$1.99' },
    { id: 2, name: 'Date', price: '$2.49' },
    { id: 3, name: 'Cherry', price: '$0.99' },
    // Add more vegetable products as needed
  ];
  const meatProducts = [
    { id: 1, name: 'Chicken', price: '$1.99' },
    { id: 2, name: 'Mutton', price: '$2.49' },
    { id: 3, name: 'fish', price: '$0.99' },
    // Add more vegetable products as needed
  ];

  return (
    <>
      <div className='container'>
        <h1 className='text-center'>Our Products</h1>

        <div className='text-center d-flex justify-content-center mt-3 gap-5'>
          <div onClick={() => handleCategoryClick('Vegetables')} className={active === 'Vegetables' ? 'active' : 'nonActive'}>
            Vegetables
          </div>
          <div onClick={() => handleCategoryClick('Fruits')} className={active === 'Fruits' ? 'active' : 'nonActive'}>
            Fruits
          </div>
          <div onClick={() => handleCategoryClick('Meats')} className={active === 'Meats' ? 'active' : 'nonActive'}>
            Meats
          </div>
          <div onClick={() => handleCategoryClick('Dried Foods')} className={active === 'Dried Foods' ? 'active' : 'nonActive'}>
            Dried Foods
          </div>
        </div>

        {/* Render the list based on the active category */}
        {active === 'Vegetables' && (
          <div className='product-list d-flex gap-5'>
       
        {VegetableProducts.map((product) => (
             <>
             <div className=''>
             <ProductCard key={product.id} name={product.name} price={product.price} />
             </div>
             </>
            ))}
          </div>
        )}

        {active === 'Fruits' && (
          <div className='product-list d-flex gap-5'>
            
            
            {fruitsProducts.map((product) => (
             <>
             <div className=''>
             <ProductCard key={product.id} name={product.name} price={product.price} />
             </div>
             </>
            ))}
          </div>
        )}

        {active === 'Meats' && (
          <div className='product-list d-flex gap-5'>
            {meatProducts.map((product) => (
             <>
             <div className=''>
             <ProductCard key={product.id} name={product.name} price={product.price} />
             </div>
             </>
            ))}
          </div>
        )}

        {active === 'Dried Foods' && (
          <div className='product-list d-flex gap-5'>
            {driedProducts.map((product) => (
             <>
             <div className=''>
             <ProductCard key={product.id} name={product.name} price={product.price} />
             </div>
             </>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
const ProductCard = ({ name, price }) => {
    return (
        <div className=''>
      <div className='card'>
        <h2>{name}</h2>
        <p>Price: {price}</p>
        {/* Add more product details or actions as needed */}
      </div>
      </div>
    );
  };

export default Products;
