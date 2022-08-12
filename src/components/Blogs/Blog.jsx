import React, { Component } from 'react'
import Helmet from 'react-helmet';
import Menu from '../Menu';

export class Blog extends Component {
    render() {
        return (
            <div className="container">
                <Helmet>
                    <title>Blogs by VMPics Photography</title>
                    <meta name="description" content='Blogs by VMPics Photography'></meta>
                </Helmet>
                <Menu></Menu>
                <h2>My Blogs</h2>

                <a href='/blog/golden-hour-in-photography'>
                    <img src={require("../../images/GoldenHour.jpg")} alt="Golden hour blog" height="600"></img>
                </a>
            </div>
        )
    }
}

export default Blog;