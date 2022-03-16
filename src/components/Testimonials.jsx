import React, { Component } from 'react';
import { Col, Row, Container } from "react-bootstrap";
import Menu from '../components/Menu';
import '../App.css';
import Helmet from 'react-helmet';

class Testimonials extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>VMPics Photography : Client Testimonials </title>
                    <meta name="description" content='Testimonials for VMPics Photography'></meta>
                </Helmet>
                <Menu></Menu>
                <Container>
                    <h2>ALL THE LOVE FROM OUR AWESOME CLIENTS </ h2>
                    <br />
                    <div>
                        <Row>
                            <Col sm-12 md-6 lg-6 className="reviewText" >We recently had a newborn baby and were looking for a good
                                and reasonably priced photographer to capture some family photos.
                                We contacted Varun who did a wonderful job and captured some beautiful shots for us.
                                He was at the decided place on time and was very patient and accommodating.
                                He had some ideas of how the photos could be clicked and discussed it with us and took our inputs as well.
                                We loved the outcome and the photos. Thanks a lot Varun! <br /><br />

                                <div>-TEJAL & BIPLAV</div></Col>

                            <Col sm-12 md-6 lg-6>
                                <img src={require("../images/reviews/review1.jpg")} className="reviewImg" alt="Family shoot testimonial 1" />
                            </Col>
                        </Row>
                        <br />
                        <br />
                        <Row>
                            <Col sm-12 md-6 lg-6>
                                <img src={require("../images/reviews/review2.jpg")} alt="Family shoot testimonial 1" className="reviewImg" />
                            </Col>
                            <Col sm-12 md-6 lg-6 className="reviewText" > Highy recommended.
                                Time Management and Affordable!
                                photographer was patient with my kids and was on to it with his shots! photos turned out amazing despite
                                the hot day we eventually got there with all my kids.
                                thank you so much VMPics for taking my family on this sunset journey. photos are beautiful ❤ <br /><br />

                                <div>-Fatai Havili Uhila</div></Col>
                        </Row>
                        <br />
                        <br />

                        <Row>
                            <Col sm-12 md-6 lg-6 className="reviewText" >Thankyou for catching our family memories.
                                The photos turned out beautifully. You were also very patience with our kids,
                                thank you and we highly recommend you. <br /><br />

                                <div>-Kellie To Oizumi</div></Col>

                            <Col sm-12 md-6 lg-6>
                                <img src={require("../images/reviews/review3.jpg")} alt="Family shoot testimonial 1" className="reviewImg" />
                            </Col>
                        </Row>

                        <br />
                        <br />
                        <Row>
                            <Col sm-12 md-6 lg-6>
                                <img src={require("../images/reviews/review4.jpg")} alt="Testimonial 4" className="reviewImg" /></Col>
                            <Col sm-12 md-6 lg-6 className="reviewText">
                                We booked Varun for our maternity Photoshoot.
                                He understands client's comfort and their preference. He made our shoot not some 60 min time slot but
                                a wonderfull and memorable experience.
                                Their is no doubt that he captures the best golden hours pictures and the location is stunning.
                                Also not to forget we got our gallery delivered within a week.
                                We can't wait to book Varun for more upcoming events. <br /><br />

                                <div>-Kirti Parija</div></Col>
                        </Row>

                        <br />
                        <br />
                    </div>
                </Container>
            </div>
        );
    }
}

export default Testimonials;