import React, { Component } from "react";
import HomeImageSet from "./HomeImageSet";
import Header from "./Header";

class Home extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <div className="container">
          <div className="row">
            <div>
              <HomeImageSet></HomeImageSet>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
