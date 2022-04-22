import React, { Component } from "react";
import About from "./About";
import Menu from './Menu';
import Helmet from 'react-helmet'
import HomeCarousel from "./HomeCarousel";
import ReadyToInquire from "./ReadyToEnquire";

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
        <ReadyToInquire />
        <br />
        <div class="tagembed-container" style={{ width: '100%', height: '300px', overflow: 'auto' }}>
          <div class="tagembed-socialwall" data-wall-id="37711" view-url="https://widget.tagembed.com/37711?view">
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
