// src/components/Sidebar.jsx
import React, { useState } from "react";

const Sidebar = () => {
  const [selectedColor, setSelectedColor] = useState(null);

  return (
    <div className="w-64 h-[600px] p-4 bg-gray-50">
      {/* Bộ lọc giá */}
      <div className="mb-6">
        <h2 className="font-bold text-lg mb-2 text-black text-left">Giá</h2>
        <div className="flex space-x-2 text-black">
          <input
            type="number"
            placeholder="Từ"
            className="w-full p-2 border border-gray-300 rounded bg-white text-black"
          />
          <input
            type="number"
            placeholder="Đến"
            className="w-full p-2 border border-gray-300 rounded bg-white text-black"
          />
        </div>
      </div>

      {/* Bộ lọc thương hiệu */}
      <div className="mb-6">
        <h2 className="font-bold text-lg mb-2 text-black text-left">Thương hiệu</h2>
        <ul className="space-y-1">
          <li className="flex items-center text-black">
            <input type="checkbox" id="type1" className="mr-2" />
            <label htmlFor="type1">Type 1</label>
          </li>
          {/* Thêm các thương hiệu khác... */}
        </ul>
      </div>

      {/* Bộ lọc màu sắc */}
      <div className="mb-6">
        <h3 className="font-bold text-lg mb-2 text-black text-left">Màu sắc</h3>
        <div className="flex flex-wrap gap-2">
          {['Red', 'Blue', 'Green', 'Black', 'White', 'Yellow'].map(color => (
            <button
              key={color}
              className={`w-6 h-6 rounded-full cursor-pointer border-2 ${
                selectedColor === color 
                  ? 'border-blue-500 ring-2 ring-blue-300' 
                  : 'border-transparent'
              }`}
              style={{ backgroundColor: color.toLowerCase() }}
              title={color}
              onClick={() => setSelectedColor(prev => prev === color ? null : color)}
              aria-label={`Chọn màu ${color}`}
            />
          ))}
        </div>
      </div>

      {/* Bộ lọc kích cỡ */}
      <div>
        <h2 className="font-bold text-lg mb-2 text-black text-left">Kích cỡ</h2>
        <ul className="space-y-1">
          <li className="flex items-center text-black">
            <input type="checkbox" id="sizeS" className="mr-2" />
            <label htmlFor="sizeS">S</label>
          </li>
          {/* Thêm các size khác... */}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;