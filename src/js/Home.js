import React from 'react';
import  { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationMenu from './NavigationMenu';
import myImage from '../assets/Logo.png';


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
    <div>
    <NavigationMenu />
    <div className="centered-image-container">
      <img
        src={myImage}
        alt="My Image"
        className="centered-image"
      /> {/** Image Generated Using AI tool - https://looka.com */}
    </div>
    </div>
  );

}

export default Home;
