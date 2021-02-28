import React, { useState } from "react";
import "./Navbar.css";
import logo from "./pizza_logo.svg";
import { BiMenu } from "react-icons/bi";
import { NavLink } from "react-router-dom";
//redux
import { connect } from "react-redux";
import { toggleCart } from "./redux/actions/cartPopUp";

const Navbar = ({ toggleCart }) => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const toggleMenu = () => {
    setIsMenuShown(!isMenuShown);
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
            isMenuShown ? "nav-links-container" : "nav-links-container hide"
          }
        >
          <ul>
            <li>
              <NavLink className="nav-link" to="/asd">
                Page1
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/">
                Page2
              </NavLink>
            </li>
            <li>
              <BiMenu size={40} className="nav-link" onClick={toggleCart} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default connect(null, { toggleCart })(Navbar);
