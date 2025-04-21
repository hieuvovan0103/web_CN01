import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-white border-b border-black p-2">
      {/* Logo */}
      <div className="bg-lime-400 px-4 py-2 font-bold text-lg border-r border-black">
        T SHOP
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 flex justify-center space-x-8">
        <Link to="/" className="text-black">Mẫu mới</Link>  
        <Link to="/products" className="text-black">Sản phẩm</Link>
        <Link to="/contact" className="text-black">Liên hệ</Link>
        <Link to="/blog" className="text-black">Blog</Link>
      </nav>
      
      {/* User & Cart */}
      <div className="flex items-center space-x-4 px-4">
        <button className="flex items-center space-x-2">
          <span className="text-black">Đ. nhập</span>
        </button>
        <div className="relative">
          <span className="absolute -top-1 -right-1 bg-lime-400 text-black text-xs px-1 rounded-full">0</span>
          <span className="text-black">🛍</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
