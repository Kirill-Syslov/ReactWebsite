import React from "react";
import"/DeUs/DeUs__Ex/src/Components/Menu/Menu.css"
import { MenuItem } from "./MenuItem/MenuItem";
import useState from "react-hook-use-state";

export const Menu = () => {
    const [menuActive, setMenuActive] = useState(false)

  const items = [
    { value: "Why Alivio", href: "#" },
    { value: "Solutions", href: "#" },
    { value: "Community", href: "#" },
    { value: "Pricing", href: "#" },
    { value: "Sign in", href: "#" },
  ];
  return (
    <div className="container">
      <nav className="nav">
        <div className="burgerBtn" onClick={() => setMenuActive(!menuActive)}>
          <span className="burgerBtnSpan" />
        </div>
      </nav>
      <MenuItem active={menuActive} setActive={setMenuActive} header={"Menu"} items={items}/>
    </div>
  );
};
 