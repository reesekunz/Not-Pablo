import React from "react";
import ".././Article.scss";
import Pete from "../../images/Pete.png";
import JimmyJohns from "../../images/JimmyJohns.jpeg";
import { NavLink } from "react-router-dom";

function Article6() {
  return (
    <div className="article-container">
      <div className="article-header-container">
        <h4 className="article-header">
          Pete Wheeler Gets Promoted at Jimmy John's
        </h4>
        <img className="article-header-img" src={Pete} alt="Pete" />
        <div className="caption">The man has found his calling.</div>
      </div>
        <p className="date-written">January 30th, 2020 </p>

      <div className="content">
        <p>
          After only 3 months of working at Jimmy John’s, Pete Wheeler has
          become the fastest employee to ever receive a promotion into a
          managerial role at the company.
        </p>
        <p>
          Since arriving, analysts say Pete has almost single handedly raised
          Jimmy John’s stock 10%. The manager who actually demoted himself in
          order to promote Pete had this to say about Mr. Wheeler’s work:
        </p>
        <p>
          <i>
            “Pete embodies what it means to be a freaky fast deliverer. That
            dude has serious wheels. He delivers sandwiches quicker than we make
            them. He’s everything I’ve ever wanted to be. If I was my wife I
            would seriously consider leaving me to be with him. ”
          </i>
        </p>

        <div className="mid-article-img-container">
          <img className="mid-article-img" src={JimmyJohns} alt="Jimmy Johns" />
          <div className="caption">
            {" "}
            Jimmy John's stocks have gone up 10% since the arrival of Pete
            Wheeler.
          </div>
        </div>
        <p>
          Although he is now in a managerial role, Pete will still be out doing
          deliveries as well. Uber Eats, Postmates, and a couple of other
          delivery services were in negotiations with Wheeler’s services, but
          sources say those talks have been put on hold since the promotion.
        </p>

        <p>
          Pete had this to say: “I'm the Pablo Sanchez of JJ employees. My
          manager’s wife literally left him to be with me. I swooped on his job
          and his girl. He just doesn’t know about the girl, yet.”
        </p>
        <p>Continue making us all proud, Pete.</p>
      </div>
      <div className="bottom-article-links">
        <NavLink
          to="/mikey-died"
          activeClassName="activeNavButton"
          className="next-link"
        >
          <div className="next-link">⬅️ Mikey Thomas Dead From Ebola Virus</div>
        </NavLink>
        <NavLink
          to="/annie-suspended"
          activeClassName="activeNavButton"
          className="next-link"
        >
          <div className="next-link">
            Annie Frazier Suspended 8 Games for Violating Substance Abuse Policy
            ➡️
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Article6;
