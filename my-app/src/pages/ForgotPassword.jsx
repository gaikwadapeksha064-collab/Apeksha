
import React from 'react';
import { Link } from 'react-router-dom';
import './ForgotPassword.css';

function ForgotPassword() {

  const handleReset = (e) => {
    e.preventDefault();
    alert('Password reset request submitted!');
  };

  return (
    <div className="forgot-container">

      <div className="forgot-box">

        <div className="lock-icon">🔐</div>

        <h2>Forgot Password?</h2>

        <p>
          Enter your registered email address.
          We will help you reset your password.
        </p>

        <form onSubmit={handleReset}>

          <label>Email Address</label>

          <input
            type="email"
            placeholder="Enter your registered email"
            required
          />

          <button type="submit">
            Reset Password
          </button>

        </form>

        <Link to="/" className="back-login">
          ← Back to Login
        </Link>

      </div>

    </div>
  );
}

export default ForgotPassword;
