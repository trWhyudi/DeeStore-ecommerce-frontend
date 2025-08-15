import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleFooterNavClick = (section) => {
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
    <footer id="contact" className="bg-tertiary max-padd-container text-white py-12 rounded-xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo & About */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Link to="/" className="bold-24 mb-4">
            <h3>
              Dee<span className="text-secondary">Store</span>
            </h3>
          </Link>
          <p className="text-sm leading-relaxed text-white/80">
            DeeStore adalah destinasi fashion online yang menghadirkan berbagai pilihan pakaian dan aksesoris bergaya terkini untuk pria dan wanita. Kami menjual produk berkualitas dengan harga terbaik dan layanan pelanggan yang ramah.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="bold-20 mb-4">Quick Links</h4>
          <ul className="space-y-2 regular-15 text-white/80">
            <li>
              <button onClick={() => handleFooterNavClick('home')} className="hover:text-secondary">Home</button>
            </li>
            <li>
              <button onClick={() => handleFooterNavClick('shop')} className="hover:text-secondary">Shop</button>
            </li>
            <li>
              <button onClick={() => handleFooterNavClick('contact')} className="hover:text-secondary">Contact Us</button>
            </li>
          </ul>
        </div>

        {/* Policy Links */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="bold-20 mb-4">E-commerce Links</h4>
          <ul className="space-y-2 regular-15 text-white/80">
            <li>
              <Link to="/terms" className="hover:text-secondary">Terms of Service</Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-secondary">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/shipping" className="hover:text-secondary">Shipping Policy</Link>
            </li>
            <li>
              <Link to="/returns" className="hover:text-secondary">Return Policy</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="bold-20 mb-4">Contact Us</h4>
          <p className="text-white/80 text-sm mb-1">
            Email:{" "}
            <a href="mailto:dee.store@gmail.com" className="hover:text-secondary">dee.store@gmail.com</a>
          </p>
          <p className="text-white/80 text-sm mb-1">
            Phone:{" "}
            <a href="tel:+6285810457292" className="hover:text-secondary">+62 858-1234-567</a>
          </p>
          <p className="text-white/80 text-sm">
            Address: Jl. Pahlawan No. 1, Bekasi, Jawa Barat
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex flex-col items-center mt-12">
        <hr className="h-px w-full max-w-screen-md border-white/20 mb-4" />
        <p className="text-center text-xs text-white/60">
          &copy; {new Date().getFullYear()} DeeStore. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;