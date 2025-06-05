import { useState, useEffect } from 'react';
import './Navbar.css';
import logo from "/assets/koti-wood-works-logo.png"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'contact'];
      let current = 'home';
      for (let id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <a href="/" className="logo-container" onClick={closeMenu}>
        <img src={logo} className="logo" alt="Koti Wood Works Logo" />
        <div className="name">Koti Wood Works</div>
      </a>
      <div className="hamburger" onClick={toggleMenu}>
        <span className={isOpen ? 'bar open' : 'bar'}></span>
        <span className={isOpen ? 'bar open' : 'bar'}></span>
        <span className={isOpen ? 'bar open' : 'bar'}></span>
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        {['home', 'about', 'services', 'contact'].map((section) => (
          <li key={section}>
            <a
              href={`/#${section}`}
              className={activeSection === section ? 'active' : ''}
              onClick={closeMenu}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
            
          </li>
        ))}
       <li>
  <a
    href="https://koti-wood-works-admin.netlify.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="admin-link"
  >
    Admin
  </a>
</li>
      </ul>
    </nav>
  );
}

export default Navbar;
