import React, { Component } from "react";

class HomeImage extends Component {
  render() {
    return (
      <img src={this.props.imageUrl} alt={this.props.imageAlt} width="250" />
    );
  }
}

export default HomeImage;
