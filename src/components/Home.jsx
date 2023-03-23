import React, { Component } from "react";
import About from "./About";
import Menu from './Menu';
import Helmet from 'react-helmet'
import HomeCarousel from "./HomeCarousel";
import ReadyToInquire from "./ReadyToEnquire";
import InstagramFeed from "./Gallery/InstagramFeed";

class Home extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Welcome to VMPics Photography. </title>
          <meta name="description" content='Varun was absolute delight to work with, 
            he knew exactly what we wanted and captured our family moments with his lenses. 
            I would highly recommend him.'></meta>
        </Helmet>
        <Menu></Menu>
        <div className="container-fluid">
          <HomeCarousel />
          <br />
          <About />
          <br />
          <ReadyToInquire />
          <br />
          <InstagramFeed />
        </div>
      </div>

    );
  }
}

export default Home;
