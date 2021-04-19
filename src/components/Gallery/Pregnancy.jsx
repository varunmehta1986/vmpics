import React, { Component } from 'react'
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
        const apiUrl = 'https://2llibaeus7.execute-api.ap-southeast-2.amazonaws.com/Prod'
        // for (let i = 0; i < this.props.albums.length; i++) {
        //     const requestOptions = {
        //         method: 'POST',
        //         headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        //         body: JSON.stringify({ BucketName: this.props.s3BucketName, AlbumName: this.props.albums[i] })
        //     };
        //     fetch(apiUrl, requestOptions)
        //     .then(res => res.json())
        //     .then(data => this.setState({ photos: this.state.photos.concat(data) }));

        // }
        const requestOptionsKhyati = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            body: JSON.stringify({ BucketName: 'vmpics-images', AlbumName: 'khyati' })
        };
        fetch(apiUrl, requestOptionsKhyati)
            .then(res => res.json())
            .then(data => this.setState({ photos: this.state.photos.concat(data) }));

        const requestOptionsMalik = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            body: JSON.stringify({ BucketName: 'vmpics-images', AlbumName: 'Malik' })
        };
        fetch(apiUrl, requestOptionsMalik)
            .then(res => res.json())
            .then(data => this.setState({ photos: this.state.photos.concat(data) }));

        const requestOptionsShabi = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            body: JSON.stringify({ BucketName: 'vmpics-images', AlbumName: 'shabi' })
        };
        fetch(apiUrl, requestOptionsShabi)
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