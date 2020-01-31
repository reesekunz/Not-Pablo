import React from "react";
import "./MobileHome.scss";
import { NavLink } from "react-router-dom";
import Pete from "../../images/Pete.png";
import Lisa from "../../images/Lisa.png";
import Vinnie from "../../images/Vinnie.jpeg";
import Annie from "../../images/Annie.jpeg";
import Dante from "../../images/Dante.png";
import TheDecision from "../../images/TheDecision.jpeg";
import MrClanky from "../../images/MrClanky.jpeg";
import Mikey from "../../images/Mikey.png";
import PabloCheating from "../../images/PabloCheating.png";
import SteeleStadium from "../../images/SteeleStadium.png";
import Marky from "../../images/Marky.png";
import WhereAreTheyNow from "../../images/WhereAreTheyNow.jpg";
import Kenny from "../../images/Kenny.png";

function MobileHome() {
  return (
    <div className="section-2-container-mobile">
      {/* FEATURED SECTION */}
      <div className="section-header-container-mobile">
        <h2 className="section-header-mobile">Trending</h2>
      </div>
      <div className="section-2-content-mobile">
        <div className="second-img-container-mobile">
          {/* Pablo Scandal article  */}
          <div className="section-2-second-img-mobile">
            <NavLink
              to="/pablo-scandal"
              activeClassName="activeNavButton"
              className="article-link-mobile"
            >
              <img
                className="secondary-image-mobile"
                src={PabloCheating}
                alt="Pablo's Cheating"
              />
              <div className="article-link-mobile">
                Astros' Scandal Runs Deeper Than We Thought
              </div>
            </NavLink>
          </div>
          {/* Where are they now article  */}
          <div className="section-2-second-img-mobile">
            <NavLink
              to="/where-are-they-now"
              activeClassName="activeNavButton"
              className="article-link-mobile"
            >
              <img
                className="secondary-image-mobile"
                src={WhereAreTheyNow}
                alt="Where are they now"
              />
              <div className="article-link-mobile">
                Where Are They Now? Backyard Sports Edition
              </div>
            </NavLink>
          </div>
          <div className="section-2-second-img-mobile">
            {/* Kenny article  */}
            <NavLink
              to="/kenny-bear-attack"
              activeClassName="activeNavButton"
              className="article-link-mobile"
            >
              <img className="secondary-image-mobile" src={Kenny} alt="Kenny" />
              <div className="article-link-mobile">
                How Exactly Did Kenny End up in a Wheelchair?
              </div>
            </NavLink>
          </div>

          <div className="section-2-second-img-mobile">
            {/* Pablo Trump article  */}
            <NavLink
              to="/steele-stadium-wall"
              activeClassName="activeNavButton"
              className="article-link-mobile"
            >
              <img
                className="secondary-image-mobile"
                src={SteeleStadium}
                alt="Steele Stadium"
              />
              <div className="article-link-mobile">
                Pablo and Trump in Discussions to Build a Higher Wall at Steele
                Stadium
              </div>
            </NavLink>
          </div>
        </div>
      </div>
      {/* FEATURED SECTION */}
      <div className="section-header-container-mobile">
        <h2 className="section-header-mobile">Featured</h2>
      </div>
      <div className="section-2-content-mobile">
        <div className="second-img-container-mobile">
          {/* Pablo article  */}
          <div className="section-2-second-img-mobile">
            <NavLink
              to="/pablos-decision"
              activeClassName="activeNavButton"
              className="article-link-mobile"
            >
              <img
                className="secondary-image-mobile"
                src={TheDecision}
                alt="Pablo's Decision"
              />
              <div className="article-link-mobile">
                Pablo Sanchez: The Decision
              </div>
            </NavLink>
          </div>
          {/* Dante article  */}
          <div className="section-2-second-img-mobile">
            <NavLink
              to="/dante-passes-chestnut"
              activeClassName="activeNavButton"
              className="article-link-mobile"
            >
              <img className="secondary-image-mobile" src={Dante} alt="Dante" />
              <div className="article-link-mobile">
                Dante Robinson breaks Joey Chesnut's hot dog record
              </div>
            </NavLink>
          </div>
          <div className="section-2-second-img-mobile">
            {/* Clanky article  */}
            <NavLink
              to="/clanky-marries-roomba"
              activeClassName="activeNavButton"
              className="article-link-mobile"
            >
              <img
                className="secondary-image-mobile"
                src={MrClanky}
                alt="Mr Clanky"
              />
              <div className="article-link-mobile">
                Mr. Clanky marries a Roomba
              </div>
            </NavLink>
          </div>

          <div className="section-2-second-img-mobile">
            {/* Mikey article  */}
            <NavLink
              to="/mikey-died"
              activeClassName="activeNavButton"
              className="article-link-mobile"
            >
              <img className="secondary-image-mobile" src={Mikey} alt="Mikey" />
              <div className="article-link-mobile">
                Mikey Thomas dead From Ebola virus
              </div>
            </NavLink>
          </div>
        </div>
      </div>
      {/* LATEST SECTION */}
      <div className="section-header-container-mobile">
        <h2 className="section-header-mobile">Latest</h2>
      </div>
      <div className="section-2-content-mobile">
        <div className="second-img-container-mobile">
          {/* Pete article  */}
          <div className="section-2-second-img-mobile">
            <NavLink
              to="/pete-wheeler-promoted"
              activeClassName="activeNavButton"
              className="article-link-mobile"
            >
              <img className="secondary-image-mobile" src={Pete} alt="Pete" />
              <div className="article-link-mobile">
                Pete Wheeler Gets Promoted at Jimmy John's
              </div>
            </NavLink>
          </div>
          {/* Annie article  */}
          <div className="section-2-second-img-mobile">
            <NavLink
              to="/annie-suspended"
              activeClassName="activeNavButton"
              className="article-link-mobile"
            >
              <img className="secondary-image-mobile" src={Annie} alt="Annie" />
              <div className="article-link-mobile">
                Annie Frazier suspended 8 games for violating substance abuse
                policy
              </div>
            </NavLink>
          </div>
          <div className="section-2-second-img-mobile">
            {/* Vinnie article  */}
            <NavLink
              to="/vinnie-the-gooch-rager"
              activeClassName="activeNavButton"
              className="article-link-mobile"
            >
              <img
                className="secondary-image-mobile"
                src={Vinnie}
                alt="Vinnie"
              />
              <div className="article-link-mobile">
                Vinnie the Gooch throws "lit" rager. Currently in prison.
              </div>
            </NavLink>
          </div>

          <div className="section-2-second-img-mobile">
            {/* Lisa article  */}
            <NavLink
              to="/lisa-crockett-dui"
              activeClassName="activeNavButton"
              className="article-link-mobile"
            >
              <img className="secondary-image-mobile" src={Lisa} alt="Lisa" />
              <div className="article-link-mobile">
                Lisa Crockett arrested with DUI, blames it on Kombucha Tea.
              </div>
            </NavLink>
          </div>
          <div className="section-2-second-img-mobile">
            {/* Marky article  */}
            <NavLink
              to="/marky-is-killing-it"
              activeClassName="activeNavButton"
              className="article-link-mobile"
            >
              <img className="secondary-image-mobile" src={Marky} alt="Marky" />
              <div className="article-link-mobile">
                People Are Impersonating Marky Dubios on FarmersOnly
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileHome;
