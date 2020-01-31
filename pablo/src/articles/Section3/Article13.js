import React from "react";
import ".././Article.scss";
import Mikey from "../../images/Mikey.png";
import Benny from "../../images/Benny.jpeg";
import MikeyCard from "../../images/MikeyCard.jpeg";
import { NavLink } from "react-router-dom";

function Article13() {
  return (
    <div className="article-container">
      <div className="article-header-container">
        <h4 className="article-header">Mikey Thomas Dead From Ebola Virus</h4>
        <img className="article-header-img" src={Mikey} alt="Mikey" />
        <div className="caption">Pour one out for the homie.</div>
        <p className="date-written">January 31st, 2020 </p>
      </div>

      <div className="content">
        <p>
          Mikey Thomas has passed away from the Ebola virus at the age of 14.
        </p>
        <p>
          "I'm not suprised. That dude was constantly sneezing. It kind of
          annoyed me, if I'm being honest" - Mikey's father
        </p>
        <p>
          Kleenex's stock has reportedly been plummeting after news of Mikey's
          death got out.
        </p>

        <div className="mid-article-img-container">
          <img className="mid-article-img" src={MikeyCard} alt="Mikey Card" />
          <div className="caption">Poor dude never even stood a chance.</div>
        </div>
        <p>
          To commemorate the life of Mikey, who went by the nickame "Nugget",
          all Backyard Sports players are eating 10 Chick-Fil-A nuggets.
        </p>
        <p>
          The Giants have picked up Reese Worthington off of waivers to replace
          Thomas in the lineup.
        </p>
        <p>
          Mikey Thomas wasn't the healthiest person, but that dude had as much
          power as anyone in the entire league. That will be a tough void to
          fill for the Giants.
        </p>
        <p>
          Thoughts and prayers are with the Thomas' family during this difficult
          time, although his dad didn't even really seem like he gave a shit.
        </p>
      </div>
      <div className="bottom-article-links">
        <NavLink
          to="/clanky-marries-roomba"
          activeClassName="activeNavButton"
          className="next-link"
        >
          <div className="next-link">⬅️ Mr. Clanky Marries a Roomba</div>
        </NavLink>
        <NavLink
          to="/pete-wheeler-promoted"
          activeClassName="activeNavButton"
          className="next-link"
        >
          <div className="next-link">
            Pete Wheeler Gets Promoted at Jimmy John's ➡️
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Article13;
