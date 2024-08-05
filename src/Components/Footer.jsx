import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaDiscord, FaMailBulk } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer-container">
      <h1>Recommend Convo to your peers!</h1>

      <h2>Connect with me: </h2>
      <div className="connects">
        <span className="link">
          <FaGithub />
          <a>Github</a>
        </span>
        <span className="link">
          <FaLinkedin />
          <a>LinkedIn</a>
        </span>
        <span className="link">
          <FaDiscord />
          <a>Discord</a>
        </span>

        <span className="link">
          <FaMailBulk />
          <a>Email</a>
        </span>
      </div>
      <h4>© {new Date().getFullYear()} Convo: Conversation Cards by Nick Yuan</h4>
    </footer>
  );
}

export default Footer;
