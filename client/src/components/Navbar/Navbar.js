import React from 'react';
import "./Navbar.css"
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, /* NavLink */ } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import Contact from "../icons/Contact-18.png"
import Gallery from "../icons/Gallery-18.png"
import Home from "../icons/Home-18.png"
import SignIn from "../icons/Sign-in-18.png"

import AuthService from '../AuthService';
import withAuth from '../withAuth';
const Auth = new AuthService();

class MainNav extends React.Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.state = { collapsed: true };
  }

  toggleNavbar() {
    this.setState({ collapsed: !this.state.collapsed });
  }

  handleLogout(){
    Auth.logout();
    this.props.history.push('/signup');

  }

  render() {
    var nvbclasses = ['nav', 'fixed-top', !this.state.collapsed ? 'expanded' : ''].join(' ');

    return (
      <div>
        <Navbar className={nvbclasses} dark>
          <NavbarToggler onClick={this.toggleNavbar} style={{ margin: '0rem' }} className="mr-2" id="nvb1" />
          <NavbarBrand href="/" className="mr-auto">Final Countdown</NavbarBrand>
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar className="navButton">
              <NavItem>
                <Link className="countdown-link general" to="/"><img src={Home} alt="home" /> Home</Link>
                <Link className="countdown-link general" to="/Booking">Booking</Link>
                <Link className="countdown-link general" to="/Contact"><img src={Contact} alt="contact" /> Contact</Link>
                <Link className="countdown-link center" to="/About">Purpose</Link>
                <Link className="countdown-link center" to="/Mission">Mission</Link>
                <Link className="countdown-link center" to="/Vision">Vision</Link>
                <Link className="countdown-link general" to="/Gallery"><img src={Gallery} alt="gallery" /> Gallery</Link>
                <Link className="countdown-link general" to="/Signup"><img src={SignIn} alt="sign-in" /> Sign In</Link>
                <Link className="countdown-link general" to="https://github.com/reactstrap/reactstrap">
                  <img width="20" height="20" alt="github" src="https://www.iconsdb.com/icons/preview/white/github-6-xxl.png" /> GitHub</Link>
                  <button type="button" onClick={this.handleLogout}>Logout</button>

              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default withRouter(MainNav);
