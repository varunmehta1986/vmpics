import React, { Component } from 'react'
import './Portfolio.json';
import '../../HelperMethods';
import Gallery from 'react-photo-gallery';
import Menu from '../Menu';
const photos = [
    {
        src: 'https://vmpics-images.s3-ap-southeast-2.amazonaws.com/khyati/Khyati+(1).jpg',
        width: 2,
        height: 3
    },
    {
        src: 'https://vmpics-images.s3-ap-southeast-2.amazonaws.com/khyati/Khyati+(2).jpg',
        width: 3,
        height: 2
    },
    {
        src: 'https://vmpics-images.s3-ap-southeast-2.amazonaws.com/khyati/Khyati+(3).jpg',
        width: 3,
        height: 2
    },
    {
        src: 'https://vmpics-images.s3-ap-southeast-2.amazonaws.com/khyati/Khyati+(4).jpg',
        width: 2,
        height: 3
    },
    {
        src: 'https://vmpics-images.s3-ap-southeast-2.amazonaws.com/khyati/Khyati+(5).jpg',
        width: 2,
        height: 3
    },
    {
        src: 'https://vmpics-images.s3-ap-southeast-2.amazonaws.com/khyati/Khyati+(6).jpg',
        width: 2,
        height: 3
    },
    {
        src: 'https://vmpics-images.s3-ap-southeast-2.amazonaws.com/khyati/Khyati+(7).jpg',
        width: 2,
        height: 3
    },
    {
        src: 'https://vmpics-images.s3-ap-southeast-2.amazonaws.com/khyati/Khyati+(8).jpg',
        width: 2,
        height: 3
    },
    {
        src: 'https://vmpics-images.s3-ap-southeast-2.amazonaws.com/khyati/Khyati+(9).jpg',
        width: 2,
        height: 3
    },
    {
        src: 'https://vmpics-images.s3-ap-southeast-2.amazonaws.com/khyati/Khyati+(10).jpg',
        width: 3,
        height: 2
    },
    {
        src: 'https://vmpics-images.s3-ap-southeast-2.amazonaws.com/khyati/Khyati+(11).jpg',
        width: 2,
        height: 3
    },
    {
        src: 'https://vmpics-images.s3-ap-southeast-2.amazonaws.com/Malik/Malik+(1).jpg',
        width: 2,
        height: 3
    },
    {
        src: 'https://vmpics-images.s3-ap-southeast-2.amazonaws.com/Malik/Malik+(2).jpg',
        width: 3,
        height: 2
    },
    {
        src: 'https://vmpics-images.s3-ap-southeast-2.amazonaws.com/Malik/Malik+(3).jpg',
        width: 2,
        height: 3
    },
    {
        src: 'https://vmpics-images.s3-ap-southeast-2.amazonaws.com/Malik/Malik+(4).jpg',
        width: 2,
        height: 3
    },
    {
        src: 'https://vmpics-images.s3-ap-southeast-2.amazonaws.com/Malik/Malik+(5).jpg',
        width: 2,
        height: 3
    },
    {
        src: 'https://vmpics-images.s3-ap-southeast-2.amazonaws.com/Malik/Malik+(6).jpg',
        width: 3,
        height: 2
    },
    {
        src: 'https://vmpics-images.s3-ap-southeast-2.amazonaws.com/Malik/Malik+(7).jpg',
        width: 2,
        height: 3
    },
    {
        src: 'https://vmpics-images.s3-ap-southeast-2.amazonaws.com/Malik/Malik+(8).jpg',
        width: 3,
        height: 2
    },
    {
        src: 'https://vmpics-images.s3-ap-southeast-2.amazonaws.com/Malik/Malik+(9).jpg',
        width: 2,
        height: 3
    },
    {
        src: 'https://vmpics-images.s3-ap-southeast-2.amazonaws.com/Malik/Malik+(10).jpg',
        width: 3,
        height: 2
    },
    {
        src: 'https://vmpics-images.s3-ap-southeast-2.amazonaws.com/Malik/Malik+(11).jpg',
        width: 2,
        height: 3
    },
    {
        src: 'https://vmpics-images.s3-ap-southeast-2.amazonaws.com/Malik/Malik+(12).jpg',
        width: 3,
        height: 2
    },
    {
        src: 'https://vmpics-images.s3-ap-southeast-2.amazonaws.com/shabi/Shabi+(1).jpg',
        width: 2,
        height: 3
    },
    {
        src: 'https://vmpics-images.s3-ap-southeast-2.amazonaws.com/shabi/Shabi+(2).jpg',
        width: 2,
        height: 3
    },
    {
        src: 'https://vmpics-images.s3-ap-southeast-2.amazonaws.com/shabi/Shabi+(3).jpg',
        width: 3,
        height: 2
    },
    {
        src: 'https://vmpics-images.s3-ap-southeast-2.amazonaws.com/shabi/Shabi+(4).jpg',
        width: 2,
        height: 3
    },
    {
        src: 'https://vmpics-images.s3-ap-southeast-2.amazonaws.com/shabi/Shabi+(5).jpg',
        width: 2,
        height: 3
    },
    {
        src: 'https://vmpics-images.s3-ap-southeast-2.amazonaws.com/shabi/Shabi+(6).jpg',
        width: 2,
        height: 3
    },
    {
        src: 'https://vmpics-images.s3-ap-southeast-2.amazonaws.com/shabi/Shabi+(7).jpg',
        width: 2,
        height: 3
    },
    {
        src: 'https://vmpics-images.s3-ap-southeast-2.amazonaws.com/shabi/Shabi+(8).jpg',
        width: 2,
        height: 3
    },
    {
        src: 'https://vmpics-images.s3-ap-southeast-2.amazonaws.com/shabi/Shabi+(9).jpg',
        width: 2,
        height: 3
    },
    {
        src: 'https://vmpics-images.s3-ap-southeast-2.amazonaws.com/shabi/Shabi+(10).jpg',
        width: 3,
        height: 2
    },
    {
        src: 'https://vmpics-images.s3-ap-southeast-2.amazonaws.com/shabi/Shabi+(12).jpg',
        width: 2,
        height: 3
    },
    {
        src: 'https://vmpics-images.s3-ap-southeast-2.amazonaws.com/shabi/Shabi+(13).jpg',
        width: 2,
        height: 3
    }
]

class Pregnancy extends Component {
    // componentDidMount = () => {
    //     var 
    // }
    render() {
        return (
            <div>
                <Menu></Menu>
                <div>
                    <Gallery photos={photos}></Gallery>
                </div>
            </div>
        )
    }
}

export default Pregnancy;