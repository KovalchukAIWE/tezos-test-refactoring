import React, { useState, useEffect, createRef } from "react";
import { useCallback } from "react/cjs/react.development";
import { NavLink } from "react-router-dom";
import BurgerIcon from "../BurgerIcon/BurgerIcon";

import styles from "./Header.module.scss";
import Logo from "../Logo";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const classNav = showNav
    ? `${styles.navigation} ${styles.show}`
    : styles.navigation;

  const navRef = createRef();

  const clickOutside = useCallback((e) => {
    setShowNav((prev) => {
      if (e.target === e.currentTarget) return false;
      return prev;
    });
  }, []);
  useEffect(() => {
    if (showNav) {
      navRef.current.addEventListener("click", clickOutside);
    } else {
      navRef.current.removeEventListener("click", clickOutside);
    }
  }, [showNav]);

  const setActive = ({ isActive }) =>
    isActive ? styles.active : styles.nav__btn;

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <Logo />
        <div className={styles.burger}>
          <button
            type='button'
            className={styles.burger__btn}
            onClick={() => setShowNav(!showNav)}
          >
            <BurgerIcon />
          </button>
        </div>
        <div className={classNav} ref={navRef}>
          <ul className={styles.nav__items}>
            <li>
              <NavLink exact to='/' className={setActive}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink exact to='/login' className={setActive}>
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
