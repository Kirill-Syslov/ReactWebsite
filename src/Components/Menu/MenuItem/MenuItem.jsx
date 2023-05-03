import React from "react";
import "../MenuItem/MenuItem.css"

export const MenuItem = (props,active,setActive) => {

  return (
    // <div className= {active ? 'menu active' : 'menu' }>
    //   <div className="menuContent">
    //     <div className="menuHeader">{props.header}</div>
    //     <ul >
    //       {props.items.map((item) => (
    //         <li className="ul">
    //           <a className="menuItem" href={item.href}>{item.value}</a>
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    // </div>

    <div className>
    <div className="menuContent">
      <div className="menuHeader">{props.header}</div>
      <ul >
        {props.items.map((item) => (
          <li className="ul">
            <a className="menuItem" href={item.href}>{item.value}</a>
          </li>
        ))}
      </ul>
    </div>
  </div>
  );
};
