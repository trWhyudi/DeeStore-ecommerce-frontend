import React from 'react';

const Navbar = ({ containerStyles, activeMenu, setActiveMenu }) => {
  return (
    <nav className={`${containerStyles}`}>
      <a 
        href="#home" 
        className={`${activeMenu === 'home' ? 'active' : ''}`} 
        onClick={() => setActiveMenu('home')}
      >
        Home
      </a>
      <a 
        href="#shop" 
        className={` ${activeMenu === 'shop' ? 'active' : ''}`} 
        onClick={() => setActiveMenu('shop')}
      >
        Shop
      </a>
      <a 
        href="#contact" 
        className={` ${activeMenu === 'contact' ? 'active' : ''}`} 
        onClick={() => setActiveMenu('contact')}
      >
        Contact
      </a>
    </nav>
  );
};

export default Navbar;