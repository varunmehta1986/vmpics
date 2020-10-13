import React, { Component } from "react";

class Contact extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="row">
          <h3>Contact</h3>
        </div>
        <br></br>
        <div className="row">
          <br></br>
          <h5>For any queries, please contact on- </h5>
        </div>
        <div className="row text-left">
          <div className="col-2">Phone</div>
          <div className="col-2">0460628079</div>
        </div>
        <div className="row text-left">
          <div className="col-2">WhatsApp</div>
          <div className="col-2">+61460628079</div>
        </div>
        <div className="row text-left">
          <div className="col-2">Email</div>
          <div className="col-2">mehta.varun.vm@gmail.com</div>
        </div>
      </div>
    );
  }
}

export default Contact;
