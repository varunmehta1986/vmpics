import React, { Component } from "react";
import Menu from './Menu';
class HomeImageSet extends Component {
  render() {
    return (
      <div className="homeImage">
        <Menu></Menu>
        <br></br>
        {/* <div className="float-left"
          style={{ fontSize: "55px", color: "White", fontFamily: 'Cormorant Garamond' }}>
          Family Photographer based in Sydney, Australia
        </div> */}
        {/* <div className="float-right align-bottom">
          <Button variant="flat" size="lg" style={{ background: "#f7c979" }}>View Portfolio</Button>
        </div> */}

      </div >
    );
  }
}

export default HomeImageSet;
