import React, { useState } from "react";
import "./CardPage.css";
import { FaQuestion } from "react-icons/fa";
import Footer from "./Footer";
import { GoogleGenerativeAI } from "@google/generative-ai";

function CardPage(props) {
  const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;

  const genAI = new GoogleGenerativeAI(apiKey);

  const [randomPrompt, setRandomPrompt] = useState("first one");

  const [theme, setTheme] = useState("");

  async function generatePrompt() {
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const prompt = `Generate an interesting and deep question to start a conversation for ${
        props.packname
      } under 10 words no emojis${theme ? ` with the theme ${theme}` : ""}.`;
      console.log(prompt);
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = await response.text();
      setRandomPrompt(text);
      console.log(text);
    } catch (error) {
      console.error("Error generating prompt:", error);
      setRandomPrompt("Error due to safety filter, try again");
    }
  }

  const [reveal, setReveal] = useState(false);

  const [turns, setTurns] = useState("");

  function newPrompt() {
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

  async function revealPrompt() {
    await generatePrompt();
    setReveal(true);
  }
  return (
    <div className="cardpage-container">
      <h1>{props.packname}</h1>
      <div
        className="conversation-card-container"
        onClick={reveal ? null : revealPrompt}
      >
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

      <div className="theme-container">
        <h2>Have something in common?</h2>
        <div className="theme-input">
          <input
            type="text"
            placeholder="Center the questions on a certain topic!"
            onChange={(e) => {
              setTheme(e.target.value);
            }}
          />
        </div>
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
