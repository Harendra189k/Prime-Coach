import React from 'react'
import laptopTeamBuilder from "../utils/images/laptop-team-builder-img.png"
import LaptopProgrameBuilder from "../utils/images/laptop-programe-builder-img.png"
import TabletImg from "../utils/images/tablet-img.png"
import LaptopTesting from "../utils/images/laptop-testing-img.png"
import Header from '../pages/home/Header'
import Footer from '../pages/home/Footer'
import Software_Wrapper from '../pages/home/Software_Wrapper'

const ForCoach = () => {
  return (
    <div className="athlete_page_wrapper">
        <Header />
    <section className="banner_wrapper coaches-banner">
        <div className="banner_content d-flex flex-column justify-content-center">
            <div className="container">
               <div className="row">
                   <div className="col-lg-7">
                        <h1><span>For</span> Coaches</h1>
                        <p>Smart online strength and conditioning support for all types of coaches across a range of sports.</p>
                   </div>
               </div>
            </div>
        </div>
        <div className="individual_athlete team_build_wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-6">
                        <div className="athlete_left_img">
                            <figure className="m-0">
                                <img src={laptopTeamBuilder} className="img-fluid" alt="laptop-team-builder-img"/>
                            </figure>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-6">
                        <div className="athlete_content text-right">
                            <h2>Team <span>Builder</span></h2>
                            <p>Effortlessly build your coaching team and team of players with Prime Coach. Build your coaching team and assign them with custom roles and permissions. Plus create accounts for each team player and add their sports specific details, including their position played, fitness level, athletic experience and more.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!------------banner_wrapper END---------------> */}
    <section className="team_wrapper programm_build_wrapper">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6">
                    <div className="team_content pt-lg-4">
                        <h2>Programme <span>Builder</span></h2>
                        <p>Create your own strength and training programmes based on over 500 videos in the Prime Coach Exercise Library, or follow our pre-set performance programmes created by experienced sports and strengthening coaches.</p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="team_side_img">
                        <figure className="m-0">
                            <img src={LaptopProgrameBuilder} className="img-fluid" alt=""/>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    
    <section className="youth_athlete_wrapper athlete_progress_wrapper">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-8">
                    <div className="athlete-img">
                        <figure>
                            <img src={TabletImg} className="img-fluid" alt=""/>
                        </figure>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4">
                    <div className="athlete-content pt-lg-5 text-right">
                        <h2>Track Your <span>Athletes Progress</span></h2>
                        <p>Know exactly how your team members are tracking with Prime Coach. Access athlete's reports such as their well-being scale, training details, training intensity, and volume and number of performed or engaged sessions to monitor their progress. Easily share reports with other coaches to ensure the whole coaching team’s in the loop. Also use the leader board to highlight the best performer within the team at any given time.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
   
    
    <section className="team_wrapper testing_wrapper">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6">
                    <div className="team_content pt-lg-4">
                        <h2>Testing</h2>
                        <p>Test your team’s performance and easily adjust training programmes based on results. With Prime Coach, you can easily design your own testing protocols for your teams, as well as continuously monitor results and compare them with previous reports using our Testing Reports.</p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="team_side_img">
                        <figure className="m-0">
                            <img src={LaptopTesting} className="img-fluid" alt=""/>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Software_Wrapper />
      <Footer />
    </div>
  )
}

export default ForCoach
