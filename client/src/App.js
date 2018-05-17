import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Title from './components/Title';
import Home from "./components/Home"
import Mission from "./components/Mission"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
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
import Userhome from "./components/Userhome";
import Vision from "./components/Vision";
// import Wrapper from "./Components/Wrapper"

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
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
          <Route exact path="/userhome" component={Userhome} />
          <Route exact path="/vision" component={Vision} />
        </div>
      </Router>
    );
  }
}

export default App;
