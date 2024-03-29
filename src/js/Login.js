import React, { useState } from 'react';
import  { useEffect } from 'react';
import { Link,useNavigate  } from 'react-router-dom'; 
import axios from '../axios';

import '../css/Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      navigate('/home');
    }
  });

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/login', { "email": username, "password":password });
      const loginResult = response.data;
      console.log(loginResult);

      if (loginResult !== 0) {
        localStorage.setItem('token', loginResult);
        const userResponse = await axios.get('/users/'+loginResult);
        const userResponseResult = userResponse.data;
        if(userResponseResult){
          localStorage.setItem('UserEmail',userResponseResult.email);
        }
        navigate('/home');
        console.log('Login successful');
        
      } else {
        window.alert('Invalid Username or Password');
        console.log('Login failed');
        
      }
    } catch (error) {
      
      console.error('Error:', error);
    }
  };
  


  return (
    <div className="login-container">
      <form onSubmit={(event) => handleLogin(event)}>
        <h2>Login</h2>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
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
      <p>Not Registered? <Link to="/signup">Signup</Link></p>
    </div>
  );
}

export default Login;
