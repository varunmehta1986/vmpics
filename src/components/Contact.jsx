import React, { Component } from "react";

class Contact extends Component {
  state = {};
  render() {
    return (
      <div className="container  text-left">
        <div className="row">
          <h3>Contact</h3>
        </div>
        <br></br>
        <div className="row">
          <br></br>
          <h5>For any queries, please contact on- </h5>
        </div>
        <div className="row text-left">
          <div className="col-sm-3 col-md-2"><b>Phone:</b></div>
          <div className="col-sm-3 col-md-2" >0460628079</div>
        </div>
        <div className="row text-left">
          <div className="col-sm-3 col-md-2"><b>WhatsApp:</b></div>
          <div className="col-sm-3 col-md-2">+61460628079</div>
        </div>
        <div className="row text-left">
          <div className="col-sm-3 col-md-2"><b>Email:</b></div>
          <div className="col-sm-3 col-md-2">mehta.varun.vm@gmail.com</div>
        </div>
      </div>
    );
  }
}

export default Contact;
