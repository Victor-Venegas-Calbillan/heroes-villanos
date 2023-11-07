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
          <picture>
            <source
              sizes="1920w"
              type="image/avif"
              srcSet="./logo.avif"
            />
            <source
              sizes="1920w"
              type="image/webp"
              srcSet="./logo.webp"
            />
            <img
              loading="lazy"
              src="./logo.png"
              alt="logo"
              className="logo"
            />
          </picture>
        </NavLink>
        <ul
          className={`navbar__menu ${
            isOpen ? "navbar__menu--active" : ""
          }`}
        >
          <NavLink to="/" className="navbar__item">
            Home
          </NavLink>
          <NavLink to="/marvel" className="navbar__item">
            Marvel
          </NavLink>
          <NavLink to="/dc" className="navbar__item">
            Dc
          </NavLink>
          <NavLink to="/others" className="navbar__item">
            Others
          </NavLink>
          <NavLink to="/others" className="navbar__item">
            Search
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
