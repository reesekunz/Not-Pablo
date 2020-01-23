import React from "react";
import "./Section3.scss";
function Section3() {
  return (
    <div className="section-3-container">
      <div className="section-header-container">
        <h2 className="section-header">Featured</h2>
      </div>
      <div className="section-3-content">
        <div className="section-3-main-img">Main img</div>
        <div className="second-img-container">
          <div className="section-3-second-img">Second img</div>
          <div className="section-3-second-img">Second img</div>
          <div className="section-3-second-img">Second img</div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
