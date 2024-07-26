import React, { useState } from "react";
import Header from "../pages/home/Header";
import Footer from "../pages/home/Footer";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";

const ForgetPasswordAthlete = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState("");

  const [emailError, setEmailError] = useState("");

  function forgetPassword(){
    axios.post('http://192.168.1.79:5000/api/prime/athlete-forgotpassword', {email: email})
    .then(function(response){
      navigate("/enter-otp-athlete")
      console.log(response)
    })
    .catch(function(err){
      if (err.response && err.response.status === 401) {
        alert(err.response.data.message);
      }
        console.log(err)
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
      setEmailError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form is valid. Submitting...");
    } else {
      console.log("Form is invalid. Cannot submit.");
    }
  };

  const validateForm = () => {
    let valid = true;

    if (!email) {
      setEmailError("Please Enter Your Email");
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Email is invalid");
      valid = false;
    }

    return valid;
  };

  return (
    <div className="login-page-wrapper">
      <Header />
      <section className="login_page">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 m-auto">
              <form  onSubmit={handleSubmit} className="login_form">
                <div className="heading text-center">Forgot Password-Athlete</div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Please Enter Your Email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                  />
                  {emailError && <span className="error">{emailError}</span>}
                </div>
                {/* <NavLink to='/enter-otp-athlete'> */}

                <button type="submit" className="btn btn-primary" onClick={forgetPassword}>
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

export default ForgetPasswordAthlete;
