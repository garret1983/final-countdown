import React, { Component } from 'react';
import Greeting from "./components/Greeting"
import Navbar from "./components/Navbar";
import Title from './components/Title';
import Wrapper from "./components/Wrapper";
import Home from "./components/Home"
import { BrowserRouter as Router, Route, /* Link */ } from "react-router-dom";
import './App.css';
import About from "./components/About";
import Booking from "./components/Booking";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import Gallery from "./components/Gallery";
import Gallery1 from "./components/Gallery1";
import Launchdates from "./components/Launchdates";
import Mission from "./components/Mission";
import Travelpackages from "./components/Travelpackages";
import Travelpack1 from "./components/Travelpack1";
import Travelpack2 from "./components/Travelpack2";
import Travelpack3 from "./components/Travelpack3";
import Travelpack4 from "./components/Travelpack4";
import Userhome from "./components/Userhome";
import Vision from "./components/Vision";


class App extends Component {
  render() {
    return (
      <Wrapper>
        <Router>
          <div>
            <Navbar />
            <Title />

            <Route exact path="/" component={Greeting} />
            <Route exact path="/about" component={About} />
            <Route exact path="/Home" component={Home} />
            <Route exact path="/booking" component={Booking} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/faq" component={Faq} />
            <Route exact path="/gallery" component={Gallery} />
            <Route exact path="/gallery1" component={Gallery1} />
            <Route exact path="/launchdates" component={Launchdates} />
            <Route exact path="/mission" component={Mission} />
            <Route exact path="/travelpackages" component={Travelpackages} />
            <Route exact path="/travelpack1" component={Travelpack1} />
            <Route exact path="/travelpack2" component={Travelpack2} />
            <Route exact path="/travelpack3" component={Travelpack3} />
            <Route exact path="/travelpack4" component={Travelpack4} />
            <Route exact path="/userhome" component={Userhome} />
            <Route exact path="/vision" component={Vision} />
          </div>
        </Router>
        <footer>
          <div className="row ftr1">
            <div className="col"><img width="25" height="25" alt="twitter" src="https://www.iconsdb.com/icons/preview/white/twitter-xxl.png" /></div>
            <div className="col"><img width="25" height="25" alt="facebook" src="https://www.iconsdb.com/icons/preview/white/facebook-xxl.png" /></div>
            <div className="col"><img width="25" height="25" alt="instagram" src="https://www.iconsdb.com/icons/preview/white/instagram-xxl.png" /></div>
            <div className="col"><img width="25" height="25" alt="youtube" src="https://www.iconsdb.com/icons/preview/white/youtube-xxl.png" /></div>
          </div>
        </footer>
      </Wrapper>
    );
  }
}

export default App;
