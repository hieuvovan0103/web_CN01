import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

// Import hình ảnh mẫu (thay bằng ảnh thực tế của bạn)
import aolmao from '../img/aolmao.jpg';
import aodentron from '../img/aodentron.jpg';
import aotrangtron from '../img/aotrangtron.jpg';
import aoxam from '../img/aoxam.jpg';
import aoxemay from '../img/aoxemay.jpg';

const ProductDetail = () => {
  const { productId } = useParams();
  
  // Dữ liệu sản phẩm tương ứng với ProductList
  const staticProducts = [
    {
      product_id: 1,
      name: "Áo tinh hoa vũ trụ",
      description: "Áo thun chất liệu cotton thoáng mát, in hình vũ trụ độc đáo. Phù hợp mọi hoạt động hàng ngày, chất liệu co giãn 4 chiều.",
      price: 250000,
      is_new: true,
      images: [aolmao, aodentron, aotrangtron], // Ảnh minh họa
      colors: ["Đen", "Xám đen"],
      sizes: ["S", "M", "L"],
      brand: "Cosmic",
      specifications: {
        "Chất liệu": "Cotton 100%",
        "Xuất xứ": "Việt Nam",
        "Họa tiết": "In kỹ thuật số",
        "Bảo hành": "Đổi trả 7 ngày"
      }
    },
    {
      product_id: 2,
      name: "Áo đen trơn",
      description: "Áo thun cơ bản màu đen trơn, form rộng thoải mái. Chất liệu vải dày dặn không bai xù sau nhiều lần giặt.",
      price: 150000,
      is_new: false,
      images: [aodentron, aolmao, aoxam],
      colors: ["Đen"],
      sizes: ["S", "M", "L", "XL"],
      brand: "Basic",
      specifications: {
        "Chất liệu": "Cotton 95% - Spandex 5%",
        "Xuất xứ": "Việt Nam",
        "Form áo": "Oversize",
        "Bảo hành": "1 tháng"
      }
    },
    // Thêm các sản phẩm khác tương tự...
  ];

  const product = staticProducts.find(p => p.product_id === parseInt(productId));

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold text-red-500 mb-4">Sản phẩm không tồn tại</h2>
        <Link to="/products" className="text-blue-600 hover:underline">
          ← Quay lại trang sản phẩm
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex mb-6" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li>
            <Link to="/" className="text-blue-600 hover:underline">Trang chủ</Link>
          </li>
          <li>
            <span className="mx-2">/</span>
          </li>
          <li>
            <Link to="/products" className="text-blue-600 hover:underline">Sản phẩm</Link>
          </li>
          <li>
            <span className="mx-2">/</span>
          </li>
          <li aria-current="page">
            <span className="text-gray-500">{product.name}</span>
          </li>
        </ol>
      </nav>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          {/* Gallery hình ảnh */}
          <div className="md:w-1/2 p-4">
            <div className="mb-4 border rounded-lg overflow-hidden">
              <img 
                src={product.images[0]} 
                alt={product.name}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {product.images.map((image, index) => (
                <div key={index} className="border rounded-md overflow-hidden cursor-pointer">
                  <img 
                    src={image} 
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-24 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Thông tin chi tiết */}
          <div className="md:w-1/2 p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h1>
            
            {product.is_new && (
              <span className="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded-md mb-4">
                MỚI
              </span>
            )}

            <div className="mb-4">
              <span className="text-3xl font-bold text-red-600">
                {product.price.toLocaleString()}đ
              </span>
            </div>

            <div className="mb-6">
              <p className="text-gray-700 whitespace-pre-line">{product.description}</p>
            </div>

            {/* Màu sắc */}
            <div className="mb-4">
              <h3 className="text-sm font-semibold text-gray-700 mb-2">MÀU SẮC</h3>
              <div className="flex space-x-2">
                {product.colors.map((color, index) => (
                  <button 
                    key={index}
                    className={`w-10 h-10 rounded-full border-2 ${index === 0 ? 'border-blue-500' : 'border-gray-200'}`}
                    style={{ backgroundColor: color.toLowerCase() }}
                    title={color}
                  />
                ))}
              </div>
            </div>

            {/* Kích thước */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-700 mb-2">KÍCH THƯỚC</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button 
                    key={size}
                    className="px-4 py-2 border rounded-md hover:bg-gray-50"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Nút hành động */}
            <div className="flex space-x-4 mb-6">
              <div className="flex items-center border rounded-md">
                <button className="px-3 py-1 text-lg">-</button>
                <span className="px-4 py-1">1</span>
                <button className="px-3 py-1 text-lg">+</button>
              </div>
              <button className="flex-1 bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 transition">
                THÊM VÀO GIỎ
              </button>
            </div>

            {/* Thông số kỹ thuật */}
            <div className="border-t pt-4">
              <h3 className="text-lg font-semibold mb-3">THÔNG TIN SẢN PHẨM</h3>
              <table className="w-full text-sm">
                <tbody>
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <tr key={key} className="border-b">
                      <td className="py-3 text-gray-600 font-medium w-1/3">{key}</td>
                      <td className="py-3">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;