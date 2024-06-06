// src/components/ProductDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products'; // Ensure the correct path
import { Helmet } from 'react-helmet';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  } 

  return (
    <div>
      <Helmet>
        <title>{product.name} - Product Catalog</title>
        <meta property="og:title" content={product.name} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={product.thumbnail} />
        <meta property="og:url" content={`http://yourdomain.com/product/${product.id}`} />
        <meta property="og:type" content="article" />
      </Helmet>
      <h1>{product.name}</h1>
      <img src={product.thumbnail} alt={product.name} />
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetail;



