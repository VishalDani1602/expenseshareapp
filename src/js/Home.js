import React, { useState } from 'react';
import  { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationMenu from './NavigationMenu';


import '../css/Home.css';

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      navigate('/login');
    }
  });

  return (
    <NavigationMenu />
    
  );
}

export default Home;
