import React, { useState } from "react";
import Menu from "./Menu";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Contact() {
  const [name, setName] = useState('');
  const [emailId, setEmailId] = useState('');
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');
  const [showSuccess, setSuccess] = useState(false);

  function submitForm(e) {
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        name: name,
        emailId: emailId,
        phone: phone,
        description: description
      })
    };
    const apiUrl = "https://staoyh346i.execute-api.ap-southeast-2.amazonaws.com/Prod/";
    fetch(apiUrl, requestOptions)
      .then(function (response) {
        if (response.ok) {
          setSuccess(true);
        }
      });
  }
  return (
    <div>
      <Menu></Menu>
      <div className="container text-left">
        {showSuccess ? <div className="alert alert-success" role="alert">
          Thanks for contacting us. We have received your request and will get back to you shortly.
            </div> : null}
        <div className="wrapper flex-grow-1">
          <h3>BOOK AN APPOINTMENT</h3>
        </div>
        <p>Please leave your details here and we will get back to you as early as possible. </p>
        <div className="col-lg-6">
          <Form>
            <Form.Group controlId="name">
              <Form.Control type="text"
                placeholder="Your Name"
                maxLength="100"
                onChange={e => setName(e.target.value)}></Form.Control>
            </Form.Group>
            <Form.Group controlId="emailId">
              <Form.Control type="email"
                placeholder="Your Email"
                maxLength="200"
                onChange={e => setEmailId(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="phone">
              <Form.Control type="phone"
                placeholder="Your Contact Number"
                maxLength="15"
                onChange={e => setPhone(e.target.value)}></Form.Control>
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Control as="textarea" rows={6}
                placeholder="How can I help you? Describe your photography requirement in a few words here and mention the tentative date you want to book the session for."
                onChange={e => setDescription(e.target.value)}>

              </Form.Control>
            </Form.Group>
            <Button variant="primary" onClick={(e) => submitForm(e)}>
              Submit
              </Button>

          </Form>
        </div>
      </div>
    </div>
  );
}
export default Contact;
