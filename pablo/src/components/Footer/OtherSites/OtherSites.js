import React from "react";
import "./OtherSites.scss";
import { NavLink } from "react-router-dom";

function OtherSites() {
  return (
    <div className="other-sites-container">
      Thank you for your interest in our other sites! Currently we have more
      sites that are a work in progress. When they are finished, we will list
      them here 🙂
      <div className="other-pages-linkz">
        <NavLink to="/" activeClassName="activeNavButton" className="next-link">
          Back Home
        </NavLink>
      </div>
    </div>
  );
}

export default OtherSites;
