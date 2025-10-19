import React, { useState } from "react";
import "../styles/Login.css";

export default function Login({ onLogin, switchSignup }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email && password) onLogin({ email });
  };

  return (
    <div className="login-bg">
      <div className="auth-container">
        <h2>Welcome Back 👋</h2>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        <p>
          Don’t have an account?{" "}
          <span className="switch-link" onClick={switchSignup}>
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}
