import React, { Component } from 'react'
import Helmet from 'react-helmet';
import Menu from '../Menu';

export class MyEquipment extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>What equipment do I shoot with ?</title>
                </Helmet>
                <Menu></Menu>
                <div className='container'>
                    <h1>
                        WHAT EQUIPMENT DO I SHOOT WITH ?
                    </h1>
                    <p>
                        There are so many options available in the market today, that it's very east for a newbie will get lost to what
                        equipment to go for and which one takes the best photos.
                        There is DSLR and mirrorless that are either crop sensor or full frame.
                    </p>
                    <p>
                        I don't want to get into the details of them technology wise but they are all good cameras.
                        As they say - "a camera is as good as the photographer". You can achieve great results with most of the modern cameras.
                    </p>

                    <p>
                        Like many(read almost all) others,  I started my photography journey as a hobby and didnt want to to spend too much.
                        I purchased my first DSLR, a Nikon D7100 in 2016 and a 35mm Nikon prime lens which is around 52mm on crop sensor D7100. Why I start with Nikon? I just had a bad experience with Canon point and shoot i bought in 2012, but DSLR/Mirrorless is a different ball game and I was too naive to understand that at that time.

                        And that is all I had for a very long time(4 years). After I moved to Australia,
                        I started doing professional shoots with that body and lens only and it worked alright for some time.
                    </p>

                    <p>
                        As my clientele started to grow and the variety of shoots, I started to realize the limitations of having a single fixed focal length lens.
                        So next, I bought another body Nikon D750(full frame) and a Nikon 85mm 1.8G fixed focal length lens. I started carrying 2 bodies to all my shoots now that solves two purposes, I can switch between 2 focal lengths and I also have a backup in case one of the bodies give up on me. From here on I kept upgrading and puchasing new lenses, a mirrorless Nikon z6ii, another full frame, flashes, dual camera straps etc .
                    </p>

                    <p>
                        Here is a list of everything I have in my bag now (including the bag) -
                        <br></br><br></br>
                        <b>BODIES -</b>
                        <ol>
                            <li>Nikon D750</li>
                            <li>Nikon Z6II</li>
                        </ol>


                        <b>LENSES ( in increasing order of focal length) </b>
                        <ol>
                            <li>Sigma 35mm 1.4f </li>
                            <li>Nikon 40mm 2.0f </li>
                            <li> Nikon 50mm 1.8f </li>
                            <li> Nikon 85mm 1.8f </li>
                        </ol>

                        <b>FLASHES</b>
                        <ol>
                            <li>Nikon SB700 </li>
                            <li>Godox</li>
                        </ol>

                        <b>BAGS</b>
                        <ol>
                            <li>Temba</li>
                        </ol>

                        <b>STRAPS</b>
                        <ol>
                            <li>Cairo</li>
                        </ol>

                        <b>REST</b><br></br>
                        Spare camera batteries, spare rechargeable batteries for flash, lens cleaner, sensor cleaner
                    </p>
                    <p>
                        That is what I have as on the date of writing this article, what I use during a shoot totally depends on the type of shoot,
                        location and of course, my mood.
                    </p>
                </div>
            </div >
        )
    }
}