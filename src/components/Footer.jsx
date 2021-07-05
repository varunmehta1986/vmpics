import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="col-lg-12" >
          &#169; 2021 VMPICS PHOTOGRAPHY
        </div>
        <div className="col-lg-12">
          YOUR FAMILY PHOTOGRAPHER
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-4" style={{ textAlign: "left" }}>
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
          <div className="col-sm-12 col-md-4 col-lg-4" style={{ textAlign: "left" }}>
            <table>
              <thead>
                <tr>
                  <th>
                    Galleries
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <a href="/family" style={{ color: "black" }}>Family</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="/maternity" style={{ color: "black" }}>Maternity</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="/event" style={{ color: "black" }}>Events</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4" style={{ textAlign: "left" }}>
            <table>
              <thead>
                <tr>
                  <th>
                    Bookings
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <a href="/contact" style={{ color: "black" }}>Book an appointment</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="/pricing" style={{ color: "black" }}>Pricing</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="/pricing" style={{ color: "black" }}>E-Gift Gards</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </footer>
    );

  }
}

export default Footer;
