
import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

function Signup() {
  const handleSignup = (e) => {
    e.preventDefault();
    alert('Account created successfully!');
  };

  return (
    <div className="signup-container">
      <div className="signup-box">

        <h2>Create Account</h2>
        <p>Join Grand Horizon Hotel</p>

        <form onSubmit={handleSignup}>

          <label>Full Name</label>
          <input type="text" placeholder="Enter your full name" required />

          <label>Email Address</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Phone Number</label>
          <input type="tel" placeholder="Enter phone number" required />

          <label>Password</label>
          <input type="password" placeholder="Create password" required />

          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm password" required />

          <button type="submit">Create Account</button>

        </form>

        <p className="signup-footer">
          Already have an account? <Link to="/">Login</Link>
        </p>

      </div>
    </div>
  );
}

export default Signup;
