import React from 'react';

const ForgotPasswordPage2 = ({ onSendAgain, onBackToLogin }) => {
  return (
    <div>
      <h2>Thank You!</h2>
      <p>An email containing a link to reset your password has been sent to your email address. Please follow the instructions.</p>
      <button onClick={onSendAgain}>Send Again</button>
      <button onClick={onBackToLogin}>Back to Login</button>
    </div>
  );
}

export default ForgotPasswordPage2;