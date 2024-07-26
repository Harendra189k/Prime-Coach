import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const ContachUs = () => {

  const navigate = useNavigate()

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  function alt(){
    alert("Our Team Will Contact You back")
  }
  

  function callMessage(){
    axios.post('http://192.168.1.79:5000/api/prime/contact', { name: name,
       email: email,
       message: message})
    .then(function(response){
      alt()
      navigate("/")
      console.log(response)
    })
    .catch(function(error) {
      console.log(error)
    })
  }


  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
      setNameError("");
    } 
    if (name === "email") {
      setEmail(value);
      setEmailError("");
    } 
    else if (name === "message") {
      setMessage(value);
      setMessageError("");
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

    if (!name) {
      setNameError("Please Enter Your Name");
      valid = false;
    } 

    if (!email) {
      setEmailError("Email is required");
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Email is invalid");
      valid = false;
    }

    if (!message) {
      setMessageError("Message is required");
      valid = false;
    } else if (message.length < 15) {
      setMessageError("Message must be at least 15 characters long");
      valid = false;
    }

    return valid;
  };


  return (
    <div className='about-container'>
      <Header />
      <div
      className="contact-us-wrapper"
      style={{
        // marginBottom: "50px",
        // marginTop: "50px",
      }}
    ></div>
      <section className="contact-us">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <h2 className='contact-h2'>Contact Us</h2>
              <p>
                We would love to hear from you! If you have any questions,
                feedback, or inquiries, please fill out the form below, and we
                will get back to you as soon as possible.
              </p>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your name"
                    name="name"
                    value={name}
                    onChange={handleChange}
                  />
                    {nameError && <span className="error">{nameError}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Enter your email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                  />
                   {emailError && <span className="error">{emailError}</span>}
                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="5"
                    placeholder="Enter your message"
                    name="message"
                    value={message}
                    onChange={handleChange}
                  ></textarea>
                   {messageError && <span className="error">{messageError}</span>}
                </div>
                <button type="submit" className="btn-contact btn-primary" onClick={callMessage}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default ContachUs
