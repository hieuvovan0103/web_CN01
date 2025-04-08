import React from 'react';

const ContactPage = () => {
  return (
    <div className="flex-grow">
      <section className="py-16 max-w-md mx-auto text-center">
        <h2 className="text-5xl font-bold mb-8">Liên hệ vui chóng tói</h2>
        <form className="space-y-6">
          <div className="text-left">
            <label className="block mb-2 text-lg">Nhập họ và tên</label>
            <input
              type="text"
              placeholder="Nhập họ và tên"
              className="w-full p-3 border border-gray-300 rounded text-lg"
            />
          </div>
          <div className="text-left">
            <label className="block mb-2 text-lg">Nhập email</label>
            <input
              type="email"
              placeholder="Nhập email"
              className="w-full p-3 border border-gray-300 rounded text-lg"
            />
          </div>
          <div className="text-left">
            <label className="block mb-2 text-lg">Nhập số điện thoại</label>
            <input
              type="tel"
              placeholder="Nhập số điện thoại"
              className="w-full p-3 border border-gray-300 rounded text-lg"
            />
          </div>
          <div className="text-left">
            <label className="block mb-2 text-lg">Nhập tin nhắn của bạn</label>
            <textarea
              placeholder="Nhập tin nhắn của bạn"
              className="w-full p-3 border border-gray-300 rounded h-40 text-lg"
            ></textarea>
          </div>
          <button type="submit" className="bg-black text-white px-8 py-3 rounded text-lg">
            Gửi
          </button>
        </form>
      </section>
    </div>
  );
};

export default ContactPage;