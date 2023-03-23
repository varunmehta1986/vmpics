import React, { Component } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import Gallery from 'react-photo-gallery';

class HomeCarousel extends Component {
    photos = [
        {
            src: require("../images/Carousel/Carousel1.jpg"),
            width: 3,
            height: 2,
            alt: "To-be-dad-and-mom-sunet-photo-on-trunk"
        },
        {
            src: require("../images/Carousel/Carousel2.jpg"),
            width: 3,
            height: 2,
            alt: "close-up-baby-of-newborn-baby"
        },
        {
            src: require("../images/Carousel/Carousel3.jpg"),
            width: 3,
            height: 2
        },
        {
            src: require("../images/Carousel/Carousel4.jpg"),
            width: 3,
            height: 2
        },
        {
            src: require("../images/Carousel/Carousel5.jpg"),
            width: 3,
            height: 2
        },
        {
            src: require("../images/Carousel/Carousel6.jpg"),
            width: 3,
            height: 2
        },
        {
            src: require("../images/Carousel/To Be Parents looking at baby bump.jpg"),
            width: 2,
            height: 3,
            alt: "To-Be-Parents-looking-at-baby-bump"
        },
        {
            src: require("../images/Carousel/To be mom with baby bump in a park.jpg"),
            width: 3,
            height: 2,
            alt: "To-be-mom-with-baby-bump-in-a-park"
        },
        {
            src: require("../images/Carousel/To be parents sitting with arms around.jpg"),
            width: 3,
            height: 2,
            alt: "To-be-parents-sitting-with-arms-around"
        },
        {
            src: require("../images/Carousel/Big sister talking to mom baby bump.jpg"),
            width: 2,
            height: 3,
            alt: "Big-sister-talking-to-mom-baby-bump"
        },
        {
            src: require("../images/Carousel/Carousel11.jpg"),
            width: 3,
            height: 2
        },
        {
            src: require("../images/Carousel/Carousel12.jpg"),
            width: 3,
            height: 2
        },
        {
            src: require("../images/Carousel/Carousel13.jpg"),
            width: 3,
            height: 2
        }
    ];

    render() {
        return (
            <Gallery photos={this.photos} />

            // <div style={{ textAlign: 'center' }}>
            //     <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} interval={5000} transitionTime={2000}>
            //         <div>
            //             <img src={require("../images/Carousel/Carousel1.jpg")} alt='Carousel 1' />

            //         </div>
            //         <div>
            //             <img src={require("../images/Carousel/Carousel2.jpg")} alt='Carousel 2' />

            //         </div>
            //         <div>
            //             <img src={require("../images/Carousel/Carousel3.jpg")} alt='Carousel 3' />

            //         </div>
            //         <div>
            //             <img src={require("../images/Carousel/Carousel4.jpg")} alt='Carousel 4' />

            //         </div>
            //         <div>
            //             <img src={require("../images/Carousel/Carousel5.jpg")} alt='Carousel 5' />

            //         </div>
            //         <div>
            //             <img src={require("../images/Carousel/Carousel6.jpg")} alt='Carousel 6' />

            //         </div>
            //         <div>
            //             <img src={require("../images/Carousel/Carousel7.jpg")} alt='Carousel 7' />

            //         </div>
            //         <div>
            //             <img src={} alt='Carousel 8' />

            //         </div>
            //         <div>
            //             <img src={require("../images/Carousel/Carousel9.jpg")} alt='Carousel 9' />

            //         </div>
            //         <div>
            //             <img src={require("../images/Carousel/Carousel10.jpg")} alt='Carousel 10' />

            //         </div>
            //         <div>
            //             <img src={require("../images/Carousel/Carousel11.jpg")} alt='Carousel 11' />

            //         </div>
            //         <div>
            //             <img src={require("../images/Carousel/Carousel12.jpg")} alt='Carousel 12' />

            //         </div>
            //         <div>
            //             <img src={require("../images/Carousel/Carousel13.jpg")} alt='Carousel 13' />

            //         </div>
            //     </Carousel>
            // </div >

        );
    }
}

export default HomeCarousel;