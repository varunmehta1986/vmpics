import React, { Component } from "react";
import About from "./About";
import Menu from './Menu';
import Reviews from './Reviews';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="homeImage">
          <Menu variant="dark"></Menu>
          {/* <div className="col-lg-4 text-left .d-none .d-sm-block"
            style={{ fontSize: "55px", color: "#ffe8cc"}}>
            Family Photographer based in Sydney, Australia
          </div> */}
        </div >
        <br />
        <About />
        <br />
        <Reviews />
      </div>
    );
  }
}

export default Home;
