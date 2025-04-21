// src/components/ProductPage.jsx
import React from 'react';
import Sidebar from './Sidebar';
import ProductList from './ProductList';

const ProductPage = () => {
  return (
    <div className="flex">
      {/* Sidebar - chiếm 1/4 màn hình */}
      <div className="w-1/4">
        <Sidebar />
      </div>
      
      {/* ProductList - chiếm 3/4 màn hình */}
      <div className="w-3/4">
        <ProductList />
      </div>
    </div>
  );
};

export default ProductPage;