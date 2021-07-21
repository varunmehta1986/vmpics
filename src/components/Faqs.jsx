import React, { Component } from 'react'
import Menu from './Menu';
import MetaTags from 'react-meta-tags';
export default class Faqs extends Component {
    render() {
        return (
            <div>
                <MetaTags>
                    <title>
                        VMPics Photographer - FAQ
                    </title>
                    <meta name="description" content="VMPics Photographer - Frequenty asked questions"></meta>
                </MetaTags>

                <Menu></Menu>
                <div className="container text-left">
                    <h3>FREQUENTLY ASKED QUESTIONS</h3>
                    <br />
                    <ul>
                        <li>
                            <h5>Where are you located? </h5>
                            <p>
                                I am located in Rouse Hill, NSW
                        </p>
                        </li>
                        <li>
                            <h5>Do you have a studio?</h5>
                            <p>
                                I don't have a studio as of today.
                        </p>
                        </li>
                        <li>
                            <h5>Are props included in the maternity and family shoot?</h5>
                            <p>
                                Props are not included. For maternity shoots, I ask my clients to bring the baby cloths, shoes,
                                sonogram or anything they would like to get the photos clicked with.
                        </p>
                        </li>
                        <li>
                            <h5>How do I get my images?</h5>
                            <p>
                                The images are digitally shared using client galleries provided via Pixieset. The images are not
                                compressed when shared digitally.
                        </p>
                        </li>
                        <li>
                            <h5>Can I get my images in a pen drive?</h5>
                            <p>
                                Absolutely, you can. However, the cost of the device and shipment will have to incurred by the client.
                        </p>
                        </li>
                        <li>
                            <h5>Can you share RAW unedited images for the whole shoot</h5>
                            <p>
                                No, the RAW images cannot be shared.
                        </p>
                        </li>
                        <li>
                            <h5>What camera equipment do I use?</h5>
                            <p>
                                I use 2 Nikon Professional DSLR Cameras, 4 high-end lenses, 2 flashes etc.
                        </p>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
