import React from "react";
import "./Section2.scss";
import NotPabloLogo from "../../images/NotPabloLogo.png";
import { NavLink } from "react-router-dom";
import Pete from "../../images/Pete.png";
import Lisa from "../../images/Lisa.png";
import Vinnie from "../../images/Vinnie.jpeg";
import Annie from "../../images/Annie.jpeg";
function Section2() {
  return (
    <div className="section-2-container">
      <div className="section-header-container">
        <h2 className="section-header">Latest</h2>
      </div>
      <div className="section-2-content">
        {/* 6th article  */}
        <div className="section-2-main-img">
          <NavLink
            to="/pete-wheeler-promoted"
            activeClassName="activeNavButton"
            className="article-link"
          >
            <img className="main-image" src={Pete} alt="Pete" />
            <div className="article-header">
              Pete Wheeler Gets Promoted at Jimmy John's
            </div>
          </NavLink>
        </div>
        <div className="second-img-container">
          {/* 7th article  */}
          <div className="section-2-second-img">
            <NavLink
              to="/annie-suspended"
              activeClassName="activeNavButton"
              className="article-link"
            >
              <img className="secondary-image" src={Annie} alt="Annie" />
              <div className="article-link">
                Annie Frazier suspended 8 games for violating substance abuse
                policy
              </div>
            </NavLink>
          </div>
          <div className="section-2-second-img">
            {/* 8th article  */}
            <NavLink
              to="/vinnie-the-gooch-rager"
              activeClassName="activeNavButton"
              className="article-link"
            >
              <img className="secondary-image" src={Vinnie} alt="Vinnie" />
              <div className="article-link">
                Vinnie the Gooch throws "lit" rager. Parents ground him
                indefinitely.
              </div>
            </NavLink>
          </div>
          <div className="section-2-second-img">
            {/* 9th article  */}
            <NavLink
              to="/lisa-crockett-dui"
              activeClassName="activeNavButton"
              className="article-link"
            >
              <img className="secondary-image" src={Lisa} alt="Lisa" />
              <div className="article-link">
                Lisa Crockett arrested with DUI, blames it on Kombucha Tea.
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
