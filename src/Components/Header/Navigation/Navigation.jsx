import React from "react";
import s from "./Navigation.module.css";

export const Navigation = (props) => {
    return (
        <div>
            <a className={s.nav} href="#">{props.item}</a>
        </div>
    )
}