import React from 'react'
import NewsletterIcon from '../../utils/images/newsletter_icon.png'
import FbIcon from '../../utils/images/fb_icon.png' 
import TwitterIcon from '../../utils/images/twitter_icon.png' 
import InstaIcon from '../../utils/images/insta_icon.png' 
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <footer className="footer">
    <div className="container text-center">
        <div className="row">
            <div className="col-lg-3">
                <div className="footer_menu">
                    <h5>Information</h5>
                    <ul>
                        <li>
                            <NavLink to='/privacy-policy'>
                            <a>Privacy Policy</a>
                            </NavLink>
                        </li>
                        <li>
                        <NavLink to='/notfound'>
                            <a>Cookie Policy</a>
                            </NavLink>
                        </li>
                        <li>
                        <NavLink to='/notfound'>
                            <a>Terms & Conditions</a>
                            </NavLink>
                        </li>
                        <li>
                        <NavLink to='/notfound'>
                            <a>FAQs</a>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="footer_menu">
                    <h5>Follow us</h5>
                    <ul className="social_links">
                        <li>
                        <NavLink to='/notfound'>
                            <a><img src={NewsletterIcon} className="img-fluid" alt=""/> <span>Newsletter</span></a>
                            </NavLink>
                        </li>
                        <li>
                        <NavLink to='/notfound'>
                            <a><img src={FbIcon} className="img-fluid" alt=""/> <span>Facebook</span></a>
                            </NavLink>
                        </li>
                        <li>
                        <NavLink to='/notfound'>
                            <a><img src={TwitterIcon} className="img-fluid" alt=""/> <span>Twitter</span></a>
                            </NavLink>
                        </li>
                        <li>
                        <NavLink to='/notfound'>
                            <a><img src={InstaIcon} className="img-fluid" alt=""/> <span>Instagram</span></a>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="footer_menu">
                    <h5>Get in Touch</h5>
                    <NavLink to='/contactus'>

                    <button type="button" className="btn btn-default contact_btn">contact us <i className="fa fa-envelope-o" aria-hidden="true"></i></button>
                    </NavLink>
                </div>
            </div>
        </div>
    </div>
</footer>
    </div>
  )
}

export default Footer
