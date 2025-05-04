import React from 'react';

const Blog = () => {
  return (
    <div>
        <section className="post-content">
        <div class="container">
            <h1>Tiêu đề bài viết</h1>
            <div class="text-gray-500 mb-5">
                <p>Tác giả: Admin | Ngày đăng: 08/04/2025 </p>
            </div>
            <img src="https://via.placeholder.com/1200x400" alt="Hình ảnh nổi bật" class="w-100 h-auto mb-5"/>
            <div class="content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <h2>Tiêu đề phụ 1</h2>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <img src="https://via.placeholder.com/600x300" alt="Hình minh họa"/>
                <h2>Tiêu đề phụ 2</h2>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
        </div>
    </section>

    <section class="related-posts">
        <div class="container">
            <h3>Bài viết liên quan</h3>
            <div class="grid grid-cols-2 gap-5">
                <div class="post-card">
                    <img src="https://via.placeholder.com/300x200" alt="Bài viết 1"/>
                    <h2><a href="#">Tiêu đề bài viết 1</a></h2>
                </div>
                <div class="post-card">
                    <img src="https://via.placeholder.com/300x200" alt="Bài viết 2"/>
                    <h2><a href="#">Tiêu đề bài viết 2</a></h2>
                </div>
            </div>
        </div>
    </section>
    </div>
  );
};

export default Blog;