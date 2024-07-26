import React, { useState } from 'react';
import Header from '../pages/home/Header';
import Footer from '../pages/home/Footer';
import { a } from './Sports.constant';
import { NavLink } from 'react-router-dom';
const New = () => {

    const [showAllSports, setShowAllSports] = useState(false);

    const toggleSportsDisplay = () => {
      setShowAllSports(!showAllSports);
    };
  return (
    <div>
    <section className="">
      <div className="container">
        <div className="heading text-black text-center ">
          <h2>Select Sport</h2>
        </div>
        <div className="inner_allsport">
          <div className="row text-center">
           
            {a.slice(0, showAllSports ? a.length : 3).map((item, index) => (
              <div className="col-lg-4 col-md-4" key={index}>
                <NavLink to="/pricing">
                  <div className="game_play">
                    <div className="sports_title">{item.title}</div>
                    <figure>
                      <img src={item.img} className="img-fluid" alt={item.title} />
                    </figure>
                  </div>
                </NavLink>
              </div>
            ))}
          </div>

          {!showAllSports ? (
            <div className="text-center mt-4">
              <button className="btn-new btn-primary" onClick={toggleSportsDisplay}>
                View More
              </button>
            </div>
          ) : (
            <div className="text-center mt-4">
              <button className="btn-new btn-secondary" onClick={toggleSportsDisplay}>
                View Less
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  </div>
  )
}

export default New
