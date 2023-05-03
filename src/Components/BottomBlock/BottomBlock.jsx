import React from "react";
import s from "./BottomBlock.module.css";
import { Item } from "./Item/Item";

export const BottomBlock = () => {
  return (
    <div className={s.container}>
      <div className={s.logo}>Alivio</div>
      <div className={s.itemOne}>
        <Item text="Why Alivio" />
      </div>
      <div className={s.itemTwo}>
        <Item text="Solutions" />
      </div>
      <div className={s.itemTree}>
        <Item text="Community" />
      </div>
      <div className={s.itemFour}>
        <Item text="Pricing" />
      </div>
    </div>
  );
};
