import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.navBarContainer}>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/todos'>TODO List</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;