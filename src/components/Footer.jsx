import React from 'react';
import { Facebook, Instagram, Youtube, Github, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full border border-black">
      <div className="flex flex-col md:flex-row">
        <div className="bg-black text-white p-8 md:w-1/3">
          <div>
            <h2 className="text-2xl font-bold mb-8">T SHOP</h2>
            <div className="space-y-2">
              <p>lienhe@web.com</p>
              <p>ĐT: 024 3456 7890</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-8 flex-1 flex justify-around">
      
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
      

      <div className="flex items-center">

        <div className="flex space-x-6 p-8 md:w-1/3 ">
          <Facebook size={20} className="cursor-pointer hover:text-gray-400 transition-colors" />
          <Instagram size={20} className="cursor-pointer hover:text-gray-400 transition-colors" />
          <Youtube size={20} className="cursor-pointer hover:text-gray-400 transition-colors" />
          <Github size={20} className="cursor-pointer hover:text-gray-400 transition-colors" />
          <Twitter size={20} className="cursor-pointer hover:text-gray-400 transition-colors" />
        </div>
        
        <div className="bg-lime-400 flex-1 text-center p-8 border border-black">
          © 2035 bản quyền của T Shop. Tự hào tạo ra với <a className="underline text-inherit cursor-pointer hover:text-gray-500 transition-colors">Wix.com</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;