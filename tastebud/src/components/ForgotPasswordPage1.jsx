import React, { useState } from 'react';

const ForgotPasswordPage1 = ({ onNext }) => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate email and send request to server to send reset link
    onNext(email);
  };

  return (
    <div>
      <h2>Forgot Your Password?</h2>
      <p>Enter your email and we'll send you a link to reset your password.</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <button type="button" onClick={() => onNext('back')}>
          Go Back To Log In
        </button>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ForgotPasswordPage1;

