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
              time now. I have been clicking my family and friends for sometime.
              It's about time to take it to the next level.
            </p>
            <p>
              You can follow me on my instagram page @varunmehtapictures. Scan or click the QR Code to follow me now.
              <br />
              <a href="https://www.instagram.com/varunmehtapictures/" target="_blank" rel="noopener noreferrer">
                <img src={require("../images/nametag.png")} alt="Instagram name tag" width="250"></img>
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
