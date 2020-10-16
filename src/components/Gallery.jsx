import React, { Component } from "react";
import Feed from 'react-instagram-authless-feed';

class Gallery extends Component {
  state = {};
  render() {
    return (<div className="container">
      <div className="row text-left">
        <h3>Gallery</h3>
        <p>Here are some of the latest additions to my instagram gallery. 
          You can click on any of the picture to visit my instagram page and view more of my collection.</p>
      </div>
      <Feed userName="varunmehtapictures" className="Feed" classNameLoading="Loading"/>
    </div>)
  }
}

export default Gallery;
