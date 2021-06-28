import React, { Component } from 'react'
import Menu from '../Menu';
import S3Gallery from './S3Gallery';

export class Events extends Component {
    render() {
        return (
            <div>
                <Menu></Menu>
                <div>
                    <S3Gallery albumName="maternity"></S3Gallery>
                </div>
            </div>
        )
    }
}

export default Events
