CREATE DATABASE IF NOT EXISTS `t_shop` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE `t_shop`;

-- Users table
CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(100),
    phone_number VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Categories table
CREATE TABLE categories (
    category_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    parent_id INT,
    FOREIGN KEY (parent_id) REFERENCES categories(category_id)
);

-- Brands table
CREATE TABLE brands (
    brand_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    description TEXT
);

-- Products table
CREATE TABLE products (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    category_id INT,
    brand_id INT,
    is_featured BOOLEAN DEFAULT FALSE,
    is_new BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(category_id),
    FOREIGN KEY (brand_id) REFERENCES brands(brand_id)
);

-- Product images table
CREATE TABLE product_images (
    image_id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    is_primary BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (product_id) REFERENCES products(product_id) ON DELETE CASCADE
);

-- Product variants (for colors and sizes)
CREATE TABLE product_variants (
    variant_id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT NOT NULL,
    color VARCHAR(50),
    size VARCHAR(10),
    stock_quantity INT DEFAULT 0,
    sku VARCHAR(50),
    FOREIGN KEY (product_id) REFERENCES products(product_id) ON DELETE CASCADE
);

-- Orders table
CREATE TABLE orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    total_amount DECIMAL(10, 2) NOT NULL,
    status ENUM('pending', 'processing', 'shipped', 'delivered', 'cancelled') DEFAULT 'pending',
    shipping_address TEXT,
    payment_method VARCHAR(50),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- Order items table
