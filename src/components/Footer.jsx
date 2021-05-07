import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="col-lg-12" >
          &#169; 2021 VMPICS PHOTOGRAPHY
        </div>
        <div className="col-lg-12">
          YOUR FAMILY PHOTOGRAPHER
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6" style={{ textAlign: "left" }}>
          <table>
            <thead>
              <tr>
                <th colSpan="2">
                  CONTACT US
              </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Email:
              </td>
                <td>
                  vmpicsphotography@gmail.com
              </td>
              </tr>
              <tr>
                <td>
                  Phone:
              </td>
                <td>
                  +61-460628079
              </td>
              </tr>
            </tbody>
          </table>
        </div>
      </footer>
    );

  }
}

export default Footer;
