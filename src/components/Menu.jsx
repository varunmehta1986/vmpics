import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
class Menu extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar collapseOnSelect bg="dark" expand="md" variant="dark">
          <Navbar.Brand className="navbar-brand mb-0 h1" href="/">
            VMPics
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav className="mr-auto">
              <Nav.Link href="/" >Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/gallery">Gallery</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
              <Nav.Link href="/pricing">Pricing</Nav.Link>
            </Nav>

            <Navbar.Text>
              <a href="https://www.facebook.com/varunmehtapictures"
                target="_blank"
                rel="noopener noreferrer">
                <img style={{ width: "30px" }}
                  src={require("../images/icon-fb.svg")}
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
