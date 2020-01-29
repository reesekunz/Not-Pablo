import React from "react";
import ".././Article.scss";
import PabloCheating from "../../images/PabloCheating.png";
import PabloTweet from "../../images/PabloTweet.png";
function Article5() {
  return (
    <div className="article-container">
      <h4 className="article-header">
        Astros' Scandal Runs Deeper Than We Thought
      </h4>
      <img
        className="article-header-img"
        src={PabloCheating}
        alt="Pablo cheating"
      />
      <div className="caption">
        Many have debated if Pablo's stats should have an asterisk next to them.
      </div>
      <p className="date-written">January 30th, 2020 </p>
      <div className="content">
        <p>
          Backyard Sports commissioner Mr. Clanky is heavily investigating the
          Humongous Melonheads historic 2018 championship run after an anonymous
          package was left at his office. Sources say the package contained
          recorded footage of the Humongous Melonheads stealing signs from the
          Wombats.
        </p>
        <p>
          The most notable play from the footage was when Pablo used the
          Aluminum Power power-up that lead to a 3-run game-winning homerun that
          sealed the series for the Melonheads. Many believe Pablo knew that
          Angela Delvecchio was going to throw a fast-ball because he was
          looking at the Melonheads bench for signals.
        </p>
        <p>
          Also, as Pablo was trotting around the bases celebrating the
          Melonheads’ Championship, a box-shaped device was momentarily seen in
          Pablo’s midriff area that he is notorious for showing as a result of
          wearing too small of shirts.
        </p>
        <p>
          We asked Pablo to comment, but he declined. Pete Wheeler asked us if
          he could comment, but we declined. The only content we have to provide
          is this tweet from a 12 year old kid with an egg avatar:
        </p>
        <div className="mid-article-img-container">
          <img className="mid-article-img" src={PabloTweet} alt="Pablo tweet" />
          <div className="caption">
            Does he change his name everytime he has a birthday? It would be
            weird to be 40 and have a name of 12YearOldKid.
          </div>
        </div>
        <p>
          Some are still standing up for Pablo, while others want the 2018 title
          to go to the Wombats and Pablo’s Hall of Fame stats to have an
          asterisk next to it. This is obviously a tough time for Pablo, who
          also is reportedly having relationship issues with Rihanna.
        </p>

        <p>
          Backyard Sports is still investigating this to the fullest extent and
          we will provide more details as soon as we hear any.
        </p>
      </div>
    </div>
  );
}

export default Article5;
