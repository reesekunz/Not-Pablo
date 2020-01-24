import React from "react";
import "./Section3.scss";
import NotPabloLogo from "../../images/NotPabloLogo.png";
import { NavLink } from "react-router-dom";

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
            to="/article10"
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
          {/* 11th article  */}
          <div className="section-3-second-img">
            <NavLink
              to="/article11"
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
          <div className="section-3-second-img">
            {/* 12th article  */}
            <NavLink
              to="/article12"
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
          <div className="section-3-second-img">
            {/* 13th article  */}
            <NavLink
              to="/article13"
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

export default Section3;
