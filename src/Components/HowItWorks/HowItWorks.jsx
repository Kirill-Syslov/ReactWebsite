import React from "react";
import { Column } from "../Column/Column";
import s from "./HowItWorks.module.css";

export const HowItWorks = () => {
  return (
    <div className={s.container}>
      <div className={s.upperContainer}>
        <div>
          <div className={s.subtitle}>How it works</div>
          <div className={s.title}>
            Understand & Release <br /> the stress in 3 steps
          </div>
        </div>
        <div className={s.text}>
          Alivio offers as many journals it takes, tackling different areas such
          as <br />
          anxiety, overwhelmedness, sadness, or anger, and a variety of personal
          <br />
          causes, to help you become aware of your emotions, and guide you in
          how <br />
          to manage stress.
        </div>
      </div>
      <div className={s.containerColumns}>
        <Column
          number="01"
          title="Personalize"
          text={
            "Answer a quick survey about how you\nexpress yourself, what causes you stress,\n and what area would you like to work on.\nThis way, we can fully personalize your\njournal!"
          }
          styles={s.photo}
        />
        <Column
          number="02"
          title="Write & Understand"
          text={
            "Write, draw, reflect, understand. Alivio will\nguide you through the prompts and will help\nyou manage your stress!"
          }
          styles={s.photoTwo}
          containerColumn={s.containerColumnTwo}
        />
        <Column
          number="03"
          title="Alivio!"
          text={
            "Now you are aware, and have a way to manage \n and overcome your own stress.\nWhat are you waiting for? Alivio today!"
          }
          styles={s.photoTree}
          containerColumn={s.containerColumnTree}
        />
      </div>
    </div>
  );
};
