import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <nav className="header">
      <Link>
        <img
          className="header__logo"
          alt="Image"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
      </Link>
    </nav>
  );
}

export default Header;