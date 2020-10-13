import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: require("../images/gallery/pics/1.jpg"),
    thumbnail: require("../images/gallery/thumbnails/1.jpg"),
  },
  {
    original: require("../images/gallery/pics/2.jpg"),
    thumbnail: require("../images/gallery/thumbnails/2.jpg"),
  },
  {
    original: require("../images/gallery/pics/3.jpg"),
    thumbnail: require("../images/gallery/thumbnails/3.jpg"),
  },
  {
    original: require("../images/gallery/pics/4.jpg"),
    thumbnail: require("../images/gallery/thumbnails/4.jpg"),
  },
  {
    original: require("../images/gallery/pics/5.jpg"),
    thumbnail: require("../images/gallery/thumbnails/5.jpg"),
  },
  {
    original: require("../images/gallery/pics/6.jpg"),
    thumbnail: require("../images/gallery/thumbnails/6.jpg"),
  },
  {
    original: require("../images/gallery/pics/7.jpg"),
    thumbnail: require("../images/gallery/thumbnails/7.jpg"),
  },
  {
    original: require("../images/gallery/pics/8.jpg"),
    thumbnail: require("../images/gallery/thumbnails/8.jpg"),
  },
  {
    original: require("../images/gallery/pics/9.jpg"),
    thumbnail: require("../images/gallery/thumbnails/9.jpg"),
  },
  {
    original: require("../images/gallery/pics/10.jpg"),
    thumbnail: require("../images/gallery/thumbnails/10.jpg"),
  },
  {
    original: require("../images/gallery/pics/11.jpg"),
    thumbnail: require("../images/gallery/thumbnails/11.jpg"),
  },
  {
    original: require("../images/gallery/pics/12.jpg"),
    thumbnail: require("../images/gallery/thumbnails/12.jpg"),
  },
  {
    original: require("../images/gallery/pics/13.jpg"),
    thumbnail: require("../images/gallery/thumbnails/13.jpg"),
  },
  {
    original: require("../images/gallery/pics/14.jpg"),
    thumbnail: require("../images/gallery/thumbnails/14.jpg"),
  },
];

class Gallery extends Component {
  state = {};
  render() {
    return <ImageGallery items={images} />;
  }
}

export default Gallery;
