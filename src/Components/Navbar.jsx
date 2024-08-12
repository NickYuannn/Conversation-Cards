import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaBars, FaRegWindowClose, FaUserFriends } from "react-icons/fa";
import { refreshPage } from "../App";

function Navbar() {
  const [menuButton, setMenuButton] = React.useState(false);
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const showMenu = () => {
    if (window.innerWidth <= 960) {
      setMenuButton(true);
    } else {
      setMenuButton(false);
    }
  };

  useEffect(() => {
    showMenu();
  }, []);

  window.addEventListener("resize", showMenu);

  function openMobileMenu() {
    setMobileMenu(!mobileMenu);
  }

  return (
    <nav
      className={mobileMenu ? "navbar-container active" : "navbar-container"}
    >
      <div className="name-container">
        <Link
          to="/Conversation-Cards/"
          style={{ textDecoration: "none", color: "white" }}
        >
          <h1>Convo </h1>
        </Link>
      </div>
      <div className="icon-container">
        <Link
          to="/Conversation-Cards/"
          style={{ textDecoration: "none", color: "white" }}
        >
          <FaUserFriends className="icon" />
        </Link>
      </div>

      <ul className={!mobileMenu ? "options-menu" : "options-menu active"}>
        <li
          className="menu-item"
          onClick={() => {
            openMobileMenu;
            refreshPage();
          }}
        >
          <Link to="/Conversation-Cards/">Card Packs</Link>
        </li>
        <li
          className="menu-item"
          onClick={() => {
            openMobileMenu;
            refreshPage();
          }}
        >
          <Link to="/Conversation-Cards/About-Us">About Us</Link>
        </li>
        <li
          className="menu-item"
          onClick={() => {
            openMobileMenu;
            refreshPage();
          }}
        >
          <Link to="/Conversation-Cards/Photo-Booth">Photo Booth</Link>
        </li>
      </ul>

      <div
        className={menuButton ? "menu-icon selected" : "menu-icon"}
        onClick={openMobileMenu}
      >
        {mobileMenu ? <FaRegWindowClose /> : <FaBars />}
      </div>
    </nav>
  );
}

export default Navbar;
