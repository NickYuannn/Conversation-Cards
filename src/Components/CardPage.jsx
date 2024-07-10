import React, { useState } from "react";
import "./CardPage.css";
import { FaQuestion } from "react-icons/fa";
import Footer from "./Footer";

function CardPage(props) {
  const [randomPrompt, setRandomPrompt] = useState(
    props.prompts[Math.floor(Math.random() * props.prompts.length)]
  );

  const [reveal, setReveal] = useState(false);

  const [turns, setTurns] = useState("");

  function newPrompt() {
    setRandomPrompt(
      props.prompts[Math.floor(Math.random() * props.prompts.length)]
    );
    setTurns("");
    setReveal(false);
  }

  function chooseTurn() {
    const randomSeconds = Math.floor(Math.random() * 3) + 1;
    const options = ["Left", "Right"];

    let count = 0;
    const interval = setInterval(() => {
      setTurns(options[count % options.length]);
      count++;
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      setTurns(options[Math.floor(Math.random() * options.length)]);
    }, randomSeconds * 1000);
  }

  function revealPrompt() {
    setReveal(true);
  }
  return (
    <div className="cardpage-container">
      <h1>{props.packname}</h1>
      <div className="conversation-card-container" onClick={revealPrompt}>
        {reveal ? (
          <>
            <h2>{randomPrompt}</h2>
            <FaQuestion className="question-icon" />
          </>
        ) : (
          <>
            <h2>Tap to reveal</h2>
            <FaQuestion className="question-icon" />
          </>
        )}
      </div>
      <button onClick={newPrompt}>New Prompt</button>

      <div className="turn-container">
        <h2>Who goes first?</h2>
        <div className="turn-squares">
          <div className={turns === "Left" ? "turn-selected" : "turn"}>
            <h2>Left</h2>
          </div>
          <div className={turns === "Right" ? "turn-selected" : "turn"}>
            <h2>Right</h2>
          </div>
        </div>
        <button onClick={chooseTurn}>Choose!</button>
      </div>
      <Footer />
    </div>
  );
}

export default CardPage;
