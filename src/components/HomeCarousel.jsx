import React, { Component } from 'react'
import Gallery from 'react-photo-gallery';

class HomeCarousel extends Component {
    photos = [
        {
            src: require("../images/Carousel/Dad to be talking to mom and twin babies.jpg"),
            width: 3,
            height: 2,
            alt: "Dad-to-be-talking-to-mom-and-twin-babies"
        },
        {
            src: require("../images/Carousel/pregnant mom waiting for the baby.jpg"),
            width: 2,
            height: 3,
            alt: "pregnant-mom-waiting-for-the-baby"
        },
        {
            src: require("../images/Carousel/Family shoot on a cloudy day playing with kid.jpg"),
            width: 3,
            height: 2,
            alt: "Family-shoot-on-a-cloudy-day-playing-with-kid"
        },
        {
            src: require("../images/Carousel/Pregnant parents posing for a photo in rouse hill regional park.jpg"),
            width: 2,
            height: 3,
            alt: "Pregnant-parents-posing-for-a-photo-in-rouse-hill-regional-park"
        },
        {
            src: require("../images/Carousel/Dad to be feeling the kicks of twin babies in mom bump.jpg"),
            width: 2,
            height: 3,
            alt: "Dad-to-be-feeling-the-kicks-of-twin-babies-in-mom-bump"
        },
        {
            src: require("../images/Carousel/Dad to be kissing mom's bump at golden hour.jpg"),
            width: 2,
            height: 3,
            alt: "Dad-to-be-kissing-mom's-bump-at-golden-hour"
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
            src: require("../images/Carousel/girl dancing at a family shoot.jpg"),
            width: 2,
            height: 3,
            alt: "girl-dancing-at-a-family-shoot"
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
            src: require("../images/Carousel/Parents to be walking in rouse hill regional park.jpg"),
            width: 3,
            height: 2,
            alt: "Parents-to-be-walking-in-rouse-hill-regional-park"
        },
        {
            src: require("../images/Carousel/Dad making his daughter fly during family shoot.jpg"),
            width: 2,
            height: 3,
            alt: "Dad-making-his-daughter-fly-during-family-shoot"
        },
        {
            src: require("../images/Carousel/Pregant mom to be in a beatiful dress.jpg"),
            width: 3,
            height: 2,
            alt: "Pregant-mom-to-be-in-a-beatiful-dress"
        },
        {
            src: require("../images/Carousel/Pregnant mom posing with sunset in the background at golden hour.jpg"),
            width: 2,
            height: 3,
            alt: "Pregnant-mom-posing-with-sunset-in-the-background-at-golden-hour"
        },
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