import React from "react";
import "./Section1.scss";
import NotPabloLogo from "../../images/NotPabloLogo.png";
import WhereAreTheyNow from "../../images/WhereAreTheyNow.jpg";
import Kenny from "../../images/Kenny.png";
import { NavLink } from "react-router-dom";
import PabloCheating from "../../images/PabloCheating.png";
import SteeleStadium from "../../images/SteeleStadium.png";
import Marky from "../../images/Marky.png";

function Section1() {
  return (
    <div className="section-1-container">
      {/* Column 1 */}
      <div className="section-1-column-1">
        {/* First article */}
        <div className="section-1-second-img">
          <NavLink
            to="/kenny-bear-attack"
            activeClassName="activeNavButton"
            className="article-link"
          >
            <img
              className="second-img"
              src={Kenny}
              alt="Secondary article image"
            />
            <div className="article-header">
              How Exactly Did Kenny End up in a Wheelchair?
            </div>
          </NavLink>
        </div>
        {/* Second article  */}
        <div className="section-1-third-img">
          <NavLink
            to="/steele-stadium-wall"
            activeClassName="activeNavButton"
            className="article-link"
          >
            <img
              className="third-img"
              src={SteeleStadium}
              alt="Steele Stadium"
            />
            <div className="article-header">
              Pablo and Trump in Discussions to Build a Higher Wall at Steele
              Stadium
            </div>
          </NavLink>
        </div>
      </div>
      {/* Column 2 */}
      {/* Third article  */}
      <div className="section-1-main-img">
        <NavLink
          to="/pablo-scandal"
          activeClassName="activeNavButton"
          className="article-link"
        >
          <img
            className="main-img"
            src={PabloCheating}
            alt="Pablo Cheating Scandals"
          />
          <div className="article-header">
            Astros' Scandal Runs Deeper Than We Thought
          </div>
        </NavLink>
      </div>
      {/* Column 3 */}
      <div className="section-1-column-3">
        {/* Fourth article  */}
        <div className="section-1-third-img">
          <NavLink
            to="/marky-is-killing-it"
            activeClassName="activeNavButton"
            className="article-link"
          >
            <img className="third-img" src={Marky} alt="Marky Dubios" />
            <div className="article-header">
              People Are Impersonating Marky Dubios on FarmersOnly
            </div>
          </NavLink>
        </div>
        {/* Fifth article  */}
        <div className="section-1-second-img">
          <NavLink
            to="/where-are-they-now"
            activeClassName="activeNavButton"
            className="article-link"
          >
            <img
              className="second-img"
              src={WhereAreTheyNow}
              alt="Where are they now"
            />
            <div className="article-header">
              Where Are They Now? Backyard Sports Edition
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Section1;
