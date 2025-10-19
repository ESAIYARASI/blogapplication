import React from "react";
import "../styles/BlogModal.css";

export default function BlogModal({ blog, close }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={close}>
          close the tab✕
        </button>
        <h2>{blog.title}</h2>
        <p>{blog.content}</p>
        <small>Author: {blog.author}</small>
      </div>
    </div>
  );
}
