import React from "react";
import s from "./Column.module.css";

export const Column = (props) => {
  return (
    <div className={`${s.container} ${props.containerColumn}`}>
      <div className={s.title}>{props.title}</div>
      <div className={s.number}>{props.number}</div>
      {/* <div className={s.title}>{props.title}</div> */}
      <div className={s.text}>{props.text}</div>
      <div className={`${s.photo} ${props.styles}`}>{props.photo}</div>
    </div>
  );
};
