// Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Ví dụ icon hamburger/close

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="flex items-center justify-between bg-white border-b border-black p-2 relative"> {/* Thêm relative nếu menu mobile là absolute */}
      {/* Logo */}
      <div className="bg-lime-400 px-4 py-2 font-bold text-lg border-r border-black z-20"> {/* z-20 để logo nổi lên trên menu mobile nếu cần */}
        <Link to="/">T SHOP</Link>
      </div>

      {/* Desktop Navigation (Ẩn trên màn hình nhỏ hơn md) */}
      <nav className="hidden md:flex flex-1 justify-center space-x-8">
        <Link to="/" className="text-black hover:text-lime-500">Mẫu mới</Link>
        <Link to="/products" className="text-black hover:text-lime-500">Sản phẩm</Link>
        <Link to="/contact" className="text-black hover:text-lime-500">Liên hệ</Link>
        <Link to="/blog" className="text-black hover:text-lime-500">Blog</Link>
        <Link to="/QA" className="text-black hover:text-lime-500">Q&A</Link>
        <Link to="/about" className="text-black hover:text-lime-500">About</Link>
      </nav>

      {/* User & Cart (Luôn hiển thị) */}
      <div className="hidden md:flex items-center space-x-4 px-4">
         {/* Nút Đăng nhập và Giỏ hàng như cũ */}
         <button className="flex items-center space-x-2">
           <span className="text-black">Đ. nhập</span>
         </button>
         <div className="relative">
           <span className="absolute -top-1 -right-1 bg-lime-400 text-black text-xs px-1 rounded-full">0</span>
           <span className="text-black">🛍</span>
         </div>
      </div>

      {/* Hamburger Button (Hiển thị trên màn hình nhỏ hơn md) */}
      <div className="md:hidden flex items-center px-4">
         {/* Có thể thêm icon Giỏ hàng ở đây cho mobile nếu muốn */}
         <button onClick={toggleMobileMenu} className="text-black focus:outline-none">
           {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
         </button>
      </div>

      {/* Mobile Menu (Hiển thị dựa trên state) */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-black shadow-md md:hidden z-10">
          <nav className="flex flex-col items-center space-y-4 p-4">
            <Link to="/" className="text-black hover:text-lime-500" onClick={toggleMobileMenu}>Mẫu mới</Link>
            <Link to="/products" className="text-black hover:text-lime-500" onClick={toggleMobileMenu}>Sản phẩm</Link>
            <Link to="/contact" className="text-black hover:text-lime-500" onClick={toggleMobileMenu}>Liên hệ</Link>
            <Link to="/blog" className="text-black hover:text-lime-500" onClick={toggleMobileMenu}>Blog</Link>
             {/* Thêm nút Đăng nhập/Giỏ hàng vào đây cho mobile nếu cần */}
             <button className="flex items-center space-x-2 mt-4">
               <span className="text-black">Đ. nhập</span>
             </button>
             {/* Có thể thêm icon Giỏ hàng ở đây */}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;