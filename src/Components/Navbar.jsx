import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaUserFriends } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar-container">
      <div className="name-container">
        <h1>Convo </h1>
      </div>
      <div className="icon-container">
        <FaUserFriends className="icon" />
      </div>

      <ul className="options-menu">
        <li className="menu-item">
          {" "}
          <Link to="/Conversation-Cards/">Card Packs</Link>
        </li>
        <li className="menu-item">About Us</li>
        <li className="menu-item">Contact Us</li>
      </ul>
    </nav>
  );
}

export default Navbar;
