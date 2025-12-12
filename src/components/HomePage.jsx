import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; 

const HomePage = () => {
  return (
    <div className="homepage-container">
      <h1 className="main-title">
        Generation Thailand<br />
        React - Assessment
      </h1>
      <div className="button-group">
        {/* Link จะนำทางไปยัง Path ที่กำหนดใน App.js */}
        <Link to="/user" className="home-button">
          User Home View
        </Link>
        <Link to="/admin" className="home-button">
          Admin Home View
        </Link>
      </div>
    </div>
  );
};

export default HomePage;