import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.navBarContainer}>
      <ul>
        <li>
          <Link to='/home'>Home</Link>
        </li>
        <li>
          <Link to='/characters'>Characters</Link>
        </li>
        <li>
          <Link to='/locations'>Locations</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;