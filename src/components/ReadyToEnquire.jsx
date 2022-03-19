import React, { Component } from 'react'
import { Col, Row, Container } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';


class ReadyToEnquire extends Component {
    render() {
        return (
            <div className='readyToEnquireDiv'>
                <Row>
                    <Col md-6 lg-6 sm-12>
                        <img src={require("../images/readytobook.jpg")} alt="Ready to Book" className='readyToBookImg' />
                    </Col>

                    <Col sm-12 md-6 lg-6>
                        <br />
                        <div className="readyToEnquireFont">
                            <span style={{ fontSize: '50px' }}>READY TO ENQUIRE? </span>
                            <h5>WE'D LOVE TO HEAR FROM YOU</h5>
                            |<br />
                            <br />
                            <Nav.Link className="btn" href="/contact">GET IN TOUCH</Nav.Link>
                            <br />
                            <br />
                        </div>
                    </Col>
                </Row>
            </div >
        )
    }
}

export default ReadyToEnquire;