import React from 'react';
import LoginForm from '../LoginForm/LoginForm';

import styles from './LoginView.module.scss';

const LoginView = () => {
  return (
    <div className={styles.block_wrapper}>
      <div className={styles.bg_image} />
      <div className={styles.form_wrapper}>
        <LoginForm />
      </div>
      <div className={styles.orange_border} />
    </div>
  );
};

export default LoginView;
