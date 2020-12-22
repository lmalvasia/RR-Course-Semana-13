import React from 'react';
import styles from './header.module.css';

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.logo}>
        Logo
      </div>
      <div className={styles.headerText}>
        Characters
      </div>
    </div>
  );
};

export default Header;