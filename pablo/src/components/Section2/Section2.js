import React from "react";
import "./Section2.scss";
function Section2() {
  return (
    <div className="section-2-container">
      <div className="section-header-container">
        <h2 className="section-header">Latest</h2>
      </div>
      <div className="section-2-content">
        <div className="section-2-main-img">Main img</div>
        <div className="second-img-container">
          <div className="section-2-second-img">Second img</div>
          <div className="section-2-second-img">Second img</div>
          <div className="section-2-second-img">Second img</div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
