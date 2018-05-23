import React, { Component } from 'react';
import "./Future.css"
import { Link } from "react-router-dom";
import { Parallax } from 'react-parallax';

const styles = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
};


const image1 = "https://www.walldevil.com/wallpapers/w02/804274-artwork-astronauts-earth-outer-space-travel.jpg";
const image2 = "https://assets.entrepreneur.com/content/3x2/1300/20171227151824-F9-Launch.jpeg";
const image3 = "https://i.pinimg.com/originals/f3/d6/5a/f3d65a5a7c75a10f85c6d94b6088c652.jpg";
const image4 = "https://i.ytimg.com/vi/1mx-BRJM0sA/maxresdefault.jpg";
const image5 = "https://i.pinimg.com/736x/87/fa/71/87fa712fdbd0425c06a67786ec32cb23--space-travel-space-exploration.jpg";
const image6 = "https://dallasnews.imgix.net/Space_Shuttle-Last_Stop.jpg";
const image7 = "https://i.pinimg.com/originals/27/94/ea/2794eaad5ef1b51f58244a8c5d868cd8.jpg";
const image8 = "https://static.guim.co.uk/sys-images/Guardian/Pix/maps_and_graphs/2010/2/1/1265021443011/Buzz-Aldrin-on-moon-001.jpg";



class Future extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titleText: "Bird's Nest",
            bodyText: 'This is not really a bird nest.'
        };
    }

    render() {
        return (
            <div className="containerVision">
                <div className='tbl'>The Future of Flight</div>
                <div className="video-background">
                    <div className="video-foreground">
                        <iframe src="https://www.youtube.com/embed/W0LHTWG-UmQ?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1&amp;loop=1&amp;playlist=W0LHTWG-UmQ" title="ISS Timelapse" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                    </div>
                </div>
                <div style={styles}>

                    <Parallax bgImage={image7}
                        strength={500}>
                        <div style={{ height: 500 }}>
                            {/* <div style={insideStyles}>HTML inside the parallax</div> */}
                        </div>
                    </Parallax>

                    <div className="whiteTxt">
                        <div className="container">
                            <div className="row">

                                <div className="col-lg-8 offset-lg-2 txtShadow">
                                    <br />
                                    <br />

                                    {/* <h2 className='pb1'>Silver Package: Atmosphere Exit</h2> */}
                                    <br />

                                    <h2 className='pb1'>Our Silver Package takes our Bronze package and straps rockets on it, literally.  This journey takes our clients outside the Earth’s atmosphere to the edge of space, at over 350,000 feet.  This flight takes place on a smaller aircraft not designed for long-duration missions, giving the clients close to what would be the full astronaut experience.</h2>
                                    <br />

                                    <h2 className='vb1'>Package Inclusions:</h2>


                                    <li>A 3-hour trip to edge of the Earth’s atmosphere.</li>
                                    <li>Training: 3 days of astronaut training.</li>
                                    <li>Pre/post launch transportation.</li>
                                    <li>Atmospheric space tour (3 hours).</li>
                                    <li>Post re-entry celebration.</li>
                                    <br />

                                    <h5>Cost: $250,000.00/person.</h5>

                                    <br />

                                    <h3>How it works:</h3>

                                    <h3 className='vb1'>Space ship <strong>"Kiss My Grits"</strong> is lofted to 50,000 feet, then released by a carrier aircraft.  After separation, the rocket engines are engaged for 70 seconds, accelerating to 2,500mph, then the rockets are shut down and the craft continues to climb past 328,000 feet, an altitude which transforms our clients into astronauts.  The craft reaches its highest altitude at 361,000 feet where up to five minutes of weightlessness can be experienced. The aircraft then re-enters the Earth’s atmosphere and finally performs a conventional landing on a runway.</h3>
                                    <br />

                                    <Link to="../Payment">
                                        <button type="button" class="btn btn-secondary btn-lg btn-block">Chase Your Dreams Here</button>
                                    </Link>
                                    <br />

                                </div>
                            </div>
                        </div>
                    </div>

                    <Parallax bgImage={image8} /* blur={{ min: -1, max: 3 }} */>
                        <div style={{ height: 800 }}>
                            {/* <div style={insideStyles}>Dynamic Blur</div> */}
                        </div>
                    </Parallax>

                </div>
            </div>

        )
    }
}

export default Future; 