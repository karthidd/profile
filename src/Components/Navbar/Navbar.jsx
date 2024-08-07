import React from 'react';
import './Navbar.scss';
import { motion } from 'framer-motion';
import Sidebar from './Sidebar/Sidebar';

const Navbar = () => {
  const items = [
    "Homepage",
    "About",
    "Skills",
    "Projects",
    "Contact",
  ];

  return (
    <div className='navbar'>
      <Sidebar />
      <div className="wrapper">
        <motion.span initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
          KARTHIKEYAN
        </motion.span>

        <div className="navLinks">
          {items.map((item) => (
            <motion.a href={`#${item}`} key={item}>
              {item}
            </motion.a>
          ))}
        </div>
        <div className="social">
          <a href="#"><img src="/facebook.png" alt="Facebook" /></a>
          <a href="#"><img src="/instagram.png" alt="Instagram" /></a>
          <a href="#"><img src="/youtube.png" alt="YouTube" /></a>
          <a href="#"><img src="/linkedin.png" alt="YouTube" /></a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
