
import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    alert("Login button clicked!");
  };

  return (
    <div className="login-container">

      <div className="login-image">
        <div className="image-content">
          <h1>Grand Horizon</h1>
          <p>Experience Luxury. Experience Comfort.</p>
        </div>
      </div>

      <div className="login-form-section">
        <div className="login-box">

          <h2>Welcome Back!</h2>
          <p className="subtitle">
            Login to your Hotel Management System
          </p>

          <form onSubmit={handleLogin}>

            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
            />

            <label>Password</label>
            <div className="password-box">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                required
              />
              <span onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? "Hide" : "Show"}
              </span>
            </div>

            <div className="remember">
              <label>
                <input type="checkbox" />
                Remember Me
              </label>
              <a href="#">Forgot Password?</a>
            </div>

            <button type="submit">Login</button>

          </form>

          <p className="signup">
            Don't have an account? <a href="#">Sign Up</a>
          </p>

        </div>
      </div>

    </div>
  );
}

export default Login;
