import React from 'react';
import { Facebook, Instagram, Youtube, Github, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full border ">
      <div className="flex flex-col lg:flex-row">
        <div className="bg-black text-center text-white p-3 lg:w-1/3 lg:p-8 lg:text-left">
          <div>
            <h2 className="font-bold text-xl lg:text-2xl lg:mb-8">T SHOP</h2>
            <div className="space-y-2">
              <p>lienhe@web.com</p>
              <p>ĐT: 024 3456 7890</p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col space-y-4 bg-white text-center p-3 md:space-y-0 md:flex-row flex-1 justify-around lg:p-8">
      
          <div className="space-y-4">
            <h3 className="font-medium text-lg">Mua sắm</h3>
            <ul className="space-y-2 text-sm">
              <li>Mẫu mới</li>
              <li>Áo thun nữ</li>
              <li>Áo thun nam</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-medium text-lg">Cửa hàng</h3>
            <ul className="space-y-2 text-sm">
              <li>Về chúng tôi</li>
              <li>Đăng ký</li>
              <li>Hỏi đáp</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-medium text-lg">Điều khoản & Điều kiện</h3>
            <ul className="space-y-2 text-sm">
              <li>Chính sách cửa hàng</li>
              <li>Giao hàng & Đổi trả</li>
              <li>PT thanh toán</li>
            </ul>
          </div>
        </div>
      </div>
      

      <div className="flex flex-col items-center lg:flex-row">

        <div className="flex space-x-6 p-4 lg:p-8 lg:w-1/3">
          <Facebook size={20} className="cursor-pointer hover:text-gray-400 transition-colors" />
          <Instagram size={20} className="cursor-pointer hover:text-gray-400 transition-colors" />
          <Youtube size={20} className="cursor-pointer hover:text-gray-400 transition-colors" />
          <Github size={20} className="cursor-pointer hover:text-gray-400 transition-colors" />
          <Twitter size={20} className="cursor-pointer hover:text-gray-400 transition-colors" />
        </div>
        
        <div className="bg-lime-400 text-center flex-1 p-4 w-full text-center border ">
          NHÓM 7
        </div>
      </div>
    </footer>
  );
}

export default Footer;