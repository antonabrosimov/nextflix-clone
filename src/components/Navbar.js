import React, { useEffect, useState } from 'react';
import './Navbar.css';
import Smiley from './Smiley.png';

const Navbar = () => {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener('scroll');
    };
  }, []);

  return (
    <div className={`navbar ${show && 'nav_black'}`}>
      <img
        className='netflix_logo'
        src='https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg'
        alt='netflix logo'
      />

      <img className='nav_avatar' src={Smiley} alt='Netflix logo' />
    </div>
  );
};

export default Navbar;
