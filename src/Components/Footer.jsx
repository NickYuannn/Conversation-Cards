import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-container">
        <h1>Recommend Convo to your peers!</h1>
        <h2>Convo is a great way to start conversations with the ones around you. Share the love and start connecting with one another!</h2>
        <h4>© {new Date().getFullYear()} Convo</h4>
    </footer>
  );
}

export default Footer;
