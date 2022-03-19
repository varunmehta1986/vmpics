import React, { Component } from 'react'
import MetaTags from 'react-meta-tags';
import Menu from '../Menu';
export class PicTimeGalleries extends Component {
    render() {
        return (
            <div style={{ height: "100%" }}>
                <MetaTags>
                    <title>
                        VMPics Photographer - Sneak Peak to Client Galleries
                    </title>
                    <meta name="description" content="VMPics Photographer - View Client Galleries"></meta>
                </MetaTags>

                <Menu></Menu>
                <script src='https://pictimecloudaf-p.azureedge.net/pictures/scripts/compiled/artgalleryembed.js'>
                </script><iframe frameborder='0' id='pictimeIntegration' title="pictimeiframe"
                    src='https://vmpics.pic-time.com/client?headless=true&noSyncNavigation=true' style={{ width: "100%", height: "1080px" }}
                ></iframe>
            </div>
        )
    }
}
export default PicTimeGalleries