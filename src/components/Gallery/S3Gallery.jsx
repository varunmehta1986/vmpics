import React, { Component } from "react";
import Gallery from 'react-photo-gallery';
import Image from 'react-bootstrap/Image';

class S3Gallery extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      isLoading: true
    }
  }
  componentDidMount() {
    const jsonUrl = 'https://vmpics-images.s3.ap-southeast-2.amazonaws.com/' + this.props.albumName + ".json";
    // const requestOptionsKhyati = {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    //   body: JSON.stringify({ BucketName: 'vmpics-images', AlbumName: this.props.albumName })
    // };
    fetch(jsonUrl)
      .then(res => res.json())
      .then(data => this.setState({ photos: this.state.photos.concat(data), isLoading: false }));
  }
  render() {
    return (
      <div>
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

export default S3Gallery;
