import React from "react";
import { Button } from "../Button/Button";
import s from "./StoryAbout.module.css";
import video from "../assets/video/Video01.mp4"
import poster from "../assets/img/poster.png"

export const StoryAbout = () => {
  return (
    <div className={s.container}>
      <div className={s.containerContent}>
        <div className={s.containerText}>
          <div className={s.title}>
            Let's hear about
            <br /> Kayla's success story
          </div>
          <div className={s.text}>
            See how well Alivio works in a real customer’s life.{" "}
          </div>
          <Button text="Let’s get started" />
        </div>
          <video className={s.video} controls poster={poster}>
            <source src={video} type="video/mp4" />
          </video>
      </div>
    </div>
  );
};
