import React, { Component } from "react";
import Gallery from "react-photo-gallery";

const photos = [
  {
    src: require("../images/baby/8.jpg"),
    width: 2,
    height: 3,
  },
  {
    src: require("../images/baby/1.jpg"),
    width: 3,
    height: 2,
  },
  {
    src: require("../images/pregnancy/1.jpg"),
    width: 3,
    height: 2,
  },
  // {
  //   src: require("../images/scenery/1.jpg"),
  //   width: 3,
  //   height: 2,
  // },
  {
    src: require("../images/baby/9.jpg"),
    width: 2,
    height: 3,
  },
  {
    src: require("../images/baby/2.jpg"),
    width: 3,
    height: 2,
  },
  // {
  //   src: require("../images/scenery/2.jpg"),
  //   width: 3,
  //   height: 2,
  // },
  {
    src: require("../images/pregnancy/3.jpg"),
    width: 3,
    height: 2,
  },
  // {
  //   src: require("../images/baby/14.jpg"),
  //   width: 2,
  //   height: 3,
  // },
  {
    src: require("../images/baby/3.jpg"),
    width: 3,
    height: 2,
  },
  {
    src: require("../images/pregnancy/7.jpg"),
    width: 3,
    height: 2,
  },
  {
    src: require("../images/baby/12.jpg"),
    width: 2,
    height: 3,
  },
  {
    src: require("../images/baby/4.jpg"),
    width: 3,
    height: 2,
  },
  {
    src: require("../images/baby/5.jpg"),
    width: 3,
    height: 2,
  },
  {
    src: require("../images/baby/6.jpg"),
    width: 3,
    height: 2,
  },
  // {
  //   src: require("../images/baby/7.jpg"),
  //   width: 2,
  //   height: 3,
  // },
  // {
  //   src: require("../images/baby/16.jpg"),
  //   width: 3,
  //   height: 2,
  // },
  // {
  //   src: require("../images/scenery/4.jpg"),
  //   width: 3,
  //   height: 2,
  // },
];

class HomeImageSet extends Component {
  render() {
    return (
      <div>
        <Gallery photos={photos} />
      </div>
    );
  }
}

export default HomeImageSet;
