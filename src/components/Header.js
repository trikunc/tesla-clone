import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

import sinergiImg from "../assets/img/Logo SMP White.png";

function Header({ isMenuOpen, setIsMenuOpen }) {
  return (
    <div className="header">
      <div className="header__logo">
        <Link to="/">
          <img
            className="header__logoImg"
            // src="../assets/img/Logo SMP White.png"
            src={sinergiImg}
            alt=""
          />
        </Link>
      </div>
      <div className="header__links">
        <Link to="/iot">Internet of Things</Link>
        <Link to="/digitalization">Digitalization</Link>
        <Link to="/">Business Platform</Link>
        <Link to="/support-service">Professional Services</Link>
        <div
          className="header__menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon style={{ color: "white" }} />}
        </div>
      </div>
      {/* <div className="header__right">
        <Link to="/" className={isMenuOpen && "header__link--hidden"}>
          Shop
        </Link>
        <Link to="/login" className={isMenuOpen && "header__link--hidden"}>
          Tesla Account
        </Link>
        <div
          className="header__menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </div>
      </div> */}
    </div>
  );
}

export default Header;
