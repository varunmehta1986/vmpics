import React, { Component } from "react";
import Image from 'react-bootstrap/Image'
import { Row, Col, Container } from 'react-bootstrap'

class About extends Component {
  state = {};
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col className='aboutmeText' md-6 lg-6 sm-12>
              A software
              engineer by my first profession, I had a keen interest in photography from a very long time. And I started taking it seriously and made it my second profession in 2020
              after I moved to Australia. Over the past years, I have learnt that it is important to know your equipment, light, composition, etc, but even more important is to make your
              client comfortable in front of the camera. And that is exactly what you get when you are shooting with me along with amazing captures.
              <br />
              <br />

              I have been featured as Shutterturf's top family photographers in Sydney. You can read more about it
              in <a href='https://www.shutterturf.com/blog/family-photographers-sydney' rel="noopener noreferrer"
                target='_blank'>this article</a>
            </Col>
            <Col md-6 lg-6 sm-12>
              <Image src={require("../images/aboutme.jpg")} fluid alt="about me" className="aboutmeImg" ></Image>
            </Col>
          </Row>
        </Container>
      </div >
    );
  }
}

export default About;
