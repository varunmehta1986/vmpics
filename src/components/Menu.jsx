import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
class Menu extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="md" variant="dark">
          <Navbar.Brand href="/">
            <div style={{ fontFamily: "Verdana" }}>VMPics Photography</div>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/about">My Work</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <a href="https://www.facebook.com/varunmehtapictures"
                target="_blank"
                rel="noopener noreferrer">
                <img
                  src={require("../images/icon-fb.png")}
                  alt="facebook"></img></a>
              &nbsp;
              <a href="https://www.instagram.com/varunmehtapictures"
                target="_blank"
                rel="noopener noreferrer">
                <img style={{ width: "30px" }}
                  src={require("../images/icon-insta.png")} alt="instagram"></img></a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Menu;
