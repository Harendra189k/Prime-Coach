import React, { useState } from "react";
import Header from "../pages/home/Header";
import Footer from "../pages/home/Footer";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const ResPassCodeCoach = () => {

    const location = useLocation();
  const receivedData = location.state?.data;

    const navigate = useNavigate()
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  function resetPassCoach(){
    axios.post('http://192.168.1.79:5000/api/prime/coach-forgotpassword/getreset', { otp: code, })
    .then(function(response){
      console.log(response)
      navigate("/reset-password-coach")
    })
    .catch(function(err){
      
        console.log(err)
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (code.trim() === "") {
      setError("Please enter the code.");
      return;
    }
    console.log("Code submitted:", code);

    setError("");
  };
  return (
    <div className="login-page-wrapper">
      <Header />
      <section className="login_page">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 m-auto">
              <form onSubmit={handleSubmit} className="login_form">
                <div className="heading text-center">Please Enter Code</div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Code sent on Email"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                  />
                   {error && <p className="text-danger">{error}</p>}
                </div>
                {/* <NavLink to="/reset-password-coach"> */}
                  <button type="submit" className="btn btn-primary" onClick={resetPassCoach}>
                    Submit
                  </button>
                {/* </NavLink> */}
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ResPassCodeCoach;
