import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Home.css';


class Home extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <div className="card">
                                <h2>FINAL COUNTDOWN</h2>
                                <img src="https://fsmedia.imgix.net/fd/c7/a5/98/d61f/4184/a8e3/df675a625458/spoooooooky.jpeg" alt="Space" />
                                <h1>Space Package 1</h1>
                                <p className="title">Anti-Gravity Express</p>
                                <div>
                                </div>
                                <Link to="../Travelpack1">
                                    <button type="button" class="btn btn-dark">Bronze</button>
                                </Link>
                            </div>
                        </div>



                        <div className="col-sm">
                            <div className="card">
                                <h2>FINAL COUNTDOWN</h2>
                                <img src="https://www.vasc.org/wp-content/themes/meridian/video/video-bg.jpg" alt="Space" />
                                <h1>Space Package 2</h1>
                                <p className="title">Escape From Earth</p>
                                <Link to="../Travelpack2">
                                    <button type="button" class="btn btn-dark">Silver</button>
                                </Link>
                            </div>
                        </div>


                        <div className="col-sm">
                            <div className="card">
                                <h2>FINAL COUNTDOWN</h2>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8A8QZHGjk_u5VgyMOBinRGdp1CCJ4YFvsC17qCt6KEdjsl2PVIw" alt="Space" />
                                <h1>Space Package 3</h1>
                                <p className="title">Fly Me To The Moon</p>
                                <Link to="../Travelpack3">
                                    <button type="button" class="btn btn-dark">Gold</button>
                                </Link>
                            </div>
                        </div>


                        <div className="col-sm">
                            <div className="card">
                                <h2>FINAL COUNTDOWN</h2>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo193kVsvn_oc0HkcSY5OmRM7_8DwQvoHnVHaNDmtqr8WiJ49Zlw" alt="Space" />
                                <h1>Space Package 4</h1>
                                <p className="title">Lunar Slum Lord</p>
                                <Link to="../Travelpack4">
                                    <button type="button" class="btn btn-dark">Platinum</button>
                                </Link>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Home;



