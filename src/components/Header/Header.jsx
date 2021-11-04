import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.nav__logo}>
          <div className={styles.logo} />
          <p>Tezos4all</p>
        </div>
        <ul className={styles.nav__items}>
          <Link to="/" className={styles.nav__link}>
            Home
          </Link>
          <Link to="/login" className={styles.items}>
            Login
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
