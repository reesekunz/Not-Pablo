import React from "react";
import "./Section3.scss";
import { NavLink } from "react-router-dom";
import Dante from "../../images/Dante.png";
import TheDecision from "../../images/TheDecision.jpeg";
import MrClanky from "../../images/MrClanky.jpeg";
import Mikey from "../../images/Mikey.png";

function Section3() {
  return (
    <div className="section-3-container">
      <div className="section-header-container">
        <h2 className="section-header">Featured</h2>
      </div>
      <div className="section-3-content">
        {/* 10th article  */}
        <div className="section-3-main-img">
          <NavLink
            to="/pablos-decision"
            activeClassName="activeNavButton"
            className="article-link"
          >
            <img className="main-image" src={TheDecision} alt="Mystery Hat" />
            <div className="article-header">Pablo Sanchez: The Decision</div>
          </NavLink>
        </div>
        <div className="second-img-container">
          {/* 11th article  */}
          <div className="section-3-second-img">
            <NavLink
              to="/dante-passes-chestnut"
              activeClassName="activeNavButton"
              className="article-link"
            >
              <img className="secondary-image" src={Dante} alt="Dante" />
              <div className="article-link">
                Dante Robinson breaks Joey Chesnut's hot dog record
              </div>
            </NavLink>
          </div>
          <div className="section-3-second-img">
            {/* 12th article  */}
            <NavLink
              to="/clanky-marries-roomba"
              activeClassName="activeNavButton"
              className="article-link"
            >
              <img
                className="secondary-image"
                src={MrClanky}
                alt="Secondary article image"
              />
              <div className="article-link">Mr. Clanky marries a Roomba</div>
            </NavLink>
          </div>
          <div className="section-3-second-img">
            {/* 13th article  */}
            <NavLink
              to="/mikey-died"
              activeClassName="activeNavButton"
              className="article-link"
            >
              <img
                className="secondary-image"
                src={Mikey}
                alt="Secondary article image"
              />
              <div className="article-link">
                Mikey Thomas dead From Ebola virus
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
