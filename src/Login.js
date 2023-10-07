
import React, { useState } from 'react';
import { Link,useNavigate  } from 'react-router-dom'; 
import axios from './axios';

import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/login', { "email": username, "password":password });
      const loginResult = response.data;
      console.log(loginResult);

      if (loginResult !== 0) {
        console.log('Login successful');
        
      } else {
        console.log('Login failed');
        
      }
    } catch (error) {
      
      console.error('Error:', error);
    }
  };
  


  return (
    <div className="container">
      <form onSubmit={(event) => handleLogin(event)}>
        <h2>Login</h2>
        <label htmlFor="email">Username:</label>
        <input
          type="username"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <Link to="/signup">Signup</Link></p>
    </div>
  );
}

export default Login;
