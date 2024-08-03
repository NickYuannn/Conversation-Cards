import React from "react";
import "./AboutUs.css";
import Footer from "../Footer";

function AboutUs() {
  return (
    <>
      <div className="about-container">
        <h1>About Us</h1>
        <div className="about-content">
          <p>
            Convo was created and brainstormed about by 2 computer science
            Majors at the University of Maryland, College Park during the summer
            of freshman year. The idea was created by <u>Tin Ha</u>, and he thought hmm
            well with the new school year coming up, there going to be a lot of
            new people entering people's lives and sometimes people just need a
            little help to kickstart a conversation. That is what convo is. So
            Convo was created and developed by {""}
            <a href="https://www.linkedin.com/in/nick-yuan-3999732ab/">
              Nick Yuan
            </a>
            .
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default AboutUs;
