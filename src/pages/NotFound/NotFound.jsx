// src/pages/NotFound.jsx

import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css"; // Import CSS

const NotFound = () => {
  return (
    <div className="notfound-container">
      <h1 className="notfound-title">404</h1>
      <p className="notfound-text">Oops! Page Not Found</p>
      <Link to="/" className="notfound-home-btn">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
