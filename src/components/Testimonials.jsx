import React, { Component } from 'react';
import { Col, Row, Container } from "react-bootstrap";
import Menu from '../components/Menu';
import '../App.css';
import Helmet from 'react-helmet';
import ReadyToEnquire from './ReadyToEnquire';
import InstagramFeed from './Gallery/InstagramFeed';

class Testimonials extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>VMPics Photography : Client Testimonials </title>
                    <meta name="description" content='Highy recommended. We narrowed down VM pics (Varun) after going through lots 
                    of available options out there and he also came through as a reference from our close family friend. 
                    It was not the reference but his variety of work, the natural pictures he had on his profile and the affordability which confirmed our choice. We shot outdoors and his experience with the light, composure and camera work is great.
                     We couldn not just select the best out of final pictures and ended up getting all. We highly recommend Varun for
                      shoots and cannot speak highly of his work ethic. Try him! you wont be disappointed…'>

                    </meta>
                </Helmet>
                <Menu></Menu>
                <br />
                <Container>
                    <center><h3>ALL THE LOVE FROM OUR <br></br>AWESOME CLIENTS </ h3></center> <br />
                    <br />
                    <div>
                        <Row>
                            <Col sm-12 md-6 lg-6 className="reviewTextRightAlign" >Varun was absolute delight to work with,
                                he knew exactly what we wanted and captured our family moments with his lenses.
                                He is a very talented photographer and I would highly recommend him.<br /><br />

                                <div> - SHIWANEE GAUTAM</div></Col>

                            <Col sm-12 md-6 lg-6>
                                <img src={require("../images/reviews/review6.jpg")} className="reviewImg" alt="Family shoot testimonial 1" />
                            </Col>
                        </Row>
                        <br />
                        <br />
                        <br />
                        <Row>
                            <Col sm-12 md-6 lg-6>
                                <img src={require("../images/reviews/review5.jpg")} alt="Family shoot testimonial 2" className="reviewImg" />
                            </Col>
                            <Col sm-12 md-6 lg-6 className="reviewTextLeftAlign" > Highy recommended.
                                We narrowed down VM pics (Varun) after going through lots of available options out there and
                                he also came through as a reference from our close family friend.
                                It was not the reference but his variety of work, the natural pictures he had on his profile
                                and the affordability which confirmed our choice.
                                We shot outdoors and his experience with the light,
                                composure and camera work is great. We couldn't just select the best out of final pictures
                                and ended up getting all. We highly recommend Varun for shoots and cannot speak highly of his work ethic.
                                Try him! you won't be disappointed…
                                <br /><br />

                                <div> - AANCHAL AND PRATEEK </div>
                            </Col>
                        </Row>
                        <br />
                        <br />
                        <br />
                        <Row>
                            <Col sm-12 md-6 lg-6 className="reviewTextRightAlign" >We recently had a newborn baby and were looking for a good
                                and reasonably priced photographer to capture some family photos.
                                We contacted Varun who did a wonderful job and captured some beautiful shots for us.
                                He was at the decided place on time and was very patient and accommodating.
                                He had some ideas of how the photos could be clicked and discussed it with us and took our inputs as well.
                                We loved the outcome and the photos. Thanks a lot Varun! <br /><br />

                                <div> - TEJAL & BIPLAV</div></Col>

                            <Col sm-12 md-6 lg-6>
                                <img src={require("../images/reviews/review1.jpg")} className="reviewImg" alt="Family shoot testimonial 1" />
                            </Col>
                        </Row>
                        <br />
                        <br />
                        <br />
                        <Row>
                            <Col sm-12 md-6 lg-6>
                                <img src={require("../images/reviews/review2.jpg")} alt="Family shoot testimonial 2" className="reviewImg" />
                            </Col>
                            <Col sm-12 md-6 lg-6 className="reviewTextLeftAlign" > Highy recommended.
                                Time Management and Affordable!
                                photographer was patient with my kids and was on to it with his shots! photos turned out amazing despite
                                the hot day we eventually got there with all my kids.
                                thank you so much VMPics for taking my family on this sunset journey. photos are beautiful ❤ <br /><br />

                                <div> - FATAI HAVILI UHILA </div>
                            </Col>
                        </Row>
                        <br />
                        <br />
                        <br />
                        <Row>
                            <Col sm-12 md-6 lg-6 className="reviewTextRightAlign" >Thankyou for catching our family memories.
                                The photos turned out beautifully. You were also very patience with our kids,
                                thank you and we highly recommend you. <br /><br />

                                <div> - KELLIE TO OIZUMI</div></Col>

                            <Col sm-12 md-6 lg-6>
                                <img src={require("../images/reviews/review3.jpg")} alt="Family shoot testimonial 3" className="reviewImg" />
                            </Col>
                        </Row>
                        <br />
                        <br />
                        <br />
                        <Row>
                            <Col sm-12 md-6 lg-6>
                                <img src={require("../images/reviews/review4.jpg")} alt="Testimonial 4" className="reviewImg" /></Col>
                            <Col sm-12 md-6 lg-6 className="reviewTextLeftAlign">
                                We booked Varun for our maternity Photoshoot.
                                He understands client's comfort and their preference. He made our shoot not some 60 min time slot but
                                a wonderfull and memorable experience.
                                Their is no doubt that he captures the best golden hours pictures and the location is stunning.
                                Also not to forget we got our gallery delivered within a week.
                                We can't wait to book Varun for more upcoming events. <br /><br />

                                <div> - KIRTI PARIJA</div></Col>
                        </Row>
                        <br />
                        <br />
                        <br />
                    </div>
                </Container>
                <ReadyToEnquire />
                <br />
                <InstagramFeed />
                <br />
                <br />
                <br />
            </div>
        );
    }
}

export default Testimonials;