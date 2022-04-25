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
          <meta name="description" content='Family photographer in Hills District of NSW. Australia'></meta>
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
