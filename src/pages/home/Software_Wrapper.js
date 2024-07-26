import React from 'react'
import ScrennShotImg from '../../utils/images/screenshots_combined_img.png'

const Software_Wrapper = () => {
  return (
    <div className="page-wrapper">
      <section id="software_wrapper">
    <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <div className="left_side_img">
                    <figure>
                        <img src={ScrennShotImg} className="img-fluid" alt=""/>
                    </figure>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="right_side_text">
                    Our unique software is designed with athletes like you in mind. Our easy to follow, individually tailored programmes will help you to take your performance to the next level.
                </div>
            </div>
        </div>
    </div>
</section>
    </div>
  )
}

export default Software_Wrapper
