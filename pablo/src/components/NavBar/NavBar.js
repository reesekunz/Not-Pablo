import React from "react";
import NotPabloLogo from "../../images/NotPabloLogo.png";
import "./NavBar.scss";
function NavBar() {
  return (
    <div className="nav-bar-container">
      <img className="not-pablo-logo" src={NotPabloLogo} alt="Not Pablo logo" />
    </div>
  );
}

export default NavBar;
