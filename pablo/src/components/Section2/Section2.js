import React from "react";
import "./Section2.scss";
import NotPabloLogo from "../../images/NotPabloLogo.png";
import { NavLink } from "react-router-dom";

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
            to="/article6"
            activeClassName="activeNavButton"
            className="article-link"
          >
            <img
              className="main-image"
              src={NotPabloLogo}
              alt="Main article image"
            />
          </NavLink>
        </div>
        <div className="second-img-container">
          {/* 7th article  */}
          <div className="section-2-second-img">
            <NavLink
              to="/article7"
              activeClassName="activeNavButton"
              className="article-link"
            >
              <img
                className="secondary-image"
                src={NotPabloLogo}
                alt="Secondary article image"
              />
              <div className="article-link">
                This is the header for an article: blah blah blah blah
              </div>
            </NavLink>
          </div>
          <div className="section-2-second-img">
            {/* 8th article  */}
            <NavLink
              to="/article8"
              activeClassName="activeNavButton"
              className="article-link"
            >
              <img
                className="secondary-image"
                src={NotPabloLogo}
                alt="Secondary article image"
              />
              <div className="article-link">
                This is the header for an article: blah blah blah blah
              </div>
            </NavLink>
          </div>
          <div className="section-2-second-img">
            {/* 9th article  */}
            <NavLink
              to="/article9"
              activeClassName="activeNavButton"
              className="article-link"
            >
              <img
                className="secondary-image"
                src={NotPabloLogo}
                alt="Secondary article image"
              />
              <div className="article-link">
                This is the header for an article: blah blah blah blah
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
