import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-links">
        {/* ใช้ Link แทนแท็ก <a> เพื่อการนำทางภายใน React */}
        <Link to="/" className="header-link">Home</Link>
        <Link to="/owner" className="header-link">Owner</Link>
      </div>
      <div className="header-divider"></div> {/* เส้นคั่น */}
    </header>
  );
};

export default Header;