import React from "react";
import "./Home.scss";
import Section1 from "../Section1/Section1";
import Section2 from "../Section2/Section2";
import Section3 from "../Section3/Section3";

function Home() {
  return (
    <div>
      <Section1 />
      <Section3 />
      <Section2 />
    </div>
  );
}

export default Home;
