import React from "react";
import s from "./Item.module.css";

export const Item = (props) => {
    return (
        <div>
            <a className={s.item} href="#">{props.text}</a>
        </div>
    )
}