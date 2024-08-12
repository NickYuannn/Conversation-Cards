import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Components/Navbar";
import "./App.css";
import CardPacks from "./Components/Pages/CardPacks";
import Strangers from "./Components/Pages/Strangers";
import Friends from "./Components/Pages/Friends";
import Acquaintances from "./Components/Pages/Acquaintances";
import Lovers from "./Components/Pages/Lovers";
import AboutUs from "./Components/Pages/AboutUs";
import Family from "./Components/Pages/Family";
import PhotoBooth from "./Components/Pages/PhotoBooth";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export function refreshPage() {
  window.location.reload();
}


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ScrollToTop />
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

          <Route path="Conversation-Cards/Family" exact Component={Family} />

          <Route path="Conversation-Cards/Lovers" exact Component={Lovers} />

          <Route path="Conversation-Cards/About-Us" exact Component={AboutUs} />
          <Route
            path="Conversation-Cards/Photo-Booth"
            exact
            Component={PhotoBooth}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
