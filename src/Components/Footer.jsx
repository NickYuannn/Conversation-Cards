import React from "react";
import "./Footer.css";
import { FaGithub, FaLinkedin, FaDiscord, FaMailBulk } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer-container">
      <h1>Recommend Convo to your peers!</h1>

      <h2>Connect with me: </h2>
      <div className="connects">
        <span className="link line">
          <FaGithub />
          <a href="https://github.com/NickYuannn" target="_blank">
            Github
          </a>
        </span>
        <span className="link line ">
          <FaLinkedin />
          <a
            href="https://www.linkedin.com/in/nick-yuan-3999732ab/"
            target="_blank"
          >
            LinkedIn
          </a>
        </span>
        <span className="link line">
          <FaDiscord />
          <a
            onMouseEnter={(e) => {
              e.target.innerText = "nnnnnnick";
            }}
            onMouseLeave={(e) => (e.target.innerText = "Discord")}
          >
            Discord
          </a>
        </span>

        <span className="link">
          <FaMailBulk />
          <a href="mailto:nk.yuan2005@gmail.com">Email</a>
        </span>
      </div>
      <h4>
        © {new Date().getFullYear()} Convo: Conversation Cards by Nick Yuan
      </h4>
    </footer>
  );
}

export default Footer;
