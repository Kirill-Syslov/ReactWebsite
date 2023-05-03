import React from "react";
import s from "./Button.module.css";

export const Button = (props) => {
  return (
    <div className={s.container}>
      <a className={s.btn} href="#">{props.text}</a>
    </div>
  );
};
