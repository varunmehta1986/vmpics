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
          <div className="col-lg-4 text- .d-none .d-sm-block"
            style={{ color: "#ffe8cc" }}>
            <h1>Family Photographer based in Sydney, Australia</h1>
          </div>
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
