import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Menu from './Menu'
import Nav from 'react-bootstrap/Nav'
class Pricing extends Component {
    render() {
        return (
            <div>
                <Menu></Menu>
                <div className="container">
                    <h3>INVESTMENT</h3>
                    <p>
                        Below are our packages that can be customized as per your needs.</p>
                    <div className="row">
                        <div className="card mb-3" style={{ maxWidth: '700px' }}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <div className="pricingcard">
                                        <img src={require("../images/family.jpg")} className="card-img" alt="family" />
                                        <Nav.Link className="btn" style={{ width: "140px" }} href="/clientgallery"> View Gallery</Nav.Link>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <Card.Body>
                                        <Card.Title>SILVER</Card.Title>
                                        <Card.Text>
                                            <ul>
                                                <li>Price : $150</li>
                                                <li>Session Duration : 30 minutes</li>
                                                <li>Personalized client gallery to view photos</li>
                                                <li>Included digital edited images : 12 </li>
                                                <li>5-7 days of turn-around time</li>
                                                <li>Extra photos for $20 each</li>
                                            </ul>
                                            <br />
                                            <br />
                                        </Card.Text>

                                    </Card.Body>
                                    <Card.Footer>
                                        <Nav.Link className="btn btn-dark"
                                            style={{
                                                margin: "1px", display: "inline-block",
                                                padding: "6px", width: "176px"
                                            }}
                                            href="/contact">Book a session</Nav.Link>
                                        <Button variant="secondary"
                                            href="https://squareup.com/gift/MLPPHA53H007N/order">Gift this to someone!</Button>
                                    </Card.Footer>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-3" style={{ maxWidth: '700px' }}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <div className="pricingcard">
                                        <Card.Img src={require("../images/family2.jpg")} alt="maternity photo" />
                                        <Nav.Link className="btn" style={{ width: "140px" }} href="/clientgallery">View Gallery</Nav.Link>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <Card.Body>
                                        <Card.Title>GOLD</Card.Title>
                                        <Card.Text>
                                            <ul>
                                                <li>Price : $250</li>
                                                <li>Session Duration : 60 minutes</li>
                                                <li>Personalized client gallery to view photos</li>
                                                <li>Included digital edited images : 25</li>
                                                <li>5-7 days of turn-around time</li>
                                                <li>Extra photos for $20 each</li>
                                                <li>Recommended for Family and Maternity shoots</li>
                                            </ul>
                                            <br />
                                            <br />
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>

                                        <Nav.Link className="btn btn-dark"
                                            style={{
                                                margin: "1px", display: "inline-block",
                                                padding: "6px", width: "176px"
                                            }}
                                            href="/contact">Book a session</Nav.Link>
                                        <Button variant="secondary"
                                            href="https://squareup.com/gift/MLPPHA53H007N/order">Gift this to someone!</Button>
                                    </Card.Footer>
                                </div>
                            </div>
                        </div>

                        <div className="card mb-3" style={{ maxWidth: '700px' }}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <div className="pricingcard">
                                        <Card.Img src={require("../images/maternity.jpg")} alt="maternity photo" />
                                        <Nav.Link className="btn" style={{ width: "140px" }} href="/clientgallery">View Gallery</Nav.Link>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <Card.Body>
                                        <Card.Title>PLATINUM</Card.Title>
                                        <Card.Text>
                                            <ul>
                                                <li>Price : $400</li>
                                                <li>Session Duration : 60-75 minutes </li>
                                                <li>Personalized client gallery to view photos</li>
                                                <li>Included digital edited images : Complete gallery</li>
                                                <li>8-12 days of turn-around time</li>
                                            </ul>
                                            <br />
                                            <br />
                                            <br />
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>

                                        <Nav.Link className="btn btn-dark"
                                            style={{
                                                margin: "1px", display: "inline-block",
                                                padding: "6px", width: "176px"
                                            }}
                                            href="/contact">Book a session</Nav.Link>
                                        <Button variant="secondary"
                                            href="https://squareup.com/gift/MLPPHA53H007N/order">Gift this to someone!</Button>
                                    </Card.Footer>
                                </div>
                            </div>
                        </div>

                        {/* <div className="card mb-3" style={{ maxWidth: '700px' }}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <div className="pricingcard">
                                        <Card.Img src={require("../images/gender.jpg")} alt="..." />
                                        <Nav.Link className="btn" style={{ width: "140px" }} href="/event">View Gallery</Nav.Link>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <Card.Body>
                                        <Card.Title>Events & more</Card.Title>
                                        <Card.Text>
                                            <ul>
                                                <li>Price : Varies by duration </li>
                                                <li>Total edited images : Unlimited</li>
                                                <li>8-10 days of turn-around time</li>
                                            </ul>
                                            <br />
                                            <br />
                                            <br />
                                            <br /><br />
                                        </Card.Text>

                                    </Card.Body>
                                    <Card.Footer>
                                        <Nav.Link className="btn btn-dark"
                                            style={{
                                                margin: "1px", display: "inline-block",
                                                padding: "6px", width: "176px"
                                            }}
                                            href="/contact">Book a session</Nav.Link>
                                        <Button variant="secondary"
                                            href="https://squareup.com/gift/MLPPHA53H007N/order">Gift this to someone!</Button>
                                    </Card.Footer>
                                </div>
                            </div>
                        </div> */}

                    </div>
                    <br />
                    <div style={{ textAlign: 'left' }}>
                        <b>Terms & Conditions</b>
                        <p>
                            <ul>
                                <li>
                                    A 30% retainer(non-refundable deposit) is required to book a session. Remaining amount is due on the session day.
                                </li>
                                <li>
                                    Travel fee is applied to shooting locations more than 20 Kms.
                                </li>
                                <li>
                                    E-Gift cards do not have any expiry date.
                                </li>
                                <li>
                                    E-Gifts card purchases are non-transferable and non-refundable.
                                </li>
                                <li>
                                    Session booked using E-Gift Cards can be rescheduled only once
                                </li>
                                <li>
                                    E-Gift card amount cannot be used to book multiple sessions.
                                </li>
                                <li>
                                    Price is subject to change.
                                </li>
                                <li>
                                    RAW photos cannot be shared for any of the packages.
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>

            </div>
        )
    }
}

export default Pricing
