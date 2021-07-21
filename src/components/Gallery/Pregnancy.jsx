import React, { Component } from 'react';
import Menu from '../Menu';
import S3Gallery from './S3Gallery';
import MetaTags from 'react-meta-tags';

class Pregnancy extends Component {
    render() {
        return (
            <div>
                <MetaTags>
                    <title>
                        VMPics Photographer - Maternity Photo Gallery
                    </title>
                    <meta name="description" content="VMPics Photographer - Maternity Photo Gallery"></meta>
                </MetaTags>
                <Menu></Menu>
                <div>
                    <S3Gallery albumName="maternity"></S3Gallery>
                </div>
            </div>
        )
    }
}

export default Pregnancy;
