import React, { Component } from "react";

class Gallery extends Component {
  render() {
    return (<div className="container">
      <div>
        <img src={require("../images/pregnancy/GayatriSameer.jpg")}
          width="450px"
          alt="Gayatri and Sameer.jpg"></img>
      </div>
    </div>
    )
  }
}

export default Gallery;
