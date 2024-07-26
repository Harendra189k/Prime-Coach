import React from "react";

import LogiImg from "../../utils/images/logo.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  // console.log("header", header)
  return (
    <div>
      <header id="header">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <div className="web-logo">
              <a className="navbar-brand logo" >
                <img src={LogiImg} className="img-fluid" />
                <div>
                  <span>Prime</span>
                  <br /> Coach
                </div>
              </a>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
              <span>
                <i className="fa fa-bars" aria-hidden="true"></i>
              </span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <NavLink className="nav-link home" to="/">
                    Home <span className="sr-only"></span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link athlete" to="/for-athelets">
                    For Athletes
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/for-coaches">
                    For Coaches
                  </NavLink>
                </li>
                {/* <li className="nav-item">
                  <NavLink className="nav-link" to="/pricing">
                    Pricing
                  </NavLink>
                </li> */}

                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">
                    Login
                  </NavLink>
                </li>

                <li className="nav-item">
                <div className="dropdown">
                  <li className="dropbtn">Register</li>
                  <div className="dropdown-content">
                  <NavLink to='/athlete-dasboard'> For Athlete</NavLink>
                   <NavLink to='/coach-dasboard' className='navlink-for-reg'> For Coach </NavLink>
                  </div>
                </div>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/free-trials">
                    Free Trial
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
