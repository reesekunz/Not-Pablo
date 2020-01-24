import React from "react";
import "./App.scss";
import { Route, NavLink } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Contact from "./components/Footer/Contact/Contact";
import Home from "./components/Home/Home";
import About from "./components/Footer/About/About";
import OtherSites from "./components/Footer/OtherSites/OtherSites";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* Main content  */}
      <div className="main-content-container">
        {/* Routes */}
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/othersites" component={OtherSites} />
      </div>
      {/* Links  */}
      <div className="links-container">
        <NavLink
          exact
          to="/"
          activeClassName="activeNavButton"
          className="footer-link"
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          activeClassName="activeNavButton"
          className="footer-link"
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          activeClassName="activeNavButton"
          className="footer-link"
        >
          Contact
        </NavLink>
        <NavLink
          to="/othersites"
          activeClassName="activeNavButton"
          className="footer-link"
        >
          Our Other Sites
        </NavLink>
      </div>
    </div>
  );
}

export default App;
