import { useState, useEffect } from "react";
import React from "react";

const ProductList = () => {
  const products = [
    {
      title: "Áo thun nam",
      description: "Chất liệu cotton thoáng mát",
      price: "150.000đ",
      isNew: true,
      placeholder: "👕"
    },
    {
      title: "Ao 2",
      description: "Table with air purifier",
      price: "$189",
      isNew: true,
      placeholder: "🎧"
    },
    {
      title: "Skull MTFLEX",
      description: "Ao 11",
      price: "$139",
      isNew: true,
      placeholder: "🦴"
    },
    {
      title: "Sony TUNE 600STC",
      description: "Ao 22",
      price: "$169",
      isNew: true,
      placeholder: "🔊"
    },
    {
      title: "Yoto Max CH4",
      description: "Kids Headphones",
      price: "$109",
      isNew: true,
      placeholder: "👶"
    },
    {
      title: "Bose Pro Headphones",
      description: "Wired Stereo Headset with Mic",
      price: "$249",
      isNew: true,
      placeholder: "🎤"
    },
    {
      title: "Audionic Earphones",
      description: "High Fidelity Audio",
      price: "$119",
      isNew: true,
      placeholder: "🎵"
    }
  ];

  return (
    <div className="container mx-auto px-1 py-8">
      <h1 className="text-3xl font-bold mb-8 text-black">Áo thun</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="bg-gray-100 h-48 flex items-center justify-center text-6xl">
              {product.placeholder}
            </div>
            
            <div className="p-4">
              {product.isNew && (
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-md mb-2">
                  Mới về
                </span>
              )}
              
                            
              <h2 className="text-xl font-semibold mb-1 text-black">{product.title}</h2>
              <p className="text-gray-600 mb-3">{product.description}</p>
              <div className="flex justify-between items-center">
                <p className="text-lg font-bold text-black">{product.price}</p>
                <button className="bg-black text-white px-3 py-1 rounded text-sm hover:bg-gray-800 transition">
                  Thêm vào giỏ
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

   

export default ProductList;
