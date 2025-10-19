import React, { useState } from "react";
import "../styles/Signup.css";

export default function Signup({ onLogin, switchLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    if (email && password) onLogin({ email });
  };

  return (
    <div className="signup-bg">
      <div className="auth-container">
        <h2>Create Account ✨</h2>
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
        <button onClick={handleSignup}>Sign Up</button>
        <p>
          Already have an account?{" "}
          <span className="switch-link" onClick={switchLogin}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
}
