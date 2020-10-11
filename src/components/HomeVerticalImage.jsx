import React, { Component } from "react";

class HomeVerticalImage extends Component {
  render() {
    return (
      <img src={this.props.imageUrl} alt={this.props.imageAlt} width="176" />
    );
  }
}

export default HomeVerticalImage;
