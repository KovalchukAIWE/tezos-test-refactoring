import React from "react";
import { Link } from "react-router-dom";
import styles from "./Logo.module.scss";

const Logo = () => (
  <Link to='/' className={styles.nav__logo}>
    <div className={styles.logo} />
    <p>Tezos4all</p>
  </Link>
);

export default Logo;
