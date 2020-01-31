import React from "react";
import "./Article3.scss";
import AchmedKhan from "../../images/AchmedKhan.png";
import Dante from "../../images/Dante.png";
import Dimitri from "../../images/Dimitri.png";
import Jorge from "../../images/Jorge.png";
import Kenny from "../../images/Kenny.png";
import Kiesha from "../../images/Kiesha.png";
import Marky from "../../images/Marky.png";
import Mikey from "../../images/Mikey.png";
import Pete from "../../images/Pete.png";
import Tony from "../../images/Tony.png";
import Pablo from "../../images/Pablo.jpeg";
import WhereAreTheyNow from "../../images/WhereAreTheyNow.jpg";
import { NavLink } from "react-router-dom";

function Article3() {
  return (
    <div className="article-container">
      <div className="article-header-container">
        <h4 className="article-header">
          Where Are They Now? Backyard Sports Edition
        </h4>
        <img
          className="article-header-img"
          src={WhereAreTheyNow}
          alt="Where Are They Now"
        />
        <div className="caption">Tony D isn't looking too hot</div>
        <p className="date-written">January 28th, 2020 </p>
      </div>

      <div className="intro">
        {" "}
        A lot of childhood stars have a difficult time transitioning to
        adulthood, and this fine group of young men were no exception. We sent
        Vinnie the Gooch out to find out what's going on in their lives. Let's
        take a look:
      </div>
      {/* Achmed Khan */}
      <div className="player-container">
        <strong>Achmed Khan</strong>
        <img className="player-img" src={AchmedKhan} alt="Achmed Khan" />
        <p>
          Started a subpar band with his brother, Amir, in their garage. Works
          at RadioShack.
        </p>
      </div>
      {/* Dante Robinson  */}
      <div className="player-container">
        <strong>Dante Robinson </strong>
        <img className="player-img" src={Dante} alt="Dante Robinson" />
        <p>Huge stoner. Lives in a van.</p>
      </div>
      {/* Dimitri Petrovich  */}
      <div className="player-container">
        <strong>Dimitri Petrovich </strong>
        <img className="player-img" src={Dimitri} alt="Dimitri" />
        <p>ESports superstar.</p>
      </div>
      {/* Jorge Garcia */}
      <div className="player-container">
        <strong>Jorge Garcia</strong>
        <img className="player-img" src={Jorge} alt="Jorge" />
        <p>Early Bitcoin investor. Mansion. Married to both Weber twins.</p>
      </div>
      {/* Kenny Kawaguchi */}
      <div className="player-container">
        <strong>Kenny Kawaguchi</strong>
        <img className="player-img" src={Kenny} alt="Kenny" />
        <p>Prosthetic legs. Vape God.</p>
      </div>
      {/* Kiesha Phillips */}
      <div className="player-container">
        <strong>Kiesha Phillips</strong>
        <img className="player-img" src={Kiesha} alt="Kiesha" />
        <p>Runs her own weight loss program. Instagram model.</p>
      </div>
      {/* Marky Dubois */}
      <div className="player-container">
        <strong>Marky Dubois</strong>
        <img className="player-img" src={Marky} alt="Marky" />
        <p>
          Works on family's farm. Hooks up with a ton of chicks via FarmersOnly.
        </p>
      </div>
      {/* Mikey Thomas*/}
      <div className="player-container">
        <strong>Mikey Thomas</strong>
        <img className="player-img" src={Mikey} alt="Mikey" />
        <p>Got Ebola in 2014. Died.</p>
      </div>
      {/* Pete Wheeler  */}
      <div className="player-container">
        <strong>Pete Wheeler </strong>
        <img className="player-img" src={Pete} alt="Pete" />
        <p>Lives with his parents. Works delivery at Jimmy Johns.</p>
      </div>
      {/* Tony Delvecchio  */}
      <div className="player-container">
        <strong>Tony Delvecchio </strong>
        <img className="player-img" src={Tony} alt="Tony" />
        <p>Got into hard drugs. Homeless.</p>
      </div>
      {/* Pablooo */}
      <div className="player-container">
        <strong>Pablo Sanchez</strong>
        <img className="player-img" src={Pablo} alt="The GOAT" />
        <p>
          MLB superstar. Owner of Humongous Melonheads. In an open relationship
          with both Selena Gomez and Rihanna.
        </p>
      </div>
      <div className="conclusion">
        Yep, that sounds about right. At least Pablo is still killing it 🐐
      </div>
      <div className="bottom-article-links">
        <NavLink
          to="/marky-is-killing-it"
          activeClassName="activeNavButton"
          className="next-link"
        >
          <div className="next-link">
            ⬅️ People Are Impersonating Marky Dubios on FarmersOnly
          </div>
        </NavLink>
        <NavLink
          to="/pablos-decision"
          activeClassName="activeNavButton"
          className="next-link"
        >
          <div className="next-link">Pablo Sanchez: The Decision ➡️</div>
        </NavLink>
      </div>
    </div>
  );
}

export default Article3;
