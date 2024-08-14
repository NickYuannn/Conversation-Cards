import React, { useState, useEffect } from "react";
import "./CardPage.css";
import "./PromptHistory.css";
import { FaQuestion } from "react-icons/fa";
import Footer from "./Footer";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { FaRegWindowClose } from "react-icons/fa";

function CardPage(props) {
  const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  const [randomPrompt, setRandomPrompt] = useState("");
  const [theme, setTheme] = useState("");
  const [promptHistory, setPromptHistory] = useState([{ text: "" }]);
  const [openHistory, setOpenHistory] = useState(false);

  const [loading, setLoading] = useState(false);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        newPrompt();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  async function generatePrompt() {
    setLoading(true);
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const prompt = `Generate an interesting and deep question to start a conversation specifically for ${
        props.packname
      } under 10 words no emojis${
        theme ? ` with the theme ${theme}` : ""
      }. Avoid using old responses.`;

      const updatedPromptHistory = [...promptHistory, { text: prompt }];

      const chat = model.startChat({
        history: [
          {
            role: "user",
            parts: [{ text: prompt }],
          },
          {
            role: "model",
            parts: updatedPromptHistory,
          },
        ],
        generationConfig: {
          maxOutputTokens: 100,
        },
      });

      const result = await chat.sendMessage(prompt);
      const response = await result.response;
      const text = response.text();

      setRandomPrompt(text);
      console.log(text);
      setPromptHistory([...promptHistory, { text: text }]);
    } catch (error) {
      console.error("Error generating prompt:", error);
      setRandomPrompt("Error due to safety filter, try again");
    }

    setLoading(false);
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
      <div className="cardpage">
        <h1>
          <u>{props.packname}</u>
        </h1>

        {/* PromptHistory*/}
        <div
          className={
            openHistory ? "history-container active " : "history-container"
          }
        >
          <div className="history-card">
            <h1>Prompt History</h1>
            <ul>
              {promptHistory.map((prompt, index) => (
                <li key={index}>{prompt.text}</li>
              ))}
            </ul>
          </div>

          <button>
            <FaRegWindowClose
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                setOpenHistory(false);
              }}
            />
          </button>
        </div>
        {/* <PromptHistory*/}

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
              <FaQuestion
                className={loading ? "question-icon active" : "question-icon"}
              />
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
        {/*New Prompt and Prompt History*/}
        <button onClick={newPrompt}>New Prompt</button>
        <button
          onClick={() => {
            setOpenHistory(true);
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          Prompt History
        </button>

        <div className="turn-container">
          <h2>Who goes first?</h2>
          <h3>If yall cannot decide</h3>
          <div className="turn-squares">
            <div className={turns === "Left" ? "turn selected" : "turn"}>
              <h2>Left</h2>
            </div>
            <div className={turns === "Right" ? "turn selected" : "turn"}>
              <h2>Right</h2>
            </div>
          </div>
          <button onClick={chooseTurn}>Choose!</button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default CardPage;
