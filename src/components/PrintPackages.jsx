import { width } from 'dom-helpers';
import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Menu from './Menu';
import Carousel from 'react-bootstrap/Carousel';
class PrintPackages extends Component{
    render(){
        return (
            <div>
                <Menu></Menu>
                <div className="container">
                    <h3>PRINT PACKAGES</h3>
                    <Card style = {{maxWidth:"700px"}}>
                        <Carousel>
                            <Carousel.Item>
                                <Card.Img variant="top" src={require("../images/canvas1.jpg")}></Card.Img>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Card.Img variant="top" src={require("../images/Canvas3.jpg")}></Card.Img>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Card.Img variant="top" src={require("../images/Canvas2.jpg")}></Card.Img>
                            </Carousel.Item>
                        </Carousel>
                        
                        
                        <Card.Body>
                            <Card.Title>Canvas Prints</Card.Title>
                            <Card.Text>
                                <ul>
                                    <li>
                                        Price : $400
                                    </li>
                                    <li>
                                        Package includes any 60+ maternity or family session 
                                    </li>
                                    <li>
                                        20 digital edited images
                                    </li>
                                    <li>
                                        3 60cms x 40cms prints OR
                                    </li>
                                    <li>
                                        2 90cms x 60cms  OR
                                    </li>
                                    <li>
                                        2 75cms x 50cms prints OR
                                    </li>
                                    <li>
                                        1 120cms x 80cms prints
                                    </li>
                                </ul>

                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                             <Nav.Link className="btn btn-dark" style={{
                                        margin: "1px", display: "inline-block",
                                        padding: "6px", width: "176px"
                                    }}
                                    href="/contact">Book a session</Nav.Link>
                            </Card.Footer>
                    </Card>
                </div>
            </div>
        );
    }
}
export default PrintPackages;