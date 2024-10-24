import React, { useState } from 'react';
import passwords from '../context/Passwords.json';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === passwords.password) {
      setIsLoggedIn(true);
      setError(null);
    } else {
      setError('Invalid password');
      setIsLoggedIn(false);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h2>Login</h2>
      {isLoggedIn ? (
        <p>Welcome, you are logged in!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ width: '100%', padding: '8px', marginTop: '5px' }}
            />
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button type="submit" style={{ width: '100%', padding: '10px' }}>
            Login
          </button>
        </form>
      )}
    </div>
  );
};

export default Login;
