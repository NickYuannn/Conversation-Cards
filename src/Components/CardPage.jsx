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

  const [users, setUsers] = useState([
    "p1",
    "p2",
    "p3",
    "p4",
    "p5",
  ]);

  const [turn, setTurn] = useState("");

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

  function newPrompt() {
    setTurn("");
    setReveal(false);
  }

  async function revealPrompt() {
    await generatePrompt();
    setReveal(true);
  }
  function addName() {
    const nameInput = document.getElementById("name-input");
    const name = nameInput.value;
    if (!name) return;
    setUsers([...users, name]);
    nameInput.value = "";
  }

  function chooseTurn() {
    const randomSeconds = Math.floor(Math.random() * 3) + 1;

    let count = 0;
    const interval = setInterval(() => {
      setTurn(count++ % users.length);
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      setTurn(count++ % users.length);
    }, randomSeconds * 1000);

    console.log(randomSeconds);
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
          <h1>Order Selector</h1>
          <div className="turn-ui">
            <ul className="users-list">
              {users.map((user, index) => (
                <li
                  key={index}
                  className={index === turn ? "turn selected" : "turn"}
                  onClick={() => {
                    const newUsers = [...users];
                    newUsers.splice(index, 1);
                    setUsers(newUsers);
                  }}
                >
                  {user}
                </li>
              ))}
            </ul>
            <input id="name-input" />
            <button
              onClick={() => {
                addName();
              }}
            >
              Add Name
            </button>
          </div>
          <button onClick={chooseTurn}>Choose!</button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default CardPage;
