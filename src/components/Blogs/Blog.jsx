import React, { Component } from 'react'
import Helmet from 'react-helmet';
import Menu from '../Menu';

export class Blog extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Blogs by VMPics Photography</title>
                    <meta name="description" content='Blogs by VMPics Photography'></meta>
                </Helmet>
                <Menu></Menu>
                <div className="container">
                    <h2>My Blogs</h2>
                    <div className='row'>
                        <div className='col-12'>
                            <a href='/blog/golden-hour-in-photography'>
                                <img src={require("../../images/GoldenHour.jpg")} alt="Golden hour blog" className="img-fluid"></img>
                            </a>
                        </div>
                        <div className='col-12'>
                            <a href='/blog/golden-hour-in-photography' >
                                <h4>WHAT IS GOLDEN HOUR ?</h4>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Blog;