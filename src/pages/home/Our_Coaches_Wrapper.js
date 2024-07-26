import React from 'react'
import PiotrCoach from '../../utils/images/piotr-coach.png'
import JamesCoach from '../../utils/images/james-coach.png'
import JoshResizedCoach from '../../utils/images/josh-resized-coach.png'
import { NavLink } from 'react-router-dom'

const Our_Coaches_Wrapper = () => {
  return (
    <div className= "page-wrapper">
      
      <section id="our-coaches-wrapper">
    <div className="container">
        <div className="heading mb-4">
            <h2>Our Coaches</h2>
            <p>Created by our leading strength and conditioning coaches, our programmes are designed to help you reach your full athletic potential. You’ll be assigned an expert coach in your field who’ll provide advice and support to help you enhance your performance.</p>
        </div>
        <div className="row">
            <div className="col-lg-4 col-md-4">
                <div className="coach_details">
                    <figure>
                        <img src={PiotrCoach} className="img-fluid" alt="piotr-coach"/>
                    </figure>
                    <div className="coach-name">
                        Piotr Golaszczyk
                    </div>
                    <div className="role">
                        Founder | Strength & Conditioning Coach
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-4">
                <div className="coach_details">
                    <figure>
                        <img src={JamesCoach} className="img-fluid" alt="james-coach"/>
                    </figure>
                    <div className="coach-name">
                        James Meadows
                    </div>
                    <div className="role">
                        Strength & Conditioning Coach
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-4">
                <div className="coach_details">
                    <figure>
                    <img src={JoshResizedCoach} className="img-fluid" alt="josh-resized-coach"/>
                    </figure>
                    <div className="coach-name">
                        Josh Gooden
                    </div>
                    <div className="role">
                        Strength & Conditioning Coach
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="trial-wrapper">
        <div className="container">
            <div className="inner-text">
                Start your
                <span>14 day Free Trial</span>

                <NavLink to='/free-trials' className="start_trial_btn">Start Now <img src="images/arrow-right-blue-img.png" className="img-fluid" alt=""/></NavLink>
            </div>
        </div>
    </div>
</section>

    </div>
  )
}

export default Our_Coaches_Wrapper
