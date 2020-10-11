import React, { Component } from "react";

class Contact extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="row">
          <h3>Contact</h3>
        </div>
        <div className="row text-left">
          <div className="col-1">Phone</div>
          <div className="col-1">0460628079</div>
        </div>
        <div className="row text-left">
          <div className="col-1">WhatsApp</div>
          <div className="col-1">+61460628079</div>
        </div>
        <div className="row text-left">
          <div className="col-1">Email</div>
          <div className="col-1">mehta.varun.vm@gmail.com</div>
        </div>
      </div>
    );
  }
}

export default Contact;
