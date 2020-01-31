import React from "react";
import ".././Article.scss";
import Annie from "../../images/Annie.jpeg";
import PlaygroundCommons from "../../images/PlaygroundCommons.png";
import { NavLink } from "react-router-dom";

function Article7() {
  return (
    <div className="article-container">
      <div className="article-header-container">
        <h4 className="article-header">
          Annie Frazier Suspended 8 Games for Violating Substance Abuse Policy
        </h4>
        <img className="article-header-img" src={Annie} alt="Annie" />
        <div className="caption">Annie should be ashamed of herself.</div>
        <p className="date-written">January 30th, 2020 </p>
      </div>

      <div className="content">
        <p>
          Annie Frazier was caught smoking marijuana aka "The Devil's Lettuce"
          near Playground Commons yesterday afternoon.
        </p>
        <p>
          The cops smelled pot on Annie and asked her where it was, to which she
          replied, <i>"I smoked it all"</i>
        </p>
        <p>
          Annie has had a history of drug problems in the past, most notably of
          which is the grizzly bear incident in the woods.
        </p>
        <p>
          While Backyard Sports has suspended her for 8 games, don't be
          surprised if she gets an even harsher punishment from her parents.
        </p>
        <div className="mid-article-img-container">
          <img
            className="mid-article-img"
            src={PlaygroundCommons}
            alt="Playground Commons"
          />
          <div className="caption">The scene of the crime.</div>
        </div>
        <p>
          Here's hoping this incident will persuade Annie to get her life in
          order, as she is clearly headed down the wrong path. Doing the
          marijuana is not cool.
        </p>

        <p>
          Police are still looking into how she got her hands on a dangerous
          drug with such a high death rate. Contact immediately if you know
          anything.
        </p>
      </div>
      <div className="bottom-article-links">
        <NavLink
          to="/pete-wheeler-promoted"
          activeClassName="activeNavButton"
          className="next-link"
        >
          <div className="next-link">
            ⬅️ Pete Wheeler Gets Promoted at Jimmy John's
          </div>
        </NavLink>
        <NavLink
          to="/vinnie-the-gooch-rager"
          activeClassName="activeNavButton"
          className="next-link"
        >
          <div className="next-link">
            Vinnie the Gooch Throws "Lit" Rager. Currently in Prison. ➡️
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Article7;
