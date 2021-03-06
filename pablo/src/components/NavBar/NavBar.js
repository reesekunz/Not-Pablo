import React from "react";
import NotPabloLogo from "../../images/NotPabloLogo.png";
import Pablo from "../../images/Pablo.jpeg";
import "./NavBar.scss";
import {
  IoLogoFacebook,
  IoLogoInstagram
  // IoLogoTwitter
} from "react-icons/io";
function NavBar() {
  return (
    <div>
      <div className="nav-bar-container">
        <div className="social-media-icons">
          <a className="icon" href="https://www.facebook.com/NotPabloSanchez/">
            <IoLogoFacebook size={30} color="white" />
          </a>
          <a
            className="icon"
            href="https://www.instagram.com/not.pablo.sanchez/"
          >
            <IoLogoInstagram size={30} color="white" />
          </a>
        </div>
        <div className="pablo-img-container">
          <img className="pablo-img" src={Pablo} alt="Pablo the goat" />
        </div>
        <div className="logo-img-container">
          <img
            className="not-pablo-logo"
            src={NotPabloLogo}
            alt="Not Pablo logo"
          />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
