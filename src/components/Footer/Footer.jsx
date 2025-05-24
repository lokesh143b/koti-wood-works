import React from 'react';
import './Footer.css';
import logo from "/assets/koti-wood-works-logo.png"


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section brand">
          <div className='footer-logo-container'>
            <img src={logo} alt="" />
            <h2>Koti Wood Works</h2>
          </div>
          <p>Crafting your dreams in wood with passion and precision.</p>
        </div>
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h3>Contact</h3>
          <p>Email: <a href="mailto:kotiwoodworks651@gmail.com">kotiwoodworks651@gmail.com</a></p>
          <p>Phone: <a href="tel:+919989103920">+91 99891 03920</a></p>
<<<<<<< HEAD
          <p>Location: Velpur, Tanuku mandal, Andrapradesh, 534222, India</p> 
=======
          <p>Location: Velpur, Tanuku mandal, Andrapradesh, 534222, India</p>
>>>>>>> 06cf871ddd127235a3f7a4550c6f7560201ee501
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Koti Wood Works. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
