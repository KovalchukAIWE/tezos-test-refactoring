import React, { useState } from "react";
import { Link } from "react-router-dom";
import BurgerIcon from "../BurgerIcon/BurgerIcon";

import styles from "./Header.module.scss";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const classNav = showNav
    ? `${styles.navigation} ${styles.show}`
    : styles.navigation;

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.nav__logo}>
          <div className={styles.logo} />
          <p>Tezos4all</p>
        </div>
        <div className={styles.burger}>
          <button
            type='button'
            className={styles.burger__btn}
            onClick={() => setShowNav(!showNav)}
          >
            <BurgerIcon />
          </button>
        </div>
        <div className={classNav} />
        <ul className={styles.nav__items}>
          <Link to='/' className={styles.nav__link}>
            <button type='button' className={styles.nav__btn}>
              Home
            </button>
          </Link>
          <Link to='/login' className={styles.nav__link}>
            <button type='button' className={styles.nav__btn}>
              Login
            </button>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
