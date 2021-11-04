import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styles from './LoginForm.module.scss';

const schema = yup.object().shape({
  firstName: yup.string().required('First Name should be required please'),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(4).max(15).required(),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null]),
});

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {
    console.log(data);
  };
  return (
    <div className={styles.form}>
      <div className={styles.title}>Login</div>
      <div>
        <form onSubmit={handleSubmit(submitForm)}>
          <input
            className={styles.input}
            type="text"
            name="email"
            placeholder="Email"
            {...register('email')}
          />
          <p> {errors.email?.message} </p>
          <input
            className={styles.input}
            type="password"
            name="password"
            placeholder="Password"
            {...register('password')}
          />
          <p> {errors.password?.message} </p>
          <input
            className={styles.input}
            type="password"
            name="confirmPassword"
            placeholder="Password confirmation"
            {...register('confirmPassword')}
          />
          <p> {errors.confirmPassword && 'Passwords Should Match!'} </p>
          <input className={styles.button} type="submit" id="submit" />
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
