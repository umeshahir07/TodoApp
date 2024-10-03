// Auth.js
import React, { useState } from 'react';
import './Auth.css'; // Import the CSS file

const Auth = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [signupSuccess, setSignupSuccess] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here (for demo, we assume success)
    onLogin();
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    // Perform signup logic here (for demo, we assume success)
    setSignupSuccess(true);
    setEmail('');
    setPassword('');

    setTimeout(() => {
      setIsSignUp(false);
      setSignupSuccess(false);
    }, 2000);
  };

  return (
    <div className="auth-container">
      <h2>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
      <form onSubmit={isSignUp ? handleSignUp : handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">{isSignUp ? 'Sign Up' : 'Login'}</button>
      </form>
      {signupSuccess && <p>Signup successful! Redirecting to Sign In...</p>}
      <p>
        {isSignUp ? 'Already have an account?' : "Don't have an account?"}
        <button onClick={() => {
          setIsSignUp(!isSignUp);
          setSignupSuccess(false);
        }}>
          {isSignUp ? 'Login' : 'Sign Up'}
        </button>
      </p>
    </div>
  );
};

export default Auth;
