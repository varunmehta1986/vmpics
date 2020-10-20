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
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/" >Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/gallery">Gallery</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Nav>
            <Nav.Link href="https://www.facebook.com/varunmehtapictures" target="_blank"><img style={{width:"30px"}} src={require("../images/icon-fb.png") } alt="facebook"></img></Nav.Link>
            <Nav.Link href="https://www.instagram.com/varunmehtapictures" target="_blank"><img style={{width:"30px"}} src={require("../images/icon-insta.png") } alt="instagram"></img></Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Menu;
