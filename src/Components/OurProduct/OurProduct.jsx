import React from "react";
import { Button } from "../Button/Button";
import s from "./OurProduct.module.css";

export const OurProduct = () => {
  return (
    <div className={s.container}>
      <div className={s.containerPhoto}>
        <div className={s.photo}>
          <div className={s.containerPhotoSmall}>
            <div className={s.titleOne}>Customized For</div>
            <div className={s.line} />
            <div className={s.circle}>
              <div className={s.photoSmall} />
            </div>
            <div className={s.name}>Mikayla</div>
            <div className={s.titleTwo}>Your custom contents</div>
            <div className={s.textOne}>• Understand Your Stress</div>
            <div className={s.textTwo}>• Anger Management</div>
          </div>
        </div>
      </div>
      <div className={s.containerContent}>
        <div className={s.subtitle}>Our product</div>
        <div className={s.title}>
          You tell us your stress, We make your diary
        </div>
        <div className={s.text}>
          Everyone experiences it, and in different ways.
          <br />
          Let Alivio guide you, in a personalized journal experience,to
          <br />
          overcome your stress.
        </div>
        <Button text="Find Your Way" />
      </div>
    </div>
  );
};
