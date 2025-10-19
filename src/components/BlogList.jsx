import React, { useState } from "react";
import BlogModal from "./BlogModal";
import "../styles/BlogList.css";

export default function BlogList({ blogs }) {
  const [selected, setSelected] = useState(null);

  return (
    <div className="blog-list">
      <h2>Recent Blogs </h2>
      <div className="blog-cards">
        {blogs.length === 0 ? (
          <p>No blogs yet. Start writing!</p>
        ) : (
          blogs.map((blog) => (
            <div
              className="blog-card"
              key={blog.id}
              onClick={() => setSelected(blog)}
            >
              <h3>{blog.title}</h3>
              <p>{blog.content.substring(0, 100)}...</p>
              <small>By {blog.author}</small>
            </div>
          ))
        )}
      </div>

      {selected && <BlogModal blog={selected} close={() => setSelected(null)} />}
    </div>
  );
}
