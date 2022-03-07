import React, { Component } from "react";
import About from "./About";
import Menu from './Menu';
import Reviews from './Reviews';
import Helmet from 'react-helmet'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
var Carousel = require('react-responsive-carousel').Carousel;

class Home extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Welcome to VMPics Photography. </title>
          <meta name="description" content='Family photographer in Hills District of NSW. Australia'></meta>
        </Helmet>
        <div style={{ textAlign: 'center' }} autoPlay interval="3000" transitionTime="3000">
          <Menu></Menu>
          <Carousel showArrows={true}>
            <div>
              <img src={require("../images/Carousel/Carousel1.jpg")} alt='Carousel 1' />

            </div>
            <div>
              <img src={require("../images/Carousel/Carousel2.jpg")} alt='Carousel 2' />

            </div>
            <div>
              <img src={require("../images/Carousel/Carousel3.jpg")} alt='Carousel 3' />

            </div>
            <div>
              <img src={require("../images/Carousel/Carousel4.jpg")} alt='Carousel 4' />

            </div>
            <div>
              <img src={require("../images/Carousel/Carousel5.jpg")} alt='Carousel 5' />

            </div>
            <div>
              <img src={require("../images/Carousel/Carousel6.jpg")} alt='Carousel 6' />

            </div>
            <div>
              <img src={require("../images/Carousel/Carousel7.jpg")} alt='Carousel 7' />

            </div>
            <div>
              <img src={require("../images/Carousel/Carousel8.jpg")} alt='Carousel 8' />

            </div>
            <div>
              <img src={require("../images/Carousel/Carousel9.jpg")} alt='Carousel 9' />

            </div>
            <div>
              <img src={require("../images/Carousel/Carousel10.jpg")} alt='Carousel 10' />

            </div>
            <div>
              <img src={require("../images/Carousel/Carousel11.jpg")} alt='Carousel 11' />

            </div>
            <div>
              <img src={require("../images/Carousel/Carousel12.jpg")} alt='Carousel 12' />

            </div>
            <div>
              <img src={require("../images/Carousel/Carousel13.jpg")} alt='Carousel 13' />

            </div>

          </Carousel>
        </div >
        <br />
        <About />
        <br />
        <Reviews />
      </div >
    );
  }
}

export default Home;
