import React from "react";
import ".././Article.scss";
import Kenny from "../../images/Kenny.png";
import Benny from "../../images/Benny.jpeg";
import { NavLink } from "react-router-dom";
function Article1() {
  return (
    <div className="article-container">
      <div className="article-header-container">
        <h4 className="article-header">
          How Exactly Did Kenny End up in a Wheelchair?
        </h4>
        <img className="article-header-img" src={Kenny} alt="Kenny Kawaguchi" />
        <div className="caption">
          K-Man has somehow managed to become faster while in a wheelchair.
        </div>
        <p className="date-written">January 29th, 2020 </p>
      </div>

      <div className="content">
        <p>
          <i> "You should have seen the other guy" </i> - Kenny Kawaguchi. The
          "other guy" of course being a giant grizzly bear Kenny fought while
          camping in the woods. Here's the full story:
        </p>
        <p>
          The Backyard Sports crew were graduating from middle school in May of
          1995. To celebrate, some of them decided to take a camping trip in the
          woods. All of the kids told their respective parents they were
          sleeping over at each other's houses, but that was a total lie. They
          all schemed to go on this camping trip - a camping trip in which the
          festivities revolved around drugs and alcohol.
        </p>
        <p>
          Everyone was having a great time. Marky was chasing frogs, Achmed was
          listening to Kidz Bop, Dante was roasting hot dogs. Then they all
          heard a scream coming from nearby - it came from Annie Frazier.
        </p>
        <p>
          The gang raced over to find Annie laying on the ground. In front of
          her was a giant fucking grizzly bear. Kenny was slightly intoxicated
          and felt more courageous than usual. He decided to lure the grizzly
          bear away from Annie by any means necessary.
        </p>
        <div className="mid-article-img-container">
          <img className="mid-article-img" src={Benny} alt="Benny the Jet" />
          <div className="caption">
            Kenny Kawaguchi is the real life Benny "the Jet" Rodriguez.
          </div>
        </div>
        <p>
          This is where the story gets interesting. We all thought Annie was
          just playing dead to show the bear she wasn't a threat, but it turns
          out she was tripping on acid.
          <i>
            "Yeah, I vividly remember that day. Everyone thought I was playing
            dead to show the bear I wasn't a threat, but I was actually just
            tripping on acid."
          </i>
          - Annie
        </p>

        <p>
          Kenny defeated the bear, but lost his legs. He still feels bad about
          leaving that bear's family without a father and goes back every month
          to check up on them.
        </p>
      </div>
      <div className="bottom-article-links">
        <NavLink
          to="/lisa-crockett-dui"
          activeClassName="activeNavButton"
          className="next-link"
        >
          <div className="next-link">
            ⬅️ Lisa Crockett Arrested with DUI - Blames Kombucha Tea
          </div>
        </NavLink>
        <NavLink
          to="/steele-stadium-wall"
          activeClassName="activeNavButton"
          className="next-link"
        >
          <div className="next-link">
            Pablo and Trump in Discussions to Build Higher Wall ➡️
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Article1;
