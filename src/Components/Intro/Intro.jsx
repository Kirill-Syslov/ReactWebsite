import React from "react";
import { Button } from "../Button/Button";
import s from "./Intro.module.css";

export const Intro = () => {
  return (
    <div className={s.container}>
      <div className={s.title}>
        Be aware,
        <br /> Manage well.
      </div>
      <div className={s.text}>
        Everyone experiences stress in different ways.
        <br /> Let Alivio guide you, in a personalized journal
        <br /> experience, to overcome your stress.
      </div>
      <div className={s.btn}>
        <Button text="Find Your Way"/>
      </div>
    </div>
  );
};
