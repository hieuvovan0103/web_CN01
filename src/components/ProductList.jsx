import React from "react";
import { Link } from "react-router-dom";

const staticProducts = [
  {
    product_id: 1,
    name: "Áo tinh hoa vũ trụ",
    description: "Áo thun chất liệu cotton thoáng mát",
    price: 250000,
    is_new: true,
    primary_image: "src/img/aolmao.jpg"
  },
  {
    product_id: 2,
    name: "Áo đen trơn",
    description: "Áo thun chất liệu cotton thoáng mát",
    price: 150000,
    is_new: false,
    primary_image: "src/img/aodentron.jpg"
  },
  {
    product_id: 3,
    name: "Áo trắng trơn",
    description: "Áo thun chất liệu cotton thoáng mát",
    price: 150000,
    is_new: false,
    primary_image: "src/img/aotrangtron.jpg"
  },
  {
    product_id: 4,
    name: "Áo xám phong cách",
    description: "Áo thun chất liệu cotton thoáng mát",
    price: 150000,
    is_new: true,
    primary_image: "src/img/aoxam.jpg"
  },
  {
    product_id: 5,
    name: "Áo họa tiết anime sành điệu",
    description: "Áo thun chất liệu cotton thoáng mát",
    price: 150000,
    is_new: true,
    primary_image: "src/img/aoxemay.jpg"
  }
];

const ProductList = () => {
  return (
    <div className="container mx-auto px-1 py-8">
      <h1 className="text-3xl font-bold mb-8 text-black">Sản phẩm</h1>

      {staticProducts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-gray-600">Không tìm thấy sản phẩm phù hợp</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {staticProducts.map((product) => (
            <div
              key={product.product_id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <Link to={`/products/${product.product_id}`} className="block">
                <div className="bg-gray-100 h-48 flex items-center justify-center">
                  <img
                    src={product.primary_image}
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />
                </div>
              </Link>

              <div className="p-4">
                {product.is_new && (
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-md mb-2">
                    Mới về
                  </span>
                )}

                <Link to={`/products/${product.product_id}`}>
                  <h2 className="text-xl font-semibold mb-1 text-black hover:text-blue-600">
                    {product.name}
                  </h2>
                </Link>
                <p className="text-gray-600 mb-3">{product.description}</p>
                <div className="flex justify-between items-center">
                  <p className="text-lg font-bold text-black">
                    {product.price.toLocaleString()}đ
                  </p>
                  <button className="bg-black text-white px-3 py-1 rounded text-sm hover:bg-gray-800 transition">
                    Thêm vào giỏ
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
