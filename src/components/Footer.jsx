import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="col-lg-12">
          &#169; 2021 VMPICS PHOTOGRAPHY - YOUR FAMILY PHOTOGRAPHER
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6" style={{ textAlign: "left" }}>
          <table>
            <tr>
              <th>
                CONTACT US
              </th>
            </tr>
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
          </table>
        </div>
      </div>);

  }
}

export default Footer;
