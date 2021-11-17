import React from "react";
import { Link } from "react-router-dom";

import styles from "./Footer.module.scss";

const Footer = () => (
  <div className={styles.container}>
    <nav className={styles.nav}>
      <div className={styles.nav__logo}>
        <div className={styles.logo} />
        <p>Tezos4all</p>
      </div>
      <ul className={styles.nav__items}>
        <Link to='/' className={styles.nav__link}>
          Home
        </Link>
        <Link to='/login' className={styles.nav__link}>
          Login
        </Link>
      </ul>
    </nav>
    <div className={styles.footer}>
      <ul className={styles.footer__links}>
        <li className={styles.footer__list}>
          <a href='#skills' className={styles.footer__item}>
            Testing skills
          </a>
        </li>
        <li className={styles.footer__list}>
          <a href='#description' className={styles.footer__item}>
            General description of the assignment
          </a>
        </li>
        <li className={styles.footer__list}>
          <a href='#team' className={styles.footer__item}>
            Our team
          </a>
        </li>
      </ul>
      <ul className={styles.footer__links}>
        <li className={styles.footer__item}>About us</li>
        <li className={styles.footer__item}>Carrier</li>
        <li className={styles.footer__item}>Blog</li>
      </ul>
      <p className={styles.footer__copyright}>&copy;Copyright</p>
    </div>
  </div>
);

export default Footer;
