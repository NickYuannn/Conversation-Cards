import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import "./App.css";
import CardPacks from "./Components/Pages/CardPacks";
import Strangers from "./Components/Pages/Strangers";
import Friends from "./Components/Pages/Friends";
import Acquaintances from "./Components/Pages/Acquaintances";
import Lovers from "./Components/Pages/Lovers";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="Conversation-Cards" exact Component={CardPacks} />
          <Route
            path="Conversation-Cards/Strangers"
            exact
            Component={Strangers}
          />
          <Route path="Conversation-Cards/Friends" exact Component={Friends} />
          <Route
            path="Conversation-Cards/Acquaintances"
            exact
            Component={Acquaintances}
          />
          <Route path="Conversation-Cards/Lovers" exact Component={Lovers} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
