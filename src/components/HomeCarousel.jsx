import React, { Component } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
var Carousel = require('react-responsive-carousel').Carousel;

class HomeCarousel extends Component {
    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} interval={5000} transitionTime={2000}>
                    <div>
                        <img src={require("../images/Carousel/Carousel1.jpg")} alt='Carousel 1' />

                    </div>
                    <div>
                        <img src={require("../images/Carousel/Carousel2.jpg")} alt='Carousel 2' />

                    </div>
                    <div>
                        <img src={require("../images/Carousel/Carousel3.jpg")} alt='Carousel 3' />

                    </div>
                    <div>
                        <img src={require("../images/Carousel/Carousel4.jpg")} alt='Carousel 4' />

                    </div>
                    <div>
                        <img src={require("../images/Carousel/Carousel5.jpg")} alt='Carousel 5' />

                    </div>
                    <div>
                        <img src={require("../images/Carousel/Carousel6.jpg")} alt='Carousel 6' />

                    </div>
                    <div>
                        <img src={require("../images/Carousel/Carousel7.jpg")} alt='Carousel 7' />

                    </div>
                    <div>
                        <img src={require("../images/Carousel/Carousel8.jpg")} alt='Carousel 8' />

                    </div>
                    <div>
                        <img src={require("../images/Carousel/Carousel9.jpg")} alt='Carousel 9' />

                    </div>
                    <div>
                        <img src={require("../images/Carousel/Carousel10.jpg")} alt='Carousel 10' />

                    </div>
                    <div>
                        <img src={require("../images/Carousel/Carousel11.jpg")} alt='Carousel 11' />

                    </div>
                    <div>
                        <img src={require("../images/Carousel/Carousel12.jpg")} alt='Carousel 12' />

                    </div>
                    <div>
                        <img src={require("../images/Carousel/Carousel13.jpg")} alt='Carousel 13' />

                    </div>
                </Carousel>
            </div >

        );
    }
}

export default HomeCarousel;