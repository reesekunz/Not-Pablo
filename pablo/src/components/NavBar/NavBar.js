import React from "react";
import NotPabloLogo from "../../images/NotPabloLogo.png";
import "./NavBar.scss";
import {
  IoLogoFacebook,
  IoLogoInstagram
  // IoLogoTwitter
} from "react-icons/io";
function NavBar() {
  return (
    <div className="nav-bar-container">
      <img className="not-pablo-logo" src={NotPabloLogo} alt="Not Pablo logo" />
      {/* <div className="social-media-icons">
        <a
          className="icon"
          href="https://www.facebook.com/PabloSecretWeaponSanchez/"
        >
          <IoLogoFacebook size={35} color="white" />
        </a>
        <a className="icon" href="https://www.instagram.com/not.pablo.sanchez/">
          <IoLogoInstagram size={35} color="white" />
        </a>
      </div> */}
    </div>
  );
}

export default NavBar;
