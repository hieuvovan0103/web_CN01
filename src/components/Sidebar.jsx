import React from "react";

const Sidebar = ({ filterOptions, filters, onFilterChange, currentCategory }) => {
  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    onFilterChange({ [name]: parseFloat(value) || 0 });
  };

  const handleColorToggle = (color) => {
    const newColors = filters.colors.includes(color)
      ? filters.colors.filter(c => c !== color)
      : [...filters.colors, color];
    onFilterChange({ colors: newColors });
  };

  const handleSizeToggle = (size) => {
    const newSizes = filters.sizes.includes(size)
      ? filters.sizes.filter(s => s !== size)
      : [...filters.sizes, size];
    onFilterChange({ sizes: newSizes });
  };

  const handleBrandToggle = (brand) => {
    const newBrands = filters.brands.includes(brand)
      ? filters.brands.filter(b => b !== brand)
      : [...filters.brands, brand];
    onFilterChange({ brands: newBrands });
  };

  const handleCategoryChange = (categoryId) => {
    onFilterChange({ category: categoryId });
  };

  return (
    <div className="w-64 p-4 bg-white shadow-md">
  {/* Bộ lọc Danh mục */}
  <div className="mb-6">
    <h2 className="font-bold text-lg mb-3 text-gray-800 border-b pb-2">Danh mục</h2>
    <ul className="space-y-2">
      <li className="flex items-center">
        <input type="checkbox" id="category-1" className="mr-2" />
        <label htmlFor="category-1" className="text-gray-700">Áo thun</label>
      </li>
      <li className="flex items-center">
        <input type="checkbox" id="category-2" className="mr-2" />
        <label htmlFor="category-2" className="text-gray-700">Áo sơ mi</label>
      </li>
    </ul>
  </div>

  {/* Bộ lọc Giá */}
  <div className="mb-6">
    <h2 className="font-bold text-lg mb-3 text-gray-800 border-b pb-2">Giá</h2>
    <div className="flex items-center justify-between mb-2">
      <span className="text-sm text-gray-600">0đ</span>
      <span className="text-sm text-gray-600">1.000.000đ</span>
    </div>
    <input
      type="range"
      min="0"
      max="1000000"
      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
    />
    <div className="flex justify-between mt-3">
      <input
        type="number"
        placeholder="Từ"
        className="w-24 p-2 border rounded text-sm"
      />
      <input
        type="number"
        placeholder="Đến"
        className="w-24 p-2 border rounded text-sm"
      />
    </div>
  </div>

  {/* Bộ lọc Thương hiệu */}
  <div className="mb-6">
    <h2 className="font-bold text-lg mb-3 text-gray-800 border-b pb-2">Thương hiệu</h2>
    <ul className="space-y-2">
      <li className="flex items-center">
        <input type="checkbox" id="brand-nike" className="mr-2" />
        <label htmlFor="brand-nike" className="text-gray-700">Nike</label>
      </li>
      <li className="flex items-center">
        <input type="checkbox" id="brand-adidas" className="mr-2" />
        <label htmlFor="brand-adidas" className="text-gray-700">Adidas</label>
      </li>
    </ul>
  </div>

  {/* Bộ lọc Màu sắc */}
  <div className="mb-6">
    <h2 className="font-bold text-lg mb-3 text-gray-800 border-b pb-2">Màu sắc</h2>
    <div className="flex flex-wrap gap-2">
      {['Đỏ', 'Xanh', 'Đen', 'Trắng', 'Vàng'].map(color => (
        <button
          key={color}
          className="w-8 h-8 rounded-full border border-gray-200"
          style={{ backgroundColor: color.toLowerCase() }}
          title={color}
        />
      ))}
    </div>
  </div>

  {/* Bộ lọc Kích cỡ */}
  <div className="mb-6">
    <h2 className="font-bold text-lg mb-3 text-gray-800 border-b pb-2">Kích cỡ</h2>
    <div className="flex flex-wrap gap-2">
      {['S', 'M', 'L', 'XL'].map(size => (
        <button
          key={size}
          className="px-3 py-1 border rounded-md text-sm hover:bg-gray-100"
        >
          {size}
        </button>
      ))}
    </div>
  </div>
</div>
  );
};

export default Sidebar;