import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from '../axios';
import '../css/Signup.css';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      navigate('/home');
    }
  }); 

  const handleSignup = (e) => {
    e.preventDefault();
    
      if (password !== confirmPassword) {
        window.alert('Passwords do not match');
        console.error('Passwords do not match');
        return;
      }

      axios.post('/users/create', { "email":email, "password": password }).then(()=>{
        navigate('/login');
      }).catch((error)=>{
        window.alert('Registration failed', error);
      });
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSignup}>
        <h2>Signup</h2>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Signup</button>
      </form>
      <p>Already Registered? <Link to="/login">Login</Link></p>

    </div>
  );
}

export default Signup;
