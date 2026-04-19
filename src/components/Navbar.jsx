// src/components/Navbar.js
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ toggleLanguage, toggleTheme, currentLang, isDark }) => {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = ['home', 'objective', 'skills', 'experience', 'education', 'certificates', 'contact'];

  const handleNavClick = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <h1>Ahmed Elsayed</h1>
          <p>Professional Accountant</p>
        </div>
        
        <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        
        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <li key={item}>
              <a href={`#${item}`} onClick={(e) => {
                e.preventDefault();
                handleNavClick(item);
              }}>
                {t(`nav.${item}`)}
              </a>
            </li>
          ))}
        </ul>
        
        <div className="nav-controls">
          <button className="lang-toggle" onClick={toggleLanguage}>
            {currentLang === 'en' ? 'عربي' : 'English'}
          </button>
          <button className="theme-toggle" onClick={toggleTheme}>
            {isDark ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;