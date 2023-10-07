import React from 'react';
import '../css/Header.css';

function Header() {
  const title = "ExpenseShare";

  return (
    <div className="header">
      <h2 className="header-title">{title}</h2>
    </div>
  );
}

export default Header;
