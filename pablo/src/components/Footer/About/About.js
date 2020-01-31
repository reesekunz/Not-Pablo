import React from "react";
import "./About.scss";
import { NavLink } from "react-router-dom";

function About() {
  return (
    <div className="about-container">
      Honestly, there's not much to put here. The content is created by a
      24-year old dude with a beer belly that lives at home with his parents.
      <div className="other-pages-linkz">
        <NavLink to="/" activeClassName="activeNavButton" className="next-link">
          Back Home
        </NavLink>
      </div>
    </div>
  );
}

export default About;