CREATE TABLE order_items (
    order_item_id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    variant_id INT,
    quantity INT NOT NULL,
    unit_price DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(order_id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(product_id),
    FOREIGN KEY (variant_id) REFERENCES product_variants(variant_id)
);

-- Shopping cart table
CREATE TABLE carts (
    cart_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

-- Cart items table
CREATE TABLE cart_items (
    cart_item_id INT AUTO_INCREMENT PRIMARY KEY,
    cart_id INT NOT NULL,
    product_id INT NOT NULL,
    variant_id INT,
    quantity INT NOT NULL DEFAULT 1,
    added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (cart_id) REFERENCES carts(cart_id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(product_id),
    FOREIGN KEY (variant_id) REFERENCES product_variants(variant_id)
);

-- Blog posts table
CREATE TABLE blog_posts (
    post_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    author_id INT,
    featured_image VARCHAR(255),
    published_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    is_published BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (author_id) REFERENCES users(user_id)
);

-- Blog post categories
CREATE TABLE blog_categories (
    category_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    description TEXT
);

-- Blog post to category mapping
CREATE TABLE blog_post_categories (
    post_id INT NOT NULL,
    category_id INT NOT NULL,
    PRIMARY KEY (post_id, category_id),
    FOREIGN KEY (post_id) REFERENCES blog_posts(post_id) ON DELETE CASCADE,
    FOREIGN KEY (category_id) REFERENCES blog_categories(category_id)
);

-- Contact messages table
CREATE TABLE contact_messages (
    message_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20),
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_read BOOLEAN DEFAULT FALSE
);

INSERT INTO blog_posts (post_id, title, content, featured_image, published_at) VALUES
(1, 'Gợi Ý Trang Phục Đi Dã Ngoại Picnic Hè Đẹp Nhất', 'Chọn trang phục đi dã ngoại cho nữ không chỉ cần thoải mái mà còn phải giúp bạn tự tin tỏa sáng trong những bức ảnh sống ảo. Mùa hè rực rỡ là thời điểm lý tưởng để diện những bộ cánh vừa năng động, vừa nữ tính.

Hãy cùng Lamer khám phá 6 gợi ý phối đồ dưới đây để chuyến picnic của bạn trở nên hoàn hảo, vừa tận hưởng không khí thiên nhiên, vừa ghi điểm với diện mạo trẻ trung thanh lịch.

<h4>Áo sơ mi phối chân váy chữ A<h4>
Một trong những lựa chọn trang phục đi dã ngoại cho nữ vừa thoải mái vừa thời trang chính là combo áo sơ mi phối chân váy chữ A. Set đồ này giúp bạn dễ dàng di chuyển, tham gia các hoạt động ngoài trời mà vẫn giữ được nét nữ tính, trẻ trung. 

Áo sơ mi tạo sự chỉn chu, trong khi chân váy chữ A giúp tôn lên vóc dáng nhẹ nhàng, uyển chuyển. Outfit này cực kỳ lý tưởng cho những buổi picnic tại công viên hoặc những chuyến dã ngoại ngoài trời mát mẻ. Đặc biệt, kiểu phối này còn rất dễ mix cùng sneaker trắng, túi tote hoặc mũ lưỡi trai để tăng phần năng động.

<h4>Áo croptop phối quần ống rộng<h4>
Nhắc đến trang phục đi dã ngoại cho nữ, sự kết hợp giữa áo croptop và quần ống rộng luôn là lựa chọn trẻ trung, thời thượng không thể bỏ qua. Croptop khoe khéo vòng eo thon, còn quần ống rộng đem lại sự thoáng mát và dễ chịu suốt cả ngày dài di chuyển.

Set đồ này không chỉ giúp bạn trông cao ráo hơn mà còn tạo cảm giác cực kỳ tự do, phóng khoáng. Khi đi picnic, một outfit vừa hợp thời vừa tiện lợi như thế này sẽ giúp bạn thoải mái vui chơi, check-in mọi lúc mọi nơi. Để thêm phần nổi bật, bạn có thể kết hợp cùng mũ rộng vành hoặc một chiếc kính râm sành điệu. 
', 'https://file.hstatic.net/1000184601/article/9-7_75f136a94b834cbebcacb5a1be354838.jpg', '2025-04-29 16:22:03'),
(2, 'Gợi Ý Outfit Đi Biển Kín Đáo Mà Vẫn Đẹp Hút Mắt Cho Nàng', 'Khi đi du lịch biển, những outfit quá "mát mẻ" không phải lúc nào cũng là lựa chọn hàng đầu. Nếu bạn muốn tìm một phong cách đi biển kín đáo hơn nhưng vẫn nổi bật, thì những bộ trang phục tinh tế, nhẹ nhàng vẫn đủ sức thu hút mọi ánh nhìn. Hôm nay, hãy cùng Lamer khám phá những gợi ý trang phục đi biển phù hợp, vừa che chắn khéo léo, vừa tôn lên nét đẹp tự nhiên nhé!

<h4>Váy maxi cổ yếm<h4>
Diện váy maxi cổ yếm là lựa chọn lý tưởng để trở thành tâm điểm trên bãi biển mà vẫn giữ nét kín đáo. Thiết kế cổ yếm nhẹ nhàng, giúp bạn khoe khéo bờ vai, mang lại vẻ thanh thoát giữa không khí biển cả.Dáng váy dài thướt tha không chỉ giúp bạn tự tin di chuyển mà còn tạo cảm giác bay bổng, rất hợp với khung cảnh sóng vỗ. Bạn có thể kết hợp item này cùng sandal đế bệt và mũ rộng vành để làm nổi bật phong cách mùa hè. 

<h4>Đầm sát nách dáng xòe<h4>
Đầm sát nách dáng xòe là item mang đến sự trẻ trung và thanh lịch, rất lý tưởng cho một ngày dạo biển đầy nắng. Kiểu dáng đầm sát nách giúp bạn dễ dàng vận động, trong khi dáng xòe nhẹ giúp che khuyết điểm khéo léo, tạo cảm giác thoải mái giữa thời tiết nóng bức. ', 'https://file.hstatic.net/1000178779/article/thumbnail-goi-y-outfit-di-bien-kin-dao-thu-hut_16ac8fe027554ba29c2cd2e0977b8b34.jpg', '2025-04-18 10:11:57'),
(3, 'Gợi Ý Mix & Match Chân Váy Công Sở Mùa Hè – Đẹp, Nhẹ Nhàng, Chuẩn Thanh Lịch', 'Phối đồ với chân váy đi làm mùa hè là cách hoàn hảo để bạn vừa thoải mái dưới cái nắng oi ả, vừa giữ được vẻ ngoài thật xịn. Chỉ với vài cách kết hợp đơn giản, chiếc chân váy quen thuộc sẽ giúp bạn biến hóa từ thanh lịch đến tươi mới trong tích tắc. 

<h4>Vì sao nên chọn mặc chân váy đi làm mùa hè?<h4>
Mùa hè nắng nóng khiến việc chọn trang phục công sở trở thành thử thách lớn với nhiều người. Chân váy xuất hiện như giải pháp hoàn hảo, mang đến sự thoải mái suốt ngày làm việc dài. So với quần dài dễ gây cảm giác bí bách, chân váy giúp bạn luôn cảm thấy thoáng mát, dễ chịu hơn.
Đặc biệt, với nhiều kiểu dáng phong phú, các mẫu chân váy không chỉ giúp bạn trông thanh lịch mà còn giữ được vẻ chuyên nghiệp nơi công sở. Chân váy cũng dễ dàng phối hợp với nhiều loại áo, giúp tiết kiệm thời gian chuẩn bị mỗi sáng. Đây chính là lựa chọn lý tưởng để bạn tự tin bước qua những ngày hè oi ả.

<h4>5 cách phối đồ với chân váy đi làm mùa hè<h4>
Mùa hè là dịp tuyệt vời để bạn làm mới phong cách với những chiếc chân váy đa năng. Dưới đây là 5 cách phối đồ với chân váy giúp bạn vừa nổi bật, vừa phù hợp môi trường công sở. 

<h4>Chân váy dáng A phối áo sơ mi<h4>
Chân váy dáng A dài đến gối phối cùng áo sơ mi tạo vẻ ngoài thanh lịch, tinh tế. Dáng chân váy chữ A giúp tôn vòng eo nhỏ nhắn, đồng thời che khuyết điểm hông một cách khéo léo. Áo sơ mi với tông màu đơn sắc mang đến sự chuyên nghiệp, không kém phần cuốn hút.', 'https://file.hstatic.net/1000178779/article/chon_vay_maxi_cho_nu_thap_b37d92b3657b428ea864ee7432e556f3.jpg', '2025-04-02 09:49:34'),
(4, '10 mẫu áo sơ mi đi đám cưới cho nữ đẹp cuốn hú', 'Áo sơ mi đi đám cưới là lựa chọn hoàn hảo cho những cô nàng yêu thích sự thanh lịch và cuốn hút. Với thiết kế...', 'https://file.hstatic.net/1000178779/article/ao_so_mi_du_tiec_cuoi_e07ca57f2e5a4af8850af05884d950c8.jpg', '2025-03-27 15:02:03'),
(5, 'Chơi pickleball mặc gì? Top 10 trang phục pickleball nổi bật', 'Trang phục thể thao như áo thun, quần short, giày thể thao có lẽ đã quá quen thuộc với nhiều người khi tham gia các hoạt động thể thao. Tuy nhiên, đối với pickleball,...', 'https://lamia.com.vn/storage/banner-sale/trang-phuc-pickleball-nu.jpg', '2025-03-24 11:13:51'),
(6, 'Lựa chọn trang phục với họa tiết thổ cẩm siêu ấn tượng', 'Trong những năm gần đây, bên cạnh những họa tiết như floral, caro, gingham,… luôn được lòng giới yêu thời trang...', 'https://cdn.shortpixel.ai/spai2/w_472+q_lossless+ret_img+to_webp/https://zofal.vn/wp-content/uploads/2024/02/Du%CC%9B%CC%A3-a%CC%81n-mo%CC%9B%CC%81i-1-1.png', '2024-02-24 12:25:01');