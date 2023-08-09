import React, { Component } from "react";

import SimpleSlider from "../Slider";

import MainIntro from "../components/main-intro/main-intro";
import UnmatchedFeature from "../components/unmatched-feature/unmatchedFeature";
import LocalEvents from "../components/local-events/localEvents";
import TopSection from "../components/top-section/topSection";
import SellNow from "../components/sell-now/sellNow";
class Home extends Component {
  render() {
    return (
      <>
        <title>Source Home</title>

        <div>
          <MainIntro />
        </div>

        <div>
          <LocalEvents />
        </div>
        <div>
          <UnmatchedFeature />
        </div>
        <div>
          <TopSection />
        </div>
        <div>
          <SellNow />
        </div>
      </>
    );
  }
}

export default Home;
