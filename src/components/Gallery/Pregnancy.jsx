import React, { Component } from 'react'
import '../../HelperMethods';
import Gallery from 'react-photo-gallery';
import Menu from '../Menu';
import Image from 'react-bootstrap/Image';

class Pregnancy extends Component {
    constructor() {
        super();
        this.state = {
            photos: [],
            isLoading: true
        }
    }
    componentDidMount() {

        const apiUrl = 'https://2llibaeus7.execute-api.ap-southeast-2.amazonaws.com/Prod'
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
            .then(data => this.setState({ photos: this.state.photos.concat(data), isLoading: false }));

    }
    render() {
        return (
            <div>
                <Menu></Menu>
                <div>
                    <Gallery photos={this.state.photos}></Gallery>
                </div>
                <div>
                    {this.state.isLoading ? <Image src={require('../../images/loading.gif')} width="75px"></Image> : null}
                </div>
            </div>
        )
    }
}

export default Pregnancy;
