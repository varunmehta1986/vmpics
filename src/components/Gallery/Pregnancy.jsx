import React, { Component } from 'react'
import Menu from '../Menu';
import S3Gallery from './S3Gallery';


class Pregnancy extends Component {
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

export default Pregnancy;
