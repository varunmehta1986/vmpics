import React, { Component } from "react";
import Menu from "./Menu";
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
class Contact extends Component {
  state = {};
  render() {
    return (
      <div>
        <Menu></Menu>
        <div className="container text-left">

          <div className="row">
            <h3>Contact</h3>
          </div>
          {/* <p>Please leave your details here and we will get back to you as early as possible. </p>
        <Form>
          <Form.Group controlId="name">
            <Form.Control type="text" placeholder="Your Name?"></Form.Control>
          </Form.Group>
          <Form.Group controlId="emailId">
            <Form.Control type="email" placeholder="Your Email?" />
          </Form.Group>
          <Form.Group controlId="phone">
            <Form.Control type="phone" placeholder="Your Contact Number"></Form.Control>
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Control as="textarea" rows={3}
              placeholder="How can I help you?Describe your photography requirement in a few words here and mention the tentative date you want to book the session for">

            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
         </Button>
        </Form>
        <br></br> */}
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
            <div className="col-sm-3 col-md-2">vmpicsphotography@gmail.com</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
