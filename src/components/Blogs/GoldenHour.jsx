import React, { Component } from 'react'
import Helmet from 'react-helmet';
import Menu from '../Menu';

export class GoldenHour extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Golden Hour in Photography</title>
                    <meta name="description" content='Golden hour in photography'></meta>
                </Helmet>
                <Menu></Menu>
                <div className='container'>

                    <h1 style={{ color: "#444444" }}>
                        WHAT IS GOLDEN HOUR ? AND WHY DO I LOVE IT !
                    </h1>
                    <br />
                    <div style={{ textAlign: 'justify' }} className="row">
                        <div className="col-lg-6 col-sm-12"> Over the past of couple of years of my business, many of my client have asked me - <br /> <br />
                            <ul>
                                <li>
                                    What is the best time do our session ? OR
                                </li>
                                <li>
                                    Can we have our session in the afternoon between 1PM and 2PM ? OR
                                </li>
                                <li>
                                    Why our session is scheduled so late in the afternoon, would there be enough light ? OR
                                </li>
                                <li>
                                    The weather forecast shows its going to be a cloudy day, is it going to be a good day to have a session without the sun?
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <img src={require("../../images/GoldenHourLanding.jpg")} alt="Landing for Golden Hour" className="img-fluid img-thumbnail"></img>
                        </div>


                        <p>
                            I'll try to answer each of them here. But first, the golden hour.
                            It is the last hour before it gets dark, when the sun is going down or the hour after starts rising in morning.
                            It's the time when the sun is not too harsh and not too bright and given a perfect soft light that is almost golden. And hence the golden hour.
                        </p>
                        <p>
                            So is golden hour the best time for photos? Yes, But it is NOT the only time to get the best photos.
                            A cloudy day, when the sun rays are not directly hitting the face, and is behind the clouds,
                            giving a softer white light can create some amazing images as well.
                        </p>
                        <p>
                            If none of these are applicable and its bright and sunny outside, then a good shaded area where there are lots of trees are a great place to do the session as well.
                            That answers the 2nd and 4th question, we can have a good session anytime of the day, if its cloudy or we are at a shaded place.
                        </p>
                        <div className='row'>
                            <div className='col-lg-6 col-sm-12'>
                                <img src={require("../../images/GoldenHour2.jpg")} alt="Golden Hour walk" className="img-fluid img-thumbnail"></img>
                            </div>
                            <div className='col-lg-6 col-sm-12'>
                                <p>
                                    Which brings me to the last concern and the most raised one, will there be enough light that late in the afternoon? <br />
                                    Maybe not, but, modern professional cameras including both DSLRs and Mirrorless work great in low light conditions and can achieve great results in the right hands.
                                    Mirrorless cameras specially, perform a lot better than in comparision to the DSLRs in low light. I am a Nikon user and own both mirrorless and
                                    DSLR Full frame cameras and they are both great in low light. But this holds true for other brands as well like Canon, Sony, Fuji etc,
                                </p>
                            </div>
                        </div>
                        <p>
                            <br />
                            I hope you found this article useful and if you own a professional camera, do try shooting in golden hour.
                        </p>
                        <p> P.S. <br />
                            Sneak peak into the gallery from this shoot here -
                            <a href='https://gallery.vmpics.com.au/-poojasmaternityshoot/sneakpeek'> POOJA's MATERNITY SHOOT</a>
                        </p>
                    </div>
                </div>
            </div >
        )
    }
}
export default GoldenHour;