import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import shop from '../shop.png'

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-success navbar-dark px-sm-5">
        {/*
        https://www.iconfinder.com/icons/1243689/call_phone_icon
        Creative Commons (Attribution 3.0 Unported);
        https://www.iconfinder.com/Makoto_msk
        */}
        <Link to="/">
          <img src={shop} alt="store" className="navbar-brand main-logo" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Products
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto" >
          <button>
            My cart
          </button>
        </Link>
      </nav>
    );
  }
}

export default Navbar;