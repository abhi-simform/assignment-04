import React from "react";
import { useState } from "react";
import Container from "../UI/Container";
import { RiFacebookFill, RiTwitterFill, RiInstagramLine } from "react-icons/ri";

import "./Header.scss";

const Header = () => {
  const [navExpand, setNavExpand] = useState(false);
  const handleClick = () => {
    setNavExpand(!navExpand);
  };
  return (
    <header className="header" id="header">
      <Container className="header-container">
        <p className="header__logo">
          Foodieland<span>.</span>
        </p>
        <nav className={navExpand ? "nav nav--active" : "nav"} id="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#" className="nav__link">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                Recipes
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                Blog
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                Contact
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                About Us
              </a>
            </li>
          </ul>
        </nav>
        <div className={navExpand ? "header__social header__social--active" : "header__social"} id="headerSocial">
          <a href="#" className="header__social-link">
            <RiFacebookFill />
          </a>
          <a href="#" className="header__social-link">
            <RiTwitterFill />
          </a>
          <a href="#" className="header__social-link">
            <RiInstagramLine />
          </a>
        </div>
        <div className="hamburger" onClick={handleClick}>
          <span className="hamburger__line" />
          <span className="hamburger__line" />
          <span className="hamburger__line" />
        </div>
      </Container>
    </header>
  );
};

export default Header;
