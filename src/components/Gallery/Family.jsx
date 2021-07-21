import React, { Component } from 'react';
import S3Gallery from './S3Gallery';
import Menu from '../Menu';
import MetaTags from 'react-meta-tags';
class Family extends Component {
    render() {
        return (
            <div>
                <MetaTags>
                    <title>
                        VMPics Photographer - Family Photo Gallery
                    </title>
                    <meta name="description" content="VMPics Photographer - Maternity Photo Gallery"></meta>
                </MetaTags>

                <Menu></Menu>
                <div>
                    <S3Gallery albumName="family"></S3Gallery>
                </div>
            </div>
        )
    }
}

export default Family;