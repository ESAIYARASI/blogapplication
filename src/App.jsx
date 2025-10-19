import React, { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import CreateBlog from "./components/CreateBlog";
import BlogList from "./components/BlogList";
import "./styles/App.css";
import { useEffect } from "react";
function App() {
  const [user, setUser] = useState(null);
  const [showSignup, setShowSignup] = useState(false);
  const [blogs, setBlogs] = useState([]);
useEffect(() => {
  const fetchBlogs = async () => {
    const res = await fetch("http://localhost:5000/blogs");
    const data = await res.json();
    setBlogs(data);
  };
  fetchBlogs();
}, []);
  return (
    <div className="app-container">
      {!user ? (
        showSignup ? (
          <Signup onLogin={setUser} switchLogin={() => setShowSignup(false)} />
        ) : (
          <Login onLogin={setUser} switchSignup={() => setShowSignup(true)} />
        )
      ) : (
        <>
          <header className="navbar">
            <h1 className="text">     My Blog</h1> <div>
            <button className="logout-btn" onClick={() => setUser(null)}>
              Logout
            </button></div></header>
            
         

          <CreateBlog user={user} setBlogs={setBlogs} blogs={blogs} />
          <BlogList blogs={blogs} />
        </>
      )}
    </div>
  );
}


export default App;
