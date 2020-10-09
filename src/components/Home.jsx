import React, { Component } from "react";
import HomeImageSet from "./HomeImageSet";
import Header from "./Header";

class Home extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <HomeImageSet></HomeImageSet>
      </div>
    );
  }
}

export default Home;
