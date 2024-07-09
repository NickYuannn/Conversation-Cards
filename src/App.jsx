import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import "./App.css";
import CardPacks from "./Components/Pages/CardPacks";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="Conversation-Cards" exact Component={CardPacks} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
