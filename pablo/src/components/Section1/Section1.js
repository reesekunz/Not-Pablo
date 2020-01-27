import React from "react";
import "./Section1.scss";
import NotPabloLogo from "../../images/NotPabloLogo.png";
import WhereAreTheyNow from "../../images/WhereAreTheyNow.jpg";
import { NavLink } from "react-router-dom";

function Section1() {
  return (
    <div className="section-1-container">
      {/* Column 1 */}
      <div className="section-1-column-1">
        {/* First article */}
        <div className="section-1-second-img">
          <NavLink
            to="/article1"
            activeClassName="activeNavButton"
            className="article-link"
          >
            <img
              className="second-img"
              src={NotPabloLogo}
              alt="Secondary article image"
            />
          </NavLink>
        </div>
        {/* Second article  */}
        <div className="section-1-third-img">
          <NavLink
            to="/article2"
            activeClassName="activeNavButton"
            className="article-link"
          >
            <img
              className="third-img"
              src={NotPabloLogo}
              alt="Third article image"
            />
          </NavLink>
        </div>
      </div>
      {/* Column 2 */}
      {/* Third article  */}
      <div className="section-1-main-img">
        <NavLink
          to="/article3"
          activeClassName="activeNavButton"
          className="article-link"
        >
          <img
            className="main-img"
            src={WhereAreTheyNow}
            alt="Featured article image"
          />
          <div className="article-header">
            Where Are They Now? Backyard Sports Edition
          </div>
        </NavLink>
      </div>
      {/* Column 3 */}
      <div className="section-1-column-3">
        {/* Fourth article  */}
        <div className="section-1-third-img">
          <NavLink
            to="/article4"
            activeClassName="activeNavButton"
            className="article-link"
          >
            <img
              className="third-img"
              src={NotPabloLogo}
              alt="Third article image"
            />
          </NavLink>
        </div>
        {/* Fifth article  */}
        <div className="section-1-second-img">
          <NavLink
            to="/article5"
            activeClassName="activeNavButton"
            className="article-link"
          >
            <img
              className="second-img"
              src={NotPabloLogo}
              alt="Secondary article image"
            />
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Section1;
