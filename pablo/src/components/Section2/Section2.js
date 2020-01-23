import React from "react";
import "./Section2.scss";
import NotPabloLogo from "../../images/NotPabloLogo.png";
function Section2() {
  return (
    <div className="section-2-container">
      <div className="section-header-container">
        <h2 className="section-header">Latest</h2>
      </div>
      <div className="section-2-content">
        <div className="section-2-main-img">
          <img
            className="main-image"
            src={NotPabloLogo}
            alt="Main article image"
          />
        </div>
        <div className="second-img-container">
          <div className="section-2-second-img">
            <img
              className="secondary-image"
              src={NotPabloLogo}
              alt="Secondary article image"
            />
            <a className="article-link" href="#" alt="article link">
              This is the header for an article: blah blah blah blah
            </a>
          </div>
          <div className="section-2-second-img">
            <img
              className="secondary-image"
              src={NotPabloLogo}
              alt="Secondary article image"
            />
            <a className="article-link" href="#" alt="article link">
              This is the header for an article: blah blah blah blah
            </a>
          </div>
          <div className="section-2-second-img">
            <img
              className="secondary-image"
              src={NotPabloLogo}
              alt="Secondary article image"
            />
            <a className="article-link" href="#" alt="article link">
              This is the header for an article: blah blah blah blah
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
