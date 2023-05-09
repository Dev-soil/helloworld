import React, { ForwardedRef } from "react";

import classes from "./Input.module.css";

interface InputProps {
  input: {
    id: string;
    type: string;
    min: string;
    max: string;
    step: string;
    defaultValue: string;
  };
  label: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
