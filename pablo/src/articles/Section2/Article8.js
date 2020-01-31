import React from "react";
import ".././Article.scss";
import Vinnie from "../../images/Vinnie.jpeg";
import VinniesRager from "../../images/VinniesRager.jpeg";
import { NavLink } from "react-router-dom";

function Article8() {
  return (
    <div className="article-container">
      <div className="article-header-container">
        <h4 className="article-header">
          Vinnie the Gooch Throws "Lit" Rager. Currently in Prison.
        </h4>
        <img className="article-header-img" src={Vinnie} alt="Vinnie" />
        <div className="caption">Vinnie the Gooch is one chill dude. </div>
        <p className="date-written">January 31st, 2020 </p>
      </div>

      <div className="content">
        <p>
          <i> "I woke up in prison with yack all over my jeans." </i> - Vinnie
          the Gooch. Sources are saying this might have been the sickest party
          in Backyard Sports history.
        </p>
        <p>Here's what we know so far:</p>
        <p>
          <ul className="list">
            <li> Amir and Achmed DJ'ed the party </li>
            <li>Over 200 people attended</li>
            <li>Marky Dubois had two farm girls around his arms</li>
            <li>Dimitri did a keg stand</li>
            <li>Lisa Crockett got a DUI (more on that later)</li>
            <li>Pete brought free Jimmy John's</li>
            <li>The neighbors house was set on fire</li>
            <li>Cars in the streets were flipped over</li>
            <li>Someone definitely peed in the pool</li>
          </ul>
        </p>
        <p>
          Pablo also got so turnt off of 4 Loko's that he stole Kenny's
          wheelchair and was using it because he wasn't able to walk. 4 Loko is
          now looking into a pontential sponsorship deal with Pablo following
          this headline.
        </p>
        <div className="mid-article-img-container">
          <img
            className="mid-article-img"
            src={VinniesRager}
            alt="Vinnies rager"
          />
          <div className="caption">
            After Vinnie threw up on his pants but before the cops came.
          </div>
        </div>
        <p>
          Although Vinnie the Gooch is in prison, he doesn't regret a thing.
        </p>

        <p>"Heroes get remembered, but legends never die," he says.</p>
      </div>
      <div className="bottom-article-links">
        <NavLink
          to="/annie-suspended"
          activeClassName="activeNavButton"
          className="next-link"
        >
          <div className="next-link">
            ⬅️ Annie Frazier Suspended 8 Games for Violating Substance Abuse
            Policy
          </div>
        </NavLink>
        <NavLink
          to="/lisa-crockett-dui"
          activeClassName="activeNavButton"
          className="next-link"
        >
          <div className="next-link">
            Lisa Crockett Arrested with DUI, Blames it on Kombucha Tea ➡️
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Article8;
