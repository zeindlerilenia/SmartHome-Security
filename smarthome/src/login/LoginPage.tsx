import React, { useState } from 'react';
import { AuthState } from '../App';
import './loginPage.css';

type LoginPageProps = {
  onLogin: (authState: AuthState) => void;
};

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === 'password') {
        onLogin(AuthState.LoggedIn);
        console.log('Login successful!');
      } else {
        console.log('Login failed!');
      }
  };

  return (
    <div className="login-page">
      <h1 className="login-title">Welcome to My App</h1>
      <div className="login-form">
        <form>
        <label htmlFor="username">
          Username:
          <input
            id="username"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label htmlFor="password">
          Password:
          <input
            id="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
    </div>
  );
};

export default LoginPage;
