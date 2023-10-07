
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/NavigationMenu.css';

function NavigationMenu() {
  return (
    <div className="navigation-menu">
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/groups">Groups</Link>
        </li>
        <li>
          <Link to="/login">Logout</Link> 
        </li>
      
      </ul>
    </div>
  );
}

export default NavigationMenu;
