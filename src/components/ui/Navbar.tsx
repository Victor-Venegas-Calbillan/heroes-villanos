import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <h1 className="navbar__logo">Logo</h1>
        <ul
          className={`navbar__menu ${
            isOpen ? "navbar__menu--active" : ""
          }`}
        >
          <li className="navbar__item">Marvel</li>
          <li className="navbar__item">Dc</li>
          <li className="navbar__item">Others</li>
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
