import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";


const Blog = () => {
  const { id } = useParams(); // Get the blog ID from the URL
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch blog post when the component mounts
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`http://localhost/backend/authentication/getBlog.php?id=${id}`); // Replace with your API URL
        const data = await response.json();
        if (data.error) {
          console.error(data.error);
          return;
        }
        setBlog(data);
      } catch (error) {
        console.error('Error fetching blog:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) return <p>Đang tải...</p>;
  if (!blog) return <p>Bài viết không tồn tại.</p>;

  return (
    <div className="p-10">
      <section className="post-content">
        <div className="container">
          <h1 className="text-4xl font-bold mb-10">{blog.title}</h1>
          <div className="text-gray-500 mb-5">
            <p>Tác giả: Admin | Ngày đăng: {blog.date}</p>
          </div>
          <img
            src={blog.featured_image || 'https://via.placeholder.com/1200x400'}
            alt="Hình ảnh nổi bật"
            className="w-50 mb-5"
          />
          <div className="content prose">
            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
          </div>
        </div>
      </section>

      <section className="related-posts mt-5">
        <div className="container">
          <h3 className="text-2xl font-semibold mb-4">Bài viết liên quan</h3>
          <div className="flex flex-col space-y-7 md:space-y-0 md:grid md:grid-cols-2 md:gap-5">
            {blog.related_posts && blog.related_posts.length > 0 ? (
              blog.related_posts.map((relatedPost) => (
                <div key={relatedPost.id} className="post-card">
                  <img
                    src={relatedPost.image || 'https://via.placeholder.com/300x200'}
                    alt={relatedPost.title}
                    className="w-full h-auto mb-2"
                  />
                  <h2 className="text-lg font-medium">
                    <Link
                      to={`/blog/${relatedPost.id}`}
                      className="text-lime-400 hover:text-lime-500"
                    >
                      {relatedPost.title}
                    </Link>
                  </h2>
                </div>
              ))
            ) : (
              <p>Không có bài viết liên quan.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;