import React from 'react'
import { NavLink } from 'react-router-dom'


const Coach_Athelete_Wrapper = () => {
  return (
    <div >
      
      <section id="coach-athelete_wrapper">
    <div className="container-fluid p-0">
        <div className="row m-0">
            <div className="col-lg-6 p-0 d-flex flex-column">
                <div className="athelete-section h-100">
                    <h2>For Athelete</h2>
                    <p>Get fitter, stronger & faster using our intelligent online software that offers individually tailored strength & conditioning training plans for any athlete. Our programmes are designed by accredited strength & conditioning coaches with years of experience. Programmes are tailored specifically to each athlete’s training needs & goals covering a range of disciplines for amateur, semi-professional & professional athletes.</p>
                    <NavLink to='for-athelets' className="learn_more">Learn More</NavLink>
                </div>
            </div>
            <div className="col-lg-6 p-0 d-flex flex-column">
                <div className="coach-section h-100">
                    <h2>For Coaches</h2>
                    <p>Help your athletes train harder and perform better with our smart strength & conditioning training plans. With programmes designed by expert strength & conditioning coaches, you can create a training plan that can be tailored specifically to each of your athlete’s training needs & goals. Our programmes cover a range of sports for amateur, semi-professional & professional athletes.</p>
                    <NavLink to='for-coaches' className="learn_more">Learn More</NavLink>
                </div>
            </div>
        </div>
    </div>
</section>

    </div>
  )
}

export default Coach_Athelete_Wrapper
