import React from "react";
import ".././Article.scss";
import Roomba from "../../images/Roomba.jpg";
import Benny from "../../images/Benny.jpeg";
import SteeleStadium from "../../images/SteeleStadium.png";
import { NavLink } from "react-router-dom";

function Article2() {
  return (
    <div className="article-container">
      <div className="article-header-container">
        <h4 className="article-header">
          Pablo and Trump in Discussions to Build a Higher Wall at Steele
          Stadium
        </h4>
        <img
          className="article-header-img"
          src={SteeleStadium}
          alt="Steele Stadium"
        />
        <div className="caption">
          Pablo has hit over 300 home-runs out of this place.
        </div>
      </div>
        <p className="date-written">January 30th, 2020 </p>

      <div className="content">
        <p>
          Both President Trump and Pablo are making headlines for all the wrong
          reasons lately - Pablo for his alleged 2018 cheating scandal that got
          out in the midst of the Houston Astros’ investigation, and President
          Trump for, well, potentially being impeached.
        </p>
        <p>
          While Pablo is for the higher wall out in center field, commissioner
          Clanky believes that the game should be geared more towards offense in
          order to retain viewership.
        </p>
        <p>
          Mr. Clanky recently just got married to a Roomba. Many analysts are
          saying this is playing a major factor in his decision to focus on
          revenue and viewership as they want to make more money and try to
          start a family of their own.
        </p>

        <div className="mid-article-img-container">
          <img
            className="mid-article-img"
            src={Roomba}
            alt="Clanky and Roomba"
          />
          <div className="caption">
            I'm honestly not quite sure how they have sex.
          </div>
        </div>
        <p>
          Pablo notoriously denied visiting the White House after the Humongous
          Melonheads won the Championship in 2018, but is reportedly willing to
          put his differences aside because he “hits way too many dingers out in
          center."
        </p>

        <p>
          Pablo has hit 300 career home-runs at Steele Stadium, which is almost
          200 more than the next player, Kiesha Phillips.
        </p>
      </div>
      <div className="bottom-article-links">
        <NavLink
          to="/kenny-bear-attack"
          activeClassName="activeNavButton"
          className="next-link"
        >
          <div className="next-link">
            ⬅️ How Exactly Did Kenny End up in a Wheelchair?
          </div>
        </NavLink>
        <NavLink
          to="/pablo-scandal"
          activeClassName="activeNavButton"
          className="next-link"
        >
          <div className="next-link">
            Astros' Scandal Runs Deeper Than We Thought ➡️
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Article2;
