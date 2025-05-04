import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Giả định bạn đang sử dụng react-router-dom cho việc điều hướng

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Hàm này sẽ mô phỏng việc lấy dữ liệu từ API của bạn
    const fetchLatestProducts = async () => {
      try {
        // --------------------------------------------------------------
        // THAY THẾ ĐOẠN NÀY BẰNG CÚ PHÁP GỌI API THỰC TẾ CỦA BẠN
        // Ví dụ:
        // const response = await fetch('/api/latest-products?limit=8');
        // if (!response.ok) {
        //   throw new Error(`HTTP error! status: ${response.status}`);
        // }
        // const data = await response.json();
        // setProducts(data);
        // --------------------------------------------------------------

        // Dưới đây là cách mô phỏng với dữ liệu cứng, bạn sẽ xóa đoạn này
        // khi đã có API thực tế.
        const simulatedProductData = [
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

        // Trong trường hợp API trả về nhiều hơn 8 sản phẩm,
        // bạn sẽ cần thêm `.slice(0, 8)` ở đây.
        // Nhưng nếu API đã giới hạn 8, bạn chỉ cần dùng `setProducts(data);`
        const latestProducts = simulatedProductData.slice(0, 8);
        setProducts(latestProducts);
        // Kết thúc phần mô phỏng
        
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchLatestProducts();
  }, []); // Mảng rỗng đảm bảo useEffect chỉ chạy một lần sau render đầu tiên

  if (loading) {
    return <div className="text-center py-16">Đang tải sản phẩm...</div>;
  }

  if (error) {
    return <div className="text-center py-16 text-red-500">Lỗi khi tải sản phẩm: {error.message}</div>;
  }

  return (
    <div className="flex-grow">
      {/* Banner */}
      <section className="text-center py-16">
        <h1 className="text-6xl font-bold mb-4">T SHOP</h1>
        <p className="bg-lime-400 inline-block px-6 py-2 mb-8 text-lg">Luôn tự tin là chính mình</p>
        {/* Đã bỏ 3 hình trên và nút "Mẫu mới" */}
      </section>

      {/* Danh sách sản phẩm mới nhất */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-8">Mẫu mới nhất</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-8 px-4">
          {/* Map qua mảng products đã được cập nhật từ state */}
          {products.map((product, index) => (
            <div key={index} className="text-center">
              {/* Sử dụng placeholder hoặc hình ảnh thực tế từ dữ liệu API */}
              <div className="bg-gray-100 h-48 flex items-center justify-center text-6xl mx-auto border border-3 border-solid w-full sm:w-56 sm:h-64 object-cover">
                {/* Thay thế product.placeholder bằng <img src={product.imageUrl} alt={product.title} /> */}
                {product.placeholder || '📦'} {/* Sử dụng placeholder mặc định nếu không có */}
              </div>
              <p className="mt-4 text-lg font-semibold">{product.title || 'Sản phẩm'}</p>
              <p className="text-md text-gray-700">{product.price || 'N/A'}</p>
            </div>
          ))}
        </div>
        {/* Nút "Mua mẫu mới" đã được cập nhật để dẫn tới ProductPage */}
        <Link to="/products" className="bg-black text-white px-8 py-3 text-lg inline-block">
          Mua mẫu mới
        </Link>
      </section>

      {/* Banner khuyến mãi */}
      <section className="bg-gradient-to-r from-lime-400 to-green-300 text-center py-8">
        <h2 className="text-5xl font-bold mb-2">GIẢM SỐC! GIẢM 25%</h2>
        <p className="text-lg">toàn bộ sản phẩm khi nhập mã TEES25</p>
      </section>
    </div>
  );
};

export default HomePage;