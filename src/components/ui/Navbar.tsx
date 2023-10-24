import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <NavLink to="/" className="navbar__logo">
          Logo
        </NavLink>
        <ul
          className={`navbar__menu ${
            isOpen ? "navbar__menu--active" : ""
          }`}
        >
          <NavLink to="/marvel" className="navbar__item">
            Marvel
          </NavLink>
          <NavLink to="/dc" className="navbar__item">
            Dc
          </NavLink>
          <NavLink to="/others" className="navbar__item">
            Others
          </NavLink>
        </ul>

        <div className="navbar__toggle" onClick={handleToggle}>
          <i
            className={`${
              isOpen ? "fas fa-times" : "fas fa-bars"
            } navbar__hamburger`}
          ></i>
        </div>
      </div>
    </nav>
  );
};
