import React, { useState } from "react";
import Menu from "./Menu";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import MetaTags from 'react-meta-tags';

function Contact() {
  const [name, setName] = useState('');
  const [emailId, setEmailId] = useState('');
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');
  const [showSuccess, setSuccess] = useState(false);
  const [enableSaveButton, setEnableSaveButton] = useState(true);

  const onModalClose = () => {
    console.log("onModalClose")
    setName('');
    setEmailId('');
    setPhone('');
    setDescription('');
    setEnableSaveButton(true);
    setSuccess(false);
  }

  function submitForm(e) {
    setEnableSaveButton(false);
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
      <MetaTags>
        <title>
          VMPics Photographer - Appointment Booking
        </title>
        <meta name="description" content="VMPics Photographer - Appointment Booking"></meta>
      </MetaTags>

      <Modal show={showSuccess} onHide={onModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Booking Request Received</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your appointment request has been submitted. We will get back to you in a Click!</Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={onModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="container text-left">
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
                onChange={e => setName(e.target.value)} value={name}></Form.Control>
            </Form.Group>
            <Form.Group controlId="emailId">
              <Form.Control type="email"
                placeholder="Your Email"
                maxLength="200"
                onChange={e => setEmailId(e.target.value)} value={emailId} />
            </Form.Group>
            <Form.Group controlId="phone">
              <Form.Control type="phone"
                placeholder="Your Contact Number"
                maxLength="15"
                onChange={e => setPhone(e.target.value)} value={phone}></Form.Control>
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Control as="textarea" rows={6}
                placeholder="How can I help you? Describe your photography requirement in a few words here and mention the tentative date you want to book the session for."
                onChange={e => setDescription(e.target.value)} value={description}>

              </Form.Control>
            </Form.Group>
            <Button variant="dark" onClick={(e) => submitForm(e)} disabled={!enableSaveButton}>
              Submit
              </Button>

          </Form>
        </div>
      </div>
    </div>
  );
}
export default Contact;
