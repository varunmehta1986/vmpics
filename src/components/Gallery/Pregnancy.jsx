import React, { Component } from 'react'
import './Portfolio.json';
import '../../HelperMethods';
import Gallery from 'react-photo-gallery';
import Menu from '../Menu';

class Pregnancy extends Component {
    constructor() {
        super();
        this.state = {
            photos: []
        }
    }
    componentDidMount() {
        const requestOptionsKhyati = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            body: JSON.stringify({ BucketName: 'vmpics-images', AlbumName: 'khyati' })
        };
        console.log("calling API");
        fetch('https://2llibaeus7.execute-api.ap-southeast-2.amazonaws.com/Prod', requestOptionsKhyati)
            .then(res => res.json())
            .then(data => this.setState({ photos: this.state.photos.concat(data) }));

        const requestOptionsMalik = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            body: JSON.stringify({ BucketName: 'vmpics-images', AlbumName: 'Malik' })
        };
        fetch('https://2llibaeus7.execute-api.ap-southeast-2.amazonaws.com/Prod', requestOptionsMalik)
            .then(res => res.json())
            .then(data => this.setState({ photos: this.state.photos.concat(data) }));

        const requestOptionsShabi = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            body: JSON.stringify({ BucketName: 'vmpics-images', AlbumName: 'shabi' })
        };
        fetch('https://2llibaeus7.execute-api.ap-southeast-2.amazonaws.com/Prod', requestOptionsShabi)
            .then(res => res.json())
            .then(data => this.setState({ photos: this.state.photos.concat(data) }));


    }
    render() {
        return (
            <div>
                <Menu></Menu>
                <div>
                    <Gallery photos={this.state.photos}></Gallery>
                </div>
            </div>
        )
    }
}

export default Pregnancy;