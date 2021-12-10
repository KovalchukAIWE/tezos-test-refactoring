/* eslint-disable react/jsx-props-no-spreading */
import React, { forwardRef } from "react";
import TextField from "@material-ui/core/TextField";
import styles from "./Input.module.scss";

const Input = forwardRef((props, ref) => (
  <TextField
    variant='outlined'
    margin='normal'
    inputRef={ref}
    {...props}
    className={styles.input}
  />
));

export default Input;
