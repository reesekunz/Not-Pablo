import React from "react";
import ".././Article.scss";
import MrClanky from "../../images/MrClanky.jpeg";
import Roomba from "../../images/Roomba.jpg";
import TinCanAlley from "../../images/TinCanAlley.jpeg";

function Article12() {
  return (
    <div className="article-container">
      <div className="article-header-container">
        <h4 className="article-header">Mr. Clanky Marries a Roomba</h4>
        <img className="article-header-img" src={MrClanky} alt="Mr Clanky" />
        <div className="caption">Mr Clanky is offically a married man.</div>
        <p className="date-written">January 31st, 2020 </p>
      </div>

      <div className="content">
        <p>
          Backyard Sports commissioner Clanky and a Roomba tied the knot last
          Saturday. The venue, Tin Can Alley, was beautiful and symbolic - Mr.
          Clanky actually rescued his now-wife out of the dumpster during a game
          there 5 years back.
        </p>
        <div className="mid-article-img-container">
          <img
            className="mid-article-img"
            src={TinCanAlley}
            alt="Tin Can Alley"
          />
          <div className="caption">
            They reportedly want to name one child after Tin Can Alley.
          </div>
        </div>
        <p>
          <i>
            “Yep. My owner threw me away because he got a newer Roomba. If it
            wasn’t for Mr. Clanky I wouldn’t be here.”{" "}
          </i>{" "}
          - Mrs. Clanky{" "}
        </p>
        <p>
          <i>
            Are you familiar with the concept of Moneyball? Teams building
            around cheap players often overlooked because of weird quirks that
            others may be turned off by and don't want to deal with. That's how
            I feel about my wife.
          </i>{" "}
          - Mr. Clanky
        </p>
        <p>
          The reception was amazing as all of the Backyard Sports crew came to
          witness what appears to be the start to a long and happy marriage. The
          after party… was a different story.
        </p>
        <p>
          Everything was going fine until Tony Delvecchio got too drunk and
          started making a scene. It all went downhill from there.
        </p>
        <p>
          Jocinda Smith confronted Pablo about how he apparently “ghosted” her
          after a Tinder date.
        </p>
        <div className="mid-article-img-container">
          <img className="mid-article-img" src={Roomba} alt="Roomba" />
          <div className="caption">
            Mr Clanky (left) and Roomba (right) tied the knot
          </div>
        </div>
        <p>
          The Weber twins started fighting each other over who actually loves
          Jorge Garcia more, claiming that the other one is just in it for the
          money.
        </p>

        <p>
          Dante Robinson brought pot brownies and momentarily left them
          unattended. Annie Frazier claims she “unknowingly put them in her
          system”. Yeah, ok.
        </p>
        <p>Dimitri was also being creepy.</p>
        <p>Party aside, we couldn't be happier for the two.</p>
      </div>
    </div>
  );
}

export default Article12;
