import React, { Component } from "react";

class About extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="card mb-3">
          <img width="100%" src={require("../images/vm.jpg")} alt="mypic"></img>
          <div className="card-body text-left">
            <h5 class="card-title">About me</h5>
            <p className="card-text">
              Hello and thanks for visiting VMPics. I am Varun Mehta, a software
              engineer by profession, photography has been my hobby for a long
              time now. I have been clicking my family and friends for sometime
              and I think it's time to take it to the next level.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
