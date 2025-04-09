import React from 'react';

const BlogList = () => {
  return (
    <div>
      <section class="search-bar">
        <div class="container">
            <input type="text" placeholder="Tìm kiếm bài viết..." id="search-input" />
            <button class="bg-lime-400 text-black ms-2">Tìm</button>
        </div>
      </section>

      <section class="py-10">
        <div>
            <div class="grid grid-cols-3 gap-5">
                <div class="post-card">
                    <img src="https://via.placeholder.com/300x200" alt="Bài viết 1" />
                    <h2><a href="Blog.jsx" class="text-lime-400 hover:text-lime-500">Tiêu đề bài viết 1</a></h2>
                    <p>Ngày đăng: 08/04/2025</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div class="post-card">
                    <img src="https://via.placeholder.com/300x200" alt="Bài viết 2" />
                    <h2><a href="post.html" class="text-lime-400 hover:text-lime-500">Tiêu đề bài viết 2</a></h2>
                    <p>Ngày đăng: 07/04/2025</p>
                    <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div class="post-card">
                    <img src="https://via.placeholder.com/300x200" alt="Bài viết 3" />
                    <h2><a href="post.html" class="text-lime-400 hover:text-lime-500">Tiêu đề bài viết 3</a></h2>
                    <p>Ngày đăng: 06/04/2025</p>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                </div>
            </div>
            <button class="block bg-black hover: text-white px-8 py-3 text-lg mt-3 m-auto">Tải thêm</button>
        </div>
    </section>
    </div>
  );
};

export default BlogList;