import React from 'react'
import Header from '../pages/home/Header'
import Footer from '../pages/home/Footer'
// import { NavLink } from 'react-router-dom'

const Pricing = () => {

    function alertsel(){
        alert('Coming Soon')
    }

  return (
    <div className="membership-page-wrapper">
        <Header />
    <section className="type_of_membership">
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <div className="member_type">
                        <h2>Free Trial</h2>
                        <ul>
                            <li>- Start your 14 day free trial – also maybe add some information about if they don’t cancel free trial in 14days they will be changed</li>
                        </ul>
                        <div className="link_btn">
                           {/* <NavLink to='/athlete-dasboard' className="btn btn-primary"> */}
                           <button className="btn btn-primary"  onClick={alertsel}>Select</button> 
                             {/* </NavLink> */}
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="member_type">
                        <h2>Standard Membership</h2>
                        <ul>
                            <li>Standard Membership (£8.99 per month)</li>
                            <li>-          Payments will be taken monthly for the length of the programme (12, 36 or 48 weeks)</li>
                            <li>-          Full access to strength and conditioning programmes for the duration of the programme and number of sessions per week</li>
                            <li>-          Strength and conditioning programmes for the gym and home</li>
                            <li>-          Programmes include detailed information about the selected sport (needs analysis), common injuries, fitness testing protocols, self-screening protocols, warm-up protocols and recovery protocols</li>
                            <li>-          Additional corrective programme based on the self-screening results </li>
                            <li>-          Four video feedback uploads per month (film yourself doing an exercise and upload it to your profile which will be reviewed by a coach who will provide feedback within 24-hours)  </li>
                        </ul>
                        <div className="link_btn">
                        {/* <NavLink to='/athlete-dasboard' className="btn btn-primary"> */}
                        <button className="btn btn-primary"  onClick={alertsel}>Select</button> 
                          {/* </NavLink> */}
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="member_type">
                        <h2>Prime Membership</h2>
                        <ul>
                            <li>Prime Membership (£19.99 per month)</li>
                            <li>-          Payments will be taken monthly for the length of the programme (12, 36 or 48 weeks)</li>
                            <li>-          Full access to strength and conditioning programmes for the duration of the programme and number of sessions per week</li>
                            <li>-          Strength and conditioning programmes for the gym and home</li>
                            <li>-          Programmes include detailed information about the selected sport (needs analysis), common injuries, fitness testing protocols, self-screening protocols, warm-up protocols and recovery protocols</li>
                            <li>-          Additional corrective programme based on the self-screening results  </li>
                            <li>Sixteen video feedback uploads per month (film yourself doing an exercise and upload it to your profile which will be reviewed by a coach who will provide feedback within 24-hours) </li>
                        </ul>
                        <div className="link_btn">
                        {/* <NavLink to='/athlete-dasboard' className="btn btn-primary"> */}
                        <button className="btn btn-primary"  onClick={alertsel}>Select</button>  
                         {/* </NavLink> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer />
</div>
  )
}

export default Pricing
