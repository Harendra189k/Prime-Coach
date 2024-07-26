import React from 'react'
import { NavLink } from 'react-router-dom'
import LogiImg from '../../utils/images/logo.png'
import Footer from './Footer'

const InnerNav = () => {

 function alrt(){
    alert("Comming Soon")
 }

  return (
    // <div>
    //     <nav className="navbar navbar-expand-lg navbar-light">
    //     <div className="container">
    //         <div className="web-logo">
    //             <a className="navbar-brand logo"><img src="" className="img-fluid"/>
    //                 <div><span>Prime <br/> Coach </span></div> 
    //             </a>
    //         </div>
    //         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //             <span className="navbar-toggler-icon"></span> 
    //             <span><i className="fa fa-bars" aria-hidden="true"></i></span>
    //         </button>

    //         <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //             <ul className="navbar-nav ml-auto">
    //                 <li className="nav-item active">
    //                     <a className="nav-link home">Needs Analysis <span className="sr-only">(current)</span></a>
    //                 </li>
    //                 <li className="nav-item">
    //                     <a className="nav-link athlete" >Corrective Exercises</a>
    //                 </li>
    //                 <li className="nav-item">
    //                     <a className="nav-link">Add Activity</a>
    //                 </li>
    //                 <li className="nav-item dropdown">
    //                     <a className="nav-link dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Athelete</a>
    //                     <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    //                         <a className="dropdown-item" >Change Password</a>
    //                         <NavLink to='/'>
    //                         <a className="dropdown-item" >Logout</a>
    //                         </NavLink>
    //                     </div>
    //                 </li>
    //             </ul>
    //         </div>
    //     </div>
    // </nav>
    // </div>


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
                  <a className="nav-link home" onClick={alrt}  >
                  Needs Analysis  <span className="sr-only"></span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link athlete" onClick={alrt}>
                  Corrective Exercises
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link"  onClick={alrt}>
                  Add Activity
                  </a>
                </li>

                <li className="nav-item dropdown">
                         <a className="nav-link dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Account</a>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                             <a className="dropdown-item" onClick={alrt} >Change Password</a>
                             <NavLink to='/'>
                         <a className="dropdown-item" >Logout</a>
                     </NavLink>
                       </div>
                   </li>

              </ul>
            </div>
          </div>
        </nav>
      </header>

    </div>



  )
}

export default InnerNav
