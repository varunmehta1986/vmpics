import React, { Component } from 'react'
import { Card, CardGroup } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'

class Reviews extends Component {
    render() {
        return (
            <div className="row" style={{margin:"20px", textAlign:"justify"}}>
                <span style={{fontFamily:"optima", fontSize:"35px"}}>TESTIMONIALS</span>
                <br /><br />
                <Carousel >
                    <Carousel.Item interval = {8000}>
                    <CardGroup>
                        <Card>
                            <Card.Img src={require("../images/kalgi.jpg")}/>
                            <Card.Body>
                            <Card.Title>Kalgi Kansara</Card.Title>
                            <Card.Text>
                            <i>Varun recently captured my baby shower event and the pics turned out to be amazing. Thanks Varun for capturing our precious moments in a beautiful way. 
                            He was on time and was constantly clicking pictures, very professional.  Would definitely recommend him to my friends and family </i>
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">30th June 2021</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img src={require("../images/zoeya.jpg")}/>
                            <Card.Body>
                            <Card.Title>Basheer Unnisa</Card.Title>
                            <Card.Text>
                            <i>Varun did a fantastic job!! Loved all the pics.... even though the lighting wasn’t great, the pics were awesome!! 
                            Thank you for your time and work and giving us such beautiful memories!!</i>
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">24th June 2021</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img src={require("../images/jodi.jpg")} />
                            <Card.Body>
                            <Card.Title>Jodi Ferris</Card.Title>
                            <Card.Text>
                            <i>Varun recently covered our gender reveal party. He was very polite kind and captured some simply stunning photos of our big day I would absolutely recommend him to our family and friend I will use him for our maternity shoot and new born again thanks u varun for giving us some simply stunning shots</i>
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">18th May 2021</small>
                            </Card.Footer>
                        </Card>
                        </CardGroup>
                    </Carousel.Item>
                    {/* <Carousel.Item interval = {10000}>
                    <CardGroup>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional
                                content.{' '}
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        </CardGroup>
                    </Carousel.Item> */}
                </Carousel>
            </div>
        );
    }
}
export default Reviews;