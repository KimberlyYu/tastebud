import React from 'react';

const SignUp = () => {
  return (
    <div>
      <h2>Sign Up</h2>
      <form>
        <div>
          <label>Email:</label>
          <input type="email" placeholder="Enter your email" />
        </div>
        <div>
          <label>Username:</label>
          <input type="text" placeholder="Choose a username" />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" placeholder="Enter your password" />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input type="password" placeholder="Confirm your password" />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;