import React from 'react';

const HomePage = () => {
  const products = [
    { id: 1, name: 'sản phẩm', price: '150.000đ', image: 'https://via.placeholder.com/200' },
    { id: 2, name: 'sản phẩm', price: '150.000đ', image: 'https://via.placeholder.com/200' },
    { id: 3, name: 'sản phẩm', price: '150.000đ', image: 'https://via.placeholder.com/200' },
    { id: 4, name: 'sản phẩm', price: '150.000đ', image: 'https://via.placeholder.com/200' },
  ];

  return (
    <div className="flex-grow">
      {/* Banner */}
      <section className="text-center py-16">
        <h1 className="text-6xl font-bold mb-4">T SHOP</h1>
        <p className="bg-lime-400 inline-block px-6 py-2 mb-8 text-lg">Luôn tự tin là chính mình</p>
        <div className="flex justify-center gap-8 mb-8">
          <img src="https://via.placeholder.com/300x400" alt="Model 1" className="w-72 h-96 object-cover" />
          <img src="https://via.placeholder.com/300x400" alt="Model 2" className="w-72 h-96 object-cover" />
          <img src="https://via.placeholder.com/300x400" alt="Model 3" className="w-72 h-96 object-cover" />
        </div>
        <button className="bg-black text-white px-8 py-3 text-lg">Mẫu mới</button>
      </section>

      {/* Danh sách sản phẩm */}
      <section className="py-16 text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8 px-4">
          {products.map((product) => (
            <div key={product.id} className="text-center">
              <img src={product.image} alt={product.name} className="w-56 h-64 object-cover mx-auto" />
              <p className="mt-4 text-lg">{product.name}</p>
              <p className="text-gray-600">{product.price}</p>
            </div>
          ))}
        </div>
        <button className="bg-black text-white px-8 py-3 text-lg">Mua mẫu mới</button>
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