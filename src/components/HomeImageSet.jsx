import React, { Component } from "react";
import HomeImage from "./HomeImage";
import HomeVerticalImage from "./HomeVerticalImage";

class HomeImageSet extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col border bg-light px-0">
            <HomeImage
              imageUrl={require("../images/baby/5.jpg")}
              imageAlt="Baby Picture"
            ></HomeImage>
          </div>
          <div className="col border bg-light px-0">
            <HomeImage
              imageUrl={require("../images/pregnancy/1.jpg")}
              imageAlt="Pregnancy Picture"
            ></HomeImage>
          </div>
          <div className="col border bg-light px-0">
            <HomeImage
              imageUrl={require("../images/scenery/2.jpg")}
              imageAlt="Scenic Picture"
            ></HomeImage>
          </div>
          <div className="col border bg-light px-0">
            <HomeImage
              imageUrl={require("../images/baby/6.jpg")}
              imageAlt="Baby Picture"
            ></HomeImage>
          </div>
          <div className="col border bg-light px-0">
            <HomeImage
              imageUrl={require("../images/pregnancy/3.jpg")}
              imageAlt="Pregnancy Picture"
            ></HomeImage>
          </div>
        </div>

        <div className="row">
          <div className="col border bg-light px-0">
            <HomeVerticalImage
              imageUrl={require("../images/baby/8.jpg")}
              imageAlt="Baby Picture"
            ></HomeVerticalImage>
          </div>
          <div className="col border bg-light px-0">
            <HomeVerticalImage
              imageUrl={require("../images/pregnancy/4.jpg")}
              imageAlt="Baby Picture"
            ></HomeVerticalImage>
          </div>
          <div className="col border bg-light px-0">
            <HomeVerticalImage
              imageUrl={require("../images/baby/9.jpg")}
              imageAlt="Baby Picture"
            ></HomeVerticalImage>
          </div>

          <div className="col border bg-light px-0">
            <HomeVerticalImage
              imageUrl={require("../images/baby/13.jpg")}
              imageAlt="Baby Picture"
            ></HomeVerticalImage>
          </div>
          <div className="col border bg-light px-0">
            <HomeVerticalImage
              imageUrl={require("../images/baby/12.jpg")}
              imageAlt="Baby Picture"
            ></HomeVerticalImage>
          </div>
          <div className="col border bg-light px-0">
            <HomeVerticalImage
              imageUrl={require("../images/scenery/6.jpg")}
              imageAlt="Baby Picture"
            ></HomeVerticalImage>
          </div>
          <div className="col border bg-light px-0">
            <HomeVerticalImage
              imageUrl={require("../images/pregnancy/5.jpg")}
              imageAlt="Baby Picture"
            ></HomeVerticalImage>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeImageSet;
