import React, { Component } from 'react'

class Pregnancy extends Component {
    render() {
        return <div className="container">
            <div>
                <img src={require("../../images/pregnancy/Malik.jpg")}
                    width="500px"
                    alt="Gayatri and Sameer.jpg"></img>
            </div>
            <div>
                <img src={require("../../images/pregnancy/Gayatri.jpg")}
                    width="500px"
                    alt="Gayatri and Sameer.jpg"></img>
            </div>
            <div>
                <img src={require("../../images/pregnancy/Tarun.jpg")}
                    width="500px"
                    alt="Gayatri and Sameer.jpg"></img>
            </div>
        </div>
    }
}

export default Pregnancy;