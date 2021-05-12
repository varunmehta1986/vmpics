import React, { Component } from "react";
import Reviews from "./Reviews";
import Menu from './Menu';

class About extends Component {
  state = {};
  render() {
    return (
      <div>
        <Menu variant="light"></Menu>
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="card mb-3">
                <img width="100%" src={require("../images/vmt.jpg")} alt="mypic"></img>
                <div className="card-body text-left">
                  <h5 class="card-title">About me</h5>
                  <p className="card-text">
                    Hello and thanks for visiting VMPics. I am Varun Mehta, a software
                    engineer by profession, photography has been my hobby for a long
                    time now. I have been clicking my family and friends for sometime.
                    It's about time I take it to the next level.
            </p>
                  <p>
                    You can follow me on my &nbsp;
               <a href="https://www.instagram.com/varunmehtapictures/">Instagram </a>or &nbsp;
               <a href="https://www.facebook.com/varunmehtapictures/">Facebook</a> page
            </p>
                </div>
              </div>
            </div>
            {/* <div className="col-md-5">
              <Reviews></Reviews>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default About;
