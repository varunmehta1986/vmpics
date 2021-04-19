import React, { Component } from "react";
import Menu from './Menu';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="homeImage">
          <Menu variant="dark"></Menu>
          <div className="col-lg-4 text-left"
            style={{ fontSize: "55px", color: "#ffe8cc", fontFamily: 'Cambria' }}>
            Family Photographer based in Sydney, Australia
        </div>
          {/* <div className="float-right align-bottom">
          <Button variant="flat" size="lg" style={{ background: "#f7c979" }}>View Portfolio</Button>
        </div> */}

        </div >
      </div>
    );
  }
}

export default Home;
