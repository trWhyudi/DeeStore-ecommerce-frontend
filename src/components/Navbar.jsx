import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = ({ containerStyles, activeMenu, setActiveMenu }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (section) => {
    setActiveMenu(section);

    if (location.pathname !== '/') {
      navigate(`/#${section}`);
    } else {
      const el = document.getElementById(section);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`${containerStyles}`}>
      <button
        className={activeMenu === 'home' ? 'active' : ''}
        onClick={() => handleNavClick('home')}
      >
        Home
      </button>
      <button
        className={activeMenu === 'shop' ? 'active' : ''}
        onClick={() => handleNavClick('shop')}
      >
        Shop
      </button>
      <button
        className={activeMenu === 'contact' ? 'active' : ''}
        onClick={() => handleNavClick('contact')}
      >
        Contact
      </button>
    </nav>
  );
};

export default Navbar;
