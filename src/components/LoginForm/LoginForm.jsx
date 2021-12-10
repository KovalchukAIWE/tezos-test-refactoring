/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../Input/Input";
import styles from "./LoginForm.module.scss";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Email should have correct format")
    .required("Email is a required field"),
  password: yup.string().min(8).max(15).required(),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className={styles.form}>
      <div className={styles.form__title}>Login</div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form__wrapper}>
        <div className={styles.form__input}>
          <Input
            {...register("email")}
            id='email'
            type='email'
            label='Email'
            name='email'
            autoComplete='off'
            errors={!!errors.email}
            helperText={errors?.email?.message}
          />
        </div>
        <div className={styles.form__input}>
          <Input
            {...register("password", {
              required: "Required",
              pattern: {
                value:
                  /^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$/,
                message: "invalid password",
              },
            })}
            id='password'
            type='password'
            label='Password'
            name='password'
            autoComplete='off'
          />
          <p className={styles.form__message}>
            {errors.password?.message &&
              "Password must contain only latin letters, 1 upper-case character, 1 lower-case character, one number and one special character."}
          </p>
        </div>
        <div className={styles.form__input}>
          <Input
            {...register("confirmPassword")}
            id='confirmPassword'
            type='password'
            label='Password confirmation'
            name='confirmPassword'
            autoComplete='off'
          />
          <p className={styles.form__message} style={{ color: "#D50D0D" }}>
            {errors.confirmPassword && "Password doesn’t match"}
          </p>
        </div>
        <input className={styles.form__button} type='submit' id='submit' />
      </form>
    </div>
  );
};

export default LoginForm;

// const schema = yup.object().shape({
//   email: yup.string().email().required(),
//   password: yup.string().min(8).max(15).required(),
//   confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
// });

// function LoginForm() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(schema),
//   });

//   const submitForm = (data) => {
//     console.log(data);
//   };
//   return (
//     <div className={styles.form}>
//       <div className={styles.form__title}>Login</div>
//       <div>
//         <form onSubmit={handleSubmit(submitForm)}>
//           <input
//             className={styles.form__input}
//             type='text'
//             name='email'
//             placeholder='Email'
//             {...register("email")}
//           />
//           <p className={styles.form__message} style={{ color: "#D50D0D" }}>
//             {" "}
//             {errors.email?.message && "Invalid email"}{" "}
//           </p>
//           <input
//             className={styles.form__input}
//             type='password'
//             name='password'
//             {...register("password", {
//               required: "Required",
//               pattern: {
//                 value:
//                   /^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$/,
//                 message: "invalid password",
//               },
//             })}
//             placeholder='Password'
//           />
//           <p className={styles.form__message}>
//             {" "}
//             {errors.password?.message &&
//               "Password must contain only latin letters, 1 upper-case character, 1 lower-case character, one number and one special character."}
//           </p>
//           <input
//             className={styles.form__input}
//             type='password'
//             name='confirmPassword'
//             placeholder='Password confirmation'
//             {...register("confirmPassword")}
//           />
//           <p className={styles.form__message} style={{ color: "#D50D0D" }}>
//             {" "}
//             {errors.confirmPassword && "Password doesn’t match"}{" "}
//           </p>
//           <input className={styles.form__button} type='submit' id='submit' />
//         </form>
//       </div>
//     </div>
//   );
// }

// export default LoginForm;
