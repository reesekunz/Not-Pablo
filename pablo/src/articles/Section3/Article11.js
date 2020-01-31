import React from "react";
import ".././Article.scss";
import Benny from "../../images/Benny.jpeg";
import Dante from "../../images/Dante.png";
import JoeyTweet from "../../images/JoeyTweet.jpg";
import { NavLink } from "react-router-dom";

function Article11() {
  return (
    <div className="article-container">
      <div className="article-header-container">
        <h4 className="article-header">
          Dante Robinson Breaks Joey Chestnut's Hot Dog Record
        </h4>
        <img className="article-header-img" src={Dante} alt="Dante" />
        <div className="caption">The Pablo Sanchez of competitive eating.</div>
      </div>
        <p className="date-written">January 31st, 2020 </p>

      <div className="content">
        <p>
          Dante Robinson obliterated Joey Chestnut’s 74 hot dog record, pounding
          an impressive 86 hot dogs in 10 minutes.
        </p>
        <p>
          Dante ate close to 30,000 calories worth of food in that 10 minutes
          alone.
        </p>

        <p>
          Coming in 2nd was Kiesha Phillips, who has been a runner-up to Dante
          for 10 years and counting.
        </p>

        <p>
          Other competitors are in talks of unionizing and creating a less
          competitive version of their current hot dog eating contests. One that
          Dante would not be invited to.
        </p>
        <p>
          While many competitors use the “dunking” method of dunking their bread
          in their water to digest easier and more quickly, Dante uses his idol
          Takeru Kobayashi’s “Solomon Method.” He breaks the hot dog in half,
          eats both halves simultaneously, and then proceeds to jump up and
          down.
        </p>
        <div className="mid-article-img-container">
          <img className="mid-article-img" src={JoeyTweet} alt="Joey tweet" />
          <div className="caption">Game recognizes game.</div>
        </div>
        <p>
          Early Bitcoin investor Jorge Garcia has reportedly won over $300,000
          betting on Dante to win the hot dog contest each year.{" "}
        </p>
        <p>
          Dante himself has won over $100,000 from his victories, but he claims
          to not be in it for the money.
        </p>
        <p>
          <i>"I just like eating hot dogs, man."</i> - Dante Robinson
        </p>
      </div>
      <div className="bottom-article-links">
        <NavLink
          to="/pablos-decision"
          activeClassName="activeNavButton"
          className="next-link"
        >
          <div className="next-link">⬅️ Pablo Sanchez: The Decision</div>
        </NavLink>
        <NavLink
          to="/clanky-marries-roomba"
          activeClassName="activeNavButton"
          className="next-link"
        >
          <div className="next-link">Mr. Clanky Marries a Roomba ➡️</div>
        </NavLink>
      </div>
    </div>
  );
}

export default Article11;
