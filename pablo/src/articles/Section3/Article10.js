import React from "react";
import ".././Article.scss";
import Kenny from "../../images/Kenny.png";
import Benny from "../../images/Benny.jpeg";
import TheDecision from "../../images/TheDecision.jpeg";
import PabloFriends from "../../images/PabloFriends.jpeg";
import { NavLink } from "react-router-dom";

function Article10() {
  return (
    <div className="article-container">
      <div className="article-header-container">
        <h4 className="article-header">Pablo Sanchez: The Decision</h4>
        <img
          className="article-header-img"
          src={TheDecision}
          alt="Mystery hat"
        />
        <div className="caption">
          Biggest moment in the history of Backyard Sports
        </div>
      </div>
        <p className="date-written">January 31st, 2020 </p>

      <div className="content">
        <p>
          The Humongous Melonheads famously blew a 3-1 series lead to the Flying
          Wombats in the 2019 Backyard Sports Championship. To make matters
          worse, the Melonheads’ organization and fans across the world now
          await star player Pablo Sachez’s free agency decision.
        </p>
        <p>
          Sanchez, in the midst of his prime, has reportedly been taking some
          time to reflect on his looming decision. He is currently sipping tiki
          drinks on an island in an undisclosed location with his two
          girlfriends, Selena Gomez and Rihanna.
        </p>
        <p>
          The Wombats, Fishes, Giants, Monsters, Socks, and Hornets have all
          received fines for tampering earlier in the season in an attempt to
          recruit Pablo.
        </p>
        <p>Here are the updated odds for where Pablo ends up:</p>
        <p>
          Melonheads: +200 Wombats: +300 Socks: +300 Giants: +500 Monsters: +600
          Other: +300
        </p>

        <div className="mid-article-img-container">
          <img
            className="mid-article-img"
            src={PabloFriends}
            alt="Pablo and friends"
          />
          <div className="caption">
            Which one of Pablo's friends will he decide to play with?
          </div>
        </div>
        <p>
          Melonheads have been perennial championship contenders for as long as
          Pablo has been in the league. They’re the team that drafted him #1
          overall, which has to at least give them somewhat of an advantage.
        </p>

        <p>
          Wombats could be interesting with an already stacked roster headlined
          by Kiesha Phillips, Pete Wheeler, and Achmed Khan. But would he be
          tarnishing his legacy joining the very team that came back from a 3-1
          series deficit?
        </p>
        <p>
          Socks have the 2nd most championships in Backyard Sports and are a
          historic franchise. While they haven’t been great as of late, Pablo
          would get a fresh start to be the face of the coveted franchise.{" "}
        </p>
        <p>
          Pablo will reportedly air his decision next month on ESPN 8 ocho. All
          proceeds from the hour long broadcast will go towards the Kenny K fund
          (a fundraiser started by Kenny’s parents to help him get prosthetic
          legs).{" "}
        </p>
        <p>
          Folks, we've never witnessed something so monumental in the history of
          Backyard Sports. #staytuned
        </p>
      </div>
      <div className="bottom-article-links">
        <NavLink
          to="/where-are-they-now"
          activeClassName="activeNavButton"
          className="next-link"
        >
          <div className="next-link">
            ⬅️ Where Are They Now? Backyard Sports Edition
          </div>
        </NavLink>
        <NavLink
          to="/dante-passes-chestnut"
          activeClassName="activeNavButton"
          className="next-link"
        >
          <div className="next-link">
            Dante Robinson Breaks Joey Chestnut's Hot Dog Record ➡️
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Article10;
