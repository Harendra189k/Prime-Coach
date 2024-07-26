import React from 'react'

import rightArrow from '../../utils/images/arrow-right-black-img.png'
import setImg from '../../utils/images/set-img.png'
import screenImg from '../../utils/images/screen-img.png'
import succesImg from '../../utils/images/succes.png'
import winImg from '../../utils/images/win-img.png'
import { NavLink } from 'react-router-dom'



const Banner_Wrapper = () => {
  return (
    <div className="page-wrapper">
       
      <section className="banner_wrapper">
    <div className="banner_content">
        <div className="banner_image d-flex flex-column justify-content-center">
            <div className="container">
                <h1><span>Smart</span> Online Strength & Conditioning Coach</h1>
                <NavLink to='/login'>   
                <a className="start_btn">start now
                     <img src={rightArrow} className="img-fluid" alt=""/></a>
                </NavLink>
            </div>
        </div>
        <div className="how-it-work-wrapper">
            <div className="container">
                <div className="heading_text">
                    <h2>How <span>Prime</span>Coach Works?</h2>
                </div>
                <div className="row text-center">
                    <div className="col-lg-3">
                        <div className="inner_boxes">
                            <figure>
                                <img src={setImg} className="img-fluid" alt=""/>
                            </figure>
                            <div className="details">
                                <div className="detail-title">SELECT</div>
                                <p>Start your training journey by selecting your sport, your preferred training location (gym or home), the number of weekly sessions and the duration of your programme.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="inner_boxes">
                            <figure>
                                <img src={screenImg} className="img-fluid" alt=""/>
                            </figure>
                            <div className="details">
                                <div className="detail-title">SCREEN</div>
                                <p>Perform self-screening so our smart technology can identify any movement dysfunction. You’ll be assigned a tailored pre-training corrective programme based on your screening result.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="inner_boxes">
                            <figure>
                                <img src={succesImg} className="img-fluid" alt=""/>
                            </figure>
                            <div className="details">
                                <div className="detail-title">TRAIN HARDER</div>
                                <p>Become stronger, fitter and faster than ever before with our unique, sports specific programme tailored to your individual needs. Get in touch with your personal coach to check your progress and form with the Feedback setting.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="inner_boxes">
                            <figure>
                                <img src={winImg} className="img-fluid" alt=""/>
                            </figure>
                            <div className="details">
                                <div className="detail-title">PERFORM</div>
                                <p>Take your training to the next level so you perform at your best. Become a better athlete with Prime Coach.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    </div>
  )
}

export default Banner_Wrapper
