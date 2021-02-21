import React, { Component } from 'react'

class Family extends Component {

    render() {
        return <div className="container">
            <div className="row">
                <div>
                    <img src={require("../../images/Family/Laal.jpg")}
                        width="500px"
                        alt="Laal.jpg"></img>
                </div>
                <div>
                    <img src={require("../../images/Family/Aakash.jpg")}
                        width="500px"
                        alt="Aakash.jpg"></img>
                </div>
            </div>
            <div className="row">
                <div>
                    <img src={require("../../images/Family/Shuchi.jpg")}
                        width="500px"
                        alt="Laal.jpg"></img>
                </div>
                <div>
                    <img src={require("../../images/Family/Pratik.jpg")}
                        width="500px"
                        alt="Pratik.jpg"></img>
                </div>
            </div>
        </div>
    }
}
export default Family;