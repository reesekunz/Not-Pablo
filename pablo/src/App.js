import React from "react";
import "./App.scss";
import { Route, NavLink } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Contact from "./components/Footer/Contact/Contact";
import Home from "./components/Home/Home";
import About from "./components/Footer/About/About";
import OtherSites from "./components/Footer/OtherSites/OtherSites";
import Article1 from "./articles/Section1/Article1";
import Article2 from "./articles/Section1/Article2";
import Article3 from "./articles/Section1/Article3";
import Article4 from "./articles/Section1/Article4";
import Article5 from "./articles/Section1/Article5";
import Article6 from "./articles/Section2/Article6";
import Article7 from "./articles/Section2/Article7";
import Article8 from "./articles/Section2/Article8";
import Article9 from "./articles/Section2/Article9";
import Article10 from "./articles/Section3/Article10";
import Article11 from "./articles/Section3/Article11";
import Article12 from "./articles/Section3/Article12";
import Article13 from "./articles/Section3/Article13";

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
        {/* Article Routes  */}
        <Route path="/kenny-bear-attack" component={Article1} />
        <Route path="/steele-stadium-wall" component={Article2} />
        <Route path="/where-are-they-now" component={Article3} />
        <Route path="/marky-is-killing-it" component={Article4} />
        <Route path="/pablo-scandal" component={Article5} />
        <Route path="/pete-wheeler-promoted" component={Article6} />
        <Route path="/annie-suspended" component={Article7} />
        <Route path="/vinnie-the-gooch-rager" component={Article8} />
        <Route path="/lisa-crockett-dui" component={Article9} />
        <Route path="/pablos-decision" component={Article10} />
        <Route path="/dante-passes-chestnut" component={Article11} />
        <Route path="/clanky-marries-roomba" component={Article12} />
        <Route path="/mikey-died" component={Article13} />
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
