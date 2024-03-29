import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/pizza_logo.svg";
import { BiMenu, BiCartAlt } from "react-icons/bi";
//redux
import { connect } from "react-redux";
import { openPopUp } from "../../redux/actions/popUp";
import { POPUP_ID_CART } from "../../redux/constants/popUpIds";
//router
import { NavLink, Link } from "react-router-dom";
const Navbar = ({ openPopUp }) => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const toggleMenu = () => {
    setIsMenuShown(!isMenuShown);
  };

  const openCartHandle = () => {
    // console.log("Navbar: cart toggle");
    openPopUp(POPUP_ID_CART);
  };

  return (
    <nav>
      <div className="nav-container">
        <div className="nav-header">
          <img src={logo} alt="logo" className="logo" />
          <h1>PIZZA PLACE </h1>
          <BiMenu size={40} className="nav-toggle" onClick={toggleMenu} />
        </div>

        <div
          className={
            isMenuShown
              ? "nav-links-container show-navbar"
              : "nav-links-container hide"
          }
        >
          <ul>
            <li>
              <NavLink className="nav-link" to="/">
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/about-us">
                About us
              </NavLink>
            </li>
            <li>
              <BiCartAlt
                size={40}
                className="nav-link"
                onClick={() => openCartHandle()}
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default connect(null, { openPopUp })(Navbar);
