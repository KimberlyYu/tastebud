import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <h2>Log In</h2>
      <p>Access personalized recipe recommendations</p>
      <form>
        <label>Email:</label>
        <input type="email" placeholder="Enter your email" />
        <label>Password:</label>
        <input type="password" placeholder="Enter your password" />
        <div>
          <button type="submit">Log In</button>
          <Link to="/forgotpassword">Forgot Password</Link>
        </div>
      </form>
      <p>New User? <Link to="/signup">Sign Up</Link></p>
    </div>
  );
}

export default Login;

