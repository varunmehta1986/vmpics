import React, { Component } from "react";

class HomeImage extends Component {
  render() {
    return (
      <img
        src={this.props.imageUrl}
        alt={this.props.imageAlt}
        width="278"
        height="184"
      />
    );
  }
}

export default HomeImage;
