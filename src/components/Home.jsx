import React, { Component } from "react";
import About from "./About";
import Menu from './Menu';
import Helmet from 'react-helmet'
import HomeCarousel from "./HomeCarousel";

class Home extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Welcome to VMPics Photography. </title>
          <meta name="description" content='Family photographer in Hills District of NSW. Australia'></meta>
        </Helmet>
        <Menu></Menu>
        <HomeCarousel />
        <br />
        <About />
        <br />
        {/* <ReadyToInquire /> */}
      </div >
    );
  }
}

export default Home;
