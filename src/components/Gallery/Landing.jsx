import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Menu from '../Menu';
import Nav from 'react-bootstrap/Nav';

class Landing extends Component {
    render() {
        return (
            <div>
                <Menu></Menu>
                <div className="container  text-left">
                    <h3>Portfolio Gallery</h3>
                    <div className="row">
                        <Card style={{ width: '28rem', padding: '1rem' }}>
                            <Card.Img variant="top" src={require("../../images/Family/Laal.jpg")} />
                            <Card.Body>
                                <Card.Title>Family potraits</Card.Title>
                                <Card.Text>
                                    Price : $100 and up <br />
                            Session Duration : 30 minutes <br />
                            Total edited images : 8 <br />
                            RAW photos shared at an extra cost
                        </Card.Text>
                                <Nav.Link className="btn btn-dark"
                                    style={{
                                        margin: "5px", display: "inline-block",
                                        padding: "6px", width: "180px"
                                    }}
                                    href="/contact">Book a session</Nav.Link>
                                <Button variant="secondary"
                                    href="https://squareup.com/gift/MLPPHA53H007N/order">Gift this to someone!</Button>
                                {/* <Card.Link href="">Visit gallery</Card.Link> */}
                                {/* <div data-site-id="2d818090-dd18-493a-bd1e-f21e0b3c71f5" data-platform="Other" class="gift-up-target"></div> */}

                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}
export default Landing;