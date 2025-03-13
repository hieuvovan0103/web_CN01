function Footer() {
  return (
    <footer class="bg-gray-900 text-white text-center py-6 mt-auto">
      <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                  <h5 class="text-lg font-semibold mb-2">Về Chúng Tôi</h5>
                  <p>Shop thời trang chuyên cung cấp quần áo chất lượng với giá tốt nhất.</p>
              </div>
              <div>
                  <h5 class="text-lg font-semibold mb-2">Liên Hệ</h5>
                  <p>Email: contact@shopquanao.com</p>
                  <p>Hotline: 0123-456-789</p>
                  <p>Địa chỉ: 123 Đường ABC, Quận XYZ, TP. HCM</p>
              </div>
              <div>
                  <h5 class="text-lg font-semibold mb-2">Theo Dõi Chúng Tôi</h5>
                  <a href="#" class="text-yellow-400 hover:underline">Facebook</a> | 
                  <a href="#" class="text-yellow-400 hover:underline">Instagram</a> | 
                  <a href="#" class="text-yellow-400 hover:underline">TikTok</a>
              </div>
          </div>
      </div>
      <div class="mt-4 text-sm">
          <p>&copy; 2025 Shop Quần Áo. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;