import React from "react";
import "./Section1.scss";
import NotPabloLogo from "../../images/NotPabloLogo.png";
function Section1() {
  return (
    <div className="section-1-container">
      {/* Column 1 */}
      <div className="section-1-column-1">
        <div className="section-1-second-img">Second img</div>
        <div className="section-1-third-img">Third img</div>
      </div>
      {/* Column 2 */}
      <div className="section-1-main-img">Main img</div>
      {/* Column 3 */}
      <div className="section-1-column-3">
        <div className="section-1-third-img">Third img</div>
        <div className="section-1-second-img">Second img</div>
      </div>
    </div>
  );
}

export default Section1;
