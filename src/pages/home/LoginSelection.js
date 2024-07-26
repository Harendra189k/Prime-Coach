import React from 'react'
import { NavLink } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const LoginSelection = () => {
  return (
    <div>
        <Header />
      <section className="selection-wrapper">
    <div className="container">
        <div className="row">
            <div className="col-lg-5 col-md-5 offset-md-1">
                <a>
                            <NavLink to="/login-athlete" >
                    <div className="athelete-login px-lg-4">
                        <figure>
                            <img src="athe.jpg" className="img-fluid-at" alt=""/>
                            <button className='login-selection-coach-btn'>Login as Athelete</button>
                        </figure>
                    </div>
                            </NavLink>
                </a>
            </div>
            <div className="col-lg-5 col-md-5">
                <a>
                            <NavLink to="/login-coach" >
                    <div className="coach-login px-lg-4">
                        <figure>
                            <img src="coach.jpg" className="img-fluid-co" alt="" />
                            <button className='login-selection-coach-btn' >Login as Coach</button>
                        </figure>
                    </div>
                            </NavLink>
                </a>
            </div>
        </div>
    </div>
</section>
<Footer />
    </div>
  )
}

export default LoginSelection
