import React from "react";
import ".././Article.scss";
import Lisa from "../../images/Lisa.png";
import Kombucha from "../../images/Kombucha.jpeg";
import { NavLink } from "react-router-dom";

function Article9() {
  return (
    <div className="article-container">
      <div className="article-header-container">
        <h4 className="article-header">
          Lisa Crockett Arrested with DUI, Blames it on Kombucha Tea
        </h4>
        <img className="article-header-img" src={Lisa} alt="Lisa" />
        <div className="caption">
          Vinnie wasn't the only one arrested the night of his party.
        </div>
        <p className="date-written">January 29th, 2020 </p>
      </div>

      <div className="content">
        <p>
          Lisa Crockett is adamant that she did not have a single sip of alcohol
          outside of the small amount of it that is in Kombucha Tea.
        </p>
        <p>
          Authorities found her swerving on her way home the night of Vinnie the
          Gooch's party. Lisa recorded a .22 BAC that night.
        </p>
        <p>
          <i>"That girl was easily the most fucked up person at the party."</i>{" "}
          - Ashley Webber
        </p>
        <div className="mid-article-img-container">
          <img className="mid-article-img" src={Kombucha} alt="Kombucha" />
          <div className="caption">There is 0.5% alcohol in Kombucha.</div>
        </div>
        <p>
          Lisa marks the 3rd Backyard Sports member arrested in the past month
          alone.
        </p>
        <p>
          <i>"These kids are a bunch of degenerates".</i> - commissioner Clanky
        </p>
        <p>
          Lisa definitely has some explaining to do. Such an innocent face, yet
          so many concrete facts going against her at the moment.
        </p>{" "}
        <p>We're just happy no one got hurt.</p>
      </div>
      <div className="bottom-article-links">
        <NavLink
          to="/vinnie-the-gooch-rager"
          activeClassName="activeNavButton"
          className="next-link"
        >
          <div className="next-link">
            ⬅️ Vinnie the Gooch Throws "Lit" Rager. Currently in Prison.
          </div>
        </NavLink>
        <NavLink
          to="/kenny-bear-attack"
          activeClassName="activeNavButton"
          className="next-link"
        >
          <div className="next-link">
            How Exactly Did Kenny End up in a Wheelchair? ➡️
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Article9;
