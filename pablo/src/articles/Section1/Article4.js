import React from "react";
import ".././Article.scss";
import Marky from "../../images/Marky.png";
import Marky2 from "../../images/Marky2.jpeg";

function Article4() {
  return (
    <div className="article-container">
      <div className="article-header-container">
        <h4 className="article-header">
          People Are Impersonating Marky Dubios on FarmersOnly
        </h4>
        <img className="article-header-img" src={Marky} alt="Marky" />
        <div className="caption">This guy is killing it.</div>
        <p className="date-written">January 30th, 2020 </p>
      </div>
      <div className="content">
        <p>
          Most people in Backyard Sports are known for their elite athletic
          ability. Marky is a unique one; he’s going to be remembered as the boy
          that got whatever caught his eye - groundballs, frogs, farm girls, you
          name it.
        </p>
        <p>
          Recently, Marky Dubios was having so much success on his
          farmersonly.com account that there have been numerous reports of
          people stealing his identity in a sleazy attempt to meet up with women.
        </p>
        <p>
          PSA, ladies, if you get matched up with a Marky Dubios, it’s probably
          some creepy guy.
        </p>

        <p>
          "I’ve gotten matched up with four guys claiming to be Marky and ended
          up meeting two of them in person. One actually ended up being his
          teammate, Dimitri Petrovich." - anonymous farmer
        </p>
        <div className="mid-article-img-container">
          <img className="mid-article-img" src={Marky2} alt="Dimtri" />
          <div className="caption">There's a reson his nicname is Cootie.</div>
        </div>
        <p>
          We asked Marky about what he thought of the situation and what made
          him so successful, here’s his response:
        </p>

        <p>
          <i>
            “All my pictures have me with my frog. It’s a good icebreaker.
            Bitches love frogs. I usually tell them some corny line about how
            they gotta ‘kiss a lot of frogs to find a prince’. Jokes on them,
            I’m also another metaphorical frog. They usually don’t know until
            after the fact, though.
          </i>
        </p>
        <p>
          While Facebook doesn’t censor the accuracy of political ads posted on
          their site, FarmersOnly might have their own unethical situation to
          worry about.
        </p>
      </div>
    </div>
  );
}

export default Article4;
