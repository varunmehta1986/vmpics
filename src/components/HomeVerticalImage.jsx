import React, { Component } from "react";

class HomeVerticalImage extends Component {
  render() {
    return (
      <img
        src={this.props.imageUrl}
        alt={this.props.imageAlt}
        width="196"
        height="294"
      />
    );
  }
}

export default HomeVerticalImage;
