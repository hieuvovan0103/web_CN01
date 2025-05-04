import React from 'react';

const ContactPage = () => {
  return (
    // Sử dụng min-h-[calc(100vh-X)] nếu cần đảm bảo chiều cao tối thiểu trừ đi header/footer
    // Hoặc giữ nguyên flex-grow nếu Layout component xử lý việc này
    <div className="flex-grow flex items-center justify-center"> {/* Thêm flex items-center justify-center để căn giữa section theo chiều dọc nếu cần */}
      {/* Thay đổi padding và thêm px */}
      <section className="py-8 sm:py-12 md:py-16 px-4 w-full max-w-md text-center"> {/* Thêm w-full và px-4 */}
        {/* Điều chỉnh kích thước chữ tiêu đề */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">Liên hệ với chúng tôi</h2>
        <form className="space-y-6">
          <div className="text-left">
            {/* Giữ nguyên text-lg hoặc đổi thành text-base sm:text-lg */}
            <label className="block mb-2 text-lg">Nhập họ và tên</label>
            <input
              type="text"
              placeholder="Nhập họ và tên"
              className="w-full p-3 border border-gray-300 rounded text-lg focus:border-lime-500 focus:ring-lime-500" // Thêm hiệu ứng focus
            />
          </div>
          <div className="text-left">
            <label className="block mb-2 text-lg">Nhập email</label>
            <input
              type="email"
              placeholder="Nhập email"
              className="w-full p-3 border border-gray-300 rounded text-lg focus:border-lime-500 focus:ring-lime-500"
            />
          </div>
          <div className="text-left">
            <label className="block mb-2 text-lg">Nhập số điện thoại</label>
            <input
              type="tel"
              placeholder="Nhập số điện thoại"
              className="w-full p-3 border border-gray-300 rounded text-lg focus:border-lime-500 focus:ring-lime-500"
            />
          </div>
          <div className="text-left">
            <label className="block mb-2 text-lg">Nhập tin nhắn của bạn</label>
            <textarea
              placeholder="Nhập tin nhắn của bạn"
              className="w-full p-3 border border-gray-300 rounded h-40 text-lg focus:border-lime-500 focus:ring-lime-500"
              rows="5" // Có thể thêm rows để gợi ý chiều cao
            ></textarea>
          </div>
          {/* Có thể điều chỉnh padding/font-size của button nếu muốn */}
          <button type="submit" className="bg-black text-white px-8 py-3 rounded text-lg hover:bg-gray-800 transition-colors duration-200">
            Gửi
          </button>
        </form>
      </section>
    </div>
  );
};

export default ContactPage;