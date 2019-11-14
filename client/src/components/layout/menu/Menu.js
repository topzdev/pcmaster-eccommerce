import React from "./node_modules/react";
import { Link } from "./node_modules/react-router-dom";

//Child components
// import MenuDropdown from "./MenuDropdown";
const Menu = () => {
  return (
    <div className="menu">
      <ul className="menu__list">
        <li className="menu__item">
          <Link to="/" className="menu__link">
            Components &nbsp;
            <span>
              <i className="fas fa-angle-down"></i>
            </span>
          </Link>
          <MenuDropdown />
        </li>
        <li className="menu__item">
          <Link to="/" className="menu__link">
            Computers &nbsp;
            <span>
              <i className="fas fa-angle-down"></i>
            </span>
          </Link>
        </li>
        <li className="menu__item">
          <Link to="/" className="menu__link">
            Peripherals &nbsp;
            <span>
              <i className="fas fa-angle-down"></i>
            </span>
          </Link>
        </li>
        <li className="menu__item">
          <Link to="/" className="menu__link">
            Net Devices &nbsp;
            <span>
              <i className="fas fa-angle-down"></i>
            </span>
          </Link>
        </li>
        <li className="menu__item">
          <Link to="/" className="menu__link">
            Accessories &nbsp;
            <span>
              <i className="fas fa-angle-down"></i>
            </span>
          </Link>
        </li>
        <li className="menu__item">
          <Link to="/" className="menu__link">
            Gadgets &nbsp;
            <span>
              <i className="fas fa-angle-down"></i>
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
