import React, { Component } from "react";
import Image from 'react-bootstrap/Image'

class About extends Component {
  state = {};
  render() {
    return (
      <div style={{ textAlign: "justify", margin: "10px" }} className="row">
        <div className="col-lg-7 col-sm-12 col-md-12">
          <span style={{ fontSize: "24px", fontFamily: 'Montserrat,sans-serif' }}>HELLO, I AM VARUN. </span>
          <br />
          <br />
          A software
          engineer by my first profession, I had a keen interest in photography from a very long time. And I started taking it seriously and made it my second profession in 2020
          after I moved to Australia. Over the past years, I have learnt that it is important to know your equipment, light, composition, etc, but even more important is to make your
          client comfortable in front of the camera. And that is exactly what you get when you are shooting with me along with amazing captures.
          <br />
          I have been featured as Shutterturf's top family photographers in Sydney. You can read more about it
          in <a href='https://www.shutterturf.com/blog/family-photographers-sydney' rel="noopener noreferrer" target='_blank'>this article</a></div>
        <div className="col-lg-5 col-sm-12 col-md-12" >
          <Image src={require("../images/vmt.jpg")} fluid alt="about me" width={"400px"} ></Image>
        </div>

      </div>
    );
  }
}

export default About;
