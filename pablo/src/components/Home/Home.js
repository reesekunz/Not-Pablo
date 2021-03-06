import React from "react";
import "./Home.scss";
import Section1 from "../Section1/Section1";
import Section2 from "../Section2/Section2";
import Section3 from "../Section3/Section3";

import MobileHome from "./MobileHome";

import StickyNav from "../NavBar/StickyNav";

function Home() {
  return (
    <div>
      <div className="home-container">
        <Section1 />
        <Section3 />
        <Section2 />
      </div>
      <div className="mobile-home">
        <StickyNav />
        <MobileHome />
      </div>
    </div>
  );
}

export default Home;
