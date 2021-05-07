import React, { Component } from 'react'
import S3Gallery from './S3Gallery';
import Menu from '../Menu';

class Family extends Component {
    render() {
        return (
            <div>
                <Menu></Menu>
                <div>
                    <S3Gallery albumName="family"></S3Gallery>
                </div>
            </div>
        )
    }
}

export default Family;