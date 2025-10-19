import React, { useState } from "react";
import "../styles/CreateBlog.css";

export default function CreateBlog({ user, blogs, setBlogs }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleCreate = () => {
    if (!title || !content) return alert("Please fill all fields");
    const newBlog = {
      id: Date.now(),
      title,
      content,
      author: user.email,
    };
    setBlogs([newBlog, ...blogs]);
    setTitle("");
    setContent("");
  };

  return (
    <div className="create-blog-container">
      <h2>Create a New Blog </h2>
      <input
        type="text" className="box1"
        placeholder="Enter blog title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea className="box2"
        placeholder="Write your blog content..."
        rows="5"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button className="submit-btn" onClick={handleCreate}>
        Publish
      </button>
    </div>
  );
}
