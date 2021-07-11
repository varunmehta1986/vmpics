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
                            <small className="text-muted">30<sup>th</sup> June 2021</small>
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
                            <small className="text-muted">24<sup>th</sup> June 2021</small>
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
                            <small className="text-muted">18<sup>th</sup> May 2021</small>
                            </Card.Footer>
                        </Card>
                        </CardGroup>
                    </Carousel.Item>
                    <Carousel.Item interval = {10000}>
                    <CardGroup>
                        <Card>
                        <Card.Img src={require("../images/balu.jpg")} />
                            <Card.Body>
                            <Card.Title>Balu Narendra</Card.Title>
                            <Card.Text>
                            <i>Professional and value for money. Great service. Varun photo shoot gear is really high end. We really loved the photos. Reliable and punctual . Best Photography service in Sydney. Varun priced the service cost efficiently. We strongly recommend VMPICS Photography to my friends and family.</i>
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">30<sup>th</sup> June 2021</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                        <Card.Img src={require("../images/emily.jpg")} />
                            <Card.Body>
                            <Card.Title>Emily Pender</Card.Title>
                            <Card.Text>
                            <i>Got Mother’s Day pictures done and they turned out amazing</i>
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">17<sup>th</sup> May 2021</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                        <Card.Img src={require("../images/dheepika.jpg")} />
                            <Card.Body>
                            <Card.Title>Dheepika Panneerselvam</Card.Title>
                            <Card.Text>
                            <i>Varun recently captured our house warming event! We are so glad that we chose him. He is very professional and friendly. He made sure to capture all the important moments during the pooja and also took many portraits of us. We are happy with pictures and his quality of work. We will surely continue to work with him in the future! </i>🙂 
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">7<sup>th</sup> May 2021</small>
                            </Card.Footer>
                        </Card>
                        </CardGroup>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}
export default Reviews;