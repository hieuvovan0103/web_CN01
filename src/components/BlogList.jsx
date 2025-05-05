import React, { useState, useEffect } from 'react';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch blogs when the component mounts
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('http://localhost/backend/authentication/getBlog.php'); // Replace with your API URL
        const data = await response.json();
        if (data.error) {
          console.error(data.error);
          return;
        }
        setBlogs(data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  // Handle search input
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter blogs based on search query
  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <section className="search-bar">
        <div className="container ms-5">
          <input
            type="text"
            placeholder="Tìm kiếm bài viết..."
            id="search-input"
            value={searchQuery}
            onChange={handleSearch}
          />
          <button className="p-3 bg-lime-400 text-black ms-2">Tìm</button>
        </div>
      </section>

      <section className="py-10">
        <div>
          <div className="flex flex-col space-y-7 p-3 md:space-y-0 md:grid md:grid-cols-3 md:gap-5">
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((blog) => (
                <div key={blog.id} className="post-card">
                  <img
                    src={blog.image || 'https://via.placeholder.com/300x200'} // Fallback image if none exists
                    alt={blog.title}
                  />
                  <h2>
                    <a
                      href={`/blog/${blog.id}`} // Link to individual blog page
                      className="text-lime-400 hover:text-lime-500"
                    >
                      {blog.title}
                    </a>
                  </h2>
                  <p>Ngày đăng: {blog.date}</p>
                  <p>{blog.excerpt}</p>
                </div>
              ))
            ) : (
              <p>Không có bài viết nào.</p>
            )}
          </div>
          <button className="block bg-black text-white hover:text-lime-400 px-8 py-3 text-lg mt-3 m-auto">
            Tải thêm
          </button>
        </div>
      </section>
    </div>
  );
};

export default BlogList;