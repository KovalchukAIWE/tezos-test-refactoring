import React from "react";
import LoginForm from "../LoginForm/LoginForm";

import styles from "./LoginView.module.scss";

const LoginView = () => (
  <div className={styles.container}>
    <div className={styles.container__bg} />
    <div>
      <LoginForm />
    </div>
    <div className={styles.line} />
  </div>
);

export default LoginView;
