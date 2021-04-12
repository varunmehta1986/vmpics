import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Menu from './Menu'
class Pricing extends Component {
    render() {
        return (
            <div>
                <Menu></Menu>
                <div className="container  text-left">
                    <h3>Pricing</h3>
                    <p>Now you can decorate your home with your
                    beautiful pictures with our affordable and pocket friendly photography sessions.
                     Below are our packages that can be customized as per your needs.</p>
                    <div className="row">
                        <Card style={{ width: '28rem', padding: '1rem' }}>
                            <Card.Img variant="top" src={require("../images/Family/Laal.jpg")} />
                            <Card.Body>
                                <Card.Title>Family potraits</Card.Title>
                                <Card.Text>
                                    Price : $80 and up <br />
                            Session Duration : 30 minutes <br />
                            Total edited images : 8 <br />
                            RAW photos shared at extra cost
                        </Card.Text>
                                <Button variant="primary"
                                    href="https://squareup.com/gift/MLPPHA53H007N/order">Gift this to someone!</Button>
                                {/* <Card.Link href="">Visit gallery</Card.Link> */}
                                {/* <div data-site-id="2d818090-dd18-493a-bd1e-f21e0b3c71f5" data-platform="Other" class="gift-up-target"></div> */}

                            </Card.Body>
                        </Card>
                        <Card style={{ width: '28rem', padding: '1rem' }}>
                            <Card.Img variant="top" src={require("../images/pregnancy/Gayatri.jpg")} />
                            <Card.Body>
                                <Card.Title>Maternity shoot</Card.Title>
                                <Card.Text>
                                    Price : $125 <br />
                            Session Duration : 1 Hour <br />
                            Total edited images : 15 <br />
                            RAW photos included in the price
                        </Card.Text>
                                <Button variant="primary"
                                    href="https://squareup.com/gift/MLPPHA53H007N/order">Gift this to someone!</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

export default Pricing
