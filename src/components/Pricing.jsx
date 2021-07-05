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
                <div className="container text-left">
                    <h3>Pricing</h3>
                    <p>Now you can decorate your home with your
                    beautiful pictures with our affordable and pocket friendly photography sessions.
                     Below are our packages that can be customized as per your needs.</p>
                    <div className="row">
                        <div className="card mb-3" style={{maxWidth: '700px'}}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src={require("../images/family.jpg")}class="card-img" alt="..." />
                                </div>
                                <div className="col-md-8">
                                <Card.Body>
                                <Card.Title>Family Photography</Card.Title>
                                <Card.Text>
                                    <ul>
                                        <li>Price : $150 and up </li>
                                        <li>Session Duration : 60+ minutes </li>
                                        <li>Total edited images : 20 </li>
                                        <li>Upto 4 members included in the price</li>
                                        <li>5-7 days of turn-around time</li>
                                        <li>Extra photos for $10 each</li>
                                    </ul>
                                    <br />
                        </Card.Text>
                                <Nav.Link className="btn btn-dark"
                                    style={{
                                        margin: "1px", display: "inline-block",
                                        padding: "6px", width: "176px"
                                    }}
                                    href="/contact">Book a session</Nav.Link>
                                <Button variant="secondary"
                                    href="https://squareup.com/gift/MLPPHA53H007N/order">Gift this to someone!</Button>
                                {/* <Card.Link href="">Visit gallery</Card.Link> */}
                                {/* <div data-site-id="2d818090-dd18-493a-bd1e-f21e0b3c71f5" data-platform="Other" class="gift-up-target"></div> */}

                            </Card.Body>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-3" style={{maxWidth: '700px'}}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src={require("../images/maternity.jpg")}class="card-img" alt="..." />
                                </div>
                                <div className="col-md-8">
                                <Card.Body>
                                <Card.Title>Maternity Shoot</Card.Title>
                                <Card.Text>
                                    <ul>
                                        <li>Price : $150 and up </li>
                                        <li>Session Duration : 60+ minutes </li>
                                        <li>Total edited images : 20 </li>
                                        <li>5-7 days of turn-around time</li>
                                        <li>Extra photos for $10 each</li>
                                    </ul>
                                    <br />
                        </Card.Text>
                                <Nav.Link className="btn btn-dark"
                                    style={{
                                        margin: "1px", display: "inline-block",
                                        padding: "6px", width: "176px"
                                    }}
                                    href="/contact">Book a session</Nav.Link>
                                <Button variant="secondary"
                                    href="https://squareup.com/gift/MLPPHA53H007N/order">Gift this to someone!</Button>
                            
                            </Card.Body>
                                </div>
                            </div>
                        </div>

                        <div className="card mb-3" style={{maxWidth: '700px'}}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src={require("../images/gender.jpg")}class="card-img" alt="..." />
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
                        </Card.Text>
                                <Nav.Link className="btn btn-dark"
                                    style={{
                                        margin: "1px", display: "inline-block",
                                        padding: "6px", width: "176px"
                                    }}
                                    href="/contact">Book a session</Nav.Link>
                                <Button variant="secondary"
                                    href="https://squareup.com/gift/MLPPHA53H007N/order">Gift this to someone!</Button>
                            
                            </Card.Body>
                                </div>
                            </div>
                        </div>
                        
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
