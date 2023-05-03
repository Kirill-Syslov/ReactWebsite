import React, { useState } from "react";
import { Button } from "../Button/Button";
import s from "./Header.module.css";
// import { Navigation } from "./Navigation/Navigation";
import Logo from "../assets/img/Logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

// export const Header = () => {
//   return (
//     <div className={s.container}>
//       <div className={s.logo} />
//       <Navigation item="Why Alivio" />
//       <Navigation item="Solutions" />
//       <Navigation item="Community" />
//       <Navigation item="Pricing" />
//       <Navigation item="Sign in" />
//       <div className={s.btn}>
//         <Button text="Start Trial" />
//       </div>
//     </div>
//   );
// };

export const Header = () => {
  const [nav, setNav] = useState(false);
  return (
    <header className={s.header}>
      <div className={s.container}>
        <div className={s.box}>
          <div className={s.logo__image}>
            <img src={Logo} alt="/" />
          </div>
          <ul className={nav ? [s.menu, s.active].join(" ") : [s.menu]}>
            <li className={s.nav_li}>
              <a className={s.nav__item} href="##">
                Why Alivio
              </a>
            </li>
            <li className={s.nav_li}>
              <a className={s.nav__item} href="##">
                Solutions
              </a>
            </li>
            <li className={s.nav_li}>
              <a className={s.nav__item} href="##">
                Community
              </a>
            </li>
            <li className={s.nav_li}>
              <a className={s.nav__item} href="##">
                Pricing
              </a>
            </li>
            <li className={s.nav_li}>
              <a className={s.nav__item} href="##">
                Sign in
              </a>
            </li>
            <div className={s.btn}>
              <Button text="Start Trial" />
            </div>
          </ul>
          <div onClick={() => setNav(!nav)} className={s.mobile__btn}>
            {nav ? <AiOutlineClose  size={25} /> : <AiOutlineMenu size={25} />}
          </div>
        </div>
      </div>
    </header>
  );
};
