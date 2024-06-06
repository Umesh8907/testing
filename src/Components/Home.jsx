// src/components/Home.js
import React from 'react';

import products from '../data/products'; // Make sure the path is correct
import { Link } from 'react-router-dom';

const Home = () => {
  console.log("Home component rendered");
  console.log("Products:", products);

 
  return (
    <div>
      <h1>Product Catalog</h1>
      <div className="product-list" >
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <Link to={`/products/${product.id}`}>
              <img src={product.thumbnail} alt={product.name} />
              </Link>
              {product.name}
             
      
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;


