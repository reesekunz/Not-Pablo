import React from "react";
import "./Section1.scss";
import NotPabloLogo from "../../images/NotPabloLogo.png";
function Section1() {
  return (
    <div className="section-1-container">
      {/* Column 1 */}
      <div className="section-1-column-1">
        <div className="section-1-second-img">
          <img
            className="second-img"
            src={NotPabloLogo}
            alt="Secondary article image"
          />
        </div>
        <div className="section-1-third-img">
          <img
            className="third-img"
            src={NotPabloLogo}
            alt="Third article image"
          />
        </div>
      </div>
      {/* Column 2 */}
      <div className="section-1-main-img">
        <img
          className="main-img"
          src={NotPabloLogo}
          alt="Featured article image"
        />
      </div>
      {/* Column 3 */}
      <div className="section-1-column-3">
        <div className="section-1-third-img">
          <img
            className="third-img"
            src={NotPabloLogo}
            alt="Third article image"
          />
        </div>
        <div className="section-1-second-img">
          <img
            className="second-img"
            src={NotPabloLogo}
            alt="Secondary article image"
          />
        </div>
      </div>
    </div>
  );
}

export default Section1;
