import React, { Component } from 'react';
import Menu from '../Menu';
import S3Gallery from './S3Gallery';
import MetaTags from 'react-meta-tags';
export class Events extends Component {
    render() {
        return (
            <div>
                <MetaTags>
                    <title>
                        VMPics Photographer - Event Photo Gallery
                    </title>
                    <meta name="description" content="VMPics Photographer - Event Photo Gallery"></meta>
                </MetaTags>

                <Menu></Menu>
                <div>
                    <S3Gallery albumName="event"></S3Gallery>
                </div>
            </div>
        )
    }
}

export default Events
